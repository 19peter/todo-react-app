import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//components
import Header from "./components/Header";
import Home from "./components/Home";
//images
import DesktopLight from "./images/bg-desktop-light.jpg";
import DesktopDark from "./images/bg-desktop-dark.jpg";
//icons
import SunIcon from "./images/icon-sun.svg";
import MoonIcon from "./images/icon-moon.svg";


function App() {

  // Setting Classes to element dynamically based on if else statments
  const [icon, setIcon] = useState(SunIcon);
  const [backgrounClass, setBackgroundClass] = useState("body-light");
  const [inputContainer, setInputContainer] = useState("input-container");
  const [todoContainer, setTodoContainer] = useState("todo-container");
  const [input, setInput] = useState("input");
  const [path, setPath] = useState(DesktopLight);
  const [footer, setFooter] = useState("footer");

  function iconChange() {
    if (icon === MoonIcon) {
      setIcon(SunIcon);
      setBackgroundClass("body-light");
      setInputContainer("input-container");
      setTodoContainer("todo-container");
      setInput("input");
      setPath(DesktopLight);
      setFooter("footer");
      document.body.style.backgroundColor = "white";    
    }

    if (icon === SunIcon) {
      setIcon(MoonIcon);
      setBackgroundClass("body-dark");
      setInputContainer("input-container-night");
      setTodoContainer("todo-container-night");
      setInput("input-night");
      setPath(DesktopDark);
      setFooter("footer-night");
      document.body.style.backgroundColor = "var(--bodyDarkMode)"; 
    }
  }

  return (
    <div className="App">
      <Header
        path={path} />

      <div className={backgrounClass} >    
      
      <Home
        icon={icon}
        iconChange={iconChange}
        inputContainer={inputContainer}
        todoContainer={todoContainer}
        input={input}
        footer={footer} />
        </div>

    </div>
  );
}

export default App;
