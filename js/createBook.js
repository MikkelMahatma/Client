/**
 * Created by mikkelaltmann on 24/11/2016.
 */
$("#addNewBookButton").on("click", function() {

    var book = {
        title: $("#newBookTitle").val(),
        author: $("#newBookAuthor").val(),
        edition: $("#newBookEdition").val(),
        isbn: +$("#newBookIsbn").val()

    };
    console.log(book);

    SDK.Book.create(book, function(err, data) {
        if (err) throw JSON.stringify(err);
        console.log(book.isbn);

        alert("Tillykke, du har nu opretet en ny bog!");
        window.location.href = "adminpage.html";
    });

});