/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
loveIs = 0;
    arrLover = [];
    for(var i = 0; i<preferences.length; i ++) {
        lover1 = (preferences[i] - 1);
        lover2 = (preferences[lover1] - 1);
        lover3 = (preferences[lover2] - 1);
        if (lover1 != i && lover2 != i && lover3 == i && arrLover.indexOf(i) == -1) {
            arrLover.push(i);
            arrLover.push(lover1);
            arrLover.push(lover2);
            loveIs++;
            }
        }
    return loveIs;
};