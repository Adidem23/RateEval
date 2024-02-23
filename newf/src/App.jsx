import { useState } from "react";
import axios from 'axios';
import './CSS/Main.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const App = () => {

  const [ClubName, setClubName] = useState("MLSC");
  const [EmailId, setEmailId] = useState("");
  const [FirstQuestion, setFirstQuestion] = useState(1);
  const [SecondQuesion, setSecondQuesion] = useState(1);
  const [ThirdQuestion, setThirdQuestion] = useState(1);
  const [FourthQuestion, setFourthQuestion] = useState(1);
  const [FifthQuestion, setFifthQuestion] = useState(1);
  const [SixthQuestion, setSixthQuestion] = useState(1);
  const [SeventhQuestion, setSeventhQuestion] = useState(1);
  const [EighthQuestion, setEighthQuestion] = useState(1);
  const [NinethQuestion, setNinethQuestion] = useState(1);
  const [TenthQuestion, setTenthQuestion] = useState(1);


  const CreateRequest = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/AcceptRequest", { ClubName: ClubName, EmailId: EmailId, FirstQuestion: FirstQuestion, SecondQuesion: SecondQuesion, ThirdQuestion: ThirdQuestion, FourthQuestion: FourthQuestion, FifthQuestion: FifthQuestion, SixthQuestion: SixthQuestion, SeventhQuestion: SeventhQuestion, EighthQuestion: EighthQuestion, NinethQuestion: NinethQuestion, TenthQuestion: TenthQuestion }, { withCredentials: true }).then(() => {
      console.log("Everything Looks Good ->>>");
    }).catch((err) => {
      console.log(`Error while making request ${err}`);
    })

  }

  const Star = (
    <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  );

  const customStyles = {
    itemShapes: Star,
    boxBorderWidth: 2,

    activeFillColor: ['#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5'],
    activeBoxColor: ['#da1600', '#db711a', '#dcb000', '#61bb00', '#009664'],
    activeBoxBorderColor: ['#c41400', '#d05e00', '#cca300', '#498d00', '#00724c'],

    inactiveFillColor: 'white',
    inactiveBoxColor: '#dddddd',
    inactiveBoxBorderColor: '#a8a8a8',
  };


  return (
    <>
      <div className="ReviewFormDiv">


        <div className="ReviewFormLogo">
          Fill the Form
        </div>

        <div className="FormElement">
          <label htmlFor="clubname">ClubName</label>
          {/* <input type="text" id="clubname" placeholder="Enter Club Name" required="" onChange={(e) => setClubName(e.target.value)} /> */}
          <select id="OptionDiv" onChange={(e) => setClubName(e.target.value)} style={{ width: '120px' }}>
            <option value="MLSC">MLSC</option>
            <option value="YUG">YUG</option>
            <option value="AAROH">AAROH</option>
            <option value="Zephyr">Zephyr</option>
            <option value="GDSC">GDSC</option>
          </select>
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="EmailId">Email Id</label>
          <input type="email" id="EmailId" placeholder="Enter Email ID" required="" onChange={(e) => setEmailId(e.target.value)} />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="Experience">How Was your Experience with Seniors??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={FirstQuestion}
            onChange={setFirstQuestion}
            itemStyles={customStyles}
            id="Experience"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="Activities">Activities Experience??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={SecondQuesion}
            onChange={setSecondQuesion}
            itemStyles={customStyles}
            id="Activities"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="Event">How Was Event ??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={ThirdQuestion}
            onChange={setThirdQuestion}
            itemStyles={customStyles}
            id="Event"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="workshops">How Was Workshops??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={FourthQuestion}
            onChange={setFourthQuestion}
            itemStyles={customStyles}
            id="workshops"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="projects">How Were Sponosored Projects??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={FifthQuestion}
            onChange={setFifthQuestion}
            itemStyles={customStyles}
            id="projects"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="sessiosn">How Were Mentoring Sessions??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={SixthQuestion}
            onChange={setSixthQuestion}
            itemStyles={customStyles}
            id="sessiosn"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="comp">How Were Competions ??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={SeventhQuestion}
            onChange={setSeventhQuestion}
            itemStyles={customStyles}
            id="comp"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="alumini">How Were Alumini Netwrok??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={EighthQuestion}
            onChange={setEighthQuestion}
            itemStyles={customStyles}
            id="alumini"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="scholor">How Were ScholorShip??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={NinethQuestion}
            onChange={setNinethQuestion}
            itemStyles={customStyles}
            id="scholor"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <div style={{ width: '100%', borderBottom: '1px solid black' }}></div>
        <div className="FormElement">
          <label htmlFor="Networking">How Was Networking??</label>
          <Rating
            style={{ maxWidth: 300 }}
            value={TenthQuestion}
            onChange={setTenthQuestion}
            itemStyles={customStyles}
            id="Networking"
            radius="medium"
            spaceBetween="small"
            spaceInside="large"
          />
        </div>

        <button onClick={CreateRequest}>Submit Form</button>

      </div>

    </>
  )
}

export default App