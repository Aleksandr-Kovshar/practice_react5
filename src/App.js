import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import initialTodos from "./todos.json";
import Form from "./components/Form";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import Clock from "components/Clock";
import Friends from "components/Friends/Friends";
import shortid from "shortid";
import { NavLink, Routes, Route } from "react-router-dom";
// import Home from "pages/Home";
// import Dogs from "pages/Dogs";
// import DogDetails from "pages/DogDetails";
import { Layout } from "components/Layout";
// import { Gallery } from "components/Gallery";
// import { SubBreeds } from "components/SubBreeds";

const ColorPickerOptons = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Состояние компонента</h1>
//       <Counter initialValue={0} />
//       <ColorPicker options={ColorPickerOptons} />
//       <Dropdown /> */}
//       <TodoList />

//       {/* <TodoList /> */}
//     </div>
//   );
// }

// class App extends Component {
//   state = {
//     todos: initialTodos,
//     filter: "",
//     name: "",
//     tag: "",
//   };

//   addTodo = (text) => {
//     console.log(text);
//     const todo = {
//       id: shortid.generate(),
//       text,
//       complete: false,
//     };

//     this.setState((prevState) => ({
//       todos: [todo, ...prevState.todos],
//     }));
//   };

//   deleteTodo = (todoId) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((todo) => todo.id !== todoId),
//     }));
//   };

//   toggleCompleted = (todoId) => {
//     console.log(todoId);

//     this.setState((prevState) => ({
//       todos: prevState.todos.map((todo) => {
//         if (todo.id === todoId) {
//           console.log("Нашли тот туду что нужен");
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       }),
//     }));

//     // Можно через тернарник:

//     // this.setState(prevState => ({
//     //   todos: prevState.todos.map((todo) =>
//     //     todo.id===todoId? { ...todo, comleted: !todo.comleted } :todo
//     //   ),
//     // }));
//   };

//   formSubmitHandler = (data) => {
//     console.log(data);
//     //  получили дату, то есть в переменную дату записали стейт с формы. И далее ниже делаем что нужно с этой информацией, можно записать в стейт апп или отправить на сервак наверное

//     this.setState({
//       name: data.name,
//       tag: data.tag,
//     });
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodo = () => {
//     const { filter, todos } = this.state;
//     const narmalizeFilter = filter.toLowerCase();
//     return todos.filter((todo) =>
//       todo.text.toLowerCase().includes(narmalizeFilter)
//     );
//   };

//   render() {
//     const { todos, filter } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );

//     // const narmalizeFilter = this.state.filter.toLowerCase();
//     // const visibleTodos = this.state.todos.filter((todo) =>
//     //   todo.text.toLowerCase().includes(narmalizeFilter)
//     // );

//     const visibleTodos = this.getVisibleTodo();

//     return (
//       <div className="App">
//       {/* <Clock/> */}
//         {/* <Form onSubmitProp={this.formSubmitHandler} /> */}
//         {/* <h1>Состояние компонента</h1> */}
//         {/* <Counter initialValue={0} /> */}
//         {/* <ColorPicker options={ColorPickerOptons} /> */}
//         {/* <Dropdown /> */}
//         {/* <TodoEditor onSubmitProp={this.addTodo} /> */}

//         {/* <Filter value={filter} onChange={this.changeFilter} /> */}

//         {/* <div>
//           <p>Общее количество задач: {totalTodoCount}</p>
//           <p>Количество выполненных: {completedTodoCount}</p>
//         </div> */}
//         {/* <TodoList
//           // todos={todos}
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         /> */}
//         <Friends />
//       </div>
//     );
//   }
// }

// export default App;

// import страниц к примеру Home from "pages/Home"; Это уже не нужну при динамическом импорте

const Home = lazy(() => import("../src/pages/Home"));
const Dogs = lazy(() => import("../src/pages/Dogs"));
const DogDetails = lazy(() => import("../src/pages/DogDetails"));

// Динамический экспорт можно делать только с дефолтным експортом или как вариант победить его так:
// const Gallery = lazy(() => import("../src/components/Gallery").then(
//   (module) => {
//     return { ...module, default: module.Gallery };
//   })
// );

const Gallery = lazy(()=>import("../src/components/Gallery"));
const SubBreeds = lazy(()=>import("../src/components/SubBreeds"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
