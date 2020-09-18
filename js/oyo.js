/*
Author: Sanjay Shiradwade
*/
const hotelSize = 200000000;
let ttCust = 1;
let adult = 1;
let child = 0;
let ttAlocatedRooms = 1;

function addToRoom(type, value) {
  if (hotelSize <= hotelSize) {
    //         Total customer calculation logic
    if (type === "adult") {
      adult = adult + value;
      ttCust = ttCust + adult;
    } else if (type === "child") {
      child = child + value;
      ttCust = ttCust + child;
    }

    //         Room allocation logic
    if (ttCust > 4) {
      ttAlocatedRooms = ttCust / 4;
      if (!Number.isInteger(ttAlocatedRooms)) {
        ttAlocatedRooms = Math.ceil(ttAlocatedRooms);
      }
    }
  }
  console.log("ttAlocatedRooms", ttAlocatedRooms);
  console.log("Adults", adult);
  console.log("child", child);
}

addToRoom("adult", 1);
