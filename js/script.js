// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var listNumber = [];
for(var i=1; i <= 100; i++){ 
    if(( (i%3) == 0 ) && ( (i%5) == 0)){
        listNumber.push("<strong>" +"Fizz"+ "</strong>"+"<span>" +"Buzz"+ "</span>");
    }else if ( i%3 == 0 ){
        listNumber.push("<strong>" +"Fizz"+ "</strong>");
    }else if( i%5 == 0){
        listNumber.push("<span>" +"Buzz"+ "</span>");
    }else{ 
        listNumber.push(i);
    } 
}

var elemento = document.getElementById("list");

for(i=0; i< 100; i++) {
    elemento.innerHTML +=  "<li>" + listNumber[i] + "</li>";   
}


