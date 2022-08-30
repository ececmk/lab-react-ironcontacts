import "./App.css";
import allContacts from "./contacts.json"
import { useState } from "react";

const firstFive = allContacts.slice(0,6)



function App() {

  const [celebs, setCelebs] = useState(firstFive)
  let copyArray = [...celebs];

  const addRandomCeleb = () => {
    let randomCeleb = allContacts[Math.floor(Math.random() * allContacts.length) + 5];
      copyArray.push(randomCeleb);
      setCelebs(copyArray);
    }
    
    const sortByPopularity = () => {
      copyArray.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
      setCelebs(copyArray);
    };

    const sortByName = () => {
      copyArray.sort((a, b) => a.name.localeCompare(b.name));
      setCelebs(copyArray);
    };
    const deleteCeleb = celebId => {
      const filteredCelebs = celebs.filter(celeb => {
        return celeb.id !== celebId;
      });
     
      setCelebs(filteredCelebs);
    };

  return (
    <div className="App">
      <h2>Ironhack Contacts</h2>
      <button onClick={addRandomCeleb}>Add random contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((celeb) => {
            return (
              <tr key={celeb.id}>
                <td>
                  <img src={celeb.pictureUrl}  width="100px"  height="120px" alt="Celebrity"/>
                </td>
                <td> {celeb.name} </td>
                <td> {Number(celeb.popularity).toFixed(2)}</td>
                <td>{celeb.wonOscar ? "🏆" : ""}</td>
                <td>{celeb.wonEmmy ? "⭐" : ""}</td>
                <button onClick={() => deleteCeleb(celeb.id)}> Delete </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
 }

export default App;
