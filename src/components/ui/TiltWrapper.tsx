import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type TiltWrapperProps = {
  children: React.ReactNode;
  rotateAmplitude?: number;
  scaleOnHover?: number;
};

const TiltWrapper = ({
  children,
  rotateAmplitude = 8,
  scaleOnHover = 1.02,
}: TiltWrapperProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateYValue = ((posX - midX) / midX) * rotateAmplitude;
    const rotateXValue = ((midY - posY) / midY) * rotateAmplitude;

    x.set(rotateYValue);
    y.set(rotateXValue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scaleOnHover }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      {children}
    </motion.div>
  );
};

export default TiltWrapper;
