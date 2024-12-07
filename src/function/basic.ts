// アロー関数
export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message);
};

// アロー関数の省略記法
export const logMessage2 = (message: string): void => console.log('Function basic sample 4:', message);

// 名前付き関数
export function logMessage3(message: string): void {
  console.log('Function basic sample 2:', message);
}

// 関数式
export const logMessage4 = function (message: string): void {
  console.log('Function basic sample 3:', message);
};

// never型
export const alwaysThrowError = (message: string): never => {
  throw new Error(message);
};

// 呼び出しシグネチャ
type LogMessage = (message: string) => void; // string型のmessageを受け取り、void型を返す関数の型
export const logMessage5: LogMessage = (message) => {
  // パラメータに型指定せず、関数に型を指定する。
  console.log('Function basic sample 5:', message);
};

// typeと関数を一緒に定義1
export const logMessage6: (message: string) => void = (message) => {
  console.log('Function basic sample 6:', message);
};
// typeと関数を一緒に定義2
export const logMessage7 = (message: string): void => {
  console.log('Function basic sample 7:', message);
};

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void;
};

export const logMessage8: FullLogMessage = (message) => {
  console.log('Function basic sample 8:', message);
};
