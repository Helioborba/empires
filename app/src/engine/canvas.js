import {cityPathTyranny} from '../paths/all.js';
import {createNodes} from './node.js';
/***
 * Function used to draw canvas or other items such as a grid, marches or cities.
 * Also draws the cities again (from the nodes) each interaction IF the node is not null
 */
export function draw(canvasRef,cityNodes=[]) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let nodes = cityNodes? cityNodes : [];

    let w = ctx.canvas.width;
    let h = ctx.canvas.height;
    
    for (let x = 0; x <= w; x += 50) {
        ctx.fillStyle = '#000000';
        
        for (let y = 0; y <= h; y += 50) {
            ctx.clearRect(0, 0, w, h);
            // draw grid
            ctx.restore();
            ctx.strokeStyle = "#000"; 
            ctx.moveTo(x, 0);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(x, y);
            ctx.save();
        }
    }

    // creates the nodes
    if(cityNodes.length < 5 ) {
       nodes = createNodes(w, h);
    }
    
    if (cityNodes) {
        for (const node of cityNodes) {
            if(node.type === 'city') {
                // draws the node
                ctx.save();
    
                ctx.strokeStyle = "#000"; 
                ctx.moveTo(node.posx, node.posy);
                ctx.font = '10px serif';
                ctx.strokeStyle = "#000"; 
                ctx.translate(node.posx + 25, node.posy + 25);
                ctx.stroke(cityPathTyranny());
                
                ctx.restore();
            }
        }
    }
    return nodes;
}

export function drawLine(canvasRef) {
    if (canvasRef?.current) {
        console.log("hey");
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        // draw grid
        ctx.restore();
        ctx.strokeStyle = "#000"; 
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.save();
    }
   
}