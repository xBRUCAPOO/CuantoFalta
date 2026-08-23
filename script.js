(() => {
  "use strict";

  /* -----------------------------------------------------------------
     1) CONFIGURACIÓN DE HORARIOS POR USUARIO
  ----------------------------------------------------------------- */

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
          { nombre: "Cuidadanía y Política", inicio: "15:35", fin: "17:45" },
          // { nombre: "Filosofía",            profesor: "Soncini Agustina", inicio: "17:05", fin: "19:05" },
          { nombre: "Análisis Matemático",  profesor: "Burgos S.",       inicio: "19:10", fin: "20:55" },
        ],
      },
      3: { // Miércoles (jornada reducida)
        inicio: "13:20",
        salida: "19:05",
        recreos: [
          { nombre: "Recreo 1/3", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/3", inicio: "16:15", fin: "16:30" },
          { nombre: "Bajar la bandera 3/3", inicio: "17:45", fin: "18:05" },
        ],
        materias: [
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Estadística",     inicio: "13:30", fin: "14:10" },
          { nombre: "Recursos Humanos",     inicio: "14:10", fin: "14:50" },
          { nombre: "Programación III", inicio: "14:50", fin: "19:05" },
        ],
      },
      4: { // Jueves
        inicio: "10:30",
        salida: "17:05",
        recreos: [
          { nombre: "Libre", inicio: "11:30", fin: "13:20" },
          { nombre: "Recreo 1/2", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/2", inicio: "16:15", fin: "16:30" },
        ],
        materias: [
          { nombre: "Educación Física",  inicio: "10:30", fin: "11:30" },
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Economía y Gestión de la Prod. Industrial", profesor: "Levin N.",  inicio: "13:30", fin: "14:50" },
          { nombre: "Análisis Matemático",                       profesor: "Burgos S.", inicio: "15:35", fin: "17:05" },
          // { nombre: "Sistemas y Telecomunicaciones",             profesor: "Choque P.", inicio: "17:05", fin: "20:55" },
        ],
      },
      5: { // Viernes
        inicio: "13:20",
        salida: "18:30",
        recreos: [
          { nombre: "Recreo 1/2", inicio: "14:50", fin: "14:55" },
          { nombre: "Recreo 2/2", inicio: "16:15", fin: "16:30" },
        ],
        materias: [
          { nombre: "Formación",   inicio: "13:20", fin: "13:30" },
          { nombre: "Estadística",     inicio: "13:30", fin: "14:10" },
          { nombre: "Recursos Humanos",                          profesor: "Oviedo Ivana", inicio: "14:10", fin: "15:35" },
          { nombre: "Ed. Artística Teatro",                      inicio: "15:35", fin: "17:05" },
          { nombre: "Economía y Gestión de la Prod. Industrial", profesor: "Nancy",        inicio: "17:05", fin: "18:30" },
        ],
      },
    },

    // =================== MELY (6° Economía T.T.) ===================
    mely: {
      1: { // Lunes
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo 1/2", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo 2/2", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Educación Física",       profesor: "Córdoba",      inicio: "13:00", fin: "15:00"},
          { nombre: "Sist. Inform. Contable", profesor: "Barrionuevo",  inicio: "15:15", fin: "16:25"},
          { nombre: "Matemática",             profesor: "Sánchez",     inicio: "16:25", fin: "17:45" },
          { nombre: "Administración",         profesor: "Prado",       inicio: "17:45", fin: "19:40" },
        ],
      },
      2: { // Martes
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo 1/2", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo 2/2", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Lengua y Literatura",                 inicio: "13:00", fin: "14:20" },
          { nombre: "Derecho",                              profesor: "Sánchez",   inicio: "14:20", fin: "16:25" },
          { nombre: "Form. para la Vida y el Trabajo",     profesor: "Rodríguez", inicio: "16:25", fin: "18:30" },
          { nombre: "Química",                              profesor: "Rocha",     inicio: "18:30", fin: "19:40" },
        ],
      },
      3: { // Miércoles (jornada reducida)
        inicio: "13:00",
        salida: "19:10",
        recreos: [
          { nombre: "Recreo 1/2", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo 2/2", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Educación Física",   profesor: "Córdoba", inicio: "13:00", fin: "14:20" },
          { nombre: "Lengua y Literatura", inicio: "14:20", fin: "15:45" },
          { nombre: "Química",            profesor: "Rocha",   inicio: "15:45", fin: "17:10" },
          { nombre: "Economía",           profesor: "Rosas",   inicio: "17:15", fin: "19:10" },
        ],
      },
      4: { // Jueves
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo 1/2", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo 2/2", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Matemática",                   profesor: "Sánchez",      inicio: "13:00", fin: "14:20" },
          { nombre: "Teatro",                        profesor: "Alessio",      inicio: "14:20", fin: "16:25" },
          { nombre: "Adm. de la Producción / ConTIC", profesor: "Rosas-Rocha", inicio: "16:25", fin: "17:45" },
          { nombre: "Inglés",                        profesor: "Herrera",      inicio: "17:45", fin: "19:40" },
        ],
      },
      5: { // Viernes
        inicio: "13:00",
        salida: "19:40",
        recreos: [
          { nombre: "Recreo 1/2", inicio: "15:00", fin: "15:15" },
          { nombre: "Recreo 2/2", inicio: "17:10", fin: "17:15" },
        ],
        materias: [
          { nombre: "Filosofía",                      profesor: "Mercado",     inicio: "13:00", fin: "15:00" },
          { nombre: "Ciudadanía y Política",           profesor: "Sánchez A.", inicio: "15:15", fin: "17:10" },
          { nombre: "Adm. de la Producción / ConTIC",  profesor: "Rosas-Rocha", inicio: "17:15", fin: "18:30" },
          { nombre: "Sist. Inform. Contable",          profesor: "Barrionuevo", inicio: "18:30", fin: "19:40" },
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
    posicionarThumbSwitch();
    actualizarColoresFondo();
    // Si el panel de ajustes está abierto al cambiar de usuario, se
    // refresca para mostrar la hora de salida (normal o personalizada)
    // del usuario recién seleccionado, no la del anterior. (Las funciones
    // de ajustes están declaradas más abajo en este mismo archivo, pero
    // al ser "function" quedan disponibles acá arriba por hoisting.)
    if (panelAjustesAbierto()) {
      actualizarPanelAjustes();
    }
    tick(); // refresca todo inmediatamente con el nuevo horario/paleta
  }

  function actualizarBotonesUsuario() {
    document.querySelectorAll(".user-switch .user-btn").forEach((btn) => {
      const activo = btn.dataset.user === usuarioActual;
      btn.classList.toggle("is-active", activo);
      btn.setAttribute("aria-pressed", String(activo));
    });
  }

  function posicionarThumbSwitch() {
    const thumb = document.getElementById("user-switch-thumb");
    const activo = document.querySelector(".user-switch .user-btn.is-active");
    if (!thumb || !activo) return;
    thumb.style.left = `${activo.offsetLeft}px`;
    thumb.style.width = `${activo.offsetWidth}px`;
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
    subjectTeacher: document.getElementById("subject-teacher"),
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

    waitingPanel: document.getElementById("waiting-panel"),
    waitingH: document.getElementById("waiting-h"),
    waitingM: document.getElementById("waiting-m"),
    waitingS: document.getElementById("waiting-s"),

    finalCountdown: document.getElementById("final-countdown"),
    finalS: document.getElementById("final-s"),
    finalMs: document.getElementById("final-ms"),

    soundToggle: document.getElementById("sound-toggle"),
    soundToggleLabel: document.getElementById("sound-toggle-label"),
    soundVolumeRow: document.getElementById("sound-volume-row"),
    soundVolumeInput: document.getElementById("sound-volume-input"),
    soundVolumeValue: document.getElementById("sound-volume-value"),

    settingsToggle: document.getElementById("settings-toggle"),
    settingsOverlay: document.getElementById("settings-overlay"),
    settingsPanel: document.getElementById("settings-panel"),
    settingsClose: document.getElementById("settings-close"),
    settingsSalidaSection: document.getElementById("settings-salida-section"),
    settingsSalidaLabel: document.getElementById("settings-salida-label"),
    settingsSalidaControls: document.getElementById("settings-salida-controls"),
    settingsHint: document.getElementById("settings-hint"),
    settingsTimeInput: document.getElementById("settings-time-input"),
    settingsSave: document.getElementById("settings-save"),
    settingsReset: document.getElementById("settings-reset"),
  };

  /* -----------------------------------------------------------------
     4) UTILIDADES DE TIEMPO
  ----------------------------------------------------------------- */

  function horaStringADate(horaStr, fechaReferencia) {
    const [h, m] = horaStr.split(":").map(Number);
    const d = new Date(fechaReferencia);
    d.setHours(h, m, 0, 0);
    return d;
  }

  function pad2(n) {
    return String(Math.max(0, n)).padStart(2, "0");
  }

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

  function cargarHorarioDelDia(d) {
    const horarioUsuario = USUARIOS[usuarioActual] || {};
    const horarioBase = horarioUsuario[d.getDay()] || null;
    if (!horarioBase) return null;

    // Si hay una hora de salida personalizada guardada para HOY y para el
    // usuario activo, se devuelve una copia del horario con "salida"
    // reemplazada. El horario original en USUARIOS nunca se modifica, así
    // que al otro día (o al cambiar de usuario) todo vuelve solo a la
    // hora normal predeterminada.
    const horaPersonalizada = obtenerSalidaPersonalizada(usuarioActual, d);
    if (horaPersonalizada) {
      return { ...horarioBase, salida: horaPersonalizada };
    }
    return horarioBase;
  }

  /* -----------------------------------------------------------------
     5.1) HORA DE SALIDA PERSONALIZADA DE HOY (panel de ajustes)
     Se guarda en localStorage junto con la fecha en la que se definió,
     una por usuario. Al leerla, si la fecha guardada no es la de HOY,
     se descarta (y se borra) automáticamente: así el cambio "vale solo
     por hoy" sin que haya que hacer nada al día siguiente.
  ----------------------------------------------------------------- */

  const CLAVE_SALIDA_PERSONALIZADA = "cf_salida_personalizada";

  function fechaISOLocal(d) {
    // Fecha en formato "AAAA-MM-DD" según el reloj/huso horario LOCAL del
    // dispositivo (a diferencia de Date#toISOString, que usa UTC y podría
    // "cambiar de día" antes o después de tiempo cerca de la medianoche).
    const anio = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const dia = String(d.getDate()).padStart(2, "0");
    return `${anio}-${mes}-${dia}`;
  }

  function leerTodasLasSalidasPersonalizadas() {
    try {
      const guardado = localStorage.getItem(CLAVE_SALIDA_PERSONALIZADA);
      return guardado ? JSON.parse(guardado) : {};
    } catch (e) {
      return {};
    }
  }

  function guardarTodasLasSalidasPersonalizadas(datos) {
    try {
      localStorage.setItem(CLAVE_SALIDA_PERSONALIZADA, JSON.stringify(datos));
    } catch (e) { /* almacenamiento no disponible */ }
  }

  // Devuelve la hora personalizada ("HH:MM") para ese usuario si fue
  // definida para el día de "ahora"; si es de un día anterior, la
  // descarta (la borra de localStorage) y devuelve null.
  function obtenerSalidaPersonalizada(usuario, ahora) {
    const todas = leerTodasLasSalidasPersonalizadas();
    const entrada = todas[usuario];
    if (!entrada) return null;

    if (entrada.fecha !== fechaISOLocal(ahora)) {
      delete todas[usuario];
      guardarTodasLasSalidasPersonalizadas(todas);
      return null;
    }
    return entrada.hora;
  }

  function definirSalidaPersonalizada(usuario, ahora, hora) {
    const todas = leerTodasLasSalidasPersonalizadas();
    todas[usuario] = { fecha: fechaISOLocal(ahora), hora };
    guardarTodasLasSalidasPersonalizadas(todas);
  }

  function borrarSalidaPersonalizada(usuario) {
    const todas = leerTodasLasSalidasPersonalizadas();
    delete todas[usuario];
    guardarTodasLasSalidasPersonalizadas(todas);
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
      const siguiente = futuras[0] || null;
      return { tipo: "en_clase", actual, siguiente, restantes: futuras.length };
    }

    if (futuras.length > 0) {
      return { tipo: "esperando", actual: null, siguiente: futuras[0], restantes: futuras.length };
    }

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
      void elemento.offsetWidth;
      elemento.classList.add("pulse");
    }
  }

  /* -----------------------------------------------------------------
     9) SONIDO OPCIONAL (Web Audio API, sin archivos externos)
  ----------------------------------------------------------------- */

  let sonidoActivo = false;
  let audioCtx = null;

  const CLAVE_VOLUMEN_SONIDO = "cf_volumen_sonido";

  function leerVolumenGuardado() {
    try {
      const guardado = localStorage.getItem(CLAVE_VOLUMEN_SONIDO);
      const valor = guardado === null ? 70 : parseInt(guardado, 10);
      return Number.isFinite(valor) ? Math.min(100, Math.max(0, valor)) : 70;
    } catch (e) {
      return 70;
    }
  }

  function guardarVolumen(valor) {
    try { localStorage.setItem(CLAVE_VOLUMEN_SONIDO, String(valor)); } catch (e) { /* no disponible */ }
  }

  // volumenSonido va de 0 a 1 (0% a 100% del slider); afecta el pico de
  // ganancia de reproducirTono más abajo.
  let volumenSonido = leerVolumenGuardado() / 100;

  function asegurarAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    return audioCtx;
  }

  function reproducirTono(frecuencia, duracionMs, tipo = "sine") {
    if (!sonidoActivo || volumenSonido <= 0) return;
    const ctx = asegurarAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = tipo;
    osc.frequency.value = frecuencia;
    gain.gain.value = 0.0001;
    osc.connect(gain).connect(ctx.destination);
    const now = ctx.currentTime;
    // El pico de ganancia (antes fijo en 0.06) ahora se escala según el
    // volumen elegido en el deslizable (0 a 1).
    const pico = Math.max(0.0001, 0.06 * volumenSonido);
    gain.gain.exponentialRampToValueAtTime(pico, now + 0.04);
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

  function actualizarEtiquetaSonido() {
    if (!el.soundToggleLabel) return;
    el.soundToggleLabel.textContent = sonidoActivo ? "Sonido activado" : "Sonido desactivado";
  }

  // El deslizable de volumen solo tiene sentido (y solo se muestra)
  // mientras el sonido está activado.
  function actualizarVisibilidadVolumen() {
    if (!el.soundVolumeRow) return;
    el.soundVolumeRow.hidden = !sonidoActivo;
  }

  if (el.soundVolumeInput) {
    el.soundVolumeInput.value = String(Math.round(volumenSonido * 100));
  }
  if (el.soundVolumeValue) {
    el.soundVolumeValue.textContent = `${Math.round(volumenSonido * 100)}%`;
  }

  el.soundToggle.addEventListener("click", () => {
    sonidoActivo = !sonidoActivo;
    el.soundToggle.setAttribute("aria-pressed", String(sonidoActivo));
    actualizarEtiquetaSonido();
    actualizarVisibilidadVolumen();
    // Saca el foco del botón después de tocarlo/clickearlo: sin esto, en
    // varios navegadores (sobre todo en celular) el botón se queda con el
    // anillo de foco puesto, que se veía como si siguiera "brillando"
    // activado aunque el sonido ya se haya apagado.
    el.soundToggle.blur();
    if (sonidoActivo) {
      const ctx = asegurarAudioCtx();
      if (ctx && ctx.state === "suspended") ctx.resume();
      reproducirTono(740, 120);
    }
  });
  actualizarEtiquetaSonido();
  actualizarVisibilidadVolumen();

  if (el.soundVolumeInput) {
    el.soundVolumeInput.addEventListener("input", () => {
      const valor = parseInt(el.soundVolumeInput.value, 10) || 0;
      volumenSonido = valor / 100;
      if (el.soundVolumeValue) el.soundVolumeValue.textContent = `${valor}%`;
      guardarVolumen(valor);
    });
    // Al soltar el deslizable, se escucha un tonito de referencia con el
    // volumen recién elegido.
    el.soundVolumeInput.addEventListener("change", () => {
      if (!sonidoActivo) return;
      const ctx = asegurarAudioCtx();
      if (ctx && ctx.state === "suspended") ctx.resume();
      reproducirTono(740, 140);
    });
  }

  /* -----------------------------------------------------------------
     9.1) PANEL DE AJUSTES (tuerca): sonido + hora de salida de hoy
  ----------------------------------------------------------------- */

  function panelAjustesAbierto() {
    return el.settingsToggle.getAttribute("aria-expanded") === "true";
  }

  // Rellena el panel con los datos de HOY para el usuario activo: hora
  // de salida efectiva (personalizada si hay, si no la normal) y
  // habilita/deshabilita los controles según corresponda.
  function actualizarPanelAjustes() {
    const ahora = obtenerFechaActual();
    const horarioUsuario = USUARIOS[usuarioActual] || {};
    const horarioOriginal = horarioUsuario[ahora.getDay()] || null;

    if (!horarioOriginal) {
      // Sin horario hoy: se ocultan la etiqueta de la sección y todos los
      // controles (input de hora, Guardar, Restablecer, nota), dejando
      // visible únicamente el mensaje de aviso.
      if (el.settingsSalidaLabel) el.settingsSalidaLabel.hidden = true;
      if (el.settingsSalidaControls) el.settingsSalidaControls.hidden = true;
      if (el.settingsSalidaSection) el.settingsSalidaSection.classList.add("is-empty");
      el.settingsHint.textContent = "Hoy no hay clases :D";
      return;
    }

    if (el.settingsSalidaLabel) el.settingsSalidaLabel.hidden = false;
    if (el.settingsSalidaControls) el.settingsSalidaControls.hidden = false;
    if (el.settingsSalidaSection) el.settingsSalidaSection.classList.remove("is-empty");
    el.settingsTimeInput.disabled = false;
    el.settingsSave.disabled = false;

    const personalizada = obtenerSalidaPersonalizada(usuarioActual, ahora);
    el.settingsTimeInput.value = personalizada || horarioOriginal.salida;

    if (personalizada) {
      el.settingsHint.textContent = `Hoy sale a las ${personalizada} (hora normal: ${horarioOriginal.salida}).`;
      el.settingsReset.disabled = false;
    } else {
      el.settingsHint.textContent = `Hora normal de salida: ${horarioOriginal.salida}.`;
      el.settingsReset.disabled = true;
    }
  }

  function abrirAjustes() {
    actualizarPanelAjustes();
    el.settingsOverlay.hidden = false;
    el.settingsPanel.hidden = false;
    el.settingsToggle.setAttribute("aria-expanded", "true");
  }

  function cerrarAjustes() {
    el.settingsOverlay.hidden = true;
    el.settingsPanel.hidden = true;
    el.settingsToggle.setAttribute("aria-expanded", "false");
  }

  el.settingsToggle.addEventListener("click", () => {
    if (panelAjustesAbierto()) cerrarAjustes(); else abrirAjustes();
  });
  el.settingsOverlay.addEventListener("click", cerrarAjustes);
  el.settingsClose.addEventListener("click", cerrarAjustes);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panelAjustesAbierto()) cerrarAjustes();
  });

  el.settingsSave.addEventListener("click", () => {
    const ahora = obtenerFechaActual();
    const horarioUsuario = USUARIOS[usuarioActual] || {};
    const horarioOriginal = horarioUsuario[ahora.getDay()] || null;
    if (!horarioOriginal) return;

    const valor = el.settingsTimeInput.value; // "HH:MM", vacío si no se eligió nada
    if (!valor) {
      el.settingsHint.textContent = "Elegí una hora antes de guardar.";
      return;
    }

    const horaInicio = horaStringADate(horarioOriginal.inicio, ahora);
    const horaElegida = horaStringADate(valor, ahora);

    // La nueva hora de salida tiene que ser posterior al inicio de clases
    // de hoy; si no, se avisa y no se guarda nada.
    if (horaElegida <= horaInicio) {
      el.settingsHint.textContent = `Tiene que ser una hora posterior al inicio de clases (${horarioOriginal.inicio}).`;
      return;
    }

    definirSalidaPersonalizada(usuarioActual, ahora, valor);
    actualizarPanelAjustes();
    tick();
  });

  el.settingsReset.addEventListener("click", () => {
    borrarSalidaPersonalizada(usuarioActual);
    actualizarPanelAjustes();
    tick();
  });

  /* -----------------------------------------------------------------
     10) SWITCH DE USUARIO (Bruca / Mely)
  ----------------------------------------------------------------- */

  document.querySelectorAll(".user-switch .user-btn").forEach((btn) => {
    btn.addEventListener("click", () => establecerUsuario(btn.dataset.user));
  });
  actualizarBotonesUsuario();
  window.addEventListener("resize", posicionarThumbSwitch);

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

  let estadoMateriaAnterior = null;
  let nombreMostradoAnterior = null;

  function textoRestantes(cantidad) {
    if (cantidad <= 0) return "Es la última materia del día";
    if (cantidad === 1) return "Queda 1 materia después de esta";
    return `Quedan ${cantidad} materias después de esta`;
  }

  function dispararGlitch(elemento) {
    if (!elemento) return;
    elemento.classList.remove("glitch-in");
    void elemento.offsetWidth;
    elemento.classList.add("glitch-in");
  }

  function mostrarProfesor(materia) {
    const profesorNuevo = materia && materia.profesor ? materia.profesor : "";
    if (profesorNuevo) {
      if (el.subjectTeacher.dataset.profesor !== profesorNuevo) {
        el.subjectTeacher.textContent = `Con el profesor/a: ${profesorNuevo}`;
        el.subjectTeacher.dataset.profesor = profesorNuevo;
        el.subjectTeacher.hidden = false;
        dispararGlitch(el.subjectTeacher);
      }
    } else {
      el.subjectTeacher.textContent = "";
      el.subjectTeacher.hidden = true;
      delete el.subjectTeacher.dataset.profesor;
    }
  }

  function actualizarPanelMaterias(infoMateria, ahora) {
    const nombreVisible =
      infoMateria.tipo === "en_clase" ? infoMateria.actual.nombre
      : infoMateria.tipo === "esperando" ? infoMateria.siguiente.nombre
      : null;

    if (infoMateria.tipo === "en_clase") {
      if (estadoMateriaAnterior !== infoMateria.actual.nombre) sonarCambioDeMateria();
      estadoMateriaAnterior = infoMateria.actual.nombre;

      el.subjectPanel.classList.add("is-active");
      el.subjectStatus.textContent = "Estás en clase de";
      el.subjectName.textContent = infoMateria.actual.nombre;
      if (nombreVisible !== nombreMostradoAnterior) dispararGlitch(el.subjectName);
      mostrarProfesor(infoMateria.actual);

      const restante = infoMateria.actual.finDate - ahora;
      const { h, m, s } = calcularTiempoRestante(restante);
      escribirNumero(el.subjectH, h);
      escribirNumero(el.subjectM, m);
      escribirNumero(el.subjectS, s);

      el.subjectNext.textContent = infoMateria.siguiente
        ? `Siguiente: ${infoMateria.siguiente.nombre}`
        : "Siguiente: no hay más clases hoy";
      el.subjectRemaining.textContent = textoRestantes(infoMateria.restantes);
      nombreMostradoAnterior = nombreVisible;
      return;
    }

    el.subjectPanel.classList.remove("is-active");

    if (infoMateria.tipo === "esperando") {
      estadoMateriaAnterior = "esperando";
      el.subjectStatus.textContent = "Sin clase en este momento";
      el.subjectName.textContent = infoMateria.siguiente.nombre;
      if (nombreVisible !== nombreMostradoAnterior) dispararGlitch(el.subjectName);
      mostrarProfesor(infoMateria.siguiente);

      const restante = infoMateria.siguiente.inicioDate - ahora;
      const { h, m, s } = calcularTiempoRestante(restante);
      escribirNumero(el.subjectH, h);
      escribirNumero(el.subjectM, m);
      escribirNumero(el.subjectS, s);

      el.subjectNext.textContent = `Empieza en ${pad2(h)}:${pad2(m)}:${pad2(s)}`;
      el.subjectRemaining.textContent = textoRestantes(infoMateria.restantes - 1 >= 0 ? infoMateria.restantes - 1 : 0);
      nombreMostradoAnterior = nombreVisible;
      return;
    }

    estadoMateriaAnterior = "sin_materias";
    el.subjectStatus.textContent = "Sin más clases hoy";
    el.subjectName.textContent = "Esperando la salida";
    mostrarProfesor(null);
    escribirNumero(el.subjectH, 0);
    escribirNumero(el.subjectM, 0);
    escribirNumero(el.subjectS, 0);
    el.subjectNext.textContent = "Siguiente: —";
    el.subjectRemaining.textContent = "No quedan materias por cursar";
    nombreMostradoAnterior = null;
  }

  /* -----------------------------------------------------------------
     15) CONTADOR SECUNDARIO: próximo recreo / recreo en curso
  ----------------------------------------------------------------- */

  let estadoRecreoAnterior = null;

  function colorSegunRecreoRestante(transcurrido) {
    const t = Math.min(1, Math.max(0, transcurrido));
    const hue = 120 * (1 - t);
    return `hsl(${hue.toFixed(0)}, 85%, 50%)`;
  }

  function actualizarContadorSecundario(infoRecreo, ahora) {
    if (infoRecreo.tipo === "en_curso") {
      if (estadoRecreoAnterior !== "en_curso") sonarInicioRecreo();
      estadoRecreoAnterior = "en_curso";

      el.recessPanel.classList.add("is-active");
      el.recessPanel.classList.remove("is-empty");
      // Se muestra directamente el nombre del recreo en curso (ej: "Recreo 1/4")
      el.recessLabel.textContent = infoRecreo.recreo.nombre;

      const total = infoRecreo.recreo.finDate - infoRecreo.recreo.inicioDate;
      const restante = infoRecreo.recreo.finDate - ahora;
      // "transcurrido" (0 al empezar el recreo, 1 al terminarlo) se usa para el color
      const transcurrido = 1 - restante / total;
      // La barra se vacía: 100% al empezar, 0% al terminar
      const restanteFraccion = total > 0 ? restante / total : 0;

      const { h, m, s } = calcularTiempoRestante(restante);
      escribirNumero(el.recessH, h);
      escribirNumero(el.recessM, m);
      escribirNumero(el.recessS, s);
      el.recessFill.style.width = `${Math.min(100, Math.max(0, restanteFraccion * 100))}%`;
      el.recessFill.style.background = colorSegunRecreoRestante(transcurrido);
      return;
    }

    el.recessPanel.classList.remove("is-active");
    el.recessFill.style.background = "";

    if (infoRecreo.tipo === "proximo") {
      estadoRecreoAnterior = "proximo";
      el.recessPanel.classList.remove("is-empty");
      el.recessLabel.textContent = "Próximo recreo";

      // En clase: la barra se llena (0% → 100%)
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

    estadoRecreoAnterior = "ninguno";
    // Sin más recreos: la tarjeta pasa a modo "vacío" (ver CSS .recess-panel.is-empty),
    // que oculta el punto, la barra de progreso y el contador h/m/s, dejando
    // visible únicamente este mensaje.
    el.recessPanel.classList.add("is-empty");
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

  /* mostrarVista(vista) controla qué bloque de la sección .stage está
     visible en cada momento. Los tres bloques normales (anillo, panel
     de materia y panel de recreo) siempre se muestran juntos; el mensaje
     especial (fin de semana / jornada finalizada) y el temporizador de
     espera de inicio de clases son, en cambio, excluyentes entre sí y
     con los tres anteriores. */
  function mostrarVista(vista) {
    const normal = vista === "normal";
    el.ringWrap.hidden = !normal;
    el.subjectPanel.hidden = !normal;
    el.recessPanel.hidden = !normal;
    el.specialMessage.hidden = vista !== "especial";
    el.waitingPanel.hidden = vista !== "espera";
  }

  function mostrarMensajesEspeciales(texto, icono, animarEntrada) {
    mostrarVista("especial");
    el.specialText.textContent = texto;
    el.specialIcon.textContent = icono;
    if (animarEntrada) {
      el.specialMessage.classList.remove("is-ending");
      void el.specialMessage.offsetWidth;
      el.specialMessage.classList.add("is-ending");
    }
  }

  function ocultarMensajesEspeciales() {
    el.specialMessage.classList.remove("is-ending");
    mostrarVista("normal");
  }

  /* -----------------------------------------------------------------
     16.0) TEMPORIZADOR DE ESPERA: cuánto falta para que inicien las
     clases (se muestra solo en los días con horario cargado, mientras
     la hora actual todavía no llegó a la hora de inicio).
  ----------------------------------------------------------------- */

  function mostrarEsperaInicio(msRestantes) {
    mostrarVista("espera");
    const { h, m, s } = calcularTiempoRestante(msRestantes);
    escribirNumero(el.waitingH, h);
    escribirNumero(el.waitingM, m);
    escribirNumero(el.waitingS, s);
  }

  /* -----------------------------------------------------------------
     16.1) CUENTA REGRESIVA FINAL (últimos 15 segundos antes de salir)
  ----------------------------------------------------------------- */

  let cuentaFinalActiva = false;
  let rafFinalId = null;

  function iniciarCuentaFinal(horaSalida) {
    if (cuentaFinalActiva) return;
    cuentaFinalActiva = true;
    document.body.classList.add("countdown-final");
    document.body.classList.remove("state-urgent");
    el.finalCountdown.hidden = false;

    function frame() {
      const ahora = new Date();
      const restante = horaSalida - ahora;

      if (restante <= 0) {
        detenerCuentaFinal();
        finalizarJornada();
        return;
      }

      const segundos = Math.floor(restante / 1000);
      const ms = Math.floor(restante % 1000);
      el.finalS.textContent = pad2(segundos);
      el.finalMs.textContent = String(ms).padStart(3, "0");
      el.finalCountdown.classList.toggle("is-critical", restante <= 5000);

      rafFinalId = requestAnimationFrame(frame);
    }
    rafFinalId = requestAnimationFrame(frame);
  }

  function detenerCuentaFinal() {
    if (rafFinalId !== null) cancelAnimationFrame(rafFinalId);
    rafFinalId = null;
    cuentaFinalActiva = false;
    document.body.classList.remove("countdown-final");
    el.finalCountdown.hidden = true;
    el.finalCountdown.classList.remove("is-critical");
  }

  function dispararFlashFin() {
    const flash = document.createElement("div");
    flash.className = "end-flash";
    document.body.appendChild(flash);
    flash.addEventListener("animationend", () => flash.remove(), { once: true });
  }

  function finalizarJornada() {
    document.body.classList.add("state-ended");
    document.body.classList.remove("state-urgent");
    const esPrimeraVez = !yaSonoFinJornada;
    if (esPrimeraVez) {
      sonarFinJornada();
      yaSonoFinJornada = true;
      dispararFlashFin();
    }
    mostrarMensajesEspeciales("La jornada escolar ha finalizado.", "◆", esPrimeraVez);
  }

  /* -----------------------------------------------------------------
     17) CICLO PRINCIPAL
  ----------------------------------------------------------------- */

  function tick() {
    const ahora = obtenerFechaActual();
    actualizarFecha(ahora);
    actualizarReloj(ahora);

    const horario = cargarHorarioDelDia(ahora);
    if (!horario) {
      document.body.classList.remove("state-ended", "state-urgent");
      detenerCuentaFinal();
      yaSonoFinJornada = false;
      mostrarMensajesEspeciales("Hoy no hay clases.", "✦");
      return;
    }

    const horaInicio = horaStringADate(horario.inicio, ahora);
    const horaSalida = horaStringADate(horario.salida, ahora);

    // Si la hora actual es menor a la hora de inicio, en vez del contador
    // principal se muestra únicamente el temporizador de cuánto falta
    // para que empiecen las clases.
    if (ahora < horaInicio) {
      document.body.classList.remove("state-ended", "state-urgent");
      detenerCuentaFinal();
      yaSonoFinJornada = false;
      mostrarEsperaInicio(horaInicio - ahora);
      return;
    }

    if (ahora >= horaSalida) {
      detenerCuentaFinal();
      document.body.classList.remove("state-urgent");
      finalizarJornada();
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

    // A partir de los últimos 15 segundos, la cuenta final a pantalla completa toma el control
    if (msHastaSalida <= 15000) {
      iniciarCuentaFinal(horaSalida);
    } else {
      detenerCuentaFinal();
      document.body.classList.toggle("state-urgent", msHastaSalida < 5 * 60 * 1000);
    }

    // --- Panel de materia actual ---
    const infoMateria = buscarMateriaActual(horario, ahora);
    actualizarPanelMaterias(infoMateria, ahora);

    // --- Contador secundario (recreos) ---
    const infoRecreo = buscarProximoRecreo(horario, ahora);
    actualizarContadorSecundario(infoRecreo, ahora);
  }

  /* -----------------------------------------------------------------
     18) FONDO ANIMADO: partículas tipo constelación
  ----------------------------------------------------------------- */

  let colorLinea = "rgba(91, 231, 255, ALPHA)";
  let colorPunto = "rgba(91, 231, 255, ALPHA)";

  function actualizarColoresFondo() {
    const estilos = getComputedStyle(document.documentElement);
    const cyanRgb = estilos.getPropertyValue("--cyan-rgb").trim() || "91, 231, 255";
    colorLinea = `rgba(${cyanRgb}, ALPHA)`;
    colorPunto = `rgba(${cyanRgb}, ALPHA)`;
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
      const DIST_MAX = 150;

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
            const op = (1 - dist / DIST_MAX) * 0.22;
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
        ctx.fillStyle = colorPunto.replace("ALPHA", "0.65");
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
    posicionarThumbSwitch();
    actualizarColoresFondo();
    iniciarFondoParticulas();
    tick();
    setInterval(tick, 1000);
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();