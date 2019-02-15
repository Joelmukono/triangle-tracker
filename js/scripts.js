


function triangleTracker(length,width,height){
      var height = getElementById('height1');
      var width = getElementById('width1');
      var lenght = getElementById('lenght1');

      var height2 = parseInt(height);
      var width2 = parseInt(width);
      var lenght2 = parseInt(lenght);

      var triangleMessages=["Equilateral triangle","isosceles triangle","scalene triangle","not triangle"];


      if(height2 + width2 < lenght2 || width2 + lenght2 < height2 || lenght2 + height2 < width2 ){
             alert(triangleMessages[3]);
      }
      else if(lenght2 == width2 && width2 == height2 && height2 == lenght2 ){
             alert(triangleMessages[0]);
      }

      else if(lenght2 == 0 || width2 == 0 || height2 == 0){
             alert(triangleMessages[3]);
      }

      else if(lenght2 == width2 || width2 == height2 || height2 == lenght2){
             alert(triangleMessages[1]);
      }

      else if(lenght2 != width2 || width2 != height2 || height2 != lenght2 ){
             alert(triangleMessages[2]);
      }

      else{
            alert(triangleMessages[3]);
      }

}
