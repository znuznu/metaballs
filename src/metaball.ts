/** Represent a Circle moving around and attracted to other Metaballs. */
class Metaball {
    private _x: number;
    private _y: number;
    private _radius: number;
    private _color: number;
    private _dx: number;
    private _dy: number;

    constructor(x, y, radius, color) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
        this._dx = Math.random() < 0.5 ? -1 : 1;
        this._dy = Math.random() < 0.5 ? -1 : 1;
    }
    
    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get radius(): number {
        return this._radius;
    }

    get color(): number {
        return this._color;
    }

    get dx(): number {
        return this._dx;
    }

    get dy(): number {
        return this._dy;
    }

    set x(x: number) {
        this._x = x;
    }

    set y(y: number) {
        this._y = y;
    }

    set dx(dx: number) {
        this._dx = dx;
    }

    set dy(dy: number) {
        this._dy = dy;
    }
}

export default Metaball;