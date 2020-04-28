let app={
    carID:123,
    getID: function(prefix){
        return prefix+this.carID;
    }
};
let newCar={carID: 456};
console.log(app.getID.apply(newCar,['ID:']));
//call also does the same thing but it does not take arguments
