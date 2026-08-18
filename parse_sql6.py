import re
from collections import Counter

def parse():
    with open('base de datos vri.sql', encoding='utf8') as f:
        lines = f.readlines()

    grupos_years = []
    semilleros_years = []
    
    current_table = None
    
    for line in lines:
        if line.startswith("INSERT INTO `grupos_reconocidos`"):
            current_table = "grupos"
        elif line.startswith("INSERT INTO `semilleros_reconocidos`"):
            current_table = "semilleros"
        elif line.startswith("INSERT INTO"):
            current_table = None
            
        if current_table and line.startswith("\t("):
            # Parse the tuple
            # Example: 	(192, 't1xcsg', 'MEDENF', '2026', ...
            matches = re.match(r"\t\((\d+),\s*'([^']*)',\s*'([^']*)',\s*'(\d{4})'", line)
            if matches:
                year = matches.group(4)
                if current_table == "grupos":
                    grupos_years.append(year)
                elif current_table == "semilleros":
                    semilleros_years.append(year)

    print("GRUPOS:", Counter(grupos_years))
    print("SEMILLEROS:", Counter(semilleros_years))

if __name__ == '__main__':
    parse()
