// Function 1: distanceFromHqInBlocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    
    // Calculate the distance in blocks
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance;
  }
  
  // Function 2: distanceFromHqInFeet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * 264;
    
    return feet;
  }
  
  // Function 3: distanceTravelledInFeet
  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceBlocks = Math.abs(endBlock - startBlock);
    const distanceFeet = distanceBlocks * 264;
    
    return distanceFeet;
  }
  
  // Function 4: calculatesFarePrice
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceFeet = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distanceFeet <= 400) {
      return 0;
    } else if (distanceFeet > 400 && distanceFeet <= 2000) {
      return (distanceFeet - 400) * 0.02;
    } else if (distanceFeet > 2000 && distanceFeet <= 2500) {
      return 25; // Flat fare
    } else {
      return 'cannot travel that far';
    }
  }
  
  console.log("Distance from HQ in Blocks:", distanceFromHqInBlocks(50));
  console.log("Distance from HQ in Feet:", distanceFromHqInFeet(50));
  console.log("Distance Travelled in Feet:", distanceTravelledInFeet(34, 38));
  console.log("Calculates Fare Price:", calculatesFarePrice(34, 38));
  
