/**
 * Created by mikkelaltmann on 29/11/2016.
 */
/**
 * Created by mikkelaltmann on 21/11/2016.
 */
//adds

//Test
$(document).ready(function () {

//Fires on page-load
    SDK.Ad.showuser(function (err, data) {
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
                "<td><a role='button' id='DeleteAdButton' class='btn btn-success btn-lg' data-adid="+ ad.adId + ">Slet annonce</a></td>"+
                "</tr>")
        });

    $("#DeleteAdButton").on("click", function () {
        window.alert("Er du sikker på at du vil slette annoncen?");

            var $deleteAd = $(this);

            var ad = {
                id: $deleteAd.data("adid")
            }
        SDK.Ad.delete(ad, function (err, data) {
            if (err) throw JSON.stringify(err);
            location.reload();

        })

    })

    });


});

