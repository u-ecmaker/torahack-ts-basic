export default function genericsAdvancedSample(): void {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]; // fn: コールバック関数

  const mapStringToNumbers: Map<string, number> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i]);
    }
    return result;
  };
  const numbers = mapStringToNumbers(['123', '456', '789'], (item) => Number(item));
  console.log('Generics advanced sample 1:', numbers);

  const mapNumberToStrings: Map<number, string> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i]);
    }
    return result;
  };
  const strings = mapNumberToStrings([123, 456, 789], (item) => String(item));
  console.log('Generics advanced sample 2:', strings);
}
