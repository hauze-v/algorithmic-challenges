/* Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
Implement the ParkingSystem class:
    ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
    bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

Example 1:
Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output
[null, true, true, false, false]

Explanation
ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied. */


/* var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1 && this.big != 0) {
    this.big--;
    return true;
  } else if (carType === 2 && this.medium != 0) {
    this.medium--;
    return true;
  } else if (carType === 3 && this.small != 0) {
    this.small--;
    return true;
  } else {
    return false;
  }
}; */

/* --- A better way of doing it --- */
var ParkingSystem = function (big, medium, small) {
  /* We use null here to offset the array to start at index 1 instead of 0 */
  this.numOfSlots = [null, big, medium, small];
}

ParkingSystem.prototype.addCar = function(carType) {
  /* If carType exists in the array (not 0) decrement the remaining slots and return true */
  if (this.numOfSlots[carType]) {
    this.numOfSlots[carType]--;
    return true;
  }
  return false;
}

 const parkingSystem = new ParkingSystem(1,1,0);
 console.log(parkingSystem.addCar(1)); // true
 console.log(parkingSystem.addCar(2)); // true
 console.log(parkingSystem.addCar(3)); // false
 console.log(parkingSystem.addCar(1)); // false