import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-5 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md rounded-full overflow-hidden">
          <img
            src={currentUser.profilePicture}
            alt="User Img"
            className="rounded-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
          className="mt-3"
        />
        <TextInput
          type="text"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          className="mt-3"
        />
        <TextInput
          type="password"
          id="password"
          placeholder="********"
          className="my-3"
        />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Submit
        </Button>
        <div className="flex justify-between text-red-500 mt-5 ">
          <span className="cursor-pointer">Delete Account</span>
          <span className="cursor-pointer">Sign Out</span>
        </div>
      </form>
    </div>
  );
}
