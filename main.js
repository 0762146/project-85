canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

c1_height=90;
c1_width=100;

c1_xposition=10;
c1_yposition=10;


b_image = "Race_Track.jpeg";
c1_image="car1.png";
console.log("b_image="+b_image);

function add(){
    bg = new Image();
    bg.onload = uploadBackground();
    bg.src = b_image;

    c1 = new Image();
    c1.onload = uploadcar1();
    c1.src = c1_image;
}

function uploadBackground(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(c1, c1_xposition, c1_yposition, c1_width, c1_height);
}

window.addEventListener("keydown", my_keydown); 
    function my_keydown(e){
        keyPressed = e.keyCode;
        if (keyPressed == '38'){
            console.log("up");
            up();
        }
        else if (keyPressed == '37'){
            console.log("left");
            left(); 
        }
        else if (keyPressed == '40'){
            console.log("down");
            down(); 
        }
        else if (keyPressed == '39'){
            console.log("right");
            right(); 
        }
    }
    
    function up() {
        if(c1_yposition >= 0) {
            c1_yposition = c1_yposition-10;
            console.log("when up arrow is pressed, x="+c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();

        }
    }
    function down() {
        if(c1_yposition <= 500) {
            c1_yposition = c1_yposition+10;
            console.log("when up arrow is pressed, x="+ c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();

        }
    }

    function left() {
        if(c1_xposition >= 0) {
            c1_xposition = c1_xposition-10;
            console.log("when up arrow is pressed, x="+ c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();

        }
    }
    
    function right() {
        if(c1_xposition <= 700) {
            c1_xposition = c1_xposition+10;
            console.log("when up arrow is pressed, x="+ c1_xposition+" | y="+c1_yposition );
            uploadBackground();
            uploadcar1();

        }
    }





c2_height=90;
c2_width=100;

c2_xposition=50;
c2_yposition=50;

c2_image="car2.png";

function add(){
    bg = new Image();
    bg.onload = uploadBackground;
    bg.src = b_image;

    c2 = new Image();
    c2.onload = uploadcar2;
    c2.src = c2_image;
}

function uploadcar2(){
    ctx.drawImage(c2, c2_xposition, c2_yposition, c2_width, c2_height);
}

window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
        keyPressed = e.keyCode;
        if (keyPressed == '88'){
            console.log("up");
            up2();
        }
        else if (keyPressed == '65'){
            console.log("left");
            left2(); 
        }
        else if (keyPressed == '83'){
            console.log("down");
            down2(); 
        }
        else if (keyPressed == '67'){
            console.log("right");
            right2(); 
        }
        
    }    

    function up2() {
        if(c2_yposition >= 0) {
            c2_yposition = c2_yposition-10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
            uploadcar2();
        }
    }
    function down2() {
        if(c2_yposition <= 500) {
            c2_yposition = c2_yposition+10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
            uploadcar2();
        }
    }
    function left2() {
        if(c2_xposition >= 0) {
            c2_xposition = c2_xposition-10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
            uploadcar2();
        }
    }
    function right2() {
        if(c2_xposition <= 700) {
            c2_xposition = c2_xposition+10;
            console.log("when up arrow is pressed, x="+ c2_xposition+" | y="+c2_yposition );
            uploadBackground();
            uploadcar2();
        }
    }