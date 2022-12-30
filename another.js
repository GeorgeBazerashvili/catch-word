const description = document.getElementById("button");
const section = document.getElementById("section");
const actualDescription = document.getElementById("description");

description.addEventListener("click", () => {
  section.style.visibility = "hidden";
  actualDescription.style.visibility = "visible";
});
