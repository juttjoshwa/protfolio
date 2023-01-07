import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import code from "../../../src/asset/skills/html .png";
import "./Skills.css";
import Html from "../../../src/asset/skills/html_1.png"
import CSS from "../../../src/asset/skills/css.png"
import JAVA from "../../../src/asset/skills/javsS.png"
import bootstrap from "../../../src/asset/skills/bootstrap.png"
import speed from "../../../src/asset/skills/bootstrapping.png"
import cleanCode from "../../../src/asset/skills/bootstrapping_2.png"
import timeOpptimise from "../../../src/asset/skills/clock.png"
import beautifulLayout from "../../../src/asset/skills/wishlist.png"
import mongoDB from "../../../src/asset/skills/mongodb.png"
import react from "../../asset/skills/react.png"
import express from "../../asset/skills/express.png"
import node from "../../asset/skills/nodejs.png"


const Skills = (props) => {
  const darkcss = props.mode;
  // console.log(darkcss)


  const DecodeColor = {
    color: "aliceblue"
}
let DarkText;
if(darkcss === "dark"){
  DarkText = DecodeColor
}

  const darkStyle = {
    background: "linear-gradient(to right, #6f598b, #978abe, #dfd5ed)",
  }
  let styleDark;
  if (darkcss === "dark") {
    styleDark = darkStyle
  }

  const ColumnStyle = {
    background: "linear-gradient(to right, #6f598b, #6f598b, #8e71b2)",
  }
  let columnStyle;
  if (darkcss === "dark") {
    columnStyle = ColumnStyle;
  }

  return (
    <>
      <div  style={styleDark} className='containerS'>
        <h1>
          <div data-aos="fade-up"><span className='headingText' ><div style={DarkText} className='SkillMainText'>Skills</div></span></div>
        </h1>
        <div data-aos="fade-up" style={styleDark} className="row rowS">
          <div style={columnStyle} className="col-4 COLUMNSkill">
            <div id="list-example" className="list-group">
              <a className="list-group-item list-group-item-action skillList" href="#list-item-1"><div>
                <img className='SkillImg1' src={code} />
                <div className='Center'>coding</div>
              </div></a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-2"> <div>
                <img className='SkillImg1' src={Html} />
                <div className='Center' >HTML</div>
              </div> </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-3"><div>
                <img className='SkillImg1' src={CSS} />
                <div className='Center'>CSS</div>
              </div></a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-4"><div>
                <img className='SkillImg1' src={JAVA} />
                <div className='Center'>JavaScript</div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-5"><div>
                <img className='SkillImg1' src={bootstrap} />
                <div className='Center'>Bootstrap</div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-6"><div>
                <img className='SkillImg1' src={speed} />
                <div className='Center'>Opptimise<span>Speed</span></div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-7"><div>
                <img className='SkillImg1' src={cleanCode} />
                <div className='Center'>Clean <span>Code</span> </div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-8"><div>
                <img className='SkillImg1' src={timeOpptimise} />
                <div className='Center'>time <span>Opptimise</span></div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-9"><div>
                <img className='SkillImg1' src={beautifulLayout} />
                <div className='Center'>Beautiful <span>Layout</span></div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-10"><div>
                <img className='SkillImg1' src={mongoDB} />
                <div className='Center'>mongoDB</div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-11"><div>
                <img className='SkillImg1' src={react} />
                <div className='Center'>React</div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-12"><div>
                <img className='SkillImg1' src={express} />
                <div className='Center'>Experss</div>
              </div>
              </a>
              <a className="list-group-item list-group-item-action skillList" href="#list-item-13"><div>
                <img className='SkillImg1' src={node} />
                <div className='Center'>NODEjs</div>
              </div>
              </a>
            </div>
          </div>
          <div className="col-8">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
              <h4 id="list-item-1" style={DarkText} className='paraText'>Code</h4>
              <div className='para'>
                <ul>
                  <li>"Code is like humor. When you have to explain it, it’s bad."</li>
                  <li>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</li>
                  <li>"The most disastrous thing that you can ever learn is your first programming language."</li>
                  <li>"Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?’"</li>
                  <li>"The best way to predict the future of technology is to invent it."</li>
                </ul>
              </div>
              <h4 id="list-item-2" style={DarkText} className='paraText'>HTML</h4>
              <div className='para'>
                <ul>
                  <li>Projects that demonstrate your ability to write clean, well-structured HTML code. You could include a description of the project and how you used HTML to build it.</li>

                  <li>Examples of how you used HTML to solve specific problems or meet specific requirements in your projects. For example, you could show how you used HTML to create a responsive layout, or to add accessibility features to a website.</li>

                  <li>Descriptions of any techniques or strategies you used to optimize your HTML code for performance, such as minifying your code or using semantic elements.</li>

                  <li>Any resources or tools you used to improve your HTML skills, such as online tutorials or HTML reference guides.</li>

                  <li>Any challenges or problems you encountered while working with HTML, and how you overcame them.</li>
                </ul>
              </div>
              <h4 id="list-item-3" style={DarkText} className='paraText'>CSS</h4>
              <div className='para'>
                <ul>
                  <li>Description of the project's purpose and goals</li>
                  <li>Description of the design and layout of the project
                  </li>
                  <li>Description of any custom CSS styles or techniques used, such as responsive design, animation, or use of CSS preprocessors</li>

                  <li>Description of any challenges or problems encountered and how they were addressed</li>
                  <li>Screenshots or live demo of the project to showcase the CSS implementation</li>
                  <li>Any additional details about the project, such as the technologies used or the role you played in the development process.</li>
                </ul>
              </div>
              <h4 id="list-item-4" style={DarkText} className='paraText'>JavaScript</h4>
              <div className='para'>
                <ul>
                  <li>"I have experience using JavaScript to build interactive web applications using libraries like React and Angular."</li>
                  <li>"I have a strong understanding of JavaScript language concepts, including asynchronous programming and object-oriented design.  "</li>
                  <li>"I have used JavaScript to implement advanced features like real-time updates, form validation, and infinite scrolling on my projects."</li>
                  <li>"I am comfortable working with JavaScript frameworks and libraries to build efficient and maintainable code."</li>
                  <li>"I have experience using JavaScript to optimize web page performance and ensure a seamless user experience."</li>
                </ul>
              </div>
              <h4 id="list-item-5" style={DarkText} className='paraText'>Bootstrap</h4>
              <div className='para'>
                <ul>
                  <li>"I have a strong understanding of Bootstrap and its grid system, which allows me to easily create responsive, mobile-first layouts for websites. I am also proficient in customizing Bootstrap's components and using its various utility classes to achieve the desired design and functionality."</li>
                </ul>
              </div>
              <h4 id="list-item-6" style={DarkText} className='paraText'>Load Speed</h4>
              <div className='para'>
                <ul>
                  <li>I have experience using tools like Lighthouse and PageSpeed Insights to analyze and optimize the performance of websites. As a result, I have been able to significantly improve the page load speed of various projects, leading to a better user experience and higher search engine rankings.</li>
                  <li>I have a deep understanding of how to minimize the size of assets such as images and stylesheets, and how to properly structure the delivery of these assets to maximize the performance of a website.</li>
                  <li>I have experience implementing techniques such as lazy loading, code splitting, and server-side rendering to further improve the performance of websites and applications.</li>
                  <li>I have a strong understanding of how web browsers work and how to write code that is optimized for efficient rendering and execution.</li>
                  <li>I have experience with techniques such as minification and tree shaking to reduce the size of my code and improve the performance of applications.</li>
                </ul>
              </div>
              <h4 id="list-item-7" style={DarkText} className='paraText'>Clean Code</h4>
              <div className='para'>
                <ul>
                  <li>I have a strong emphasis on writing clean, maintainable code. I prioritize coding best practices and strive to produce efficient and organized solutions.</li>
                </ul>
              </div>
              <h4 id="list-item-8" style={DarkText} className='paraText'>Submission Code</h4>
              <div className='para'>
                <ul>
                  <li>"I am dedicated to creating clean, well-structured, and maintainable code. I follow best practices and take pride in delivering high-quality solutions for my clients."</li>
                  <li>This highlights your commitment to producing code that is easy to read and understand, which can be especially important for future developers who may work on the codebase. It also shows that you have a strong understanding of coding standards and conventions, which can be beneficial to potential employers or clients.</li>
                  <li>You could also mention any tools or techniques that you use to ensure clean code, such as code linters, version control, or code reviews. This demonstrates your attention to detail and your willingness to go the extra mile to produce high-quality work.</li>
                </ul>
              </div>
              <h4 id="list-item-9" style={DarkText} className='paraText'>Beautiful Layout</h4>
              <div className='para'>
                <ul>
                  <li>"I have a strong eye for design, and am skilled in creating visually appealing layouts that are both functional and aesthetically pleasing."</li>
                  <li>"I am proficient in using design tools such as Adobe Creative Suite to create professional-quality layouts that are tailored to the needs of the project."</li>
                  <li>"I take pride in my ability to craft user-friendly, visually stunning layouts that enhance the overall user experience."</li>
                </ul>
              </div>
              <h4 id="list-item-10" style={DarkText} className='paraText'>MongoDB</h4>
              <div className='para'>
                <ul>
                  <li>"I have experience using MongoDB to store and retrieve data for my web applications, including using complex queries to extract and manipulate specific data sets."</li>
                  <li>"I have implemented MongoDB database models to optimize data organization and improve application performance."</li>
                  <li>"I have experience using MongoDB's aggregation pipeline to perform data processing tasks and generate data summaries and reports."</li>
                  <li>"I am familiar with best practices for database security, including using MongoDB's built-in authentication and authorization mechanisms to protect data access."</li>
                </ul>
              </div>
              <h4 id="list-item-11" style={DarkText} className='paraText'>React</h4>
              <div className='para'>
                <ul>
                  <li>"I have experience working with React, a popular JavaScript library for building user interfaces. With React, I can create interactive and dynamic front-end applications that are fast and efficient."</li>
                  <li>"I have a strong understanding of React's component-based architecture and how to use it to build reusable UI elements. I also have experience with React's state management and how to effectively use props to pass data between components."</li>
                  <li>"I have used React to build a number of web applications, including [list some examples of projects you have built with React]. These projects have allowed me to demonstrate my ability to create intuitive and responsive user interfaces using React."</li>
                </ul>
              </div>
              <h4 id="list-item-12" style={DarkText} className='paraText'>Express</h4>
              <div className='para'>
                <ul>
                  <li>"I am proficient in HTML, CSS, and JavaScript, and have experience building responsive and user-friendly web applications."</li>
                  <li>"I am skilled in Bootstrap and can quickly design and implement professional-looking layouts for websites and applications."</li>
                  <li>"I understand the importance of page load speed and always strive to optimize my code for fast performance."</li>
                  <li>"I pride myself on writing clean and organized code, making it easy to understand and maintain."</li>
                  <li>"I have a keen eye for design and can create beautiful, visually appealing layouts for websites and applications."</li>
                  <li>"I have experience working with MongoDB and can efficiently store, retrieve, and manipulate data in a NoSQL database."</li>
                  <li>"I am proficient in React and have experience building and maintaining web applications using this popular JavaScript library."</li>
                  <li>"I have experience working with the Express framework to build and deploy back-end web applications."</li>
                </ul>
              </div>
              <h4 id="list-item-13" style={DarkText} className='paraText'>Node JS</h4>
              <div className='para'>
                <ul>
                  <li>"I have experience using Node.js to build fast and scalable server-side applications."</li>
                  <li>"I am skilled in using Node.js to create APIs and microservices, and I am familiar with popular frameworks such as Express and Fastify."</li>
                  <li>"I have a strong understanding of Node.js concepts such as asynchronous programming, streams, and event-driven architecture."</li>
                  <li>"I have used Node.js to build real-time web applications using technologies such as Socket.io and WebSockets."</li>
                  <li>"I have a solid understanding of the Node.js ecosystem, including popular libraries and tools such as npm, yarn, and webpack."</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Skills