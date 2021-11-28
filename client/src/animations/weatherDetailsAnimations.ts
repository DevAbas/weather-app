export const tempratureContainerVariants = {
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 1.2,
    },
  },
};

export const tempratureItemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};

export const weatherDetailsTitleVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: 'easeIn', delay: 1.2 } },
};

export const infoContainerVariants = {
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 1.5,
    },
  },
};

export const infoItemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};
