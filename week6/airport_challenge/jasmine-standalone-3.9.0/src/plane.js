class Plane{
    checkLanding(){
    }
    planeNumber(){
      return 2;
    }
    color(number){
      if(number % 2 === 0){
        return 'red';
      }else{
        return 'green';
      }
    }
    // shouldThrowError(){
    //   throw 'leave me alone';
    // }
  }