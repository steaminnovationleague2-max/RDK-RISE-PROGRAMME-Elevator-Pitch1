const students = [
{name:"vaibhav",file:"vaibhav.mp4"},
{name:"Namish",file:"Namish.mp4"},
{name:"nehchal",file:"nehchalpreetkaur.mp4"},
{name:"lisha",file:"lisha.mp4"},
{name:"navkiran",file:"navkiran.mp4"},
{name:"saanvi",file:"saanvi.mp4"},
{name:"avneet",file:"avneet.mp4"},
{name:"harleen",file:"harleen.mp4"},
{name:"9F manpreet",file:"manpreet9f.mp4"},
{name:"rehmat preet",file:"rehmatpreet.mp4"},
{name:"manuleen",file:"manuleen.mp4"},
{name:"manpreet",file:"manpreet.mp4"},
{name:"ananya",file:"ananya.mp4"},
{name:"pushti",file:"pushti.mp4"},
{name:"abhijot",file:"abhijot.mp4"},
{name:"prince",file:"prince.mp4"},
{name:"harsirat",file:"harsirat.mp4"},
{name:"arshiya",file:"arshiya.mp4"},
{name:"rehatpreet",file:"rehatpreet.mp4"},
{name:"tanvi",file:"tanvi.mp4"},
{name:"ridhima",file:"ridhima.mp4"},
{name:"mansirat",file:"mansirat.mp4"},
{name:"khushjot",file:"khushjot.mp4"},
{name:"jasleen",file:"jasleen.mp4"},
{name:"apsarajit",file:"apsarajit.mp4"},
{name:"rishabh",file:"rishabh.mp4"},
{name:"ansh",file:"ansh.mp4"},
{name:"rydham",file:"rydham.mp4"},
{name:"gurleen",file:"gurleen.mp4"},
{name:"saksham",file:"saksham.mp4"},
{name:"ekamjot",file:"ekamjot.mp4"},
{name:"gurman",file:"gurmanpreet.mp4"},
{name:"mukul",file:"mukul.mp4"},
{name:"mehul",file:"mehul.mp4"},
{name:"nikhil",file:"nikhil.mp4"},
{name:"smriti",file:"smriti.mp4"},
{name:"nandika",file:"nandika.mp4"},
{name:"kavya",file:"kavya.mp4"},
{name:"ronit",file:"ronit.mp4"},
{name:"shubampreet",file:"shubampreet.mp4"},
{name:"surkhpartap",file:"surkhpartap.mp4"},
{name:"ridham ohri",file:"ridhamohri.mp4"},
{name:"anch preet",file:"anchpreet.mp4"},
{name:"manyata",file:"manyata.mp4"},
{name:"moulik",file:"moulik.mp4"}
];

let currentIndex=0;

const gallery=document.getElementById("gallery");
const video=document.getElementById("videoPlayer");
const player=document.getElementById("playerSection");
const title=document.getElementById("studentName");

function createCards(){

gallery.innerHTML="";

students.forEach((student,index)=>{

gallery.innerHTML+=`
<div class="studentCard" onclick="playVideo(${index})">
<h3>${student.name}</h3>
<button>▶ Play Video</button>
</div>
`;

});

}

createCards();

function playVideo(index){

currentIndex=index;

title.innerHTML=students[index].name;

video.src="videos/"+students[index].file;

player.classList.remove("hidden");

gallery.style.display="none";

document.querySelector(".counter").style.display="none";

document.querySelector(".topBar").style.display="none";

video.load();

video.play();

}

document.getElementById("searchBox").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".studentCard");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value))

card.style.display="block";

else

card.style.display="none";

});

});
// ===============================
// PART 2
// ===============================

// Close Player
document.getElementById("closePlayer").addEventListener("click", function () {

    video.pause();

    video.currentTime = 0;

    player.classList.add("hidden");

    gallery.style.display = "grid";

    document.querySelector(".counter").style.display = "block";

    document.querySelector(".topBar").style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Previous Video
document.getElementById("prevBtn").addEventListener("click", function () {

    if (currentIndex > 0) {

        currentIndex--;

    } else {

        currentIndex = students.length - 1;

    }

    playVideo(currentIndex);

});

// Next Video
document.getElementById("nextBtn").addEventListener("click", function () {

    if (currentIndex < students.length - 1) {

        currentIndex++;

    } else {

        currentIndex = 0;

    }

    playVideo(currentIndex);

});

// Dark Mode
document.getElementById("darkBtn").addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        this.innerHTML = "☀ Light Mode";

    } else {

        this.innerHTML = "🌙 Dark Mode";

    }

});

// Keyboard Shortcuts
document.addEventListener("keydown", function (e) {

    // Escape closes player
    if (e.key === "Escape" && !player.classList.contains("hidden")) {

        document.getElementById("closePlayer").click();

    }

    // Right Arrow = Next
    if (e.key === "ArrowRight" && !player.classList.contains("hidden")) {

        document.getElementById("nextBtn").click();

    }

    // Left Arrow = Previous
    if (e.key === "ArrowLeft" && !player.classList.contains("hidden")) {

        document.getElementById("prevBtn").click();

    }

});

// Auto Update Counter
document.getElementById("totalVideos").innerText = students.length;

// Optional: Scroll to player when a video opens
video.addEventListener("loadeddata", function () {

    player.scrollIntoView({
        behavior: "smooth"
    });

});
