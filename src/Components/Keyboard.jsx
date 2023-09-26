import "./Keyboard.css";
import React, { useState, useEffect } from "react";

function Keyboard() {
  const [keys, setKeys] = useState({
    // تعیین وضعیت اولیه کلیدها
    "`": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false,
    "0": false,
    "-": false,
    "=": false,
    tab: false,
    "q": false,
    "w": false,
    "e": false,
    "r": false,
    "t": false,
    "y": false,
    "u": false,
    "i": false,
    "o": false,
    'p': false,
    "[": false,
    "]": false,
    "\\": false,
    capslock: false,
    "a": false,
    "s": false,
    "d": false,
    "f": false,
    "g": false,
    "h": false,
    "j": false,
    "k": false,
    "l": false,
    ";": false,
    "'": false,
    enter: false,
    "r shift": false,
    "z": false,
    "x": false,
    "c": false,
    "v": false,
    "b": false,
    "n": false,
    "m": false,
    ",": false,
    ".": false,
    "/": false,
    "shift": false,
    "control": false,
    "meta": false,
    "alt": false,
    " ": false,
    "r alt": false,
    "contextmenu": false,
    "fn": false,
    "r ctrl": false,
    "backspace": false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
        
      const key = event.key.toLowerCase();

      const isLeftShift = event.key === "Shift" && event.location === 1; // 1 represents left shift location
      const isRightShift = event.key === "Shift" && event.location === 2; // 2 represents right shift location

      // تشخیص کنترل چپ و راست
      const isLeftCtrl = event.key === "Control" && event.location === 1; // 1 represents left control location
      const isRightCtrl = event.key === "Control" && event.location === 2; // 2 represents right control location

      // تشخیص آلت چپ و راست
      const isLeftAlt = event.key === "Alt" && event.location === 1; // 1 represents left alt location
      const isRightAlt = event.key === "Alt" && event.location === 2; // 2 represents right alt location


      if (keys.hasOwnProperty(key)) {
        // تغییر وضعیت کلید به نگه‌داشته شده
        setKeys({ ...keys, [key]: true });

        if (isLeftShift || isRightShift) {
            setKeys({ ...keys, ["r shift"]: isRightShift, ["shift"]: isLeftShift });
          }
  
          if (isLeftCtrl || isRightCtrl) {
            setKeys({ ...keys, ["ctrl"]: isLeftCtrl, ["r ctrl"]: isRightCtrl });
          }
  
          if (isLeftAlt || isRightAlt) {
            setKeys({ ...keys, ["alt"]: isLeftAlt, ["r alt"]: isRightAlt });
          }
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key.toLowerCase();
      if (keys.hasOwnProperty(key)) {
        // تغییر وضعیت کلید به انتخاب شده
        setKeys({ ...keys, [key]: false });
        if (event.key === "Shift") {
            setKeys({ ...keys, ["r shift"]: false, ["shift"]: false });
          }
  
          if (event.key === "Control") {
            setKeys({ ...keys, ["ctrl"]: false, ["r ctrl"]: false });
          }
  
          if (event.key === "Alt") {
            setKeys({ ...keys, ["alt"]: false, ["r alt"]: false });
          }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys]);

  return (
    <>
      <body>
        <h1 className="text-3xl p-5">Keyboard Tester</h1>

        <div className="keyboard">
          {/* ردیف اول */}
          <div className="row">
            <div className={`key${keys["`"] ? " key--held" : ""}${keys["`"] ? " key--selected" : ""}`}>`</div>
            <div className={`key${keys["1"] ? " key--held" : ""}${keys["1"] ? " key--selected" : ""}`}>1</div>
            <div className={`key${keys["2"] ? " key--held" : ""}${keys["2"] ? " key--selected" : ""}`}>2</div>
            <div className={`key${keys["3"] ? " key--held" : ""}${keys["3"] ? " key--selected" : ""}`}>3</div>
            <div className={`key${keys["4"] ? " key--held" : ""}${keys["4"] ? " key--selected" : ""}`}>4</div>
            <div className={`key${keys["5"] ? " key--held" : ""}${keys["5"] ? " key--selected" : ""}`}>5</div>
            <div className={`key${keys["6"] ? " key--held" : ""}${keys["6"] ? " key--selected" : ""}`}>6</div>
            <div className={`key${keys["7"] ? " key--held" : ""}${keys["7"] ? " key--selected" : ""}`}>7</div>
            <div className={`key${keys["8"] ? " key--held" : ""}${keys["8"] ? " key--selected" : ""}`}>8</div>
            <div className={`key${keys["9"] ? " key--held" : ""}${keys["9"] ? " key--selected" : ""}`}>9</div>
            <div className={`key${keys["0"] ? " key--held" : ""}${keys["0"] ? " key--selected" : ""}`}>0</div>
            <div className={`key${keys["-"] ? " key--held" : ""}${keys["-"] ? " key--selected" : ""}`}>-</div>
            <div className={`key${keys["="] ? " key--held" : ""}${keys["="] ? " key--selected" : ""}`}>=</div>
            <div className={`key key--special${keys["backspace"] ? " key--held" : ""}${keys["backspace"] ? " key--selected" : ""}`}>⟵</div>
          </div>

          {/* ردیف دوم */}
          <div className="row">
            <div className={`key key--special${keys["tab"] ? " key--held" : ""}${keys["tab"] ? " key--selected" : ""}`}>Tab</div>
            <div className={`key${keys["q"] ? " key--held" : ""}${keys["q"] ? " key--selected" : ""}`}>Q</div>
            <div className={`key${keys["w"] ? " key--held" : ""}${keys["w"] ? " key--selected" : ""}`}>W</div>
            <div className={`key${keys["e"] ? " key--held" : ""}${keys["e"] ? " key--selected" : ""}`}>E</div>
            <div className={`key${keys["r"] ? " key--held" : ""}${keys["r"] ? " key--selected" : ""}`}>R</div>
            <div className={`key${keys["t"] ? " key--held" : ""}${keys["t"] ? " key--selected" : ""}`}>T</div>
            <div className={`key${keys["y"] ? " key--held" : ""}${keys["y"] ? " key--selected" : ""}`}>Y</div>
            <div className={`key${keys["u"] ? " key--held" : ""}${keys["u"] ? " key--selected" : ""}`}>U</div>
            <div className={`key${keys["i"] ? " key--held" : ""}${keys["i"] ? " key--selected" : ""}`}>I</div>
            <div className={`key${keys["o"] ? " key--held" : ""}${keys["o"] ? " key--selected" : ""}`}>O</div>
            <div className={`key${keys["p"] ? " key--held" : ""}${keys["p"] ? " key--selected" : ""}`}>P</div>
            <div className={`key${keys["["] ? " key--held" : ""}${keys["["] ? " key--selected" : ""}`}>[</div>
            <div className={`key${keys["]"] ? " key--held" : ""}${keys["]"] ? " key--selected" : ""}`}>]</div>
            <div className={`key key--special${keys["\\"] ? " key--held" : ""}${keys["\\"] ? " key--selected" : ""}`}>\\</div>
          </div>

          {/* ردیف سوم */}
          <div className="row">
            <div className={`key key--special${keys["capslock"] ? " key--held" : ""}${keys["capslock"] ? " key--selected" : ""}`}>Caps Lock</div>
            <div className={`key${keys["a"] ? " key--held" : ""}${keys["a"] ? " key--selected" : ""}`}>A</div>
            <div className={`key${keys["s"] ? " key--held" : ""}${keys["s"] ? " key--selected" : ""}`}>S</div>
            <div className={`key${keys["d"] ? " key--held" : ""}${keys["d"] ? " key--selected" : ""}`}>D</div>
            <div className={`key${keys["f"] ? " key--held" : ""}${keys["f"] ? " key--selected" : ""}`}>F</div>
            <div className={`key${keys["g"] ? " key--held" : ""}${keys["g"] ? " key--selected" : ""}`}>G</div>
            <div className={`key${keys["h"] ? " key--held" : ""}${keys["h"] ? " key--selected" : ""}`}>H</div>
            <div className={`key${keys["j"] ? " key--held" : ""}${keys["j"] ? " key--selected" : ""}`}>J</div>
            <div className={`key${keys["k"] ? " key--held" : ""}${keys["k"] ? " key--selected" : ""}`}>K</div>
            <div className={`key${keys["l"] ? " key--held" : ""}${keys["l"] ? " key--selected" : ""}`}>L</div>
            <div className={`key${keys[";"] ? " key--held" : ""}${keys[";"] ? " key--selected" : ""}`}>;</div>
            <div className={`key${keys["'"] ? " key--held" : ""}${keys["'"] ? " key--selected" : ""}`}>{"'"}</div>
            <div className={`key key--special${keys["enter"] ? " key--held" : ""}${keys["enter"] ? " key--selected" : ""}`}>Enter</div>
          </div>

          {/* ردیف چهارم */}
          <div className="row">
            <div className={`key key--special${keys["shift"] ? " key--held" : ""}${keys["shift"] ? " key--selected" : ""}`}>L Shift</div>
            <div className={`key${keys["z"] ? " key--held" : ""}${keys["z"] ? " key--selected" : ""}`}>Z</div>
            <div className={`key${keys["x"] ? " key--held" : ""}${keys["x"] ? " key--selected" : ""}`}>X</div>
            <div className={`key${keys["c"] ? " key--held" : ""}${keys["c"] ? " key--selected" : ""}`}>C</div>
            <div className={`key${keys["v"] ? " key--held" : ""}${keys["v"] ? " key--selected" : ""}`}>V</div>
            <div className={`key${keys["b"] ? " key--held" : ""}${keys["b"] ? " key--selected" : ""}`}>B</div>
            <div className={`key${keys["n"] ? " key--held" : ""}${keys["n"] ? " key--selected" : ""}`}>N</div>
            <div className={`key${keys["m"] ? " key--held" : ""}${keys["m"] ? " key--selected" : ""}`}>M</div>
            <div className={`key${keys[","] ? " key--held" : ""}${keys[","] ? " key--selected" : ""}`}>,</div>
            <div className={`key${keys["."] ? " key--held" : ""}${keys["."] ? " key--selected" : ""}`}>.</div>
            <div className={`key${keys["/"] ? " key--held" : ""}${keys["/"] ? " key--selected" : ""}`}>/</div>
            <div className={`key key--special${keys["r shift"] ? " key--held" : ""}${keys["r shift"] ? " key--selected" : ""}`}>R Shift</div>
          </div>

          {/* ردیف پنجم */}
          <div className="row">
            <div className={`key${keys["ctrl"] ? " key--held" : ""}${keys["ctrl"] ? " key--selected" : ""}`}>L Ctrl</div>
            <div className={`key key--icon${keys["meta"] ? " key--held" : ""}${keys["meta"] ? " key--selected" : ""}`}>
              <p className={`hidden${keys["meta"] ? " key--selected" : ""}`}>Windows</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
                />
              </svg>
            </div>
            <div className={`key${keys["alt"] ? " key--held" : ""}${keys["alt"] ? " key--selected" : ""}`}>L Alt</div>
            <div className={`key key--special${keys[" "] ? " key--held" : ""}${keys[" "] ? " key--selected" : ""}`}>{" "}</div>
            <div className={`key${keys["r alt"] ? " key--held" : ""}${keys["r alt"] ? " key--selected" : ""}`}>R Alt</div>
            <div className={`key key--icon${keys["contextmenu"] ? " key--held" : ""}${keys["contextmenu"] ? " key--selected" : ""}`}>
              <p className={`hidden${keys["context"] ? " key--selected" : ""}`}>Context</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                />
              </svg>
            </div>
            <div className={`key${keys["fn"] ? " key--held" : ""}${keys["fn"] ? " key--selected" : ""}`}>Fn</div>
            <div className={`key${keys["r ctrl"] ? " key--held" : ""}${keys["r ctrl"] ? " key--selected" : ""}`}>R Ctrl</div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Keyboard;
