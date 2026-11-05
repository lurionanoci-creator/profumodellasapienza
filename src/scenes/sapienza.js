const TERRA = "0xB96E54";
const VIOLA = "0x800080";
const ROSSO = "0xE44A4A";
const NERO = "0x000000";
const A_TERRENO = 96;
const Y_TERRENO = 624;
const X_ROSA = 200;
const L_ROSA = 81;
const A_ROSA = 90;
const L_UOMO = 81;
const A_UOMO = 90;
const VEL_INIZIALE = 400;
const ACCELERAZIONE = 20;
const L_LIVELLO = 3840;

const DISTANZA_MAX = 600;
const VEL_SALTO = 1000;
const TASTO_SALTO = PP.key_codes.SPACE;
const VEL_CORSA = 400;
const TASTO_SX = PP.key_codes.LEFT;
const TASTO_DX = PP.key_codes.RIGHT;
const ANTICIPO_CAMERA = 200;

let vel_uomo = VEL_INIZIALE;
let terreno;
let rosa;
let uomo;
let partita_finita = false;
let testo_fine;
let testo_rigioca;

function preload(s) {}

function create(s) {
    crea_terreno(s);
    crea_rosa(s);
    crea_uomo(s);
    crea_fine(s);
    crea_camera(s);
}

function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
    PP.camera.set_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
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
        LARGHEZZA * 3 / 4, Y_TERRENO - A_UOMO / 2,
        L_UOMO, A_UOMO, ROSSO, 1);
    PP.physics.add(s, uomo, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(uomo, false);
    PP.physics.set_velocity_x(uomo, -vel_uomo);
    PP.physics.add_overlap_f(s, rosa, uomo, fine_partita);
}

function crea_fine(s) {
    testo_fine = PP.shapes.text_styled_add(s,
        LARGHEZZA / 2, ALTEZZA / 3, "GAME OVER",
        64, "Arial", "bold", NERO, null, 0.5, 0.5);
    testo_fine.visibility.hidden = true;

    testo_rigioca = PP.shapes.text_styled_add(s,
        LARGHEZZA / 2, ALTEZZA / 2, "RIGIOCA (SPAZIO)",
        40, "Arial", "bold", NERO, null, 0.5, 0.5);
    testo_rigioca.visibility.hidden = true;
}

function fine_partita(s, a, b) {
    partita_finita = true;
    PP.physics.set_velocity_x(a, 0);
    PP.physics.set_velocity_x(b, 0);
    testo_fine.visibility.hidden = false;
    testo_rigioca.visibility.hidden = false;
}

function update(s) {
    if (partita_finita) {
        ricomincia(s);
        return;
    }
    salta(s);
    controlla_uomo();
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

function controlla_uomo() {
    if (uomo.geometry.x < -L_UOMO) {
        vel_uomo += ACCELERAZIONE;
        resetta_uomo();
    }
}

function resetta_uomo() {
    uomo.geometry.x = LARGHEZZA + L_UOMO / 2 + Math.random() * DISTANZA_MAX;
    PP.physics.set_velocity_x(uomo, -vel_uomo);
}

function ricomincia(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_SALTO)) {
        partita_finita = false;
        vel_uomo = VEL_INIZIALE;
        resetta_uomo();
        testo_fine.visibility.hidden = true;
        testo_rigioca.visibility.hidden = true;
    }
}

function destroy(s) {}

PP.scenes.add("sapienza", preload, create, update, destroy);