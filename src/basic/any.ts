export default function anySample(): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let name: any = 'Torahack'; // any型にしたよ
  console.log('anySample 1:', typeof name, name);
  name = 123; // 数値にしたよ
  console.log('anySample 2:', typeof name, name);
}
