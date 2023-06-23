import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        This website is being built by a{" "}
        <span className="line-through">lazy</span> busy person. It may take
        time!
      </div>
    </main>
  );
}
