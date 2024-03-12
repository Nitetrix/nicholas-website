$(document).ready(function() {
    const leftPageHitbox = $(".lpage");
    const rightPageHitbox = $(".rpage");
    const bookImage = $(".book");
    let currentPage = 1;
    const totalPages = 5; // Total Pages

    // Update page counter
    $("#total-pages").text(totalPages);

    leftPageHitbox.on("click", function() {
        if (currentPage > 1) {
            currentPage--;
            bookImage.attr("src", "../story_1/story1_page" + currentPage + ".png");
            updatePageCounter();
            updateToggleChatButton();
        }
    });

    rightPageHitbox.on("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            bookImage.attr("src", "../story_1/story1_page" + currentPage + ".png");
            updatePageCounter();
            updateToggleChatButton();
        }
    });

    function updatePageCounter() {
        $("#current-page").text(currentPage);
    }

    // Function to update toggle chat button visibility
    function updateToggleChatButton() {
        if (currentPage === totalPages) {
            $("#toggle-chat").prop("disabled", false);
        } else {
            $("#toggle-chat").prop("disabled", true);
        }
    }

    // Initial update of toggle chat button visibility
    updateToggleChatButton();
    
    // Hide the chat window initially
    $(".chat-window").addClass("hidden");

    $("#toggle-chat").click(function() {
        $(".chat-window").toggleClass("hidden");
    });
});