var lockout1 = false;

$(document).ready(function(){
    $("#reveal-story").click(function(){
        $("#entire-story").toggleClass("hidden");
    });

    $("#button1").hover(function(){
        if (!lockout1) {
            lockout1 = true;
            $(".result").removeClass("hidden"); // Remove hidden class from all results
            $("#result1").removeClass("hidden"); // Show result 1
            $("#result2").addClass("hidden"); // Hide result 2
            animateText("#result1", function() {
                lockout1 = false;
            });
        }
    });

    $("#button2").hover(function(){
        if (!lockout1) {
            lockout1 = true;
            $(".result").removeClass("hidden"); // Remove hidden class from all results
            $("#result2").removeClass("hidden"); // Show result 2
            $("#result1").addClass("hidden"); // Hide result 1
            animateText("#result2", function() {
                lockout1 = false;
            });
        }
    });
});

function animateText(elementSelector, callback) {
    var element = $(elementSelector);
    var text = element.text();
    element.text(''); // Clear the text
    var index = 0;
    var typingInterval = setInterval(function() {
        element.text(element.text() + text[index]);
        index++;
        if (index >= text.length) {
            clearInterval(typingInterval);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }, 10); // Adjust typing speed as needed
}