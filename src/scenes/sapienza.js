const TERRA = "0xB96E54";
const VIOLA = "0x800080";
const ROSSO = "0xE44A4A";
const A_TERRENO = 96;
const Y_TERRENO = 624;
const X_ROSA = 200;
const L_ROSA = 81;
const A_ROSA = 90;
const L_UOMO = 81;
const A_UOMO = 90;

let terreno;
let rosa;
let uomo;




function preload(s) {}

function create(s) {
    crea_terreno(s);
    crea_rosa(s); 
    crea_uomo(s);
}

function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(s,
    LARGHEZZA / 2, Y_TERRENO + A_TERRENO / 2,
    LARGHEZZA, A_TERRENO, TERRA, 1);
}

function crea_rosa(s) {
    rosa = PP.shapes.rectangle_add(s,
    X_ROSA, Y_TERRENO - A_ROSA / 2,
    L_ROSA, A_ROSA, VIOLA, 1);
}

function crea_uomo(s) {
    uomo = PP.shapes.rectangle_add(s,
    LARGHEZZA * 3 / 4, Y_TERRENO - A_UOMO / 2,
    L_UOMO, A_UOMO, ROSSO, 1);
}

function update(s) {}

function destroy(s) {}

PP.scenes.add("sapienza", preload, create, update, destroy);