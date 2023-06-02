// constant loop that updates the ball's position on the page
function animateBall() {
  // get the ball element
  const ball = document.getElementById("ball");
  // setup media
  // Sound Effect from Pixabay
  //disabled for github due to file type limitations
  //const bounceSound = new Audio("/audio/bounce.mp3");
 // const popSound = new Audio("/audio/pop.mp3");

  // get the bounce-able area element
  const bounceArea = document.getElementById("bounce-area");

  // get the size of the bounce-able area
  const bounceAreaWidth = bounceArea.scrollWidth;
  const bounceAreaHeight = bounceArea.scrollHeight;

  // ball will move at a constant speed of 5px per "frame" (in this case, one run of the loop is one frame)
  const ballSpeed = 1;
  //   initial ball speed
  let ballSpeedX = ballSpeed;
  let ballSpeedY = ballSpeed;

  // register an event listener for clicking on the ball
  ball.addEventListener("click", function () {
    // "pop" the ball by setting its size to 0px
    ball.style.width = "0px";
    ball.style.height = "0px";
    // transition the ball's size change over 1 second
    ball.style.transition = "width 0.2s, height 0.2s";

    // play the pop sound
    popSound.play();

    // wait 1 second before resetting the ball's size and starting the loop again
    setTimeout(() => {
      // reset the ball's size
      // disable the transition so that the ball's size change is instant
      ball.style.transition = "none";
      ball.style.width = "100px";
      ball.style.height = "100px";
    }, 1000);
  });

  // setup a loop that will run every 10ms
  const ballAnimation = setInterval(() => {
    // get the ball's current position
    let ballX = parseInt(ball.style.left) || 0;
    // offset the ball by 400px to account for the header

    let ballY = parseInt(ball.style.top) || 0;

    // check if the ball is colliding with the container
    if (ballX + 120 + ballSpeedX > bounceAreaWidth || ballX + ballSpeedX < 0) {
      // if the ball is colliding with the container, reverse its direction and add some randomness to the speed
      ballSpeedX *= -1;
   //   bounceSound.play();
    }

    if (ballY + 120 + ballSpeedY > bounceAreaHeight || ballY + ballSpeedY < 0) {
      // if the ball is colliding with the container, reverse its direction and add some randomness to the speed
      ballSpeedY *= -1;
      // play the bounce sound
      // bounce sound
    //  bounceSound.play();
    }
    // dispose of the bounce sound
    // calculate the new position of the ball
    let newBallX = ballX + ballSpeedX;
    let newBallY = ballY + ballSpeedY;

    // set the ball's new position using absolute positioning in the ball's style
    ball.style.left = `${newBallX}px`;
    ball.style.top = `${newBallY}px`;

    // check if the ball is outside the bounce-able area
    if (
      newBallX < 0 ||
      newBallX > bounceAreaWidth ||
      newBallY < 0 ||
      newBallY > bounceAreaHeight
    ) {
      // if the ball is outside the bounce-able area, reset the ball's position to the center of the bounce-able area
      ballX = bounceAreaWidth / 2;
      ballY = bounceAreaHeight / 2;
    }
  }, 10);
}
