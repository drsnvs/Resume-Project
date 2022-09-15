function myFunction() {
  var checkBox = document.getElementById("switcherOne");
  var monthlyPlan = document.getElementById("monthlyPlan");
  var monthlyPlanTwo = document.getElementById("monthlyPlanTwo");
  var monthlyPlanThree = document.getElementById("monthlyPlanThree");
  var annuallPlan = document.getElementById("annuallPlan");
  var annuallPlanTwo = document.getElementById("annuallPlanTwo");
  var annuallPlanThree = document.getElementById("annuallPlanThree");
  if (checkBox.checked == true){
    annuallPlan.style.display = "none";
    annuallPlanTwo.style.display = "none";
    annuallPlanThree.style.display = "none";
    monthlyPlan.style.display = "inline-block";
    monthlyPlanTwo.style.display = "inline-block";
    monthlyPlanThree.style.display = "inline-block";
  } else {
    annuallPlan.style.display = "inline-block";
    annuallPlanTwo.style.display = "inline-block";
    annuallPlanThree.style.display = "inline-block";
    monthlyPlan.style.display = "none";
    monthlyPlanTwo.style.display = "none";
    monthlyPlanThree.style.display = "none";
  }
}