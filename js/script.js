// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var iTemporaneo;
var i;


for( i=1; i <= 100; i++){ 
    iTemporaneo=i;
    if(( (i%3) == 0 ) && ( (i%5) == 0)){
        i = "FizzBuzz";
    }
    if ( i%3 == 0 ){
        i = "Fizz";
    }
    if( i%5 == 0){
        i = "Buzz";
    }
    console.log(i);
    i=iTemporaneo;  
}