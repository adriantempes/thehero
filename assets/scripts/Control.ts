import ArrowControl from "./ArrowControl";
import BoardPlay from "./BoardPlay";
import ButtonControl from "./ButtonControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Control extends cc.Component {
    
    @property(cc.SpriteFrame)
    turn: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    around:cc.SpriteFrame = null
   
  
 
    accLeft: boolean 
    accRight: boolean 
    jump: boolean
    chance: boolean
    @property(BoardPlay)
    boardplay: BoardPlay = null;
   
    

  
   public static instancee: Control;

    onLoad(){
        Control.instancee = this;
        this.accLeft = false;
        this.accRight = false;
        this.jump = false;
        
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        
   
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
     
        

   
    
    
}
    
    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    
    update(dt){
        if(this.node.position.y <= -500){
            this.node.removeFromParent(true);
        }
     
        
        if (this.accLeft) {
            this.node.x -= 500 * dt;
            this.getComponent(cc.Sprite).spriteFrame = this.turn;
            this.chance = true;
       
            

            
    }
         else if (this.accRight) {
            this.node.x += 500 * dt;
            this.getComponent(cc.Sprite).spriteFrame = this.around;
            this.chance = false;
            
        }
        
        
      if(this.node.y = -134){
          this.jump = true;
      }
      else if(this.node.y != -134) { 
          this.jump = false;
      }
    }
    ReSpawm(){
    
       var scene = cc.director.getScene().getChildByName('Canvas');
       var clone = cc.instantiate(this.node)
       scene.addChild(clone);
    //    clone.parent = scene;
    
       clone.setPosition(100,-130);
       

    }
    Jumpaction(){
      
     
            
            var jumpUp = cc.tween(this.node).by(0.3, {y: 200}, {easing: 'sineOut'}).start();
         
            var jumpDown = cc.tween(this.node).by(0.3, {y: -200}, {easing: 'sineIn'}).start();
    
            cc.tween(this.node).sequence(jumpUp, jumpDown).start();
         
    }
    DeadJumpaction(){
      
     
            
        
     
         
         cc.tween(this.node).by(1, {y: -500}, {easing: 'sineIn'}).start();

        

        
     
}
  
    onKeyDown(event){
       
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                console.log('Press a key');
                break;
            case cc.macro.KEY.w:
                    this.jump = true
                     this.Jumpaction();
                    
                     break;
            case cc.macro.KEY.space:
                   this.jump = true
                    this.Jumpaction();
                    console.log('Press a key');
                    break;
            case cc.macro.KEY.d:
                this.accRight = true;
                console.log('ngu nhu cho');
                break;
                
            case cc.macro.KEY.f:
                
                console.log("1")
                if(this.chance == false){
                    
                this.boardplay.SpawnArrow1(this.node.position.x,this.node.position.y)
                
                }
                else if (this.chance == true){
                   
                this.boardplay.SpawnArrow2(this.node.position.x,this.node.position.y)
                }
          
                break;
          
        }

    }

    onKeyUp(event){
       
        
            switch(event.keyCode) {
                case cc.macro.KEY.a:
                    this.accLeft = false;
                    break;
                case cc.macro.KEY.space:
                      this.jump = false
                        break;
              case cc.macro.KEY.w:
                 this.jump = false
                         break;
               
                case cc.macro.KEY.d:
                    this.accRight = false;
                    break;
                case cc.macro.KEY.f:
                        
                        break;
                  
            }
}
onCollisionEnter(other, self) {
  console.log(1123)
          
   if(other.node.group == "target" && self.node.group == "main"){   
      this.DeadJumpaction();
      BoardPlay.instance.StopRabbit();
      ButtonControl.instance.ActiveButton();
     
   }  


}
onCollisionExit(other, self) {
    
}


}
