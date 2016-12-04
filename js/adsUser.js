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
    SDK.Ad.showuserads(function (err, data) {
        if (err) throw JSON.stringify(err);
        console.log(data);

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {
            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.bookIsbn + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.price + "</td>" +
                //slet knappen skal kun komme når der er en bruger der er logget ind
                "<td><input role='button' value='Slet annonce' class='btn btn-success  btn-md DeleteAdButton' data-adid=" + ad.adId + "></td>" +
                "<td><a role='button' id='UptateAdButton' class='btn btn-success btn-md' href='/Client/HTML/updateadUser.html' data-adid=" + ad.adId + ">Rediger annonce</a></td>" +
                "<td><input role='button' value='Reserver annonce' class='btn btn-success btn-md ReserveAdButton' data-adid=" + ad.adId + "></td>" +
                "</tr>")
        });

        $(".DeleteAdButton").on("click", function () {
            var variable = confirm("Ønsker du at reservere denne bog?");
            if (variable == true) {

                var $deleteAd = $(this);

                var ad = {
                    id: $deleteAd.data("adid")
                };
                SDK.Ad.delete(ad, function (err, data) {
                    if (err) throw JSON.stringify(err);
                    location.reload();
                });
            }
            else {
                window.close();
            }
            });

            $(".ReserveAdButton").on("click", function () {
                //window.alert("Er du sikker på at du vil reservere denne annonce?");
                var variable = confirm("Ønsker du at reservere denne bog?");
                if (variable == true) {

                    var $reserveAd = $(this);

                    var ad = {
                        id: $reserveAd.data("adid")
                    }
                    SDK.Ad.reservead(ad, function (err, data) {
                        if (err) throw JSON.stringify(err);
                        location.reload();

                    })

                }

                else {

                    window.close();

                }


            })

        })

});

