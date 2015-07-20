$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.txt",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

function processData(csvText){
    var data = $.csvText.toObjects(csvText);
    console.log(data);
}