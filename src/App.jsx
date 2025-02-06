import gsap from "gsap";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    gsap.to('.heading', {
      x: 100, duration: 1
    })
  }, [])

  return (
    <div>
      <h1 className="heading text-9xl text-[#424874] slang">hiiii</h1>
    </div>
  );
};

export default App;