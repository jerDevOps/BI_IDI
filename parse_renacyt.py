import re
from collections import Counter
import json

def parse():
    with open('base de datos vri.sql', encoding='utf8') as f:
        content = f.read()

    inserts = content.split("INSERT INTO `")
    
    facultad_counter = Counter()
    escuela_counter = Counter()
    nivel_counter = Counter()
    
    # We want to find the latest data. If there are multiple rows for the same researcher, 
    # we might need to deduplicate by document_id. Let's assume we do.
    doc_ids = set()
    
    for block in inserts[1:]:
        table_name = block.split('`')[0]
        if table_name == 'docentes_renacyts':
            # Extract everything after VALUES
            val_idx = block.find('VALUES ')
            if val_idx == -1: continue
            
            values_str = block[val_idx+7:block.find(';', val_idx)]
            
            # The structure is likely:
            # (id, 'document_id', 'nombre', 'facultad', 'escuela', 'nivel', ... )
            # Or similar. Let's just look at the first few rows to understand the structure.
            print("SAMPLE ROW:")
            print(values_str[:400])
            break

if __name__ == '__main__':
    parse()
