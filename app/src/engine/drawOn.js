import { cityPathTyranny } from "../paths/all";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Adds the city to the canvas UNLESS the x-y close to it's range is not occupied, and mark it's location into the node.
 * @param {object} nodes 
 * @param {ref} canvasRef 
 */
export function drawOn(nodes=null, canvasRef=null) {
    // It would be a good idea to have 2 arrays, for ones not empty and ones empty (nodes)
    const x = getRandomArbitrary(20,950);
    const y = getRandomArbitrary(20,950);


    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // verify the node that will be overwritten
    for (const node of nodes) {
        if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50)) { 
            node.empty = false; // works!
            console.log('ran');
            ctx.save()
            ctx.strokeStyle = "#000"; 
            ctx.moveTo(x, y);
            
            ctx.font = '10px serif';
            ctx.strokeStyle = "#000"; 
            ctx.translate(x + 25, y + 25);
            ctx.stroke(cityPathTyranny());
            ctx.restore();
        }
    }
}