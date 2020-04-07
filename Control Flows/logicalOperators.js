let mood = 'sleepy';
let tirednessLevel = 6;

// Use of && and || operator

/*if(mood==='sleepy'&& tirednessLevel>8){
  console.log('time to sleep')
}
else{
  console.log('not bed time yet')
}*/

if (mood === 'sleepy' || tirednessLevel > 8) {
    console.log('time to sleep')
} else {
    console.log('not bed time yet')
}

