//definisco la lista della spesa 

let lista=[
    "birra",
    "latte",
    "burro",
    "pane",
    "pasta"
]

//(milestone3)richiamo elemento ul in JS
let lista_spesa=document.getElementById("lista");

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
    let oggetto_spesa=document.createElement("li");
    lista_spesa.append(oggetto_spesa);
    oggetto_spesa.innerText= element;
    i++;
}



/*ocio a scrivere bene i comandi in console che sennò sbotti  
come un disgraziato
      */