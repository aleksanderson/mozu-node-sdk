

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../constants');


module.exports = function(Client){
	return Client.sub({
		getTenant :Client.method({
			method: constants.verbs.GET,
			url: '{+homePod}api/platform/tenants/{tenantId}?responseFields={responseFields}'
		})	
	});
};
