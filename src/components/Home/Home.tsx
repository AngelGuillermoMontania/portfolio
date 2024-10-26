import anime from "animejs";
import { useEffect } from "react";
import TextAbout from "./TextAbout/TextAbout";
import Photo from "./Photo/Photo";

export default function Home() {
  const animateOnScroll = (
    element: Element | null,
    speed = 100,
    offset = 0
  ) => {
    if (element) {
      const scrollPercent =
        window.pageYOffset - element.getBoundingClientRect().top;
      return (scrollPercent - offset) / speed;
    }
    return 0;
  };

  const scrollPercent = () => {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;

    return ((docST + bodyST) / (docSH - docCH)) * 100;
  };

  const onMouseMove = (
    elem: Element | null,
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (elem) {
      elem?.setAttribute(
        "style",
        `--cursor-x: ${e.clientX + "px"}; --cursor-y: ${e.clientY + "px"}`
      );
    }
  };

  const onMouseDown = (elem: Element | null) => {
    elem?.classList.add("is-clicked");
  };

  const onMouseUp = (elem: Element | null) => {
    elem?.classList.remove("is-clicked");
  };

  const onMouseEnter = (elem: Element | null) => {
    elem?.classList.remove("is-hidden");
  };

  const onMouseLeave = (elem: Element | null) => {
    elem?.classList.add("is-hidden");
  };

  useEffect(() => {
    const isLinkHoveredClass = "is-link-hovered";
    const hasCustomCursorClass = "has-custom-cursor";
    const cursorEl = document.querySelector(".cursor");

    const handleLinkHoverEvents = () => {
      document
        .querySelectorAll("a, button, Link, .mouse-hover, input, textarea")
        .forEach((el) => {
          el.addEventListener("mouseover", () =>
            cursorEl?.classList.add(isLinkHoveredClass)
          );
          el.addEventListener("mouseout", () =>
            cursorEl?.classList.remove(isLinkHoveredClass)
          );
        });
    };
    const addEventListeners = () => {
      handleLinkHoverEvents();
    };

    addEventListeners();
    document.body.classList.add(hasCustomCursorClass);

    window.addEventListener("load", () => {
      localStorage.removeItem("theme");
      const dark = document.querySelector("#toggleDark");
      if (dark) {
        dark.addEventListener("click", (e) => {
          if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
          } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
          }
        });
      }
    });

    let animeSkill = anime({
      targets: ".skills div",
      duration: 4000,
      delay: anime.stagger(-100),
      translateX: [-1500, 0],
      scale: [0.2, 1],
      autoplay: false,
      easing: "easeInOutQuad",
      direction: "alternate",
    });
    let animeTitleSkill = anime({
      targets: ".titleSkill",
      duration: 4000,
      delay: 0,
      translateX: [-1500, 0],
      autoplay: false,
      easing: "easeInOutQuad",
    });
    let animeTool = anime({
      targets: ".tools div",
      duration: 4000,
      delay: anime.stagger(-100),
      translateX: [-1500, 0],
      scale: [0.2, 1],
      autoplay: false,
      easing: "easeInOutQuad",
    });
    let animeTitleTool = anime({
      targets: ".titleTool",
      duration: 4000,
      delay: 0,
      translateX: 1500,
      autoplay: false,
      easing: "easeInOutQuad",
    });
    let animeSoft = anime({
      targets: ".softs div",
      duration: 4000,
      delay: anime.stagger(-100),
      translateX: [-1500, 0],
      scale: [0.2, 1],
      autoplay: false,
      easing: "easeInOutQuad",
    });
    let animeTitleSoft = anime({
      targets: ".titleSoft",
      duration: 4000,
      delay: 0,
      translateX: 1500,
      autoplay: false,
      easing: "easeInOutQuad",
    });

    const animeContainProject = anime({
      targets: ".containProject",
      width: [1, 500],
      height: [500, 500],
      autoplay: false,
      delay: function (el, i, l) {
        return i * 3000;
      },
      endDelay: function (el, i, l) {
        return (l - i) * 0;
      },
      rotate: {
        value: function () {
          return anime.random(-4, 4);
        },
        delay: 0,
      },
      opacity: 1,
      duration: 4000,
      easing: "easeInOutQuad",
    });

    const animeContentProject = anime({
      targets: ".contentProject",
      autoplay: false,
      delay: function (el, i, l) {
        return i * 3000;
      },
      endDelay: function (el, i, l) {
        return (l - i) * 0;
      },
      opacity: 1,
      duration: 4000,
      easing: "easeInOutQuad",
    });

    const animeTextCV = anime({
      targets: ".animeTextCV",
      delay: 0,
      easing: "easeOutInSine",
      autoplay: false,
      duration: 4000,
      translateY: [500, 0],
      scale: [1.5, 1],
    });

    const animeCV = anime({
      targets: ".animeCV",
      delay: 0,
      easing: "easeOutInSine",
      autoplay: false,
      duration: 4000,
      translateX: [-200, 0],
      opacity: [0, 1],
      scale: [0.5, 1],
      /* rotate: [15, 0] */
    });

    const animeForm = anime({
      targets: ".animeForm",
      elasticity: 200,
      autoplay: false,
      scale: [0, 1],
      easing: "easeInOutCubic",
      translateX: [0, 400, -100, 0],
      opacity: [0.5, 1],
    });

    const animeIconsContact = anime({
      targets: ".animeIconsContact a",
      elasticity: 200,
      autoplay: false,
      translateX: [-200, 0],
      easing: "easeInOutCubic",
      rotate: [0, 720],
    });

    const scrollPercent = () => {
      const bodyST = document.body.scrollTop;
      const docST = document.documentElement.scrollTop;
      const docSH = document.documentElement.scrollHeight;
      const docCH = document.documentElement.clientHeight;

      return ((docST + bodyST) / (docSH - docCH)) * 100;
    };

    const divSkills = document.querySelector(".skills");
    const titleSkill = document.querySelector(".titleSkill");
    const divTools = document.querySelector(".tools");
    const titleTool = document.querySelector(".titleTool");
    const divSofts = document.querySelector(".softs");
    const titleSoft = document.querySelector(".titleSoft");
    const divContainProject = document.querySelector(".containProject");
    const divContentProject = document.querySelector(".contentProject");
    const divCV = document.querySelector(".animeCV");
    const divTextCV = document.querySelector(".animeTextCV");
    const divForm = document.querySelector(".animeForm");
    const divIconsContact = document.querySelector(".animeIconsContact");

    window.addEventListener("scroll", (e) => {
      animeSkill.seek(
        animateOnScroll(divSkills, 1200, -400) * animeSkill.duration
      );
      animeTitleSkill.seek(
        animateOnScroll(titleSkill, 500, -1000) * animeTitleSkill.duration
      );
      animeTool.seek(
        animateOnScroll(divTools, 1200, -450) * animeTool.duration
      );
      animeTitleTool.seek(
        animateOnScroll(titleTool, 500, -700) * animeTitleTool.duration
      );
      animeSoft.seek(
        animateOnScroll(divSofts, 1200, -150) * animeSoft.duration
      );
      animeTitleSoft.seek(
        animateOnScroll(titleSoft, 500, -200) * animeTitleSoft.duration
      );
      animeContainProject.seek(
        animateOnScroll(divContainProject, 4000, 250) *
          animeContainProject.duration
      );
      animeContentProject.seek(
        animateOnScroll(divContentProject, 4000, 750) *
          animeContentProject.duration
      );
      animeCV.seek(animateOnScroll(divCV, 1000, 3000) * animeCV.duration);
      animeTextCV.seek(
        animateOnScroll(divTextCV, 1000, 2200) * animeTextCV.duration
      );
      animeForm.seek(animateOnScroll(divForm, 3000, 4000) * animeForm.duration);
      animeIconsContact.seek(
        animateOnScroll(divIconsContact, 2500, 3000) *
          animeIconsContact.duration
      );
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      onMouseMove={(e) => onMouseMove(document.querySelector(".cursor"), e)}
      onMouseDown={(e) => onMouseDown(document.querySelector(".cursor"))}
      onMouseUp={(e) => onMouseUp(document.querySelector(".cursor"))}
      onMouseEnter={(e) => onMouseEnter(document.querySelector(".cursor"))}
      onMouseLeave={(e) => onMouseLeave(document.querySelector(".cursor"))}
    >
      <div className="cursor">
        <div className="cursor__inner"></div>
      </div>

      <div
        className="ml-32 h-screen relative z-20 flex-col xl:flex-row text-white flex justify-around items-center snap-center dark:text-black"
        id="about"
      >
        <TextAbout />

        <Photo />
      </div>
    </div>
  );
}
