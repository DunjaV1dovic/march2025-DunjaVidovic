"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { useState } from "react";

export default function AboutMePage() {
  let facts: string[] = ["cats have 32 muscles in their ears",
  //string dtarts here at 0
   "Peanuts are used to make dynamite",
    "no number before 1000 has letter A in it",
  "Crocodiles Can Gallop Like A Horse",
"The world's longest concert lasted 453 hours",
"A typical jar of peanut butter contains 10 or more rodent hairs, averaging one or more rodent hairs per 100 grams",
"the human body consists of so much fat that it can make up to seven bars of soap",
"Giraffes are 30 times more likely to get hit by lightning than people",
"The chicken came before the egg",
"Mosquitoes are attracted to people who just ate bananas",
]
  const [fact, setFact] = useState();
  return ( 
 <div>
      <h1 className={title()}>ABOUT ME</h1>
      <br />
      <Button onPress={() => {setFact(facts[Math.floor(Math.random() * facts.length)]);}} className="bg-rose-300 text-9x1"> Press 4 facts</Button> 
      <p>{fact}</p>

        <p>Hello, my name is Dunja and welcome to my about me page. Some interesting things I enjoy doing are martial arts, swimming, and sketching/doodling. I was born in Belgrade, Serbia 2009 and I have lived there up until second grade. My favorite color is blue, favorie food is Sushi, and my favorie place to visit over the summer is Cyprus and Serbia.</p>
        <img src = "https://snworksceo.imgix.net/cav/d8de13a9-0d41-4538-a3e4-1ed75ac09d9a.sized-1000x1000.png?w=1000" alt="failed"></img>
        <img src = "https://media.istockphoto.com/id/1162167657/photo/hand-painted-background-with-mixed-liquid-blue-and-golden-paints-abstract-fluid-acrylic.jpg?s=612x612&w=0&k=20&c=DiYltrxEBUFjhhltHriX4WVPRxiPqgQhTBC5R7_C6Ik=" alt="failed"></img>
        <p>This is essential because it shows my favorite sport and color</p>
        <a href="https://images.squarespace-cdn.com/content/v1/66ec3b49803ab81bf84f89e4/84076e48-caa2-488f-b4d2-261b1e4dba6d/BlackLeopardAdonis3.jpg?format=2500w">click me 4 a photo of my favorite animal</a>
    </div>
  );
}
