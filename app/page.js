import Image from "next/image";

// import Image from "next/image"
import Soumya from "../public/soumya-removebg-preview.png";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-center flex gap-4">
        
        <div className=" w-1/5 ml-96 mt-14">
          <h1 className=" font-medium text-2xl">Soumyaranjan Nayak</h1>
          <p className=" font-medium text-xl font-serif">A Bit About Me</p>
          <p>
            With a Bachelor of Science degree in Mathematics from FM University
            in Balasore, Odisha, completed in 2017, I bring a strong analytical
            background to my career. Over the past three years, I have honed my
            skills in web development, specializing in React.js, Next.js,
            Express.js, and MongoDB.
          </p>
        </div>
        <div className="relative rounded-full overflow-hidden w-78 h-98">
          <Image
            src={Soumya}
            height={400}
            objectFit="cover"
            className="rounded-full"
            alt="Profile Picture"
          />
        </div>
      </div>
      {/* <div></div> */}
    </main>
  );
}
