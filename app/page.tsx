import SoundList from "@/components/SoundList";

export default function Home() {
  return (
    <div className="w-ful h-full">
      <div className="flex flex-col justify-center items-center gap-[2rem] max-w-[1280px] w-[calc(100%-3rem)] ml-[1.5rem] mr-[1.5rem] lg:m-auto">
        <div className="pt-[4rem] text-center text-white">
          <div className="text-[32px] sm:text-[48px] lg:text-[72px] font-bold">
            asmr sounds
          </div>
          <div>
            a soothing blend of continuous, harmonious sounds for a peaceful
            background ambiance.
          </div>
        </div>
        <div>
          <SoundList />
        </div>
      </div>
    </div>
  );
}
