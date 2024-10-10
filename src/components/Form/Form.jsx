import React, { Component } from "react";

// class Form extends Component {
//   state = {
//     name: "",
//     tag: "",
//     experience: "junior",
//     licence: false,
//   };

//   // handleNameChange = (e) => {
//   //   this.setState({ name: e.currentTarget.value });
//   //   console.log(e.currentTarget.value);
//   // };

//   // handleTagChange = (e) => {
//   //   this.setState({ tag: e.currentTarget.value });
//   //   console.log(e.currentTarget.value);
//   // };

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     console.log(name);
//     console.log(value);
//     this.setState({ [name]: value });
//   };

//   handleLicenceChange = (e) => {
//     this.setState({ licence: e.currentTarget.checked });
//   };

//   handelSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmitProp(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: "",
//       tag: "",
//       experience: "junior",
//       licence: false,
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handelSubmit}>
//         <label>
//           Имя
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Прозвище
//           <input
//             type="text"
//             name="tag"
//             value={this.state.tag}
//             onChange={this.handleChange}
//           />
//         </label>
//         <p>Ваш уровень</p>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="junior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "junior"}
//           />{" "}
//           Junior
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="middle"
//             onChange={this.handleChange}
//             checked={this.state.experience === "middle"}
//           />{" "}
//           Middle
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="senior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "senior"}
//           />{" "}
//           Senior
//         </label>
//         <br />
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="licence"
//             checked={this.state.licence}
//             onChange={this.handleLicenceChange}
//           />
//           Согласен с условиями
//         </label>

//         <button type="submit" disabled={!this.state.licence}>
//           Отправить
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;

import { useState, useEffect } from "react";


const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]); 

  return [state, setState];


};

function Form() {

  

  // const [name, setName]=useState(()=>{return JSON.parse(window.localStorage.getItem("name")) ?? ""});
  // const [tag, setTag]=useState(()=>{return JSON.parse(window.localStorage.getItem("tag")) ?? ""});
  // const [experience, setExperience]=useState(()=>{return JSON.parse(window.localStorage.getItem("experience")) ?? ""});
  // const [licence, setLicence]=useState(()=>{return JSON.parse(window.localStorage.getItem("licence")) ?? ""});


  const [name, setName]=useLocalStorage("name", "");
  const [tag, setTag]=useLocalStorage("tag", "");
  const [experience, setExperience]=useLocalStorage("experience", "");
  const [licence, setLicence]=useLocalStorage("licence", "");

  // const handleNameChange = e =>{
  //   setName(e.target.value)
  // };
  // const handleTagChange = e =>{
  //   setTag(e.target.value)
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "tag":
        setTag(value);
        break;
      default:
        return;
    }
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };
  const handleLicenceChange = (e) => {
    setLicence(e.target.value);
  };

  // useEffect(()=>{
  //   window.localStorage.setItem("name", JSON.stringify(name))
  // },[name]);

  // useEffect(()=>{
  //   window.localStorage.setItem("tag", JSON.stringify(tag))
  // },[tag]);

  // useEffect(()=>{
  //   window.localStorage.setItem("experience", JSON.stringify(experience))
  // },[experience]);

  // useEffect(()=>{
  //   window.localStorage.setItem("licence", JSON.stringify(licence))
  // },[licence]);

  return (
    <form onSubmit={handleChange}>
      <label>
        Имя
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Прозвище
        <input type="text" name="tag" value={tag} onChange={handleChange} />
      </label>
      <p>Ваш уровень</p>
      <label>
        <input
          type="radio"
          name="experience"
          value="junior"
          onChange={handleExperienceChange}
          checked={experience === "junior"}
        />{" "}
        Junior
      </label>
      <label>
        <input
          type="radio"
          name="experience"
          value="middle"
          onChange={handleExperienceChange}
          checked={experience === "middle"}
        />{" "}
        Middle
      </label>

      <label>
        <input
          type="radio"
          name="experience"
          value="senior"
          onChange={handleExperienceChange}
          checked={experience === "senior"}
        />{" "}
        Senior
      </label>
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          name="licence"
          checked={licence}
          onChange={handleLicenceChange}
        />
        Согласен с условиями
      </label>

      <button type="submit" disabled={false}>
        Отправить
      </button>
    </form>
  );
}

export default Form;
