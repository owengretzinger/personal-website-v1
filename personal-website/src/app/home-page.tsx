'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image'

import { PaletteContext } from './palette-provider';
import { ScrollingDisabledContext } from './scrolling-disabled-provider';

import Nav from "../components/nav";
import TextLink, { ButtonLinkScrollOnClick } from '../components/textLink';
import OutlineButton from '../components/outlineButton';
import SocialButtons from '../components/socialButtons';
import FadeInOnScroll from '@/components/fadeInOnScroll';
import ColourPaletteButton from '../components/colourPaletteButton';
import { Wave1, Wave2, Wave3, Wave4 } from '../components/waves';

import websiteSections from '../../lib/websiteSections';
import handleClickScroll from '../../lib/clickScroll';

import { BsTag } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { FaItchIo } from 'react-icons/fa'
import { FiExternalLink, FiAward } from 'react-icons/fi'
import { RiArticleLine } from 'react-icons/ri'
import Link from 'next/link';

const resumeLink = "/resume.pdf";

const SectionHeader = (title: string, id: string) => {
  return (
    <FadeInOnScroll>
      <div className="relative flex py-5 items-center mt-20" id={id.toLowerCase()}>
        <div className="flex-grow border border-grey"></div>
        <span className="flex-shrink mx-4 text-black text-4xl">{title}</span>
        <div className="flex-grow border border-grey"></div>
      </div>
    </FadeInOnScroll>
  )
}


