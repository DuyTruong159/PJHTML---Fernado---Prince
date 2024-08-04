$(document).ready(function() {
    $(function() {
        $("#header").load("./header.html");
        $("#footer").load("./footer.html", function() {
            $('input[type="submit"]').click(function(e) {
                e.preventDefault();
        
                alert("We will contact you shortly!!");
            });
        });
    });

    $('input[type="submit"]').click(function(e) {
        e.preventDefault();

        alert("We will contact you shortly!!");
    });

    console.log($(location).attr("href"));
    console.log($(location).attr("origin"));
    console.log($(location).attr("pathname"));
});