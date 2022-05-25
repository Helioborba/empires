class City {
    constructor() {
        this.money = 300000.00;
        this.population = {total:3000, military:200};
        this.buildings = {total:200, house:100, windmill:20, market:10, church:10, aquedut:10, barracks:50};
    }    
}




// shop
class Catalog {
    constructor() {
        this.house = 200.00; // ..population
        this.windmill = 400.00; // foood
        this.market = 700.00; // cash
        this.church = 600.00; // faith
        this.aquedut = 800.00; // water
        this.barracks = 100.00; // military
    }
}

// soldier
class Soldier {
    constructor() {
        this.weapons = {left:null, right:null};
        this.armor = {body:null};
        this.health = 100;
    }
    // calculates damage while fighting
    attack() {
        const totalDamage = [];
        if (this.weapons.left !== null) {

        }
        return 
    }
}