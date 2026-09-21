document.addEventListener("DOMContentLoaded", () => {

    const opening = document.getElementById("opening");
    const invitation = document.getElementById("invitation");
    const openButton = document.getElementById("openInvitation");

    /* =====================================
       OPEN INVITATION
    ====================================== */

    if (openButton) {
        openButton.addEventListener("click", () => {

            // Fade out opening
            opening.classList.add("opening-close");

            setTimeout(() => {

                opening.style.display = "none";

                invitation.classList.remove("hidden");

                // Start at first invitation section
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 700);
        });
    }


    /* =====================================
       NEXT SECTION BUTTONS
    ====================================== */

    const nextButtons =
        document.querySelectorAll("[data-next]");

    nextButtons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId =
                button.getAttribute("data-next");

            const target =
                document.getElementById(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================
       KEYBOARD SUPPORT
    ====================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" &&
            document.activeElement === openButton
        ) {
            openButton.click();
        }

    });


    /* =====================================
       NIKAH COUNTDOWN
    ====================================== */

    const nikahDate =
        new Date("October 25, 2026 11:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();

        const difference =
            nikahDate - now;


        // If Nikah time has arrived
        if (difference <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;
        }


        // Calculate remaining time
        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );


        // Display countdown
        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");
    }


    // Run immediately
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);

});