var express = require('express');
var router = express.Router();

const list = [];
for(var i = 0; i < 10000; i++) {
  list.push({
		"_data": {
			"ConversationId": "0A94C3CADC81394EA7D48861D5ECD2F3",
			"Summary": "<p style='direction:ltr'>This message contains graphics. If you do not see the graphics,  click here to view.\r\nGartner Digital Workplace Summit 2017\r\n25 – 26 September, 2017 | London, UK\r\ngartner.com/eu/workplace\r\n...</p>",
			"LastMail": 1486634511.233,
			"ConversationTopic": "<p style='direction:ltr'>Daniel, can I have your input?</p>",
			"Count": 0,
			"Mails": null,
			"EmailskmIds": [
				"e4b88f63-8ba7-469f-9dba-b51b09938618"
			],
			"Participants": [{
				"Fullname": "Cindy Strachan",
				"Firstname": "Cindy",
				"Lastname": "Strachan",
				"Email": "gartner.events@gartner.com",
				"IsMe": false,
				"DisplayName": "Cindy",
				"kmId": "f9e79145-a171-462d-a730-e006bfa1774f"
			}],
			"Score": 0,
			"Deleted": false,
			"Done": false,
			"UnRead": false,
			"HaveDraft": false,
			"Folders": [{
				"kmId": "2a4c3e62-73a9-4e07-a445-4420aa05bb52",
				"FolderId": "0000000099467B5A36970E459F3F10E014F47C1B010038B462D3D43B2E4891E1A69B75E8305000000000010C0000",
				"FolderPath": "\\\\Daniel.Jaffe@knowmail.me\\Inbox",
				"FolderName": "Inbox",
				"StoreId": "0000000038A1BB1005E5101AA1BB08002B2A56C20000454D534D44422E444C4C00000000000000001B55FA20AA6611CD9BC800AA002FC45A0C00000044616E69656C2E4A61666665406B6E6F776D61696C2E6D65002F6F3D45786368616E67654C6162732F6F753D45786368616E67652041646D696E6973747261746976652047726F7570202846594449424F484632335350444C54292F636E3D526563697069656E74732F636E3D39353664366261643166666534396436396639626163363338393665373262622D44616E69656C2E4A61666600E94632F4440000000200000010000000440061006E00690065006C002E004A00610066006600650040006B006E006F0077006D00610069006C002E006D00650000000000",
				"Included": false,
				"Type": 1
			}],
			"Later": null,
			"IsDue": false,
			"IsMute": false,
			"Base64Image": "",
			"LastSender": null,
			"HaveTodo": false,
			"HaveToFollow": false,
			"HaveAttachment": false,
			"kmId": "01a803b0-0be3-4308-8f72-720cc7908736",
			"HaveMeeting": false,
			"ConversationClass": "IPM.Note",
			"SecsToRead": 125,
			"isPromoted": false,
			"ReturnedFromLater": false,
			"ReturnedFromLaterDue": null,
			"IsImportant": false,
			"listType": "inbox",
      "Read": false
		},
		"Type": 1,
		"GroupId": -2,
		"ItemId": 1,
		"ConversationNumber": 0,
		"IsEOL": false,
		"kmId": "01a803b0-0be3-4308-8f72-720cc7908736"
	})
}

let page = 1;
function paginate(list, page) {
  let numItems = 200;
  const currentPage = parseInt(page);
  const perPage = parseInt(numItems);
  const offset = ( page - 1 ) * perPage;
  return list.slice(offset, offset + perPage);
}



router.get('/', function(req, res, next) {
  res.json(paginate(list, page++));
});

module.exports = router;
