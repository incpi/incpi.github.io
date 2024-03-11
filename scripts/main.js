function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function() {
    const nav = $("body");
    const gradientAnimation = nav.css("animation");
    nav.css("--start-color", generateRandomColor());
    nav.css("--end-color", generateRandomColor());
    nav.css("animation", "none");
    setTimeout(() => {
        nav.css("animation", gradientAnimation);
    });
});

$("#contact-form").submit(function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        to_name: "Omkar",
        from_name: $("#name").val(),
        emailID: $("#email").val(),
        message: $("#message").val()
    };
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    // Send email
    emailjs.send("service_incpi14", "template_acff3kr", formData, "V2vHk9bBhLoeAPXzo")
        .then(
            function (response) {
                console.log("Email sent successfully:", response);
                $("#contact-form")[0].reset(); // Reset form
                toastr.success("Your message has been sent successfully!");
            },
            function (error) {
                console.error("Email sending failed:", error);
                toastr.error("Oops!" + error + "Please try again later.");
            }
        );
});
