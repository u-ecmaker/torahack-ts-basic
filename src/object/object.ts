export default function objectSample(): void {
  //
  // オブジェクト型(NG)
  const a: object = {
    name: 'U',
    age: 28,
  };
  // a.name; // error: プロパティ 'name' は型 'object' に存在しません。ts(2339)
  console.log('Object sample 0:', a);

  //
  // オブジェクトリテラル記法
  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };
  console.log('Object literal sample 1:', country);

  // 再代入 型の再定義は不要
  country = {
    language: 'English',
    name: 'United States of America',
  };
  console.log('Object literal sample 2:', country);

  //
  // optional と readonly
  const torahack: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Taro',
  };

  torahack.gender = 'male';
  torahack.lastName = 'Kamado';
  // torahack.firstName = 'Tanjiro'; // error: 読み取り専用のプロパティです。ts(2540)

  console.log('Object optional parameter sample 3:', torahack);

  //
  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string; // string型の国名をキーとして、string型の首都をvalueとして返す
  } = {
    Japan: 'Tokyo', // string型の国名Japanをキーとして、string型の首都(value)であるTokyoを返す
    Korea: 'Seoul',
  };

  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('Object index signature sample 4:', capitals);
}
