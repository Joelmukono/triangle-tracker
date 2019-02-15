


function triangleTracker(length,width,height){
      var height = getElementById('height1');
      var width = getElementById('width1');
      var lenght = getElementById('lenght1');

      var triangleMessages=["Equilateral triangle","isosceles triangle","scalene triangle","not triangle"];


      if(height+width<length || width+length< height || length + height < width ){
             alert(triangleMessages[3]);
      }
      else if(length == width && width == height && height == length ){
             alert(triangleMessages[0]);
      }

      else if(length == 0 || width == 0 || height == 0){
             alert(triangleMessages[3]);
      }

      else if(length == width || width == height || height == length){
             alert(triangleMessages[1]);
      }

      else if(length != width || width != height || height != length ){
             alert(triangleMessages[2]);
      }

      else{
            alert(triangleMessages[3]);
      }

}
