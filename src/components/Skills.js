import React ,{useEffect} from 'react';
import leetCodeLogo from '../assets/leetcode.png';
import gfgLogo from '../assets/gfg.png';
import hackerrankLogo from '../assets/hackerrank.png';
import codechefLogo from '../assets/codechef.jpeg';
import sqlLogo from '../assets/sql.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import mongoLogo from '../assets/mongodb.jpg';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.webp';
import cLogo from '../assets/c.png';
import cppLogo from '../assets/cpp.png';
import javaLogo from '../assets/java.webp';
import pythonLogo from '../assets/python.jpg';
import './Skills.css';

const Skills = ({isDarkMode}) => {
    useEffect(() => {
        const pElements = document.querySelectorAll('#skills .skills-container p');
        if (isDarkMode) {
            pElements.forEach(element => {
                element.style.color = 'black';
            });
        } else {
            pElements.forEach(element => {
                element.style.color = 'black';
            });
        }
    }, [isDarkMode]);
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {/* Problem Solving */}
                <div className="skill-section">
                    <h3>Problem Solving</h3>
                    <div className="skill-card">
                        <p className='links'>
                            <a href="https://leetcode.com/u/vaibhav_0206/">
                                <img src={leetCodeLogo} width={30} height={20} alt="LeetCode" style={{ marginRight: '10px' }} />
                                LeetCode
                            </a>
                        </p>
                        <p className='links'>
                            <a href="https://www.geeksforgeeks.org/user/maulikshirsagarvk18/">
                                <img src={gfgLogo} width={30} height={20} alt="GeeksforGeeks" style={{ marginRight: '10px' }} />
                                GeeksforGeeks
                            </a>
                        </p>
                        <p className='links'>
                            <a href="https://www.hackerrank.com/profile/maulikshirsagar1">
                                <img src={hackerrankLogo} width={30} height={20} alt="HackerRank" style={{ marginRight: '10px' }} />
                                HackerRank
                            </a>
                        </p>
                        <p className='links'>
                            <a href="https://www.codechef.com/users/vaibhav_1602">
                                <img src={codechefLogo} width={30} height={20} alt="CodeChef" style={{ marginRight: '10px' }} />
                                CodeChef
                            </a>
                        </p>
                    </div>
                </div>
                {/* Web Development */}
                <div className="skill-section">
                    <h3>Programming Languages</h3>
                    <div className="skill-card">
                        <p className='links'> 
                            <img src={cppLogo} width={30} height={20} alt="cppLogo" style={{ marginRight: '10px' }} />
                            CPP
                        </p>
                        <p className='links'>
                            <img src={javaLogo} width={30} height={20} alt="javaLogo" style={{ marginRight: '10px' }} />
                            JAVA
                        </p>
                        <p className='links'>  
                            <img src={pythonLogo} width={30} height={20} alt="pythonLogo" style={{ marginRight: '10px' }} />
                            Python  
                        </p>
                        <p className='links'>
                            <img src={cLogo} width={30} height={20} alt="cLogo" style={{ marginRight: '10px' }} />
                            C
                        </p>
                        
                    </div>
                </div>
                {/* Web Development */}
                <div className="skill-section">
                    <h3>Web Development</h3>
                    <div className="skill-card">
                        <p className='links'> 
                            <img src={htmlLogo} width={30} height={20} alt="htmlLogo" style={{ marginRight: '10px' }} />
                            HTML
                        </p>
                        <p className='links'> 
                            <img src={cssLogo} width={30} height={20} alt="cssLogo" style={{ marginRight: '10px' }} />
                            CSS
                        </p>
                        <p className='links'> 
                            <img src={jsLogo} width={30} height={20} alt="jsLogo" style={{ marginRight: '10px' }} />
                            JavaScript
                        </p>
                        <p className='links'> 
                            <img src={reactLogo} width={30} height={20} alt="reactLogo" style={{ marginRight: '10px' }} />
                            React.js
                        </p>
                        <p className='links'> 
                            <img src={nodeLogo} width={30} height={20} alt="nodeLogo" style={{ marginRight: '10px' }} />
                            Node.js
                        </p>
                        <p className='links'> 
                            <img src={sqlLogo} width={30} height={20} alt="sqlLogo" style={{ marginRight: '10px' }} />
                            SQL
                        </p>
                        <p className='links'> 
                            <img src={mongoLogo
                            } width={30} height={20} alt="mongoLogo" style={{ marginRight: '10px' }} />
                            MongoDB
                        </p>
                    </div>
                </div>
                {/* Embedded Development */}
                <div className="skill-section">
                    <h3>Embedded Development</h3>
                    <div className="skill-card">
                        {/* <p>Hardware and Software Design</p> */}
                        <p>Firmware Development</p>
                        <p>Testing and Verification</p>
                        <p>Communication Protocols</p>
                        <p>8051</p>
                        <p>Raspberry Pi</p>
                        <p>Arduino</p>
                        <p>IoT</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
