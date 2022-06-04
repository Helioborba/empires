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
    let lastPos = [];
    console.log(nodes)
    // verify the node that will be overwritten
    let ctr = false;
    for (const [key,node] of Object.entries(nodes)) {
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
            

            // vertical tiles extra
            // if (node.posx === (Math.ceil(x + 100  / 50) * 50) && node.posy === (Math.ceil(y + 100 / 50) * 50) && node.empty === true) {
            //     node.empty = false;
            //     node.city = city;
            //     node.type = 'outskirt';
            //     console.log('hey plus');
            // }
    
            // if (node.posx - 100 === (Math.ceil(x / 50) * 50) && node.posy - 100 === (Math.ceil(y / 50) * 50) && node.empty === true) {
            //     node.empty = false;
            //     node.city = city;
            //     node.type = 'outskirt';
            //     console.log('hey minus');
            // } 

            let distX = (Math.ceil(x / 50) * 50);
            let distY = (Math.ceil(y / 50) * 50);
            let dist = Math.sqrt((node.posx * distX) + (node.posy * distY));
            dist = (Math.ceil(dist / 50) * 50);
            // console.log((Math.ceil(x / 50) * 50) - 50)
            // x
            
            // almost there!
            if ((distX - node.posx) === 50 && (distY - node.posy) === 50) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                let f = Math.ceil(node.posx / 50) * 50;
                let d = Math.ceil(node.posy / 50) * 50;
             
                ctx.save();
    
                ctx.strokeStyle = "#f00"; 
                ctx.moveTo(f, d);
                ctx.font = '10px serif';
                ctx.strokeStyle = "#000"; 
                ctx.translate(f + 25, d + 25);
                ctx.stroke(cityPathTyranny());
                ctx.restore();
            }


            if ((distX - node.posx) === 0 && (distY - node.posy) === 0) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                let f = Math.ceil(node.posx / 50) * 50;
                let d = Math.ceil(node.posy / 50) * 50;
             
                ctx.save();
    
                ctx.strokeStyle = "#f00"; 
                ctx.moveTo(f, d);
                ctx.font = '10px serif';
                ctx.strokeStyle = "#000"; 
                ctx.translate(f + 25, d + 25);
                ctx.stroke(cityPathTyranny());
                ctx.restore();
            }

            if ((distX - node.posx) === 50  && (distY - node.posy) === 0) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                let f = Math.ceil(node.posx / 50) * 50;
                let d = Math.ceil(node.posy / 50) * 50;
             
                ctx.save();
    
                ctx.strokeStyle = "#f00"; 
                ctx.moveTo(f, d);
                ctx.font = '10px serif';
                ctx.strokeStyle = "#000"; 
                ctx.translate(f + 25, d + 25);
                ctx.stroke(cityPathTyranny());
                ctx.restore();
            }

            if ((distX - node.posx) === 0  && (distY - node.posy) === 50) {
                node.empty = false;
                node.city = city;
                node.type = 'outskirt';
                let f = Math.ceil(node.posx / 50) * 50;
                let d = Math.ceil(node.posy / 50) * 50;
             
                ctx.save();
    
                ctx.strokeStyle = "#f00"; 
                ctx.moveTo(f, d);
                ctx.font = '10px serif';
                ctx.strokeStyle = "#000"; 
                ctx.translate(f + 25, d + 25);
                ctx.stroke(cityPathTyranny());
                ctx.restore();
            }


            // if ((distX + node.posx) === 50 && (distY + node.posy) === 50) {
            //     node.empty = false;
            //     node.city = city;
            //     node.type = 'outskirt';
            //     let f = Math.ceil(node.posx / 50) * 50;
            //     let d = Math.ceil(node.posy / 50) * 50;
             
            //     ctx.save();
    
            //     ctx.strokeStyle = "#f00"; 
            //     ctx.moveTo(f, d);
            //     ctx.font = '10px serif';
            //     ctx.strokeStyle = "#000"; 
            //     ctx.translate(f + 25, d + 25);
            //     ctx.stroke(cityPathTyranny());
            //     ctx.restore();
            // }

            // if (dist <= 200 && node.empty === true) {
            
            //     node.empty = false;
            //     node.city = city;
            //     node.type = 'outskirt';
            //     let f = Math.ceil(node.posx / 50) * 50;
            //     let d = Math.ceil(node.posy / 50) * 50;
             
            //     ctx.save();
    
            //     ctx.strokeStyle = "#f00"; 
            //     ctx.moveTo(f, d);
            //     ctx.font = '10px serif';
            //     ctx.strokeStyle = "#000"; 
            //     ctx.translate(f + 25, d + 25);
            //     ctx.stroke(cityPathTyranny());
            //     ctx.restore();
            // }
            // if (ctr === true && dist <= 200) {
            //     console.log("after",dist)
            //     console.log("x",x,"y",y)
            // }
            // main tiles
            if (node.posx === (Math.ceil(x / 50) * 50) && node.posy === (Math.ceil(y / 50) * 50) && node.empty === true) { 
                ctr = true;
                // let index = key;
                // // Up
                // for (const [keyUp, nodeUp] of Object.entries(nodes)) {
                //     if (nodeUp.posx === (Math.ceil(x / 50) * 50) && nodeUp.posy === (Math.ceil(y / 50) * 50) && nodeUp.empty === true) { 
                        
                //     }
                // }   

                // // down
                // for (const nodeDown of nodes) {

                // }   

                // updates the node
                node.empty = false;
                node.city = city;
                node.type = 'city';
                // let f = Math.ceil(x / 50) * 50;
                // let d = Math.ceil(y / 50) * 50;
                // draws the city
                // ctx.save();
    
                // ctx.strokeStyle = "#000"; 
                // ctx.moveTo(x, y);
                // ctx.font = '10px serif';
                // ctx.strokeStyle = "#000"; 
                // ctx.translate(x + 25, y + 25);
                // ctx.stroke(cityPathTyranny());
                
                let f = Math.ceil(x / 50) * 50;
                let d = Math.ceil(y / 50) * 50;
             
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