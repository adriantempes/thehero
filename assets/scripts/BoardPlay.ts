import ArrowControl from "./ArrowControl";
import Control from "./Control";
const { ccclass, property } = cc._decorator;

@ccclass
export default class BoardPlay extends cc.Component {

  @property(cc.Prefab)
  arrow: cc.Prefab = null;
  @property(cc.Prefab)
  rabbit: cc.Prefab = null;

  arrowPool: cc.NodePool = null;
  rabbitPool: cc.NodePool = null;
  CurrentArrow: cc.Node = null;
  CurrentArrow1: cc.Node = null;
  CurrentRabbit: cc.Node = null;
  // start() {
  //   cc.director.getCollisionManager().enabled = true;
  // }

  public static instance: BoardPlay;

  onLoad() {

    BoardPlay.instance = this;
    this.arrowPool = new cc.NodePool();
    let initCount = 5;
    for (let i = 0; i < initCount; ++i) {
      let enemy = cc.instantiate(this.arrow);
      this.arrowPool.put(enemy)
    }

    this.rabbitPool = new cc.NodePool();
    let done = 5;
    for (let i = 0; i < done; i++) {
      let newrabbit = cc.instantiate(this.rabbit);
      this.rabbitPool.put(newrabbit)
    }

    this.RabbitNode = this.SpawnRabbit(-300, -141);
   
  }

  RabbitNode: cc.Node;
  SpawnAfterFall(){
    this.SpawnRabbit(-300, -141);
  }
  DespawnRabbit() {
    this.RabbitNode.setPosition(this.getRandomInt(-550,550), -141, 1)
    
  }
  getRandomInt(min, max) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  StopRabbit() {
    cc.tween(this.RabbitNode).by(1, {y: -500}, {easing: 'sineIn'}).start();


  }

  SpawnRabbit(a: number, b: number) {
    let position1 = new cc.Vec2(a, b)
    let rabiitt: cc.Node = null;
    if (this.rabbitPool.size() > 0) {
      rabiitt = this.rabbitPool.get();
    }
    else {
      rabiitt = cc.instantiate(this.rabbit)
    }
    rabiitt.parent = this.node
    rabiitt.setPosition(position1);

    return rabiitt
  }
  SpawnArrow1(a: number, b: number) {
    let position = new cc.Vec2(a, b)
    let arrrow: cc.Node = null;
    if (this.arrowPool.size() > 0) {
      arrrow = this.arrowPool.get();
    }
    else {
      arrrow = cc.instantiate(this.arrow);
    }
    arrrow.parent = this.node;

    arrrow.setPosition(position);
    arrrow.getComponent(ArrowControl).ArrowMove2();
    arrrow.setScale(1, 1, 1);




    return arrrow



  }

  SpawnArrow2(a: number, b: number) {
    let position = new cc.Vec2(a, b)
    let arrrow: cc.Node = null;
    if (this.arrowPool.size() > 0) {
      arrrow = this.arrowPool.get();
    }
    else {
      arrrow = cc.instantiate(this.arrow);
    }
    arrrow.parent = this.node;
    console.log("pos", a, b);
    arrrow.setPosition(position);
    arrrow.getComponent(ArrowControl).ArrowMove1();
    arrrow.setScale(-1, 1, 1);



    return arrrow



  }


}
