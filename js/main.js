var linearrow5 = document.getElementById("linearrow5");
animateDashedPath(linearrow5);

/*
 * Animates the given path element.
 * Assumes the path has a "5 5" dash array.
 */
function animateDashedPath(linearrow5)
{
  var pathLength = linearrow5.getTotalLength();
  var animationDuration = 1000;
  var numSteps = Math.round(pathLength / (5+5) + 1);
  var stepDuration = animationDuration / numSteps;

  // Build the dash array so we don't have to do it manually
  var dasharray = [];
  while (numSteps-- > 0) {
    dasharray.push(10);
    dasharray.push(15);
  }
  dasharray.push(pathLength);

  // Animation start conditions
  linearrow5.setAttribute("stroke-dasharray", dasharray.join(" "));
  linearrow5.setAttribute("stroke-dashoffset", -pathLength);

  var interval = setInterval(dashanim, stepDuration);

  function  dashanim() {
    pathLength -= (5+5);
    linearrow5.setAttribute("stroke-dashoffset", -pathLength);
    if (pathLength <= 0) {
        clearInterval(interval);
    }
  }
}

var linearrow6 = document.getElementById("linearrow6");
animateDashedPath(linearrow6);

/*
 * Animates the given path element.
 * Assumes the path has a "5 5" dash array.
 */
function animateDashedPath(linearrow6)
{
  var pathLength = linearrow6.getTotalLength();
  var animationDuration = 1000;
  var numSteps = Math.round(pathLength / (5+5) + 1);
  var stepDuration = animationDuration / numSteps;

  // Build the dash array so we don't have to do it manually
  var dasharray = [];
  while (numSteps-- > 0) {
    dasharray.push(10);
    dasharray.push(15);
  }
  dasharray.push(pathLength);

  // Animation start conditions
  linearrow6.setAttribute("stroke-dasharray", dasharray.join(" "));
  linearrow6.setAttribute("stroke-dashoffset", -pathLength);

  var interval = setInterval(dashanim, stepDuration);

  function  dashanim() {
    pathLength -= (5+5);
    linearrow6.setAttribute("stroke-dashoffset", -pathLength);
    if (pathLength <= 0) {
        clearInterval(interval);
    }
  }
}

var linearrow7 = document.getElementById("linearrow7");
animateDashedPath(linearrow7);

/*
 * Animates the given path element.
 * Assumes the path has a "5 5" dash array.
 */
function animateDashedPath(linearrow7)
{
  var pathLength = linearrow7.getTotalLength();
  var animationDuration = 1000;
  var numSteps = Math.round(pathLength / (5+5) + 1);
  var stepDuration = animationDuration / numSteps;

  // Build the dash array so we don't have to do it manually
  var dasharray = [];
  while (numSteps-- > 0) {
    dasharray.push(10);
    dasharray.push(15);
  }
  dasharray.push(pathLength);

  // Animation start conditions
  linearrow7.setAttribute("stroke-dasharray", dasharray.join(" "));
  linearrow7.setAttribute("stroke-dashoffset", -pathLength);

  var interval = setInterval(dashanim, stepDuration);

  function  dashanim() {
    pathLength -= (5+5);
    linearrow7.setAttribute("stroke-dashoffset", -pathLength);
    if (pathLength <= 0) {
        clearInterval(interval);
    }
  }
}







