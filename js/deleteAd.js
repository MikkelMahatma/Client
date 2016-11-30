/**
 * Created by mikkelaltmann on 25/11/2016.
 */
$("#DeleteAdButton").on("click", function() {

    var ad = {
        adid: +$("#deleteAdAdId").val()

    };
    console.log(ad);

    SDK.Ad.delete(ad, function(err, data) {
        if (err) throw JSON.stringify(err);
        console.log(ad.isbn);

        alert("Tillykke, du har nu slettet en ny annonce!");
        window.location.href = "myadsUser.html";
    });

});