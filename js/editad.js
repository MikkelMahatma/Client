/**
 * Created by mikkelaltmann on 29/11/2016.
 */
$("#addNewAdButton").on("click", function() {

    var ad = {
        isbn: +$("#newAdIsbn").val(),
        comment: $("#newAdComment").val(),
        rating: +$("#newAdRating").prop("checked"),
        price: +$("#newAdPrice").val()

    };
    console.log(ad);

    SDK.Ad.create(ad, function(err, data) {
        if (err) throw JSON.stringify(err);
        console.log(ad.isbn);

        alert("Tillykke, du har nu opretet en ny annonce!");
        window.location.href = "adsUser.html";
    });

});