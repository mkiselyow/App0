// USERNAME = "John@kony.com";
// PASSWORD = 123456;

// function validateUser() {
//   var userName = FormLoginVariant2.TextField0g0e685fdfb9d43.text;
//   var password = FormLoginVariant2.CopyTextField0i687b0214b454d.text;
  
//   if (userName == USERNAME && password == PASSWORD) {
//     createWidget();
//     FormLogOut.show();
//   } else {
//     var basicProperties = {message: "User Login&&Password is OK", 
//                       alertType: consistants.ALERT_TYPE_INFO, 
//                       alertTitle: "Validation",
//                       yesLabel: "OK",
//                       alertHandler: alertCallback};
//     var platformSpecificProperties = {};
//     kony.ui.Alert(basicProperties, platformSpecificProperties);
//   }
// }

// function createWidget() {
//   var lblBasic = {id: "Label11112", skin: "defLabel", text: "Welcome John", isVisible: true};
//   var lblLayout = {top: 160, left: 100};
//   var lblPsp = {renderAsAnchor: true, wrapping: constants.WIDGET_TEXT_WORD_WRAP};
  
//   var lbl = new kony.ui.Label(lblBasic, lblLayout, lblPsp);
//   FormLogOut.FlexContainer0d7752dcb1eb44a.add(lbl);
// }

// function defineLoginOnClick(){
//   FormLoginVariant2.Button0f7f81d401c2c4d.onClick = valiateUser();
// }

