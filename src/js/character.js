export default class Character {
    constructor(name, type, attack, defence) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]

        if ( name.length >= 2 && name.length <= 10 ) {
            this.name = name
        } else {
            throw new Error('Name is short or long')
        }
        if ( types.includes(type) ) {
            this.type = type
        } else {
            throw new Error('Wrong type') }

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
}