const COLORE_BOX = "0x000000";
const TRASPARENZA_BOX = 0.85;
const COLORE_TESTO = "0xFFFFFF";
const COLORE_ICONA = "0x800080";
const A_BOX = 200;
const MARGINE_BOX = 40;
const LATO_ICONA = 140;
const DIMENSIONE_TESTO = 28;
const TASTO_SCELTA_A = PP.key_codes.A;
const TASTO_SCELTA_B = PP.key_codes.B;
const TESTO_COMANDI = "(premi A oppure B)";

function create_scelta(s) {
    let dati = SCELTE[scelta_corrente];
    let testo = dati.testo + "\n\nA) " + dati.a.nome
    + "        B) " + dati.b.nome + "\n\n" + TESTO_COMANDI;

    let x_box = LARGHEZZA / 2;
    let y_box = ALTEZZA - MARGINE_BOX - A_BOX / 2;
    let x_icona = MARGINE_BOX + 20 + LATO_ICONA / 2;
    let x_testo = x_icona + LATO_ICONA / 2 + 30;

    PP.shapes.rectangle_add(s,
        x_box, y_box,
        LARGHEZZA - 2 * MARGINE_BOX, A_BOX, COLORE_BOX, TRASPARENZA_BOX);
    PP.shapes.rectangle_add(s,
        x_icona, y_box,
        LATO_ICONA, LATO_ICONA, COLORE_ICONA, 1);
    PP.shapes.text_styled_add(s,
        x_testo, y_box, testo,
        DIMENSIONE_TESTO, "Arial", "normal", COLORE_TESTO, null, 0, 0.5);
}

function update_scelta(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_SCELTA_A)) {
        scelte_fatte[scelta_corrente] = "a";
        PP.scenes.stop_overlay();
    } else if (PP.interactive.kb.is_key_just_down(s, TASTO_SCELTA_B)) {
        scelte_fatte[scelta_corrente] = "b";
        PP.scenes.stop_overlay();
    }
}

function preload_scelta(s) {}

function destroy_scelta(s) {}

PP.scenes.add("scelta", preload_scelta, create_scelta, update_scelta, destroy_scelta);