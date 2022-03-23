

const {ccclass, property} = cc._decorator;

@ccclass
export default class ButtonControl extends cc.Component {
 @property(cc.Button)
 button:cc.Button = null;


 public static instance: ButtonControl;
onLoad(){
    ButtonControl.instance = this;
this.button.enabled = false;
this.button.node.active = false
}

ActiveButton(){
    this.button.enabled = true;
    this.button.node.active = true;
    
}


  
}
