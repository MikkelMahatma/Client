/**
 * Created by mikkelaltmann on 02/12/2016.
 */
/**
 * Created by mikkelaltmann on 21/11/2016.
 */


//Test
$(document).ready(function () {

//Fires on page-load
    SDK.Book.getAll(function (err, data) {
        if (err) throw JSON.stringify(err);
        console.log(data);

        var $booksTableBody = $("#booksTableBody");
        data.forEach(function (book) {
            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.author + "</td>" +
                "<td>" + book.edition + "</td>" +
                "<td>" + book.isbn + "</td>" +
                "<td><input role='button' value='Slet bog' class='btn btn-success btn-md DeleteBookButton' data-isbn=" + book.isbn + " ></td>"+
                "</tr>")
        });

        $(".DeleteBookButton").on("click", function () {
            var variable = confirm("Ønsker du at slette denne bog?");
            if (variable == true) {

                var $deleteBook = $(this);
                console.log($deleteBook);
                var book = {
                    isbn: $deleteBook.data("isbn")
                };
                SDK.Admin.deletebook(book, function (err, data) {
                    if (err) throw JSON.stringify(err);
                    location.reload();
                })
            }
            else {
                window.close();
            }
        })
    });
});