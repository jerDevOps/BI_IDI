import json
import re

def run():
    with open('parsed_sql.json', 'r', encoding='utf8') as f:
        data = json.load(f)

    with open('src/data/data.js', 'r', encoding='utf8') as f:
        js_content = f.read()

    marker = "export const feduPorEscuela = ["
    idx = js_content.find(marker)
    if idx == -1:
        print("Marker not found")
        return
        
    comment_idx = js_content.rfind("// ------------------------------------------------------------------", 0, idx)
    kept_js = js_content[comment_idx:]
    
    # Extract original kpiPorAnio to preserve renacyt and fedu
    orig_kpi_match = re.search(r"export const kpiPorAnio = \[(.*?)\];", js_content, re.S)
    renacyt_dict = {}
    fedu_dict = {}
    if orig_kpi_match:
        for line in orig_kpi_match.group(1).split('\n'):
            match_anio = re.search(r"anio:\s*(\d+)", line)
            match_ren = re.search(r"renacyt:\s*(\d+)", line)
            match_fedu = re.search(r"fedu:\s*(\d+)", line)
            if match_anio:
                anio = match_anio.group(1)
                renacyt_dict[anio] = match_ren.group(1) if match_ren else "0"
                fedu_dict[anio] = match_fedu.group(1) if match_fedu else "0"

    # Extract original institutosPorFacultad
    orig_inst_fac_match = re.search(r"export const institutosPorFacultad = \[(.*?)\];", js_content, re.S)
    inst_fac = ""
    if orig_inst_fac_match:
        inst_fac = "export const institutosPorFacultad = [" + orig_inst_fac_match.group(1) + "];\n\n"
    else:
        inst_fac = "export const institutosPorFacultad = [];\n\n"

    sr = data['semilleros_rec']
    gr = data['grupos_rec']
    ir = data['institutos_rec']
    
    semi_by_year = {}
    for s in sr:
        year = s[3]
        if year not in semi_by_year:
            semi_by_year[year] = []
        obj = {
            'n': len(semi_by_year[year]) + 1,
            'nombre': s[2],
            'facultad': s[4],
            'ep': s[5]
        }
        semi_by_year[year].append(obj)

    grupos_js = []
    for i, g in enumerate(gr):
        grupos_js.append({
            'id': i+1,
            'nombre': g[2],
            'facultad': g[4],
            'ep': g[5],
            'anioReconocimiento': g[3]
        })
        
    institutos_js = []
    for i, ins in enumerate(ir):
        fac = ins[11] if len(ins) > 11 else 'ND'
        institutos_js.append({
            'id': i+1,
            'nombre': ins[2],
            'responsable': ins[3],
            'anioCreacion': ins[4],
            'facultad': fac
        })

    out = "// ============================================================\n"
    out += "// DATOS EXTRAÍDOS DE SQL OFICIAL\n"
    out += "// ============================================================\n\n"
    
    out += "export const kpiPorAnio = [\n"
    for year in ['2021','2022','2023','2024','2025','2026']:
        s_count = len(semi_by_year.get(year, []))
        g_count = len([g for g in grupos_js if str(g['anioReconocimiento']) == year])
        i_count = len([i for i in institutos_js if str(i['anioCreacion']) == year])
        ren = renacyt_dict.get(year, "0")
        fed = fedu_dict.get(year, "0")
        out += f"  {{ anio: {year}, institutos: {i_count}, semilleros: {s_count}, grupos: {g_count}, renacyt: {ren}, fedu: {fed} }},\n"
    out += "];\n\n"
    
    out += "export const institutos = " + json.dumps(institutos_js, ensure_ascii=False, indent=2) + ";\n\n"
    out += inst_fac
    out += "export const grupos = " + json.dumps(grupos_js, ensure_ascii=False, indent=2) + ";\n\n"
    
    out += "export const gruposEvolucion = [\n"
    for year in ['2023','2024','2025','2026']:
        g_count = len([g for g in grupos_js if str(g['anioReconocimiento']) == year])
        out += f"  {{ anio: {year}, total: {g_count}, nuevos: {g_count}, proyectosGanadores: 0 }},\n"
    out += "];\n\n"

    out += "export const semillerosEvolucion = [\n"
    for year in ['2023','2024','2025','2026']:
        s_count = len(semi_by_year.get(year, []))
        out += f"  {{ anio: {year}, total: {s_count}, nuevos: {s_count}, concursoGanadores: 0 }},\n"
    out += "];\n\n"

    sf = data['semilleros_fin']
    gf = data['grupos_fin']

    semilleros_fin_js = []
    for i, s in enumerate(sf):
        semilleros_fin_js.append({
            'id': i+1,
            'nombre': s[2],
            'titulo': s[16] if len(s) > 16 and s[16] else s[2], # Fallback to name if title is empty
            'facultad': s[4] if len(s) > 4 else 'ND',
            'ep': s[5] if len(s) > 5 else 'ND',
            'monto': float(s[6]) if len(s) > 6 and s[6] else 0.0,
            'anio': int(s[3]) if len(s) > 3 and s[3] else 2024
        })

    grupos_fin_js = []
    for i, g in enumerate(gf):
        fac = g[13] if len(g) > 13 else 'ND'
        grupos_fin_js.append({
            'id': i+1,
            'nombre': g[2],
            'titulo': g[17] if len(g) > 17 and g[17] else g[2], # Fallback to name if title is empty
            'facultad': fac,
            'ep': g[4] if len(g) > 4 else 'ND',
            'monto': float(g[6]) if len(g) > 6 and g[6] else 0.0,
            'anio': int(g[3]) if len(g) > 3 and g[3] else 2024
        })

    # Strip the old semillerosFinanciamiento and gruposFinanciamiento from kept_js
    old_fin_idx = kept_js.find("export const semillerosFinanciamiento = [")
    if old_fin_idx != -1:
        kept_js = kept_js[:old_fin_idx]

    for year, items in semi_by_year.items():
        if year in ['2023', '2024', '2025', '2026']:
            out += f"export const semilleros{year} = " + json.dumps(items, ensure_ascii=False, indent=2) + ";\n\n"
            
    out += "export const semillerosPorFacultad2025 = [];\n\n"
    out += "export const semillerosFinanciamiento = " + json.dumps(semilleros_fin_js, ensure_ascii=False, indent=2) + ";\n\n"
    out += "export const gruposFinanciamiento = " + json.dumps(grupos_fin_js, ensure_ascii=False, indent=2) + ";\n\n"
    
    out += kept_js
    
    with open('src/data/data.js', 'w', encoding='utf8') as f:
        f.write(out)
        
    print("data.js successfully regenerated")

if __name__ == '__main__':
    run()
