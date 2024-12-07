export default function genericsBasicSample(): void {
  //
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log('genericsBasicSample 1:', stringReduce(['be ', 'with ', 'you'], 'May the force '));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log('genericsBasicSample 2:', numberReduce([100, 200, 300], 1000));

  //
  // ジェネリック型を使わない場合
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Reduce = {
    (array: string[], initialValue: string): string;
    (array: number[], initialValue: number): number;
  };
  // const numberReduce2: Reduce = (array, initialValue) => { .....
  // じゃあ次はboolean型の～となると、型定義も関数も冗長になっていく。

  //
  // ジェネリック型を使った場合
  // 完全な呼び出しシグネチャ (シグネチャ全体にジェネリック型を割り当てる)
  type GenericReduce1<T> = {
    (array: T[], initialValue: T): T;
  };
  const genericStringReduce: GenericReduce1<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log(
    'genericsBasicSample 3:',
    genericStringReduce(['Make ', 'TypeScript ', 'grate ', 'again.'], ''), // D.トランプの「Make America Great Again」をもじったものです
  );
  const genericNumberReduce: GenericReduce1<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log('genericsBasicSample 4:', genericNumberReduce([-100, -200, -300], 1000));

  //
  // いろいろなジェネリック型の定義
  // 完全な呼び出しシグネチャ (個々のシグネチャにジェネリック型を割り当てる)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T;
    <U>(array: U[], initialValue: U): U;
  };
  // 呼び出しシグネチャの省略記法
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type GenericReduce3<T> = (array: T[], initialValue: T) => T; // アロー演算子を使用
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type GenericReduce4 = <T, U>(array: T[], initialValue: U) => T; // アロー演算子を使用
}

/* Reduceの意味
 * reduce は、配列の要素を集約して、最終的に一つの値にすることで要素数を減少させる操作を指します。
 * reduce という名前は、操作の結果として要素数が減ることを示していますが、
 * 初めて使う人にとっては直感的ではないかもしれません。
 * 特に、何を「減らす」のかが明確でない場合、混乱を招くことがあります。
 * 他のプログラミング言語やライブラリでは、fold(折りたたむ) や aggregate(集約する) といった名前が使われることもありますが、
 * これらも同様の意味を持っています。
 * 慣れるまで少し時間がかかるかもしれませんが、使い続けるうちに理解が深まると思います。
 *
 * プログラミング界隈では reduce という用語は非常によく使われます。
 * 特に、関数型プログラミングや配列操作に関連する言語やライブラリ（例えば、JavaScript、Python、Ruby、Haskell など）で一般的です。
 */
