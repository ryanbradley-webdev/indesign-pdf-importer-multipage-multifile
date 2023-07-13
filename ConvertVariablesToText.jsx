try{
    for(var i = 0; i < app.documents.length; i++){
        app.activeDocument.stories.everyItem().textVariableInstances.everyItem().remove();
    }
} catch(e) {
    alert("Something went wrong!\n" + e.message);
};