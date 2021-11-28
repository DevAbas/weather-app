export const logoVariants = {
  hidden: { y: -20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.8 },
  },
};

export const searchLocationVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.8, delay: 0.4 },
  },
};

export const cityNameContainerVariants = {
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 1,
    },
  },
};

export const cityNameItemVariants = {
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
