function add(number1, number2){
 return number1+number2;
}

function triangleTracker(length,width,height){
      var triangleMessages=["Equilateral triangle","isosceles triangle","scalene triangle","not triangle"];

      if(length==width && width==height && height==length ){
             alert(triangleMessages[0]);
      }

      else if(length == 0 || width==0 || height==0){
             alert(triangleMessages[3]);
      }

      else if(length==width || width==height || height==length){
             alert(triangleMessages[1]);
      }

      else if(length!= width || width!= height || height!= length ){
             alert(triangleMessages[2]); 

      else{
            alert(triangleMessages[3]);
      }

}
triangleTracker(3,2,2);
