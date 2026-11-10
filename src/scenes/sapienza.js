const L_LIVELLO = 10650;
const A_LIVELLO = 2370;
const TERRA = "0xB96E54";
const VIOLA = "0x800080";
const ROSSO = "0xE44A4A";
const MARRONE = "0x8B5A2B";
const A_TERRENO = 220;
const Y_TERRENO = A_LIVELLO - A_TERRENO;
const X_ROSA = 200;
const L_ROSA = 81;
const A_ROSA = 90;
const L_UOMO = 81;
const A_UOMO = 90;


const L_PIATTAFORMA = 290;
const A_PIATTAFORMA = 21;
const X_PIATTAFORMA_1 = 1190;
const Y_PIATTAFORMA_1 = Y_TERRENO - 150;
const X_PIATTAFORMA_2 = 1960;
const Y_PIATTAFORMA_2 = Y_TERRENO - 150;
const X_PIATTAFORMA_3 = 2420;
const Y_PIATTAFORMA_3 = Y_TERRENO - 150;

const L_PIATTAFORMA_C = 170;
const A_PIATTAFORMA_C = 21;
const X_PIATTAFORMA_1_C = 1745;
const Y_PIATTAFORMA_1_C = Y_TERRENO - 295;
const X_PIATTAFORMA_2_C = 2800;
const Y_PIATTAFORMA_2_C = Y_TERRENO - 295;

const L_PAVIMENTO_1 = 860;
const A_PAVIMENTO_1 = 18;
const X_PAVIMENTO_1 = 1190;
const Y_PAVIMENTO_1 = Y_TERRENO - 429;
const X_PAVIMENTO_1_2 = 2350;
const Y_PAVIMENTO_1_2 = Y_TERRENO - 429;


const PERCORSO_SFONDO = "assets/images/Bozza-mappa.png";
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
function preload(s) {
    immagine_sfondo = PP.assets.image.load(s, PERCORSO_SFONDO);
}

function create(s) {
    crea_sfondo(s);
    crea_terreno(s);
    crea_rosa(s);
    crea_uomo(s);
    crea_camera(s);
    crea_piattaforma(s, X_PIATTAFORMA_1, Y_PIATTAFORMA_1);
    crea_piattaforma(s, X_PIATTAFORMA_2, Y_PIATTAFORMA_2);
    crea_piattaforma(s, X_PIATTAFORMA_3, Y_PIATTAFORMA_3);
    crea_piattaforma_c(s, X_PIATTAFORMA_1_C, Y_PIATTAFORMA_1_C);
    crea_piattaforma_c(s, X_PIATTAFORMA_2_C, Y_PIATTAFORMA_2_C);
    crea_pavimento(s, X_PAVIMENTO_1, Y_PAVIMENTO_1);
    crea_pavimento(s, X_PAVIMENTO_1_2, Y_PAVIMENTO_1_2);
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

function crea_piattaforma(s, x, y, l, a) {
    let piattaforma = PP.shapes.rectangle_add(s,
        x, y, L_PIATTAFORMA, A_PIATTAFORMA, MARRONE, 1);
    PP.physics.add(s, piattaforma, PP.physics.type.STATIC);
    PP.physics.add_collider(s, rosa, piattaforma);
}

function crea_piattaforma_c (s, x, y) {
    let piattaforma = PP.shapes.rectangle_add(s,
        x, y, L_PIATTAFORMA_C, A_PIATTAFORMA_C, MARRONE, 1);
    PP.physics.add(s, piattaforma, PP.physics.type.STATIC);
    PP.physics.add_collider(s, rosa, piattaforma);
}

function crea_pavimento(s, x, y) {
    let pavimento = PP.shapes.rectangle_add(s,
        x, y, L_PAVIMENTO_1, A_PAVIMENTO_1, TERRA, 1);
    PP.physics.add(s, pavimento, PP.physics.type.STATIC);
    PP.physics.add_collider(s, rosa, pavimento);
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