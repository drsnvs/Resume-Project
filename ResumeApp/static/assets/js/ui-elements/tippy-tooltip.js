// Placement
// tippy('#placementTop', {
//     content: 'Top!',
//     placement: 'top-start',
//     arrow:true,
//     animation: 'rotate',
//     arrowType:'round',
//     animation:'perspective'
// });
tippy('#placementTop', {
    content: 'Top!',
    placement: 'top',
    arrow:true,
});
tippy('#placementTopStart', {
    content: 'Top Start!',
    placement: 'top-start',
    arrow:true,
});
tippy('#placementTopEnd', {
    content: 'Top End!',
    placement: 'top-end',
    arrow:true,
});
tippy('#placementRight', {
    content: 'Right!',
    placement: 'right',
    arrow:true,
});
tippy('#placementRightStart', {
    content: 'Right Start!',
    placement: 'right-start',
    arrow:true,
});
tippy('#placementRightEnd', {
    content: 'Right End!',
    placement: 'right-end',
    arrow:true,
});
tippy('#placementBottom', {
    content: 'Bottom!',
    placement: 'bottom',
    arrow:true,
});
tippy('#placementBottomStart', {
    content: 'Bottom Start!',
    placement: 'bottom-start',
    arrow:true,
});
tippy('#placementBottomEnd', {
    content: 'Bottom End!',
    placement: 'bottom-end',
    arrow:true,
});
tippy('#placementLeft', {
    content: 'Left!',
    placement: 'left',
    arrow:true,
});
tippy('#placementLeftStart', {
    content: 'Left Start!',
    placement: 'left-start',
    arrow:true,
});
tippy('#placementLeftEnd', {
    content: 'Left End!',
    placement: 'left-end',
    arrow:true,
});
// ARROWS
tippy('#defaultArrow', {
    content: 'Default Arrow!',
    placement: 'top',
    arrow:true,
});
tippy('#noArrow', {
    content: 'No Arrow!',
    placement: 'top',
    arrow:false,
});
tippy('#roundArrow', {
    content: 'No Arrow!',
    placement: 'top',
    arrow:true,
    arrowType:'round'
});
// ALLOW HTML
tippy('#allowHtml', {
    content: '<b>Bold Text</b> & <u>Underline</u>',
    placement: 'top',
    arrow:true,
    allowHTML: true,
});
// ANIMATIONS
tippy('#animationShiftAway', {
    content: 'Animation Shift Away',
    placement: 'top',
    arrow:true,
    animation:'shift-away'
});
tippy('#animationShiftToward', {
    content: 'Animation Shift Toward',
    placement: 'top',
    arrow:true,
    animation:'shift-toward'
});
tippy('#animationScale', {
    content: 'Animation Scale',
    placement: 'top',
    arrow:true,
    animation:'scale'
});
tippy('#animationPerspective', {
    content: 'Animation Perspective',
    placement: 'top',
    arrow:true,
    animation:'perspective'
});
// BACKGROUND COLORS
$('.blue').tooltip({
    template: '<div class="tooltip tooltip-blue" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Blue Tooltip"
});
$('.green').tooltip({
    template: '<div class="tooltip tooltip-green" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Green Tooltip"
});
$('.lblue').tooltip({
    template: '<div class="tooltip tooltip-lblue" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Light Blue Tooltip"
});
$('.red').tooltip({
    template: '<div class="tooltip tooltip-red" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Red Tooltip"
});
$('.yellow').tooltip({
    template: '<div class="tooltip tooltip-yellow" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Yellow Tooltip"
});
$('.purple').tooltip({
    template: '<div class="tooltip tooltip-purple" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Purple Tooltip"
});
$('.black').tooltip({
    template: '<div class="tooltip tooltip-black" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Black Tooltip"
});
