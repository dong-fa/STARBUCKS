const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// search 라는 클래스의 하위요소에 클릭하면 포커스 기능을 추가함
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
