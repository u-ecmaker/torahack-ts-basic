export default function unknownSample(): void {
  const maybeNumber: unknown = 10;
  console.log('unknown Sample 1:', typeof maybeNumber, maybeNumber);

  // const sum = maybeNumber + 10; // unknown型は実際にnumber型で動作していても加算できない

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10;
    console.log('unknown Sample 2:', typeof sum, sum);
  }

  const isFoo = maybeNumber === 'foo'; // unknown型でもこういう使い方は可能。
  console.log('unknown Sample 3:', typeof isFoo, isFoo);
}
