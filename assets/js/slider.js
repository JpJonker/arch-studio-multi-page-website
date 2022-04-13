const sliderBtns = document.getElementsByClassName("slider-btn");
const sliderBg = document.getElementsByClassName("intro")[0];
const sliderHeader = document.getElementsByClassName("intro-header")[0];
const sliderText = document.getElementsByClassName("intro-text")[0];

const paramourSlider = {
  heading: "Project Paramour",
  text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  src: "./assets/home/desktop/image-hero-paramour.jpg",
};

const seraphSlider = {
  heading: "Seraph Station",
  text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  src: "./assets/home/desktop/image-hero-seraph.jpg",
};

const federalSlider = {
  heading: "Federal II Tower",
  text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  src: "./assets/home/desktop/image-hero-federal.jpg",
};

const trinitySlider = {
  heading: "Trinity Bank Tower",
  text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  src: "./assets/home/desktop/image-hero-trinity.jpg",
};

function displaySlider(slider) {
  sliderHeader.textContent = slider.heading;
  sliderText.textContent = slider.text;
  sliderBg.style.background = `url(${slider.src}`;
}

for (let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].addEventListener("click", () => {
    let sliderBtnActive = document.getElementsByClassName("active")[0];
    sliderBtnActive.classList.toggle("active");
    sliderBtns[i].classList.toggle("active");
    switch (sliderBtns[i].textContent) {
      case "01":
        displaySlider(paramourSlider);
        return;
      case "02":
        displaySlider(seraphSlider);
        return;
      case "03":
        displaySlider(federalSlider);
        return;
      case "04":
        displaySlider(trinitySlider);
        return;
    }
  });
}
