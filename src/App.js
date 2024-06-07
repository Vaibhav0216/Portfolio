
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = document.querySelectorAll('section');
//             const navLinks = document.querySelectorAll('.nav-link');

//             let current = '';
//             sections.forEach(section => {
//                 const sectionTop = section.offsetTop;
//                 if (window.scrollY >= sectionTop - 60) {
//                     current = section.getAttribute('id');
//                 }
//             });

//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if (link.getAttribute('href').includes(current)) {
//                     link.classList.add('active');
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//         document.body.classList.toggle('dark-mode', !isDarkMode);
//     };

//     return (
//         <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
//             <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
//             <main>
//                 <About />
//                 <Skills toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
//                 <Projects />
//                 <Contact toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode); // Using functional update to avoid stale state
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        // <ThemeProvider>
            <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
                <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                <main>
                    <About />
                    <Skills isDarkMode={isDarkMode}/>
                    <Projects />
                    <Contact isDarkMode={isDarkMode}/>
                </main>
                <Footer />
            </div>
        // </ThemeProvider>
    );
}

export default App;

