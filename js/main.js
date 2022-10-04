window.onload = () => {
  let allProgressElement = document.querySelectorAll(
    ".yearly-targets .prog span"
  );
  let section = document.querySelector(".our-skills");
  allProgressElement.forEach((ele) => {
    ele.style.width = ele.dataset.width;
  });
};
