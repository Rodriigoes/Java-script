/* let num = [4 , 5, 2]
num [3] = 6
num.push(7, 8, 9)
num.length
num.sort()
console.log(`nosso vetor é o ${num}`) */

let num = [5, 8, 2, 9, 3] 
num.sort()
num.push(77)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[1]}`)
let pos = num.indexOf(8)
    if ( pos == -1) {
        console.log('O valor nao foi encontrado!')
    } else {
       console.log(`O valor 8 está na posição ${pos}`) 
    }
