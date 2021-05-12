//Create variables here
var dog
var happyDog
var database
var foodS,foodStock

function preload()
{
	//load images here
  happyDog = loadImage("images/dogImg.png")
  dogHappy= loadImage("images/dogImg1.png")
  

}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();
  console.log(database)

  dog = createSprite(250,250,30,30)
  dog.addImage(happyDog)
  dog.scale = 0.3

 foodStock = database.ref('Food')
  foodStock.on("value",readStock)


  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)
    dog.scale = 0.3
  }

  drawSprites();
  //add styles here
textSize(15)
fill("red")
text("Note:- Press UP_ARROW key to feed Drago milk",130,50)
}

function readStock(data){
  foodS = data.val();

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



