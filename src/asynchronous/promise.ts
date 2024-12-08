export default function promiseSample(): void {
  const url = 'https://api.github.com/users/u-ecmaker';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url) // 非同期処理
        .then((res) => {
          res
            .json() // 非同期処理
            .then((json: Profile) => {
              console.log('Asynchronous Promise Sample 1:', json);
              resolve(json);
            })
            .catch((error) => {
              console.error(error);
              reject(null);
            });
        })
        .catch((error) => {
          console.error(error);
          reject(null);
        });
    });
  };

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('Asynchronous Promise Sample 2:', profile);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
