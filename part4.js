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

    left.lastChild.onclick=
        function nextLevel (event){
            event.stopPropagation();
            left.innerHTML="";
            right.innerHTML="";

            if (numberOfFaces >= 50) {
                alert("You Win!")
            }
            else{
               numberOfFaces += 5;
                generateFaces();
            }
        };


    document.body.onclick =
        function gameOver (){
            alert("Game Over!");
             document.body.onclick = null;
            left.lastChild.onclick = null;
        };
}
generateFaces();

