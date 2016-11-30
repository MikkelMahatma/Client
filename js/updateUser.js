/**
 * Created by mikkelaltmann on 29/11/2016.
 */
$("#updateUserButton").on("click", function() {

    var user = {
        username: $("#newUserUserName").val(),
        password: $("#newUserPassword").val(),
        phonenumber: +$("#newUserPhonenumber").val(),
        address: $("#newUserAdress").val(),
        email: $("#newUserEmail").val(),
        mobilepay: +$("#mobilepay").prop("checked"),
        cash: +$("#cash").prop("checked"),
        transfer: +$("#transfer").prop("checked")
    };
    console.log(user);

    SDK.User.updateuser(user, function(err, data) {
        if (err) throw JSON.stringify(err);
        console.log(user.username);

        /*alert("Tillykke, du har nu opretet en bruger");*/
        window.location.href = "usercreated.html";
    });

});