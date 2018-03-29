// A) Generare 10 treni in partenza da Roma e in arrivo a firenze e 10 treni in partenza da milano e in arrivo a Roma
// Non devono essere generati a mano, ma con cicli che creino dei valori plausibili per ogni dato
//
// B) Stampare il numero identificativo e l'orario di partenza di un treno che da Roma e va a Firenze, con le seguenti caratteristiche
//  1) Quello che parte prima
//  2) Quello che ci mette meno
//  3) Quello più vuoto
//
// C) Prenotazione: chiedere al'utente la stazione di partenza, la stazione di arrivo e il modo di ricerca.
// Il modo di ricerca può essere una delle opzioni del punto B.
// Il software deve individuare il treno con le caratteristiche scelte dall'utente che abbiamo posti liberi, decrementare il numero di posti liberi e generare un Codice Prenotazione di 6 caratteri alfanumerici casuali.

var trains = [];

// train = {
//   // "id" : ,
//   // "partenza" : "Milano",
//   // "destinazione" : "Genova",
//   // "durata" : "120",
//   // "orario" : "13.15"
//   // "postiliberi" : 10,
// }

//Genero 10 treni Rm-Fi
for (var i = 0; i < 10; i++) {
    var train = [];
    train.id = codegenerator();
    train.partenza = "Roma"
    train.destinazione = "Firenze"
    train.durata = Math.floor(Math.random() * (190 - 75)) + 75;
    train.orario = time();
    train.ora =  oraminuti(clock);
    train.postiliberi =  Math.floor(Math.random() * 41);
    trains.push(train)
}

//Genero 10 treni Mi-Rm
for (var i = 0; i < 10; i++) {
    var train = [];
    train.id = codegenerator();
    train.partenza = "Milano"
    train.destinazione = "Roma"
    train.durata = Math.floor(Math.random() * (215 - 170)) + 170;
    train.orario = time();
    train.ora = oraminuti(train.orario);
    train.postiliberi =  Math.floor(Math.random() * 41);
    trains.push(train)
}

// creo array treni per fi
var trainfi = []
for (var i = 0; i < trains.length; i++) {
    if ((trains[i].partenza == "Roma") && (trains[i].destinazione == "Firenze")) {
        trainfi.push(trains[i])
    }
}
console.log(trainfi)

//cerco il più veloce
var veloce = trainfi[0].durata
var trenoveloce = trainfi[0]

for (var i = 0; i < trainfi.length; i++) {
  if (trainfi[i].durata < veloce) {
      trainfi[i].durata = veloce
      trenoveloce = trainfi[i]
  }
}
console.log(trenoveloce)

//cerco il più vuoto
var vuoto = trainfi[0].postiliberi
var trenovuoto = trainfi[0]

for (var i = 0; i < trainfi.length; i++) {
  if (trainfi[i].postiliberi > vuoto) {
      trainfi[i].postiliberi = vuoto
      trenovuoto = trainfi[i]
  }
}
console.log(trenovuoto)

// Cerco quello che parte prima
var oraprecedente = trainfi[0].ora
var trenoprecedente = trainfi[0]

for (var i = 0; i < trainfi.length; i++) {
  if (trainfi[i].ora < oraprecedente) {
      trainfi[i].ora = oraprecedente;
      trenoprecedente = trainfi[i]
  }
}
console.log(trenoprecedente)



// var partenza = prompt("Inserisci stazione di partenza");
// var destinazione = prompt("Inserisci stazione di arrivo");
//
// var trainut = []
// for (var i = 0; i < trains.length; i++) {
//     if ((trains[i].partenza == partenza) && (trains[i].destinazione == destinazione)) {
//         trainfi.push(trains[i])
//     }
// }
//
// console.log(trainut)


// var ricerca = prompt("Selezionare: tempo-posti-orario")
//
// if (ricerca=="tempo") {
//   var veloceut = trainut[0].durata
//   var trenoutvel = trainut[0]
//   for (var i = 0; i < trainut.length; i++) {
//     if (trainut[i].durata < veloceut) {
//         trainut[i].durata = veloceut
//         trenoutvel = trainut[i]
//     }
//   }
//   console.log(trenoutvel)
// }

// if (trenoveloce.postiliberi>0) {
//   trenoveloce.postiliberi--
//   console.log (codegenerator())
// }



// genero cod numerico di 4cifre
function codegenerator () {
      unicode = [];
      for (var j = 0; j < 4; j++) {
        numbcode = (Math.floor(Math.random() * 10));
        unicode.push(numbcode)
      }
      return unicode.join("")
}

// genero un orario
function time () {
  clock = "";
  // ora = [];
  h = Math.floor(Math.random() * 24);
  min = Math.floor(Math.random() * 60);
  if (min<10) {
    min = "0" + min
  }
  clock = h + ":" + min
  // ora.push(h)
  // ora.push(min)
  // oraunita = ora.join("")

  return clock
}

// trasforma le ore in minuti
function oraminuti (orologio) {
    ora = orologio.split(":");
    minuti = ora[0] * 60 + parseInt(ora[1]);
    return minuti
}
