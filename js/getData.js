var data = ({});

function getData() {
    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "base.csv",
            dataType: "text",
            success: function(input) {processData(input);}
        });
    });

    function processData(csvText){
        var csvData = $.csv.toArrays(csvText);
        data = csvData;
        console.log(data);
        console.log(csvData);
    }
};