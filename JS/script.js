//definisco la lista della spesa 

let lista=[
    "birra",
    "latte",
    "burro",
    "pane",
    "pasta"
]

//creo il ciclo for per stampare gli elementi in console

/*
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    console.log(element)
    
}
*/

//converto il ciclo appena fatto in while 
//definisco l'indice fuori dal while 
i=0

//definisco il ciclo while 
while(i < lista.length){
    const element = lista[i];
    console.log(element);
    i++;

}