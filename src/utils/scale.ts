import { GridScalePoint } from 'src/types';

export function get8PointGrid(scale: GridScalePoint): number {
  return 8 * scale;
}

export function get4PointGrid(scale: GridScalePoint): number {
  return 4 * scale;
}
