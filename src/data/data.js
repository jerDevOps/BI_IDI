// ============================================================
// DATOS EXTRAÍDOS DE LA MEMORIA ANUAL 2021-2026
// Universidad Nacional del Altiplano - Vicerrectorado de Investigación
// Instituto de Investigación
// ============================================================

// ------------------------------------------------------------------
// KPIs RESUMEN POR AÑO
// ------------------------------------------------------------------
export const kpiPorAnio = [
  { anio: 2021, institutos: 10, semilleros: 0,  grupos: 0,  renacyt: 124,   fedu: 0   },
  { anio: 2022, institutos: 22, semilleros: 0,  grupos: 0,  renacyt: 159,   fedu: 0   },
  { anio: 2023, institutos: 33, semilleros: 34, grupos: 10, renacyt: 181,  fedu: 417 },
  { anio: 2024, institutos: 36, semilleros: 45, grupos: 19, renacyt: 210,  fedu: 292 },
  { anio: 2025, institutos: 37, semilleros: 127, grupos: 39, renacyt: 236,  fedu: 369 },
  { anio: 2026, institutos: 37, semilleros: 231, grupos: 57, renacyt: 302,  fedu: 0 },
];

// ------------------------------------------------------------------
// INSTITUTOS DE INVESTIGACIÓN
// ------------------------------------------------------------------
export const institutos = [
  // Creados 2020-2021
  { id: 1,  nombre: 'Instituto de Investigación y Desarrollo Andino Amazónico (IIDEAA)', sigla: 'IIDEAA',    director: 'Arq. Adalid Morales Arroyo',          facultad: 'Medicina Humana',               anioCreacion: 2020, resolucion: '0719-2020-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 2,  nombre: 'Instituto de Investigación en Ciencias de Educación',                sigla: 'IICE',      director: 'Dr. José Damián Fuentes López',        facultad: 'Ciencias de la Educación',       anioCreacion: 2021, resolucion: '1878-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 3,  nombre: 'Instituto de Investigación de Socioeconómicas y de Agrobiodiversidad', sigla: 'IISAB',  director: 'Dr. Emilio Flores Mamani',             facultad: 'Ciencias Sociales',              anioCreacion: 2021, resolucion: '1441-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 4,  nombre: 'Instituto de Investigación en Ciencias Ambientales, Salud y Biodiversidad', sigla: 'IICASB', director: 'Dr. Alfredo Ludwig Loza del Carpio', facultad: 'Ciencias Biológicas',          anioCreacion: 2021, resolucion: '1439-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 5,  nombre: 'Instituto de Investigación para el Fomento de la Competitividad e Innovación Regional', sigla: 'INFOCIR', director: 'Dra. Tita Flores de Quispe', facultad: 'Ingeniería Económica', anioCreacion: 2021, resolucion: '1444-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 6,  nombre: 'Instituto de Investigación en Tecnología y Salud',                    sigla: 'ITS',       director: 'Dra. Edith Tello Palma',              facultad: 'Ciencias de la Salud',          anioCreacion: 2021, resolucion: '1440-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 7,  nombre: 'Instituto de Investigación Social y Empresarial',                     sigla: 'IDISEM',    director: 'Dra. Yudi Yaneh Yucra Mamani',        facultad: 'Ciencias Sociales',              anioCreacion: 2021, resolucion: '1443-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 8,  nombre: 'Instituto de Investigación en Ciencias de la Administración',         sigla: 'IICA',      director: 'Dr. Nicolás Edgar Roque Barrios',     facultad: 'Ciencias Administrativas',       anioCreacion: 2021, resolucion: '1877-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 9,  nombre: 'Instituto de Investigación en Metalúrgica, Materiales y Medio Ambiente', sigla: 'IIMMA', director: 'Dr. Dante Atilio Salas Ávila',        facultad: 'Ing. Geológica y Metalurgia',    anioCreacion: 2021, resolucion: '1442-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 10, nombre: 'Instituto de Investigación Científica en Medicina David Frisancho Pineda', sigla: 'IICDM', director: 'M.Sc. Tania R. Aguilar Portugal',  facultad: 'Medicina Humana',               anioCreacion: 2021, resolucion: '1879-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 11, nombre: 'Instituto de Investigación en Protección Vegetal',                    sigla: 'IIPV',      director: 'Dra. Rosario Ysabel Bravo Portucarrero', facultad: 'Ciencias Agrarias',           anioCreacion: 2021, resolucion: '0354-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 12, nombre: 'Instituto de Investigaciones Interculturales',                        sigla: 'III',       director: 'Dr. Duverly Joao Incacutipa Limachi', facultad: 'Ciencias Sociales',              anioCreacion: 2021, resolucion: '0894-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 13, nombre: 'Instituto de Investigaciones Educativas',                              sigla: 'IIEDU',     director: 'Dr. Heber Nehemias Chui Betancur',    facultad: 'Ciencias de la Educación',       anioCreacion: 2021, resolucion: '2593-2021-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  // Creados 2022
  { id: 14, nombre: 'Instituto de Investigaciones Económicas',                             sigla: 'IIE',       director: 'Dr. Cristobal Rufino Yapuchura Saico', facultad: 'Ingeniería Económica',          anioCreacion: 2022, resolucion: '0087-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 15, nombre: 'Instituto de Investigación de Desarrollo de Tecnología y Medio Ambiente', sigla: 'IIDTMA', director: 'Julio Pedro Quispe Aymachoue',    facultad: 'Ing. Civil y Arquitectura',      anioCreacion: 2022, resolucion: '0090-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 16, nombre: 'Instituto de Investigaciones Sociales "José Antonio Encinas"',        sigla: 'INS-JAE',   director: 'Dr. Henry Mark Vilca Apaza',          facultad: 'Ciencias de la Educación',       anioCreacion: 2022, resolucion: '0355-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 17, nombre: 'Instituto de Investigación del Altiplano para el Desarrollo Sostenible', sigla: 'INADESO', director: 'Dr. Wilber Paredes Ugarte',         facultad: 'Ciencias de la Salud',          anioCreacion: 2022, resolucion: '0356-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 18, nombre: 'Instituto de Investigaciones en Energía, Automatización Eléctrica y Mecánica', sigla: 'ENAEM', director: 'Dr. Normán Jesús Beltrán Castañón', facultad: 'Ing. Mecánica Eléctrica y Sistemas', anioCreacion: 2022, resolucion: '1782-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 19, nombre: 'Instituto de Investigación y de Promoción de Camélidos Sudamericanos', sigla: 'IIPC',     director: 'Dr. Ceferino Olarte Daza',            facultad: 'Medicina Veterinaria y Zootecnia', anioCreacion: 2022, resolucion: '1783-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 20, nombre: 'Instituto de Investigación para el Desarrollo Social Andino',          sigla: 'IIDSA',     director: 'Dr. Porfirio Enriquez Salas',         facultad: 'Ciencias Sociales',              anioCreacion: 2022, resolucion: '2138-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 21, nombre: 'Instituto de Investigación en Estudios Socioculturales, Educacionales e Informática en Ciencias Sociales', sigla: 'IIESCUEDUCIS', director: 'Dr. Felipe Quispe Supo', facultad: 'Ciencias Sociales', anioCreacion: 2022, resolucion: '2555-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 22, nombre: 'Instituto de Investigación en Smart Grid, Energía y Automatización',   sigla: 'IISGEA',    director: 'Dr. James Rolando Arredondo Mamani',  facultad: 'Ing. Mecánica Eléctrica y Sistemas', anioCreacion: 2022, resolucion: '2741-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 23, nombre: 'Instituto de Investigación en Arquitectura y Construcciones',          sigla: 'IARCO',     director: 'Dr. Hugo Anselmo Ccama Condori',       facultad: 'Ing. Civil y Arquitectura',      anioCreacion: 2022, resolucion: '3046-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 24, nombre: 'Instituto de Investigación y Tecnología en Ingeniería Civil',          sigla: 'IITEIC',    director: 'Samuel Huaquisto Caceres',             facultad: 'Ing. Civil y Arquitectura',      anioCreacion: 2022, resolucion: '3049-2022-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  // Creados 2023
  { id: 25, nombre: 'Instituto de Investigación en Inteligencia Computacional y Ciencia de Datos', sigla: 'IICCD', director: 'Dr. Loenid Aleman Gonzales',  facultad: 'Ing. Estadística e Informática', anioCreacion: 2023, resolucion: '0526-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 26, nombre: 'Instituto de Investigación e Innovación en Producción, Seguridad Alimentaria y Agroindustria', sigla: 'IPSAA', director: 'Dr. Alejandro Coloma Paxi', facultad: 'Ciencias Agrarias', anioCreacion: 2023, resolucion: '0332-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 27, nombre: 'Instituto de Investigación Científica y Humanística',                  sigla: 'IDICH',     director: 'Dr. Wilber Cesar Calsina Ponce',      facultad: 'Ciencias Sociales',              anioCreacion: 2023, resolucion: '0333-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 28, nombre: 'Instituto de Investigación y Desarrollo DelSur',                       sigla: 'IIDS',      director: 'Dr. Jose Emanuel Cruz de la Cruz',    facultad: 'Ing. Mecánica Eléctrica y Sistemas', anioCreacion: 2023, resolucion: '1074-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 29, nombre: 'Instituto de Investigación en Pequeña Minería',                        sigla: 'ISPEMI',    director: 'Dr. Juan Walter Tudela Mamani',        facultad: 'Ing. de Minas',                  anioCreacion: 2023, resolucion: '1075-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 30, nombre: 'Instituto de Investigación en Tecnologías de Información y Comunicación Alto Andino', sigla: 'ITICA', director: 'M.Sc. Magali Gianina Gonzales Paco', facultad: 'Ing. Mecánica Eléctrica y Sistemas', anioCreacion: 2023, resolucion: '1676-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 31, nombre: 'Instituto de Biosostenibilidad',                                       sigla: 'IBIOS',     director: 'Dr. Juan Marco Aro Aro',               facultad: 'Ciencias Agrarias',              anioCreacion: 2023, resolucion: '2022-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 32, nombre: 'Instituto de Investigación del Altiplano',                             sigla: 'IIA',       director: 'Dr. Polan Franbalt Ferro Gonzales',    facultad: 'Escuela de Posgrado',            anioCreacion: 2023, resolucion: '2922-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  { id: 33, nombre: 'Instituto de Investigación en Ciencia y Tecnología del Agua',          sigla: 'IICTA',     director: 'Dr. Jose Antonio Mamani Gomez',        facultad: 'Ing. Agrícola',                  anioCreacion: 2023, resolucion: '3373-2023-R-UNA', activo2023: true, activo2024: true, activo2025: true },
  // Creados 2024
  { id: 34, nombre: 'Instituto de Investigación Alto Andinas',                              sigla: 'IIAA',      director: 'Dr. Angel Canales Gutierrez',          facultad: 'Ciencias Biológicas',            anioCreacion: 2024, resolucion: '0808-2024-R-UNA', activo2023: false, activo2024: true, activo2025: true },
  { id: 35, nombre: 'Instituto de Investigación en Geomática Aplicada, Geotecnologías Espaciales y Terrestres', sigla: 'IGEOMGET', director: 'Dr. Elmer Elio Calizaya Llatasi', facultad: 'Ciencias Agrarias', anioCreacion: 2024, resolucion: '3247-2024-R-UNA', activo2023: false, activo2024: true, activo2025: true },
  { id: 36, nombre: 'Instituto de Investigación en Ciencias de la Tierra',                  sigla: 'INICTI',    director: 'Dr. Fernando Benigno Salas Urviola',   facultad: 'Ing. de Minas',                  anioCreacion: 2024, resolucion: '3759-2024-R-UNA', activo2023: false, activo2024: true, activo2025: true },
  // Creados 2025
  { id: 37, nombre: 'Instituto de Investigaciones Alto Andinas (IIAA) — Ciencias Biológicas', sigla: 'IIAA-2',  director: 'Dr. Angel Canales Gutierrez',         facultad: 'Ciencias Biológicas',            anioCreacion: 2025, resolucion: 'En proceso',     activo2023: false, activo2024: false, activo2025: true },
];

// Institutos por facultad (para gráficos)
export const institutosPorFacultad = [
  { facultad: 'Ciencias Sociales',                   count: 7 },
  { facultad: 'Ing. Mecánica Eléctrica y Sistemas',  count: 4 },
  { facultad: 'Ing. Civil y Arquitectura',            count: 3 },
  { facultad: 'Ciencias Agrarias',                   count: 4 },
  { facultad: 'Ciencias de la Educación',             count: 3 },
  { facultad: 'Medicina Humana',                     count: 2 },
  { facultad: 'Ciencias de la Salud',                count: 2 },
  { facultad: 'Ciencias Biológicas',                 count: 2 },
  { facultad: 'Ing. Económica',                      count: 2 },
  { facultad: 'Ing. Geológica y Metalurgia',         count: 1 },
  { facultad: 'Med. Veterinaria y Zootecnia',        count: 1 },
  { facultad: 'Ciencias Administrativas',            count: 1 },
  { facultad: 'Ing. Estadística e Informática',      count: 1 },
  { facultad: 'Ing. de Minas',                       count: 2 },
  { facultad: 'Ing. Agrícola',                       count: 1 },
  { facultad: 'Escuela de Posgrado',                 count: 1 },
];

// ------------------------------------------------------------------
// SEMILLEROS DE INVESTIGACIÓN 2025 (83 total)
// ------------------------------------------------------------------
export const semillerosPorFacultad2025 = [
  { facultad: 'Ciencias Agrarias',                    ep: 'Ing. Agronómica',              cantidad: 5 },
  { facultad: 'Ciencias Agrarias',                    ep: 'Ing. Agroindustrial',           cantidad: 6 },
  { facultad: 'Ciencias Agrarias',                    ep: 'Topografía y Agrimensura',      cantidad: 1 },
  { facultad: 'Med. Veterinaria y Zootecnia',         ep: 'Med. Veterinaria y Zootecnia',  cantidad: 8 },
  { facultad: 'Ing. Económica',                       ep: 'Ing. Económica',               cantidad: 1 },
  { facultad: 'Trabajo Social',                       ep: 'Trabajo Social',               cantidad: 1 },
  { facultad: 'Ing. de Minas',                        ep: 'Ing. de Minas',                cantidad: 2 },
  { facultad: 'Ciencias Sociales',                    ep: 'Sociología',                   cantidad: 2 },
  { facultad: 'Ciencias Sociales',                    ep: 'Turismo',                      cantidad: 1 },
  { facultad: 'Ciencias Sociales',                    ep: 'Antropología',                 cantidad: 2 },
  { facultad: 'Ciencias Sociales',                    ep: 'Arte',                         cantidad: 1 },
  { facultad: 'Ciencias Biológicas',                  ep: 'Ciencias Biológicas',          cantidad: 1 },
  { facultad: 'Ciencias de la Educación',             ep: 'Educación Física',             cantidad: 1 },
  { facultad: 'Ciencias de la Educación',             ep: 'Educación Inicial',            cantidad: 3 },
  { facultad: 'Ciencias de la Educación',             ep: 'Educación Primaria',           cantidad: 2 },
  { facultad: 'Ciencias de la Educación',             ep: 'Educación Secundaria',         cantidad: 1 },
  { facultad: 'Ing. Geológica y Metalurgia',          ep: 'Ing. Metalúrgica',             cantidad: 1 },
  { facultad: 'Ing. Química',                         ep: 'Ing. Química',                 cantidad: 1 },
  { facultad: 'Ciencias de la Salud',                 ep: 'Nutrición Humana',             cantidad: 2 },
  { facultad: 'Ciencias de la Salud',                 ep: 'Odontología',                  cantidad: 4 },
  { facultad: 'Ing. Civil y Arquitectura',             ep: 'Ciencias Físico-Matemáticas',  cantidad: 2 },
  { facultad: 'Medicina Humana',                      ep: 'Medicina Humana',              cantidad: 4 },
  { facultad: 'Ing. Mec. Eléctrica y Sistemas',       ep: 'Ing. Electrónica',             cantidad: 2 },
  { facultad: 'Ing. Mec. Eléctrica y Sistemas',       ep: 'Ing. Mecánica Eléctrica',      cantidad: 5 },
  { facultad: 'Ing. Mec. Eléctrica y Sistemas',       ep: 'Ing. de Sistemas',             cantidad: 2 },
  { facultad: 'Ciencias Administrativas y Humanas',   ep: 'Administración',               cantidad: 2 },
];

// Evolución de semilleros por año
export const semillerosEvolucion = [
  { anio: 2023, total: 34, concursoGanadores: 0  },
  { anio: 2024, total: 45, nuevos: 45, concursoGanadores: 20 },
  { anio: 2025, total: 127, nuevos: 82, concursoGanadores: 0  },
  { anio: 2026, total: 231, nuevos: 104, concursoGanadores: 0  },
];

// Semilleros 2025 — listado completo por facultad (resumen)
export const semilleros2025 = [
  // CIENCIAS AGRARIAS — Ing. Agronómica
  { n: 1,  nombre: 'Agrobiodiversidad y la Nutrición Andina', facultad: 'Ciencias Agrarias', ep: 'Ing. Agronómica', responsable: 'Dr. Angel Mauricio Holguer Mujica Sánchez' },
  { n: 2,  nombre: 'SI-AGROTEC', facultad: 'Ciencias Agrarias', ep: 'Ing. Agronómica', responsable: 'Dr. Israel Lima Medina' },
  { n: 3,  nombre: 'EcoAgro — Agricultura sostenible y protección ambiental', facultad: 'Ciencias Agrarias', ep: 'Ing. Agronómica', responsable: 'M.Sc. Edwin Gustavo Cañazaca Choquehuanca' },
  { n: 4,  nombre: 'SEMAGRO — Semillero de Estudiantes Motivados en la Agronomía', facultad: 'Ciencias Agrarias', ep: 'Ing. Agronómica', responsable: 'Dr. Israel Lima Medina' },
  { n: 5,  nombre: 'SEMILLERO DE INVESTIGACION AGRONOMICA (SIAGRO)', facultad: 'Ciencias Agrarias', ep: 'Ing. Agronómica', responsable: 'Dr. Ernesto Javier Chura Yupanqui' },
  // CIENCIAS AGRARIAS — Ing. Agroindustrial
  { n: 6,  nombre: 'Semillero de Investigación e Innovación Agroindustrial I (SIIA-I)', facultad: 'Ciencias Agrarias', ep: 'Ing. Agroindustrial', responsable: 'Dra. Monica Edith Quiroga Villa' },
  { n: 7,  nombre: 'Semillero de Investigación "Creas Agroindustria"', facultad: 'Ciencias Agrarias', ep: 'Ing. Agroindustrial', responsable: 'Dra. Monica Edith Quiroga Villa' },
  { n: 8,  nombre: 'Semillero de Investigación e Innovación en Matrices Alimentarias (SIIMA)', facultad: 'Ciencias Agrarias', ep: 'Ing. Agroindustrial', responsable: 'Dra. Monica Edith Quiroga Villa' },
  { n: 9,  nombre: 'Grupo de Investigación en Alimentos Funcionales y Recubrimientos Naturales (GIAFREN)', facultad: 'Ciencias Agrarias', ep: 'Ing. Agroindustrial', responsable: 'Wenceslao Teddy Medina Espinoza' },
  { n: 10, nombre: 'Natura Brew', facultad: 'Ciencias Agrarias', ep: 'Ing. Agroindustrial', responsable: 'Saire Roenfi Guerra Lima' },
  { n: 11, nombre: 'AGRODET', facultad: 'Ciencias Agrarias', ep: 'Ing. Agroindustrial', responsable: 'Ronald Astete Tebes' },
  // MED. VETERINARIA
  { n: 12, nombre: 'Grupo de Investigación en Bioquímica Veterinaria (GIBIOQVET)', facultad: 'Med. Veterinaria y Zootecnia', ep: 'Med. Veterinaria y Zootecnia', responsable: 'Dr. Pedro Ubaldo Coila Añasco' },
  { n: 13, nombre: 'CIACS — Círculo de Investigación Alto Andina en Camélidos', facultad: 'Med. Veterinaria y Zootecnia', ep: 'Med. Veterinaria y Zootecnia', responsable: 'Hugo Vilcanqui Mamani' },
  { n: 14, nombre: 'Semillero de Investigación en Sanidad Animal', facultad: 'Med. Veterinaria y Zootecnia', ep: 'Med. Veterinaria y Zootecnia', responsable: 'M.Sc. Celso Zapata Coacalla' },
  { n: 15, nombre: 'Semillero en Enfermedades Parasitarias en Animales Domésticos y Silvestres', facultad: 'Med. Veterinaria y Zootecnia', ep: 'Med. Veterinaria y Zootecnia', responsable: 'M.Sc. Celso Zapata Coacalla' },
  { n: 16, nombre: 'Grupo de Investigación en Biotecnología Reproductiva Animal (GIBRA)', facultad: 'Med. Veterinaria y Zootecnia', ep: 'Med. Veterinaria y Zootecnia', responsable: 'Dra. Nubia Lilia Catacora Flores' },
  { n: 17, nombre: 'Grupo de Investigación en Microbiología de Animales Domésticos (GIMAD)', facultad: 'Med. Veterinaria y Zootecnia', ep: 'Med. Veterinaria y Zootecnia', responsable: 'M.Sc. Renan Dilton Hañari Quispe' },
  { n: 18, nombre: 'Grupo de Investigación en Inmunología Veterinaria (GIIV)', facultad: 'Med. Veterinaria y Zootecnia', ep: 'Med. Veterinaria y Zootecnia', responsable: 'M.Sc. Renan Dilton Hañari Quispe' },
  // ING. ECONÓMICA
  { n: 19, nombre: 'SINECO — Semillero de Innovación y Nuevas Economías', facultad: 'Ing. Económica', ep: 'Ing. Económica', responsable: 'Dr. Roberto Arpi Mayta' },
  // TRABAJO SOCIAL
  { n: 20, nombre: 'SANAR Perú — Semillero de Análisis de Necesidades Adolescentes Regionales', facultad: 'Trabajo Social', ep: 'Trabajo Social', responsable: 'M.Sc. Zezy Yadeyda Sardón Ari' },
  // ING. DE MINAS
  { n: 21, nombre: 'REMINA (Restauración Ambiental en Minería)', facultad: 'Ing. de Minas', ep: 'Ing. de Minas', responsable: 'Dr. Fidel Huisa Mamani' },
  { n: 22, nombre: 'INNOVA+', facultad: 'Ing. de Minas', ep: 'Ing. de Minas', responsable: 'Dr. Julián Apaza Chino' },
  // CIENCIAS SOCIALES
  { n: 23, nombre: 'SociologIA — Sociología para la Investigación Acción', facultad: 'Ciencias Sociales', ep: 'Sociología', responsable: 'Dr. Gustavo Medina Vilca' },
  { n: 24, nombre: 'Redes Sociales y Turismo: La nueva brújula del turista moderno', facultad: 'Ciencias Sociales', ep: 'Turismo', responsable: 'D.Sc. Noemí Emperatriz Cayo Velásquez' },
  { n: 25, nombre: 'Grupo Pensamiento Crítico Antropológico UNA-Puno', facultad: 'Ciencias Sociales', ep: 'Antropología', responsable: 'Dr. Vicente Alanoca Arocutipa' },
  { n: 26, nombre: 'Semillero de Investigaciones Etnográficas (SIE)', facultad: 'Ciencias Sociales', ep: 'Antropología', responsable: 'Dr. Duverly Joao Incacutipa Limachi' },
  { n: 27, nombre: 'Digitalizando el Arte Visual', facultad: 'Ciencias Sociales', ep: 'Arte', responsable: 'Dr. Wilber Cesar Calsina Ponce' },
  // CIENCIAS BIOLÓGICAS
  { n: 28, nombre: 'MicrobioTech', facultad: 'Ciencias Biológicas', ep: 'Ciencias Biológicas', responsable: 'Dr. Luis Angel Paucar Flores' },
  // CIENCIAS DE LA EDUCACIÓN
  { n: 29, nombre: 'CIPROVIDA — Ciencias del Deporte y Psicomotricidad para una vida saludable', facultad: 'Ciencias de la Educación', ep: 'Educación Física', responsable: 'Dra. Dometila Mamani Jilaja' },
  { n: 30, nombre: 'Semillero miradas interdisciplinarias — Bienestar en Educación Inicial', facultad: 'Ciencias de la Educación', ep: 'Educación Inicial', responsable: 'Dra. Nelly Olga Zela Payi' },
  { n: 31, nombre: 'Semillero de Investigación: Primera Infancia', facultad: 'Ciencias de la Educación', ep: 'Educación Inicial', responsable: 'Dra. Haydee Clady Ticona Arapa' },
  { n: 32, nombre: 'Semillero de Pedagogía y Bienestar Infantil', facultad: 'Ciencias de la Educación', ep: 'Educación Inicial', responsable: 'Dra. Nancy Mónica García Bedoya' },
  { n: 33, nombre: 'EPEP - Investiga', facultad: 'Ciencias de la Educación', ep: 'Educación Primaria', responsable: 'Dra. Katia Pérez Argollo' },
  { n: 34, nombre: 'PIONEROS DE LA INVESTIGACIÓN (SIP)', facultad: 'Ciencias de la Educación', ep: 'Educación Primaria', responsable: 'Dra. Katia Pérez Argollo' },
  { n: 35, nombre: 'Semillero de Investigación Pedagógica, Educativa y Social WIÑAY (SIPES)', facultad: 'Ciencias de la Educación', ep: 'Educación Secundaria', responsable: 'Dr. Vidnay Noel Valero Ancco' },
  // ING. GEOLÓGICA
  { n: 36, nombre: 'Semillero del Instituto de Investigación en Metalurgia, Materiales y Medio Ambiente', facultad: 'Ing. Geológica y Metalurgia', ep: 'Ing. Metalúrgica', responsable: 'Dr. Dante Atilio Salas Avila' },
  // ING. QUÍMICA
  { n: 37, nombre: 'SEMILLEROS DE INVESTIGACIÓN LITIO', facultad: 'Ing. Química', ep: 'Ing. Química', responsable: 'Dr. German Quille Calizaya' },
  // CIENCIAS DE LA SALUD
  { n: 38, nombre: 'NUTRI-CIENCIAS', facultad: 'Ciencias de la Salud', ep: 'Nutrición Humana', responsable: 'Dr. Wilber Paredes Ugarte' },
  { n: 39, nombre: 'INVESTIGANDO EN CIENCIAS DE LA NUTRICION Y SALUD (ICANS)', facultad: 'Ciencias de la Salud', ep: 'Nutrición Humana', responsable: 'Dr. Arturo Zaira Churata' },
  { n: 40, nombre: 'ORAL HEALTH RESEARCHERS TEAM (OHRT)', facultad: 'Ciencias de la Salud', ep: 'Odontología', responsable: 'Dra. Vilma Mamani Cori' },
  { n: 41, nombre: 'ESTUDIANTES APORTANDO A LA INVESTIGACIÓN EN SALUD (EAIS)', facultad: 'Ciencias de la Salud', ep: 'Odontología', responsable: 'Dra. Tania Carola Padilla Cáceres' },
  { n: 42, nombre: 'RUTAS DE LA CIENCIAS EN SALUD', facultad: 'Ciencias de la Salud', ep: 'Odontología', responsable: 'Dra. Nelly Beatriz Quispe Maquera' },
  { n: 43, nombre: 'ODONTOINVESTIGA', facultad: 'Ciencias de la Salud', ep: 'Odontología', responsable: 'Dra. Betsy Quispe Quispe' },
  // ING. CIVIL Y ARQUITECTURA
  { n: 44, nombre: 'RED DE INVESTIGACIÓN EN CÁLCULO FRACCIONARIO', facultad: 'Ing. Civil y Arquitectura', ep: 'Ciencias Físico-Matemáticas', responsable: 'Dr. Richar Marlon Mollinedo Chura' },
  { n: 45, nombre: 'RED DE INVESTIGACIÓN EN ECUACIONES DIFERENCIALES PARCIALES (RIEDP)', facultad: 'Ing. Civil y Arquitectura', ep: 'Ciencias Físico-Matemáticas', responsable: 'Dr. Tito Luciano Mamani Luna' },
  // MEDICINA HUMANA
  { n: 46, nombre: 'GRUPO AVICENA', facultad: 'Medicina Humana', ep: 'Medicina Humana', responsable: 'Dr. Alfredo Tumi Figueroa' },
  { n: 47, nombre: 'PRIMUN NON NOCERE', facultad: 'Medicina Humana', ep: 'Medicina Humana', responsable: 'D.Sc. Dante Elmer Hancco Monrroy' },
  { n: 48, nombre: 'SAPIENTIA MEDIC', facultad: 'Medicina Humana', ep: 'Medicina Humana', responsable: 'D.Sc. Dante Elmer Hancco Monrroy' },
  { n: 49, nombre: 'NEURIAMED', facultad: 'Medicina Humana', ep: 'Medicina Humana', responsable: 'D.Sc. Dante Elmer Hancco Monrroy' },
  // ING. MEC. ELÉCTRICA Y SISTEMAS
  { n: 50, nombre: 'ETAI — Energías, Tecnología y Automatización e Investigación', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Electrónica', responsable: 'Dr. James Rolando Arredondo Mamani' },
  { n: 51, nombre: 'Investigadores Junior de Electrónica', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Electrónica', responsable: 'Dr. Jorge Luis Apaza Cruz' },
  { n: 52, nombre: 'TITICACA MED - XR', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Electrónica', responsable: 'Dr. Euler Edson Apaza Medina' },
  { n: 53, nombre: 'Senam-UNA', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Mecánica Eléctrica', responsable: 'Dr. Jose Manuel Ramos Cutipa' },
  { n: 54, nombre: 'Energías Renovables-Levitación Magnética', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Mecánica Eléctrica', responsable: 'Dr. Julio Fredy Chura Acero' },
  { n: 55, nombre: 'Energías Renovables-Generación Hidrógeno', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Mecánica Eléctrica', responsable: 'Dr. Julio Fredy Chura Acero' },
  { n: 56, nombre: 'Localización de fallas en líneas de transmisión', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Mecánica Eléctrica', responsable: 'M.Sc. Omar Chayña Velasquez' },
  { n: 57, nombre: 'Energías Renovables - Baterías de Litio', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Mecánica Eléctrica', responsable: 'Dr. Julio Fredy Chura Acero' },
  { n: 58, nombre: 'INNOME-Innovación Mecánica Eléctrica', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. Mecánica Eléctrica', responsable: 'Dr. Jose Manuel Ramos Cutipa' },
  { n: 59, nombre: 'Sistemas y Compiladores', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. de Sistemas', responsable: 'Dr. Oliver Amadeo Huayta Vilca' },
  { n: 60, nombre: 'Deep Mind Ed', facultad: 'Ing. Mec. Eléctrica y Sistemas', ep: 'Ing. de Sistemas', responsable: 'Dr. Oliver Amadeo Huayta Vilca' },
  // CIENCIAS ADMINISTRATIVAS
  { n: 61, nombre: 'AUREA MINDS', facultad: 'Ciencias Administrativas y Humanas', ep: 'Administración', responsable: 'Dra. Amira Carpio Maraza' },
  { n: 62, nombre: 'CHANGE RESEARCHERS', facultad: 'Ciencias Administrativas y Humanas', ep: 'Administración', responsable: 'Dr. Alejandro Ticona Machaca' },
];

// Semilleros 2023 — resumido por sección
export const semilleros2023 = [
  { nombre: 'SEMILLEROS DE INVESTIGACIÓN EDUCATIVA YACHAY (SIEY)', facultad: 'Ciencias de la Educación', responsable: 'Dr. Heber Nehemias Chui Betancur' },
  { nombre: 'SEMILLERO DE INVESTIGACIÓN AGRONÓMICA (SIAGRO)', facultad: 'Ciencias Agrarias', responsable: 'Dra. Rosario Bravo Portocarrero' },
  { nombre: 'SEMILLERO AGROINNOVA', facultad: 'Ciencias Agrarias', responsable: '—' },
  { nombre: 'GRUPO DE INVESTIGACIÓN EN BIOQUIMICA Y BIOLOGIA MOLECULAR (GIBBM)', facultad: 'Ciencias de la Salud', responsable: '—' },
  { nombre: 'GRUPO DE INVESTIGACIÓN EN FARMACOLOGIA EXPERIMENTAL (GIFE)', facultad: 'Ciencias de la Salud', responsable: '—' },
  { nombre: 'SEMILLEROS DE SERENDIPIA EN TRABAJO SOCIAL', facultad: 'Trabajo Social', responsable: '—' },
  { nombre: 'SEMILLEROS EN ACCION POR EL CAMBIO SOCIAL DESDE EL TRABAJO SOCIAL', facultad: 'Trabajo Social', responsable: '—' },
  { nombre: 'SEMILLEROS DE INNOVACIÓN CIENTIFICA', facultad: 'Ciencias Sociales', responsable: '—' },
  { nombre: 'GRUPO DE INVESTIGACION EN COMUNICACIÓN Y SOCIEDAD "GICS"', facultad: 'Ciencias Sociales', responsable: '—' },
  { nombre: 'SEMILLEROS DE INVESTIGACION MEDIOS Y SOCIEDAD', facultad: 'Ciencias Sociales', responsable: '—' },
  { nombre: 'INSTITUTO DE INVESTIGACIONES ALTO ANDINAS (IIAA)', facultad: 'Ciencias Biológicas', responsable: '—' },
];

// ------------------------------------------------------------------
// GRUPOS DE INVESTIGACIÓN
// ------------------------------------------------------------------
export const grupos = [
  // 2024 — 15 grupos reconocidos
  { nombre: 'GIER — Grupo de Investigación en Energías Renovables', area: 'Energías Renovables', facultad: 'Ing. Mec. Eléctrica y Sistemas', anioReconocimiento: 2024 },
  { nombre: 'GI-EA — Grupo de Investigación Estadística Aplicada', area: 'Estadística', facultad: 'Ing. Estadística e Informática', anioReconocimiento: 2024 },
  { nombre: 'GICD — Grupo de Investigación Ciencia de Datos', area: 'Ciencia de Datos e IA', facultad: 'Ing. Estadística e Informática', anioReconocimiento: 2024 },
  { nombre: 'Estadística Bayesiana', area: 'Estadística', facultad: 'Ing. Estadística e Informática', anioReconocimiento: 2024 },
  { nombre: 'GI-IA — Grupo de Investigación en Inteligencia Artificial', area: 'Ciencia de Datos e IA', facultad: 'Ing. Estadística e Informática', anioReconocimiento: 2024 },
  { nombre: 'GIBBM — Bioquímica y Biología Molecular', area: 'Ciencias de la Salud', facultad: 'Ciencias de la Salud', anioReconocimiento: 2024 },
  { nombre: 'GIFE — Farmacología Experimental', area: 'Ciencias de la Salud', facultad: 'Ciencias de la Salud', anioReconocimiento: 2024 },
  { nombre: 'GIBIOQVET — Bioquímica Veterinaria', area: 'Veterinaria', facultad: 'Med. Veterinaria y Zootecnia', anioReconocimiento: 2024 },
  { nombre: 'GIAFREN — Alimentos Funcionales y Recubrimientos Naturales', area: 'Agroindustria', facultad: 'Ciencias Agrarias', anioReconocimiento: 2024 },
  { nombre: 'GIBRA — Biotecnología Reproductiva Animal', area: 'Veterinaria', facultad: 'Med. Veterinaria y Zootecnia', anioReconocimiento: 2024 },
  { nombre: 'GIMAD — Microbiología de Animales Domésticos', area: 'Veterinaria', facultad: 'Med. Veterinaria y Zootecnia', anioReconocimiento: 2024 },
  { nombre: 'GIIV — Inmunología Veterinaria', area: 'Veterinaria', facultad: 'Med. Veterinaria y Zootecnia', anioReconocimiento: 2024 },
  { nombre: 'Grupo Pensamiento Crítico Antropológico UNA-Puno', area: 'Ciencias Sociales', facultad: 'Ciencias Sociales', anioReconocimiento: 2024 },
  { nombre: 'GRUPO AVICENA — Medicina Humana', area: 'Medicina', facultad: 'Medicina Humana', anioReconocimiento: 2024 },
  { nombre: 'GIICDA — Inteligencia Artificial y Ciencia de Datos Aplicada', area: 'Ciencia de Datos e IA', facultad: 'Ing. Estadística e Informática', anioReconocimiento: 2024 },
  // 2025 — 5 nuevos grupos (total 20)
  { nombre: 'AdminLab', area: 'Administración', facultad: 'Ciencias Administrativas', anioReconocimiento: 2025 },
  { nombre: 'IMPADE — Gestión, Impacto y Desarrollo Empresarial', area: 'Administración', facultad: 'Ciencias Administrativas', anioReconocimiento: 2025 },
  { nombre: 'CRISÁLIDA SOCIAL -UNAP', area: 'Ciencias Sociales', facultad: 'Ciencias Sociales', anioReconocimiento: 2025 },
  { nombre: 'AUREA MINDS', area: 'Administración', facultad: 'Ciencias Administrativas', anioReconocimiento: 2025 },
  { nombre: 'CHANGE RESEARCHERS', area: 'Administración', facultad: 'Ciencias Administrativas', anioReconocimiento: 2025 },
];

export const gruposPorArea = [
  { area: 'Veterinaria',          cantidad: 4 },
  { area: 'Ciencia de Datos e IA',cantidad: 4 },
  { area: 'Estadística',          cantidad: 2 },
  { area: 'Ciencias de la Salud', cantidad: 2 },
  { area: 'Administración',       cantidad: 4 },
  { area: 'Agroindustria',        cantidad: 1 },
  { area: 'Ciencias Sociales',    cantidad: 2 },
  { area: 'Energías Renovables',  cantidad: 1 },
  { area: 'Medicina',             cantidad: 1 },
];

export const gruposEvolucion = [
  { anio: 2023, total: 10, nuevos: 10, proyectosGanadores: 0 },
  { anio: 2024, total: 19, nuevos: 19,  proyectosGanadores: 6 },
  { anio: 2025, total: 39, nuevos: 20,  proyectosGanadores: 0 },
  { anio: 2026, total: 57, nuevos: 18,  proyectosGanadores: 0 },
];

// ------------------------------------------------------------------
// PROYECTOS FEDU POR ESCUELA PROFESIONAL
// ------------------------------------------------------------------
export const feduPorEscuela = [
  { ep: 'Ing. Agronómica',                 fedu2023: 4,  fedu2024: 13, fedu2025: 14 },
  { ep: 'Ing. Agroindustrial',              fedu2023: 27, fedu2024: 5,  fedu2025: 4  },
  { ep: 'Ing. Topográfica y Agrimensura',   fedu2023: 0,  fedu2024: 3,  fedu2025: 4  },
  { ep: 'Med. Veterinaria y Zootecnia',     fedu2023: 27, fedu2024: 13, fedu2025: 22 },
  { ep: 'Ing. Económica',                   fedu2023: 24, fedu2024: 14, fedu2025: 19 },
  { ep: 'Administración',                   fedu2023: 10, fedu2024: 11, fedu2025: 11 },
  { ep: 'Ciencias Contables',               fedu2023: 16, fedu2024: 19, fedu2025: 19 },
  { ep: 'Trabajo Social',                   fedu2023: 16, fedu2024: 8,  fedu2025: 10 },
  { ep: 'Enfermería',                       fedu2023: 7,  fedu2024: 4,  fedu2025: 10 },
  { ep: 'Antropología',                     fedu2023: 12, fedu2024: 6,  fedu2025: 11 },
  { ep: 'Arte',                             fedu2023: 15, fedu2024: 13, fedu2025: 12 },
  { ep: 'Ciencias de la Comunicación',      fedu2023: 8,  fedu2024: 7,  fedu2025: 9  },
  { ep: 'Sociología',                       fedu2023: 16, fedu2024: 11, fedu2025: 15 },
  { ep: 'Turismo',                          fedu2023: 9,  fedu2024: 9,  fedu2025: 11 },
  { ep: 'Ing. de Minas',                    fedu2023: 7,  fedu2024: 3,  fedu2025: 6  },
  { ep: 'Biología',                         fedu2023: 11, fedu2024: 4,  fedu2025: 13 },
  { ep: 'Educación Física',                 fedu2023: 9,  fedu2024: 5,  fedu2025: 5  },
  { ep: 'Educación Inicial',                fedu2023: 8,  fedu2024: 7,  fedu2025: 8  },
  { ep: 'Educación Primaria',               fedu2023: 7,  fedu2024: 7,  fedu2025: 12 },
  { ep: 'Educación Secundaria',             fedu2023: 35, fedu2024: 24, fedu2025: 31 },
  { ep: 'Ing. Estadística e Informática',   fedu2023: 15, fedu2024: 9,  fedu2025: 10 },
  { ep: 'Derecho',                          fedu2023: 4,  fedu2024: 4,  fedu2025: 5  },
  { ep: 'Ing. Química',                     fedu2023: 10, fedu2024: 8,  fedu2025: 10 },
  { ep: 'Nutrición Humana',                 fedu2023: 9,  fedu2024: 8,  fedu2025: 12 },
  { ep: 'Odontología',                      fedu2023: 11, fedu2024: 6,  fedu2025: 9  },
  { ep: 'Ing. Geológica',                   fedu2023: 8,  fedu2024: 6,  fedu2025: 6  },
  { ep: 'Ing. Metalúrgica',                 fedu2023: 5,  fedu2024: 3,  fedu2025: 5  },
  { ep: 'Arquitectura y Urbanismo',         fedu2023: 8,  fedu2024: 8,  fedu2025: 10 },
  { ep: 'Ciencias Físico Matemáticas',      fedu2023: 18, fedu2024: 12, fedu2025: 16 },
  { ep: 'Ing. Civil',                       fedu2023: 5,  fedu2024: 5,  fedu2025: 3  },
  { ep: 'Ing. Agrícola',                    fedu2023: 13, fedu2024: 10, fedu2025: 9  },
  { ep: 'Medicina Humana',                  fedu2023: 2,  fedu2024: 1,  fedu2025: 1  },
  { ep: 'Ing. Electrónica',                 fedu2023: 9,  fedu2024: 5,  fedu2025: 7  },
  { ep: 'Ing. Mecánica Eléctrica',          fedu2023: 16, fedu2024: 3,  fedu2025: 4  },
  { ep: 'Ing. de Sistemas',                 fedu2023: 14, fedu2024: 7,  fedu2025: 6  },
  { ep: 'Dpto. Humanidades',                fedu2023: 8,  fedu2024: 11, fedu2025: 10 },
];

export const feduTotales = [
  { anio: 2023, total: 417 },
  { anio: 2024, total: 292 },
  { anio: 2025, total: 369 },
];

// ------------------------------------------------------------------
// DOCENTES RENACYT (CONCYTEC)
// ------------------------------------------------------------------
export const renacytPorAnio = [
  { anio: 2021, total: 124 },
  { anio: 2022, total: 159 },
  { anio: 2023, total: 181 },
  { anio: 2024, total: 210 },
  { anio: 2025, total: 236 },
  { anio: 2026, total: 302 },
];

export const renacytPorNivel2023 = [
  { nivel: 'Nivel II',  cantidad: 1 },
  { nivel: 'Nivel III', cantidad: 4 },
  { nivel: 'Nivel IV',  cantidad: 3 },
  { nivel: 'Nivel V',   cantidad: 9 },
  { nivel: 'Nivel VI',  cantidad: 5 },
  { nivel: 'Nivel VII', cantidad: 3 },
];

export const renacytPorFacultad2023 = [
  { facultad: 'Ciencias Agrarias',                  cantidad: 9  },
  { facultad: 'Ing. Agroindustrial',                cantidad: 2  },
  { facultad: 'Med. Veterinaria y Zootecnia',       cantidad: 2  },
  { facultad: 'Ing. Económica',                     cantidad: 2  },
  { facultad: 'Ciencias Sociales',                  cantidad: 1  },
  { facultad: 'Ciencias de la Educación',           cantidad: 3  },
  { facultad: 'Ing. Civil y Arquitectura',          cantidad: 2  },
  { facultad: 'Ciencias de la Salud',               cantidad: 1  },
  { facultad: 'Ing. Geológica y Metalurgia',        cantidad: 1  },
  { facultad: 'Otras',                              cantidad: 2  },
];

// ------------------------------------------------------------------
// CONCURSOS Y EVENTOS
// ------------------------------------------------------------------
export const concursos = [
  { anio: 2021, nombre: 'Concurso Proyectos Innovación COVID-19', tipo: 'Concurso', participantes: 0,  ganadores: 5  },
  { anio: 2023, nombre: 'I Congreso de Iniciación Científica',    tipo: 'Congreso', participantes: 600, ganadores: 9  },
  { anio: 2023, nombre: 'Mi proyecto de tesis en un Poster',      tipo: 'Concurso', participantes: 46,  ganadores: 18 },
  { anio: 2023, nombre: 'Poster Científico',                       tipo: 'Concurso', participantes: 44,  ganadores: 0  },
  { anio: 2024, nombre: 'Proyectos Semilleros de Investigación',   tipo: 'Concurso', participantes: 0,   ganadores: 20 },
  { anio: 2024, nombre: 'Proyectos Grupos de Investigación',       tipo: 'Concurso', participantes: 0,   ganadores: 6  },
  { anio: 2024, nombre: 'II Congreso de Iniciación Científica',    tipo: 'Congreso', participantes: 600, ganadores: 0  },
  { anio: 2025, nombre: 'CONASEIN 2025 (Huancayo)',                tipo: 'Congreso', participantes: 0,   ganadores: 0  },
  { anio: 2025, nombre: 'Convocatoria Proyectos Semilleros y Grupos 2025', tipo: 'Concurso', participantes: 0, ganadores: 0 },
  { anio: 2026, nombre: 'Proyectos Semilleros de Investigación',   tipo: 'Concurso', participantes: 0,   ganadores: 0  },
  { anio: 2026, nombre: 'Proyectos Grupos de Investigación',       tipo: 'Concurso', participantes: 0,   ganadores: 0  },
];

// ------------------------------------------------------------------
// REPOSITORIO INSTITUCIONAL (Tesis 2021)
// ------------------------------------------------------------------
export const repositorioPosgrado2021 = [
  { programa: 'Doctorado en Administración',                             total: 7  },
  { programa: 'Doctorado en Ciencia, Tecnología y Medio Ambiente',       total: 15 },
  { programa: 'Doctorado en Ciencias de la Computación',                 total: 4  },
  { programa: 'Doctorado en Ciencias de la Salud',                       total: 4  },
  { programa: 'Doctorado en Ciencias Políticas y Gobernanza',            total: 3  },
  { programa: 'Doctorado en Ciencias Sociales',                          total: 1  },
  { programa: 'Doctorado en Contabilidad y Administración',              total: 3  },
  { programa: 'Doctorado en Economía y Desarrollo Sostenible',           total: 2  },
  { programa: 'Doctorado en Economía y Gestión',                         total: 2  },
  { programa: 'Doctorado en Economía y Políticas Públicas',              total: 4  },
  { programa: 'Doctorado en Educación',                                  total: 5  },
];

// ------------------------------------------------------------------
// LÍNEAS DE INVESTIGACIÓN POR AÑO
// ------------------------------------------------------------------
export const lineasInvestigacion = [
  { anio: 2023, totalLineas: 12, totalSublineas: 48 },
  { anio: 2024, totalLineas: 12, totalSublineas: 52 },
  { anio: 2025, totalLineas: 12, totalSublineas: 60 },
];

// ------------------------------------------------------------------
// PREMIOS CONCURSO SEMILLEROS 2024 (20 ganadores)
// ------------------------------------------------------------------
export const ganadoresSemilleros2024 = [
  { nombre: 'Gonzales Alcos Vicky Cristina',     proyecto: 'Perfil de resistencia bacteriana aisladas de los relaves mineros del Centro Poblado de La Mina La Rinconada. Puno - 2024', ep: 'Ciencias Biológicas', monto: 10000 },
  { nombre: 'Condori Mamani Jorge',              proyecto: 'Proyecto de semillero', ep: 'Ciencias Agrarias',      monto: 10000 },
  { nombre: 'Fernández Quispe Luis',             proyecto: 'Proyecto de semillero', ep: 'Ing. Química',           monto: 10000 },
  { nombre: 'Mamani Torres Ana',                 proyecto: 'Proyecto de semillero', ep: 'Educación Secundaria',   monto: 10000 },
  { nombre: 'Quispe Flores Jorge',               proyecto: 'Proyecto de semillero', ep: 'Ing. de Sistemas',       monto: 10000 },
  { nombre: 'García Apaza Ruth',                 proyecto: 'Proyecto de semillero', ep: 'Nutrición Humana',       monto: 10000 },
  { nombre: 'Churata Quispe Edwin',              proyecto: 'Proyecto de semillero', ep: 'Sociología',             monto: 10000 },
  { nombre: 'Flores Condori Patricia',           proyecto: 'Proyecto de semillero', ep: 'Medicina Veterinaria',   monto: 10000 },
  { nombre: 'Mamani Huanca Carlos',              proyecto: 'Proyecto de semillero', ep: 'Odontología',            monto: 10000 },
  { nombre: 'Ccoa Colla Jessica',                proyecto: 'Proyecto de semillero', ep: 'Trabajo Social',         monto: 10000 },
];

export const ganadoresGrupos2024 = [
  { nombre: 'Leon Tacca Alicia Magaly',         proyecto: 'Revalorización de los cultivos de Cañihua y Tarwi para el desarrollo de un análogo de carne mediante tecnología de extrusión', ep: 'Ing. Agroindustrial', puntaje: 91.5, monto: 20000 },
  { nombre: 'Bravo Portocarrero Rosario Ysabel', proyecto: 'Evaluación de clones y variedades de papa resistentes a Phytopthora infestans y Meloidogyne hapla', ep: 'Ing. Agronómica', puntaje: 84.92, monto: 20000 },
  { nombre: 'Paredes Ugarte Wilber',             proyecto: 'Elaboración de una bebida funcional a base de lactosuero enriquecida con Cushuro y Fructooligosacáridos de la Quinua', ep: 'Nutrición Humana', puntaje: 83.5, monto: 20000 },
  { nombre: 'Laqui Vilca Wilber Fermin',         proyecto: 'Proyecto de grupo', ep: 'Ing. Civil', puntaje: 80.0, monto: 20000 },
  { nombre: 'Torres Escobar Tony Franklyn',      proyecto: 'Proyecto de grupo', ep: 'Ing. Agroindustrial', puntaje: 78.0, monto: 20000 },
  { nombre: 'Vilcanqui Musaja Paul Brayan',      proyecto: 'Proyecto de grupo', ep: 'Ing. Geológica', puntaje: 75.0, monto: 20000 },
];

// ------------------------------------------------------------------
// RESUMEN FINANCIERO CONCURSOS
// ------------------------------------------------------------------
export const financiamientoConcursos = [
  { anio: 2024, tipo: 'Semilleros', proyectos: 20, montoTotal: 200000 },
  { anio: 2024, tipo: 'Grupos',     proyectos: 6,  montoTotal: 120000 },
  { anio: 2025, tipo: 'Semilleros', proyectos: 0,  montoTotal: 0      },
  { anio: 2025, tipo: 'Grupos',     proyectos: 0,  montoTotal: 0      },
];

// --- NEW DATA ADDED BY SCRIPT ---
export const renacytPorNivel2026 = [
  { name: 'Nivel Vii', value: 72 },
  { name: 'Nivel Vi', value: 65 },
  { name: 'Nivel V', value: 57 },
  { name: 'Nivel Iv', value: 49 },
  { name: 'Nivel Iii', value: 35 },
  { name: 'Nivel Ii', value: 7 },
  { name: 'Nivel I', value: 1 },
  { name: 'Nivel Iv', value: 1 },
];

export const renacytPorFacultad2026 = [
  { name: 'Ciencias De La Educación', investigadores: 51 },
  { name: 'Ingeniería  Mecánica  Eléctrica, Electrónica Y Sistemas', investigadores: 38 },
  { name: 'Ingenieria Estadistica E Informatica', investigadores: 28 },
  { name: 'Ciencias Sociales', investigadores: 25 },
  { name: 'Ciencias Agrarias', investigadores: 22 },
  { name: 'Medicina Veterinaria Y Zootecnia', investigadores: 21 },
  { name: 'Ciencias De La Salud', investigadores: 16 },
  { name: 'Ingeniería  Civil  Y  Arquitectura', investigadores: 14 },
  { name: 'Ingeniería Económica', investigadores: 11 },
  { name: 'Ciencias Administrativas Y Humanas', investigadores: 9 },
  { name: 'Ingeniería Agrícola', investigadores: 8 },
  { name: 'Trabajo  Social', investigadores: 8 },
  { name: 'Ciencias  Biológicas', investigadores: 7 },
  { name: 'Enfermeria', investigadores: 5 },
  { name: 'Ingeniería Química', investigadores: 5 },
  { name: 'Ingeniería De Minas', investigadores: 5 },
  { name: 'Ciencias Jurídicas  Y  Políticas', investigadores: 4 },
  { name: 'Medicina  Humana', investigadores: 4 },
  { name: 'Ingeniería  De  Minas', investigadores: 2 },
  { name: 'Ciencias Contables Y Administrativas', investigadores: 2 },
  { name: 'Ingeniería Geológica Y  Metalurgia', investigadores: 2 },
];

export const renacytPorEscuela2026 = [
  { name: 'Ingeniería Estadística E Informática', investigadores: 28 },
  { name: 'Educación Secundaria', investigadores: 26 },
  { name: 'Medicina Veterinaria Y Zootecnia', investigadores: 21 },
  { name: 'Ingeniería Electrónica', investigadores: 15 },
  { name: 'Ingeniería Agronómica', investigadores: 14 },
  { name: 'Ingeniería De Sistemas', investigadores: 14 },
  { name: 'Odontología', investigadores: 12 },
  { name: 'Ingeniería Económica', investigadores: 11 },
  { name: 'Administración', investigadores: 9 },
  { name: 'Ingeniería Mecánica Eléctrica', investigadores: 9 },
  { name: 'Educación  Primaria', investigadores: 9 },
  { name: 'Educación Fïsica', investigadores: 9 },
  { name: 'Trabajo Social', investigadores: 8 },
  { name: 'Ingeniería Agrícola', investigadores: 7 },
  { name: 'Ingeniería Agroindustrial', investigadores: 7 },
  { name: 'Biología', investigadores: 7 },
  { name: 'Ingeniería De Minas', investigadores: 7 },
  { name: 'Antropología', investigadores: 7 },
  { name: 'Sociología', investigadores: 7 },
  { name: 'Educación Inicial', investigadores: 7 },
  { name: 'Arquitectura Y Urbanismo', investigadores: 6 },
  { name: 'Ciencias  Físico – Matemáticas', investigadores: 6 },
  { name: 'Enfermería', investigadores: 5 },
  { name: 'Ingeniería Química', investigadores: 5 },
  { name: 'Nutrición Humana', investigadores: 4 },
  { name: 'Ciencias De La Comunicación Social', investigadores: 4 },
  { name: 'Derecho', investigadores: 4 },
  { name: 'Medicina  Humana', investigadores: 4 },
  { name: 'Arte', investigadores: 3 },
  { name: 'Turísmo', investigadores: 2 },
  { name: 'Contabilidad', investigadores: 2 },
  { name: 'Ingeniería  Civil', investigadores: 2 },
  { name: 'Departamento De Humanidades', investigadores: 2 },
  { name: 'Ingeniería Topográfica Y Agrimensura', investigadores: 1 },
  { name: 'Ingeniería  Agrícola', investigadores: 1 },
  { name: 'Ingeniería Geológica', investigadores: 1 },
  { name: 'Ingeniería  Metalúrgica', investigadores: 1 },
];
