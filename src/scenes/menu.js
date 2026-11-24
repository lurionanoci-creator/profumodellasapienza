const PERCORSO_SFONDO_MENU = "assets/images/sfondo_menu.png";
const TITOLO_MENU = "Il profumo della sapienza";
const DIMENSIONE_TITOLO_MENU = 72;
const COLORE_TITOLO_MENU = "0x000000";
const L_BOTTONE_MENU = 360;
const A_BOTTONE_MENU = 90;
const X_TITOLO_MENU = 640;
const Y_TITOLO_MENU = 180;
const X_GIOCA_MENU = 1000;
const Y_GIOCA_MENU = 410;
const X_STORIA_MENU = 1000;
const Y_STORIA_MENU = 500;
const COLORE_BOTTONE_MENU = "0x000000";
const TRASPARENZA_BOTTONE_MENU = 0;
const COLORE_TESTO_BOTTONE_MENU = "0x000000";
const DIMENSIONE_TESTO_BOTTONE_MENU = 40;


let immagine_sfondo_menu;

function preload_menu(s) {
    immagine_sfondo_menu = PP.assets.image.load(s, PERCORSO_SFONDO_MENU);
}

function create_menu(s) {
    crea_sfondo_menu(s);
    crea_titolo_menu(s);
    crea_bottone_menu(s, "Gioca", X_GIOCA_MENU, Y_GIOCA_MENU, vai_a_gioco);
    crea_bottone_menu(s, "Storia", X_STORIA_MENU, Y_STORIA_MENU, vai_a_storia);
}

function crea_titolo_menu(s) {
    PP.shapes.text_styled_add(s,
        X_TITOLO_MENU, Y_TITOLO_MENU, TITOLO_MENU,
        DIMENSIONE_TITOLO_MENU, "Arial", "bold", COLORE_TITOLO_MENU, null, 0.5, 0.5);
}

function crea_bottone_menu(s, testo, x, y, azione) {
    let bottone = PP.shapes.rectangle_add(s,
        x, y,
        L_BOTTONE_MENU, A_BOTTONE_MENU,
        COLORE_BOTTONE_MENU, TRASPARENZA_BOTTONE_MENU);
    PP.interactive.mouse.add(bottone, "pointerdown", azione);

    PP.shapes.text_styled_add(s,
        x, y, testo,
        DIMENSIONE_TESTO_BOTTONE_MENU, "Arial", "bold", COLORE_TESTO_BOTTONE_MENU, null, 0.5, 0.5);
}
function crea_sfondo_menu(s) {
    PP.assets.image.add(s, immagine_sfondo_menu, 0, 0, 0, 0);
}


function vai_a_gioco(s) {
    PP.scenes.start("sapienza");
}

function vai_a_storia(s) {
    PP.scenes.start("storia");
}

function update_menu(s) {}

function destroy_menu(s) {}

PP.scenes.add("menu", preload_menu, create_menu, update_menu, destroy_menu);