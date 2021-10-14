var srtDist = function (distance) {
    return distance.sort();
};
var srtPrice = function (price) {
    return price.sort().reverse();
};
var matchingDistWithPrice = function (distance, price) {
    return distance.map(function (i, k) { return [i, price[k]]; });
};
matchingDistWithPrice(srtDist([3, 5, 6, 8]), srtPrice([10, 20, 15, 18])).forEach(function (pair) {
    console.log("" + pair);
});
