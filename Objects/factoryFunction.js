
//Using a factory function to create many instances of an object quickly. 
const robotFactory=(model,mobile)=>{
  return{
    model:model,
    mobile:mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
};
const tinCan=robotFactory('P-500',true);
tinCan.beep();


//We can also destructure the above function as below.
function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
