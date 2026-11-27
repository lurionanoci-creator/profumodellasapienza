const L_LIVELLO = 10650;
const A_LIVELLO = 2370;
const TERRA = "0xB96E54";
const VIOLA = "0x800080";
const ROSSO = "0xE44A4A";
const MARRONE = "0x8B5A2B";
const GRIGIO = "0x808080";
const A_TERRENO = 161;
const Y_TERRENO = A_LIVELLO - A_TERRENO;
const X_ROSA = 200;
const L_OGGETTO = 80;
const A_OGGETTO = 80;
const COLORE_OGGETTO = "0x4A90E2";
const A_TRAGUARDO = 400;
const L_TRAGUARDO = 100;
const X_TRAGUARDO = 10200;
const Y_TRAGUARDO = Y_TERRENO - A_TRAGUARDO / 2;
const COLORE_TRAGUARDO = "0x00C853";
const TRASPARENZA_TRAGUARDO = 0.4;
const TRASPARENZA_TERRENO = 0; 

const SCALE = [
    { x: 3295, y_alto: Y_TERRENO - 1119, l: 80, a: 1119 },
    { x: 3020, y_alto: Y_TERRENO - 1430,  l: 100, a: 280 },
];

const COLORE_SCALA = "0xFFD700";
const TRASPARENZA_SCALA = 0.4;
const VEL_SCALA = 300;
const TASTO_SU = PP.key_codes.UP;
const TASTO_GIU = PP.key_codes.DOWN;
const PERCORSO_SFONDO = "assets/images/Mappa_LCG.png";
const PERCORSO_CACAO = "assets/images/cacao.png";

