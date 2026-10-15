/* 
  Name: Jakub Szymczak
  Lab: 8
*/

const name = "Ada";

let labsCompleted = 6;

let isEnrolled = false;

labsCompleted = labsCompleted + 1;

console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");

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
    likes: 0, 
    increment() {
        this.likes = this.likes + 1;
        this.render();
    },
    render() {
        likeCount.textContent = `${this.likes} likes`;
    }
};

likeBtn.addEventListener("click", function() {
    LikeCounter.increment();
});

themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const goals = [
    "Mastery of flexbox in CSS",
    "Using APIs",
    "Deploying projects to the cloud",
    "Git"
];

const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
});

const likeMessage = document.querySelector("#like-message");

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