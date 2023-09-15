import { styled } from "styled-components";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Mobile1 from "./mobile/section1/Mobile1";
import Mobile2 from "./mobile/section2/Mobile2";
import Mobile3 from "./mobile/section3/Mobile3";
import Mobile4 from "./mobile/section4/Mobile4";
import Mobile5 from "./mobile/section5/Mobile5";
import MobileFooter from "../components/MobileFooter";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer>
      {windowWidth > 1000 ? (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </>
      ) : (
        <>
          <Mobile1 />
          <Mobile2 />
          <Mobile3 />
          <Mobile4 />
          <Mobile5 />
          <MobileFooter />
        </>
      )}

      <Footer />
    </MainContainer>
  );
};

export default HomePage;

const MainContainer = styled.div`
  height: 100%;
  background-color: #1e204f;
  align-content: center;
`;

// const HomePage = () => {
//   return (
//     <div className="bg-custom-navy h-screen w-screen flex justify-center">
//       <div className="flex flex-row justify-center">
//         <img
//           className="w-32 h-32"
//           src="/assets/img-profile.png"
//           alt="profile-1"
//         />

//         {/* 텍스트 */}
//         <div className="flex flex-col">
//           <p className="text-white font-size-50 font-normal text-4xl">
//             직접 만드는 것을 좋아하는 개발자
//           </p>
//           <p>
//             <span className="text-white font-size-70 font-extrabold text-6xl">
//               차수지
//             </span>
//             <span className="text-white font-size-70 font-bold text-6xl">
//               {" "}
//               입니다
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomePage;
