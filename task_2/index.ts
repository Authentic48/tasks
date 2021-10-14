const srtDist = (distance: number[]) => {
  return distance.sort();
};

const srtPrice = (price: number[]) => {
  return price.sort().reverse();
};

const matchingDistWithPrice = (distance: number[], price: number[]) => {
  var matching = [];
  for (var key in distance) matching.push([distance[key], price[key]]);
  return matching;
};

matchingDistWithPrice(
  srtDist([3, 5, 6, 8]),
  srtPrice([10, 20, 15, 18])
).forEach((pair) => {
  console.log(`${pair}`);
});
