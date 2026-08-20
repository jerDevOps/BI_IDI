import os
import re
import json

def extract_tuples(file_path):
    if not os.path.exists(file_path): return []
    with open(file_path, 'r', encoding='utf8') as f:
        content = f.read()
    
    insert_match = re.search(r"INSERT INTO `[^`]+` \([^)]+\) VALUES\s*\n(.*);", content, re.S)
    if not insert_match:
        return []
    
    values_text = insert_match.group(1)
    
    # regex to extract each tuple
    # Tuples are inside (...) and separated by ,\n
    # Because there are newlines inside strings, we should parse carefully.
    
    # A simple trick to safely parse SQL values is to use a python SQL parser or a custom regex.
    # Let's try splitting by "\n\t("
    
    records = []
    
    tuples_str = values_text.strip()
    if tuples_str.startswith('('):
        tuples_str = tuples_str[1:]
    if tuples_str.endswith(')'):
        tuples_str = tuples_str[:-1]
        
    parts = re.split(r'\),\s*\(', tuples_str)
    for p in parts:
        
        # We just need some fields, like nombre, anio, facultad, escuela, responsable
        # Let's use ast.literal_eval
        try:
            import ast
            tup_str = "(" + p.replace("NULL", "None") + ")"
            tup = ast.literal_eval(tup_str)
            records.append(tup)
        except Exception as e:
            matches = re.findall(r"'([^']*)'|(\d+)|None", p)
            clean_tup = [m[0] or m[1] or '' for m in matches]
            records.append(clean_tup)
            
    # Deduplicate by document_id (index 1)
    unique_records = {}
    for r in records:
        if len(r) > 1:
            doc_id = str(r[1]).strip()
            # If doc_id is empty or None, fallback to nombre (index 2)
            if not doc_id or doc_id == 'None':
                doc_id = str(r[2]).strip()
            
            # Keep the one with highest id, or just overwrite
            unique_records[doc_id] = r
            
    return list(unique_records.values())

def build():
    sr = extract_tuples('bd_sql/semillero_reconocido.sql')
    sf = extract_tuples('bd_sql/semillero_financiado.sql')
    gr = extract_tuples('bd_sql/grupo_reconocido.sql')
    gf = extract_tuples('bd_sql/grupo_financiado.sql')
    ir = extract_tuples('bd_sql/instituto_reconocido.sql')
    ifi = extract_tuples('bd_sql/instituto_financiado.sql')
    
    # Exclude specific records
    ignore_names = ['INSTITUTO DE INVESTIGACIÓN Y GESTIÓN PÚBLICA (IIGEP)']
    ir = [x for x in ir if x[2] not in ignore_names]
    ifi = [x for x in ifi if x[2] not in ignore_names]
    
    out = {
        'semilleros_rec': sr,
        'semilleros_fin': sf,
        'grupos_rec': gr,
        'grupos_fin': gf,
        'institutos_rec': ir,
        'institutos_fin': ifi
    }
    
    with open('parsed_sql.json', 'w', encoding='utf8') as f:
        json.dump(out, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    build()
