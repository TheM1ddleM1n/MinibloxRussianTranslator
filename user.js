// ==UserScript==
// @name         Miniblox Russian Chat
// @namespace    ts is tuff fr ✔️
// @description  simple translator for game chat!
// @version      1.1
// @match        https://miniblox.io/
// @author       TheM1ddleM1n
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    console.log("[RU CHAT] Russian chat loaded");

    const RU_MAP = {
        a:"а", b:"б", c:"ц", d:"д", e:"е", f:"ф", g:"г", h:"х",
        i:"и", j:"й", k:"к", l:"л", m:"м", n:"н", o:"о", p:"п",
        q:"я", r:"р", s:"с", t:"т", u:"у", v:"в", w:"ш", x:"кс",
        y:"ы", z:"з",
        A:"А", B:"Б", C:"Ц", D:"Д", E:"Е", F:"Ф", G:"Г", H:"Х",
        I:"И", J:"Й", K:"К", L:"Л", M:"М", N:"Н", O:"О", P:"П",
        Q:"Я", R:"Р", S:"С", T:"Т", U:"У", V:"В", W:"Ш", X:"КС",
        Y:"Ы", Z:"З",
        "0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9",
        " ":" ",".":".",",":",","!":"!","?":"?","-":"-","_":"_","/":"/"
    };

    function translate(text) {
        return text.split("").map(c => RU_MAP[c] || c).join("");
    }

    function waitForGame() {
        const reactRoot = document.querySelector("#react");
        if (!reactRoot) return setTimeout(waitForGame, 1000);

        try {
            const internal = Object.values(reactRoot)[0];
            const game = internal?.updateQueue?.baseState?.element?.props?.game;
            if (!game || !game.chat) return setTimeout(waitForGame, 1000);

            const originalSubmit = game.chat.submit;
            game.chat.submit = function(...args) {
                let message = this.inputValue || this.value || "";
                if (message && !message.trim().startsWith("/")) {
                    const translated = translate(message);
                    if (this.inputValue !== undefined) this.inputValue = translated;
                    if (this.value !== undefined) this.value = translated;
                }
                return originalSubmit.apply(this, args);
            };
            console.log("[RU CHAT] ✅ Russian chat enabled");
        } catch {
            setTimeout(waitForGame, 1000);
        }
    }

    waitForGame();
})();
