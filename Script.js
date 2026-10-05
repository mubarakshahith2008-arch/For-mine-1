```javascript
// ==============================
// CINEMATIC BIRTHDAY WEBSITE
// ==============================

// ---------- ELEMENTS ----------

const scenes = document.querySelectorAll(".scene");
const nextBtns = document.querySelectorAll(".nextBtn");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const finalBtn = document.getElementById("finalBtn");
const finalOverlay = document.getElementById("finalOverlay");

const heartContainer =
document.getElementById("hearts-container");

let currentScene = 0;
let musicPlaying = false;

// ==============================
// SHOW SCENE
// ==============================

function showScene(index){

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    scenes[index].classList.add("active");

    // Letter scene
    if(index === 6){
        startTypewriter();
    }

}

// ==============================
// NEXT BUTTONS
// ==============================

nextBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        currentScene++;

        if(currentScene < scenes.length){

            showScene(currentScene);

        }

    });

});

// ==============================
// MUSIC CONTROL
// ==============================

musicBtn.addEventListener("click", () => {

    if(musicPlaying){

        bgMusic.pause();

        musicBtn.innerHTML = "🔇";

        musicPlaying = false;

    }else{

        bgMusic.play();

        musicBtn.innerHTML = "🎵";

        musicPlaying = true;

    }

});

// ==============================
// AUTOSTART MUSIC ON FIRST CLICK
// ==============================

document.addEventListener("click", () => {

    if(!musicPlaying){

        bgMusic.play()
        .then(() => {

            musicPlaying = true;

        })
        .catch(() => {});

    }

},{ once:true });

// ==============================
// FLOATING HEARTS
// ==============================

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
    Math.random() > 0.5
    ? "❤️"
    : "💕";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom =
    "-40px";

    heart.style.fontSize =
    (18 + Math.random()*25)
    + "px";

    heart.style.animationDuration =
    (5 + Math.random()*5)
    + "s";

    heartContainer.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(createHeart,450);

// ==============================
// TYPEWRITER LETTER
// ==============================

const typewriter =
document.getElementById("typewriter");

const letterText =

`Happy Birthday Ammu ❤️

We met as strangers on Instagram.

At that time,
I never imagined that one conversation
could become one of the most important
parts of my life.

When I think about 26 April,
I don't just remember a date.

I remember the beginning
of something beautiful.

Distance isn't always easy.

But somehow,
every day,
every message,
every memory,

makes me appreciate you even more.

People often search for
the perfect definition of love.

For me, it is simple.

Your presence is enough for me.

Thank you for every smile.

Thank you for every memory.

Thank you for being you.

Happy Birthday ❤️

— [YOUR_NAME]`;

let typingStarted = false;

function startTypewriter(){

    if(typingStarted) return;

    typingStarted = true;

    let i = 0;

    function type(){

        if(i < letterText.length){

            typewriter.innerHTML +=
            letterText.charAt(i);

            i++;

            setTimeout(type,35);

        }

    }

    type();

}

// ==============================
// PHOTO CLICK ZOOM
// ==============================

const photos =
document.querySelectorAll(
".memory-photo, .wallpaper-photo"
);

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        const overlay =
        document.createElement("div");

        overlay.style.position =
        "fixed";

        overlay.style.inset =
        "0";

        overlay.style.background =
        "rgba(0,0,0,.95)";

        overlay.style.display =
        "flex";

        overlay.style.justifyContent =
        "center";

        overlay.style.alignItems =
        "center";

        overlay.style.zIndex =
        "999999";

        const img =
        document.createElement("img");

        img.src = photo.src;

        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "20px";

        overlay.appendChild(img);

        document.body.appendChild(
            overlay
        );

        overlay.addEventListener(
            "click",
            () => overlay.remove()
        );

    });

});

// ==============================
// FIREWORKS EFFECT
// ==============================

function createFirework(){

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position =
    "fixed";

    sparkle.style.left =
    Math.random()*100 + "vw";

    sparkle.style.top =
    Math.random()*100 + "vh";

    sparkle.style.fontSize =
    (10 + Math.random()*35)
    + "px";

    sparkle.style.pointerEvents =
    "none";

    sparkle.style.zIndex =
    "999999";

    sparkle.style.opacity =
    "1";

    document.body.appendChild(
        sparkle
    );

    let opacity = 1;

    const fade =
    setInterval(() => {

        opacity -= 0.03;

        sparkle.style.opacity =
        opacity;

        if(opacity <= 0){

            clearInterval(fade);

            sparkle.remove();

        }

    },30);

}

// ==============================
// FINAL SURPRISE
// ==============================

finalBtn.addEventListener("click", () => {

    finalOverlay.style.display =
    "flex";

    let count = 0;

    const fireworks =
    setInterval(() => {

        for(let i=0;i<10;i++){

            createFirework();

        }

        count++;

        if(count > 40){

            clearInterval(
                fireworks
            );

        }

    },150);

});

// ==============================
// INITIAL SCENE
// ==============================

showScene(0);

// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(
"Happy Birthday ❤️"
);
```
