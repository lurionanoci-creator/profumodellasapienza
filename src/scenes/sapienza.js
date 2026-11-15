const L_LIVELLO = 10650;
const A_LIVELLO = 2370;
const TERRA = "0xB96E54";
const VIOLA = "0x800080";
const ROSSO = "0xE44A4A";
const MARRONE = "0x8B5A2B";
const GRIGIO = "0x808080";
const A_TERRENO = 220;
const Y_TERRENO = A_LIVELLO - A_TERRENO;
const X_ROSA = 200;
const L_ROSA = 81;
const A_ROSA = 90;
const L_UOMO = 81;
const A_UOMO = 90;
const X_CACAO = 1190;
const Y_CACAO = Y_TERRENO - 200;
const L_OGGETTO = 80;
const A_OGGETTO = 80;
const COLORE_OGGETTO = "0x4A90E2";
const A_TRAGUARDO = 400;
const L_TRAGUARDO = 100;
const X_TRAGUARDO = 10200;
const Y_TRAGUARDO = Y_TERRENO - A_TRAGUARDO / 2;
const COLORE_TRAGUARDO = "0x00C853";
const TRASPARENZA_TRAGUARDO = 0.4;

const SCALE = [
    { x: 3295, y_alto: Y_TERRENO - 1119, l: 80, a: 1119 },
    { x: 3020, y_alto: Y_TERRENO - 1430,  l: 100, a: 280 },
];

const COLORE_SCALA = "0xFFD700";
const TRASPARENZA_SCALA = 0.4;
const VEL_SCALA = 300;
const TASTO_SU = PP.key_codes.UP;
const TASTO_GIU = PP.key_codes.DOWN;
const PERCORSO_SFONDO = "assets/images/Bozza-mappa.png";
const PERCORSO_CACAO = "assets/images/cacao.png";

