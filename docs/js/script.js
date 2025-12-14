// Animate skill bars when scroll reaches skills section
const skills = document.querySelectorAll(".skill .progress");

function fillSkills() {
  const skillsTop = document.querySelector("#skills").offsetTop;
  const scrollTop = window.scrollY + window.innerHeight;

  if (scrollTop > skillsTop + 100) {
    skills.forEach(skill => {
      skill.style.width = skill.getAttribute("data-width");
    });
  }
}

window.addEventListener("scroll", fillSkills);
