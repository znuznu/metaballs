import { SQUARE_COLOR, SQUARE_SIZE } from './constants';
import Metaball from './metaball';

/** Represent the Canvas containing the Metaballs. */
class Canvas {
    private _width: number;
    private _height: number;
    private _context: CanvasRenderingContext2D;
    private _metaballs: Metaball[];
    private _grid: number[][];

    constructor(context: CanvasRenderingContext2D, metaballs: Metaball[]) {
        this._width = context.canvas.width;
        this._height = context.canvas.height;
        this._context = context;
        this._metaballs = metaballs;
        this._grid = [];

        for(let x = 0; x < this._width / SQUARE_SIZE; x++) {
            this._grid[x] = [];
            for (let y = 0; y < this._height / SQUARE_SIZE; y++) {
                this._grid[x][y] = 0;
            }
        }
    }

    /** 
     * Set the interval of the Canvas update.
     * 
     * The update is based on three steps:
     * Clearing the canvas, moving the Metaballs and finally drawing them.
     */
    process() {
        setInterval(_ => {
            this._context.clearRect(0, 0, this._width, this._height);
            this._context.fillStyle = '#000000';
            this._context.fillRect(0, 0, this._width, this._height);
            this.moveMetaballs();
            this.draw();
        }, 10)        
    }

    /** Move the Metaballs and handle the collision with the Canvas limits. */
    moveMetaballs() {
        this._metaballs.forEach(m => {
            let xNext = m.x + m.dx;
            if (xNext < m.radius || xNext > this._width - m.radius) {
                m.dx = -m.dx;
            }
            
            let yNext = m.y + m.dy;
            if (yNext < m.radius || yNext > this._height - m.radius) {
                m.dy = -m.dy;
            }

            m.x += m.dx;
            m.y += m.dy;
        });
    }

    /** Draw the squares of the grid with a sample result >= 1. */
    draw() {
        this._context.fillStyle = SQUARE_COLOR;

        for (let x = 0; x < this._grid.length; x++) {
            for (let y = 0; y < this._grid[0].length; y++) {
                let center = pos => pos * SQUARE_SIZE + SQUARE_SIZE / 2;
            
                if (this.sample(center(x), center(y), this._metaballs) >= 1) {
                    this._context.beginPath();
                    this._context.fillRect(
                        x * SQUARE_SIZE, 
                        y * SQUARE_SIZE, 
                        SQUARE_SIZE, 
                        SQUARE_SIZE
                    );
                    this._context.closePath();
                }
            }
        }
    }

    /**
     * Add up the value from each Metaball.
     * 
     * @param x - The x position from the square (center)
     * @param y - The y position from the square (center)
     * @param metaballs - The Metaballs from the Canvas
     * @returns The sum of the computation for each Metaball
     */
    sample(x: number, y: number, metaballs: Metaball[]) {
        let sum = 0;

        this._metaballs.forEach(m => {
            let sx = x - m.x;
            let sy = y - m.y;
            sum += (m.radius * m.radius) / ((sx * sx) + (sy * sy));
        });

        return sum;
    }
}

export default Canvas;