/**
 * Created by mikkelaltmann on 21/11/2016.
 */



$(document).ready(function () {

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
                "</tr>")
        });
    });
});