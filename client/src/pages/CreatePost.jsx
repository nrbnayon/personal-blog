import { Button, FileInput, Label, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="container mx-auto my-10 min-h-screen">
      <h1 className="text-center text-3xl mb-5 font-extrabold">
        Create a new Post
      </h1>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized"> Select a category</option>
            <option value="javascript"> JavaScript</option>
            <option value="cpp"> C++</option>
            <option value="python"> Pyhton </option>
            <option value="tips&tricks"> Tips & Tricks </option>
            <option value="reactjs"> React.js </option>
            <option value="nodejs"> Node.js </option>
            <option value="mernstack"> MERN Full Stack </option>
            <option value="nextjs"> Next.js </option>
          </Select>
        </div>
        <div className="flex w-full items-center justify-center border-4 border-teal-500 border-dotted mt-3 p-3">
          <Label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write post content..."
          // onChange={}
          className="h-72 mt-5 mb-10"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
