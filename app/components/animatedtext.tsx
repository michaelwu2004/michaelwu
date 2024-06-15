import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string
}

export const AnimatedText = (props: AnimatedTextProps) => {

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each character animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {props.text.split("").map((char, index) => (
        char === " " ? ( // Check if character is white space
          <span key={index} className="text-3xl">&nbsp;</span> // Render white space
        ) : (
          <motion.span className="text-white text-3xl font-bold font-mono" key={index} variants={childVariants}>
            {char}
          </motion.span>
        )
      ))}
    </motion.div>
  );
};