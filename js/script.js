/**
 * Created by mikkelaltmann on 21/11/2016.
 */


//vis annoncer
$(document).ready(function () {
    $(document).ready(function () {

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
                        "</tr>"
                    );
                })
            },
            error: function (data, status, error) {
                console.log(data, status, error);
            }
        });
    });
    //vis bøger
    $(document).ready(function () {
        var $booksTableBody = $("#booksTableBody");

        $.ajax({
            type: "GET",
            dataType: "json",
            url: "https://localhost:8000/getbooks",
            success: function (book, status, xhr) {
                book.forEach(function (book) {

                    $booksTableBody.append(
                        "<tr>" +
                        "<td>" + book.title + "</td>" +
                        "<td>" + book.author + "</td>" +
                        "<td>" + book.edition + "</td>" +
                        "<td>" + book.isbn + "</td>" +
                        "</tr>"
                    );
                })
            },
            error: function (data, status, error) {
                console.log(data, status, error);
            }
        });
    });

    //login/logout funktion
    $(document).ready(function () {

        $("#loginButton").on("click", function (e) {
            e.preventDefault();

            var username = $("#username").val();
            var password = $("#password").val();

            SDK.login(username, password, function (err, data) {


                //On wrong credentials
                if (err) {
                    return $("#loginForm").find(".form-group").addClass("has-error");
                }

                //Login OK!
                if (data.type == 1) {
                    $("#loginForm").find(".form-group").addClass("has-success");
                    window.location.href = "adminpage.html";
                }
                else {
                    $("#loginForm").find(".form-group").addClass("has-success");
                    window.location.href = "userpage.html";

                }


            });
        });

        $("#logOutLink").on("click", function () {
            SDK.logOut();
            window.location.href = "index.html";

        });

    });
});

//opret bruger funktion
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
        console.log(user.username);

        alert("du har nu oprettet en bruger");
        window.location.href = "usercreated.html";
    });

});


