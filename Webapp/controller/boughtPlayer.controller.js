sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
    'use strict';
    return Controller.extend("IPL.controller.boughtPlayer",{
        onInit:function(){
           
            var oFilter = new Filter("bought", FilterOperator.EQ, 1);
            var aFilter =[oFilter];
            var oHL= this.getView().byId("HL");
            console.log("my Debugging ->  "+oHL.getBinding("items"));
            // // console.log("Printing OHL -->  "+oHL);
            // oHL.getBinding("items").filter(aFilter);
        },
        onBack: function(){
            this.getView().getParent().to("idView2");
        },
        selected: function(inp){
            if(inp){
                console.log("this is input"+ inp);
                return inp;
            }
        }
        
    });
});