var srtDist = function (distance) {
    return distance.sort();
};
var srtPrice = function (price) {
    return price.sort().reverse();
};
var matchingDistWithPrice = function (distance, price) {
    var matching = [];
    for (var key in distance)
        matching.push([distance[key], price[key]]);
    return matching;
};
matchingDistWithPrice(srtDist([3, 5, 6, 8]), srtPrice([10, 20, 15, 18])).forEach(function (pair) {
    console.log("" + pair);
});
