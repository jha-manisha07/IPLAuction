sap.ui.define([
    'sap/ui/core/mvc/Controller',
 ], function (Controller) {
    'use strict';
    return Controller.extend("IPL.controller.Details", {
        checkIdx: function(oEvent){
            if(oEvent){

                console.log(oEvent)
                
            }
        },
            addBtn: function() {
            
            var toolBar1= this.getView().byId("toolBar");
            // console.log(toolBar1.getBindingContext().getPath());
            var path = (toolBar1.getBindingContext().getPath()).concat("/bought");
            // var path = toolBar1.getBindingContext().getPath();
            var bought=this.getView().getModel().getProperty(path);
            // var val   = bought.getProperty(bought).
            // console.log("before manipulating "+bought);

            var bought=this.getView().getModel().setProperty(path,1);
            // var bought=this.getView().getModel().setProperty(1);
                // debugger;
            bought=this.getView().getModel().getProperty(path);
            // console.log("After manipulating "+bought);
        },
        // cancel button code
        cancelBtn: function(){
            var btn1 =this.getView().byId("idBtn1");
            btn1.setText("Remove Player");
        },
         // My Team button code
        seeBtn: function(){
            // console.log("hello world");
            var detailObj = this.getView().getParent();
            detailObj.to("idView3");
            // var tile = new this.getView().byId("myPage");
           
            // tile.bindAggregation("/player");
        },
       
        onBack:function(){
            var detailObj = this.getView().getParent();
            detailObj.to("idView2"); 
        }
    });
});