/**
 * Increase font size to 24pt in the textarea
 */
function bigger() {
    // alert("Hello, world!");
    document.getElementById("text").style.fontSize = "24pt";
}

/**
 * Fancify text in the textarea
 */
function fancify() {
    // alert("Fancify!");
    let textArea = document.getElementById("text");
    if (document.getElementById("fancify").checked) {
        document.getElementById("borify").checked = false;
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

/**
 * Borify text in the textarea
 */
function borify() {
    // alert("Borify!");
    let textArea = document.getElementById("text");
    if (document.getElementById("borify").checked) {
        document.getElementById("fancify").checked = false;
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

/**
 * Mooify text in the textarea
 * (Transforms text to uppercase & adds suffix "-Moo" to the end of each sentence)
 */
function mooify() {
    let textArea = document.getElementById("text");
    textArea.style.textTransform = "uppercase";

    let parts = textArea.value.split(".");
    textArea.value = parts.join("-Moo.");
}
