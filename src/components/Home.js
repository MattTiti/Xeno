import { Link } from "react-router-dom";
import Banner from "./Banner";
const Home = () => {
  return (
    <div className="bg-zinc-900">
      <Banner />
      <div className="border-t border-white"></div>
      <div className=" bg-zinc-900 px-20 py-10 text-white">
        <h2 className="font-bold text-3xl mb-2 ">WHAT IS XENOPHOBIA?</h2>
        <p className="">
          Xenophobia refers to fear or hatred of strangers, people from other
          countries, or anything that is perceived as foreign or strange.
          Xenophobia is a part of our human nature and helps explain our
          implicit biases, influencing every decision we make on a day-to-day
          basis. While xenophobia can be reflected through racism, homophobia,
          and other prejudices, its impact even extends to the most mundane
          choices, from deciding what to eat for lunch to choosing our favorite
          artists.
        </p>
      </div>
      <div className=" bg-zinc-900 px-20 text-white">
        <h2 className="font-bold text-3xl mb-2 ">
          WHAT DOES XENOPHOBIA HAVE TO DO WITH DATA?
        </h2>
        <p className="">
          Although xenophobia isn't inherently bad, it can manifest in harmful
          ways. I believe that a lot of the negativity that we see in the world
          today is a result of increased xenophobia, exacerbated by the use of
          data. Data is constantly used to categorize and divide people,
          providing countless ways to view others as statistics rather than
          unique individuals. The articles below examine specific instances of
          increased xenophobia that can be examined in three stages:
          Datafication, Dehumanization, and Desensitization.{" "}
        </p>
      </div>
      <div className="py-8">
        <div className="flex flex-col lg:flex-row overflow-hidden bg-zinc-900">
          <div className="lg:w-1/2">
            <img src="zinc-nati.png" alt={``} className="w-full h-auto" />
          </div>
          <div className="lg:w-1/2 px-10 mr-12 flex flex-col justify-start text-white">
            <h3 className="font-bold text-2xl">DRAWING THE LINE</h3>
            <div className="border-t border-gray-300 mb-2"></div>{" "}
            <p className="font-medium mb-4">
              Years before boarding the Mayflower, the pilgrims separated
              themselves from England. They went to Leiden, a Dutch city that
              awarded them the religious freedom that they had always desired.
              Leiden seemed like a perfect home for the pilgrims, but they
              sought out the New World about a decade later. Why?{" "}
            </p>
            <p>
              A large part of this decision was economic, but the pilgrims
              partly decided to leave because they feared the effects of Dutch
              society corrupting their children. In a way, this means that
              America was born through xenophobia and that can be seen
              throughout our history. There are many examples to detail with
              hundreds of years of division, but I want to focus particularly on
              data. For this reason, I will be skipping forward to the 1900s to
              talk about redlining.
            </p>
            <Link
              className="ml-auto hover:text-gray-400 hover:underline text-white font-medium py-2 px-4 rounded "
              to="/1"
            >
              Read More >
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row overflow-hidden bg-zinc-900">
          <div className="lg:w-1/2">
            <img src={"zinc-fight.png"} alt={``} className="w-full h-auto" />
          </div>
          <div className="lg:w-1/2 px-10 mr-12 flex flex-col justify-start text-white">
            <h3 className="font-bold text-2xl">PAINTING PICTURES</h3>
            <div className="border-t border-gray-300 mb-2"></div>{" "}
            <p className="font-medium mb-4">
              I don’t watch many shows, but I started watching Black Mirror a
              few months ago and it has quickly become one of my favorites. Near
              the beginning of this semester, I watched an episode called “Men
              Against Fire,” which follows a soldier in a futuristic dystopian
              world. There isn’t much context given about the state of the
              world, but it seems like the soldier is battling mutants that have
              been affected by some kind of apocalyptic virus. His first few
              missions were about as routine as they could be during an
              apocalypse—until his brain implant started to malfunction. These
              implants were supposedly used to help the soldiers in combat, but
              the malfunction revealed the truth—they weren’t killing mutants,
              they were killing innocent humans. The apocalyptic virus turned
              out to be a cover-up that would allow for the mass genocide of
              people with “inferior” genes.
            </p>
            <p className="font-medium mb-4">
              I thought this episode was amazing, but when I went to look up
              what other people thought, I saw that it is actually one of the
              worst-reviewed Black Mirror episodes of all time. Many critics
              didn’t like the plot and believed that it was all just “too on the
              nose” (they used these exact words). In other words, it was just
              too real.
            </p>
            <Link
              className="ml-auto hover:text-gray-400 hover:underline text-white font-medium py-2 px-4 rounded "
              to="/2"
            >
              Read More >
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
