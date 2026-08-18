import re
from collections import Counter

def parse():
    with open('base de datos vri.sql', encoding='utf8') as f:
        lines = f.readlines()

    grupos_docs = set()
    semilleros_docs = set()
    
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
                doc_id = matches.group(2)
                year = matches.group(4)
                
                # Check if it has a published_at value.
                # published_at is the 12th column in grupos and 11th in semilleros.
                # A simpler way: just count unique document_id
                if current_table == "grupos":
                    if doc_id not in grupos_docs:
                        grupos_docs.add(doc_id)
                        grupos_years.append(year)
                elif current_table == "semilleros":
                    if doc_id not in semilleros_docs:
                        semilleros_docs.add(doc_id)
                        semilleros_years.append(year)

    print("GRUPOS Unique:", len(grupos_docs))
    print("GRUPOS by year:", Counter(grupos_years))
    print("SEMILLEROS Unique:", len(semilleros_docs))
    print("SEMILLEROS by year:", Counter(semilleros_years))

if __name__ == '__main__':
    parse()
