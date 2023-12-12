const allStories = [
    {
        thumbUrl: "assets/img/avatar2.png",
        imageUrl: "assets/img/story1.png",
        title: "Title No. 1",
    },
    {
        thumbUrl:"assets/img/avatar2.png",
        imageUrl: "assets/img/story2.png",
        title: "Title No. 2",
    },
    {
        thumbUrl: "assets/img/avatar3.jpg",
        imageUrl: "assets/img/story3.png",
        title: "Title No. 3",
    },
    {
        thumbUrl: "assets/img/avatar4.avif",
        imageUrl: "assets/img/story4.png",
        title: "Title No. 4",
    },
    {
        thumbUrl: "assets/img/avatar5.jpg",
        imageUrl: "assets/img/story5.png",
        title: "Title No. 5",
    },
    {
        thumbUrl: "assets/img/avatar6.jpg",
        imageUrl: "assets/img/story6.png",
        title: "Title No. 6",
    },
    {
        thumbUrl: "assets/img/avatar7.jpg",
        imageUrl: "assets/img/story7.png",
        title: "Title No. 7",
    },
    {
        thumbUrl: "assets/img/avatar8.jpg",
        imageUrl: "assets/img/story8.png",
        title: "Title No. 8",
    },
];

const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");
const storyFullTitle = document.querySelector(".story-full .title");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");

let currentIndex = 0;

allStories.forEach((s, i) => {
    const content = document.createElement("div");
    content.classList.add("content");

    const img = document.createElement("img");
    img.setAttribute("src", s.thumbUrl);

    storiesContainer.appendChild(content);
    content.appendChild(img);

    content.addEventListener("click", () => {
        currentIndex = i;
        storyFull.classList.add("active");
        storyFullImage.setAttribute("src", s.imageUrl);

        if (!s.title) {
            storyFullTitle.style.display = "none";
        }
        else {
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = s.title;
        }
        
    });
});

closeBtn.addEventListener("click", () => {
    storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
        currentIndex -= 1;
        if (!allStories[currentIndex].title) {
            storyFullTitle.style.display = "none";
        }
        else {
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = allStories[currentIndex].title;
        }
    }
});
rightArrow.addEventListener("click", () => {
    if (currentIndex < allStories.length - 1) {
        storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
        currentIndex += 1;
        if (!allStories[currentIndex].title) {
            storyFullTitle.style.display = "none";
        }
        else {
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = allStories[currentIndex].title;
        }
    }
});