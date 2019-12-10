const links = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightText() {
  const linkRect = this.getBoundingClientRect();
  const coords = {
    width: linkRect.width,
    height: linkRect.height,
    top: window.scrollY + linkRect.top,
    left: window.scrollX + linkRect.left
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
  console.log(coords);
}

links.forEach(link => link.addEventListener("mouseenter", highlightText));
