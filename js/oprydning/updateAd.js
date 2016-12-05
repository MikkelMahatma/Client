/**
 * Created by mikkelaltmann on 29/11/2016.
 */

//skal nok ikke bruges, da funktionen bliver kørt inde i "adsUser"
$("#updateAdButton").on("click", function() {

    var ad = {
        isbn: +$("#newAdIsbn").val(),
        comment: $("#newAdComment").val(),
        rating: +$("#newAdRating").val(),
        price: +$("#newAdPrice").val()

    };
    console.log(ad);

    SDK.Ad.updatemyads(ad, function(err, data) {
        if (err) throw JSON.stringify(err);
        console.log(ad.isbn);

        alert("Tillykke, du har nu opdateret en annonce!");
        window.location.href = "adsUser.html";
    });

});