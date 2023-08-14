const spielbrett = document.getElementById('spielbrett');
const kartenWerte = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'E', 'F', 'G', 'H'];
let umgedrehteKarten = [];

function kartenMischen(array) {
    let currentIndex = array.length, randomIndex, tempValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}

function karteUmdrehen(event) {
    const ausgewaehlteKarte = event.target;

    if (umgedrehteKarten.length < 2 && ausgewaehlteKarte !== umgedrehteKarten[0]) {
        ausgewaehlteKarte.style.color = '#fff';
        umgedrehteKarten.push(ausgewaehlteKarte);

        if (umgedrehteKarten.length === 2) {
            if (umgedrehteKarten[0].textContent === umgedrehteKarten[1].textContent) {
                umgedrehteKarten = [];
            } else {
                setTimeout(() => {
                    umgedrehteKarten.forEach(karte => karte.style.color = 'transparent');
                    umgedrehteKarten = [];
                }, 1000);
            }
        }
    }
}

kartenMischen(kartenWerte).forEach(wert => {
    const karte = document.createElement('div');
    karte.classList.add('karte');
    karte.textContent = wert;
    karte.addEventListener('click', karteUmdrehen);
    spielbrett.appendChild(karte);
});
