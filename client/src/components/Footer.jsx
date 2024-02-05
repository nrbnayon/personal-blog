import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterComponet() {
  return (
    <Footer container bgDark className="border border-t-8 border-teal-500">
      <div className="container mx-auto w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 md:grid-cols-4 lg:flex justify-between">
          <div>
            <Footer.Title title="Follow" />
            <Link
              to="/"
              className="self-center text-sm sm:text-xl font-semibold text-white
        dark:text-white
        "
            >
              <span className="text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg ">
                Nayon&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link href="/projects">Portfolio</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full rounded-lg bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Nayon's Blog™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
