/*
No.2 Release 1
Buatlah class Frog dan class Ape yang merupakan inheritance dari class Animal. 
Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2, hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal. 
class Ape memiliki function yell() yang menampilkan "Auooo" dan class Frog memiliki function jump() yang akan menampilkan "hop hop".
*/

class Ape extends Animal{
    constructor(name, cold_blooded){
        super(name, cold_blooded)
        this._yell = "Auooo"
    }

    yell(){
        console.log(this._yell)
    }
}

class Frog extends Animal{
    constructor(name, cold_blooded){
        super(name, cold_blooded)
        this._jump = "hop hop"
    }

    jump(){
        console.log(this._jump)
    }

}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"


// ======================================================================================================