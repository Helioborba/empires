/**
 * The Coordinate node, holds a ID, the coordinates x and y and it's relative size.
 * The main point of the node is to verify if it's being used or not by the empty property.
 */
class NodeCoords {
    constructor(id, posx, posy, size, type='node', city=null) {
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.size = size;
        this.empty = true;
        this.type = type; // is the node a city? or a node? or a outskirt?
        this.city = city; // city object
    }
}

/**
 * This function creates a array with all the nodes.
 * @param {int} w 
 * @param {int} h 
 * @returns Array with Node Objects
 */
export function createNodes(w, h) {
    const nodes = [];
    let index = 0;
    console.log('ran')
    for (let x = 0; x <= w; x += 50) {
        for (let y = 0; y <= h; y += 50) {        
            nodes.push(new NodeCoords(index, x, y, 50));
            index += 1;
        }
    } 
    return nodes;
}


export default NodeCoords;