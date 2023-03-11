export const popUp = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

export const popUpFromBottomForText = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

export const headingFromLeft = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 70,
    },
  },
};

// top Navbar

export const fromLeftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const fromTopVariant = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const opacityVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2 } },
};

export const hamFastFadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

export const mobileNavItemSideways = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const FadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.1 },
  },
};

export const svgVariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

export const searchBarSlideAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      type: "linear",
      duration: 1,
    },
  },
};

export const NoteCardAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};
