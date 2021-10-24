var database;
var gameState = 0;
var playerCount = 0;
function preload(){

}

function setup(){
createCanvas(windowWidth,windowHeight);
database = firebase.database();

}

function draw(){
background("green");
}