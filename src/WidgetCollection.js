let Widget = require('./Widget.js').Widget


class WidgetCollection{

  /**
  * @param (Widget[]) widgets
  */
  constructor(widgets){

    this.containsWidgets = function(widgets){

      if(widgets.length == 0){
        return true;
      }else{
        return (widgets[0] instanceof Widget);
      }
    }

     if(this.containsWidgets(widgets)){
       this.widgets = widgets;
     }else{
       this.widgets = [];
     }

  }

  push(widget){
    if( widget instanceof Widget){
      this.widgets.push(widget)
    }else{
      throw new Error(`Not a widget ${widget}`)
    }
  }

  pop(){
    return this.widget.pop();
  }

  get(index){
    if(index < 0 || index > (this.widgets.length - 1)){
      throw new Error("Index out of bounds");
    }
    return this.widgets[index];
  }

  size(){
    return this.widgets.length;
  }

}

module.exports={ WidgetCollection, Widget }
