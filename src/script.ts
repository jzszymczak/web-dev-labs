/* 
  Name: Jakub Szymczak
  Lab: 11
*/
const name = "Ada";

let labsCompleted = 6;

let isEnrolled = false;

labsCompleted = labsCompleted + 1;

console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

/*
let likes = 0;

function incrementLikes() {
    likes = likes + 1;
    updateLikeDisplay();
}

function updateLikeDisplay() {
    likeCount.textContent = `${likes} likes`;
}

if (likeBtn) {
    likeBtn.addEventListener("click", incrementLikes);
} else {
    console.warn("like-btn not found on this page");
}
*/

const LikeCounter = {
    likes: Number(localStorage.getItem("likes")) || 0,
    increment(): void {
        this.likes = this.likes + 1;
        localStorage.setItem("likes", this.likes.toString());
        this.render();
    },

    render(): void {
        if (likeCount) {
            likeCount.textContent = `${this.likes} likes`;
        }
    }
};

LikeCounter.render()

if (likeBtn) {
    likeBtn.addEventListener("click", function() {
        LikeCounter.increment();
    });
}

const themeBtn = document.querySelector("#theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

const goals: string[] = [
    "Mastery of flexbox in CSS",
    "Using APIs",
    "Deploying projects to the cloud",
    "Git"
];

const goalsList = document.querySelector("#goals-list");

if (goalsList) {
    goals.forEach(function(goal: string) {
        const item = document.createElement("li");
        item.textContent = goal;
        goalsList.appendChild(item);
    });
}

/*
function updateLikeDisplay () {
    likeCount.textContent = `${likes} likes`;

    if (likes >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
    } else if (likes >= 5) {
        likeMessage.textContent = "Glad you like it!";
    } else {
        likeMessage.textContent = "";
    }
}
*/


function getGreetingAfterDelay() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello from the future!");
    }, 800);
    });
}

/*
getGreetingAfterDelay().then(function(message) {
    console.log(message);
});
*/

async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}

showGreeting();

const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

interface CatFact {
    fact: string;
    length: number;
}

async function loadFact() {
    if (!factDisplay) {
        return;
    }
    factDisplay.textContent = "Loading fact...";
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("Server responded with an error");
        }
        const data = (await response.json()as CatFact);
        factDisplay.textContent = data.fact;
    } catch (error) {
        factDisplay.textContent = "Couldn't load a fact right now. Try again.";
        console.error(error);
    }
}

if (factBtn) {
    factBtn.addEventListener("click", loadFact);
}

const locationBtn = document.querySelector("#location-btn");
const locationDisplay = document.querySelector("#location-display");

if (locationBtn && locationDisplay) {
locationBtn.addEventListener("click", function() {
    if (!("geolocation" in navigator)) {
        locationDisplay.textContent = "Geolocation isn't supported.";
        return;
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude.toFixed(2);
        const lon = position.coords.longitude.toFixed(2);
        locationDisplay.textContent = `You're near ${lat}, ${lon}`;
    }, function(error) {
        locationDisplay.textContent = "Location access was denied.";
        console.warn(error);
    });
});
}



