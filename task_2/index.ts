const srtDist = (distance: number[]) => {
  return distance.sort();
};

const srtPrice = (price: number[]) => {
  return price.sort().reverse();
};

const matchingDistWithPrice = (distance: number[], price: number[]) =>
  distance.map((i, k) => [i, price[k]]);

matchingDistWithPrice(
  srtDist([3, 5, 6, 8]),
  srtPrice([10, 20, 15, 18])
).forEach((pair) => {
  console.log(`${pair}`);
});
