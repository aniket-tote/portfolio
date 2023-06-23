import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [joke, setJoke] = useState("You can hear a joke till you wait.");
  const [btntxt, setBtntxt] = useState("Get joke");

  const fetchJoke = async () => {
    const darkurl = "https://dark-humor-jokes.p.rapidapi.com/joke";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST_DARK_JOKE,
      },
    };

    try {
      const response = await fetch(darkurl, options);
      const result = await response.json();

      console.log(result);
      if (result.joke) {
        setJoke(result.joke);
      } else {
        const dadurl = "https://dad-jokes.p.rapidapi.com/random/joke";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST_DAD_JOKE,
          },
        };

        try {
          const response = await fetch(dadurl, options);
          const result = await response.json();
          setJoke({
            setup: result.body[0].setup,
            punchline: result.body[0].punchline,
          });
        } catch (error) {
          console.error(error);
        }
      }
      setBtntxt("One more.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        This website is being built by a{" "}
        <span className="line-through">lazy</span> busy person. It may take
        time!
      </div>
      <div className="">{joke.setup ? joke.setup : joke}</div>
      <div className="">{joke.punchline}</div>
      <button
        className="border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-900"
        type="button"
        onClick={() => {
          fetchJoke();
        }}
      >
        {btntxt}
      </button>
    </main>
  );
}
