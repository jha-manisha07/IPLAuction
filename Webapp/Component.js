sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("IPL.Component",{
        metadata: {
            manifest: "json"
        }, // used to link manifest.json file
        init: function(){
    // this file is called at the starting of the component.js file and we call the base class constructor here so that everything is ready to be used
            //this line will call the base class constructor
            UIComponent.prototype.init.apply(this);
            //step1: inside the manifest.json file add the route view
            //step2: get the router object
            // var oRouter = this.getRouter();
            //step3"initilize the router 
            // oRouter.initialize();
        },


// here we will create our content
        createContent: function(){
            var oView = sap.ui.view({
                viewName: "IPL.view.App",
                id: "idAppView",
                type: "XML"
            });
            

//             //Step 1:Create View1 Object
            var oView1 = sap.ui.view({
                viewName: "IPL.view.playerlist",
                id: "idView1",
                type: "XML"
            });
            //Step 2:Create View2 Object
            var oView2 = sap.ui.view({
                viewName: "IPL.view.Details",
                id: "idView2",
                type: "XML"
            });
            var oView3 = sap.ui.view({
                viewName: "IPL.view.boughtPlayer",
                id: "idView3",
                type: "XML"
            });
//    //Step 3:Get The APP Container Control Object From App.view.xml
            var oAppCon = oView.byId("appCon");
            //Step 4:Inject the View1 and View2 inside the Container
            oAppCon.addMasterPage(oView1).addDetailPage(oView2).addPage(oView3);
            return oView;
        }
    });
});

           

