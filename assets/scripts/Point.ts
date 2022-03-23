

const {ccclass, property} = cc._decorator;

@ccclass
export default class Point extends cc.Component {
    private label :any = null;
    text:number = 1;
    public static instance: Point;
    onLoad(){
        Point.instance = this;
    }
   getPoint(){
    // this.text = this.text++
    this.label = this.getComponent(cc.Label)
    this.label.string = this.text
   }



   
}
