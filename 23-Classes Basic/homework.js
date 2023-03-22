class Rabbit extends Object {
    constructor(name) {
        // Error is here: (Supper() to inherit from parent)
        super()
        this.name = name
    }
}

let rabbit = new Rabbit("Rab")
rabbit.hasOwnProperty('name')