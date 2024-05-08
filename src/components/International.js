import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const International = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      <button
        onClick={() => navigate(-1)} // Navigates back to the previous page
        className="absolute top-16 lg:left-8  md:left-8 flex items-center justify-center bg-white text-black border-2 border-black rounded-full h-12 w-12 cursor-pointer hover:bg-gray-100  transition duration-200"
        aria-label="Return"
      >
        <FaArrowLeft size={20} />
      </button>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-28 flex-grow">
        <h1 className="text-4xl font-bold ">PAINTING PICTURES</h1>

        <div className="flex justify-between items-end mb-2"></div>

        <div className="border-t border-gray-300 "></div>
        <div className="text-center my-4">
          <img
            src={`zinc-fight.png`}
            alt=""
            className="mx-auto w-full h-auto"
          />
        </div>
        <div className="prose prose-lg mx-auto">
          <p className="font-medium mb-4">
            I don’t watch many shows, but I started watching Black Mirror a few
            months ago and it has quickly become one of my favorites. Near the
            beginning of this semester, I watched an episode called “Men Against
            Fire,” which follows a soldier in a futuristic dystopian world.
            There isn’t much context given about the state of the world, but it
            seems like the soldier is battling mutants that have been affected
            by some kind of apocalyptic virus. His first few missions were about
            as routine as they could be during an apocalypse—until his brain
            implant started to malfunction. These implants were supposedly used
            to help the soldiers in combat, but the malfunction revealed the
            truth—they weren’t killing mutants, they were killing innocent
            humans. The apocalyptic virus turned out to be a cover-up that would
            allow for the mass genocide of people with “inferior” genes.
          </p>
          <p className="font-medium mb-4">
            I thought this episode was amazing, but when I went to look up what
            other people thought, I saw that it is actually one of the
            worst-reviewed Black Mirror episodes of all time. Many critics
            didn’t like the plot and believed that it was all just “too on the
            nose” (they used these exact words). In other words, it was just too
            real.
          </p>
        </div>
      </article>
    </div>
  );
};

export default International;
