var exports = module.exports = {};

//e.g. params 11m/s , 10m/s , 50m , 30m , 1
exports.calculate = function(speed_first, speed_second, obstacle_distance, distance, desired_car_velocity) {

      console.log("=== Inside calulate function ===");

/*
      var deltav = -(speed_first - speed_second); //-Math.abs(num);

      var delta_t1 = speed_first/obstacle_distance;

      var delta_t2 = speed_second/obstacle_distance;

      var velocity1 = -speed_first/delta_t1;

      var velocity2 = -speed_second/delta_t2;

*/

      var velocity1 = -5;

      var velocity2 = -4;


      if (desired_car_velocity == 1){
        return velocity1;
      }
      else {
        return velocity2;
      }


}
