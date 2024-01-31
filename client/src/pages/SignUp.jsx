import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import signUpImg from "../assets/4545.jpg";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="container mx-auto flex justify-between items-center flex-col md:flex-row gap-8 mt-10">
      <div className="w-full">
        <Card className="p-0 m-0">
          <img src={signUpImg} className="rounded-lg" />
        </Card>
      </div>
      <div className="w-full">
        <Card className="w-full">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your User Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="User Name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="user@example.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                placeholder="******"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button
              type="submit"
              gradientDuoTone="purpleToBlue"
              className="font-black text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg "
            >
              Submit
            </Button>
            <Button
              type="connect"
              gradientDuoTone="purpleToBlue"
              outline
              className="font-black text-white bg-gradient-to-r from-pink-300 via-purple-500 to-pink-500 rounded-lg "
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
        </Card>
      </div>
    </div>
  );
}
