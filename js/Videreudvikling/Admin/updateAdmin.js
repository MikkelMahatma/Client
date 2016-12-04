/**
 * Created by mikkelaltmann on 02/12/2016.
 */

//funktion der tillader Admin at opdatere sin bruger
$("#updateAdminButton").on("click", function() {
    var variable = confirm("Ønsker du at opdatere admin?");
    if (variable == true) {

        var user = {
            username: $("#newAdminUserName").val(),
            password: $("#newAdminPassword").val(),
            phonenumber: +$("#newAdminPhonenumber").val(),
            address: $("#newAdminAddress").val(),
            email: $("#newAdminEmail").val(),
            mobilepay: +$("#mobilepay").prop("checked"),
            cash: +$("#cash").prop("checked"),
            transfer: +$("#transfer").prop("checked")
        };

        SDK.Admin.updateadmin(user, function(err, data) {
            if (err) throw JSON.stringify(err);
            console.log(user.username);
        });

    }

    else {

        window.location.href = "adminpage.html";

    }


});