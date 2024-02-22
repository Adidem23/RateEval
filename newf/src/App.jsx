import { useState } from "react";
import axios from 'axios';


const App = () => {

  const [ClubName, setClubName] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [FirstQuestion, setFirstQuestion] = useState(1);
  const [SecondQuesion, setSecondQuesion] = useState(1);


  const CreateRequest = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/AcceptRequest", { ClubName: ClubName, EmailId: EmailId, FirstQuestion: FirstQuestion, SecondQuesion: SecondQuesion },{withCredentials:true}).then(() => {
      console.log("Everything Looks Good>>>");
    }).catch((err) => {
      console.log(`Error while making request ${err}`);
    })

  }


  return (
    <>
      <div style={{ display: 'flex', flexDirection: "column", margin: 'auto', width: 'fit-content' }}>

        <p>ClubName</p>
        <input type="text" onChange={(e) => setClubName(e.target.value)} />

        <p>EmailId</p>
        <input type="email" onChange={(e) => setEmailId(e.target.value)} />

        <p>How You Feel about the club???</p>
        <select id="options" onChange={(e) => setFirstQuestion(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <p>How was Your Experience??</p>
        <select id="options" onChange={(e) => setSecondQuesion(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br />
        <br />

        <button onClick={CreateRequest}>Submit Form</button>

      </div>
    </>
  )
}

export default App