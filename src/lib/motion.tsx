"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

const MotionSection = (props: ComponentProps<typeof motion.section>) => (
  <motion.section {...props} />
);
const MotionH1 = (props: ComponentProps<typeof motion.h1>) => (
  <motion.h1 {...props} />
);
const MotionH2 = (props: ComponentProps<typeof motion.h2>) => (
  <motion.h2 {...props} />
);
const MotionH3 = (props: ComponentProps<typeof motion.h3>) => (
  <motion.h3 {...props} />
);
const MotionP = (props: ComponentProps<typeof motion.p>) => (
  <motion.p {...props} />
);
const MotionUl = (props: ComponentProps<typeof motion.ul>) => (
  <motion.ul {...props} />
);
const MotionLi = (props: ComponentProps<typeof motion.li>) => (
  <motion.li {...props} />
);

/**
 * This is a wrapper around the motion.section component that allows us to use the motion.section component in server components
 */
export {
  MotionSection,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionP,
  MotionUl,
  MotionLi,
};
