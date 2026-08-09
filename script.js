/* ===================================================================
   ¿CUÁNTO FALTA? — Lógica
   Toda la configuración de horarios vive en USUARIOS, un objeto con
   una clave por usuario ("bruca" y "mely"). Cada usuario tiene su
   propio horario de entrada/salida, recreos y MATERIAS por día.
   No requiere build ni dependencias externas.
=================================================================== */

(() => {
  "use strict";

  /* -----------------------------------------------------------------
     1) CONFIGURACIÓN DE HORARIOS POR USUARIO
     Editar esta sección para adaptar la app a cada alumno/escuela.
     Claves de día: 0=Domingo, 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves,
     5=Viernes, 6=Sábado. Si un día no tiene clave, la app muestra
     "Hoy no hay clases." automáticamente para ese día.
     "inicio"  = hora de entrada (referencia para el anillo de progreso).
     "salida"  = hora de fin de jornada.
     "recreos" = lista ordenada de recreos del día.
     "materias" = lista ordenada de bloques de clase del día. Cada bloque
       representa una materia "de punta a punta" (aunque en el medio
       haya un recreo corto, que se muestra aparte en su propio panel).

     Horarios de Bruca (curso 5D) y Mely (6° Economía) cargados a partir
     de las planillas que pasaste. Quedan tal cual figuran en las fotos
     (con algún horario redondeado donde la planilla tenía una
     superposición rara) — cualquier detalle se corrige a mano después.

     El bloque "0" (Domingo) de cada usuario es un horario DE PRUEBA
     (materias inventadas) solo para poder ver la app funcionando un
     domingo. Se puede borrar sin problema cuando ya no haga falta.
  ----------------------------------------------------------------- */

  const USUARIOS = {

    // =================== BRUCA (6E) ===================
    bruca: {
      0: { // Domingo — SOLO DE PRUEBA, borrar cuando ya no se necesite testear
        inicio: "13:20",
        salida: "20:55",
        recreos: [
          { nombre: "Recreo 1", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2", inicio: "16:15", fin: "16:25" },
          { nombre: "Recreo 3", inicio: "17:45", fin: "17:55" },
          { nombre: "Recreo 4", inicio: "19:05", fin: "19:10" },
        ],
        materias: [
          { nombre: "[PRUEBA] Materia 1", inicio: "13:20", fin: "14:50" },
          { nombre: "[PRUEBA] Materia 2", inicio: "14:55", fin: "16:15" },
          { nombre: "[PRUEBA] Materia 3", inicio: "16:25", fin: "17:45" },
          { nombre: "[PRUEBA] Materia 4", inicio: "17:55", fin: "19:05" },
          { nombre: "[PRUEBA] Materia 5", inicio: "19:10", fin: "20:55" },
        ],
      },
      1: { // Lunes
        inicio: "13:20",
        salida: "20:55",
        recreos: [
          { nombre: "Recreo", inicio: "10:15", fin: "10:45" },
          { nombre: "Recreo", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo", inicio: "16:15", fin: "16:25" },
          { nombre: "Bajar la bandera", inicio: "17:45", fin: "17:55" },
          { nombre: "Recreo", inicio: "19:05", fin: "19:10" },
        ],
        materias: [
          { nombre: "Formación",                      inicio: "13:20", fin: "13:30" },
          { nombre: "Inglés (Balduzzi Noelia)",       inicio: "13:30", fin: "15:35" },
          { nombre: "Base De Datos I",                inicio: "15:35", fin: "19:45" },
          { nombre: "Estadística",                    inicio: "19:45", fin: "20:55" },
        ],
      },
      2: { // Martes
        inicio: "13:30",
        salida: "20:55",
        recreos: [
          { nombre: "Recreo", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo", inicio: "16:15", fin: "16:25" },
          { nombre: "Bajar la bandera", inicio: "17:45", fin: "17:55" },
          { nombre: "Recreo", inicio: "19:05", fin: "19:10" },
        ],
        materias: [
          { nombre: "Formación",                        inicio: "13:20", fin: "13:30" },
          { nombre: "Lengua (Moya Camila)",             inicio: "13:30", fin: "15:35" },
          { nombre: "Cuidadanía y Política",            inicio: "15:35", fin: "17:05" },
          { nombre: "Filosofía (Soncini Agustina)",     inicio: "17:05", fin: "19:05" },
          { nombre: "Análisis Matemático (Burgos S.)",  inicio: "19:10", fin: "20:55" },
        ],
      },
      3: { // Miércoles (jornada reducida)
        inicio: "08:55",
        salida: "19:05",
        recreos: [
          { nombre: "Recreo", inicio: "10:15", fin: "10:45" },
          { nombre: "Recreo", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo", inicio: "16:15", fin: "16:25" },
          { nombre: "Bajar la bandera", inicio: "17:45", fin: "17:55" },
        ],
        materias: [
          { nombre: "Formación",            inicio: "13:20", fin: "13:30" },
          { nombre: "Educación Física",     inicio: "08:55", fin: "10:15" },
          { nombre: "Estadísticas",         inicio: "13:30", fin: "14:50" },
          { nombre: "Programación III",     inicio: "14:55", fin: "19:05" },
        ],
      },
      4: { // Jueves
        inicio: "13:30",
        salida: "20:55",
        recreos: [
          { nombre: "Recreo", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo", inicio: "16:15", fin: "16:25" },
          { nombre: "Bajar la bandera", inicio: "17:45", fin: "17:55" },
          { nombre: "Recreo", inicio: "19:05", fin: "19:10" },
        ],
        materias: [
          { nombre: "Formación",                      inicio: "13:20", fin: "13:30" },
          { nombre: "Economía y Gestión de la Prod. Industrial (Levin N.)", inicio: "13:30", fin: "14:50" },
          { nombre: "Cuidadanía y Política",                                 inicio: "14:55", fin: "15:35" },
          { nombre: "Análisis Matemático (Burgos S.)",                      inicio: "15:35", fin: "17:05" },
          { nombre: "Sistemas y Telecomunicaciones (Choque P.)",            inicio: "17:05", fin: "20:55" },
        ],
      },
      5: { // Viernes (jornada reducida)
        inicio: "13:30",
        salida: "18:30",
        recreos: [
          { nombre: "Recreo", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo", inicio: "16:15", fin: "16:25" },
          { nombre: "Bajar la bandera", inicio: "17:45", fin: "17:55" },
        ],
        materias: [
          { nombre: "Formación",                                                inicio: "13:20", fin: "13:30" },
          { nombre: "Recursos Humanos (Oviedo Ivana)",                          inicio: "13:30", fin: "15:35" },
          { nombre: "Ed. Artística Teatro",                                     inicio: "15:35", fin: "17:05" },
          { nombre: "Economía y Gestión de la Prod. Industrial (Nancy)",        inicio: "17:05", fin: "18:30" },
        ],
      },
    },

    // =================== MELY (6° Economía T.T.) ===================
    mely: {
      0: { // Domingo — SOLO DE PRUEBA, borrar cuando ya no se necesite testear
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo 1", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo 2", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "[PRUEBA] Materia 1", inicio: "13:00", fin: "15:00" },
          { nombre: "[PRUEBA] Materia 2", inicio: "15:15", fin: "17:10" },
          { nombre: "[PRUEBA] Materia 3", inicio: "17:15", fin: "19:40" },
        ],
      },
      1: { // Lunes
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Sist. Inform. Contable (Barrionuevo)", inicio: "13:00", fin: "15:00" },
          { nombre: "Educación Física (Córdoba)",            inicio: "15:15", fin: "16:25" },
          { nombre: "Matemática (Sánchez)",                  inicio: "16:25", fin: "17:45" },
          { nombre: "Administración (Prado)",                inicio: "17:45", fin: "19:40" },
        ],
      },
      2: { // Martes
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Lengua y Literatura",                       inicio: "13:00", fin: "14:20" },
          { nombre: "Derecho (Sánchez)",                         inicio: "14:20", fin: "16:25" },
          { nombre: "Form. para la Vida y el Trabajo (Rodríguez)", inicio: "16:25", fin: "18:30" },
          { nombre: "Química (Rocha)",                           inicio: "18:30", fin: "19:40" },
        ],
      },
      3: { // Miércoles (jornada reducida)
        inicio: "13:00",
        salida: "19:10",
        recreos: [
          { nombre: "Recreo", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Educación Física (Córdoba)", inicio: "13:00", fin: "14:20" },
          { nombre: "Lengua y Literatura",         inicio: "14:20", fin: "15:45" },
          { nombre: "Química (Rocha)",             inicio: "15:45", fin: "17:10" },
          { nombre: "Economía (Rosas)",            inicio: "17:15", fin: "19:10" },
        ],
      },
      4: { // Jueves
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Matemática (Sánchez)",                 inicio: "13:00", fin: "14:20" },
          { nombre: "Teatro (Alessio)",                      inicio: "14:20", fin: "16:25" },
          { nombre: "Adm. de la Producción / ConTIC (Rosas-Rocha)", inicio: "16:25", fin: "17:45" },
          { nombre: "Inglés (Herrera)",                      inicio: "17:45", fin: "19:40" },
        ],
      },
      5: { // Viernes
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Filosofía (Mercado)",                          inicio: "13:00", fin: "15:00" },
          { nombre: "Ciudadanía y Política (Sánchez A.)",            inicio: "15:15", fin: "17:10" },
          { nombre: "Adm. de la Producción / ConTIC (Rosas-Rocha)",  inicio: "17:15", fin: "17:45" },
          { nombre: "Sist. Inform. Contable (Barrionuevo)",          inicio: "17:45", fin: "19:40" },
        ],
      },
    },
  };

  const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                 "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const RING_RADIUS = 140;
  const RING_CIRC = 2 * Math.PI * RING_RADIUS;

  /* -----------------------------------------------------------------
     2) USUARIO ACTUAL
     Se guarda en localStorage para recordarlo entre visitas. El valor
     por defecto es "mely". El <html data-user="..."> ya viene seteado
     desde un script inline en el <head> del HTML (evita parpadeos).
  ----------------------------------------------------------------- */

  function obtenerUsuarioActual() {
    const enHtml = document.documentElement.getAttribute("data-user");
    return enHtml === "bruca" ? "bruca" : "mely";
  }

  let usuarioActual = obtenerUsuarioActual();

  function establecerUsuario(usuario) {
    usuarioActual = usuario === "bruca" ? "bruca" : "mely";
    document.documentElement.setAttribute("data-user", usuarioActual);
    try { localStorage.setItem("cf_usuario", usuarioActual); } catch (e) { /* almacenamiento no disponible */ }
    actualizarBotonesUsuario();
    actualizarColoresFondo();
    tick(); // refresca todo inmediatamente con el nuevo horario/paleta
  }

  function actualizarBotonesUsuario() {
    document.querySelectorAll(".user-switch .user-btn").forEach((btn) => {
      const activo = btn.dataset.user === usuarioActual;
      btn.classList.toggle("is-active", activo);
      btn.setAttribute("aria-pressed", String(activo));
    });
  }

  /* -----------------------------------------------------------------
     3) REFERENCIAS AL DOM
  ----------------------------------------------------------------- */
  const el = {
    date: document.getElementById("date"),
    clockH: document.getElementById("clock-h"),
    clockM: document.getElementById("clock-m"),
    clockS: document.getElementById("clock-s"),

    stage: document.getElementById("stage"),
    ringWrap: document.getElementById("ring-wrap"),
    ringProgress: document.getElementById("ring-progress"),
    ringTicks: document.getElementById("ring-ticks"),
    exitH: document.getElementById("exit-h"),
    exitM: document.getElementById("exit-m"),
    exitS: document.getElementById("exit-s"),
    exitStatus: document.getElementById("exit-status"),

    subjectPanel: document.getElementById("subject-panel"),
    subjectDot: document.getElementById("subject-dot"),
    subjectStatus: document.getElementById("subject-status"),
    subjectName: document.getElementById("subject-name"),
    subjectH: document.getElementById("subject-h"),
    subjectM: document.getElementById("subject-m"),
    subjectS: document.getElementById("subject-s"),
    subjectNext: document.getElementById("subject-next"),
    subjectRemaining: document.getElementById("subject-remaining"),

    recessPanel: document.getElementById("recess-panel"),
    recessDot: document.getElementById("recess-dot"),
    recessLabel: document.getElementById("recess-label"),
    recessFill: document.getElementById("recess-fill"),
    recessH: document.getElementById("recess-h"),
    recessM: document.getElementById("recess-m"),
    recessS: document.getElementById("recess-s"),

    specialMessage: document.getElementById("special-message"),
    specialText: document.getElementById("special-text"),
    specialIcon: document.getElementById("special-icon"),

    soundToggle: document.getElementById("sound-toggle"),
  };

  /* -----------------------------------------------------------------
     4) UTILIDADES DE TIEMPO
  ----------------------------------------------------------------- */

  // Convierte "HH:MM" en un objeto Date con la fecha de referencia dada.
  function horaStringADate(horaStr, fechaReferencia) {
    const [h, m] = horaStr.split(":").map(Number);
    const d = new Date(fechaReferencia);
    d.setHours(h, m, 0, 0);
    return d;
  }

  function pad2(n) {
    return String(Math.max(0, n)).padStart(2, "0");
  }

  // Descompone una cantidad de milisegundos en horas, minutos y segundos.
  function calcularTiempoRestante(ms) {
    const totalSeg = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSeg / 3600);
    const m = Math.floor((totalSeg % 3600) / 60);
    const s = totalSeg % 60;
    return { h, m, s, totalSeg };
  }

  /* -----------------------------------------------------------------
     5) OBTENCIÓN DE FECHA / HORA Y CARGA DE HORARIO DEL DÍA
  ----------------------------------------------------------------- */

  function obtenerFechaActual() {
    return new Date();
  }

  function formatearFecha(d) {
    const diaSemana = DIAS[d.getDay()];
    const mes = MESES[d.getMonth()];
    return `${diaSemana} ${d.getDate()} de ${mes} de ${d.getFullYear()}`;
  }

  // Carga el horario del día para el usuario actualmente seleccionado.
  function cargarHorarioDelDia(d) {
    const horarioUsuario = USUARIOS[usuarioActual] || {};
    return horarioUsuario[d.getDay()] || null;
  }

  /* -----------------------------------------------------------------
     6) BÚSQUEDA DEL RECREO ACTUAL / PRÓXIMO
  ----------------------------------------------------------------- */

  function buscarProximoRecreo(horario, ahora) {
    const recreos = horario.recreos.map((r) => ({
      ...r,
      inicioDate: horaStringADate(r.inicio, ahora),
      finDate: horaStringADate(r.fin, ahora),
    }));

    const enCurso = recreos.find((r) => ahora >= r.inicioDate && ahora < r.finDate);
    if (enCurso) return { tipo: "en_curso", recreo: enCurso, anterior: null };

    const proximo = recreos.find((r) => r.inicioDate > ahora);
    if (proximo) {
      const idx = recreos.indexOf(proximo);
      const anterior = idx > 0 ? recreos[idx - 1].finDate : horaStringADate(horario.inicio, ahora);
      return { tipo: "proximo", recreo: proximo, anterior };
    }

    return { tipo: "ninguno", recreo: null, anterior: null };
  }

  /* -----------------------------------------------------------------
     7) BÚSQUEDA DE LA MATERIA ACTUAL / SIGUIENTE
     Determina en qué materia estamos (si hay alguna en curso), cuál es
     la próxima materia (ya sea después de la actual, o la primera del
     día si todavía no arrancaron las clases) y cuántas materias quedan
     por cursar hoy (sin contar la que está en curso).
  ----------------------------------------------------------------- */

  function buscarMateriaActual(horario, ahora) {
    const materias = (horario.materias || []).map((m) => ({
      ...m,
      inicioDate: horaStringADate(m.inicio, ahora),
      finDate: horaStringADate(m.fin, ahora),
    }));

    const actual = materias.find((m) => ahora >= m.inicioDate && ahora < m.finDate) || null;
    const futuras = materias.filter((m) => m.inicioDate > ahora);

    if (actual) {
      // Hay una materia en curso: la "siguiente" es la próxima en el listado.
      const siguiente = futuras[0] || null;
      return { tipo: "en_clase", actual, siguiente, restantes: futuras.length };
    }

    if (futuras.length > 0) {
      // No hay materia en curso (recreo, hueco o todavía no empieza),
      // pero quedan materias por delante hoy.
      return { tipo: "esperando", actual: null, siguiente: futuras[0], restantes: futuras.length };
    }

    // No hay materia en curso ni materias futuras: terminaron las clases de hoy.
    return { tipo: "sin_materias", actual: null, siguiente: null, restantes: 0 };
  }

  /* -----------------------------------------------------------------
     8) ANIMACIÓN DE DÍGITOS AL CAMBIAR
  ----------------------------------------------------------------- */

  const ultimoValor = new WeakMap();

  function escribirNumero(elemento, valor) {
    const texto = pad2(valor);
    if (ultimoValor.get(elemento) !== texto) {
      ultimoValor.set(elemento, texto);
      elemento.textContent = texto;
      elemento.classList.remove("pulse");
      // forzar reflow para reiniciar la animación
      void elemento.offsetWidth;
      elemento.classList.add("pulse");
    }
  }

  /* -----------------------------------------------------------------
     9) SONIDO OPCIONAL (Web Audio API, sin archivos externos)
  ----------------------------------------------------------------- */

  let sonidoActivo = false;
  let audioCtx = null;

  function asegurarAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    return audioCtx;
  }

  function reproducirTono(frecuencia, duracionMs, tipo = "sine") {
    if (!sonidoActivo) return;
    const ctx = asegurarAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = tipo;
    osc.frequency.value = frecuencia;
    gain.gain.value = 0.0001;
    osc.connect(gain).connect(ctx.destination);
    const now = ctx.currentTime;
    gain.gain.exponentialRampToValueAtTime(0.06, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duracionMs / 1000);
    osc.start(now);
    osc.stop(now + duracionMs / 1000 + 0.05);
  }

  function sonarInicioRecreo() {
    reproducirTono(660, 220);
    setTimeout(() => reproducirTono(880, 260), 180);
  }

  function sonarFinJornada() {
    reproducirTono(523, 200);
    setTimeout(() => reproducirTono(392, 320), 220);
  }

  function sonarCambioDeMateria() {
    reproducirTono(500, 160);
    setTimeout(() => reproducirTono(700, 200), 140);
  }

  el.soundToggle.addEventListener("click", () => {
    sonidoActivo = !sonidoActivo;
    el.soundToggle.setAttribute("aria-pressed", String(sonidoActivo));
    if (sonidoActivo) {
      const ctx = asegurarAudioCtx();
      if (ctx && ctx.state === "suspended") ctx.resume();
      reproducirTono(740, 120);
    }
  });

  /* -----------------------------------------------------------------
     10) SWITCH DE USUARIO (Bruca / Mely)
  ----------------------------------------------------------------- */

  document.querySelectorAll(".user-switch .user-btn").forEach((btn) => {
    btn.addEventListener("click", () => establecerUsuario(btn.dataset.user));
  });
  actualizarBotonesUsuario();

  /* -----------------------------------------------------------------
     11) ACTUALIZACIÓN DEL RELOJ Y LA FECHA
  ----------------------------------------------------------------- */

  function actualizarReloj(ahora) {
    el.clockH.textContent = pad2(ahora.getHours());
    el.clockM.textContent = pad2(ahora.getMinutes());
    el.clockS.textContent = pad2(ahora.getSeconds());
  }

  let fechaMostrada = "";
  function actualizarFecha(ahora) {
    const texto = formatearFecha(ahora);
    if (texto !== fechaMostrada) {
      fechaMostrada = texto;
      el.date.textContent = texto;
    }
  }

  /* -----------------------------------------------------------------
     12) ANILLO DE PROGRESO (contador principal)
  ----------------------------------------------------------------- */

  function inicializarAnillo() {
    el.ringProgress.style.strokeDasharray = `${RING_CIRC}`;
    el.ringProgress.style.strokeDashoffset = `${RING_CIRC}`;

    // Genera 60 marcas alrededor del anillo
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 60; i++) {
      const angulo = (i / 60) * 360;
      const esLarga = i % 5 === 0;
      const r1 = esLarga ? 152 : 148;
      const r2 = 158;
      const rad = (angulo * Math.PI) / 180;
      const x1 = 160 + r1 * Math.sin(rad);
      const y1 = 160 - r1 * Math.cos(rad);
      const x2 = 160 + r2 * Math.sin(rad);
      const y2 = 160 - r2 * Math.cos(rad);
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1.toFixed(2));
      line.setAttribute("y1", y1.toFixed(2));
      line.setAttribute("x2", x2.toFixed(2));
      line.setAttribute("y2", y2.toFixed(2));
      line.setAttribute("stroke-width", esLarga ? "1.6" : "0.8");
      frag.appendChild(line);
    }
    el.ringTicks.appendChild(frag);
  }

  function actualizarAnilloPrincipal(fraccionTranscurrida) {
    const f = Math.min(1, Math.max(0, fraccionTranscurrida));
    const offset = RING_CIRC * (1 - f);
    el.ringProgress.style.strokeDashoffset = `${offset}`;
  }

  /* -----------------------------------------------------------------
     13) CONTADOR PRINCIPAL: tiempo para la salida
  ----------------------------------------------------------------- */

  function actualizarContadorPrincipal(msRestantes, fraccionTranscurrida, estado) {
    const { h, m, s } = calcularTiempoRestante(msRestantes);
    escribirNumero(el.exitH, h);
    escribirNumero(el.exitM, m);
    escribirNumero(el.exitS, s);
    actualizarAnilloPrincipal(fraccionTranscurrida);

    if (estado === "ultimos_minutos") {
      el.exitStatus.textContent = "¡Ya casi! Últimos minutos de la jornada.";
    } else {
      el.exitStatus.textContent = "";
    }
  }

  /* -----------------------------------------------------------------
     14) PANEL DE MATERIA: clase actual, tiempo restante, siguiente
     materia y cantidad de materias que faltan para irnos.
  ----------------------------------------------------------------- */

  let estadoMateriaAnterior = null; // para detectar el cambio de materia y sonar aviso

  function textoRestantes(cantidad) {
    if (cantidad <= 0) return "Es la última materia del día";
    if (cantidad === 1) return "Queda 1 materia después de esta";
    return `Quedan ${cantidad} materias después de esta`;
  }

  function actualizarPanelMaterias(infoMateria, ahora) {
    if (infoMateria.tipo === "en_clase") {
      if (estadoMateriaAnterior !== infoMateria.actual.nombre) sonarCambioDeMateria();
      estadoMateriaAnterior = infoMateria.actual.nombre;

      el.subjectPanel.classList.add("is-active");
      el.subjectStatus.textContent = "Estás en clase de";
      el.subjectName.textContent = infoMateria.actual.nombre;

      const restante = infoMateria.actual.finDate - ahora;
      const { h, m, s } = calcularTiempoRestante(restante);
      escribirNumero(el.subjectH, h);
      escribirNumero(el.subjectM, m);
      escribirNumero(el.subjectS, s);

      el.subjectNext.textContent = infoMateria.siguiente
        ? `Siguiente: ${infoMateria.siguiente.nombre}`
        : "Siguiente: no hay más clases hoy";
      el.subjectRemaining.textContent = textoRestantes(infoMateria.restantes);
      return;
    }

    el.subjectPanel.classList.remove("is-active");

    if (infoMateria.tipo === "esperando") {
      estadoMateriaAnterior = "esperando";
      el.subjectStatus.textContent = "Sin clase en este momento";
      el.subjectName.textContent = infoMateria.siguiente.nombre;

      const restante = infoMateria.siguiente.inicioDate - ahora;
      const { h, m, s } = calcularTiempoRestante(restante);
      escribirNumero(el.subjectH, h);
      escribirNumero(el.subjectM, m);
      escribirNumero(el.subjectS, s);

      el.subjectNext.textContent = `Empieza en ${pad2(h)}:${pad2(m)}:${pad2(s)}`;
      el.subjectRemaining.textContent = textoRestantes(infoMateria.restantes - 1 >= 0 ? infoMateria.restantes - 1 : 0);
      return;
    }

    // tipo === "sin_materias": no quedan más materias hoy
    estadoMateriaAnterior = "sin_materias";
    el.subjectStatus.textContent = "Sin más clases hoy";
    el.subjectName.textContent = "Esperando la salida";
    escribirNumero(el.subjectH, 0);
    escribirNumero(el.subjectM, 0);
    escribirNumero(el.subjectS, 0);
    el.subjectNext.textContent = "Siguiente: —";
    el.subjectRemaining.textContent = "No quedan materias por cursar";
  }

  /* -----------------------------------------------------------------
     15) CONTADOR SECUNDARIO: próximo recreo / recreo en curso
  ----------------------------------------------------------------- */

  let estadoRecreoAnterior = null; // para detectar transiciones y disparar sonido

  function actualizarContadorSecundario(infoRecreo, ahora) {
    if (infoRecreo.tipo === "en_curso") {
      if (estadoRecreoAnterior !== "en_curso") sonarInicioRecreo();
      estadoRecreoAnterior = "en_curso";

      el.recessPanel.classList.add("is-active");
      el.recessLabel.textContent = "Actualmente estás en recreo";

      const total = infoRecreo.recreo.finDate - infoRecreo.recreo.inicioDate;
      const restante = infoRecreo.recreo.finDate - ahora;
      const transcurrido = 1 - restante / total;

      const { h, m, s } = calcularTiempoRestante(restante);
      escribirNumero(el.recessH, h);
      escribirNumero(el.recessM, m);
      escribirNumero(el.recessS, s);
      el.recessFill.style.width = `${Math.min(100, Math.max(0, transcurrido * 100))}%`;
      return;
    }

    el.recessPanel.classList.remove("is-active");

    if (infoRecreo.tipo === "proximo") {
      estadoRecreoAnterior = "proximo";
      el.recessLabel.textContent = "Próximo recreo";

      const total = infoRecreo.recreo.inicioDate - infoRecreo.anterior;
      const restante = infoRecreo.recreo.inicioDate - ahora;
      const transcurrido = total > 0 ? 1 - restante / total : 0;

      const { h, m, s } = calcularTiempoRestante(restante);
      escribirNumero(el.recessH, h);
      escribirNumero(el.recessM, m);
      escribirNumero(el.recessS, s);
      el.recessFill.style.width = `${Math.min(100, Math.max(0, transcurrido * 100))}%`;
      return;
    }

    // tipo === "ninguno": no quedan más recreos hoy
    estadoRecreoAnterior = "ninguno";
    el.recessLabel.textContent = "No quedan más recreos hoy";
    escribirNumero(el.recessH, 0);
    escribirNumero(el.recessM, 0);
    escribirNumero(el.recessS, 0);
    el.recessFill.style.width = "100%";
  }

  /* -----------------------------------------------------------------
     16) MENSAJES ESPECIALES (fin de semana / jornada finalizada)
  ----------------------------------------------------------------- */

  let yaSonoFinJornada = false;

  function mostrarMensajesEspeciales(texto, icono) {
    el.stage.querySelectorAll(".ring-wrap, .subject-panel, .recess-panel").forEach((n) => (n.hidden = true));
    el.specialMessage.hidden = false;
    el.specialText.textContent = texto;
    el.specialIcon.textContent = icono;
  }

  function ocultarMensajesEspeciales() {
    el.specialMessage.hidden = true;
    el.stage.querySelectorAll(".ring-wrap, .subject-panel, .recess-panel").forEach((n) => (n.hidden = false));
  }

  /* -----------------------------------------------------------------
     17) CICLO PRINCIPAL
  ----------------------------------------------------------------- */

  function tick() {
    const ahora = obtenerFechaActual();
    actualizarFecha(ahora);
    actualizarReloj(ahora);

    // Ya no se asume "sin clase" por ser sábado/domingo: cada día se rige
    // únicamente por si USUARIOS tiene o no una clave configurada para él
    // (esto permite, por ejemplo, tener un horario de prueba los domingos).
    const horario = cargarHorarioDelDia(ahora);
    if (!horario) {
      document.body.classList.remove("state-ended");
      yaSonoFinJornada = false;
      mostrarMensajesEspeciales("Hoy no hay clases.", "✦");
      return;
    }

    const horaInicio = horaStringADate(horario.inicio, ahora);
    const horaSalida = horaStringADate(horario.salida, ahora);

    if (ahora >= horaSalida) {
      document.body.classList.add("state-ended");
      if (!yaSonoFinJornada) {
        sonarFinJornada();
        yaSonoFinJornada = true;
      }
      mostrarMensajesEspeciales("La jornada escolar ha finalizado.", "◆");
      return;
    }

    document.body.classList.remove("state-ended");
    yaSonoFinJornada = false;
    ocultarMensajesEspeciales();

    // --- Contador principal (salida) ---
    const msHastaSalida = horaSalida - ahora;
    const totalJornada = horaSalida - horaInicio;
    const transcurridoJornada = totalJornada > 0 ? (ahora - horaInicio) / totalJornada : 0;
    const estadoPrincipal = msHastaSalida < 5 * 60 * 1000 ? "ultimos_minutos" : "normal";
    actualizarContadorPrincipal(msHastaSalida, transcurridoJornada, estadoPrincipal);

    // --- Panel de materia actual ---
    const infoMateria = buscarMateriaActual(horario, ahora);
    actualizarPanelMaterias(infoMateria, ahora);

    // --- Contador secundario (recreos) ---
    const infoRecreo = buscarProximoRecreo(horario, ahora);
    actualizarContadorSecundario(infoRecreo, ahora);
  }

  /* -----------------------------------------------------------------
     18) FONDO ANIMADO: partículas tipo constelación
     Los colores se leen desde las variables CSS del usuario activo,
     así que el fondo cambia de tono automáticamente al cambiar de tema.
  ----------------------------------------------------------------- */

  let colorLinea = "rgba(91, 231, 255, ALPHA)";
  let colorPunto = "rgba(62, 115, 215, 0.55)";

  function actualizarColoresFondo() {
    const estilos = getComputedStyle(document.documentElement);
    const cyanRgb = estilos.getPropertyValue("--cyan-rgb").trim() || "91, 231, 255";
    const whiteRgb = estilos.getPropertyValue("--white-rgb").trim() || "243, 246, 250";
    colorLinea = `rgba(${cyanRgb}, ALPHA)`;
    colorPunto = `rgba(${whiteRgb}, 0.45)`;
  }

  function iniciarFondoParticulas() {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ancho, alto, particulas;
    const DENSIDAD = prefersReduced ? 0 : 0.00009;
    const VELOCIDAD = prefersReduced ? 0 : 0.18;

    function dimensionar() {
      ancho = canvas.width = window.innerWidth;
      alto = canvas.height = window.innerHeight;
      const cantidad = Math.round(ancho * alto * DENSIDAD);
      particulas = Array.from({ length: cantidad }, () => ({
        x: Math.random() * ancho,
        y: Math.random() * alto,
        vx: (Math.random() - 0.5) * VELOCIDAD,
        vy: (Math.random() - 0.5) * VELOCIDAD,
        r: 0.6 + Math.random() * 1.4,
      }));
    }

    function paso() {
      ctx.clearRect(0, 0, ancho, alto);
      const DIST_MAX = 130;

      for (const p of particulas) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > ancho) p.vx *= -1;
        if (p.y < 0 || p.y > alto) p.vy *= -1;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particulas.length; i++) {
        for (let j = i + 1; j < particulas.length; j++) {
          const a = particulas[i], b = particulas[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < DIST_MAX) {
            const op = (1 - dist / DIST_MAX) * 0.12;
            ctx.strokeStyle = colorLinea.replace("ALPHA", op.toFixed(3));
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particulas) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = colorPunto;
        ctx.fill();
      }

      requestAnimationFrame(paso);
    }

    dimensionar();
    window.addEventListener("resize", dimensionar);
    requestAnimationFrame(paso);
  }

  /* -----------------------------------------------------------------
     19) INICIO DE LA APLICACIÓN
  ----------------------------------------------------------------- */

  function iniciar() {
    inicializarAnillo();
    actualizarColoresFondo();
    iniciarFondoParticulas();
    tick();
    setInterval(tick, 1000);
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();