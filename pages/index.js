// https://phad.vercel.app/

import Top from "@/components/_homepage/top";
import Services from "@/components/_homepage/services";
import News from "@/components/_homepage/news";
import Connect from "@/components/_homepage/connect";

function Home() {
  return (
    <div className="h-10">
      <Top />
      <Services />
      <News />
      <Connect />
    </div>
  );
}

export default Home;