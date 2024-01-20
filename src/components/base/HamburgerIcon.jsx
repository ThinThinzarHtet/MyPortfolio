import { motion } from "framer-motion";
const HamburgerIcon = ({
  showMenu = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = null,
  lineProps = null,
  ...props
}) => {
  const variant = showMenu ? "openedMenu" : "closedMenu";
  const top = {
    closedMenu: {
      rotate: 0,
      translateY: 0,
    },
    openedMenu: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closedMenu: {
      opacity: 1,
    },
    openedMenu: {
      opacity: 0,
    },
  };
  const bottom = {
    closedMenu: {
      rotate: 0,
      translateY: 0,
    },
    openedMenu: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default HamburgerIcon;