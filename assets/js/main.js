document.addEventListener("DOMContentLoaded", () => {

const authorButton =
    document.getElementById("authorButton");

if (authorButton) {

    authorButton.addEventListener(
        "click",
        () => {

            alert(
                "JD — Jagadeesh Devaraj\n\n" +
                "Technology Architecture & Engineering"
            );

        }
    );

}

});