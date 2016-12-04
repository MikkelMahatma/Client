/**
 * Created by mikkelaltmann on 01/12/2016.
 */
$("#ReserveAdButton").on("click", function () {
    window.alert("Er du sikker på at du vil reservere denne annonce?");

    var $reserveAd = $(this);

    var ad = {
        id: $reserveAd.data("adid")
    }
    SDK.Ad.reservead(ad, function (err, data) {
        if (err) throw JSON.stringify(err);
        location.reload();

    })


});