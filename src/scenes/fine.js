const NERO = "0x000000";
const TASTO_RIGIOCA = PP.key_codes.SPACE;

function preload_fine(s) {}

function create_fine(s) {
    PP.shapes.text_styled_add(s,
        LARGHEZZA / 2, ALTEZZA / 3, "GAME OVER",
        64, "Arial", "bold", NERO, null, 0.5, 0.5);

    PP.shapes.text_styled_add(s,
        LARGHEZZA / 2, ALTEZZA / 2, "RIGIOCA (SPAZIO)",
        40, "Arial", "bold", NERO, null, 0.5, 0.5);
}

function update_fine(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_RIGIOCA)) {
        PP.scenes.start("sapienza");
    }
}

function destroy_fine(s) {}

PP.scenes.add("fine", preload_fine, create_fine, update_fine, destroy_fine);