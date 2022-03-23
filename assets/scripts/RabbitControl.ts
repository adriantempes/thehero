

const { ccclass, property } = cc._decorator;

@ccclass
export default class RabbitControl extends cc.Component {
  @property(cc.SpriteFrame)
  left: cc.SpriteFrame = null;
  @property(cc.SpriteFrame)
  right: cc.SpriteFrame = null;
  onLoad() {
   

    

  }
  velocity: number = 300;
  update(dt) {
    if(this.node.position.y <= -400){
      this.node.destroy();
    }
    this.node.x += this.velocity * dt
    if (this.node.position.x < -608) 
    {
       this.node.position = cc.v3(-608, this.node.y, this.node.x);
      this.velocity *= -1;
      this.node.setScale(1, 1, 1)
    }
    if (this.node.position.x > 608) 
    {
       this.node.position = cc.v3(608, this.node.y, this.node.x);
      this.velocity *= -1;

      this.node.setScale(-1, 1, 1)
    }
  }
  

}





