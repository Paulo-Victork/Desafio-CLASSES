class classe {
    constructor(type,attack){
        this.type=type
        this.attack=attack
    }
atacar(){
    console.log(`O ${this.type} Atacou Usando ${this.attack}`)
}
}
let dados = {
    nome:"Paulo",
    idade:29
}

let mago = new classe ("Mago", "Magia")
let guerreiro = new classe ("Guerreiro","Espada")
let monge = new classe ("Monge","Artes Marciais")
let ninja = new classe ("Ninja","Shuriken")
ninja.atacar()
