sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/Filter" ,
    "sap/ui/model/FilterOperator"
 ], function (Controller, Filter , FilterOperator) {
    'use strict';
    var clickedIndex="";
    return Controller.extend("IPL.controller.playerlist", {
        
        playerPrice: function(price){
            if(price){
                var value = price.toString().concat(" Cr INR");
                return value;
            }
           
        },
        checkIdx: function(oEvent){
            if(oEvent && oEvent){

                console.log(oEvent)
                
            }
            console.log("hello world")
        },
        // we need to get the path of the row, on which the user clicked.
        showDetails: function(oEvent){
            // console.log(oEvent.getParameter("id"));
            var id = oEvent.getParameter("id");
            var idx="";
            for (let i = id.length-1; i>=0; i--) {
                if(id[i]=='-'){break;}
                else{
                    idx = id[i]+idx;
                }
              }
            var path=("/player/").concat(idx);
            //   console.log(idx);
            //   console.log(path);
              var oForm=new sap.ui.getCore().byId("idView2--myForm");
               oForm.bindElement(path);
               
              var oToolBar=new sap.ui.getCore().byId("idView2--toolBar");
               oToolBar.bindElement(path);
        },
        onSearch: function(oEvent){
            
            // step1: what is that user type in search field
             var sSearch= oEvent.getParameter("query");
            // step2: construct the filter object with operand and operator
            var oFilter  = new Filter("name", FilterOperator.Contains, sSearch);
            var oFilter2 = new Filter("type", FilterOperator.Contains, sSearch);
            var aFilter =[oFilter, oFilter2 ];
            var oMaster = new Filter ({
                filters: aFilter,
                and: false
            });
            //step3: get the list object
            var oList = this.getView().byId("idLST");
            //console.log(oList);
            //step4:inject the filter to the list
            oList.getBinding("items").filter(oMaster);
        }
    });
});