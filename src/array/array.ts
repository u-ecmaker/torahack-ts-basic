export default function arraySample(): void {
  //
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue'];
  colors.push('yellow');
  // colors.push(123); // error: 型定義に違反。型: 'number' の引数を型 'string' のパラメーターに割り当てることはできません。ts(2345)
  console.log('Array sample 1:', colors);

  // 別の記法: T[]と Array<T> は同義
  const even: Array<number> = [2, 4, 6];
  even.push(8);
  // even.push('10'); // error: 型定義に違反。型: 'string' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
  console.log('Array sample 2:', even);

  // 合併型の使用
  const ids: (string | number)[] = ['ABC', 123];
  ids.push('DEF');
  ids.push(456);
  // ids.push(true); // error: 型定義に違反。型: 'boolean' の引数を型 'string | number' のパラメーターに割り当てることはできません。ts(2345)
  console.log('Array sample 3:', ids);

  // 配列の型推論
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const generateSomeArray = () => {
    //    generateSomeArray = (): (number | string)[] => { // 型を付ける場合はこうなる。
    const _someArray = []; // any[]
    _someArray.push(123); // number
    _someArray.push('abc'); // (number | string)[]
    // _someArray.push(true); // ここでpushしておけば↓でエラーにならない
    return _someArray;
  };
  const someArray = generateSomeArray();
  // someArray.push(true); // error: 型定義に違反。型: 'boolean' の引数を型 'number | string' のパラメーターに割り当てることはできません。ts(2345)
  someArray.push(456);
  console.log('Array sample 4:', someArray);

  // イミュータブルな配列
  const commands: readonly string[] = ['git add', 'git commit', 'git push'];
  // commands.push('git push'); // error: 型定義に違反。プロパティ 'push' は型 'readonly string[]' に存在しません。ts(2339)
  // commands[2] = 'git pull'; // error: 型 'readonly string[]' のインデックス シグネチャは、読み取りのみを許可します。ts(2542)
  console.log('Array sample 5:', commands);
}
