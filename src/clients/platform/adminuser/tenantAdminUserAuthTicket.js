

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants');


module.exports = function(Client){
	return Client.sub({
		createUserAuthTicket :Client.method({
			method: constants.verbs.POST,
			url: '{+homePod}api/platform/adminuser/authtickets/tenants?tenantId={tenantId}&responseFields={responseFields}'
		}),
		refreshAuthTicket :Client.method({
			method: constants.verbs.PUT,
			url: '{+homePod}api/platform/adminuser/authtickets/tenants?tenantId={tenantId}&responseFields={responseFields}'
		}),
		deleteUserAuthTicket :Client.method({
			method: constants.verbs.DELETE,
			url: '{+homePod}api/platform/adminuser/authtickets/?refreshToken={refreshToken}'
		})	
	});
};
