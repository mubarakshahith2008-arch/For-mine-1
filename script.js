// ============================================================
// PREMIUM MOVIE BIRTHDAY WEBSITE
// COMPLETE + FIXED JAVASCRIPT
// ============================================================


// ============================================================
// ELEMENTS
// ============================================================

const scenes =
    document.querySelectorAll(".scene");

const nextBtns =
    document.querySelectorAll(".nextBtn");

const musicBtn =
    document.getElementById("musicBtn");

const bgMusic =
    document.getElementById("bgMusic");

const heartsContainer =
    document.getElementById("hearts-container");

const particlesContainer =
    document.getElementById("particles");

const typewriter =
    document.getElementById("typewriter");

const canvas =
    document.getElementById("fireworksCanvas");

const finalBtn =
    document.getElementById("finalBtn");

const finalOverlay =
    document.getElementById("finalOverlay");


// ============================================================
// SCENE CONTROL
// ============================================================

let currentScene = 0;


function showScene(index){

    if(!scenes.length){
        return;
    }


    if(index < 0){
        index = 0;
    }


    if(index >= scenes.length){
        index = scenes.length - 1;
    }


    scenes.forEach(scene => {

        scene.classList.remove("active");

    });


    scenes[index].classList.add("active");

    currentScene = index;


    // LOVE LETTER IS SCENE 7
    // Index = 6 because JavaScript starts from 0.

    if(
        scenes[index].querySelector("#typewriter")
    ){

        startTypewriter();

    }

}


// ============================================================
// NEXT BUTTONS
// ============================================================

nextBtns.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            const nextScene =
                currentScene + 1;


            if(nextScene < scenes.length){

                showScene(nextScene);

            }

        }
    );

});


// ============================================================
// MUSIC
// ============================================================

let musicPlaying = false;


function startMusic(){

    if(!bgMusic){
        return;
    }


    bgMusic.volume = 0.75;


    const promise =
        bgMusic.play();


    if(promise){

        promise
        .then(() => {

            musicPlaying = true;

            if(musicBtn){

                musicBtn.innerHTML =
                    "🎵";

            }

        })
        .catch(() => {

            musicPlaying = false;

        });

    }

}


function stopMusic(){

    if(!bgMusic){
        return;
    }


    bgMusic.pause();

    musicPlaying = false;


    if(musicBtn){

        musicBtn.innerHTML =
            "🔇";

    }

}


if(musicBtn){

    musicBtn.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            if(musicPlaying){

                stopMusic();

            }else{

                startMusic();

            }

        }
    );

}


// Start music after first normal
// user interaction.

function firstInteraction(){

    if(!musicPlaying){

        startMusic();

    }


    document.removeEventListener(
        "click",
        firstInteraction
    );

}


document.addEventListener(
    "click",
    firstInteraction
);


// ============================================================
// FLOATING HEARTS
// ============================================================

