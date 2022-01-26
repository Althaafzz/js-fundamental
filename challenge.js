/* 
* challenge 1 
*/
// let name = "Althaaf"

// function printName(){
//     name = "bukan Althaaf"
//     console.log(name)
// }

// printName()


//  challenge 2
// function profile(nama, kelas){
//     var name = "Nama = " +nama
//     var grade = "Kelas = " +kelas
//     return function(){
//         console.log(name)
//         console.log(grade)
//     }
// }

// var username = profile("Althaaf Ridha", "10 RPL B")
// username()

/* 
* challenge 2 
*/

// const school = 'IDN Boarding School'
// function sekolah (idn){
//     if(idn){
//         console.log(school)
//     }
// }
// sekolah(true)

/* 
* challenge 3 
*/
 
// #1
console.log('\nKuis 1\n')
let a = 'abc'
let b = true
let c 
let d = {}

console.log('a ini tipe data', typeof a)
console.log('b ini tipe data', typeof b)
console.log('c ini tipe data', typeof c)
console.log('d ini tipe data', typeof d)



// #2
console.log('\n \nKuis 2\n')
let word = 'Hello'
let word2 = 'Assalamualaikum'
let word3 = 'Selamat Datang'
let word4 = 'semangat!!'

for(i = 0; i < word.length; i++){
    console.log(word[i])
  
}
console.log('jumlahnya' + word.length)

for(o = 0; o < word2.length; o++){
    console.log(word2[o]) 
}
console.log('jumlahnya' + word2.length)

for(z = 0; z < word3.length; z++){
    console.log(word3[z])
}
console.log('jumlahnya' + word2.length)

for(t = 0; t < word4.length; t++){
    console.log(word4[t])
}
console.log('jumlahnya' + word4.length)

// #3 dan 4
console.log('\n \nKuis 3 dan 4\n')
const dataSiswa = {
    namaDepan : 'Almerio',
    namaBelakang : 'Setiawan',
    kelas : 10,
    keahlian : 'Rekayasa Perangkat Lunak',
    alamat : alamat = {
        jalan : 'jalan : jalan raya dayeuh',
        kecamatan : 'kecamatan: jonggol',
        kabupaten : 'kabupaten : bogor'
    },
    sekolah : 'IDN Boarding School',
    nilai : nilai = {
        diniyah : 'diniyah : B',
        it : 'IT : A',
        inggris : 'Bahasa Inggris : B',
    }
}
console.log('data siswa:\n',
            `nama lengkap: ${dataSiswa.namaDepan} ${dataSiswa.namaBelakang}\n`,
            `kelas: ${dataSiswa.kelas}\n`,
            `kompetensi keahlian: ${dataSiswa.keahlian}\n`,
            `asal kota: ${dataSiswa.alamat.kabupaten}\n`,
            `nilai : ${dataSiswa.nilai.diniyah}, ${dataSiswa.nilai.it}, ${dataSiswa.nilai.inggris}`)

// #5
console.log('\n \nKuis 5\n')
let nama5 = 'john' 
let kelas5 = 10 
let jurusan5 = 'RPL'

console.log(`hallo nama saya ${nama5}, saya berasal dari kelas ${kelas5} jurusan ${jurusan5}.`)

