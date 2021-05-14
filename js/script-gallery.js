document.getElementById('bgColor').onchange = function () {
    document.getElementById("gallery-main-body").style.backgroundColor= document.getElementById('bgColor').value};

document.getElementById('txtColor').onchange = function () {
    document.getElementById("gallery-main-body").style.color= document.getElementById('txtColor').value};

function viewImage1() {
    var img = document.getElementById("resizeImage");
    var title= document.getElementById("heading");
    var imgText = document.getElementById("description");

    img.src = "../img/gallery/surfing.jpg";
    title.innerHTML = "Surfing";
    imgText.innerHTML="We're running a heap of camps throughout the year for everyone to get down to the beach and enjoy the sun, surf and some partying. All levels are welcome from beginner to mad wave shredding friends. Surfing Club operates all year round, even in the cooler months. ";

    img.parentElement.style.display = "block";
}
function viewImage2() {
    var img = document.getElementById("resizeImage");
    var title = document.getElementById("heading");
    var imgText = document.getElementById("description");

    img.src = "../img/gallery/kids.jpg";
    title.innerHTML = "Lessons for Kids";
    imgText.innerHTML="We define any group of classes as a “session”. Our standard session consists of eight  35-minute lessons. . For some students, one session of eight classes is sufficient to accomplish those objectives. Most students, however, need multiple sessions to become proficient swimmers.";

    img.parentElement.style.display = "block";
}
function viewImage3() {
    var img = document.getElementById("resizeImage");
    var title = document.getElementById("heading");
    var imgText = document.getElementById("description");

    img.src = "../img/gallery/rowing.jpg";
    title.innerHTML = "Rowing";
    imgText.innerHTML="Rowers haven't been called the world's most physically fit athletes for nothing.The sport demands endurance,strength, balance, mental discipline and ability to continue on when your body is demanding that you to stop.";

    img.parentElement.style.display = "block";
}
function viewImage4() {
    var img = document.getElementById("resizeImage");
    var title = document.getElementById("heading");
    var imgText = document.getElementById("description");

    img.src = "../img/gallery/waterpolo.jpg";
    var title = document.getElementById("heading");
    title.innerHTML = "Water Polo";
    imgText.innerHTML="Water Polo is a game of endurance and teamwork. The sport is played between two teams, each having six players and one goalkeeper. The sport is played in the water so the players must have swimming skills along with skills such as throwing, catching, and passing.";

    img.parentElement.style.display = "block";
}function viewImage5() {
    var img = document.getElementById("resizeImage");
    var title = document.getElementById("heading");
    var imgText = document.getElementById("description");

    img.src = "../img/gallery/swimming.jpg";
    title.innerHTML = "Swimming";
    imgText.innerHTML="You could swim forever, dive forever, be here in this underwater world forever. There is something about the motion of it that becomes natural after a while.Swimming is the act of driving our body through water and resisting drowning by moving our hands and feet. Get your knarly arses into gear and join the grooviest movement of this club.";

    img.parentElement.style.display = "block";
}