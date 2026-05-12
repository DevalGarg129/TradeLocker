import axios from "axios";
import { useState } from "react";

function Signup() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignup = async () => {

    try {

      const res = await axios.post(
        "http://localhost:3000/signup",
        user
      );

      console.log(res.data);

    } catch(err) {

      console.log(err);

    }

  };

  return (
    <>
      <input
        placeholder="Name"
        onChange={(e) =>
          setUser({...user, name: e.target.value})
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setUser({...user, email: e.target.value})
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUser({...user, password: e.target.value})
        }
      />

      <button onClick={handleSignup}>
        Register
      </button>
    </>
  );
}

export default Signup;