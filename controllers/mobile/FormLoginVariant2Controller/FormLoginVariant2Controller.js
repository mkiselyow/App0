define({ 

 //Type your controller code here 
  var params = {“title” : “My Title”, “description” : “My description”};
  var x = new kony.mvc.Navigation(“FormFriendlyName”);
  x.navigate(params);
 });