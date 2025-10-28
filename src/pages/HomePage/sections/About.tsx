import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
        <DotLottieReact
          src="https://lottie.host/01145810-0ce6-48cb-af6f-b006599fc3c5/O4mdg8UU7F.lottie"
          loop
          autoplay
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        />
      </div>
    </>
  );
}

export default About;
