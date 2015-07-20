$(function () {
    // Attach on 'keyup' for live update
    //('change' fires when the focus is lost)
    $("#tb-filter").on('keyup', function () {
        var value,
            $companies;
        value = $(this).val().toLowerCase();

        if (value.length > 2) {
            data.forEach(function(company){
                var companyName = company[1].toLowerCase();

                if(companyName.indexOf(value) > -1){
                    // TODO: get data from the variables and send to displayData !
                }
            });

        }
    });
});