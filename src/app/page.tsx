import Image from "next/image";

import * as fakeDatabase from "@/fakeDatabase";

export default function Home() {
  const posts = fakeDatabase.allItems();
  console.log(posts)

  return (
    <main className="">
      <h1 className="text-6xl">Full Stack Finds</h1>
    </main>
  );
}
