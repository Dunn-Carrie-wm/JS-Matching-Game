var numberOfFaces = 5;
var left = document.getElementById("left");
var right =document.getElementById("right");

function generateFaces(){
    for (var i = 0; i < numberOfFaces; i++) {
        var img = document.createElement("img");
        img.src = "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/cool.png";
        img.style.top = Math.random() * 400 + "px";
        img.style.left= Math.random() * 400 + "px";
        left.appendChild(img);
    }
    var leftImage=left.cloneNode(true);
    leftImage.removeChild(leftImage.childNodes[leftImage.childNodes.length -1]);
    right.appendChild(leftImage);

}
generateFaces();

