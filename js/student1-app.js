function fade_out(){
    document.getElementById("presentation-modal-js").style.display="none";
}
setTimeout('fade_out();', 4000);

// ----------------------------------------------------------------------------------------------------//

function increaseSize() {
    var myElement = document.getElementById("pageContent");
    var style = window.getComputedStyle(myElement, null).getPropertyValue('font-size');
    var currentFontSize = parseFloat(style);
    myElement.style.fontSize = (currentFontSize + 2) + 'px';
}

function decreaseSize() {
    var myElement = document.getElementById("pageContent");
    var style = window.getComputedStyle(myElement, null).getPropertyValue('font-size');
    var currentFontSize = parseFloat(style);
    myElement.style.fontSize = (currentFontSize - 2) + 'px';
}

document.getElementById("increase").addEventListener('click', function () {
    increaseSize();
});
document.getElementById("decrease").addEventListener('click', function () {
    decreaseSize();
});

// ---------------------------------------------------------------------------------------------------------------- //

document.getElementById("pageContent").addEventListener("mouseover", function () {
    //this.style.color = "white"; // this keyword refers that that specific element
    this.style.fontWeight = "bold";});
document.getElementById("pageContent").addEventListener("mouseout", function () {
    //this.style.color = "whitesmoke";  // this keyword refers that that specific element
    this.style.fontWeight = "normal";});

// ----------------------------------------------------------------------------------------------------------------- //

function purchaseItem(){
    var inputName = document.getElementById("InputName").value;
    var itemPrice = document.getElementById("itemPrice").innerHTML;
    var itemTitle = document.getElementById("itemTitle").innerHTML;
    var numOfItems = document.getElementById("numOfItems").value;

    alert("Dear " + inputName + ", " + "thank you for your purchase of " + numOfItems + " " +
        itemTitle + "/(s)"  + " for " + itemPrice + " each.")
}