const PIATTAFORME = [
    // piattaforme lunghe
    { x: 1147, y: Y_TERRENO - 150, l: 290, a: 21, colore: MARRONE },
    { x: 1960, y: Y_TERRENO - 150, l: 290, a: 21, colore: MARRONE },
    { x: 2415, y: Y_TERRENO - 150, l: 270, a: 21, colore: MARRONE },
    { x: 3580, y: Y_TERRENO - 210, l: 280, a: 21, colore: MARRONE },
    { x: 4460, y: Y_TERRENO - 290, l: 230, a: 21, colore: GRIGIO },
    { x: 6240, y: Y_TERRENO - 445, l: 355, a: 21, colore: MARRONE },
    // piattaforme corte
    { x: 1445, y: Y_TERRENO - 295, l: 170, a: 21, colore: MARRONE },
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
    { x: 980, y: Y_TERRENO - 385, l: 940, a: 18, colore: TERRA },
    { x: 2090, y: Y_TERRENO - 385, l: 710, a: 18, colore: TERRA },
    { x: 2743, y: Y_TERRENO - 385, l: 320, a: 18, colore: TERRA },
    { x: 3045, y: Y_TERRENO - 776, l: 360, a: 18, colore: TERRA },
    { x: 2285, y: Y_TERRENO - 776, l: 900, a: 18, colore: TERRA },
    { x: 1460, y: Y_TERRENO - 776, l: 300, a: 18, colore: TERRA },
    { x: 1050, y: Y_TERRENO - 776, l: 280, a: 18, colore: TERRA },
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

export const SCELTE = [
    { testo: "E pensare che molte persone lo consumano, rovinandosi i polmoni!",
        corretta: "a",
      a: { nome: "Tabacco", x: 850, y: Y_TERRENO - 820, percorso: PERCORSO_CACAO },
      b: { nome: "Incenso", x: 950, y: Y_TERRENO - 820, percorso: "" } },
    { testo: "E’ un ingrediente che amo aggiungere nei dolci. ",
        corretta: "b",
        a: { nome: "Curcuma", x: 2000, y: Y_TERRENO - 40, percorso: "" },
        b: { nome: "Cannella", x: 2100, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Il laboratorio dovrà aver pagato tanto per avere scorte di questa...",
        corretta: "a",
      a: { nome: "Vaniglia", x: 4000, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Mandorla", x: 4100, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Una volta raffinato diventa proprio dolce!",
        corretta: "b",
      a: { nome: "Caffè", x: 5000, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Cacao", x: 5100, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Che sapore esotico!",
        corretta: "a",
      a: { nome: "Datteri", x: 7500, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Miele", x: 7600, y: Y_TERRENO - 40, percorso: "" } },
    { testo: "Il calore di questo aroma è indescrivibile.",
        corretta: "b",
      a: { nome: "Patchouli", x: 9000, y: Y_TERRENO - 40, percorso: "" },
      b: { nome: "Fava tonka", x: 9100, y: Y_TERRENO - 40, percorso: "" } },
];

const X_UOMO_MIN = 950;
const X_UOMO_MAX = 1400;
const VEL_UOMO = 150;
const PROBABILITA_FERMATA = 0.003;
const FERMATA_MIN = 1500;
const FERMATA_MAX = 4000;
const COLPI_MAX = 3;
const INVULNERABILITA = 1500;
const PERCORSO_UOMINI = "assets/images/Spritesheet_colleghi.png";
const L_FRAME_UOMO = 128;
const A_FRAME_UOMO = 144;
const COLONNE_UOMINI = 8;
const FRAME_PER_TIPO = COLONNE_UOMINI * 3;
const L_HITBOX_UOMO = 90;
const A_HITBOX_UOMO = 120;
const X_HITBOX_UOMO = (L_FRAME_UOMO - L_HITBOX_UOMO) / 2;
const Y_HITBOX_UOMO = A_FRAME_UOMO - A_HITBOX_UOMO;
const Y_UOMO = Y_TERRENO - A_FRAME_UOMO / 2;
const DURATA_COLPITA = 500;
const DURATA_KO = 1500;

const UOMINI = [
    { x: 1145, y: Y_UOMO, raggio: 200, tipo: 0 },
    { x: 2500, y: Y_UOMO, raggio: 200, tipo: 1 },
    { x: 6000, y: Y_UOMO, raggio: 300, tipo: 2 },
];

const VEL_SALTO = 1000;
const TASTO_SALTO = PP.key_codes.SPACE;
const VEL_CORSA = 350;
const TASTO_SX = PP.key_codes.LEFT;
const TASTO_DX = PP.key_codes.RIGHT;
const ANTICIPO_CAMERA = 200;
const PERCORSO_ROSA = "assets/images/rosa_spritesheet1.png";
const L_FRAME_ROSA = 128;
const A_FRAME_ROSA = 144;
const L_HITBOX_ROSA = 90;
const A_HITBOX_ROSA = 120;
const X_HITBOX_ROSA = (L_FRAME_ROSA - L_HITBOX_ROSA) / 2;
const Y_HITBOX_ROSA = A_FRAME_ROSA - A_HITBOX_ROSA;

let terreno;
let rosa;
let uomo;
let immagine_sfondo;
let sulla_scala = false;
let in_scala = false;
export let scelta_corrente = 0;
export let scelte_fatte = [];
export let partita_vinta = false;
let ss_rosa;
let animazione;
let uomini;
let colpi_subiti;
let invulnerabile_fino;
let colpita_fino;
let rosa_ko;
let ss_uomini;
export let qualcosa_storto = false;

//preload livello

function preload(s) {
    immagine_sfondo = PP.assets.image.load(s, PERCORSO_SFONDO);
    ss_rosa = PP.assets.sprite.load_spritesheet(s,
        PERCORSO_ROSA, L_FRAME_ROSA, A_FRAME_ROSA);
    ss_uomini = PP.assets.sprite.load_spritesheet(s,
        PERCORSO_UOMINI, L_FRAME_UOMO, A_FRAME_UOMO);
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

//creazione livello

function create(s) {
    uomini = [];
    colpi_subiti = 0;
    invulnerabile_fino = 0;
    colpita_fino = 0;
    rosa_ko = false;
    azzera_scelte();
    crea_sfondo(s);
    crea_terreno(s);
    crea_rosa(s);
    crea_uomini(s);
    crea_camera(s);
    crea_piattaforme(s);
    crea_scale(s);
    crea_oggetti(s);
    crea_traguardo(s);
}

//miscellanea1

function azzera_scelte() {
    scelte_fatte = [];
    for (const scelta of SCELTE) {
        scelte_fatte.push("");
    }
}

function crea_sfondo(s) {
    PP.assets.image.add(s, immagine_sfondo, 0, A_LIVELLO, 0, 1);
}

function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(s,
       L_LIVELLO / 2, Y_TERRENO + A_TERRENO / 2,
    L_LIVELLO, A_TERRENO, TERRA, TRASPARENZA_TERRENO);
    PP.physics.add(s, terreno, PP.physics.type.STATIC);
}

//rosa

function crea_rosa(s) {
    rosa = PP.assets.sprite.add(s, ss_rosa,
        X_ROSA, Y_TERRENO - A_FRAME_ROSA / 2, 0.5, 0.5);
    PP.physics.add(s, rosa, PP.physics.type.DYNAMIC);
    PP.physics.set_collide_world_bounds(rosa, true);
    PP.physics.add_collider(s, rosa, terreno);
    PP.physics.set_collision_rectangle(rosa,
        L_HITBOX_ROSA, A_HITBOX_ROSA, X_HITBOX_ROSA, Y_HITBOX_ROSA);
    PP.assets.sprite.animation_add(rosa, "fermo", 0, 2, 4, -1);
    PP.assets.sprite.animation_add(rosa, "cammina", 3, 6, 8, -1);
    PP.assets.sprite.animation_add(rosa, "salto", 7, 8, 4, -1);
    PP.assets.sprite.animation_add(rosa, "scala", 10, 13, 8, -1);
    PP.assets.sprite.animation_add(rosa, "scala_ferma", 12, 12, 1, 0);
    PP.assets.sprite.animation_add(rosa, "ko", 15, 17, 1, 0);
    PP.assets.sprite.animation_add(rosa, "colpita", 15, 17, 6, 0);
    animazione = "";
}

function colpita(s, a, b) {
    let adesso = PP.timers.get_time(s);
    if (rosa_ko || adesso < invulnerabile_fino) {
        return;
    }

    let uomo = b;
    if (uomo.x_min == undefined) {
        uomo = a;
    }

    colpi_subiti = colpi_subiti + 1;
    ferma_rosa();
    PP.physics.set_velocity_x(uomo, 0);

    if (colpi_subiti >= COLPI_MAX) {
        inizia_ko(s, uomo, adesso);
    } else {
        invulnerabile_fino = adesso + INVULNERABILITA;
        colpita_fino = adesso + DURATA_COLPITA;
        uomo.colpisce_fino = adesso + DURATA_COLPITA;
    }
}

function ferma_rosa() {
    PP.physics.set_velocity_x(rosa, 0);
    if (in_scala) {
        PP.physics.set_velocity_y(rosa, 0);
    }
}

//uomini

function crea_uomini(s) {
    for (const dati of UOMINI) {
        crea_uomo(s, dati);
    }
}

function crea_uomo(s, dati) {
    let fermo_da = dati.tipo * FRAME_PER_TIPO;
    let colpisce_da = fermo_da + COLONNE_UOMINI;
    let cammina_da = colpisce_da + COLONNE_UOMINI;

    let uomo = PP.assets.sprite.add(s, ss_uomini,
        dati.x, dati.y, 0.5, 0.5);
    uomo.x_min = dati.x - dati.raggio;
    uomo.x_max = dati.x + dati.raggio;
    uomo.direzione = 1;
    uomo.fermo_fino = 0;
    uomo.colpisce_fino = 0;
    uomo.animazione = "";
    PP.physics.add(s, uomo, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(uomo, false);
    PP.physics.set_collision_rectangle(uomo,
        L_HITBOX_UOMO, A_HITBOX_UOMO, X_HITBOX_UOMO, Y_HITBOX_UOMO);
    PP.assets.sprite.animation_add(uomo, "fermo", fermo_da, fermo_da + 2, 4, -1);
    PP.assets.sprite.animation_add(uomo, "colpisce", colpisce_da, colpisce_da + 2, 6, 0);
    PP.assets.sprite.animation_add(uomo, "cammina", cammina_da, cammina_da + 3, 8, -1);
    PP.physics.set_velocity_x(uomo, VEL_UOMO);
    PP.physics.add_overlap_f(s, rosa, uomo, colpita);
    uomini.push(uomo);
}

function anima_uomo(uomo, adesso) {
    let nuova = "cammina";
    if (adesso < uomo.colpisce_fino) {
        nuova = "colpisce";
    } else if (uomo.fermo_fino > 0) {
        nuova = "fermo";
    }

    if (nuova != uomo.animazione) {
        uomo.animazione = nuova;
        PP.assets.sprite.animation_play(uomo, nuova);
    }
}

function ferma_uomo(uomo, adesso) {
    let durata = FERMATA_MIN + Math.random() * (FERMATA_MAX - FERMATA_MIN);
    uomo.fermo_fino = adesso + durata;
    PP.physics.set_velocity_x(uomo, 0);
}

//camera, piattaforme, scale, oggetti, traguardo

function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, 0, L_LIVELLO, A_LIVELLO);
    PP.camera.set_bounds(s, 0, 0, L_LIVELLO, A_LIVELLO);
    PP.camera.start_follow(s, rosa, -ANTICIPO_CAMERA, 0);
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

function tocca_oggetto(s, a, b) {
    if (rosa_ko) {
        return;
    }
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

function crea_traguardo(s) {
    let traguardo = PP.shapes.rectangle_add(s,
        X_TRAGUARDO, Y_TRAGUARDO,
        L_TRAGUARDO, A_TRAGUARDO, COLORE_TRAGUARDO, TRASPARENZA_TRAGUARDO);
    PP.physics.add(s, traguardo, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, rosa, traguardo, tocca_traguardo);
}

function tocca_traguardo(s, a, b) {
    if (rosa_ko) {
        return;
    }
    partita_vinta = scelte_tutte_corrette();
    qualcosa_storto = (partita_vinta == false) && tutte_le_scelte_fatte();
    PP.scenes.start("fine");
}

//miscellanea2

function inizia_ko(s, uomo, adesso) {
    rosa_ko = true;
    rosa.visibility.hidden = false;
    PP.physics.set_allow_gravity(rosa, true);
    animazione = "ko";
    PP.assets.sprite.animation_play(rosa, animazione);
    uomo.colpisce_fino = adesso + DURATA_KO * 2;
    PP.timers.add_timer(s, DURATA_KO, fine_partita, false);
}

function tutte_le_scelte_fatte() {
    for (let numero = 0; numero < SCELTE.length; numero++) {
        if (scelte_fatte[numero] != "a" && scelte_fatte[numero] != "b") {
            return false;
        }
    }
    return true;
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
    qualcosa_storto = false;
    PP.scenes.start("fine");
}

//update livello

function update(s) {
    pattuglia_uomini(s);
    if (rosa_ko) {
        return;
    }
    if (PP.timers.get_time(s) >= colpita_fino) {
        salta(s);
        cammina(s);
        arrampica(s);
    }
    anima_rosa(s);
    aggiorna_invulnerabilita(s);
}

function pattuglia_uomini(s) {
    for (const uomo of uomini) {
        pattuglia_uomo(s, uomo);
    }
}

function pattuglia_uomo(s, uomo) {
    let adesso = PP.timers.get_time(s);
    anima_uomo(uomo, adesso);

    if (adesso < uomo.colpisce_fino) {
        return;
    }

    if (uomo.fermo_fino > 0) {
        if (adesso >= uomo.fermo_fino) {
            uomo.fermo_fino = 0;
            PP.physics.set_velocity_x(uomo, uomo.direzione * VEL_UOMO);
        }
        return;
    }

    if (uomo.geometry.x <= uomo.x_min) {
        uomo.direzione = 1;
    } else if (uomo.geometry.x >= uomo.x_max) {
        uomo.direzione = -1;
    }
    uomo.geometry.flip_x = (uomo.direzione == -1);
    PP.physics.set_velocity_x(uomo, uomo.direzione * VEL_UOMO);

    if (Math.random() < PROBABILITA_FERMATA) {
        ferma_uomo(uomo, adesso);
    }
}

function salta(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_SALTO)
        && PP.physics.is_on_ground(rosa)) {
        PP.physics.set_velocity_y(rosa, -VEL_SALTO);
    }
}

function cammina(s) {
    if (PP.interactive.kb.is_key_down(s, TASTO_SX)) {
        PP.physics.set_velocity_x(rosa, -VEL_CORSA);
        rosa.geometry.flip_x = true;
    } else if (PP.interactive.kb.is_key_down(s, TASTO_DX)) {
        PP.physics.set_velocity_x(rosa, VEL_CORSA);
        rosa.geometry.flip_x = false;
    } else {
        PP.physics.set_velocity_x(rosa, 0);
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

function anima_rosa(s) {
    let adesso = PP.timers.get_time(s);
    let nuova = "fermo";
    if (adesso < colpita_fino) {
        nuova = "colpita";
    } else if (in_scala) {
        nuova = "scala_ferma";
        if (PP.interactive.kb.is_key_down(s, TASTO_SU)
            || PP.interactive.kb.is_key_down(s, TASTO_GIU)) {
            nuova = "scala";
        }
    } else if (PP.physics.is_on_ground(rosa) == false) {
        nuova = "salto";
    } else if (PP.physics.get_velocity_x(rosa) != 0) {
        nuova = "cammina";
    }

    if (nuova != animazione) {
        animazione = nuova;
        PP.assets.sprite.animation_play(rosa, animazione);
    }
}

function aggiorna_invulnerabilita(s) {
    let adesso = PP.timers.get_time(s);
    if (adesso < invulnerabile_fino) {
        rosa.visibility.hidden = (Math.floor(adesso / 100) % 2 == 0);
    } else {
        rosa.visibility.hidden = false;
    }
}

//destroy livello

function destroy(s) {}

PP.scenes.add("sapienza", preload, create, update, destroy);