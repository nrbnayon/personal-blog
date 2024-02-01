import {
  Alert,
  Button,
  Card,
  Checkbox,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
// import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import signUpImg from "../assets/logo.jpg";

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all required fields"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        // if (formData.remember) {
        //   Cookies.set("rememberedUser", data.userIdentifier, { expires: 7 }); // expires in 7 days
        // }
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      return dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="container mx-auto flex justify-between items-center flex-col md:flex-row gap-8 mt-10">
      <div className="w-full">
        <Card className="p-0 m-0">
          <img src={signUpImg} className="rounded-lg" />
        </Card>
      </div>
      <div className="w-full">
        <Card className="w-full">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="user@example.com"
                required
                onChange={handleChange}
                // autocomplete="on"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="******"
                required
                onChange={handleChange}
                // autocomplete="on"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                // onChange={(e) =>
                //   setFormData({ ...formData, remember: e.target.checked })
                // }
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button
              type="submit"
              gradientDuoTone="purpleToBlue"
              className="font-black text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg "
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-2 ">Loading...</span>
                </>
              ) : (
                "Login"
              )}
            </Button>
            <Button type="connect" gradientDuoTone="purpleToBlue" outline>
              Continue With Google
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-base">
            <span>Don't Have an account?</span>
            <Link to="/signup" className="text-blue-500 font-extrabold">
              SignUp Now
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-0" color="failure">
              {errorMessage}
            </Alert>
          )}
        </Card>
      </div>
    </div>
  );
}
