// Example with postfix
$("input[name='demo1']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    postfix: '%',
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
});
// With prefix
$("input[name='demo2']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    prefix: '%',
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-primary"
});
// Vertical button alignment
$("input[name='verticalButtonAlignment']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    verticalbuttons: true,
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-soft-primary"
});
// Vertical buttons with custom icons
$("input[name='verticalButtonCustomIcon']").TouchSpin({
    verticalbuttons: true,
    verticalup: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>',
    verticaldown: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',
    buttondown_class: "btn btn-primary",
    buttonup_class: "btn btn-soft-primary"
});
// Init with empty value
$("input[name='initWithEmpty']").TouchSpin();
// Value attribute is not set
$("input[name='valueNotSet']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    initval: 40,
});
// Button postfix
$("input[name='buttonPostFix']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    postfix: "Button",
    postfix_extraclass: "btn btn-sm btn-outline-warning"
});
// Change button class
$("input[name='changeButtonClass']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    buttondown_class: "btn btn-link",
    buttonup_class: "btn btn-soft-danger"
});