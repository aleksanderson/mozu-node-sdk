

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../client'), constants = Client.constants;

module.exports = Client.sub({
	getEvents: Client.method({
		method: constants.verbs.GET,
		url: '{+homePod}api/event/pull/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getEvent: Client.method({
		method: constants.verbs.GET,
		url: '{+homePod}api/event/pull/{eventId}?responseFields={responseFields}'
	})
});
