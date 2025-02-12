$(document).ready(function() {
    var firstMeetDate = "2024-11-13 00:07:00"; // Replace with your actual date and time

    function timeElapse(date) {
        var current = new Date();
        var past = new Date(date);
        var seconds = Math.floor((current - past) / 1000);

        var days = Math.floor(seconds / (3600 * 24));
        seconds %= 3600 * 24;

        var hours = Math.floor(seconds / 3600);
        if (hours < 10) {
            hours = "0" + hours;
        }
        seconds %= 3600;

        var minutes = Math.floor(seconds / 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        seconds %= 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        var result = " <span class=\"digit\">" + days + "</span> Days <span class=\"digit\">" + hours + "</span> Hours <span class=\"digit\">" + minutes + "</span> Minutes <span class=\"digit\">" + seconds + "</span> Seconds";
        $("#clock").html(result);
    }

    // Update time every second
    setInterval(function() {
        timeElapse(firstMeetDate);
    }, 1000);

    // Initial call to display immediately
    timeElapse(firstMeetDate);
});
