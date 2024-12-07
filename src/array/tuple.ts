export default function tupleSample(): void {
  //
  // 一般的なタプルの型定義
  let response: [number, string] = [200, 'OK'];
  response = [404, 'Not Found'];
  // response = [200, 'OK', 'additional data']; // error: 型定義に違反。型: '[number, string, string]' の引数を型 '[number, string]' のパラメーターに割り当てることはできません。ts(2322)
  // response = ['404', 'Not Found']; // error: 型定義に違反。型: '[number, string]' の引数を型 '[string, string]' のパラメーターに割り当てることはできません。ts(2322)
  console.log('Tuple sample 1:', response);

  //
  // 可変長引数を使ったタプル
  const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Yua'];
  girlFriends.push('Saki');
  console.log('Tuple sample 2:', girlFriends);
}
