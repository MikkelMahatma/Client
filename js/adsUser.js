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
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.price + "</td>" +
                //slet knappen skal kun komme når der er en bruger der er logget ind
                "<td><input type='button' value='Slet annonce' class='btn btn-success  btn-md DeleteAdButton' data-adid=" + ad.adId + "></td>" +
                "<td><input type='button' value='Rediger annonce' class='btn btn-primary btn-md showModal'  data-adid=" + ad.adId + "></td>" +
                //"<td><input type='button' value='Reserver annonce' class='btn btn-success btn-md ReserveAdButton' data-adid=" + ad.adId + "></td>" +
                "</tr>")
        });

        $(".showModal").on("click", function(){
            var adId = $(this).data("adid");
            $("#myModal").modal();
            $("#adIdInput").val(adId);
        });

        $(".DeleteAdButton").on("click", function () {
            var variable = confirm("Ønsker du at slette denne annonce?");
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

       /* $(".ReserveAdButton").on("click", function () {
            var variable = confirm("Ønsker du at reservere denne bog?");
            if (variable == true) {

                var $reserveAd = $(this);

                var ad = {
                    id: $reserveAd.data("adid")
                };
                SDK.Ad.reservead(ad, function (err, data) {
                    if (err) throw JSON.stringify(err);
                    location.reload();
                })
            }
            else {
                window.close();
            }
        });*/

        $(".UpdateAdButton").on("click", function () {

            var ad = {
                id: +$("#adIdInput").val(),
                comment: $("#newAdComment").val(),
                rating: +$("#newAdRating").val(),
                price: +$("#newAdPrice").val()

            };
            console.log(ad);

            SDK.Ad.updatemyads(ad, function (err, data) {
                if (err) throw JSON.stringify(err);
                console.log(ad.isbn);

                alert("Tillykke, du har nu opdateret en annonce!");
                location.reload();
            });

        });

    })

});

