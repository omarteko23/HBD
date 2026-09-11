/* =========================
   فتح الهدية 🎁
========================= */

function openGift() {

    const music =
        document.getElementById("birthdayMusic");

    const gift =
        document.querySelector(".gift");

    const surprise =
        document.getElementById("surprise");

    const clickText =
        document.querySelector(".click-text");


    /* تشغيل الموسيقى */

    music.volume = 0.5;

    music.play();


    /* فتح الهدية */

    gift.classList.add("opened");

    gift.style.animation = "none";

    gift.style.transform =
        "scale(1.15)";


    /* تغيير الكلام */

    clickText.innerHTML =
        "🎉 استني...";


    /* إظهار المفاجأة */

    setTimeout(() => {

        surprise.style.display =
            "block";

        createConfetti();

        screenFlash();

    }, 600);

}


/* =========================
   القلوب والبالونات ❤️🎈
========================= */

const decorations =
    document.getElementById("decorations");


const emojis = [

    "❤️",

    "💕",

    "💖",

    "🎈",

    "✨",

    "💗"

];


function createDecoration() {

    const element =
        document.createElement("div");


    element.classList.add(
        "decoration"
    );


    element.innerHTML =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];


    element.style.left =
        Math.random() * 100 + "vw";


    element.style.fontSize =
        Math.random() * 25 + 25 + "px";


    element.style.animationDuration =
        Math.random() * 5 + 5 + "s";


    decorations.appendChild(
        element
    );


    setTimeout(() => {

        element.remove();

    }, 10000);

}


setInterval(
    createDecoration,
    600
);


/* =========================
   الكونفيتي 🎉
========================= */

function createConfetti() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.innerHTML =
            "🎉";


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-50px";


        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";


        confetti.style.zIndex =
            "10";


        confetti.style.transition =
            "transform 3s ease, opacity 3s ease";


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(720deg)`;


            confetti.style.opacity =
                "0";

        }, 100);


        setTimeout(() => {

            confetti.remove();

        }, 3500);

    }

}


/* =========================
   تأثير الإضاءة ✨
========================= */

function screenFlash() {

    const flash =
        document.createElement("div");


    flash.style.position =
        "fixed";


    flash.style.inset =
        "0";


    flash.style.background =
        "white";


    flash.style.opacity =
        "0.8";


    flash.style.zIndex =
        "20";


    flash.style.pointerEvents =
        "none";


    flash.style.transition =
        "opacity 0.8s ease";


    document.body.appendChild(
        flash
    );


    setTimeout(() => {

        flash.style.opacity =
            "0";

    }, 100);


    setTimeout(() => {

        flash.remove();

    }, 1000);

}


/* =========================
   الرسالة الشخصية ❤️
========================= */

const personalMessage = `في كلام كتير أوي جوايا والله، ومش عارف أبدأ منين، بس أهم حاجة عايز أقولها:

كل سنة وإنتي طيبة يا أغلى الناس حرفيًا ❤️🎂

إنتِ متعرفيش معزتك عندي قد إيه، بجد. في فترة قليلة جدًا من تعارفنا، بقيتي واحده من أقرب الناس ليا، وده شيء أنا ممتن ليه جدًا.

إنتِ شخصية لطيفة وجميلة وتتحبي والله، ومن الناس اللي وجودهم في حياة أي حد بيكون حاجة حلوة بجد ❤️

فربنا يخليكي يارب، ويخليكي دايمًا مبسوطة، ويحققلك كل اللي نفسك فيه، وتشوفي كل حاجة نفسك فيها قدام عينيكي.

ويارب السنة الجديدة من عمرك تكون أحلى من كل اللي فات، ومليانة فرحة ونجاح وراحة بال، وتفضلي دايمًا مبسوطة وضحكتك موجودة ❤️✨

كل سنة وإنتي طيبة يا تاليا، وإن شاء الله تفضلي دايمًا من أغلى الناس عندي ❤️`;


/* =========================
   إظهار الرسالة حرف حرف
========================= */

function showMessage() {

    const button =
        document.getElementById(
            "messageButton"
        );


    const messageBox =
        document.getElementById(
            "personalMessage"
        );


    const typedMessage =
        document.getElementById(
            "typedMessage"
        );


    /* إخفاء الزر */

    button.style.display =
        "none";


    /* إظهار الرسالة */

    messageBox.style.display =
        "block";


    /* نبدأ الكتابة */

    let index = 0;


    function typeWriter() {

        if (
            index <
            personalMessage.length
        ) {

            typedMessage.textContent +=
                personalMessage.charAt(index);


            index++;


            /* سرعة الكتابة */

            let speed = 35;


            /* الوقفة بعد علامات الترقيم */

            const currentChar =
                personalMessage.charAt(
                    index - 1
                );


            if (

                currentChar === "." ||

                currentChar === "!" ||

                currentChar === "؟" ||

                currentChar === "❤️"

            ) {

                speed = 120;

            }


            setTimeout(
                typeWriter,
                speed
            );


        } else {

            /* =========================
               خلصنا الرسالة ❤️
            ========================== */

            const finalMessage =
                document.querySelector(
                    ".final-message"
                );


            setTimeout(() => {

                finalMessage.classList.add(
                    "show"
                );


                finalMessage.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });

            }, 700);

        }

    }


    typeWriter();


    /* النزول ناحية الرسالة */

    setTimeout(() => {

        messageBox.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

    }, 500);

}
/* =========================
   الصور واحدة ورا التانية 📸
========================= */

const photos =
    document.querySelectorAll(".photos .photo");


let currentPhoto = 0;


setInterval(() => {

    if (photos.length === 0) {
        return;
    }


    photos[currentPhoto].classList.remove(
        "active"
    );


    currentPhoto =
        (currentPhoto + 1) % photos.length;


    photos[currentPhoto].classList.add(
        "active"
    );

}, 3000);