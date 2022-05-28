export class City {
    constructor(name) {
        this.money = 300000.00;
        this.name = name;
        this.population = {total:3000, military:Math.floor(Math.random() * 301)};
        this.buildings = {total:200, house:100, windmill:20, market:10, church:10, aquedut:10, barracks:50};
        this.army = null; // array later
    }    

    createArmy() {
        // criar as squads
        const army = new Army();
        for (const index of [...Array(this.population.military).keys()]) {
            const soldier = new Soldier(index);
            army.conscript(soldier);
        }
        this.army = army; // .push later, transform army into a array
    }
}




// City prices
class CatalogCity {
    constructor() {
        this.house = 200.00; // ..population
        this.windmill = 400.00; // foood
        this.market = 700.00; // cash
        this.church = 600.00; // faith
        this.aquedut = 800.00; // water
        this.barracks = 100.00; // military
    }
}


// Catalog smith
class CatalogWeapons {
     // later add height and speed blabla
    constructor() {
        this.club = {damage:9, type:'one-handed', cost:10}
        this.sword = {damage:16, type:'one-handed', cost:70}
        this.axe = {damage:12, type:'one-handed', cost:30}
        this.longsword = {damage:39, type:'two-handed', cost:170}
        this.spear = {damage:27, type:'two-handed', cost:100}
    }
}

// army
class Army {
    constructor() {
        this.soldiers = [];
        this.stopped = true;
    }

    conscript(soldier) {
        this.soldiers.push(soldier);
    }

    report() {
        return `The army size is ${this.soldiers.length} strong.`
    }
}

// soldier
class Soldier {
    constructor(solName) {
        this.name = String(solName);
        this.weapons = {left:null, right:null};
        this.armor = {body:null};
        this.health = 100;
        this.speed = 4; // 1-4 < 4 fastest
        this.dead = false;
        // means you died
        this._death = () => {
            this.dead = true;
        };
    }

    // calculates damage while fighting
    attack() {
        if (!this.dead) {
            let totalDamage = 0;
            if (this.weapons.left !== null) {
                totalDamage += this.weapons.left.damage;
            } 
            if (this.weapons.right !== null) {
                totalDamage += this.weapons.right.damage;
            }
            // barefists
            if (totalDamage === 0) {
                totalDamage = 3;
            }
            return totalDamage;
        }
    }
    // calculates incoming damage
    defense(damage) {
        if (!this.dead) {
            // calculate damage for armor blabla
            this.health -= damage;
            if (this.health <= 0) {
                this._death();
            }
        }
    }
}