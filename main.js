var canvas=document.getElementById("mycanvas");
ctx=canvas.getcontext("2d");
nasa_images_array=[
    "NASA1.jpg",
    "NASA2.jpg",
    "NASA3.jpg"
];
var random_number=Math.floor(Math.random()*3);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
    background_image_t=new Image();
    background_image_t.onload=uploadBackground;
    background_image_t.src=background_image;
    rover_image_t=new Image();
    rover_image_t.onload=uploadRover;
    rover_image_t.src=rover_image;
}
background_image=nasa_images_array[
    random_number
];
console.log(background_image)
function uploadBackground(){
    ctx.drawImage(background_image_t,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_image_t,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    if (keyPress=="38") {
        up();
        console.log("up");
    }
    if (keyPress==40) {
        down();
        console.log("down");
    }
    if (keyPress==39) {
        right();
        console.log("right");
    }
    if (keyPress==37) {
        left();
        console.log("left");
    }
       
}
function up() {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function down() {
    if (rover_y<=500) {
        rover_y=rover_y+10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function right() {
    if (rover_x<=700) {
        rover_x=rover_x+10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function left() {
    if (rover_x>=0) {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadRover();
        
    }
}