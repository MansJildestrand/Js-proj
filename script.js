// Initiera variabler för spelet
let scores = [0, 0]; // Totala poäng för båda spelarna
let currentScore = 0; // Löpande poäng för den aktuella spelaren
let activePlayer = 0; // Aktiv spelare, 0 eller 1
const winningScore = 50; // Vinstgräns

// Hämta HTML-element
const score0El = document.getElementById('score-0'); // Element för spelare 1:s totala poäng
const score1El = document.getElementById('score-1'); // Element för spelare 2:s totala poäng
const current0El = document.getElementById('current-0'); // Element för spelare 1:s löpande poäng
const current1El = document.getElementById('current-1'); // Element för spelare 2:s löpande poäng
const diceResultEl = document.getElementById('dice-result'); // Element för att visa tärningsresultat
const winnerMessageEl = document.getElementById('winner-message'); // Element för att visa vinnarmeddelande
const rollDiceBtn = document.getElementById('roll-dice'); // Knapp för att kasta tärning
const holdScoreBtn = document.getElementById('hold-score'); // Knapp för att hålla poäng

// Händelsehanterare för "Kasta tärning" knappen (onclick)
rollDiceBtn.onclick = rollDice;

// Händelsehanterare för "Håll poäng" knappen (onclick)
holdScoreBtn.onclick = holdScore;

// Händelsehanterare för musöver händelse på "Kasta tärning" knappen (onmouseover)
rollDiceBtn.onmouseover = function() {
    rollDiceBtn.style.backgroundColor = 'red';
};

// Händelsehanterare för musut händelse på "Kasta tärning" knappen (onmouseout)
rollDiceBtn.onmouseout = function() {
    rollDiceBtn.style.backgroundColor = '';
};

// Händelsehanterare för musöver händelse på "Håll poäng" knappen (onmouseover)
holdScoreBtn.onmouseover = function() {
    holdScoreBtn.style.backgroundColor = 'green';
};

// Händelsehanterare för musut händelse på "Håll poäng" knappen (onmouseout)
holdScoreBtn.onmouseout = function() {
    holdScoreBtn.style.backgroundColor = '';
};

// Funktion för att kasta tärning
function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1; // Kasta tärning (1-6)
    animateDice(dice); // Animering av tärningskast

    if (dice === 1) {
        // Om tärningen visar 1, nollställ löpande poäng och byt spelare
        currentScore = 0;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        switchPlayer(); // Byt spelare
    } else {
        // Lägg till tärningsresultatet till löpande poäng
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    }
}

// Funktion för att hålla poäng
function holdScore() {
    // Lägg till löpande poäng till den totala poängen för den aktuella spelaren
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    // Kontrollera om den aktuella spelaren har vunnit
    if (scores[activePlayer] >= winningScore) {
        winnerMessageEl.textContent = `Spelare ${activePlayer + 1} vinner!`; // Visa vinnarmeddelande
        winnerMessageEl.classList.add('show'); // Lägg till klass för vinnarmeddelandets animation
        rollDiceBtn.disabled = true; // Inaktivera knappen "Kasta tärning"
        holdScoreBtn.disabled = true; // Inaktivera knappen "Håll poäng"
    } else {
        // Nollställ löpande poäng och byt spelare
        currentScore = 0;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        switchPlayer(); // Byt spelare
    }
}

// Funktion för att byta spelare
function switchPlayer() {
    document.getElementById(`player-${activePlayer}`).classList.remove('active'); // Ta bort klass från nuvarande spelare
    activePlayer = activePlayer === 0 ? 1 : 0; // Växla mellan spelare 0 och 1
    document.getElementById(`player-${activePlayer}`).classList.add('active'); // Lägg till klass till ny aktiv spelare
}

// Funktion för att animera tärningskast
function animateDice(dice) {
    diceResultEl.classList.add('animate'); // Lägg till klass för animation
    setTimeout(() => {
        diceResultEl.classList.remove('animate'); // Ta bort klass för animation
        diceResultEl.textContent = `Tärning: ${dice}`; // Uppdatera tärningsresultatet
    }, 300); // Vänta 300 ms för animationens varaktighet
}

// Funktion för att hantera fönsterladdning (onload)
function onWindowLoad() {
    window.document.title = "Måns Nya title"; // Sätt en ny titel för dokumentet
    console.log(`Skärmbredd tillgänglig: ${screen.availWidth}`); // Logga skärmbredden
}

// Funktion för att öppna ett nytt fönster (window.open)
function openNewWindow() {
    window.open('', '', 'width=300,height=200'); // Öppna ett nytt fönster
}

// Funktion för att ändra storlek på fönstret (window.resizeTo)
function resizeWindow() {
    window.resizeTo(800, 600); // Ändra storlek på fönstret till 800x600
}
