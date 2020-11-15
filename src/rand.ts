/**
 * Returns a number in [lower;upper[
 *
 * @param lower - The lower limit (included)
 * @param upper - The upper limit (excluded)
 * @returns a random number between lower and upper (exclude)
 */
export function randInRange(lower: number, upper: number): number {
    return ~~(Math.random() * (upper - lower) + lower);
}