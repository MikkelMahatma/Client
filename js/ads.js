/**
 * Created by mikkelaltmann on 21/11/2016.
 */
//adds
$(document).ready(function () {

    var $adsTableBody = $("#adsTableBody");
    $.ajax({
        method: "GET",
        xhrFields: {withCredentials: true},
        dataType: "json",
        url: "https://localhost:8000/getads",
        success: function (ads, status, xhr) {
            ads.forEach(function (ad) {

                $adsTableBody.append(
                    "<tr>" +
                    "<td>" + ad.bookTitle + "</td>" +
                    "<td>" + ad.bookAuthor + "</td>" +
                    "<td>" + ad.bookEdition + "</td>" +
                    "<td>" + ad.isbn + "</td>" +
                    "<td>" + ad.rating + "</td>" +
                    "<td>" + ad.comment + "</td>" +
                    "<td>" + ad.price + "</td>" +
                    "</tr>"
                );
            })
        },
        error: function (data, status, error) {
            console.log(data, status, error);
        }
    });
});