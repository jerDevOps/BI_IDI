import re
import os
import json

def parse_sql_file(filepath, table_name):
    if not os.path.exists(filepath):
        return []
    with open(filepath, 'r', encoding='utf8') as f:
        data = f.read()

    match = re.search(f"INSERT INTO `{table_name}`.*?VALUES \n(.*?);", data, re.S)
    if not match:
        return []

    values_str = match.group(1)
    values_str = "[" + values_str.replace('\n', '').replace('\t', '') + "]"
    values_str = values_str.replace("NULL", "None")
    
    # Quick fix for dates and strings with unescaped characters or issues
    # A safer way to parse is using ast.literal_eval, but SQL might have syntax not in Python.
    try:
        import ast
        rows = ast.literal_eval(values_str)
        return rows
    except Exception as e:
        print(f"Error parsing {table_name}: {e}")
        return []

if __name__ == '__main__':
    semilleros_rec = parse_sql_file('bd_sql/semillero_reconocido.sql', 'semilleros_reconocidos')
    semilleros_fin = parse_sql_file('bd_sql/semillero_financiado.sql', 'semilleros_financiados')
    grupos_rec = parse_sql_file('bd_sql/grupo_reconocido.sql', 'grupos_reconocidos')
    grupos_fin = parse_sql_file('bd_sql/grupo_financiado.sql', 'grupos_financiados')
    institutos_rec = parse_sql_file('bd_sql/instituto_reconocido.sql', 'institutos_reconocidos')
    institutos_fin = parse_sql_file('bd_sql/instituto_financiado.sql', 'institutos_financiados')
    
    print(f"Semilleros Reconocidos: {len(semilleros_rec)}")
    print(f"Semilleros Financiados: {len(semilleros_fin)}")
    print(f"Grupos Reconocidos: {len(grupos_rec)}")
    print(f"Grupos Financiados: {len(grupos_fin)}")
    print(f"Institutos Reconocidos: {len(institutos_rec)}")
    print(f"Institutos Financiados: {len(institutos_fin)}")
