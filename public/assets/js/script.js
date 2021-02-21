//Tried using arrow functions here, but it didn't work
$(document).ready(function () {
    $(".devour-form").on("submit", function (event) {
        event.preventDefault();
        const burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function (data) {
            location.reload();
        });
    });
});