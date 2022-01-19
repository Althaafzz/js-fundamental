// challenge 1
let name = "Althaaf"

function printName(){
    name = "bukan Althaaf"
    console.log(name)
}

printName()


// challenge 2
function profile(nama, kelas){
    var name = "Nama = " +nama
    var grade = "Kelas = " +kelas
    return function(){
        console.log(name)
        console.log(grade)
    }
}

var username = profile("Althaaf Ridha", "10 RPL B")
username()