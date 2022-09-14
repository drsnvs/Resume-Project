$(function () {
  $('#example1').multiselectsplitter();
  $('#example2').multiselectsplitter({
    selectSize: 7,
    clearOnFirstChange: true,
    groupCounter: true
  });
  $('#example3').multiselectsplitter({
    groupCounter: true,
    maximumSelected: 2
  });
  $('#example4').multiselectsplitter({
    groupCounter: true,
    maximumSelected: 3,
    onlySameGroup: true
  });
});