function createHeart(){

    if(!heartsContainer){
        return;
    }


    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    heart.innerHTML =
        Math.random() > .5
            ? "❤️"
            : "💕";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.bottom =
        "-50px";


    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


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


// ============================================================
// BACKGROUND PARTICLES
// ============================================================

function createParticle(){

    if(!particlesContainer){
        return;
    }


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
        Math.random() * 100 + "vw";


    particle.style.top =
        Math.random() * 100 + "vh";


    particle.style.opacity =
        ".6";


    particlesContainer.appendChild(
        particle
    );


    let opacity = .6;


    const fade =
        setInterval(() => {

            opacity -= .01;

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


// ============================================================
// TYPEWRITER LETTER
// ============================================================

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

    if(!typewriter){
        return;
    }


    if(typingStarted){
        return;
    }


    typingStarted = true;


    typewriter.textContent =
        "";


    let i = 0;


    function type(){

        if(i < letterText.length){

            typewriter.textContent +=
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


// ============================================================
// PHOTO ZOOM VIEWER
// ============================================================

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
                "30000";


            overlay.style.cursor =
                "zoom-out";


            const img =
                document.createElement("img");


            img.src =
                photo.src;


            img.alt =
                photo.alt ||
                "Memory Photo";


            img.style.maxWidth =
                "92%";


            img.style.maxHeight =
                "92%";


            img.style.objectFit =
                "contain";


            img.style.borderRadius =
                "25px";


            img.style.boxShadow =
                "0 0 50px rgba(255,255,255,.4)";


            overlay.appendChild(
                img
            );


            document.body.appendChild(
                overlay
            );


            overlay.addEventListener(
                "click",
                () => {

                    overlay.remove();

                }
            );

        }
    );

});


// ============================================================
// FALLING ROSE PETALS
// ============================================================

function createPetal(){

    const petal =
        document.createElement("div");


    petal.innerHTML =
        "🌹";


    petal.style.position =
        "fixed";


    petal.style.left =
        Math.random() * 100 + "vw";


    petal.style.top =
        "-50px";


    petal.style.fontSize =
        (15 + Math.random() * 20) + "px";


    petal.style.zIndex =
        "900";


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


// ============================================================
// FIREWORK SYSTEM
// ============================================================

let ctx = null;

let fireworksParticles = [];


if(canvas){

    ctx =
        canvas.getContext("2d");


    function resizeCanvas(){

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );

}


function createFirework(){

    if(!canvas || !ctx){
        return;
    }


    const x =
        Math.random() *
        canvas.width;


    const y =
        Math.random() *
        canvas.height *
        .55;


    for(
        let i = 0;
        i < 100;
        i++
    ){

        const angle =
            Math.random() *
            Math.PI * 2;


        const speed =
            2 +
            Math.random() * 8;


        fireworksParticles.push({

            x:x,

            y:y,

            dx:
                Math.cos(angle) *
                speed,

            dy:
                Math.sin(angle) *
                speed,

            life:
                100

        });

    }

}


function animateFireworks(){

    if(!canvas || !ctx){
        return;
    }


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    for(
        let i =
            fireworksParticles.length - 1;

        i >= 0;

        i--
    ){

        const p =
            fireworksParticles[i];


        ctx.beginPath();


        ctx.arc(
            p.x,
            p.y,
            2,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(
                255,
                215,
                120,
                ${Math.max(
                    p.life / 100,
                    0
                )}
            )`;


        ctx.fill();


        p.x += p.dx;

        p.y += p.dy;


        p.dy += .04;

        p.dx *= .99;


        p.life--;


        if(p.life <= 0){

            fireworksParticles.splice(
                i,
                1
            );

        }

    }


    requestAnimationFrame(
        animateFireworks
    );

}


if(canvas){

    animateFireworks();

}


// ============================================================
// FINAL SURPRISE
// ============================================================

if(finalBtn && finalOverlay){

    finalBtn.addEventListener(
        "click",
        () => {

            finalOverlay.classList.add(
                "show"
            );


            let burst = 0;


            const fireworkShow =
                setInterval(() => {

                    createFirework();

                    createFirework();

                    createFirework();


                    burst++;


                    if(burst >= 25){

                        clearInterval(
                            fireworkShow
                        );

                    }

                },250);

        }
    );

}


// ============================================================
// AUTO SPARKLES
// ============================================================

function createSparkle(){

    const sparkle =
        document.createElement("div");


    sparkle.innerHTML =
        "✨";


    sparkle.style.position =
        "fixed";


    sparkle.style.left =
        Math.random() * 100 + "vw";


    sparkle.style.top =
        Math.random() * 100 + "vh";


    sparkle.style.fontSize =
        (10 + Math.random() * 25) + "px";


    sparkle.style.pointerEvents =
        "none";


    sparkle.style.zIndex =
        "900";


    document.body.appendChild(
        sparkle
    );


    let opacity = 1;


    const fade =
        setInterval(() => {

            opacity -= .03;


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


// ============================================================
// WALLPAPER GLOW
// ============================================================

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


// ============================================================
// START MOVIE
// ============================================================

showScene(0);


console.log(
    "Premium Movie Birthday Website Loaded ❤️"
);
