// import React from 'react';
// import { useLanguage } from '../../language';

// const Introduct = () => {
//   const { language } = useLanguage();
//     return (
//         <div className="relative bg-cover bg-center h-[70vh] min-h-[450px] md:min-h-[550px] lg:min-h-[650px]" style={{ backgroundImage: "url('./title.jpg')" }}>
//           <div className="flex flex-col items-center justify-center h-full bg-gray-300 bg-opacity-10 px-4">
//             <div className="absolute left-[5%] right-[5%] md:left-[10%] md:right-[25%] md:left-[10%] md:right-[35%] lg:left-[10%] lg:right-[45%] xl:left-[10%] xl:right-[50%] bg-black bg-opacity-50 p-8 sm:p-8 md:p-10 lg:p-10 rounded-t-3xl top-[15%] xl:top-[20%] bottom-0"> 
//               <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white drop-shadow-lg text-center">
//                 Innovative meal vending solutions
//               </h1>
//               <p className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white mt-5 sm:mt-5 md:mt-7 lg:mt-10 xl:mt-16 text-left max-w-4xl mx-auto">
//                 {language === "en" 
//                   ? <>
//                       <span>Hungry? Busy? We've got you covered! Our on-site meal vending solutions offer fresh, delicious, and nutritious food whenever you need it. Whether you're at work, on campus, or on the go, enjoy high-quality meals anytime, anywhere — quick, convenient, and hassle-free.</span>
//                     </>
//                   : <>
//                       <span>Hungrig? Beschäftigt? Wir haben die Lösung für Sie! Unsere vor Ort Mahlzeiten Verkaufslösungen bieten Ihnen frische, köstliche und nahrhafte Speisen, wann immer Sie sie brauchen. Ob bei der Arbeit, auf dem Campus oder unterwegs, genießen Sie jederzeit und überall hochwertige Mahlzeiten.</span>
//                     </>
//                 }
//               </p>
//               <style>
//                 {`
//                   @media (max-width: 768px) {
//                     .bg-[length:100%_100%] {
//                       background-size: cover;
//                     }
//                     .text-4xl {
//                       font-size: 2rem;
//                     }
//                   }
//                 `}
//               </style>
//             </div>
//           </div>
//         </div>
//       );
//   };
  
//   export default Introduct;



import React from 'react';
import { useLanguage } from '../../language';

const Introduct = () => {
  const { language } = useLanguage();

  return (
    <div className="relative w-full h-auto">
      {/* 背景图片，完整展示人物和贩卖机 */}
      <img
        src="./title.jpg" // 确保文件路径正确，如在 public 文件夹下
        alt="banner"
        className="w-full object-cover max-h-[90vh]"
      />

      {/* 文字内容叠加层 */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-6 sm:px-12">
        <div className="bg-black bg-opacity-60 p-6 sm:p-8 md:p-10 rounded-3xl text-white max-w-2xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
            Innovative meal vending solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-5 leading-relaxed">
            {language === "en"
              ? <>
                  Hungry? Busy? We've got you covered! Our on-site meal vending solutions offer fresh, delicious, and nutritious food whenever you need it. Whether you're at work, on campus, or on the go, enjoy high-quality meals anytime, anywhere — quick, convenient, and hassle-free.
                </>
              : <>
                  Hungrig? Beschäftigt? Wir haben die Lösung für Sie! Unsere vor Ort Mahlzeiten Verkaufslösungen bieten Ihnen frische, köstliche und nahrhafte Speisen, wann immer Sie sie brauchen. Ob bei der Arbeit, auf dem Campus oder unterwegs, genießen Sie jederzeit und überall hochwertige Mahlzeiten.
                </>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduct;
