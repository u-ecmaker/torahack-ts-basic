export default function interfaceSample(): void {
  // インターフェイス
  interface Bread {
    calories: number;
  }

  interface Bread {
    type: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const francePan: Bread = {
    calories: 100,
    type: 'hard',
  };

  // 型エイリアス
  type MaboDofu = {
    calories: number;
    spicyLevel: number;
  };

  type Rice = {
    calories: number;
    gram: number;
  };

  type MaboDon = MaboDofu & Rice; // 交差型

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const maboDon: MaboDon = {
    calories: 100,
    spicyLevel: 10,
    gram: 100,
  };

  // interface の継承
  interface Book {
    page: number;
    title: string;
  }

  interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const jampan: Magazine = {
    title: 'jam',
    page: 100,
    cycle: 'daily',
  };

  // 型エイリアスを使って拡張
  type BookType = {
    page: number;
    title: string;
  };

  interface HandBook extends BookType {
    theme: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cotrip: HandBook = {
    title: 'cotrip',
    page: 100,
    theme: 'travel',
  };

  // implementsを使用してclass型を定義
  class Comic implements Book {
    title: string;
    page: number;

    constructor(
      title: string,
      page: number,
      private publishYear: number,
    ) {
      this.title = title;
      this.page = page;
    }

    getPublishYear(): string {
      return this.publishYear + '年です';
    }
  }

  const popularComic = new Comic('鬼滅の刃', 200, 2024);
  console.log(popularComic.getPublishYear());
}
