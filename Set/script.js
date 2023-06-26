const firebaseConfig = {
  apiKey: "AIzaSyB6SZfw8Bi02Fkp0z-fSJxtHlBfaT8czbU",
  authDomain: "dronegps-56194.firebaseapp.com",
  projectId: "dronegps-56194",
  storageBucket: "dronegps-56194.appspot.com",
  messagingSenderId: "824947346624",
  appId: "1:824947346624:web:030db0b40ae06247ae7125"
};

firebase.initializeApp(firebaseConfig);

let dbIme = firebase.database().ref("ime"); 
let dbUdaljenost = firebase.database().ref("udaljenost"); 

// Funkcija za spremanje random udaljenosti u bazu
function spremiUdaljenost() {
  let randomVrijednost = Math.floor(Math.random() * 1001); 
  dbUdaljenost.set(randomVrijednost); 
}

function spremi() {
  let imeLjubimca = document.getElementById("vrijednost").value;
  dbIme.set(imeLjubimca);
  spremiUdaljenost();
}

setInterval(spremiUdaljenost, 1000);

// Preuzimanje random vrijednosti iz Firebase baze podataka
//firebase.database().ref('ogranicla').on('value', (snapshot) => {
  //const vrijednost = snapshot.val().vrijednost;
  //const bojaButtona = vrijednost === 1 ? 'green' : 'red';
 // document.getElementById('boja').style.backgroundColor = bojaButtona;
//});
