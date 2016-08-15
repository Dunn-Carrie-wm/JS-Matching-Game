var numberOfFaces = 5;
var left = document.getElementById("left");

function generateFaces(){
    for (var i = 0; i < numberOfFaces; i++) {
        var img = document.createElement("img");
        img.src = "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/cool.png";
        img.style.top = Math.random() * 400 + "px";
        img.style.left= Math.random() * 400 + "px";
        left.appendChild(img);
    }
}
generateFaces();