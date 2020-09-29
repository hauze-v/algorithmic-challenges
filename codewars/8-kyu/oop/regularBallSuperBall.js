/*
Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType --> 'regular'
ball2.ballType --> 'super'
*/

class Ball {
  constructor(ballType) {
    if (ballType) {
      this.ballType = ballType;
    } else {
      this.ballType = "regular";
    }

  }
}

const ball1 = new Ball();
const ball2 = new Ball("super");

/*
Fancy way to do it:

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

*/