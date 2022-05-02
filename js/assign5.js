/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    // console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener('click', encrypt);
    document.getElementById("reset").addEventListener('click', reset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function encrypt() {
    // console.log("Button Clicked!");
    let textArea = document.getElementById("input-text");
    let text = textArea.value;

    // Handle font size
    if (document.getElementById("12pt").checked) {
      document.getElementById("24pt").checked = false;
      document.getElementById("result").style.fontSize = "12pt";
    } else {
      document.getElementById("12pt").checked = false;
      document.getElementById("result").style.fontSize = "24pt";
    }

    // handle All-caps
    if (document.getElementById("all-caps").checked) {
      document.getElementById("result").style.textTransform = "uppercase";
    } else {
      document.getElementById("result").style.textTransform = "lowercase";
    }

    // handle cipher type
    if (document.getElementById("cipher-type").value === "shift") {
      document.getElementById("result").textContent = shiftCipher(text);
    } else {
      document.getElementById("result").textContent = randomCipher(text);
    }
    
  }

  function reset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("cipher-type").value = "shift";
    document.getElementById("12pt").checked = true;
    document.getElementById("24pt").checked = false;
    document.getElementById("all-caps").checked = false;
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function randomCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else { // letter is between 'a' and 'z'
        let letter = 'a'.charCodeAt(0);
        let rand = Math.floor(Math.random() * 26); // 0-25
        let resultLetter = String.fromCharCode(letter + rand);
        result += resultLetter;
      }
    }
    return result;
  }

})();
