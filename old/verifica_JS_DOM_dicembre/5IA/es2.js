function makeSmth(myWords, yourWord) {
    const c = 0;
    for (let d=0; d < myWords.length; d++) {
        if (myWords[d].length < yourWord.length) {
            c++;
        }
    }
    return c;
}
/*
Risposta alle domande:
1) L'errore da correggere è che la variabile 'c' è dichiarata come 'const' ma viene modificata, quindi dovrebbe essere dichiarata come 'let'.
2) La funzione 'makeSmth' prende in input un array di stringhe 'myWords' e una stringa 'yourWord', e restituisce il numero di stringhe in 'myWords' che hanno lunghezza minore di quella di 'yourWord'.
3) Se yourWord fosse il riferimento a un campo di input testuale, per prenderne il valore bisognerebbe usare la proprietà 'value'.
*/
// Per valutazione: 2 punti ogni domanda
// 0 se risposta mancante, 1 se nella giusta direzione ma con errori, 2 se corretta