import React, { useState } from "react";
import { useUserAuth } from "@/Context/UserAuthContext";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import DefaultBTN from "../Utility/DefaultBTN";
import "react-phone-input-2/lib/style.css";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const { signInUser } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    await signInUser(email, password);
    return setloading(false);
  };

  return (
    <form className="flex flex-col gap-5">
      <div className="w-full border rounded-md">
        <input
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
          name="email"
          required={true}
          className="p-2 w-full outline-none py-3 "
          placeholder="Email"
        />
      </div>
      <div className="w-full border rounded-md">
        <input
          type="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
          name="password"
          required={true}
          className="p-2 w-full outline-none py-3 "
          placeholder="Password"
        />
      </div>
      <div  className="w-full text-base ">
        <button className="float-right  pColor font-semibold" >Forgot Password ?</button>
      </div>
      <DefaultBTN
        btnStyle=" px-5 py-3  w-full rounded-md pBtn"
        nameBtn="Sign In"
        func={handleSubmit}
        loading={loading}
      />
    </form>
  );
};

export default Login;