const PIATTAFORME = [
    // piattaforme lunghe
    { x: 1190, y: Y_TERRENO - 150, l: 290, a: 21, colore: MARRONE },
    { x: 1960, y: Y_TERRENO - 150, l: 290, a: 21, colore: MARRONE },
    { x: 2415, y: Y_TERRENO - 150, l: 270, a: 21, colore: MARRONE },
    { x: 3580, y: Y_TERRENO - 210, l: 280, a: 21, colore: MARRONE },
    { x: 4460, y: Y_TERRENO - 290, l: 230, a: 21, colore: GRIGIO },
    { x: 6240, y: Y_TERRENO - 445, l: 355, a: 21, colore: MARRONE },
    // piattaforme corte
    { x: 1745, y: Y_TERRENO - 295, l: 170, a: 21, colore: MARRONE },
    { x: 2800, y: Y_TERRENO - 295, l: 170, a: 21, colore: MARRONE },
    { x: 4135, y: Y_TERRENO - 140, l: 150, a: 21, colore: GRIGIO },
    { x: 4790, y: Y_TERRENO - 425, l: 155, a: 21, colore: GRIGIO },
    { x: 5900, y: Y_TERRENO - 295, l: 185, a: 21, colore: MARRONE },
    { x: 6195, y: Y_TERRENO - 150, l: 185, a: 21, colore: MARRONE },
    { x: 6740, y: Y_TERRENO - 295, l: 185, a: 21, colore: MARRONE },
    { x: 6970, y: Y_TERRENO - 150, l: 215, a: 21, colore: MARRONE },
    { x: 6520, y: Y_TERRENO - 565, l: 185, a: 21, colore: MARRONE },
    { x: 7710, y: Y_TERRENO - 150, l: 185, a: 21, colore: GRIGIO },
    { x: 7785, y: Y_TERRENO - 395, l: 175, a: 21, colore: GRIGIO },
    { x: 9000, y: Y_TERRENO - 275, l: 175, a: 21, colore: GRIGIO },
    { x: 9385, y: Y_TERRENO - 570, l: 200, a: 21, colore: MARRONE },
    { x: 9560, y: Y_TERRENO - 150, l: 175, a: 21, colore: MARRONE },
    { x: 10125, y: Y_TERRENO - 295, l: 150, a: 21, colore: MARRONE },
    // pavimenti
    { x: 1190, y: Y_TERRENO - 429, l: 860, a: 18, colore: TERRA },
    { x: 2340, y: Y_TERRENO - 429, l: 780, a: 18, colore: TERRA },
    { x: 3045, y: Y_TERRENO - 429, l: 360, a: 18, colore: TERRA },
    { x: 3045, y: Y_TERRENO - 840, l: 360, a: 18, colore: TERRA },
    { x: 2285, y: Y_TERRENO - 840, l: 900, a: 18, colore: TERRA },
    { x: 1460, y: Y_TERRENO - 840, l: 300, a: 18, colore: TERRA },
    { x: 1050, y: Y_TERRENO - 840, l: 280, a: 18, colore: TERRA },
    { x: 2760, y: Y_TERRENO - 1420, l: 430, a: 18, colore: TERRA },
    // piattaforme corte 2
    { x: 1820, y: Y_TERRENO - 565, l: 130, a: 21, colore: MARRONE },
    { x: 1045, y: Y_TERRENO - 575, l: 150, a: 21, colore: MARRONE },
    { x: 910, y: Y_TERRENO - 700, l: 150, a: 21, colore: MARRONE },
    { x: 1640, y: Y_TERRENO - 700, l: 200, a: 21, colore: MARRONE },
    { x: 2595, y: Y_TERRENO - 570, l: 140, a: 21, colore: MARRONE },
    { x: 3010, y: Y_TERRENO - 710, l: 320, a: 21, colore: MARRONE },
    // piattaforme lunghe 2
    { x: 2345, y: Y_TERRENO - 710, l: 680, a: 21, colore: MARRONE },
    { x: 2845, y: Y_TERRENO - 995, l: 200, a: 18, colore: MARRONE },
    { x: 2700, y: Y_TERRENO - 1125, l: 225, a: 18, colore: MARRONE },
    { x: 2170, y: Y_TERRENO - 1130, l: 275, a: 18, colore: MARRONE },
    { x: 1180, y: Y_TERRENO - 995, l: 275, a: 18, colore: MARRONE },
];

