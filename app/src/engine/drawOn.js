import { cityPathTyranny } from "../paths/all.js";
//import {stroker} from "../support/functions.js";
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
    let report = 0; // used to check if the amount of nodes are already full

    for (const node of nodes) {
        if (node.empty === true) {
            let distX = (Math.ceil(x / 50) * 50);
            let distY = (Math.ceil(y / 50) * 50);
            // Distance formula, wont work unless the node set is actually the real one
            // let dist = Math.sqrt((node.posx * distX) + (node.posy * distY));
            // dist = (Math.ceil(dist / 50) * 50);
            
            // top left
            if ((distX - node.posx) <= 100 && (distX - node.posx) > 0 && (distY - node.posy) > 0 && (distY - node.posy) <= 100) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }

            if ((distX - node.posx) <= 100 && (distX - node.posx) > 0 && (distY - node.posy) === 0) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }

            if ((distX - node.posx) === 0  && (distY - node.posy) > 0 && (distY - node.posy) <= 100) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }

            // bottom right
            if ((distX - node.posx) >= -100 && (distX - node.posx) < 0 && (distY - node.posy) < 0 && (distY - node.posy) >= -100) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }
            
            if ((distX - node.posx) >= -100 && (distX - node.posx) < 0 && (distY - node.posy) === 0) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }

            if ((distX - node.posx) === 0 && (distY - node.posy) < 0 && (distY - node.posy) >= -100) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }

            // the diagonals (top right, bottom left)
            if ( (distX - node.posx) <= 100 && (distX - node.posx) > 0 && (distY - node.posy) < 0 && (distY - node.posy) >= -100) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }

            if ((distX - node.posx) >= -100 && (distX - node.posx) < 0 && (distY - node.posy) > 0 && (distY - node.posy) <= 100) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                //stroker(node,ctx)
            }
            
            // main tiles
            if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50) && node.empty === true) { 
                // updates the node
                node.empty = false;
                node.city = city;
                node.type = 'city';
                //draws the city
                ctx.save();
                
                ctx.strokeStyle = "#000"; 
                ctx.moveTo(x, y);
                ctx.font = '10px serif';
                ctx.strokeStyle = "#000"; 
                ctx.translate(x + 25, y + 25); // +25 for centralizing
                ctx.stroke(cityPathTyranny());
                

                // In case you need to check by gridlines instead of the real point
                // let f = Math.ceil(x / 50) * 50;
                // let d = Math.ceil(y / 50) * 50;
                // ctx.strokeStyle = "#000"; 
                // ctx.moveTo(f, d);
                // ctx.font = '10px serif';
                // ctx.strokeStyle = "#000"; 
                // ctx.translate(f + 25, d + 25);
                // ctx.stroke(cityPathTyranny());

                ctx.restore();
            } 
        } else {
            report += 1;
        }
    }
    if (report === nodes.length) {
        console.log("full");
    }
}