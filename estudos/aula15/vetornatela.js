let num = [5, 6, 4, 5, 1]
/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 

*/
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}