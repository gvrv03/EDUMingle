import React, { useState } from "react";
import { useUserAuth } from "@/Context/UserAuthContext";
import DefaultBTN from "../Utility/DefaultBTN";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-hot-toast";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const { signInUser } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    if (email.length === 0 || password.length === 0) {
      toast.error("Fill the Fields");
      return setloading(false);
    }
    await signInUser(email, password);
    return setloading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="w-full border rounded-md">
        <input
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
          name="email"
          required={true}
          className="p-2 w-full text-sm  outline-none py-3 "
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
          className="p-2 w-full text-sm  outline-none py-3 "
          placeholder="Password"
        />
      </div>
      <div className="w-full  ">
        <button className="float-right  pColor font-semibold">
          Forgot Password ?
        </button>
      </div>
      <DefaultBTN
        btnStyle=" px-5 py-3  w-full rounded-md pBtn"
        nameBtn="Sign In"
        loading={loading}
      />
    </form>
  );
};

export default Login;
