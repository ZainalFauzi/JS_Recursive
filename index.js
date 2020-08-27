//soal 1
function factorial (q){
    if (q == 0) {
        return 1
    }
    else { 
        factorial(q-1) 
        return q * factorial(q-1)
    }
}
console.log(factorial(4))

//soal 2
function genap(q) {
   if((q == 0) || (q == 1)) {
       console.log(0) 
   } else if(q%2 == 0) {
        genap(q-2)
        console.log(q)
   } else {
       genap(q-2)
        console.log(q-1)
   }
}

console.log(genap(15))



//soal 3
function tampil (q){
    if (q/2 < 1) {
        return q
    }
    else { 
        tampil(q/2) 
      console.log(q)
    }
}
console.log(tampil(96))


