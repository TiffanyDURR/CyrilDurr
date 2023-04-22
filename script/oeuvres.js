const roman01Container = document.querySelector(".livre-content-01");
const roman02Container = document.querySelector(".livre-content-02");

const dropDown01 = document.querySelector(".roman-01 .fa-angle-down");
const dropUp01 = document.querySelector(".roman-01 .fa-angle-up");

const dropDown02 = document.querySelector(".roman-02 .fa-angle-down");
const dropUp02 = document.querySelector(".roman-02 .fa-angle-up");

dropDown01.addEventListener("click", () => {
  roman01Container.style.display = "block";
  dropUp01.style.display = "inline-block";
  dropDown01.style.display = "none";
});

dropUp01.addEventListener("click", () => {
  roman01Container.style.display = "none";
  dropUp01.style.display = "none";
  dropDown01.style.display = "inline-block";
});

dropDown02.addEventListener("click", () => {
  roman02Container.style.display = "block";
  dropUp02.style.display = "inline-block";
  dropDown02.style.display = "none";
});

dropUp02.addEventListener("click", () => {
  roman02Container.style.display = "none";
  dropUp02.style.display = "none";
  dropDown02.style.display = "inline-block";
});
