import { randInRange } from './rand';
import { QUANTITY, MIN_RADIUS, MAX_RADIUS, META_COLOR } from './constants';
import Canvas from './canvas';
import Metaball from './metaball';

/**
 * Generate Metaballs with random attributes.
 * 
 * @param context - The HTML Canvas context
 * @param quantity - The quantity of Metaballs
 */
function generateMetaballs(context: CanvasRenderingContext2D, quantity: number) {
    let metaballs: Metaball[] = [];

    for (let m = 0; m < quantity; m++) {
        let r = randInRange(MIN_RADIUS, MAX_RADIUS);
        let x = randInRange(r, context.canvas.width - r);
        let y = randInRange(r, context.canvas.height - r);
        metaballs.push(new Metaball(x, y, r, META_COLOR));
    }

    return metaballs;
}

let htmlCanvas = document.getElementById('canvas') as HTMLCanvasElement;
let context = htmlCanvas.getContext('2d');

if (context) {
    let metaballs: Metaball[] = generateMetaballs(context, QUANTITY);
    let canvas = new Canvas(context, metaballs);
    canvas.process();
}
