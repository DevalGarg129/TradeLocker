import axios from "axios";

const fetchHoldings = async () => {
  try {
    const res = await axios.get("http://localhost:3002/allHoldings");

    console.log(res.data);
  } catch (error) {
    console.error("Unable to load holdings from backend", error);
  }
};

const signupUser = async () => {
  try {
    const userData = {
      name: "Deval",
      email: "deval@gmail.com",
      password: "123456",
    };

    const res = await axios.post(
      "http://localhost:3002/signup",
      userData,
    );

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
