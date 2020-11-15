/** 
 * Represent a Circle moving around and attracted to other Metaballs. 
 * 
 */
class Metaball {
    x: number;
    y: number;
    radius: number;
    color: string;
    dx: number;
    dy: number;

    /**
     * @constructor
     * @param x         - x position of this Metaball
     * @param y         - y position of this Metaball
     * @param radius    - Radius of this Metaball
     * @param color     - Color of this Metaball
     */
    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = Math.random() < 0.5 ? -1 : 1;
        this.dy = Math.random() < 0.5 ? -1 : 1;
    }
}

export default Metaball;