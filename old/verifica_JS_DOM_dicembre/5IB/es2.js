function boh(numbers, d) {
    let r = 0;
    for (let i = d; i <= numbers.length; i++) {
        let r += numbers[i];
    }
    return r;
}
/*
Risposta alle domande:
1) L'errore da correggere è che la variabile 'r' è stata dichiarata due volte, una volta all'interno del ciclo 'for' e una volta all'esterno. Per risolvere il problema, basta rimuovere 'let' dalla variabile 'r' all'interno del ciclo 'for'.
2) Una volta corretto l'errore, il codice effettuerà la somma degli elementi dell'array 'numbers' a partire dall'indice 'd' fino alla fine dell'array. Il risultato verrà restituito alla fine.
3) Se d fosse riferimento a un tag span, per prenderne il valore bisognerebbe usare la proprietà 'innerHTML' o 'innerText' a seconda del caso e applicare parseInt().

*/
// Per valutazione: 2 punti ogni domanda
// 0 se risposta mancante, 1 se nella giusta direzione ma con errori, 2 se corretta