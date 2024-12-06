// オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    // ABCならサインインしている想定
    console.log('Function parameters sample 1: User is signed in. User name is', userName);
    return true;
  } else {
    console.log('Function parameters sample 2: User is not signed in.');
    return false;
  }
};

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, userName: string = 'No name'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is signed in. User name is', userName);
    return true;
  } else {
    console.log('Function parameters sample 4: User is not signed in.');
    return false;
  }
};

// レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    // reduce: 配列を1つ1つ取り出して計算できる。
    return prevTotal + productPrice;
  }, 0);
};
