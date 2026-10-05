```javascript
// =====================================
// MOVIE VERSION SCRIPT - PART 1
// =====================================

// ---------- ELEMENTS ----------

const scenes =
document.querySelectorAll(".scene");

const nextBtns =
document.querySelectorAll(".nextBtn");

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

const heartsContainer =
document.getElementById(
"hearts-container"
);

const particlesContainer =
document.getElementById(
"particles"
);

const typewriter =
document.getElementById(
"typewriter"
);

// ---------- SCENE CONTROL ----------

let currentScene = 0;

function showScene(index){

    scenes.forEach(scene => {

        scene.classList.remove(
        "active"
        );

    });

    scenes[index].classList.add(
    "active"
    );

    if(index === 5){

        startTypewriter();

    }

}

// ---------- NEXT BUTTONS ----------

nextBtns.forEach(btn => {

    btn.addEventListener(
    "click",
    () => {

        currentScene++;

        if(
        currentScene <
        scenes.length
        ){

            showScene(
            currentScene
            );

        }

    });

});

// ---------- MUSIC ----------

let musicPlaying = false;

musicBtn.addEventListener(
"click",
() => {

    if(musicPlaying){

        bgMusic.pause();

        musicBtn.innerHTML =
        "🔇";

        musicPlaying = false;

    }else{

        bgMusic.play();

        musicBtn.innerHTML =
        "🎵";

        musicPlaying = true;

    }

});

document.addEventListener(
"click",
() => {

    if(!musicPlaying){

        bgMusic.play()
        .then(() => {

            musicPlaying = true;

        })
        .catch(() => {});

    }

},
{ once:true }
);

// ---------- FLOATING HEARTS ----------

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
    Math.random() > 0.5
    ? "❤️"
    : "💕";

    heart.style.left =
    Math.random() * 100
    + "vw";

    heart.style.bottom =
    "-50px";

    heart.style.fontSize =
    (15 + Math.random()*30)
    + "px";

    heart.style.animationDuration =
    (5 + Math.random()*5)
    + "s";

    heartsContainer.appendChild(
    heart
    );

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(
createHeart,
450
);

// ---------- PARTICLES ----------

function createParticle(){

    const particle =
    document.createElement("div");

    particle.style.position =
    "absolute";

    particle.style.width =
    "4px";

    particle.style.height =
    "4px";

    particle.style.borderRadius =
    "50%";

    particle.style.background =
    "rgba(255,255,255,.7)";

    particle.style.left =
    Math.random()*100
    + "vw";

    particle.style.top =
    Math.random()*100
    + "vh";

    particle.style.opacity =
    ".6";

    particlesContainer.appendChild(
    particle
    );

    let opacity = 0.6;

    const fade =
    setInterval(() => {

        opacity -= 0.01;

        particle.style.opacity =
        opacity;

        if(opacity <= 0){

            clearInterval(fade);

            particle.remove();

        }

    },100);

}

setInterval(
createParticle,
250
);

// ---------- TYPEWRITER LETTER ----------

const letterText =

`Happy Birthday Ammu ❤️

We met as strangers
on Instagram.

At that moment
I never imagined

that one conversation

would become one of the
most important parts
of my life.

26 April was not just
another date.

It became the beginning
of something beautiful.

Distance may separate us,

but it can never reduce
what I feel for you.

Every message.

Every memory.

Every smile.

Means more than words
can explain.

Your presence
is enough for me.

Happy Birthday ❤️

