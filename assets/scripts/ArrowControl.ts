import Control from "./Control";
import BoardPlay from "./BoardPlay";
import Point from "./Point";
const { ccclass, property } = cc._decorator;

@ccclass
export default class ArrowControl extends cc.Component {

    @property(cc.SpriteFrame)
    left: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    right: cc.SpriteFrame = null;
    // @property(cc.Node)
    // point : cc.Node = null;
    
    accRight1: boolean;
    accLeft1: boolean;
    lul: number = 400;
    arrowturn: boolean;
    private label :any = null;
    text : number = 0;
    
    start() {
        // this.label = this.point.getComponent(cc.Label)
        cc.director.getCollisionManager().enabled = true;
    }
    onLoad() {
        this.accLeft1 = false;
        this.accRight1 = false;
      
    }
update (dt){
    if (this.node.position.x < -608 || this.node.position.x > 608) {
        this.node.removeFromParent(true);
    }
}


   
    ArrowMove1() {

        cc.tween(this.node)
            .to(0.4, { position: cc.v3(-700, -127) })
            .start()
    }
    ArrowMove2() {

        cc.tween(this.node)
            .to(0.4, { position: cc.v3(700, -127) })
            .start()
    }
    onCollisionEnter(other, self) {
        if(other.node.group == "target" && self.node.group == "arrow"){
        
          
        
        BoardPlay.instance.arrowPool.put(this.node)
          
     
        Point.instance.getPoint();
        Point.instance.text = Point.instance.text + 1

          BoardPlay.instance.DespawnRabbit();
        }


    }
    onCollisionExit(other, self) {
        console.log('on collision exit');
    }

}
