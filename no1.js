/*
No1.Animal Class
Terdapat sebuah class Animal yang memiliki sebuah constructor name, default property legs = 4 dan cold_blooded = false. 
Release 0
Buatlah class Animal yang menerima satu parameter constructor berupa name.
 Secara default class Animal akan memiliki property yaitu legs (jumlah kaki) yang bernilai 4 dan cold_blooded bernilai false.
Gunakan method getter untuk mengakses property di dalam class
*/

class Animal {
    constructor(name){
        this._name = name
        this._legs = 4
        this._cold_blooded = false
    }

    get name(){
        return this._name
    }
    get legs(){
        return this._legs
    }
    get cold_blooded(){
        return this._cold_blooded
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false



// ================================================================================================================================