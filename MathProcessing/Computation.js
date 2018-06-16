var exports = module.exports = {};

//e.g. params 11m/s , 10m/s , 50m , 30m , 1
exports.calculate = function(speed_first, speed_second, distance, obstacle_distance) {

      console.log("=== Inside calculate function ===");
      console.log(speed_first);
      console.log(speed_second);
      console.log(obstacle_distance);


var v;

   //var deltav = -(speed_first - speed_second);
   var buffer = 5;



   // Calulate for 1st car
   /*
  var delta_t = 2*speed_first/(obstacle_distance - buffer);
  var a = -speed_first/delta_t1;
   */


  // Calulate for 2st car
   var delta_t = (obstacle_distance - buffer)/2*speed_second;
   var a = -speed_second/delta_t;



   //v = - speed_second;
   //v = -deltav;

   v = {
       //"carID": 1,
       //car1: [-speed_first, delta_t1],
       //car2: [-speed_second, delta_t2]
       /*
       "delta_velocity1": -speed_first,
       "delta_velocity2": -speed_second,
       "delta_t1": delta_t1,
       "delta_t2": delta_t2
       */
       //"velocity1": -speed_first/delta_t1,
       //"velocity2": -speed_second/delta_t2

       "acceleration": a,
       "delta_t" : delta_t

    }


    return v;

}
