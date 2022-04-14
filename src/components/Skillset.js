import React from 'react';
import 'animate.css';
import '../styles/Skillset.css';
import python from '../images/python.png';
import js from '../images/javascript.png';
import reactimg from '../images/react.png';
import node from '../images/node.png';
import C from '../images/C.png';
import cpp from '../images/cpp.png';
import ts from '../images/typescript.png';
import go from '../images/go.png';
import sql from '../images/sql.jpg';
import gitbash from '../images/gitbash.svg';
import django from '../images/django.png';
import docker from '../images/docker.png';
import flask from '../images/flask.png';
import mongodb from '../images/mongodb.png';
import npm from '../images/npm.png';
import html from '../images/html.png';
import css from '../images/css.png';
import sqlite from '../images/sqlite.png';

const Skillset = ({ state }) => {
  const paragraphStyles = {
    color: (state.mode === 'light' ? 'black' : 'white'),
    textAlign: 'center',
    wordWrap: 'break-word',
    fontSize: '20px'
  }
  return (
    <div className='skillset animate__animated animate__fadeInUp'>
      <div>
        <img alt='' src={html}></img>
        <img alt='' id='css' src={css}></img>
        <img alt='' src={js}></img>
        <img alt='' id='python' src={python}></img>
        <img alt='' id='react' src={reactimg}></img>
        <img alt='' id='node' src={node}></img>
        <img alt='' src={C}></img>
        <img alt='' src={cpp}></img>
        <img alt='' src={ts}></img>
        <img alt='' src={sql}></img>
        <img alt='' id='go' src={go}></img>
        <img alt='' src={django}></img>
        <img alt='' src={docker}></img>
        <img alt='' src={flask}></img>
        <img alt='' src={mongodb}></img>
        <img alt='' src={sqlite}></img>
        <img alt='' src={npm}></img>
        <img alt='' src={gitbash}></img>
      </div>
      <p style={paragraphStyles}>
      I excel at 7 different programming languages <br/>
      which are C, C++, Python, JavaScript, Go, TypeScript and SQL, <br/> 
      As well as 2 coding languages, which are HTML & CSS. <br/>
      During my full-stack web development course, <br/>
      i learnt about many core principles of the internet and the web, <br/>
      and many different fundamentals such as: HTTP/HTTPS, <br/> 
      server-client relationship, TCP/IP protocol, domains, subdomains, <br/> 
      urls, virtual machines, cloud computing, encryption/decryption, <br/> 
      network traffic, cyber attacks, front-end/back-end, <br/> 
      DOM, promises, async/await, API’s, RESTful API’s, <br/> 
      content types, CORS, requests & responses, status codes and many more. <br/>
      I also excel at countless additional technologies <br/> 
      used in the web development field such as: <br/> 
      Bootstrap, Jquery, npm, Git, React.js, Redux, Node.js, <br/> 
      Express.js, EJS, Flask, Django, SQLite3, PostgreSQL, <br/> 
      Docker, Postman, Bcrypt, Knex, Heroku, Github pages, Netlify, Next.js etc. <br/>
      Not long before I finished the full-stack web development course, <br/> 
      I stumbled onto CS50’s introduction to computer science. <br/>
      I took the course, and learned about various concepts and terminologies behind computer science, <br/> 
      programming, and computers in general. Some of the concepts i learned <br/> 
      were the binary system, the decimal system, hexa-decimal, <br/> 
      Unicode, ASCII, the memory heap, pointers, memory addresses, input & output, <br/> 
      Recursion, Algorithms (such as binary search, merge sort, bubble sort etc.), <br/> 
      Data structures (such as arrays, objects, hash maps, binary trees etc.), <br/> 
      Big O notation, time complexity, space complexity and much more. <br/>

      During the course, I learned the C language, a statically typed, <br/> 
      low level compiled programming language, <br/> 
      that interacts greatly with hardware and embedded systems, <br/> 
      and is extremely fast. Afterwards, I dabbled in Python and SQL, through web-programming. <br/> 
      I learned the basics & advanced paradigms of Python and its syntax, <br/> 
      solved many Python challenges online and <br/> 
      later created a web-application using the popular Python web-development framework Flask, <br/> 
      and the serverless database service, SQLite3. <br/>
      Important to mention that through learning web programming via CS50, <br/> 
      I was able to expand on new concepts about web development <br/> 
      such as scalability and maintainability, security and availability. <br/>
      Already past CS50’s introduction to computer science, <br/> 
      I kept looking for more material to study, <br/> 
      more programming languages/technologies and from there <br/> 
      I stumbled on C++, C’s object oriented superset. <br/> 
      I took it on myself to learn the language. <br/>
      A few weeks later, I discovered the GO language <br/> 
      (or Golang), a more modern replica of C, <br/> 
      which has extremely fast compile times, <br/> 
      and is mainly used for back-end development. <br/> 
      While learning Go, I wrote a program to calculate a student’s average score, <br/> 
      determined by his marks, as well as a program that serves as a calculator. <br/>
      I started learning TypeScript a few weeks after Go, <br/> 
      and my developer experience has been greater than ever. <br/> 
      TypeScript has great integrity as a typed javascript superset. <br/> 
      It provides so much more functionality and features <br/> 
      such as custom types, interfaces, generics, subclasses, <br/>
      static type checking and many more. <br/>
      By using TypeScript i was able to create and re-create <br/>
      some of my front-end web applications.
      </p>
    </div>
  )
}

export default Skillset;