export default function shogi(): void {
  // class Game {}
  // class Piece {}
  // class Position {}

  // class Osho extends Piece {}

  type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  type Player = 'SenTe' | 'GoTe';

  //
  // 位置を表すクラス
  class Position {
    constructor(
      private suji: Suji,
      private dan: Dan,
    ) {}

    public getSuji(): Suji {
      return this.suji;
    }

    public getDan(): Dan {
      return this.dan;
    }

    // メソッドの定義
    public distanceFrom(position: Position, player: Player): { suji: number; dan: number } {
      if (player === 'SenTe') {
        return {
          suji: Math.abs(this.suji - position.suji),
          dan: Math.abs(Number(this.dan) - Number(position.dan)),
        };
      } else {
        return {
          suji: Math.abs(position.suji - this.suji),
          dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 段(縦位置)は逆方向になる
        };
      }
    }
  }
  // new Position(1, '1');

  //
  // 駒を表すクラス (abstract: 抽象クラス)
  abstract class Piece {
    // ↓protected: クラス内と継承したクラス内でアクセスできる
    protected position: Position; // クラスを定義すると、その型も使えるようになる。
    // positionプロパティは Potsitionクラスと同じ型。 Suji, Dan もついてくる。

    constructor(
      private readonly player: Player,
      suji: Suji,
      dan: Dan,
    ) {
      this.position = new Position(suji, dan);
    }

    // メソッドの定義
    moveTo(position: Position): void {
      console.log(
        `Moving from (${this.position.getSuji()}, ${this.position.getDan()}) to (${position.getSuji()}, ${position.getDan()})`,
      );
      this.position = position;
    }

    abstract canMoveTo(position: Position, player: Player): boolean; // サブクラスの中で実装する

    public getPosition(): Position {
      return this.position;
    }
  }
  // const p1 = new Piece('SenTe', 3, '6'); // abstract class はインスタンス化できない
  // console.log(p1, p1.position);

  //
  // 王将(将棋の王)
  class Osho extends Piece {
    canMoveTo(position: Position, player: Player): boolean {
      const distance = this.position.distanceFrom(position, player);
      return distance.suji < 2 && distance.dan < 2;
    }
  }

  // 歩
  class Fu extends Piece {
    canMoveTo(position: Position, player: Player): boolean {
      const distance = this.position.distanceFrom(position, player);
      return distance.suji === 0 && distance.dan === 1;
    }
  }

  // と
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class NariFu extends Fu {
    canMoveTo(position: Position, player: Player): boolean {
      const distance = this.position.distanceFrom(position, player);
      return (
        distance.suji < 2 &&
        distance.dan < 2 && // 移動先が1マス以内
        distance.suji !== 0 &&
        distance.dan === -1 // 左後方と右後方には進めない
      );
    }
  }
  // 他の駒 ... 省略 ...

  //
  // ゲームを表すクラス
  class Game {
    private pieces = Game.makePieces();

    public getPieces(): Piece[] {
      return this.pieces;
    }

    // ゲームを初期化するメソッド
    private static makePieces(): Piece[] {
      return [
        new Osho('SenTe', 5, '1'),
        new Osho('GoTe', 5, '9'),

        // 先手の歩
        new Fu('SenTe', 1, '3'),
        new Fu('SenTe', 2, '3'),
        new Fu('SenTe', 3, '3'),
        new Fu('SenTe', 4, '3'),
        new Fu('SenTe', 5, '3'),
        new Fu('SenTe', 6, '3'),
        new Fu('SenTe', 7, '3'),
        new Fu('SenTe', 8, '3'),
        new Fu('SenTe', 9, '3'),

        // 後手の歩
        new Fu('GoTe', 1, '7'),
        new Fu('GoTe', 2, '7'),
        new Fu('GoTe', 3, '7'),
        new Fu('GoTe', 4, '7'),
        new Fu('GoTe', 5, '7'),
        new Fu('GoTe', 6, '7'),
        new Fu('GoTe', 7, '7'),
        new Fu('GoTe', 8, '7'),
        new Fu('GoTe', 9, '7'),
      ];
    }
  }

  const game = new Game();
  console.log(game);

  //
  // // 駒の移動
  const syoteIndex = game
    .getPieces()
    .findIndex(
      (piece) =>
        piece instanceof Fu && piece.getPosition().getSuji() === 7 && piece.getPosition().getDan() === '3',
    );

  const syote = game.getPieces()[syoteIndex];
  console.log('syote', syote.getPosition());

  setTimeout(() => {
    // 1秒後に移動
    syote.moveTo(new Position(7, '4')); // 7, '4' に移動
    console.log(game);
  }, 1000);
}
