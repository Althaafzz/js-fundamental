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

var value = "tadi pagi saya sudah makan"
console.log(value)
a = "saya belum makan"

