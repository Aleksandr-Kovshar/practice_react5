import React, { Component } from "react";
import classNames from "classnames";
import "./ColorPicker.css";


// class ColorPicker extends Component {
//   state = {
//     activeOptionIDX: 0,
//   };

//   makeOptioClassName = (index) => {

//     // Делаем динамические классы через библиотеку classnames (для sas, для можулей немного по другому)

//     // return classNames("ColorPicker__options", {
//     //   "ColorPicker__options--active": index === this.state.activeOptionIDX,
//     // });

//     const optionClasses = ["ColorPicker__options"];
//     if (index === this.state.activeOptionIDX) {
//       optionClasses.push("ColorPicker__options--active");
//     }
//     return optionClasses.join(" ");
//   };

//   setActiveInx = (index) => {
//     this.setState({ activeOptionIDX: index });
//   };

//   render() {
//     const { activeOptionIDX } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIDX];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет:{label}</p>

//         <div className="ColorPicker__list">
//           {options.map(({ label, color }, index) => (
//             <button
//               className={this.makeOptioClassName(index)}
//               key={label}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveInx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;


import {useState} from 'react';


function ColorPicker ({options}){
  const[activeOptionIDX, setActiveOptionIDX]=useState(0);

  // Это не нужно, так как функция внутри только вызывает другую функцию:
  // const setActiveInx = (index) => {
  //   setActiveOptionIDX(index);
  //     };

const {label} =options[activeOptionIDX];

const makeOptioClassName= index=>{
  const optionClasses = ["ColorPicker__options"];
  
  
   if (index === activeOptionIDX) {
        optionClasses.push("ColorPicker__options--active");
      }
      return optionClasses.join(" ");


}

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет:{label}</p>

        <div className="ColorPicker__list">
          {options.map(({ label, color }, index) => (
            <button
              className={makeOptioClassName(index)}
              key={label}
              style={{ backgroundColor: color }}
              onClick={() => setActiveOptionIDX(index)}
            ></button>
          ))}
        </div>
      </div>
    );
};


export default ColorPicker;