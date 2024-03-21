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
// Function to check if cookies have been accepted
function checkCookieConsent() {
    if (!Cookies.get('cookieConsent')) {
        // Show cookie consent message
        document.getElementById('cookie-consent').style.display = 'block';
    }
}

// Function to accept cookies
function acceptCookies() {
    // Set cookie consent
    Cookies.set('cookieConsent', 'accepted');
    // Hide cookie consent message
    document.getElementById('cookie-consent').style.display = 'none';
}

window.onload = checkCookieConsent;

// // Function to create diamond shape grid with progress values
function createDiamondGrid(rows, cols, progress) {
    const container = document.querySelector('.skill-category');
    container.innerHTML = ''; // Clear existing content
    var list = ["https://www.vectorlogo.zone/logos/java/java-icon.svg",
        "https://www.vectorlogo.zone/logos/groovy-lang/groovy-lang-icon.svg",
        "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
        "https://www.vectorlogo.zone/logos/python/python-icon.svg",
        "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
        "https://www.vectorlogo.zone/logos/java/java-icon.svg",
        "https://www.vectorlogo.zone/logos/veeva/veeva-icon.svg",
        "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"]
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const diamond = document.createElement('div');
            diamond.className = 'diamond';
            const content = document.createElement('div');
            content.className = 'content';
            const image = document.createElement('img');
            image.src = list[i * cols + j]; // Set your image source here
            content.appendChild(image);
            diamond.appendChild(content);
            container.appendChild(diamond);

            // Set progress value for each diamond
            const progressValue = Math.min(progress[i * cols + j], 100); // Cap progress value at 100
            diamond.style.setProperty('--progress', `${progressValue}%`);
        }
    }
}

// // Call the function with desired number of rows, columns, and progress values
const progressValues = [50, 75, 30, 90, 20, 60, 80, 10, 40]; // Example progress values
createDiamondGrid(3, 3, progressValues); // Example: 3 rows, 3 columns

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.mouse-track');

    // Track mouse movement
    container.addEventListener('mousemove', function (e) {
        const mouseX = e.pageX / container.offsetWidth * 100; // Calculate mouse X position percentage
        const mouseY = e.pageY / container.offsetHeight * 100; // Calculate mouse Y position percentage
        // Calculate radius based on mouse position (you can adjust this formula as needed)
        // const radius = `${Math.sqrt(mouseX * mouseX + mouseY * mouseY)}%`;
        radius = '20vw';

        // Update background gradient based on mouse position
        container.style.setProperty('--radius', radius);
        // Update background gradient based on mouse position
        container.style.backgroundImage = `radial-gradient(circle var(--radius) at ${mouseX}% ${mouseY}%,rgba(255, 255, 255, .1), transparent)`;
    });
});
function generatedata(query, numPoints, rad = '0.5', ins = 1) {
    const svg = document.querySelector(query);
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        points.push({ x, y });
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x + '%');
        circle.setAttribute('cy', y + '%');
        circle.setAttribute('r', rad);
        svg.appendChild(circle);
    }
    for (let i = 0; i < numPoints - 1; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', points[i].x + '%');
        line.setAttribute('y1', points[i].y + '%');
        line.setAttribute('x2', points[i + 1].x + '%');
        line.setAttribute('y2', points[i + 1].y + '%');
        svg.appendChild(line);
    }
    function revealElements(index) {
        if (index >= points.length) return;
        const circle = svg.querySelectorAll('circle')[index];
        const line = svg.querySelectorAll('line')[index];
        circle.style.opacity = 1;
        line.style.opacity = 1;
        setTimeout(() => {
            revealElements(index + ins);
        }, 50);
    }
    revealElements(0);
}
generatedata('#bgground', 500, 1, 1)


// Get the SVG content and encode it
const svgContent = encodeURIComponent(document.querySelector('#bgground').innerHTML);

// Set the background image of the container element
const container = document.querySelector('#home');
// container.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${svgContent}</svg>')`;
container.style.backgroundSize = 'cover';
container.style.backgroundRepeat = 'no-repeat';
// var granimInstance = new Granim({
//     element: '#canvas-complex',
//     direction: 'custom',
//     customDirection: {
//         x0: '100%', // Starting x-coordinate (left)
//         y0: '0%',  // Starting y-coordinate (top)
//         x1: '0%', // Ending x-coordinate (right)
//         y1: '100%', // Ending y-coordinate (bottom)
//     },
//     isPausedWhenNotInView: true,
//     states: {
//         "default-state": {
//             transitionSpeed: 2000,
//             gradients: [
//                 [
//                     { color: '#1a1a2e', pos: 0.1 }, // Dark blue
//                     { color: '#22333b', pos: 0.3 }, // Slightly lighter blue
//                     { color: '#40514e', pos: 0.5 }, // Medium blue
//                     { color: '#576d6b', pos: 0.7 }, // Slightly lighter blue
//                     { color: '#769fcd', pos: 0.9 }  // Light blue
//                 ],
//                 [
//                     { color: '#576d6b', pos: 0.1 }, // Slightly lighter blue
//                     { color: '#40514e', pos: 0.3 }, // Medium blue
//                     { color: '#22333b', pos: 0.5 }, // Slightly lighter blue
//                     { color: '#1a1a2e', pos: 0.7 }, // Dark blue
//                     { color: '#1a1a2e', pos: 0.9 }  // Dark blue
//                 ]
//             ]
//         }
//     }
// });

