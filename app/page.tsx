import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1 className="text-3xl font-bold flex flex-col justify-center items-center">Hello world
      <Button className="mt-2">Hey</Button>
    </h1>
   </div>
  );
}
