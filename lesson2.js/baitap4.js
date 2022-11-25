function ranRoomNumBer (){
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };
    
    for (let i = 0; i < 2; i += 1) {
        console.log(`Random number ${i}: ${getRandomInt(3, 8)}`);
      }
}
ranRoomNumBer();