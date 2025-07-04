import Modal from "@mui/material/Modal";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface ProjectProps {
  coverImage: string;
  technologies: Array<string>;
  projectName: string;
  date: string;
  isPublic?: boolean;
  description: string;
}

export default function Project({ coverImage, technologies, projectName, date, isPublic, description }: ProjectProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="p-5 bg-gray-900 opacity-95 rounded-2xl cursor-pointer border border-slate-800 shadow-lg shadow-slate-900">
      <div className="flex-col justify-center items-center" onClick={handleOpen}>
        <div className="w-full rounded-lg overflow-hidden shadow-md shadow-slate-600">
          <img
            className="w-full max-h-60 object-cover"
            src={coverImage}
            alt="Project cover"
          />
        </div>
        <div className="min-h-44">
          <ul className="flex justify-start items-center gap-2 my-5 flex-wrap">
            {technologies.map((technology, index) => (
              <li
                key={index}
                className="flex justify-center items-center text-sm py-1 px-3 bg-cyan-700 text-slate-200 rounded "
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-lg font-semibold text-orange-500 font-mono my-1">{projectName}</div>
        <div className="mb-4">
          <span className="font-semibold bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-transparent">{date}</span>
        </div>
        <div className=" bottom-0 text-justify line-clamp-3 text-slate-300 my-3">{description}</div>
      </div>


      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="relative p-8  w-full sm:w-3/4 mx-3 h-[90vh] bg-slate-800 outline-0 rounded-xl sm:rounded-3xl shadow-2xl border border-gray-700 overflow-y-auto text-white">
          {/* Close Button */}
          <div
            onClick={handleClose}
            className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 text-red-500 rounded cursor-pointer z-50 animate-pulse"
          >
            <IoMdCloseCircle className="size-8" />
          </div>

          {/* Modal Content */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden shadow-lg shadow-slate-500">
              <img
                className="w-full object-cover"
                src={coverImage}
                alt="Project cover"
              />
            </div>

            <ul className="flex justify-start items-center gap-2 my-10 flex-wrap">
              {technologies.map((technology, index) => (
                <li
                  key={index}
                  className="flex justify-center items-center py-1 px-5 bg-slate-600 rounded"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <div className="text-lg font-semibold text-orange-500">{projectName}</div>
            <div className="font-semibold text--500">{date}</div>
            <div className="text-justify text-slate-300 my-5">{description}</div>
            {isPublic ? (
              <div className="flex justify-center items-center mt-5 gap-5">
                <a href="https://github.com/hassanullahusmani45/My-GitHup-Profile" target="blank" className="btn-githup min-w-32">View Code</a>
                <a href="#" target="blank" className="btn-resume min-w-32">View Live App</a>
              </div>
            ):(
              <div className="text-red-400 text-lg italic">Note: This project is private and not publicly accessible!</div>
            )}

          </div>
        </div>
      </Modal>



    </div>
  )
}
