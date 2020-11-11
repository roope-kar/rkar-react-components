// Returns a number whose value is limited to the given range.
export function clamp(x: number, min: number, max: number): number {
  if (x < min) {
    return 0;
  } else if (x > max) {
    return max;
  } else {
    return x;
  }
}
