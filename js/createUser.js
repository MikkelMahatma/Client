/**
 * Created by mikkelaltmann on 21/11/2016.
 */

$("#addNewUserButton").on("click", function() {

    var mobilepayIsChosen = 0;
    if($("input[name=mobilepay]:checked").val()) {
        mibilepayIsChosen = 1;
    }
        var cashIsChosen = 0;
        if($("input[name=mobilepay]:checked").val()) {
            cashIsChosen = 1;
    }
        var transferIsChosen = 0;
        if($("input[name=mobilepay]:checked").val()){
            transferIsChosen = 1;
    }

    var user = {
        username: $("newUserUserName").val(),
        password: $("newUserPassword").val(),
        phonenumber: parseInt($("newUserPhonenumber").val()),
        adress: $("newUserAdress").val(),
        email: $("newUserEmail").val(),

        mobilepay: mobilepayIsChosen,
        cash: cashIsChosen,
        transfer: transferIsChosen
    };

    SDK.User.create(user, function(err, data) {
        if (err) throw err;
        xhrFields: { withCredentials: true }
        console.log(user.username);

        window.location.href = "usercreated.html";
    });

});