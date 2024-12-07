export default function typeAliasSample(): void {
  // 型エイリアス
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  };
  console.log('Type alias sample 1:', japan);

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  };
  console.log('Type alias sample 2:', america);

  //
  // 合併型(union) と 交差型(intersection)
  type Knight = {
    hp: number;
    sp: number; // skill point
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number; // magic point
    weapon: string;
    magicSkill: string;
  };

  // Adventurer: KnightかWizardのどちらかに進化できる初期の冒険者
  type Adventurer = Knight | Wizard;
  // Paladin: 聖騎士、KnightとWizardの両方の特徴を持つ
  type Paladin = Knight & Wizard;

  // Knight寄りの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
    // mp: 0, // 注意：合併型だとmpも持ててしまう。
    // オブジェクトに対して合併型はあまり使わない。両方取れてしまって危険。
    // だいたいprimitiveな型に対して使われる。
  };
  console.log('Type alias sample 3:', adventurer1);

  // Wizard寄りの冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 80,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  };
  console.log('Type alias sample 4:', adventurer2);

  // Paladin
  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 80,
    weapon: '銀の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイアボール',
  };
  console.log('Type alias sample 5:', paladin);
}
