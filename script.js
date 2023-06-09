const searchQuery = document.querySelector(".searchQuery");

const after = document.querySelector(".after");
const aftermobile = document.querySelector(".aftermobile");

console.log("fater", aftermobile);

searchQuery.addEventListener("mouseover", () => {
  after.classList.add("slide");
  aftermobile.style.visibility = "hidden";
});

searchQuery.addEventListener("mouseout", () => {
  after.classList.remove("slide");
  //   after.classList.add("slideOut");
});

const hambugger = document.querySelector(".hambugger");
const container__navigation = document.querySelector(".container__navigation");
const icon = document.querySelector(".icon");
const bars = document.querySelector(".bars");

const mobilecontainer = document.querySelector(".mobilecontainer");

hambugger.addEventListener("click", () => {
  if (mobilecontainer.classList.contains("hide")) {
    mobilecontainer.classList.remove("hide");
    icon.classList.remove("icon");
    bars.classList.add("show");
  } else {
    mobilecontainer.classList.add("hide");
    icon.classList.add("icon");
    bars.classList.remove("show");
  }
});
