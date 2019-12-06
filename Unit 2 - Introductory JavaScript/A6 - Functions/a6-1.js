// Example 1 - Draw a stick figure
function stickFigure() {
    console.log("  0   ")
    console.log("--+-- ")
    console.log("  |   ")
    console.log(" / L ")
  }
  
  // Example 2 - Draw a nice ASCII heading, given a title
  function header(title) {
    console.log("===================================")
    console.log("   "+title)
    console.log("===================================")
  }
  
  // Example 3 - Calculate the area of a rectangle, given width and height
  function areaOfARectangle(width, height) {
    let area = width * height;
    console.log("The area of the rectangle is "+area);
  }
  
  // Up to this point, our code will do absolutely nothing! To use the functions, we need
  // to call them elsewhere in the program. Below, we call each of our three functions:
  
  stickFigure();
  header("An Awesome Javascript Program");
  areaOfARectangle(3, 4);
  areaOfARectangle(5, 5);
  header("Here's another call!");
  areaOfARectangle(6, 5);
  areaOfARectangle(7, 5)
  