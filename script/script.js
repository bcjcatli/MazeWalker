var coordinates = 0;
showTile(coordinates);


function showTile(n) {
    var coords = document.getElementsByClassName("tile");
    coords[n].style.display = "block";
}

function navigate() {
    var input = document.getElementsByName("move");
    var coords = document.getElementsByClassName("tile");

    for (var i = 0, length = input.length; i < length; i++) {
        if (input[i].checked) {
            coords[coordinates].style.display = "none";
            coordinates += parseInt(input[i].value);
        }
    }
    showTile(coordinates);
}

