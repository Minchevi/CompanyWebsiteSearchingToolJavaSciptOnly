$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "base.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

function processData(csvText){
    var data = $.csv.toObjects(csvText);
    console.log(data);
}