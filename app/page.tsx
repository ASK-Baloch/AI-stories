import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl  mt-8 font-bold flex flex-col justify-center items-center underline">
        Hello world
      </h1>
      <Button className="mt-8">Hey</Button>
    </div>
  );
}
