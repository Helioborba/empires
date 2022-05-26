import {marchPath} from '../paths/all.js';
import Node from './node.js';
/***
 * Function used to draw canvas or other items such as a grid, marches or cities
 */
export function draw(canvasRef) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w = ctx.canvas.width;
    let h = ctx.canvas.height;
    
    const nodes = [];
    let index = 0;
    for (let x = 0; x <= w; x += 50) {
        ctx.fillStyle = '#000000';

        for (let y = 0; y <= h; y += 50) {
            // draw grid
            ctx.restore();
            ctx.strokeStyle = "#000"; 
            ctx.moveTo(x, 0);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(x, y);
            ctx.save();

            nodes.push(new Node(index, x, y, 50));
            index += 1;

            // draw marches, cities, etc
            // ctx.font = '10px serif';
            // ctx.strokeStyle = "#f00"; 
            // ctx.translate(x + 25, y + 25);
            // ctx.stroke(marchPath());
        }
        
    }
    return nodes
}
