export default async function asyncAwaitSample(): Promise<void> {
  const url = 'https://api.github.com/users/u-ecmaker';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = async () => {
    const res = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error);
        return null;
      });

    if (!res) {
      return null;
    }

    const json = await res
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous Async Await Sample 1:', json);
        return json;
      })
      .catch((error: unknown) => {
        console.error(error);
        return null;
      });
    if (!json) {
      return null;
    }

    return json;
  };

  const profile = await fetchProfile();
  if (profile) {
    console.log('Asynchronous Async Await Sample 2:', profile);
  }
}
