import re

def parse():
    with open('base de datos vri.sql', encoding='utf8') as f:
        content = f.read()

    inserts = content.split("INSERT INTO `")
    
    for block in inserts[1:]:
        table_name = block.split('`')[0]
        if table_name in ('grupos_reconocidos', 'semilleros_reconocidos'):
            print(f"\nTABLE: {table_name}")
            
            # Extract everything after VALUES
            val_idx = block.find('VALUES ')
            if val_idx == -1: continue
            
            values_str = block[val_idx+7:block.find(';', val_idx)]
            
            # Find all tuples: (id, 'hash', 'something', 'year', ...)
            # We can just look for the pattern: `(number, 'string', 'string', 'year'`
            matches = re.findall(r"\((\d+),\s*'[^']*',\s*'[^']*',\s*'(\d{4})'", values_str)
            print(f"Total parsed with regex 1: {len(matches)}")
            
            from collections import Counter
            years = [m[1] for m in matches]
            print(Counter(years))
            
            # Let's print a sample of the raw string to see what the data actually looks like
            print("SAMPLE:")
            print(values_str[:300])

if __name__ == '__main__':
    parse()
