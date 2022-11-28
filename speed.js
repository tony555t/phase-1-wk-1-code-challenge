function checkSpeed(speed) {

    const speedLimit = 70;
    
    const kmPerPoint = 5;
    
     
    
    
    if (speed < speedLimit + kmPerPoint) //Is current speed less then speed limit?
    
    console.log(`ok`);
    
    else {
    
    const points = ((speed - speedLimit) / kmPerPoint); //Are points 12 or greater?
    
    if (points >=12)
    
    console.log(`License suspended`);
    
    else
    
    console.log(`Points`, points); // Shows how many points person got.
    
    }
    
    }
    checkSpeed( 1000)