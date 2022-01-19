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