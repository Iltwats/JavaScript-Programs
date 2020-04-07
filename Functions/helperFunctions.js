//Function calling from within a function

function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows,columns){
  return monitorCount(rows,columns)*200;
}
const toatlMonitor=monitorCount(5,4);
const totalCost=costOfMonitors(5,4);
console.log('Total Monitor req is:'+toatlMonitor);
console.log('Total cost to buy them is $'+totalCost);
