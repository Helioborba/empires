import {marchPath} from '../paths/all.js';

export function draw(canvasRef) {
    console.log(canvasRef)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = 2000;
    let h = 2000;
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    
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

            // draw marches, cities, etc
            // ctx.font = '10px serif';
            // ctx.strokeStyle = "#f00"; 
            // ctx.translate(x + 25, y + 25);
            // ctx.stroke(marchPath());
        }
    }
}
