function timeRequiredToBuy(tickets, k) {
    var time = 1;
    var elapsedTime = 0;
    var i = 0;
    while (tickets[k] !== 0) {
        if (tickets[i] === undefined)
            i = 0;
        if (tickets[i] === 0) {
            i++;
            continue;
        }
        elapsedTime += time;
        tickets[i] = tickets[i] - 1;
        i++;
    }
    return elapsedTime;
}
;
console.log(timeRequiredToBuy([83, 86, 38, 31, 59, 25, 89, 71, 54, 71, 84], 1));
