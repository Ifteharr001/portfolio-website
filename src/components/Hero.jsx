import { motion } from "framer-motion";
import { styles } from "../styles";
import { Bio } from "../contents/index";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
// import { ComputersCanvas } from "./canvas";
const Hero = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: Bio.roles,
      autoStart: true,
      loop: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute  inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7848df]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className={`${styles.heroHeadText} text-white `}>
              Hi, I'm <br /> <span className="text-[#7848df]">{Bio.name}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 mb-4 text-white-100`}>
              I am a <span className="text-[#7848df]" id="typewriter"></span>
            </p>
            <p className="text-secondary lg:w-[700px]">{Bio.description}</p>
            <button
              style={{
                WebkitAppearance: "button",
                MozAppearance: "button",
                appearance: "button",
                textDecoration: "none",
                width: "100%",
                maxWidth: "200px",
                textAlign: "center",
                padding: "12px 0",
                marginTop: "30px",
                color: "white",
                borderRadius: "50px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                transition: "all 0.2s ease-in-out",
                background: "#7848df",
              }}
            >
              <a
                href={Bio.resume}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Check Resume
              </a>
            </button>
          </div>
          <div className="col-span-1">
            <h3>hello..................</h3>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
