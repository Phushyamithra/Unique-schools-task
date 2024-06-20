import './App.css';
import { useState } from 'react';
import FormDisplay from './components/FormDisplay.js';

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [hex, setHex] = useState("");
  const [data, setData] = useState([]);

  const handleJoin = () => {
    let nameCheck = true, emailCheck = true, hexCheck = true;
    if (name === "") {
      nameCheck = false;
    } else if (email === "") {
      emailCheck = false;
    } else if (hex === "") {
      hexCheck = false;
    }
    if (nameCheck && emailCheck && hexCheck) {
      setData([
        ...data,
        {
          id: data.length + 1, // Assign a unique id to each entry
          name: name,
          email: email,
          hex: hex
        }
      ]);
      setName(""); // Clear input fields after submission
      setEmail("");
      setHex("");
    } else {
      alert("Please check the data entered !!!");
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <h1>Join Unique Schools</h1>
        <div className="form-container">
          <input
            type="text"
            className='input-element'
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className='input-element'
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className='input-element'
            placeholder="16 digit hex code"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
          />
          <input
            type='submit'
            value="Join"
            onClick={handleJoin}
          />
        </div>

        <h2>{data.length} Joinee's</h2>

        {
          data.map((item) => (
            <FormDisplay key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
