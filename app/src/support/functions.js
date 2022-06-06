import { cityPathTyranny } from "../paths/all.js";
// used to draw some guiding for the surrouding
export function stroker(node, ctx) {
    let f = Math.ceil(node.posx / 50) * 50;
    let d = Math.ceil(node.posy / 50) * 50;
 
    ctx.save();

    ctx.strokeStyle = "#f00"; 
    ctx.moveTo(f, d);
    ctx.font = '10px serif';
    ctx.strokeStyle = "#f00"; 
    ctx.translate(f + 25, d + 25);
    ctx.stroke(cityPathTyranny());
    ctx.restore();
}