/**
 * Created by mikkelaltmann on 02/12/2016.
 */

//adds

//Test
$(document).ready(function () {

//Fires on page-load
    SDK.Admin.showusers(function (err, data) {
        if (err) throw JSON.stringify(err);
        console.log(data);

        var $userTableBody = $("#userTableBody");
        data.forEach(function (admin) {
            $userTableBody.append(
                "<tr>" +
                "<td>" + admin.username + "</td>" +
                "<td>" + admin.email + "</td>" +
                "<td>" + admin.phonenumber + "</td>" +
                "<td>" + admin.address + "</td>" +
                //slet knappen skal kun komme når der er en bruger der er logget ind
                "<td><input role='button' value='Slet bruger' class='btn btn-success btn-md DeleteUserButton' data-userid=" + admin.userId + "></td>" +
                "</tr>")
        });

        $(".DeleteUserButton").on("click", function () {
            window.alert("Er du sikker på at du vil slette brugeren?");

            var $deleteUser = $(this);

            var user = {
                id: $deleteUser.data("userid")
            };
            SDK.Admin.deleteuser(user, function (err, data) {
                if (err) throw JSON.stringify(err);
                location.reload();

            })

        })

    });


});

