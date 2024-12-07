export default function notExistSample(): void {
  // eslint-disable-next-line prefer-const
  let name = null;
  console.log('notExistSample 1:', typeof name, name);

  // name = 'まだない';

  if (!name) {
    // nameがnullのとき...
    /* (!name) は、nameが以下のいずれかの「falsy」な値の場合にtrueとなる。
     *  - null
     *  - undefined
     *  - 空文字列 ("")
     *  - 数値の0
     *  - NaN
     *  - false
     */
    console.log('notExistSample 2:', '吾輩は猫である。名前はまだ' + name);
  } else {
    console.log('notExistSample 3:', '吾輩はねこである。名前は' + name);
  }

  let age = undefined;
  age = 20;
  console.log('notExistSample 4:', typeof age, age);
  if (!age) {
    console.log('notExistSample 5:', '年齢は秘密です。');
  } else {
    console.log('notExistSample 6:', '吾輩は' + age + '歳です。');
  }
}
