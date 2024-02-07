
/*console.log("HELLO");
setTimeout(function(){
    console.log("THIS IS");
}, 2000);
console.log("DOG");*/

/*styleTimer() {
    const wrapperEl = document.querySelector(".wrapper");

    setTimeout(function() {
        wrapperEl.style.color = "hsla(0, 50%, 50%, 0.9)";
        wrapperEl.style.backgroundColor = "var(--lightColor)";
    }, 2000);
}

styleTimer()*/

// Henter <h1>-elementet
let cookieEl = document.querySelector("#cookie");

// Undersøker om localStorage-variabelen er satt
if (localStorage.antallBesok) {
  // Alt lagres som tekst i localStorage, så vi må gjøre om til tall
  localStorage.antallBesok = Number(localStorage.antallBesok) + 1;
} else {
  localStorage.antallBesok = 1;
}

// Oppdaterer teksten i <h1>-elementet
cookieEl.innerHTML = "Dette er ditt " + localStorage.antallBesok + ". besøk på denne nettsiden.";