— [YOUR_NAME]`;

let typingStarted = false;

function startTypewriter(){

    if(typingStarted)
    return;

    typingStarted = true;

    let i = 0;

    function type(){

        if(i < letterText.length){

            typewriter.innerHTML +=
            letterText.charAt(i);

            i++;

            setTimeout(
            type,
            35
            );

        }

    }

    type();

}

// ---------- START ----------

showScene(0);

console.log(
"Movie Birthday Website Loaded ❤️"
);
``````javascript id="d3e5fv"
// =====================================
// MOVIE VERSION SCRIPT - PART 2
// ADD BELOW PART 1
// =====================================

// ---------- PHOTO ZOOM VIEWER ----------

const photos =
document.querySelectorAll(
".memory-photo, .wallpaper-photo"
);

photos.forEach(photo => {

    photo.addEventListener(
    "click",
    () => {

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

        img.style.maxWidth =
        "90%";

        img.style.maxHeight =
        "90%";

        img.style.borderRadius =
        "25px";

        img.style.boxShadow =
        "0 0 40px rgba(255,255,255,.3)";

        overlay.appendChild(img);

        document.body.appendChild(
        overlay
        );

        overlay.addEventListener(
        "click",
        () => {

            overlay.remove();

        });

    });

});

// ---------- FALLING ROSE PETALS ----------

function createPetal(){

    const petal =
    document.createElement("div");

    petal.innerHTML = "🌹";

    petal.style.position =
    "fixed";

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.top =
    "-50px";

    petal.style.fontSize =
    (15 + Math.random()*20)
    + "px";

    petal.style.zIndex =
    "999";

    petal.style.pointerEvents =
    "none";

    document.body.appendChild(
    petal
    );

    let posY = -50;

    const fall =
    setInterval(() => {

        posY += 2;

        petal.style.top =
        posY + "px";

        petal.style.transform =
        `rotate(${posY}deg)`;

        if(
        posY >
        window.innerHeight + 100
        ){

            clearInterval(fall);

            petal.remove();

        }

    },20);

}

setInterval(
createPetal,
1200
);

// ---------- FIREWORKS SYSTEM ----------

const canvas =
document.getElementById(
"fireworksCanvas"
);

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

window.addEventListener(
"resize",
() => {

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

});

let particles = [];

function createFirework(){

    const x =
    Math.random() *
    canvas.width;

    const y =
    Math.random() *
    canvas.height * 0.6;

    for(let i=0;i<100;i++){

        particles.push({

            x:x,
            y:y,

            dx:
            (Math.random()-0.5)*10,

            dy:
            (Math.random()-0.5)*10,

            life:100

        });

    }

}

function animateFireworks(){

    ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
    );

    particles.forEach(
    (p,index) => {

        ctx.beginPath();

        ctx.arc(
        p.x,
        p.y,
        2,
        0,
        Math.PI*2
        );

        ctx.fillStyle =
        `rgba(
            255,
            215,
            120,
            ${p.life/100}
        )`;

        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        p.life--;

        if(p.life <= 0){

            particles.splice(
            index,
            1
            );

        }

    });

    requestAnimationFrame(
    animateFireworks
    );

}

animateFireworks();

// ---------- FINAL SURPRISE ----------

const finalBtn =
document.getElementById(
"finalBtn"
);

const finalOverlay =
document.getElementById(
"finalOverlay"
);

finalBtn.addEventListener(
"click",
() => {

    finalOverlay.style.display =
    "flex";

    let burst = 0;

    const fireworkShow =
    setInterval(() => {

        createFirework();
        createFirework();

        burst++;

        if(burst > 25){

            clearInterval(
            fireworkShow
            );

        }

    },250);

});

// ---------- AUTO SPARKLES ----------

function createSparkle(){

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position =
    "fixed";

    sparkle.style.left =
    Math.random()*100
    + "vw";

    sparkle.style.top =
    Math.random()*100
    + "vh";

    sparkle.style.fontSize =
    (10 + Math.random()*25)
    + "px";

    sparkle.style.pointerEvents =
    "none";

    sparkle.style.zIndex =
    "999";

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

setInterval(
createSparkle,
1500
);

// ---------- WALLPAPER SCENE GLOW ----------

const wallpaperPhoto =
document.querySelector(
".wallpaper-photo"
);

if(wallpaperPhoto){

    setInterval(() => {

        wallpaperPhoto.style.filter =
        "drop-shadow(0 0 20px gold)";

        setTimeout(() => {

            wallpaperPhoto.style.filter =
            "drop-shadow(0 0 5px gold)";

        },1000);

    },2500);

}

// ---------- END MESSAGE ----------

console.log(
"Premium Movie Version Loaded ❤️"
);
```
