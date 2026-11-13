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
    // piattaforme corte 2
    { x: 1820, y: Y_TERRENO - 565, l: 130, a: 21, colore: MARRONE },
    { x: 1045, y: Y_TERRENO - 575, l: 150, a: 21, colore: MARRONE },
    { x: 910, y: Y_TERRENO - 700, l: 150, a: 21, colore: MARRONE },
    { x: 1640, y: Y_TERRENO - 700, l: 200, a: 21, colore: MARRONE },
    { x: 2595, y: Y_TERRENO - 570, l: 140, a: 21, colore: MARRONE },
    { x: 3010, y: Y_TERRENO - 710, l: 320, a: 21, colore: MARRONE },
    // piattaforme lunghe 2
    { x: 2345, y: Y_TERRENO - 710, l: 680, a: 21, colore: MARRONE },
];


const PERCORSO_SFONDO = "assets/images/Bozza-mappa.png";
const PERCORSO_CACAO = "assets/images/cacao.png";
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
let cacao
let rosa;
let uomo;
let immagine_sfondo;
let immagine_cacao;

function preload(s) {
    immagine_sfondo = PP.assets.image.load(s, PERCORSO_SFONDO);
    immagine_cacao = PP.assets.image.load(s, PERCORSO_CACAO);
}

function create(s) {
    crea_sfondo(s);
    crea_terreno(s);
    crea_rosa(s);
    crea_uomo(s);
    crea_camera(s);
    crea_piattaforme(s);
    crea_cacao(s);
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

function crea_cacao(s) { 
    cacao = PP.assets.image.add(s, immagine_cacao, X_CACAO, Y_CACAO, 0.5, 0.5);
    PP.physics.add(s, cacao, PP.physics.type.STATIC);
    PP.physics.add_collider(s, rosa, cacao);
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


function fine_partita(s, a, b) {
    PP.scenes.start("fine");
}


function update(s) {
    salta(s);
    pattuglia_uomo();
    cammina(s);
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


function destroy(s) {}

PP.scenes.add("sapienza", preload, create, update, destroy);