export default function primitiveSample(): void {
  // eslint-disable-next-line prefer-const
  let name = 'とらハック';
  // name =123;
  console.log('primitive sample 1:', typeof name, name);

  // eslint-disable-next-line prefer-const
  let age: number = 20;
  // age = '28';
  console.log('primitive sample 2:', typeof age, age);

  // eslint-disable-next-line prefer-const
  let isSingle: boolean = true;
  // isSingle = 'foo';
  console.log('primitive sample 3:', typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20;
  console.log('primitive sample 4:', typeof isOver20, isOver20);
}
