/* Open when someone clicks on the span element */

function openNav() {

    document.getElementById("myNav").hidden = false;
    document.getElementById("myNav").style.left = "70%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {

    document.getElementById("myNav").hidden = true;
    document.getElementById("myNav").style.left = "100%";
}