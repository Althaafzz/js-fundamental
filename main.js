const hello = ["hello!!"];


const namesWithUppercase = hello.map((name) => {
return name[0].toUpperCase() + name.substr(1)
})

hello.forEach((name, index) => {
console.log(namesWithUppercase[index])
})



// Closure

function welcome(nama){
    var a = "Welcome, " +nama // nama adalah nama dari parameter
    return function(){
        console.log(a)
    }
}

var username = welcome("Althaaf")
username()

// Closure 2
function student(namaMurid, kelas){
    var data = `Nama: ${namaMurid} \nKelas: ${kelas}`

    function displayName(){
        console.log(data)
    }
    return displayName
}
let biodata = student("Althaaf Ridha", "10 RPL B")
biodata()

// Variable
/* 
    Keyword variable yang ada di javascript yaitu:
    var, let, const
 */


/* 
*   Variable - var
*    - bersifat mutable artinya bisa dirubah value(nilai)nya
*    - memiliki 2 function scope yaitu global dan local function scope 
*/

// var value = "tadi pagi saya sudah makan"
// console.log(value)
// a = "saya belum makan"

/* 
* tipe data 
*/

// let name
// console.log(typeof name)

// name = 'jhon'
// console.log(typeof name)

// let name 
// console.log(name)

// let obj = null
// console.log(typeof obj)

/* 
* looping 
*/

// let word = 'hello'
// for(i = 0; i < word.length; i++){
//     console.log(word[i])
// }

/*
* Template literal
*/
// const firstName = 'Althaaf'
// const lastName = 'Ridha'

// console.log(firstName + " " + lastName) // contoh biasa
// console.log(`hello, ${firstName} ${lastName}`)
/*
* Shorthand property names
*/

// cara biasa
// let a = 1
// let b = 2
// let c = 3

// cara singkat
// let a = 1, b = 2, c = 3
// atau
// let [a, b, c] =['Althaaf', 'Ridha', 'Zaydaan']

// console.log(`${a} ${b} ${c}`)

/*
* high ordered list
*/

function genap(number){
    return number %2==0
    }
    function printGenap(number){
    const isTrue = genap(number)
    if(isTrue){
    console.log(`${number} adalah bilangan genap`)
    }else{
    console.log(`${number} adalah bilangan ganjil`)
    }
    }
    
    printGenap()
