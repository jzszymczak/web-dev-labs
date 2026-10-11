const name = "Ada";

let labsCompleted = 6;

let isEnrolled = false;

labsCompleted = labsCompleted + 1;

console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");

let likes = 0;

likeBtn.addEventListener("click", () => {
    likes = likes + 1;
    likeCount.textContent = `${likes} likes`;
});

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});