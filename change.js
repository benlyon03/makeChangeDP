// Given a set of bills and a value what is the least amount of bills that could be used and what are they

function makeChange(bills, val) {
  // create table to find min bills used
  let table = [];
  for (var i = 0; i <= bills.length; i++) {
    var row = [];
    for (var j = 0; j <= val; j++) {
      if (j === 0) {
        row.push(0);
      } else if (i === 0) {
        row.push(Number.MAX_VALUE);
      } else {
        if (bills[i - 1] > j) {
          row.push(table[i - 1][j]);
        } else {
          row.push(Math.min(table[i - 1][j], row[j - bills[i - 1]] + 1));
        }
      }
    }
    table.push(row);
  }
  //backtracking to find bills
  billsUsed = [];
  i = table.length - 1;
  j = val;
  while (i != 0 || j != 0) {
    if (table[i][j] === table[i - 1][j]) {
      i = i - 1;
    } else {
      billsUsed.push(bills[i - 1]);
      j = j - bills[i - 1];
    }
  }
  return billsUsed;
}

var bills = [2, 3, 5, 6, 8];
var val = 9;
console.log(makeChange(bills, val));
