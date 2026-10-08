const timeZones = {
    paris: { name: "PARIS", zone: "Europe/Paris" },
    londres: { name: "LONDRES", zone: "Europe/London" },
    newyork: { name: "NEW YORK", zone: "America/New_York" },
    tokyo: { name: "TOKYO", zone: "Asia/Tokyo" },
    sydney: { name: "SYDNEY", zone: "Australia/Sydney" },
    dubai: { name: "DUBAÏ", zone: "Asia/Dubai" },
    singapour: { name: "SINGAPOUR", zone: "Asia/Singapore" },
    montreal: { name: "MONTRÉAL", zone: "America/Toronto" },
    saopaulo: { name: "SÃO PAULO", zone: "America/Sao_Paulo" }
};

let activeKey = "paris";


// =========================
// HORLOGES
// =========================

function updateClocks() {

    const now = new Date();

    // Petites horloges
    for (const key in timeZones) {

        const element = document.getElementById(key);

        if (element) {
            element.textContent = now.toLocaleTimeString("fr-FR", {
                timeZone: timeZones[key].zone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            });
        }
    }

    // Grande horloge
    const active = timeZones[activeKey];

    const time = document.getElementById("time");
    const date = document.getElementById("date");
    const city = document.getElementById("selected-city");

    if (time) {
        time.textContent = now.toLocaleTimeString("fr-FR", {
            timeZone: active.zone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }

    if (date) {
        date.textContent = now.toLocaleDateString("fr-FR", {
            timeZone: active.zone,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    if (city) {
        city.textContent = active.name;
    }
}

updateClocks();
setInterval(updateClocks, 1000);


// =========================
// PLEIN ÉCRAN
// =========================

const fullscreenBtn = document.getElementById("fullscreen-btn");

if (fullscreenBtn) {

    fullscreenBtn.addEventListener("click", function() {

        const container =
            document.getElementById("main-clock-container");

        if (!document.fullscreenElement) {

            container.requestFullscreen();

        } else {

            document.exitFullscreen();

        }

    });
}


// =========================
// COULEURS
// =========================

const bleu = document.getElementById("bleu-btn");
const bordeaux = document.getElementById("bordeaux-btn");
const kaki = document.getElementById("kaki-btn");


function changerCouleur(fond, cartes, bannieres, neon) {

    document.body.style.background = fond;

    document.querySelectorAll(".main-clock, .card").forEach(function(element) {
        element.style.background = cartes;
    });

    document.querySelectorAll(".banner").forEach(function(element) {
        element.style.background = bannieres;
    });

    document.body.style.setProperty("--neon", neon);
}


// BLEU

if (bleu) {

    bleu.addEventListener("click", function() {
changerCouleur(
    "#07111f",
    "#0b1829",
    "linear-gradient(135deg, #102238, #081321)",
    "#00aaff"
);

    });

}
function changerCouleur(fond, cartes, bannieres, neon) {

    document.body.style.background = fond;

    document.querySelectorAll(".main-clock, .card").forEach(function(element) {
        element.style.background = cartes;
    });

    document.querySelectorAll(".banner").forEach(function(element) {
        element.style.background = bannieres;
    });

    document.body.style.setProperty("--neon", neon);
}

// BORDEAUX

if (bordeaux) {

    bordeaux.addEventListener("click", function() {
changerCouleur(
    "#260d12",
    "#3a141b",
    "#3a141b",
    "#ff1744"
);

    });

}


// KAKI

if (kaki) {

    kaki.addEventListener("click", function() {
changerCouleur(
    "#30382a",
    "#3f4936",
    "#3f4936",
    "#b6ff00"
);

    });

}
window.addEventListener("load", function() {
    window.scrollTo(0, 0);
});
