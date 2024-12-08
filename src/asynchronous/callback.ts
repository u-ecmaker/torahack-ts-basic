export default function callbackSample(): void {
  const url = 'https://api.github.com/users/u-ecmaker';

  // コールバック関数を使用した非同期処理の例: 悪い例
  const fetchProfile = (): void => {
    fetch(url) // 非同期処理
      .then((res) => {
        res
          .json() // 非同期処理
          .then((json) => {
            console.log('Asynchronous Callback Sample 1:', json);
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const result = fetchProfile();
  console.log('Asynchronous Callback Sample 2:', result); // undefinedになってしまう。
}
