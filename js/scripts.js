
function triangleTracker(){

      var height = document.getElementById('height1').value;
      var width = document.getElementById('width1').value;
      var lenght = document.getElementById('length1').value;

      var height2 = parseInt(height);
      var width2 = parseInt(width);
      var lenght2 = parseInt(lenght);

      var triangleMessages=["The triangle dimensions from an Equilateral triangle","The triangle dimensions from an isosceles triangle","The triangle dimensions from a scalene triangle","The triangle dimensions, don't from a triangle"];

      //check if sides are correct
      if(height2 + width2 < lenght2 || width2 + lenght2 < height2 || lenght2 + height2 < width2 ){
             document.getElementById('showResult').innerHTML= triangleMessages[3];
      }
      //check if sides are Equilateral
      else if(lenght2 == width2 && width2 == height2 && height2 == lenght2 ){
             document.getElementById('showResult').innerHTML= triangleMessages[0];
      }
      //check if sides are zero
      else if(lenght2 == 0 || width2 == 0 || height2 == 0){
             document.getElementById('showResult').innerHTML = triangleMessages[3];
      }
      //check if sides are isosceles
      else if(lenght2 == width2 || width2 == height2 || height2 == lenght2){
             document.getElementById('showResult').innerHTML = triangleMessages[1];
      }
      //check if sides are scalene
      else if(lenght2 != width2 && width2 != height2 && height2 != lenght2 && height2 + width2 > lenght2 && width2 + lenght2 > height2 && lenght2 + height2 > width2){
             document.getElementById('showResult').innerHTML = triangleMessages[2];
      }
      // not triangle
      else{
            document.getElementById('showResult').innerHTML = triangleMessages[3];
      }

}

function resetForm(){
  document.getElementById(form).reset();
}
