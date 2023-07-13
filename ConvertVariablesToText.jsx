try{
for(var i = 0; i < app.documents.length; i++){
app.activeDocument.stories.everyItem().textVariableInstances.everyItem().convertToText();}
}catch(e){alert("Something went wrong!r" + e);};