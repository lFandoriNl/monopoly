export function getRandomInt(min: number, max: number): number {
  const minVal: number = Math.ceil(min);
  const maxVal: number = Math.floor(max);

  return Math.floor(Math.random() * (maxVal - minVal) + minVal);
}
