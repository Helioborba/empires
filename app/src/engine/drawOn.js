import { cityPathTyranny } from "../paths/all";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Adds the city to the canvas UNLESS the x-y close to it's range is not occupied, and mark it's location into the node.
 * @param {object} nodes 
 * @param {ref} canvasRef 
 */
export function drawOn(nodes=null, canvasRef=null, city) {
    // It would be a good idea to have 2 arrays, for ones not empty and ones empty (nodes)
    const x = getRandomArbitrary(20,950);
    const y = getRandomArbitrary(20,950);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let report = 0;

    // verify the node that will be overwritten
    for (const node of nodes) {
        if (node.empty === true) {
            // if (node.posx + 50 === (Math.ceil(x / 50) * 50) && node.empty === true) {
            //     node.empty = false;
            //     node.city = city;
            //     node.type = 'outskirt';
            //     console.log('hey plus')
            // }

            // if (node.posy + 50 === (Math.ceil(y / 50) * 50) && node.empty === true) {
            //     node.empty = false;
            //     node.city = city;
            //     node.type = 'outskirt';
            //     console.log('hey plus')
            // }
          
            // O problema é o math ceil cuidado
            // adj tiles
            if (node.posx === (Math.ceil(x + 50  / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y + 50 / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            if (node.posx === (Math.ceil(x - 50  / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y - 50 / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            // extra
            if (node.posx === (Math.ceil(x + 100  / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y + 100 / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            if (node.posx === (Math.ceil(x - 100  / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y - 100 / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }

            // vertical tiles
            if (node.posx === (Math.ceil(x + 50  / 50) * 50) && node.posy === (Math.ceil(y + 50 / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }
    
            if (node.posx - 50 === (Math.ceil(x / 50) * 50) && node.posy - 50 === (Math.ceil(y / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey minus');
            } 

            // vertical tiles extra
            if (node.posx === (Math.ceil(x + 100  / 50) * 50) && node.posy === (Math.ceil(y + 100 / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey plus')
            }
    
            if (node.posx - 100 === (Math.ceil(x / 50) * 50) && node.posy - 100 === (Math.ceil(y / 50) * 50) && node.empty === true) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                console.log('hey minus');
            } 
            
            
            // main tiles
            if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50) && node.empty === true) { 
                // updates the node
                node.empty = false;
                node.city = city;
                node.type = 'city';
                let f = Math.ceil(x / 50) * 50;
                let d = Math.ceil(y / 50) * 50
                // draws the city
                ctx.save();
    
                ctx.strokeStyle = "#000"; 
                ctx.moveTo(f, d);
                ctx.font = '10px serif';
                ctx.strokeStyle = "#000"; 
                ctx.translate(f + 25, d + 25);
                ctx.stroke(cityPathTyranny());
                
                ctx.restore();
            } 
        } else {
            report += 1;
        }
    }
    console.log(report)
    if (report === nodes.length) {
        console.log("full");
    }
}