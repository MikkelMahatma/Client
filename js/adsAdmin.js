/**
 * Created by mikkelaltmann on 01/12/2016.
 */
//adsAdmin

//Test
$(document).ready(function () {

//Fires on page-load
    SDK.Ad.show(function (err, data) {
        if (err) throw JSON.stringify(err);
        console.log(data);

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {
            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.price + "</td>" +
                //slet knappen skal kun komme når der er en bruger der er logget ind
                "<td><input role='button' value='Slet annonce' class='btn btn-success btn-md DeleteAdButton' data-adid="+ ad.adId + "></td>"+
                "</tr>")
        });

        $(".DeleteAdButton").on("click", function () {
            var variable = confirm("Ønsker du at slette denne annonce?");
            if (variable == true) {

                var $deleteAd = $(this);

                var ad = {
                    id: $deleteAd.data("adid")
                }
                SDK.Ad.delete(ad, function (err, data) {
                    if (err) throw JSON.stringify(err);
                    location.reload();

                })

            }

            else {

                window.close();

            }


        })

    });


});