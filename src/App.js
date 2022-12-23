import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  //empty array: anytime any of the values get changed inside of this array, that's when useEffect
  //is fired

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  //if there are multiple input sections, the entire app will get rerendered,
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search monsters here'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     //console.log("constructor - 1");
//   }

//   //mounting is 1st time a component gets rendered to the page
//   componentDidMount() {
//     //console.log("componentDidMount - 3");
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//

//     //console.log("render - 2");
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='Search monsters here'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

// //react uses "key" value to differenciate which item to rerender if changed
// //below is "shallow merging", passing an object
// //{
// /* <button
// onClick={() => {
//   this.setState({
//     name: { firstName: "Rashizzle", lastName: "Quinn2" },
//   });
//   console.log(this.state);
// }}
// >
// Change Name
// </button> */
// //}
// //setState is asynchrynous