export default function Website({ articleData }: { articleData: { id: string; title: string; subtitle: any; dateCreated: any; dateModified: any; priority: number; }[] }) {
  const [, setScrollingDisabled] = useContext(ScrollingDisabledContext);
  const [paletteIndex, setPaletteIndex] = useContext(PaletteContext);

  return (
    <>
        <Wave1 />
        <Nav>
          {websiteSections(false).map((text, index) => {
            return (
              <li key={text} >
                <FadeInOnScroll delay={index + 8} waitForLoad={true} noDelayOnMobile={true}>
                  <button onClick={() => { handleClickScroll(text.toLowerCase()); setScrollingDisabled(false); }} className="group flex">
                    <p className="text-orange">{index + 1}.&nbsp;</p>
                    <p className="group-hover:text-orange transition">{text}</p>
                  </button>
                </FadeInOnScroll>
              </li>
            )
          })}
          <FadeInOnScroll delay={12} waitForLoad={true} noDelayOnMobile={true}>
            {/* <li key={"Resume"} >{OutlineButton("Resume", resumeLink)}</li> */}
          </FadeInOnScroll>
          <FadeInOnScroll delay={13} waitForLoad={true} noDelayOnMobile={true}>
            <li key="Colour Palette">{ColourPaletteButton(paletteIndex, setPaletteIndex)}</li>
          </FadeInOnScroll>
        </Nav>

        <main className="px-5 lg:px-20 xl:px-40 relative">
          <section className='min-h-screen w-full flex items-center' id="home">
            <div className="w-full flex flex-col lg:flex-row justify-between mt-32 lg:mt-0">
              <div className="lg:w-7/12 max-w-[650px] space-y-6 self-center">
                <FadeInOnScroll delay={5} waitForLoad={true}><h2 className="text-xl xl:text-2xl">Hi, my name is</h2></FadeInOnScroll>
                <FadeInOnScroll delay={7} waitForLoad={true}><h1 className="text-4xl xl:text-5xl">Owen Gretzinger.</h1></FadeInOnScroll>
                <FadeInOnScroll delay={9} waitForLoad={true}>
                  <h2 className="text-xl xl:text-2xl">I’m a software developer on a mission
                    to {<TextLink text="spread love" href="/articles/a-mission-to-spread-love" newWindow="false" breakWords="false" />}, one line of code at a time.
                    My priority is producing excellent work while communicating with precision and clarity.</h2>
                </FadeInOnScroll>
                <FadeInOnScroll delay={11} waitForLoad={true}>
                  {SocialButtons()}
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll delay={13} waitForLoad={true}>
                <div className={`flex-1 self-center p-10 lg:py-0`}>
                  <Image src={require("../../public/images/pfp_standing_outdoors.png")} alt="Me" priority placeholder='blur'
                    className={`w-full max-w-[334px] rounded-xl shadow-2xl mx-auto`} />
                </div>
              </FadeInOnScroll>
            </div>
          </section>

          <Wave2 />

          <section>
            {SectionHeader("About Me", "About")}
            <div className="flex flex-col space-y-10 my-5 lg:space-y-20 lg:my-10">

              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between show-on-scroll">
                <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                  <FadeInOnScroll delay={2}>
                    <h2 className="text-2xl pb-4">Education:</h2>
                  </FadeInOnScroll>
                  <FadeInOnScroll delay={3}>
                    <p className="text-base pb-6 lg:pb-0">
                      I take computer science at McMaster University, where I’m a Year Representative for the Computer Science Society.
                      More information can be found on my {<TextLink text="resume" href={resumeLink} />}!
                    </p>
                  </FadeInOnScroll>
                </div>


                <FadeInOnScroll delay="calculate" className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] rounded-[20px] drop-shadow-xl lg:ml-5 bg-white">
                  <div className="w-full h-full outline outline-[3px] outline-black rounded-[20px] overflow-hidden flex">
                    <div className="basis-[40%] lg:basis-[30%] min-[1100px]:basis-[40%] border-r-[3px] border-black flex justify-center items-center bg-[#69143B]">
                      <Image src={require("../../public/images/mcmaster-logo.png")} alt="McMaster University Logo"
                        className="w-3/4" />
                    </div>
                    <div className="flex flex-col justify-between basis-[60%] lg:basis-[70%] min-[1100px]:basis-[60%] ml-1 my-1">
                      <div className="flex flex-col">
                        <h3 className="text-lg min-[475px]:text-2xl">McMaster University</h3>
                        <p className="text-xs min-[475px]:text-base text-grey">Hamilton, ON</p>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-base min-[475px]:text-lg">Computer Science Co-op</h4>
                        <p className="text-xs min-[475px]:text-base text-grey">B.A.Sc.</p>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-base min-[475px]:text-lg">Level II</h4>
                        <p className="text-xs min-[475px]:text-base text-grey">April 2025 Expected Graduation</p>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>


              </div>



              <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:justify-between show-on-scroll">
                <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                  <FadeInOnScroll delay={2}>
                    <h2 className="text-2xl pb-4 lg:text-right">Experience:</h2>
                  </FadeInOnScroll>
                  <FadeInOnScroll delay={3}>
                    <p className="text-base pb-6 lg:pb- lg:text-right">
                      I’m currently doing a co-op at {<TextLink text="Arctic Wolf" href="https://arcticwolf.com/" breakWords="false" />}, where I work on the security services triage team.
                      I'm thankful for this opportunity to work at a {<TextLink text="top rated workplace" href="https://arcticwolf.com/resources/press-releases/fortune-and-great-place-to-work-rank-arctic-wolf-as-top-10-2022-best-medium-workplaces" breakWords="false" />}! #jointhepack
                    </p>
                  </FadeInOnScroll>
                </div>
                <FadeInOnScroll delay="calculate" className="basis-1/2 w-full max-w-[500px] aspect-[5/2.22] rounded-[20px] drop-shadow-2xl lg:mr-5 ">
                  <div className="w-full h-full outline outline-[3px] outline-black rounded-[20px] overflow-hidden">
                    <Image src={require("../../public/images/arctic-wolf.png")} alt="Arctic Wolf 'I've joined the pack' Image"
                      className="" />
                  </div>
                </FadeInOnScroll>
              </div>



              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between show-on-scroll">
                <div className="basis-1/2 max-w-[500px] lg:max-w-full ">
                  <FadeInOnScroll delay={2}>
                    <h2 className="text-2xl pb-4">Personal:</h2>
                  </FadeInOnScroll>
                  <FadeInOnScroll delay={3}>
                    <p className="text-base pb-6 lg:pb-0">
                      When I’m not at school or work, I can be found reading, volunteering with youth, playing the drums,
                      or coding projects of my own!</p>
                  </FadeInOnScroll>
                </div>


                <FadeInOnScroll className="relative basis-1/2 w-full max-w-[500px] aspect-[5/2.22] lg:ml-5 drop-shadow-xl">
                  <div className="absolute w-full h-full flex justify-end items-start rounded-[20px] drop-shadow-xl">
                    <Image src={require("../../public/images/personal-3.png")} alt="Me playing the drums with a band"
                      className="w-fit h-[83.33%] rounded-[20px] outline outline-[3px] outline-black" />
                  </div>
                  <div className="absolute w-full h-full flex justify-center items-center rounded-[20px] drop-shadow-xl">
                    <Image src={require("../../public/images/personal-2.png")} alt="Me getting pied in the face by a youth"
                      className="w-fit h-[83.33%] rounded-[20px] outline outline-[3px] outline-black" />
                  </div>
                  <div className="absolute w-full h-full flex justify-start items-end rounded-[20px] drop-shadow-xl">
                    <Image src={require("../../public/images/personal-1.png")} alt="Me singing and leading youth"
                      className="w-fit h-[83.33%] rounded-[20px] outline outline-[3px] outline-black" />
                  </div>
                </FadeInOnScroll>

              </div>

            </div>
          </section>

          <Wave3 />

          <section>
            {SectionHeader("Projects", "Projects")}
            <Projects />
          </section>

          <section>
            {SectionHeader("Articles", "Articles")}
            <ul className="flex flex-col text-center space-y-4">
              {
                articleData.map((article, index) => {
                  return (
                    <li key={article.id}>
                      <FadeInOnScroll delay={index * 2 + 2}>
                        <h2 className="text-2xl">
                          {<TextLink text={article.title} href={`/articles/${article.id}`} newWindow="false" />}
                        </h2>
                        <h3 className="text-sm text-grey">{article.subtitle}</h3>
                      </FadeInOnScroll>
                    </li>
                  )
                })
              }
            </ul>
          </section>


          <div className="h-screen flex flex-col justify-between">
            <section className="h-full flex flex-col justify-center">
              {SectionHeader("Let's Connect", "Contact")}
              <div className="flex flex-col pt-12 space-y-16 text-center items-center">
                <FadeInOnScroll>
                  <p className="text-grey">
                    Thank you for checking out my website!<br /><br />
                    Let me know if you have any questions or suggestions,<br />
                    and feel free to contact me for any reason.
                  </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="min-w-[368px]">
                    {SocialButtons()}
                  </div>
                </FadeInOnScroll>
              </div>

            </section>
            <footer className="text-grey text-center my-10">Designed & Built by Owen Gretzinger</footer>
          </div>

        </main>

        <Wave4 />
    </>
  )
}


