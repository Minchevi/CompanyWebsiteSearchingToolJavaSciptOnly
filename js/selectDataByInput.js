$(function () {
    // Attach on 'keyup' for live update
    //('change' fires when the focus is lost)
    $("#tb-filter").on('keyup', function () {
        var value,
            $companies;
        value = $(this).val().toLowerCase();
        var data1 = data[0];
        console.log(data1);
        if (value.length > 2) {

            //$regex = '%' + value + '%';
            //console.log($regex);
            data.forEach(function(company){
                var companyName = company[1].toLowerCase();
                console.log(companyName);
                if(companyName.indexOf(value) > -1){
                    // TODO: get data from the variables and send to displayData !
                }
            });

        }
    });

    //$.ajax({
//
    //}).success(function (respCountries) {
    //    var $countriesList = createCountriesList(respCountries);
    //    $('#countries').html($countriesList);
    //});
});