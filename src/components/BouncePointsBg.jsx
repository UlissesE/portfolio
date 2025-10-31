import * as motion from "motion/react-client";

export default function BouncePointsBg() {
    return (

        <div className="fixed inset-0 z-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: 0,
                }}
                animate={{
                    y: [null, Math.random() * window.innerHeight],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                }}
                />
            ))}
          </div>
)
}