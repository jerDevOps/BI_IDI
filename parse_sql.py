import re
from collections import Counter

def parse_sql():
    with open('base de datos vri.sql', encoding='utf8') as f:
        data = f.read()

    # Find the insert block for grupos_reconocidos
    grupos_match = re.search(r"INSERT INTO `grupos_reconocidos` VALUES \n(.*?);", data, re.S)
    if grupos_match:
        grupos_values = grupos_match.group(1)
        # Regex to find tuples: (id, ... )
        # A rough heuristic: split by "),("
        # We really just need the year. Based on the excerpt earlier:
        # (192, 'hash', 'MEDENF', '2026', ...
        # Year seems to be the 4th item.
        
        # We can extract all 4-digit years that look like they are in the year column.
        # But a robust way is to just parse the tuples.
        import ast
        
        grupos_tuples_str = "[" + grupos_values.replace('\n', '').replace('\t', '') + "]"
        # This might fail if there are NULLs without quotes.
        grupos_tuples_str = grupos_tuples_str.replace("NULL", "None")
        try:
            grupos_list = eval(grupos_tuples_str)
            print("GRUPOS columns:", len(grupos_list[0]) if grupos_list else 0)
            years = [str(g[3]) for g in grupos_list if len(g) > 3]
            print("GRUPOS by year:", Counter(years))
        except Exception as e:
            print("Error parsing grupos:", e)

    # Find the insert block for semilleros_reconocidos
    sem_match = re.search(r"INSERT INTO `semilleros_reconocidos` VALUES \n(.*?);", data, re.S)
    if sem_match:
        sem_values = sem_match.group(1)
        sem_tuples_str = "[" + sem_values.replace('\n', '').replace('\t', '') + "]"
        sem_tuples_str = sem_tuples_str.replace("NULL", "None")
        try:
            sem_list = eval(sem_tuples_str)
            print("SEMILLEROS columns:", len(sem_list[0]) if sem_list else 0)
            years = [str(s[3]) for s in sem_list if len(s) > 3]
            print("SEMILLEROS by year:", Counter(years))
        except Exception as e:
            print("Error parsing semilleros:", e)

if __name__ == '__main__':
    parse_sql()
