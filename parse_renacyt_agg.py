import re
from collections import Counter

def parse():
    with open('base de datos vri.sql', encoding='utf8') as f:
        lines = f.readlines()

    doc_ids = set()
    niveles = Counter()
    facultades = Counter()
    escuelas = Counter()
    
    current_table = False
    
    for line in lines:
        if line.startswith("INSERT INTO `docentes_renacyts`"):
            current_table = True
        elif line.startswith("INSERT INTO"):
            current_table = False
            
        if current_table and line.startswith("\t("):
            matches = re.match(r"\t\((\d+),\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)'", line)
            if matches:
                doc_id = matches.group(2)
                nombre = matches.group(3)
                nivel = matches.group(4)
                estado = matches.group(5)
                facultad = matches.group(6).strip()
                escuela = matches.group(7).strip()
                
                # Check for uniqueness
                if doc_id not in doc_ids:
                    doc_ids.add(doc_id)
                    niveles[nivel.strip()] += 1
                    facultades[facultad.title()] += 1
                    escuelas[escuela.title()] += 1

    # Format the data
    output = "\n// --- NEW DATA ADDED BY SCRIPT ---\n"
    
    output += "export const renacytPorNivel2026 = [\n"
    for k, v in niveles.most_common():
        name = k.title()
        if name == "Nivel Iv ": name = "Nivel Iv"
        output += f"  {{ name: '{name}', value: {v} }},\n"
    output += "];\n\n"
    
    output += "export const renacytPorFacultad2026 = [\n"
    for k, v in facultades.most_common():
        output += f"  {{ name: '{k}', investigadores: {v} }},\n"
    output += "];\n\n"
    
    output += "export const renacytPorEscuela2026 = [\n"
    for k, v in escuelas.most_common():
        output += f"  {{ name: '{k}', investigadores: {v} }},\n"
    output += "];\n"
    
    # Let's fix some duplication if needed (like "Nivel Iv " vs "Nivel Iv")
    # Actually let's do that right here
    # Well, it's fine.

    with open('src/data/data.js', 'a', encoding='utf8') as f:
        f.write(output)

if __name__ == '__main__':
    parse()
