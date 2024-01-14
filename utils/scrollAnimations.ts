const revealElementsOnScroll = () => {
  const elementsToReveal = document.querySelectorAll(".reveal");

  elementsToReveal.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", revealElementsOnScroll);
}

export default revealElementsOnScroll;
