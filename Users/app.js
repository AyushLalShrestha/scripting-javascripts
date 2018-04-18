Ext.onReady(function() {
	Ext.application({
	    appFolder: 'app',
		  name: 'Users',

    requires: [
      'Users.*'
      ],

		init: function() {
	     console.log('Users Application created!');
      },

		loadController: function(controllerName){
			var controller = this.getController( controllerName );
		},

	  launch: function() {
		  // Viewport Controller will need to be from the common project
      Ext.create('widget.component_viewport');
		  this.loadController('Users.controller.MainController');

    }


	});
});




// /*
//  * This file launches the application by asking Ext JS to create
//  * and launch() the Application class.
//  */
// Ext.application({
//     extend: 'Users.Application',
//
//     name: 'Users',
//
//     requires: [
//         // This will automatically load all classes in the Users namespace
//         // so that application classes do not need to require each other.
//         'Users.*'
//     ],
//
//     // The name of the initial view to create.
//     mainView: 'Users.view.main.Main'
// });
