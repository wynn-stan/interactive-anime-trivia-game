        const gameCanvas = document.getElementById("canvas");
        const gameCtx = gameCanvas.getContext("2d");

       let ballRadius = 20;

       let ballPosition = {}; 

       /*
            when canvas loads, set initial ball position
       */
       
       function setInitialBallPosition(){

           ballPosition.x = ballRadius + 10;
           ballPosition.y = gameCanvas.height - ballRadius;

       }

       setInitialBallPosition()

       function drawBall(){
           
            gameCtx.clearRect(0,0, gameCanvas.width, gameCanvas.height);
            gameCtx.beginPath();
            gameCtx.arc(ballPosition.x, ballPosition.y, ballRadius, 0, (Math.PI * 2), false);
            gameCtx.fill();

       }
          
       let x_velocityFactor = 0;
       let y_velocityFactor = 0;

       let x_accelerateFactor = 0;
       let y_accelerateFactor = 0;

       let gravityAcceleration = 0.2;

       /**
         * Draw the cannon every frame at the ball position;
         *      create new image and set its source
         *      when image loads, draw cannon for the first time, then drawBall();
         *          let cannonPosition. x = ballPosition.x - r
         *          .y = ballPosition.y - r
         *          let height = 2 * r
         *          let width = 2 *r 
         *      every frame, draw the ball
         *          ctx.drawImage()
         */

       let cannonImage = new Image();
       cannonImage.src = "./michel-tobler-pixel-cannon.jpg";
       cannonImage.onload = drawCannon;

       let cannonPosition = {
               x: ballPosition.x - (ballRadius + 10),
               y: ballPosition.y - (ballRadius + 10)
           }

        let cannonHeight = (2 * ballRadius) + 10;
        let cannonWidth =  (2 * ballRadius) + 10;

       function drawCannon(){
           gameCtx.drawImage(cannonImage, cannonPosition.x, cannonPosition.y, cannonWidth, cannonHeight );
       }

       /*
            accelerate factor is increase it's velocity
       */

       function setVelocityFactor(x,y){
            x_velocityFactor = x;
            y_velocityFactor = y;
       }

       function setAccelerationFactor(x,y){
            x_accelerateFactor = x;
            y_accelerateFactor = y;
       }

       function accelerate(x_acceleration, y_acceleration){
           x_velocityFactor += x_acceleration;
           y_velocityFactor += y_acceleration;
       }

       function isBallOnGround(){
           let ground = gameCanvas.height - ballRadius - 1;
           let validity = ballPosition.y >= ground;
           return validity;
       }

       function stopMovingBallDownwards(){
            y_velocityFactor = 0;
       }

       let isBallShot = false;

       function ballIsShot(){
           isBallShot = true;
           setVelocityFactor(2, -9);

       }

       /*
            stop ball when it touches the ground
                every frame
                    check if ball has touched ground
                        if yes, 
                            stop ball from moving downwards
       */

       function animateBall(){
        
           drawBall();
           drawCannon();

           if(isBallShot == true){
                moveBall45Deg();
                stopBallBoomerangShot();
           }

           if(isBallOnGround() == true){
                stopMovingBallDownwards();
                isBallShot = false;
           }

           requestAnimationFrame(animateBall);
       }

       function moveBall(param_x_factor, param_y_factor){
            ballPosition.x +=  param_x_factor;
            ballPosition.y += param_y_factor;
       }

       /*
            set new velocity/factor
       */

       animateBall();

       /*
            shoot ball 45deg
                when shootball button is pressed, set velocity to 2;
                every frame, 
                check if the shootball button is presssed, then
                        move ball
                            increase ballPosition.x by velocityFactor;
                            increase ballPosition.y by velocityFactor;

                        decelerate ball
                            every frame,
                            decrease ballVelocity by decelerationFactor;
                                let x_velocityFactor -= decelerationFactor;
                                let y_velocityFactor -= decelerationFactor;
                                reduce ball position due to deceleration;
                                    let ballPosition.x -= x_velocityFactor
                                    same for y
                        
                        move ball downwards because of gravity
                            every frame, 
                                decrease ball velocity by gravity
                                    set deceleration factor to that of gravity
                                    let y_velocityfactor += -decelerationFactor;
                                increase ball-y-position by velocituy
                                    let ballPosition.y += y_velocityfactor
       */

       function moveBall45Deg(){

                moveBall(x_velocityFactor, y_velocityFactor);

                let isXVelocity0 = x_velocityFactor >= -0.01 && x_velocityFactor <= 0.01;

                if(isXVelocity0 == true){
                    setAccelerationFactor(0, y_accelerateFactor);
                    decelerateBall(x_accelerateFactor, y_accelerateFactor)
                } else {
                    setAccelerationFactor(0, 0.2);
                    decelerateBall(x_accelerateFactor, y_accelerateFactor);
                }
                

                moveBallDownwardsWithGravity();
       }

       function decelerateBall(x,y){

           x_velocityFactor += x;
           y_velocityFactor += y;

           moveBall(x_velocityFactor, y_velocityFactor)

       }

       function moveBallDownwardsWithGravity(){ 
            setAccelerationFactor(x_accelerateFactor, gravityAcceleration);
            decelerateBall(0, y_accelerateFactor);
       }

       function stopBallBoomerangShot(){

           let isXVelocity0 = x_velocityFactor >= -0.01 && x_velocityFactor <= 0.01;

           if(isXVelocity0 == true){
               stopMovingBallBackwards();
           }

       }

       function stopMovingBallBackwards(){
           console.log(x_accelerateFactor);
           setAccelerationFactor(0, y_accelerateFactor);
       }

       

       /*
            stop ball from moving 45degs backwards and downwards
                every frame
                    check if ball velocity x reaches 0;
                        if yes, 
                            stop decelerating x velocity
                    check if ball y velocity is 0, 
                            stop decelerating y velocity;
       */

       /*
            every 2 seconds, shhot ball
                set timer for 2 seonds
                when time set, isbalshot to true
            after 3rd shot, wait 2 sec areset ball position
                measurre how many shots so far,
                if shots == 3, 
                reset ball position, set 3 shots to false
       */

       setInterval(moveBall45DegWithTimer, 2000);

       let numberOfShots = 0;

       function moveBall45DegWithTimer(){
            numberOfShots++;

            if(numberOfShots == 4) {
                process4thShot();
                numberOfShots = 0;
                };

            ballIsShot();

            console.log(numberOfShots)

        }

        function process4thShot(){
            setInitialBallPosition();
        }

       