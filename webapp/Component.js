sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"BikeRentalApp/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("BikeRentalApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// enable hash-based routing 
			// call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();
            
			sap.ui.getCore().loadLibrary("openui5.googlemaps", "libs/openui5/googlemaps/");
		}
	});
});