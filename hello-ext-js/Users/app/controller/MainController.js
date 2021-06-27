/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Users.controller.MainController', {
    extend: 'Ext.app.Controller' ,
    alias: 'app-main',
    stores:[
        'Users.store.UserStore'
    ],
    views: [
        'Users.view.main.MainView'
        // 'widget.main_view'
    ],
    requires: [
        'Users.controller.FormController'
    ],

    refs: [
      { ref: 'editButton', selector: 'button#editButton'},
      { ref: 'addButton', selector: 'button#addButton' },
      { ref: 'refreshButton', selector: 'button#refreshButton' },
      { ref: 'postFakeDataButton', selector: 'button#postFakeDataButton' }
    ],

    grid: undefined,

    init: function () {
      console.log("The MainController has been initialized");
      var store = this.getStore( 'Users.store.UserStore' );
      var Grid = this.getView( 'Users.view.main.MainView' );
      this.grid = Ext.create(Grid);
      this.addComponent(this.grid);
      this.getAddButton().on( 'click' , this.add, this );
      this.getEditButton().on( 'click' , this.edit, this );
      this.getRefreshButton().on( 'click' , this.refreshStore, this );
      this.getPostFakeDataButton().on( 'click' , this.postFakeData, this );
    },
    add: function (button) {
      var controller = this.application.getController('Users.controller.FormController');
      controller.show();

      this.application.on('FORM_CONTROLLER_ADD', this.onFormControllerAdd, this);
      this.application.on('FORM_CONTROLLER_CLOSED', this.onFormControllerClosed, this);
    },
    edit: function (button) {
      var controller = this.application.getController('Users.controller.FormController');
      var data = this.getSelectedRecord().getData();
      controller.show(data);

      this.application.on('FORM_CONTROLLER_EDIT', this.onFormControllerEdit, this);
      this.application.on('FORM_CONTROLLER_CLOSED', this.onFormControllerClosed, this);
    },
    refreshStore: function(button) {
      var store = this.getStore( 'Users.store.UserStore' );
      store.reload();
      //var new_data = store.getProxy().getReader().rawData.users;
      //this.getView().query('grid')[0].reconfigure(store, new_data);
    },
    postFakeData: function(button) {
      alert("data posted");
      Ext.Ajax.request({
        url : 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        // body: JSON.stringify({
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1
        //   }),
        params: {
            title: "Ayush",
            body: 'bar',
            userId: 123
        },
        success: function(response) {
          Ext.Msg.alert("Success", 'yea');
          },
        failure: function(){console.log('failure');}
        });
    },

    getSelectedRecord: function () {
      return this.grid.getSelectionModel().getSelection()[0];
    },

    onFormControllerAdd: function (values) {
      this.grid.store.add(values);
    },

    onFormControllerEdit: function (values) {
      var selectedRecord = this.getSelectedRecord();
      Ext.Object.each(values, function (key, value) {
        selectedRecord.set(key, value);
      }, this);
    },

    onFormControllerClosed: function () {
      this.application.un('FORM_CONTROLLER_ADD', this.onFormControllerAdd, this);
      this.application.un('FORM_CONTROLLER_EDIT', this.onFormControllerEdit, this);
      this.application.un('FORM_CONTROLLER_CLOSED', this.onFormControllerClosed, this);
    },

    addComponent : function (component) {
      var viewport = Ext.ComponentQuery.query( 'component_viewport' )[0];
      //var viewport = Ext.ComponentQuery.query('viewport')[0];
      viewport.add(component);
      //viewport.doLayout();
    }
});
