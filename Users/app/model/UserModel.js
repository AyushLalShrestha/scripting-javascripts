/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Users.model.UserModel', {
   extend: 'Ext.data.Model',
   fields: [
       { name: 'id', type: 'int' },
       { name: 'name', type: 'string' },
       { name: 'email', type: 'string' },
       { name: 'phone', type: 'string' }
   ]
});
