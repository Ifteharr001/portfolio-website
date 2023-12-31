import { styles } from "../styles";
import { services } from "../contents";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc/SectionWrapper/index";
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          style={{
            maxWidth: "100%",
            transform: "scale(1)",
            transitionDuration: "450ms",
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}


const About = () => {
  About.displayName = "About";
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled web developer with experience in JavaScript and MERN Stack
        web development, expertise in frameworks like React, Node.js, Next.js,
        express js and Three.js. I'm a quick learner and collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions
        that solve real=world problems. Let's work together to bring your ideas
        to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export { About };
export default SectionWrapper(About, "about");