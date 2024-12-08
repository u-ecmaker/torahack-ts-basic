/* #02 環境構築 */
// import World from './world';
//
// const root = document.getElementById('root');
// const world = new World('Hello, World, U!');
// world.sayHello(root);

//
/* #04 基本の型定義とアノテーション */
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic';
// primitiveSample();
// notExistSample();
// anySample();
// unknownSample();

//
/* #05 関数の型定義 */
// import { logMessage, logMessage5, logMessage6, logMessage7, logMessage8 } from './function/basic';
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters';

// logMessage('Hello, World!');

// isUserSignedIn('ABC', 'U');
// isUserSignedIn('ABC');
// isUserSignedIn('DEF', 'U');
// isUserSignedIn('GHI');

// isUserSignedIn2('ABC', 'U');
// isUserSignedIn2('ABC');
// isUserSignedIn2('DEF', 'U');
// isUserSignedIn2('GHI');

// const sum: number = sumProductsPrice(100, 200, 300, 400, 500);
// console.log('Function parameters sample 5:', sum);

// logMessage5('Hello, World!');
// logMessage6('Hello, World!');
// logMessage7('Hello, World!');
// logMessage8('Hello, World!');

//
/* #06 オブジェクトの型定義 */
// import objectSample from './object/object';
// import typeAliasSample from './object/alias';
// objectSample();
// typeAliasSample();

//
/* #07 配列の型定義 */
// import arraySample from './array/array';
// import tupleSample from './array/tuple';
// arraySample();
// tupleSample();

//
// /* #08 ジェネリック型 */
// import genericsBasicSample from './generics/basic';
// import genericsAdvancedSample from './generics/advanced';
// genericsBasicSample();
// genericsAdvancedSample();

//
/* #09 オブジェクト指向プログラミング */
// import shogi from './oop/shogi'; // oop: object oriented programming (オブジェクト指向)
// shogi();

//
/* #10 インターフェイス */
import interfaceSample from './interface/interface';
interfaceSample();
