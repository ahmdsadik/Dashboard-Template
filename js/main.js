window.onload = () => {
  let allProgressElement = document.querySelectorAll(
    ".yearly-targets .prog .main-span"
  );
  allProgressElement.forEach((ele) => {
    let prog = ele.firstElementChild.innerHTML.replace(/.$/, "");
    var width = 0;
    var id = setInterval(frame,40);
    function frame() {
      if (width >= prog) {
        clearInterval(id);
      } else {
        width++;
        ele.style.width = width + "%";
        ele.firstElementChild.innerHTML = width * 1 + "%";
      }
    }
  });
};
