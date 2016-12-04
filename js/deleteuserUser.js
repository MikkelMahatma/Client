/**
 * Created by mikkelaltmann on 02/12/2016.
 */

$("#DeleteUserButton").on("click", function () {
    var variable = confirm("Ønsker du at slette din bruger?");
    if (variable == true) {

        SDK.User.getmyuser(function (err, data) {
            if (err) throw JSON.stringify(err);
            $("#DeleteUserButton").attr("data-userid", data.userId);
            console.log(data.userId)
        });
        var $deleteUser = $(this);

        var user = {
            id: $deleteUser.data("userid")
        };
        SDK.User.deletemyuser(user, function (err, data) {
            if (err) throw JSON.stringify(err);
            window.location.href = "index.html";

        })

    }

    else {

        window.close();

    }

    });