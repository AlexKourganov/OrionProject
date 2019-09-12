$(document).ready(stickFooter);

$(window).resize(stickFooter);

function stickFooter() {
    console.log('iambeingcalled');
    if ($(window).height() > 1400) {
        $("#main-footer").addClass("fixed-bottom");

    } else {
        $("#main-footer").removeClass("fixed-bottom");
    }
}