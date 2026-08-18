import re

def parse():
    with open('base de datos vri.sql', encoding='utf8') as f:
        content = f.read()

    inserts = content.split("INSERT INTO `")
    
    for block in inserts[1:]:
        table_name = block.split('`')[0]
        if table_name in ('grupos_reconocidos', 'semilleros_reconocidos'):
            print(f"\nTABLE: {table_name}")
            print(block[:300])

if __name__ == '__main__':
    parse()
