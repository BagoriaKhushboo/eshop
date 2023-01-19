test("this Api should return atlest 10 records", () => {
  // 1. call fetch
  const promise = fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  // 2. test promise
  return promise.then((records) => {
    expect(records.length).toBeGreaterThan(10);
  });
});
