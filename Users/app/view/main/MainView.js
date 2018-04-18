
Ext.define('Users.view.main.MainView' ,{
	  extend: 'Ext.grid.Panel',
      alias: 'grid.mainview',

			store: 'Users.store.UserStore',

			width: 400,
	    height: 600,
	    title: 'Application Users',
	    columns: [
	        {
	            text: 'Name',
	            width: 180,
	            sortable: false,
	            hideable: false,
	            dataIndex: 'name'
	        },
	        {
	            text: 'Email Address',
	            width: 150,
	            dataIndex: 'email',
	            hidden: false
	        },
	        {
	            text: 'Phone Number',
	            flex: 1,
	            dataIndex: 'phone'
	        }
	    ],

	    dockedItems: [{
	    	xtype: 'toolbar',
	    	dock: 'top',
	    	items: [
	    	      {
	    	    	  xtype: 'button',
	    	    	  name: 'add',
	    	    	  text: 'Add',
	    	    	  itemId: 'addButton'
	    	      },
	    	      {
	    	    	  xtype: 'button',
	    	    	  name: 'edit',
	    	    	  text: 'Edit',
	    	    	  itemId: 'editButton'
	    	      },
							{
	    	    	  xtype: 'button',
	    	    	  name: 'refresh store',
	    	    	  text: 'refresh store',
	    	    	  itemId: 'refreshButton'
	    	      }
	    	      ] }]


});
