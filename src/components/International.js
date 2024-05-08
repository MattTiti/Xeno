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
        <div className="flex justify-between items-end mb-2">
          <h1 className="text-4xl font-bold">PAINTING PICTURES</h1>
          <span className=" font-bold justify-end ">5.08.24</span>
        </div>

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
          <p className="font-medium mb-4">
            We don’t have brain implants, but what we are shown is often not
            reality. For over twenty years, America has used the War on Terror
            to paint pictures of “monsters” in the Middle East. Western media
            has continuously depicted Arabs as so blatantly different from
            Americans that fear and hatred are almost guaranteed. This narrative
            helps America the same way it helped the government in “Men Against
            Fire”—by making senseless murder digestible. This same
            dehumanization tactic was used throughout America during the Vietnam
            War to justify war efforts and encourage soldiers to fight.
          </p>
          <p className="font-medium mb-4">
            People from vastly different countries and cultures have all been
            grouped together, solely based on their region. For anyone born in
            the Middle East, individual identity and humanity are erased. With
            every bombing and mass murder of children, observers become more and
            more desensitized to the violence, further separating themselves
            from the victims.
          </p>
          <p className="font-medium mb-4">
            This could be seen largely last Fall when the Palestinian people
            were constantly being referred to as uneducated “animals.” In the
            face of tragedy, with the death of tens of thousands of
            Palestinians, Virginia Tech refused to acknowledge a clear genocide,
            instead opting to send emails (to all students) offering support for
            Israeli students who have been affected.
          </p>{" "}
          <h3 className="text-2xl font-bold">EXTENDED NOTE ON PALESTINE:</h3>
          <p className="font-medium mb-4">
            My father grew up in Rafah after his family was forced to leave
            Jaffa shortly after he was born. Like it is today, Rafah then was
            completely civilian, but that didn’t stop Israeli forces from
            bombing his family business, a pharmacy, where one of his brothers
            would die. Being a little boy didn’t stop them from shooting at my
            father when he was going to the well for water. Being civilian
            students didn’t stop his friends from getting bombed on their car
            ride back home. Nothing has stopped these attacks for over 75 years,
            but we do not hear these stories in the West. Through fate—or
            luck—my father was able to survive various life-threatening
            situations and start his life here in America. He lived a full life
            with three kids and two grandchildren so far. He became a
            pharmacist, opened his own pharmacy in Jersey City, and worked every
            day to help people in need. Many people who couldn’t afford doctors
            or insurance treated him like their doctor and often received
            medicine discounted or for free. He died in 2020, but his impact on
            my family and the community of Jersey City for over 40 years was
            immeasurable. He was just one boy from Gaza; over 14,500 children
            have died since October 7th. Each one of those children was unique
            and could’ve gone on to have an impact like my Dad or even greater,
            but they were robbed of the opportunity. This is the true danger of
            xenophobia and dehumanization: the world is robbed of children,
            their children, and future generations of potential greatness.
          </p>
          <p className="font-medium mb-4">
            I’ve said multiple times that xenophobia is part of human nature,
            but that does not have to manifest in violence. I truly believe that
            small changes we make to bring awareness to the Palestinian genocide
            and to change the narrative of Arabs can help bring peace back to
            Palestine. All we need is for people to realize our similarities
            rather than our differences, and if me getting arrested can help
            with that I’m happy to do so.
          </p>
        </div>
      </article>
    </div>
  );
};

export default International;
