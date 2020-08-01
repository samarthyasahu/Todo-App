function addToList(myListItems){
    var inputText = document.getElementById("input").value;
    if(inputText.length === 0)
    {
        alert("Please enter some text!");
    }
    else
    {
        var li = document.createElement("LI");
        var text = document.createTextNode(inputText);
        li.appendChild(text);
        var span = document.createElement("SPAN");
        var text = document.createTextNode('\u00D7');
        span.appendChild(text);
        li.appendChild(span);
        document.getElementById("list").appendChild(li);
        // span.style.float="right";
        span.addEventListener('click', function(ev){
            // console.log(ev);
            ev.target.parentNode.remove();
        });
        document.getElementById("input").value="";
    }
}


var myListItems = document.getElementsByTagName("LI");
// console.log(myListItems);
var i;
for(i=0;i<myListItems.length;i++)
{
    var span = document.createElement("SPAN");
    var text = document.createTextNode('\u00D7');
    span.appendChild(text);
    myListItems[i].appendChild(span);
    // span.style.float="right";
}

var list = document.querySelector("ul");
list.addEventListener('click', function(ev){
    if(ev.target.tagName === "LI")
    {
        ev.target.classList.toggle("checked");
    }
});

var cross = document.querySelectorAll("li span");
var i;
for(i=0;i<cross.length;i++)
{
    cross[i].addEventListener('click', function(ev){
        // console.log(ev);
        ev.target.parentNode.remove();
    });
}


