import { UpdateFollower } from "react-mouse-follower";

export default function BannerText() {
  return (
    <section className="py-12 text-center">
      <div className="px-10 md:px-20">
        <div className="bg-gradient-to-t from-primary to-primary/80 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl border border-gray-50">
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "black",
              zIndex: 9999,
              followSpeed: 0.5,
              mixBlendMode: "screen",
              scale: 10,
            }}
          >
            <p className="font-bold md:text-4xl text-xl max-w-[700px] mx-auto leading-normal text-black/70">
              Headsets With Good Quality Sound And With The Latest Technology!
            </p>
          </UpdateFollower>
        </div>
      </div>
    </section>
  );
}
