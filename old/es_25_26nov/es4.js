function f1(arr, lim){
    const new_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= lim){
            new_arr.push(arr[i]);
        }
    }   
    return new_arr;
}
function f2(arr, lim){ //macchinosa, ma utile per capire i problemi delle altre rimozioni (es. con splice)
    let initial_length = arr.length; //mi serve sotto per capire se ho rimosso elementi

    const temp_arr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= lim){
            temp_arr.push(arr[i]);
        }
    }

    // svuoto l'array originale
    while(arr.length > 0){
        arr.pop();
    }

    // copio gli elementi filtrati
    for(let i = 0; i < temp_arr.length; i++){
        arr.push(temp_arr[i]);
    }

    return !(initial_length == arr.length);
}
function f3(arr, lim){
    const pos_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < lim){
            pos_arr.push(i);
        }
    }
    //restituisco le posizioni degli elementi che andrebbero rimossi
}