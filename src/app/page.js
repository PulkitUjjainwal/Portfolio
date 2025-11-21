"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useForm } from "@formspree/react";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMediumSquare,
  AiFillMail,
  AiFillRobot,
  AiOutlineClose,
} from "react-icons/ai";
import {
  BiLogoReact,
  BiLogoJava,
  BiLogoPython,
  BiLogoJavascript,
  BiLogoAngular,
  BiLogoNodejs,
  BiLogoSpringBoot,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import {
  SiApachemaven,
  SiExpress,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiHtml5,
} from "react-icons/si";

import profile from "../../public/profile.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import ecom from "../../public/ecomm.png";
import movie from "../../public/movie.png";
import senti from "../../public/senti.png";
import FlySmart from "../../public/FlySmart2.png";
import estate from "../../public/real_estate.png";
// import portfolio from "../../public/Portfolio1.png";
import image_upload from "../../public/image_upload_preview.jpeg";

const portfolioStyle = {
  layout: "responsive",
  hover: "opacity-75",
};

const scroll = {
  scrollBehavior: "smooth !important",
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, handleSubmit] = useForm("mrgwzblg");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  if (state.succeeded) {
    return (
      <p className="text-5xl text-cyan-500 justify-center items-center flex py-50">
        Submitted Successfully
      </p>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-dancing dark:text-white ">
              {" "}
              <a href="#"> Hi, I'm Pulkit </a>{" "}
            </h1>
            <nav className="hidden lg:block md:block">
              <ul className="flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4">
                <li className="hover:text-cyan-500">
                  {" "}
                  <a href="#about" style={scroll}>
                    About
                  </a>{" "}
                </li>
                <li className="hover:text-cyan-500">
                  {" "}
                  <a href="#skills" style={scroll}>
                    Skills
                  </a>{" "}
                </li>
                <li className="hover:text-cyan-500">
                  {" "}
                  <a href="#services" style={scroll}>
                    Services
                  </a>{" "}
                </li>
                <li className="hover:text-cyan-500">
                  {" "}
                  <a href="#projects" style={scroll}>
                    Projects
                  </a>{" "}
                </li>
                <li className="hover:text-cyan-500">
                  {" "}
                  <a href="#contact" style={scroll}>
                    Contact
                  </a>{" "}
                </li>
              </ul>
            </nav>

            <ul className="flex items-center justify-end">
              <li>
                {" "}
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-200"
                />{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://drive.google.com/file/d/1yD94dPb3gzq2stG_L3waDoJn8GWk8eP2/view?usp=sharing"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-cyan-700 to-cyan-500 px-6 py-2 text-white rounded-sm ml-8">
                    Resume{" "}
                  </button>{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 " id="about">
            <h2 className="text-5xl py-10 text-teal-600 font-medium dark:text-gradient-to-r from-cyan-700 to-cyan-500 md:text-6xl">
              <Typewriter
                options={{
                  strings: ["Hi I'm Pulkit Ujjainwal"],
                  autoStart: true,
                  loop: true,
                  delay: 90,
                  skipAddStyles: true,
                  deleteSpeed: 50,
                  pauseFor: 1000,
                }}
              />
            </h2>

            <h3 className="text-3xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer and ML Enthusiast
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto">
              As a Full Stack Developer and Machine Learning enthusiast, I aim
              to blend front-end and back-end technologies to craft meaningful
              solutions. Proficient in React.js, Vue.js, and Python, with a
              diverse project background, I seek to foster innovation and
              contribute positively to the tech community.
            </p>

            {/* AI Chatbot Call-to-Action */}
            <div className="my-8 p-6 bg-gradient-to-r from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-600 rounded-xl shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-3">
                <AiFillRobot className="text-4xl text-white" />
                <h4 className="text-2xl font-bold text-white">
                  Chat with My AI Assistant
                </h4>
              </div>
              <p className="text-white text-lg mb-4">
                Have questions about my work, skills, or projects? My AI-powered chatbot knows everything about me and can answer your questions instantly!
              </p>
              <button
                onClick={() => setIsChatbotOpen(true)}
                className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md"
              >
                Start Conversation →
              </button>
            </div>

            {/* flex justify-center flex-col items-center */}
            <div className="text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 ">
              <a
                href="https://twitter.com/UjjainwalPulkit"
                className="hover:text-cyan-500"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/pulkit-ujjainwal/ "
                className="hover:text-cyan-500"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/PulkitUjjainwal"
                className="hover:text-cyan-500"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:pulkitujjainwal66@gmail.com"
                className="hover:text-cyan-500"
              >
                <AiFillMail />
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <div id="skills">
          <div>
            <h1
              className="text-5xl text-center font-bold text-teal-600 dark:text-gradient-to-r from-cyan-700 to-cyan-500 mb-10"
              align="center"
            >
              {" "}
              My Skills
            </h1>
          </div>
          <div className="text-center p-10 rounded-xl my-10   ">
            <h2 className="text-3xl p-7 dark:text-gray-200">Languages</h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoCPlusPlus className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                C++
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoPython className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Python
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoJavascript className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Java script
              </div>
            </div>

            <h2 className="text-3xl p-10 my-13 dark:text-gray-200 ">
              Front End
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoReact className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                React
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <SiHtml5 className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                HTML
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoCss3 className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                CSS
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoTailwindCss className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Tailwind CSS
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoBootstrap className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Bootstrap
              </div>
            </div>

            <h2 className="text-3xl p-7 dark:text-gray-200">Back End</h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoNodejs className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                Node Js
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <SiExpress className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />{" "}
                Express Js
              </div>
            </div>

            <h2 className="text-3xl p-7 dark:text-gray-200">Databases</h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-gray-200">
                <BiLogoMongodb className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                MongoDB
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <SiMysql className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48" />
                MySQL
              </div>
            </div>

            <h2 className="text-3xl p-7 dark:text-gray-200">
              Other Technologies
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-xl dark:text-gray-200">
                <SiNumpy className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5" />
                Numpy
              </div>
              <div className="p-2 text-xl dark:text-gray-200">
                <SiPandas className="w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5" />{" "}
                Pandas
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Section here */}

        <section id="services">
          <div>
            <h3 className="text-5xl text-center font-bold text-teal-600 dark:text-gradient-to-r from-cyan-700 to-cyan-500 mb-10">
              Services I Offer
            </h3>
            <p className="text-2xl py-2 leading-8 text-grey-800 dark:text-gray-200">
              As a Full Stack Developer and Machine Learning Enthusiast, I bring
              a diverse skill set offering the following services:
            </p>

            <ul className="text-lg py-2 leading-8 text-grey-800 dark:text-gray-200 text-justify list-disc ml-9 ">
              <li className="my-4">
                {" "}
                <span className="text-cyan-500">
                  Full Stack Web Development{" "}
                </span>{" "}
                : I specialize in designing and developing responsive web
                applications using modern frameworks like React and Node.js,
                backed by robust server-side implementations.
              </li>
              <li className="my-4">
                {" "}
                <span className="text-cyan-500">
                  Data Analysis and Extraction{" "}
                </span>{" "}
                : Leveraging Python, data science, and machine learning, I
                assist businesses in extracting meaningful insights, performing
                exploratory data analysis, and developing predictive models.
              </li>
              <li className="my-4">
                {" "}
                <span className="text-cyan-500">
                  Database Design and Implementation{" "}
                </span>
                : I excel in designing and implementing efficient database
                solutions using MongoDB, ensuring data integrity and scalability
                for web applications and data-driven systems.
              </li>
              <li className="my-4">
                {" "}
                <span className="text-cyan-500">API Development </span>: With
                experience in building RESTful APIs using frameworks like
                Express, I facilitate seamless communication between front-end
                and back-end systems.
              </li>
              <li className="my-4">
                {" "}
                <span className="text-cyan-500">Technical Consulting </span> :
                Providing technical guidance and consulting services, I help
                businesses make informed decisions regarding technology stack
                selection, architecture design, and best practices for software
                development projects.
              </li>
              <li className="my-4">
                {" "}
                <span className="text-cyan-500">
                  Continuous Improvement and Optimization{" "}
                </span>{" "}
                : Dedicated to enhancing application performance and
                scalability, I optimize code and stay updated with the latest
                industry trends and best practices.
              </li>
            </ul>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500">
              <div className="flex justify-center flex-col items-center ">
                <Image src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Full Stack Web Development
                </h3>
                <p className="py-2">
                  Front-end and back-end development, covering the complete
                  technology stack from user interface to server-side logic and
                  database management.{" "}
                </p>
                <h4 className="py-4 text-cyan-500 dark:text-gray-300">
                  Technologies I Use
                </h4>
                <p className="text=grey-800 py-1">React</p>
                <p className="text=grey-800 py-1">Javascript</p>
                <p className="text=grey-800 py-1">MongoDB</p>
                <p className="text=grey-800 py-1">Express Js</p>
                <p className="text=grey-800 py-1">Node Js</p>
              </div>
            </div>

            <div className="text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500">
              <div className="flex justify-center flex-col items-center ">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Machine Learning
                </h3>
                <p className="py-2">
                  Developing algorithms and models that enable computers to
                  learn and make predictions or decisions without being
                  explicitly programmed.
                </p>
                <h4 className="py-4 text-cyan-500 dark:text-gray-300">
                  Technologies I Use
                </h4>
                <p className="text=grey-800 py-1">Python</p>
                <p className="text=grey-800 py-1">Pandas</p>
                <p className="text=grey-800 py-1">Numpy</p>
                <p className="text=grey-800 py-1">Matplotlib</p>
                <p className="text=grey-800 py-1">Sklearn</p>
              </div>
            </div>

            <div className="text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500">
              <div className="flex justify-center flex-col items-center ">
                <Image src={consulting} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Software Development
                </h3>
                <p className="py-2">
                  Designing, coding, testing, and maintaining computer programs
                  and applications to meet specific user or business
                  requirements.
                </p>
                <h4 className="py-4 text-cyan-500 dark:text-gray-300">
                  Technologies I Use
                </h4>
                <p className="text=grey-800 py-1">GitHub</p>
                <p className="text=grey-800 py-1">Docker</p>
                <p className="text=grey-800 py-1">Kubernetes</p>
                {/* <p className='text=grey-800 py-1'>Ansimble</p> */}
                <p className="text=grey-800 py-1">Jenkins</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10" id="projects">
          <div className="py-10">
            <h3 className="text-5xl text-center font-bold text-teal-600 dark:text-gradient-to-r from-cyan-700 to-cyan-500 mb-10s">
              Portfolio
            </h3>
            <div>
              <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                Welcome to my dynamic portfolio—a showcase of my diverse
                expertise in
                <span className="text-cyan-500">
                  {" "}
                  Full Stack Development and Machine Learning
                </span>
                . Here, you'll discover a captivating array of projects that
                embody my passion for innovation and problem-solving:
                <span className="text-cyan-500">
                  {" "}
                  React Dashboard for sales tracking, a comprehensive full-stack
                  solution automating daily policy information dispatch, a
                  captivating Movie Review App, an engaging E-commerce platform,
                  and a cutting-edge Twitter Sentiment Analysis tool.
                </span>
              </p>
              <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                Immerse yourself in my portfolio to experience the fusion of
                creativity, technical prowess, and relentless drive for
                excellence. Each project is a testament to my journey of growth,
                showcasing not only my past accomplishments but also providing
                valuable insights into my problem-solving methodologies and
                professional evolution.
                <br />
                <br />
                Whether you're an employer seeking top-tier talent, a client in
                pursuit of transformative solutions, or a collaborator ready to
                embark on groundbreaking ventures, my portfolio stands as a
                testament to my capabilities. Dive in, explore, and witness
                firsthand the depth of my skills and the potential I bring to
                the table.
              </p>
            </div>
          </div>

          <div className="flex-container grid-template-columns">
            <div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Lorem ipsum dolor sit amet.
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos, dolore.
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={image_upload}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="#"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Lorem, ipsum dolor.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            <div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Lorem ipsum dolor sit amet.
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos, dolore.
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={image_upload}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="#"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Lorem, ipsum dolor.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            <div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Lorem ipsum dolor sit amet.
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos, dolore.
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={image_upload}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="#"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Lorem, ipsum dolor.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            <div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Lorem ipsum dolor sit amet.
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dignissimos, dolore.
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={image_upload}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="#"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Lorem, ipsum dolor.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white dark:bg-gray-950" id="contact">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl text-center font-bold text-teal-600 dark:text-gradient-to-r from-cyan-700 to-cyan-500 mb-10">
              Contact Me
            </h1>
            <form
              className="flex flex-col space-y-6"
              action="https://formsubmit.co/25b7de162e7602202025218b09c47c09"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg dark:text-gray-200 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  className="border-2 border-cyan-500 p-3 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200 focus:outline-none focus:border-cyan-700"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg dark:text-gray-200 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="border-2 border-cyan-500 p-3 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200 focus:outline-none focus:border-cyan-700"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg dark:text-gray-200 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  className="border-2 border-cyan-500 p-3 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200 focus:outline-none focus:border-cyan-700"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                disabled={state.submitting}
                className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 self-center"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Floating Chatbot Button */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-700 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2 group"
          aria-label="Open AI Chatbot"
        >
          <AiFillRobot className="text-3xl" />
          <span className="hidden group-hover:inline-block text-sm font-semibold pr-2 whitespace-nowrap">
            Ask Me Anything
          </span>
        </button>
      )}

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col relative">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-700 to-cyan-500 p-6 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AiFillRobot className="text-4xl text-white" />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Chat with My AI Assistant
                  </h3>
                  <p className="text-sm text-gray-100">
                    Powered by RAG & LangChain
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatbotOpen(false)}
                className="text-white hover:bg-white hover:text-cyan-700 rounded-full p-2 transition-all"
                aria-label="Close"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col items-center gap-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  🤖 My AI-Powered Q&A Bot
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  I've built an intelligent chatbot that knows everything about my work, skills, projects, and experience. It uses advanced RAG (Retrieval-Augmented Generation) technology to answer your questions accurately.
                </p>

                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6 mb-6">
                  <h5 className="font-semibold text-lg text-cyan-700 dark:text-cyan-300 mb-3">
                    What You Can Ask:
                  </h5>
                  <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2">
                    <li>💼 My professional experience and skills</li>
                    <li>🚀 Details about my projects and tech stack</li>
                    <li>🎓 My educational background and achievements</li>
                    <li>🛠️ Technologies I work with (React, Python, ML, etc.)</li>
                    <li>📧 How to contact me or collaborate</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Note: The chatbot opens in a new window on Hugging Face Spaces for the best experience
                </p>
              </div>

              <a
                href="https://huggingface.co/spaces/Pulkit225/AI-Chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-cyan-400 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <AiFillRobot className="text-2xl" />
                Open AI Chatbot
                <span className="text-xl">→</span>
              </a>

              <div className="flex gap-4 mt-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    🧠 RAG-Powered
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Uses vector embeddings for accurate responses
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex-1">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    ⚡ Instant Answers
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Get information about me in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Analytics />
    </div>
  );
}