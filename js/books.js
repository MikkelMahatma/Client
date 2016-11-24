/**
 * Created by mikkelaltmann on 21/11/2016.
 */
$(document).ready(function() {
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