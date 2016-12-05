/**
 * Created by mikkelaltmann on 29/11/2016.
 */
$(document).ready(function () {

//Fires on page-load
    SDK.Ad.showreservedads(function (err, data) {
        if (err) throw JSON.stringify(err);
        console.log(data);

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {
            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.bookIsbn + "</td>" +
                "<td>" + ad.userUsername + "</td>" +
                "<td>" + ad.userPhonenumber + "</td>" +
                //slet knappen skal kun komme når der er en bruger der er logget ind
                //"<td><input role='button' value='Slet annonce' class='btn btn-success  btn-md DeleteAdButton' data-adid=" + ad.adId + "></td>" +
                "<td><input role='button' value='Slet reservation' class='btn btn-success btn-md DeleteReservedAdButton' data-adid="+ ad.adId + "></td>"+
                "</tr>")
        });

        $(".DeleteReservedAdButton").on("click", function () {
            window.alert("Er du sikker på at du vil slette annoncen?");

            var $deleteAd = $(this);

            var ad = {
                id: $deleteAd.data("adid")
            }
            SDK.Ad.deletereservation(ad, function (err, data) {
                if (err) throw JSON.stringify(err);
                location.reload();

            })

        })

    });


});