document.addEventListener("DOMContentLoaded", function() {
    var glowAmount = 10;
    var increase = true;

    function updateGlow() {
        setInterval(function() {
            text.style.textShadow = `0 0 ${glowAmount}px aqua, 0 0 ${glowAmount * 2}px aqua, 0 0 ${glowAmount * 3}px aqua`;

            if (increase) {
                glowAmount++;
                if (glowAmount >= 15) {
                    increase = false;
                }
            } else {
                glowAmount--;
                if (glowAmount <= 3) {
                    increase = true;
                }
            }
        }, 100);
    }

    function handleMouseOver() {
        this.style.color = "aqua";
    }

    function handleMouseOut() {
        this.style.color = "white";
    }

    function handleClick() {
        console.log("Text clicked!");
        // document.body.style.backgroundColor = "black";
        // document.title.style.background = 'black';
    }

    var text = document.querySelector('.chat-text');

    updateGlow();

    text.addEventListener("mouseover", handleMouseOver);
    text.addEventListener("mouseout", handleMouseOut);
    text.addEventListener("click", handleClick);
});