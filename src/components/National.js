import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const National = () => {
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
        <div className="flex justify-between items-end mb-2">
          <h1 className="text-4xl font-bold">DRAWING THE LINE</h1>
          <span className=" font-bold justify-end ">5.08.24</span>
        </div>

        <div className="flex justify-between items-end mb-2"></div>

        <div className="border-t border-gray-300 "></div>
        <div className="text-center my-4">
          <img src={`zinc-nati.png`} alt="" className="mx-auto w-full h-auto" />
        </div>
        <div className="prose prose-lg mx-auto">
          <p className="font-medium mb-4">
            Years before boarding the Mayflower, the pilgrims separated
            themselves from England. They went to Leiden, a Dutch city that
            awarded them the religious freedom that they had always desired.
            Leiden seemed like a perfect home for the pilgrims, but they sought
            out the New World about a decade later. Why?{" "}
          </p>
          <p className="font-medium mb-4">
            A large part of this decision was economic, but the pilgrims partly
            decided to leave because they feared the effects of Dutch society
            corrupting their children. In a way, this means that America was
            born through xenophobia and that can be seen throughout our history.
            There are many examples to detail with hundreds of years of
            division, but I want to focus particularly on data. For this reason,
            I will be skipping forward to the 1900s to talk about redlining.
          </p>
          <p className="font-medium mb-4">
            Redlining is a practice that started in the 1930s, where banks and
            financial institutions denied services to people within
            neighborhoods that were deemed “high risk”. These neighborhoods were
            primarily inhabited by black people and other minorities. Redlining
            is a great example of how entire communities can fall victim to
            datafication, with people being categorized based on demographics
            rather than individual circumstances. The victims of redlining were
            dehumanized and viewed as statistics rather than people. This one
            practice led to the degradation of communities due to the lack of
            investment in neighborhoods, creating further economic and social
            divisions that would last for generations. Furthermore, these
            divisions led to desensitization throughout the country; as more
            time passed, this treatment became normalized and victims’ voices
            became more suppressed. All this led to increased xenophobia
            throughout the country, especially related to race.
          </p>
        </div>
      </article>
    </div>
  );
};

export default National;
