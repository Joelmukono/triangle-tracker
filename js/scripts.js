function add(number1, number2){
 return number1+number2;
}

function triangleTracker(length,width,height){
      var triangleMessages=["Equilateral triangle","isosceles triangle","scalene triangle","not triangle"];

      if(length==width && width==height && height==length ){
             alert(triangleMessages[0]);
           }

}
triangleTracker(2,2,2);