function Projects() {
  const projectInfo = [
    {
      "id": "personal-website",
      "title": "Personal Website",
      "subtitle": "Personal Project",
      "description":
        <p>
          Glad you’re here! {<ButtonLinkScrollOnClick text="Let me know" scrollTo="contact" func={handleClickScroll("contact")} />} if anything isn’t working properly.
        </p>,
      "tags": ["REACT", "TAILWIND", "NEXT.JS"],
      "links": {
        "github": "https://github.com/owengretzinger/personal-website",
        "article": "/articles/personal-website"
      }
    },
    {
      "id": "education-data-for-change",
      "title": "Education Data for Change",
      "subtitle": "Hackathon & Personal Project",
      "description":
        <p>
          Search for public schools in Ontario to view their EQAO and income data.
          Originally created for {<TextLink text="DeltaHacks IX" href="https://deltahacks.com" />} (2023), then improved in the following week.
        </p>,
      "tags": ["HTML", "SQL", "JAVASCRIPT"],
      "links": {
        "open": "https://owengretzinger.github.io/education-data-for-change/",
        "article": "/articles/education-data-for-change",
        "github": "https://github.com/owengretzinger/education-data-for-change",
      }
    },
    {
      "id": "triangle-ball",
      "title": "Triangle Ball",
      "subtitle": "Personal Project",
      "description":
        <p>
          I learned how to code by creating this game over the span of years.
          Features highly effective bots that were implemented by applying university level calculus.
          I also created all the art.
        </p>,
      "tags": ["C#", "Unity"],
      "links": {
        "itch": "https://owengretzinger.itch.io/triangle-ball",
        "article": "/articles/triangle-ball",
        "github": "https://github.com/owengretzinger/triangle-ball",
      }
    },
    {
      "id": "server-insights",
      "title": "Server Insights",
      "subtitle": "Hackathon & Personal Project",
      "description":
        <p>
          Discord bot that won my high school’s hackathon (2021), then was improved in the following weeks.
          Analyzes messages sent in a discord server and creates graphs.
        </p>,
      "tags": ["PYTHON"],
      "links": {
        "github": "https://github.com/owengretzinger/server-insights",
        "award": "https://devpost.com/software/server-insights",
      }
    },
    {
      "id": "tempestuous-turrets",
      "title": "Tempestuous Turrets",
      "subtitle": "Hackathon Project",
      "description":
        <p>
          Game created in 32 hours for {<TextLink text="Hack the North" href="https://hackthenorth.com" />} (2022).
          Clicking the card links to play it in the web,
          but it runs more smoothly if you {<TextLink text="download it on itch.io" href="https://owengretzinger.itch.io/tempestuous-turrets" />}.
        </p>,
      "tags": ["C#", "UNITY"],
      "links": {
        "open": "http://tempestuousturrets.tech/",
        "github": "https://github.com/owengretzinger/tempestuous-turrets",
        "itch": "https://owengretzinger.itch.io/tempestuous-turrets",
      }
    },
    {
      "id": "binary-0101",
      "title": "Binary 0101",
      "subtitle": "School Project",
      "description":
        <p>
          Web app that teaches the basics of binary, targeted towards high school students.
          Created while following the design thinking process for a software design class.
        </p>,
      "tags": ["ELM", "DESIGN THINKING"],
      "links": {
        "open": "https://cs1xd3.online/ShowModulePublish?modulePublishId=0a6330dc-6e05-447c-820f-293aca08929a&fullscreen=true",
        "github": "https://github.com/owengretzinger/binary-0101",
      }
    },
  ]
  const nameToIcon = { "open": FiExternalLink, "article": RiArticleLine, "github": FiGithub, "award": FiAward, "itch": FaItchIo }
  const [cardHovered, setCardHovered] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center my-5">
      {projectInfo.map((project, i) =>
          <FadeInOnScroll key={project.id} delay={"calculate"} className="relative w-full max-w-[500px] lg:aspect-[5/2.22]">
            <div className="relative w-full h-full drop-shadow-[0_4px_3px_rgb(0,0,0,0.5)] lg:hover:-translate-y-2 lg:hover:drop-shadow-[0_12px_3px_rgb(0,0,0,0.5)] lg:transition-[box-shadow,_transform,_filter] lg:duration-300 lg:ease-out">
              <div
                className={`w-full h-full rounded-[20px] overflow-hidden outline outline-[3px] outline-black bg-white flex flex-col lg:flex-row 
                         ${i % 2 == 0 ? "lg:justify-self-end" : "lg:justify-self-start"}`}>
                <Link href={project.links.open ? project.links.open : project.links.github ? project.links.github : "/not-found"} target="_blank"
                  onMouseOver={() => setCardHovered(project.id)} onMouseLeave={() => setCardHovered("")}
                  className="absolute w-full h-full bg-white opacity-0 z-10"></Link>
                <div className="lg:basis-[30%] min-[1100px]:basis-[40%] aspect-[3/2] lg:aspect-auto relative border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black flex justify-center items-center">
                  <Image src={require(`../../public/images/projects-images/${project.id}/${project.id}-thumbnail.png`)} alt={`${project.id} thumbnail`}
                    className="absolute w-full h-full lg:rounded-tr-none lg:rounded-bl-[20px] object-cover brightness-[80%]" />
                  <Image src={require(`../../public/images/projects-images/${project.id}/${project.id}-icon.png`)} alt={`${project.id} icon`}
                    className="absolute w-5/12 lg:w-1/2 aspect-square rounded-full border-[3px] border-black" />
                </div>
                <div className="flex flex-col lg:basis-[70%] min-[1100px]:basis-[60%] ml-1 my-1">
                  <div className="flex">
                    <div className="basis-[91%] flex flex-col">
                      <h2 className="text-md">
                        <a className={`whitespace-nowrap relative  text-decoration: none; ${cardHovered == project.id ? "text-orange" : "text-black"} 
                                before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                                before:bottom-0 before:left-0 before:bg-orange before:origin-top-left 
                                before:transition before:duration-300 before:ease-in-out ${cardHovered == project.id ? "before:scale-x-100" : "before:scale-x-0"}
                                transition duration-300`}>
                          {project.title}
                        </a>
                      </h2>
                      <h3 className="font-medium text-sm text-grey -mt-1">{project.subtitle}</h3>
                      <div className="font-normal text-sm my-2 leading-[18px]">
                        {project.description}
                      </div>
                    </div>
                    <div className="basis-[9%] flex flex-col items-end gap-2 p-2 pl-1">
                      {Object.keys(project.links).map((link) =>
                        <a key={link} href={project.links[link as keyof typeof project.links]} target={link === "article" ? "_self" : "_blank"} className="z-20">
                          {nameToIcon[link as keyof typeof nameToIcon]({ className: "w-6 h-6 text-orange lg:text-black lg:hover:text-orange lg:transition" })}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex mt-auto space-x-1">
                    {project.tags.map((tag) =>
                      <div key={tag} className="flex rounded-full border-2 border-blue items-center">
                        {BsTag({ className: "text-blue stroke-[0.5px] w-5 aspect-square pl-1" })}
                        <p className="font-bold text-xs text-blue py-0.5 pr-1.5">{tag}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
      )}
    </div>
  );
}