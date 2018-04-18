Ext.define('Users.store.UserStore', {
	    extend: 'Ext.data.Store',
			model: 'Users.model.UserModel',
				proxy: {
					 type: 'ajax',
					 url : 'data/users.json',
					 success: function(r) { alert(r); },
					 reader: {
						 successProperty: 'success',
						 type:'json',
						 rootProperty: 'users'
							},
					},
				autoLoad: true
	});
