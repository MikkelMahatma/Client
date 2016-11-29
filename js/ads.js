/**
 * Created by mikkelaltmann on 21/11/2016.
 */
//adds

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
                /*"<td><a role='button' id='DeleteAdButton' href='#' class='btn btn-success btn-lg' >slet annonce</a></td>"*/
                "</tr>")
        });

    });


});


/*$(document).ready(function () {

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
 //slet knappen skal kun komme når der er en bruger der er logget ind
 "<td><a role='button' id='DeleteAdButton' href='#' class='btn btn-success btn-lg' >slet annonce</a></td>" +
 "</tr>"
 );
 })
 },
 error: function (data, status, error) {
 console.log(data, status, error);
 }
 });
 });*/