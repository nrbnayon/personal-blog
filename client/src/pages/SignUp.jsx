import {
  Alert,
  Button,
  Card,
  Checkbox,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
import signUpImg from "../assets/4545.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all required fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
                <Label htmlFor="name" value="Your User Name" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Username"
                required
                onChange={handleChange}
              />
            </div>
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
                autoComplete="current-password"
              />
            </div>
            <Button
              type="submit"
              gradientDuoTone="purpleToBlue"
              disabled={loading}
              className="font-extrabold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg "
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-2 ">Loading...</span>
                </>
              ) : (
                "Sign up"
              )}
            </Button>
            <Button
              type="connect"
              gradientDuoTone="purpleToBlue"
              outline
              className="font-extrabold text-white"
            >
              Continue With Google
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-base">
            <span>Already Have an account?</span>
            <Link to="/login" className="text-blue-500 font-extrabold">
              Login Now
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
