import re
import json

def parse():
    with open('base de datos vri.sql', encoding='utf8') as f:
        content = f.read()

    # Split by INSERT INTO
    inserts = content.split("INSERT INTO `")
    
    grupos_data = []
    semilleros_data = []
    
    for block in inserts[1:]:
        table_name = block.split('`')[0]
        if table_name == 'grupos_reconocidos':
            # Extract values
            values_str = block[block.find('VALUES ')+7:block.find(';')]
            # basic split by "),\n("
            rows = values_str.split("),\n(")
            for row in rows:
                # very simple extraction: split by ", '" or similar
                # Just find the 4-digit years in the row
                years = re.findall(r"'(\d{4})'", row)
                if years:
                    grupos_data.append(years[0])
                    
        elif table_name == 'semilleros_reconocidos':
            # Extract values
            values_str = block[block.find('VALUES ')+7:block.find(';')]
            rows = values_str.split("),\n(")
            for row in rows:
                years = re.findall(r"'(\d{4})'", row)
                if years:
                    semilleros_data.append(years[0])
                    
    from collections import Counter
    print("GRUPOS:")
    print(Counter(grupos_data))
    
    print("SEMILLEROS:")
    print(Counter(semilleros_data))

if __name__ == '__main__':
    parse()
