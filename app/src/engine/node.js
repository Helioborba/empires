/**
 * The Coordinate node, holds a ID, the coordinates x and y and it's relative size.
 * The main point of the node is to verify if it's being used or not by the empty property.
 */
class NodeCoords {
    constructor(id, posx, posy, size) {
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.size = size;
        this.empty = true;
        this.root = ; // is the node a city?
        this.city = ; // city object
    }
}

export default NodeCoords;