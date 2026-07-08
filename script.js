// ===============================
// RDK RISE PROGRAMME
// Elevator Pitch
// ===============================

// Search Function
function searchStudent() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.getElementsByClassName("student-card");

    for (let i = 0; i < cards.length; i++) {

        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {

            cards[i].style.display = "block";

        } else {

            cards[i].style.display = "none";

        }

    }

}

// Open Video
function playVideo(fileName, studentName) {

    document.getElementById("studentList").style.display = "none";

    document.querySelector(".search-box").style.display = "none";

    document.getElementById("videoContainer").style.display = "block";

    document.getElementById("studentName").innerHTML = studentName;

    let video = document.getElementById("studentVideo");

    let source = document.getElementById("videoSource");

    source.src = "videos/" + fileName;

    video.load();

    video.play();

}

// Back Button
function goBack() {

    let video = document.getElementById("studentVideo");

    video.pause();

    video.currentTime = 0;

    document.getElementById("videoContainer").style.display = "none";

    document.getElementById("studentList").style.display = "grid";

    document.querySelector(".search-box").style.display = "flex";

    document.getElementById("searchInput").value = "";

    searchStudent();

}