const SCELTE = [
    { testo: "Testo segnaposto della domanda 1.",
        corretta: "a",
      a: { nome: "Cacao", x: X_CACAO, y: Y_CACAO, percorso: PERCORSO_CACAO },
      b: { nome: "Oggetto B", x: X_CACAO + 100, y: Y_CACAO, percorso: "" } },
    { testo: "Testo segnaposto della domanda 2.",
        corretta: "b",
        a: { nome: "Opzione 1", x: 2000, y: Y_TERRENO - 40, percorso: "" },
        b: { nome: "Opzione 2", x: 2100, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Testo segnaposto della domanda 3.",
        corretta: "a",
      a: { nome: "Opzione 1", x: 4000, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Opzione 2", x: 4100, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Testo segnaposto della domanda 4.",
        corretta: "b",
      a: { nome: "Opzione 1", x: 5000, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Opzione 2", x: 5100, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Testo segnaposto della domanda 5.",
        corretta: "a",
      a: { nome: "Opzione 1", x: 7500, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Opzione 2", x: 7600, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Testo segnaposto della domanda 6.",
        corretta: "b",
      a: { nome: "Opzione 1", x: 9000, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Opzione 2", x: 9100, y: Y_TERRENO - 40, percorso: "" } },
];

const X_UOMO_MIN = 950;
const X_UOMO_MAX = 1400;
const VEL_UOMO = 400;
const VEL_SALTO = 1000;
const TASTO_SALTO = PP.key_codes.SPACE;
const VEL_CORSA = 400;
const TASTO_SX = PP.key_codes.LEFT;
const TASTO_DX = PP.key_codes.RIGHT;
const ANTICIPO_CAMERA = 200;

let terreno;
let rosa;
let uomo;
let immagine_sfondo;
let sulla_scala = false;
let in_scala = false;
let scelta_corrente = 0;
let scelte_fatte = [];
let partita_vinta = false;

function preload(s) {
    immagine_sfondo = PP.assets.image.load(s, PERCORSO_SFONDO);
    carica_oggetti(s);
}

function carica_oggetti(s) {
    for (const scelta of SCELTE) {
        carica_oggetto(s, scelta.a);
        carica_oggetto(s, scelta.b);
    }
}

function carica_oggetto(s, dati) {
    if (dati.percorso != "") {
        dati.immagine = PP.assets.image.load(s, dati.percorso);
    }
}

function create(s) {
    azzera_scelte();
    crea_sfondo(s);
    crea_terreno(s);
    crea_rosa(s);
    crea_uomo(s);
    crea_camera(s);
    crea_piattaforme(s);
    crea_scale(s);
    crea_oggetti(s);
    crea_traguardo(s);
}

function crea_oggetti(s) {
    for (let numero = 0; numero < SCELTE.length; numero++) {
        crea_oggetto(s, SCELTE[numero].a, numero);
        crea_oggetto(s, SCELTE[numero].b, numero);
    }
}

function crea_oggetto(s, dati, numero) {
    let oggetto;
    if (dati.percorso == "") {
        oggetto = PP.shapes.rectangle_add(s,
            dati.x, dati.y,
            L_OGGETTO, A_OGGETTO, COLORE_OGGETTO, 1);
    } else {
        oggetto = PP.assets.image.add(s, dati.immagine,
            dati.x, dati.y, 0.5, 0.5);
    }
    oggetto.numero_scelta = numero;
    PP.physics.add(s, oggetto, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, rosa, oggetto, tocca_oggetto);
}

function azzera_scelte() {
    scelte_fatte = [];
    for (const scelta of SCELTE) {
        scelte_fatte.push("");
    }
}

function crea_sfondo(s) {
    PP.assets.image.add(s, immagine_sfondo, 0, A_LIVELLO, 0, 1);
}

function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, 0, L_LIVELLO, A_LIVELLO);
    PP.camera.set_bounds(s, 0, 0, L_LIVELLO, A_LIVELLO);
    PP.camera.start_follow(s, rosa, -ANTICIPO_CAMERA, 0);
}

function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(s,
       L_LIVELLO / 2, Y_TERRENO + A_TERRENO / 2,
    L_LIVELLO, A_TERRENO, TERRA, 1);
    PP.physics.add(s, terreno, PP.physics.type.STATIC);
}


function tocca_oggetto(s, a, b) {
    let numero = b.numero_scelta;
    if (numero == undefined) {
        numero = a.numero_scelta;
    }
    if (scelte_fatte[numero] == "") {
        scelte_fatte[numero] = "in_corso";
        scelta_corrente = numero;
        PP.scenes.start_overlay("scelta");
    }
}

function crea_rosa(s) {
    rosa = PP.shapes.rectangle_add(s,
        X_ROSA, Y_TERRENO - A_ROSA / 2,
        L_ROSA, A_ROSA, VIOLA, 1);
    PP.physics.add(s, rosa, PP.physics.type.DYNAMIC);
    PP.physics.set_collide_world_bounds(rosa, true);
    PP.physics.add_collider(s, rosa, terreno);
}

function crea_uomo(s) {
    uomo = PP.shapes.rectangle_add(s,
        X_UOMO_MIN, Y_TERRENO - A_UOMO / 2,
        L_UOMO, A_UOMO, ROSSO, 1);
    PP.physics.add(s, uomo, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(uomo, false);
    PP.physics.set_velocity_x(uomo, VEL_UOMO);
    PP.physics.add_overlap_f(s, rosa, uomo, fine_partita);
}

function crea_piattaforme(s) {
    for (const p of PIATTAFORME) {
        crea_piattaforma(s, p);
    }
}

function crea_piattaforma(s, p) {
    let piattaforma = PP.shapes.rectangle_add(s,
        p.x, p.y, p.l, p.a, p.colore, 1);
    PP.physics.add(s, piattaforma, PP.physics.type.STATIC);
    PP.physics.add_collider(s, rosa, piattaforma);
}

function crea_scale(s) {
    for (const dati of SCALE) {
        crea_scala(s, dati);
    }
}

function crea_scala(s, dati) {
    let scala = PP.shapes.rectangle_add(s,
        dati.x, dati.y_alto + dati.a / 2,
        dati.l, dati.a, COLORE_SCALA, TRASPARENZA_SCALA);
    PP.physics.add(s, scala, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, rosa, scala, tocca_scala);
}

function tocca_scala(s, a, b) {
    sulla_scala = true;
}

function crea_traguardo(s) {
    let traguardo = PP.shapes.rectangle_add(s,
        X_TRAGUARDO, Y_TRAGUARDO,
        L_TRAGUARDO, A_TRAGUARDO, COLORE_TRAGUARDO, TRASPARENZA_TRAGUARDO);
    PP.physics.add(s, traguardo, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, rosa, traguardo, tocca_traguardo);
}

function tocca_traguardo(s, a, b) {
    partita_vinta = scelte_tutte_corrette();
    PP.scenes.start("fine");
}

function scelte_tutte_corrette() {
    for (let numero = 0; numero < SCELTE.length; numero++) {
        if (scelte_fatte[numero] != SCELTE[numero].corretta) {
            return false;
        }
    }
    return true;
}

function fine_partita(s, a, b) {
    partita_vinta = false;
    PP.scenes.start("fine");
}


function update(s) {
    salta(s);
    pattuglia_uomo();
    cammina(s);
    arrampica(s);
}


function salta(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_SALTO)
        && PP.physics.is_on_ground(rosa)) {
        PP.physics.set_velocity_y(rosa, -VEL_SALTO);
    }
}

function cammina(s) {
    if (PP.interactive.kb.is_key_down(s, TASTO_SX)) {
        PP.physics.set_velocity_x(rosa, -VEL_CORSA);} 
        else if (PP.interactive.kb.is_key_down(s, TASTO_DX)) 
            {PP.physics.set_velocity_x(rosa, VEL_CORSA);} 
        else {PP.physics.set_velocity_x(rosa, 0);
}
}

function pattuglia_uomo() {
    if (uomo.geometry.x <= X_UOMO_MIN) {
        PP.physics.set_velocity_x(uomo, VEL_UOMO);
    } else if (uomo.geometry.x >= X_UOMO_MAX) {
        PP.physics.set_velocity_x(uomo, -VEL_UOMO);
    }
}


function arrampica(s) {
    if (sulla_scala == false) {
        in_scala = false;
    } else if (PP.interactive.kb.is_key_down(s, TASTO_SU)
        || PP.interactive.kb.is_key_down(s, TASTO_GIU)) {
        in_scala = true;
    }

    if (in_scala) {
        PP.physics.set_allow_gravity(rosa, false);
        muovi_su_scala(s);
    } else {
        PP.physics.set_allow_gravity(rosa, true);
    }

    sulla_scala = false;
}

function muovi_su_scala(s) {
    if (PP.interactive.kb.is_key_down(s, TASTO_SU)) {
        PP.physics.set_velocity_y(rosa, -VEL_SCALA);
    } else if (PP.interactive.kb.is_key_down(s, TASTO_GIU)) {
        PP.physics.set_velocity_y(rosa, VEL_SCALA);
    } else {
        PP.physics.set_velocity_y(rosa, 0);
    }
}


function destroy(s) {}

PP.scenes.add("sapienza", preload, create, update, destroy);