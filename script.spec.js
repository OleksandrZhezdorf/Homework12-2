describe('check the functions', () => {
  it('Should change an array with forEach method', () => {
    var checkArray = ['item1', 'item2', 'item3'];
    expect(forEachExample(items, forEachCallbackFunction)).to.deep.equal(checkArray);
  });
  it('Should create a new array with map method', () => {
    var checkArray2 = [20, 40, 60];
    expect(mapExample([10, 20, 30], mapSum)).to.deep.equal(checkArray2);
  });
  it('Should check an array with filter method and get values we ask for (value > 5)', () => {
    var checkArray3 = [6, 7, 8, 9];
    expect(filterExample([4, 5, 6, 7, 8, 9], filterSum)).to.deep.equal(checkArray3);
  });
  it('Should check an array with some method and find out if there an element with (value == 9)', () => {
    expect(someExample([4, 5, 6, 7, 8, 9], someSum)).to.equal(true);
  });
  it('Should check an array with every method and find out if (each value == 9)', () => {
    expect(everyExample([9, 9, 9, 9, 9, 9], everySum)).to.equal(true);
  });
  it('Should sum values of array with reduce method', () => {
    expect(reduceExample([1, 2, 3, 4, 5, 7], reduceSum)).to.equal(26);
  });
  it('Should find first value of array we are looking for with reduce method (value > 6)', () => {
    expect(findExample([4, 5, 6, 7, 8, 9], findSum)).to.equal(7);
  });
});