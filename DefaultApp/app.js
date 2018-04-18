/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'UsersApp.Application',

    name: 'UsersApp',

    requires: [
        // This will automatically load all classes in the UsersApp namespace
        // so that application classes do not need to require each other.
        'UsersApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'UsersApp.view.main.Main'
});
