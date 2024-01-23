import './App.css';
import React, { useState } from 'react';
import projectsData from './projects.json';
import { DownBtnProivder, useDown } from './DownBtn.Provider';
import vbt1 from './img/projects/VBT1.jpg'
import arduino from './img/languages/arduino-plain.svg'
import clang from './img/languages/c-original.svg';
import cpp from './img/languages/cplusplus-original.svg';
import dotnet from './img/languages/dot-net-plain.svg';
import github from './img/languages/github-original.svg';
import html from './img/languages/javascript-original.svg'
import mysql from './img/languages/mysql-original-wordmark.svg';
import nest from './img/languages/nestjs-plain.svg';
import nodejs from './img/languages/nodejs-original-wordmark.svg';
import postgre from './img/languages/postgresql-original.svg';
import python from './img/languages/python-original.svg';
import react from './img/languages/react-original.svg';
import tailwind from './img/languages/tailwindcss-plain.svg';
import typescript from './img/languages/typescript-original.svg';

const App = () => {
  const {down, setDown}= useDown(false);

  return (

    <DownBtnProivder>
    <div className={'flex w-full min-h-screen h-full bg-gray-100 ' + (down ? 'max-md:overflow-hidden h-screen':' h-full')}>
      <PersonalInformation  />
      <Projects/>
    </div>
    </DownBtnProivder>
  );
};
const PersonalInformation = () => {
  const technologiesUsed = [arduino, cpp, clang, dotnet, github,  html, mysql, nest, nodejs, postgre, python, react, tailwind,typescript];

  const {down, setDown}= useDown(false);

  return (
    <div>
    <div className={'w-1/3 bg-gradient-to-r from-biege-50 to-biege-150 md:min-h-full text-center p-8 fixed max-md:w-full ' + (down? 'max-md:invisible ' : ' max-md:h-screen  ')}>
      <div className='text-center'>
      <h1 className='text-4xl font-extrabold resize text-gray-asparagus mb-4 overflow-clip'>Venelin Novakov</h1>
      <p className='text-lg text-gray-asparagus mb-2'>Software Engineer</p>
      <p className='text-gray-asparagus overflow-ellipsis object-scale-down scale-90'>Email: venelin.novakov2024@gmail.com</p>
      <p className='overflow-ellipsis '>
        A highly motivated and
        ambitious student that has
        experience with web
        development and embedded
        systems.
</p>
      </div>
      <div className='text-gray-asparagus mt-4'>
        <p>Technologies Used:</p>
        <div className='flex flex-row flex-wrap items-center justify-center'>
          {technologiesUsed.map((tech, index) => (
            <img src={tech} alt="smth" key={index} className='object-scale-down h-1/6 w-1/6'/>
          ))}
        </div>
      </div>
      <button className='mt-6 bg-biege-50 text-gray-asparagus py-2 px-4 rounded-md hover:bg-biege-150 transition duration-300'>
        Contact Me
      </button>
    </div>
      <button onClick={() => {setDown(!down)}} className='fixed top-0 left-0 bg-biege-50 text-black py-2 px-4 rounded-md hover:bg-biege-100 transition duration-300 md:invisible'>{down? "V" : "^"}</button>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const {down, setDown}= useDown(false);

  const handleProjectSelection = (projectId) => {
    setSelectedProject((prevSelected) =>
      prevSelected === projectId ? null : projectId
    );
  };
  console.log(down);

  return (
    <div className={'flex flex-col w-2/3 bg-ashy-biege md:max-h-full p-8 md:ml-auto  transition-all duration-500 max-md:w-full ' + (!down? "max-md:overflow-hidden": " ")}>
       {projectsData.map((project) => (
        selectedProject === null || selectedProject === project.id ? (
          <Project
            key={project.id}
            selected={selectedProject === project.id}
            selection={selectedProject}
            onSelect={() => handleProjectSelection(project.id)}
            {...project}
          />
        ) : null
      ))}
    </div>
  );
};

const Project = ({ id, title, description, technologies, image, selected, selection, github, onSelect }) => {
  const img = require(`${image}`);
  var techs = technologies?(technologies).map(tech => {return require(`${tech}`)}):[];
  console.log(techs);
  return (
    <div 
      className={`flex flex-col rounded-md w-full border mb-3 bg-milkbiege shadow-md hover:shadow-lg transition duration-300 ${
        +selected ? 'flex-grow h-3/5 max-md:h-auto' : ''
      } ${selection && selection !== id ? 'invisible': ''
    }`}
    >
      <div className='p-2'>
        <h1 className='text-gray-asparagus text-xl font-semibold mb-2'>{title}</h1>
        <p className='text-gray-asparagus mb-2'>{description}</p>
        <div className='flex flex-row'>
       {technologies && techs.map((tech)=> ( <img src={tech} alt='tech' className='object-scale-down size-10'/>))}
       </div>
      </div>
      {img && (
        <a href={github}>
        <img src={img} alt={title} className={'w-full max-h-full object-scale-down ' + (!selection ? 'invisible h-0':'')} />
        </a>
      )}
      <button
        className='mt-auto w-full py-2 bg-shale-green text-white rounded-b-md hover:bg-gray-asparagus'
        onClick={onSelect}
      >
        {selected ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
};

export default App;
