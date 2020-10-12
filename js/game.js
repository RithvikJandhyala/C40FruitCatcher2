class Game {
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                     index = index+1;
                     
                     x = 500- (allPlayers[plr].distance);
                     y=  500;
                     players[index-1].x = x;
                     players[index-1].y = y;
                     if(index === player.index){
                         fill("red");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);  
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance-=10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                     
                 }
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects.
                     console.log("fruitGroup.length");
                     console.log(fruitGroup.length);
                     for(var i =0 ; i<fruitGroup.length; i++){
                        console.log("hi");
                         var myfruit = fruitGroup.get(i);
                         var object1 = myfruit;
                         var object2 = player1;
                         var object3 = player2;
                         //console.log("hi");
                         
                         if (abs(object1.x - object2.x) < object2.width/2 + object1.width/2
                            && abs(object1.y - object2.y) < object2.height/2 + object1.height/2) {
                          //object1.velocityX = object1.velocityX * (-1);
                          //object2.velocityX = object2.velocityX * (-1);
                          object1.visible=false;
                          score1 = score1+1;
                          
        
                        }

                        if (abs(object1.x - object3.x) < object3.width/2 + object1.width/2
                         && abs(object1.y - object3.y) < object3.height/2 + object1.height/2) {
                        //object1.velocityX = object1.velocityX * (-1);
                        //object2.velocityX = object2.velocityX * (-1);
                        object1.visible=false;
                        score2 =score2 +1;
                        
                       }

                       /*

                        if (object1.x - object2.x < object2.width/2 + object1.width/2
                            && object2.x - object1.x < object2.width/2 + object1.width/2) {
                          //object1.velocityX = object1.velocityX * (-1);
                          //object2.velocityX = object2.velocityX * (-1);
                          object1.visible=false;
                        }
                        if (object1.y - object2.y < object2.height/2 + object1.height/2
                          && object2.y - object1.y < object2.height/2 + object1.height/2){
                          //object1.velocityY = object1.velocityY * (-1);
                          //object2.velocityY = object2.velocityY * (-1);
                          object1.visible=false;
                        }
                       
                        if (object1.x - object3.x < object3.width/2 + object1.width/2
                            && object3.x - object1.x < object3.width/2 + object1.width/2) {
                          //object1.velocityX = object1.velocityX * (-1);
                          //object2.velocityX = object2.velocityX * (-1);
                          object1.visible=false;
                        }
                        if (object1.y - object3.y < object3.height/2 + object1.height/2
                          && object3.y - object1.y < object3.height/2 + object1.height/2){
                          //object1.velocityY = object1.velocityY * (-1);
                          //object2.velocityY = object2.velocityY * (-1);
                          object1.visible=false;
                        }
                        */
                        }
                        text("Player1: " + score1,100,100);
                        text("Player2: " + score2,100,150);
                        
                         
                         }

                     
                     
                  
                

         
         
        
         

    }
    
    end(){
       console.log("Game Ended");
    }
}