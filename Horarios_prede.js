  const USUARIOS = {

    // =================== BRUCA (6E) ===================
    bruca: {
      1: { // Lunes
        inicio: "13:20",
        salida: "20:55",
        recreos: [
          { nombre: "Recreo 1/4", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/4", inicio: "16:15", fin: "16:30" },
          { nombre: "Bajar la bandera 3/4", inicio: "17:45", fin: "18:05" },
          { nombre: "Recreo 4/4", inicio: "19:05", fin: "19:10" },
        ],
        materias: [
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Inglés",            profesor: "Balduzzi Noelia", inicio: "13:30", fin: "15:35" },
          { nombre: "Base De Datos I",   inicio: "15:35", fin: "19:45" },
          { nombre: "Estadística",       inicio: "19:45", fin: "20:55" },
        ],
      },
      2: { // Martes
        inicio: "10:30",
        salida: "20:55",
        recreos: [
          { nombre: "Libre", inicio: "11:30", fin: "13:20" },
          { nombre: "Recreo 1/4", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/4", inicio: "16:15", fin: "16:30" },
          { nombre: "Bajar la bandera 3/4", inicio: "17:45", fin: "18:05" },
          { nombre: "Recreo 4/4", inicio: "19:05", fin: "19:10" },
        ],
        materias: [
          { nombre: "Educación Física",  inicio: "10:30", fin: "11:30" },
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Lengua",               profesor: "Moya Camila",     inicio: "13:30", fin: "15:35" },
          { nombre: "Cuidadanía y Política", inicio: "15:35", fin: "17:05" },
          { nombre: "Filosofía",            profesor: "Soncini Agustina", inicio: "17:05", fin: "19:05" },
          { nombre: "Análisis Matemático",  profesor: "Burgos S.",       inicio: "19:10", fin: "20:55" },
        ],
      },
      3: { // Miércoles (jornada reducida)
        inicio: "10:30",
        salida: "19:05",
        recreos: [
          { nombre: "Recreo 1/3", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/3", inicio: "16:15", fin: "16:30" },
          { nombre: "Bajar la bandera 3/3", inicio: "17:45", fin: "18:05" },
        ],
        materias: [
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Educación Física", inicio: "10:30", fin: "11:30" },
          { nombre: "Estadísticas",     inicio: "13:30", fin: "14:50" },
          { nombre: "Programación III", inicio: "14:55", fin: "19:05" },
        ],
      },
      4: { // Jueves
        inicio: "10:30",
        salida: "20:55",
        recreos: [
          { nombre: "Libre", inicio: "11:30", fin: "13:20" },
          { nombre: "Recreo 1/4", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/4", inicio: "16:15", fin: "16:30" },
          { nombre: "Bajar la bandera 3/4", inicio: "17:45", fin: "18:05" },
          { nombre: "Recreo 4/4", inicio: "19:05", fin: "19:10" },
        ],
        materias: [
          { nombre: "Educación Física",  inicio: "10:30", fin: "11:30" },
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Economía y Gestión de la Prod. Industrial", profesor: "Levin N.",  inicio: "13:30", fin: "14:50" },
          { nombre: "Cuidadanía y Política",                     inicio: "14:55", fin: "15:35" },
          { nombre: "Análisis Matemático",                       profesor: "Burgos S.", inicio: "15:35", fin: "17:05" },
          { nombre: "Sistemas y Telecomunicaciones",             profesor: "Choque P.", inicio: "17:05", fin: "20:55" },
        ],
      },
      5: { // Viernes (jornada reducida)
        inicio: "13:20",
        salida: "17:05",
        recreos: [
          { nombre: "Recreo 1/2", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/2", inicio: "16:15", fin: "16:30" },
        ],
        materias: [
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Recursos Humanos",                          profesor: "Oviedo Ivana", inicio: "13:30", fin: "15:35" },
          { nombre: "Ed. Artística Teatro",                      inicio: "15:35", fin: "17:05" },
          { nombre: "Economía y Gestión de la Prod. Industrial", profesor: "Nancy",        inicio: "17:05", fin: "18:30" },
        ],
      },
    },
