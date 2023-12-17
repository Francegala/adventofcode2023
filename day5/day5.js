const time = `42899189`;
const distance = `308117012911467`;

const timeA = time.split('     ');
const distanceA = distance.split('   ');
let result = 1;
for (i = 0; i < timeA.length; i++) {
  let currentT = timeA[i];
  let currentD = distanceA[i];
  let counter = 0;
  for (j = 0; j <= currentT; j++) {
    //
    let timePressing = j;
    let totalDistance = timePressing * (currentT - timePressing);
    if (totalDistance > currentD) counter++;
    //
  }
  result = result * counter;
  console.log(result);
}
