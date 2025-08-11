import Image from "next/image";
import SlideShow from "@/componen/slide";
import JadwalKelas from "@/componen/JadwalKelas";
import { IoLogoInstagram } from "react-icons/io";
import { IoNavigate } from "react-icons/io5";

export default function Home() {
  return (
    <div className="mkdf-wrapper w-full flex flex-col">
      <div className="mkdf-cover"></div>

      <div className="mkdf-top-bar hidden lg:block">
        <div className="w-full h-[5vh] bg-black "></div>
      </div>

      <main className="flex flex-col items-center sm:items-start bg-white">
        <div className="w-full min-h-[10vh] flex relative flex-col ">
          <SlideShow/>
          <div className="w-full h-[10vh] flex items-center justify-between py-3 px-3 z-10 bg-white lg:bg-transparent lg:min-h-10 lg:flex lg:items-center lg:justify-between">
            <div className="w-[50%] h-full flex items-center">
              <img
                src="https://360moveuluwatu.com/wp-content/uploads/2024/09/360move-MainLockUp-FINAL_whiteontransparent.png"
                alt=""
                className="w-[10vh] hidden lg:block"
              />
              <img
                src="https://360moveuluwatu.com/wp-content/uploads/2024/09/360move-MainLockUp-FINAL_blackontransparent.png"
                alt=""
                className="w-[5vh] flex items-center justify-center lg:hidden"
              />
            </div>
            <div className="w-[100vh] h-[8vh] flex items-center justify-end gap-x-[60px] p-3 bg-transparent lg:bg-black lg:flex">
              <ul className="hidden font-montserrat text-[75%] p-5 gap-x-25 flex w-full  text-white text-center items-center whitespace-nowrap text-sm tracking-wide uppercase lg:block lg:flex">
                <li>Home</li>
                <li className="underline">Schedule and membership</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
              <svg
                width="50"
                height="50"
                viewBox="0 0 52 11"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-black lg:text-white min-w-[40px]"
              >
                <rect x="1" y="1" width="50" height="2" />
                <rect x="1" y="8" width="50" height="2" />
              </svg>
            </div>
          </div>
          <div className="z-20 justify-center items-center flex mt-25 w-full h-[74vh]">
              <img src="https://360moveuluwatu.com/wp-content/uploads/2019/06/h1-rev-text.png" alt="" className="w-[50%]" />
          </div>
        </div>
        <div className=" w-full min-h-[50vh] bg-white relative">
          <div className="">
            <img src="https://360moveuluwatu.com/wp-content/uploads/2024/09/360move-MainLockUp-FINAL_blackontransparent.png" alt="" className="w-[50vh] absolute opacity-50 z-0"/>
          </div>
          <div className="w-full min-h-[50vh] flex justify-center items-center text-center z-10">
             <span className="w-full h-full flex flex-col justify-center items-center text-black">
              <h1 className="text-[35px] w-[50%] font-bold">Come for your workout, stay for the community.</h1>
          <p className="text-[20px] w-[50%] text-gray-400">Get stronger, feel better, and connect with amazing people at 360 MOVE. Whether you're starting or leveling up, we’ve got your back.</p>
          </span>
          </div>
        </div>
<div className="relative w-screen min-h-[30vh] max-h-[50vh] md:h-[80vh] lg:min-h-[100vh] overflow-hidden bg-black">
  <iframe
    className="absolute inset-0 w-full h-[100%] scale-[1.5] object-cover pointer-events-none"
    src="https://www.youtube.com/embed/AzD-KX9jI9s?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=AzD-KX9jI9s&modestbranding=1"
    title="360 MOVE Impressions"
    frameBorder="0"
    allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    referrerPolicy="no-referrer"
  ></iframe>
</div>


<div className="w-full min-h-[25vh] justify-center flex flex-col items-center text-center">
      <div className="justify-center flex flex-col items-center text-center">
        <span className="text-black w-[50% ] justify-center flex flex-col items-center text-center gap-y-5">
          <h1 className="text-[50px] font-bold">Your space. Your pace. Your strength.</h1>
          <p className="text-[20px] text-gray-500">Experience 360 MOVE. Select a class from our schedule or drop in for an open gym session.</p>
          <button className="py-5  w-full bg-black text-white border-1 border-black hover:bg-white hover:text-black">Save Your Spot</button>
        </span>
      </div>
</div>



<div className="w-full min-h-[50vh] bg-[]  flex flex-col lg:flex-row items-center justify-center">
  <div className="md:w-full lg:w-[35%] h-[60vh] relative overflow-hidden z-0 group">
    
    <img
      src="https://360moveuluwatu.com/wp-content/uploads/2024/10/3-1.jpg"
      alt=""
      className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 z-0"
    />

    <div className="absolute w-full h-full bg-[rgba(27,27,27,0.57)] z-10"></div>

    <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-white text-center px-[15%] gap-y-5">
      <img src="https://360moveuluwatu.com/wp-content/uploads/2019/07/h1-svg-1.png" alt="" />
      <h1 className="teks-black relative inline-block after:bg-white after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] px-3 py-1 after:transition-transform after:duration-500  font-bold">
  CLASSES FROM 170K
</h1>
      <p className="text-gray-300">Learn new skills, Chalange yourself, and enjoy the motivation working out with others</p>
      <button className="group relative border-l border-b border-white px-3 py-1 transition-all duration-300 ease-in-out hover:border-b-0 hover:border-t after-effect before-effct">
  <span className="flex items-center justify-center gap-x-3 relative z-10">
    Book Your Spot
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12C5 9.2386 7.2386 7 10 7H13V4L19 9L13 14V11H10C8.3431 11 7 12.3431 7 14C7 15.6569 8.3431 17 10 17H14V19H10C7.2386 19 5 16.7614 5 14V12Z" />
    </svg>
  </span>
</button>
    </div>

  </div>


  <div className="md:w-full lg:w-[35%] h-[60vh] relative overflow-hidden z-0 group">
    
    <img
      src="https://360moveuluwatu.com/wp-content/uploads/2024/10/Website-Pics-1100x1045-1.jpg"
      alt=""
      className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 z-0 object-top"
    />

    <div className="absolute w-full h-full bg-[rgba(231,220,198,0.57)] z-10"></div>

    <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-white text-center px-[15%] gap-y-5">
      <img src="https://360moveuluwatu.com/wp-content/uploads/2019/07/h1-svg-2.png" alt="" />
      <h1 className="text-black teks-blek relative inline-block after:bg-white after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] px-3 py-1 after:transition-transform after:duration-500  font-bold">
  OPEN GYM FROM 100K
</h1>
      <p className="text-black">
			            Your workout, your rules - Train at your own pace with all the equipment you need. 		            </p>
      <button className="group border-black relative border-l-2 border-b px-3 py-1 transition-all duration-300 ease-in-out hover:border-b-0 hover:border-t after-effec before-effec">
  <span className="flex items-center justify-center gap-x-3 relative z-10 text-black font-light">
    MEMBERSHIP PLANS
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12C5 9.2386 7.2386 7 10 7H13V4L19 9L13 14V11H10C8.3431 11 7 12.3431 7 14C7 15.6569 8.3431 17 10 17H14V19H10C7.2386 19 5 16.7614 5 14V12Z" />
    </svg>
  </span>
</button>
    </div>

  </div>


  <div className="md:w-full lg:w-[35%] h-[60vh] relative overflow-hidden z-0 group">
    
    <img
      src="https://360moveuluwatu.com/wp-content/uploads/2024/10/2-1.jpg"
      alt=""
      className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 z-0 object-top"
    />

    <div className="absolute w-full h-full bg-[rgba(27,27,27,0.57)] z-10"></div>

    <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-white text-center px-[15%] gap-y-5">
      <img src="https://360moveuluwatu.com/wp-content/uploads/2019/07/h1-svg-3.png" alt="" className=""/>
      <h1 className="teks-black relative inline-block after:bg-white after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] px-3 py-1 after:transition-transform after:duration-500  font-bold">
  PHYSIO
</h1>
      <p className="text-gray-300">Prevent injuries and recover better with our in-house physiotherapist. 		            </p>
      <button className="group relative border-l border-b border-white px-3 py-1 transition-all duration-300 ease-in-out hover:border-b-0 hover:border-t after-effect before-effct">
  <span className="flex items-center justify-center gap-x-3 relative z-10">
    Book Consultan
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12C5 9.2386 7.2386 7 10 7H13V4L19 9L13 14V11H10C8.3431 11 7 12.3431 7 14C7 15.6569 8.3431 17 10 17H14V19H10C7.2386 19 5 16.7614 5 14V12Z" />
    </svg>
  </span>
</button>
    </div>

  </div>

</div>
    <div className="relative pb-0 pt-[25vh] w-full min-h-[50vh] bg-[#111111] flex justify-center items-start">
<div className="top-[25%] right-[75%] left-0 absolute z-0 rotate-[270deg] flex justify-center items-center">
  <h1
    className="whitespace-nowrap text-[10vh] font-bold text-transparent"
    style={{
      WebkitTextStroke: "0.3px gray",
      color: "transparent",
    }}
  >
    Teks Vertikal
  </h1>
</div>
    <div className="w-[100%] min-h-[50vh] justify-center items-center flex pb-4">
  <div className="w-[100%] min-h-[50vh] flex flex-col z-10">
    <div className="w-full h-full items-center flex flex-col gap-y-3">
      <h1 className="text-[50px] font-bold tracking-[8px]">SCHEDULE</h1>  
      <p className="text-[20px]">OPEN GYM ACCESS</p>
      <p className="text-[20px]">MONDAY-SATURDAY 06:00-20:00 | SUNDAY 07:00-15:00</p>  
    </div>

    <div className="flex flex-col min-w-full min-h-[5vh] justify-center items-center">
      <ul className="w-[75%] flex flex-wrap gap-3 text-black text-sm ">
        <li className="px-2 py-2 bg-white rounded-[5px] border border-white whitespace-nowrap">ALL</li>
        <li className="px-2 py-2 rounded-[5px] border border-white text-white whitespace-nowrap">HIIT The Cliff</li>
        <li className="px-2 py-2 rounded-[5px] border border-white text-white whitespace-nowrap">Hot Pilates</li>
        <li className="px-2 py-2 rounded-[5px] border border-white text-white whitespace-nowrap">Stronger - Surf Strength</li>
        <li className="px-2 py-2 rounded-[5px] border border-white text-white whitespace-nowrap">Boddy Control - Surf Mobility</li>
        <li className="px-2 py-2 rounded-[5px] border border-white text-white whitespace-nowrap">Hard Beat</li>
        <li className="px-2 py-2 rounded-[5px] border border-white text-white whitespace-nowrap">Booty</li>
        <li className="px-2 py-2 rounded-[5px] border border-white text-white whitespace-nowrap">Surf Motion</li>
      </ul>
      <div className="w-[80%] h-full">
      <JadwalKelas/>
      </div>
      <button className="px-[35%] py-2 whitespace-nowrap border-2 border-white">Book Now</button>
    </div>
    </div>
  </div>
</div>
<div className=" w-full min-h-[35vh]">
    <div className=" w-full min-h-[35vh] justify-center flex flex-col items-center p-5">
      <div className=" w-full h-full justify-center flex flex-col items-center text-black gap-y-5 text-center pb-5">
        <h1 className="text-[40px] w-[70%] font-bold gap-y-1">FIND THE PERFECT CLASS FOR YOUR FITNES JOURNEY</h1>
        <p className=" text-[20px] text-gray-400">Classes for every level, every style, every body. From high-energy HIIT to surf training and everything in between- we have your workout covered!</p>
      </div>
    </div>
</div>




<div className="w-full min-h-[25vh] bg-orange-200 flex flex-wrap lg:flex-nowrap overflow-hidden ">
  {/* Gambar 1 */}
  <div className="w-full lg:w-[25vw] h-[50vh] lg:h-[25vh] bg-white overflow-hidden">
    <div className="relative w-full h-full group overflow-hidden">
      <div className="flex w-[200%] h-full transition-transform duration-500 ease-in-out -translate-x-1/2 group-hover:translate-x-0">
        
        {/* Text Panel */}
        <div className="w-1/2 h-full relative flex-shrink-0">
          <img src="https://360moveuluwatu.com/wp-content/uploads/2024/10/Copy-of-DSC01329-1-scaled-e1731208944301.jpg" alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-white opacity-50 z-10" />
          <div className="absolute inset-0 z-20 flex justify-center items-center p-4 text-black text-center">
            <div className="space-y-2">
              <h1 className="text-lg font-bold">STRONGER</h1>
              <p className="text-sm leading-snug">
                Surf-specific workout for everyone<br />
                Build muscular strength<br />
                Increase power and explosiveness<br />
                Correct muscular imbalances<br />
                Improve your surfing performance<br />
                Prevent surf-related injuries
              </p>
              <button className="mt-2 py-2 px-4 border border-black hover:bg-black hover:text-white">
                Info & Booking
              </button>
            </div>
          </div>
        </div>

        {/* Image Panel */}
        <div className="w-1/2 h-full relative flex-shrink-0">
          <img src="https://360moveuluwatu.com/wp-content/uploads/2024/11/23.png" alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <div className="absolute inset-0 z-20 flex justify-center items-center text-white text-end p-6">
            <div>
              <h1 className="text-sm font-bold"> Strength & Endurance</h1>
              <h1 className="text-lg font-bold">Stronger</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Gambar 2 */}
  <div className="w-full lg:w-[25vw] h-[50vh] lg:h-[25vh] bg-white overflow-hidden">
    <div className="relative w-full h-full group overflow-hidden">
      <div className="flex w-[200%] h-full transition-transform duration-500 ease-in-out group-hover:-translate-x-1/2">
        
        {/* Image Panel */}
        <div className="w-1/2 h-full relative flex-shrink-0">
          <img src="https://360moveuluwatu.com/wp-content/uploads/2024/11/60.jpg" alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <div className="absolute inset-0 z-20 flex justify-center items-center text-white text-end p-6">
            <div>
              <h1 className="text-sm font-bold">BODY TONING</h1>
              <h1 className="text-lg font-bold">HOT PILATES</h1>
            </div>
          </div>
        </div>

        {/* Text Panel */}
        <div className="w-1/2 h-full relative flex-shrink-0">
          <img src="https://360moveuluwatu.com/wp-content/uploads/2024/11/56.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white opacity-75 z-10" />
          <div className="absolute inset-0 z-20 flex justify-center items-center p-4 text-black text-center">
            <div className="space-y-2">
              <h1 className="text-lg font-bold">HOT PILATES</h1>
              <p className="text-sm leading-snug">
                High-intensity full-body workout<br />
                Heated room for increased sweating<br />
                High-intensity, low-impact<br />
                Strengthens muscles<br />
                Improves flexibility and mobility
              </p>
              <button className="mt-2 py-2 px-4 border border-black hover:bg-black hover:text-white">
                Info & Booking
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="w-full lg:w-[50vw] h-[50vh] lg:h-[25vh] bg-white overflow-hidden">
    <div className="relative w-full h-full group overflow-hidden">
      <div className="flex flex-col w-full h-[200%] transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
        
        <div className="w-full h-1/2 relative">
          <img src="https://360moveuluwatu.com/wp-content/uploads/2024/10/IMG_3928-e1731208164338.jpg" alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <div className="absolute inset-0 z-20 flex justify-center items-center text-white text-end p-6">
            <div>
              <h1 className="text-sm font-bold">SURF COACHING & WORKOUTS</h1>
              <h1 className="text-lg font-bold">PERSONAL COACH</h1>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 relative">
          <img src="https://360moveuluwatu.com/wp-content/uploads/2025/03/Screenshot-2025-03-06-at-20.26.33-e1741264233345.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white opacity-75 z-10" />
          <div className="absolute inset-0 z-20 flex justify-center items-center p-4 text-black text-center">
            <div className="space-y-2">
              <h1 className="text-lg font-bold">PERSONAL COACH</h1>
              <p className="text-sm leading-snug">
                Tailored coaching for all levels, in the water or at the gym. <br />
                Improve strength, endurance, and technique with expert guidance. <br />
                Improve surf performance or build overall fitness. <br />
                A personalized approach to help you progress faster.
              </p>
              <button className="mt-2 py-2 px-4 border border-black hover:bg-black hover:text-white">
                Info & Booking
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>



<div className="w-full bg-orange-200 flex flex-col sm:flex-row flex-wrap overflow-hidden">
  {/* Gambar 1 */}
  <div className="w-full sm:w-1/3 bg-white overflow-hidden">
    <div className="relative w-full group overflow-hidden h-auto sm:h-[25vh]">
      <div className="flex flex-col sm:h-[50vh] transition-transform duration-500 ease-in-out sm:group-hover:-translate-y-[25vh]">

        {/* Atas */}
        <div className="relative w-full h-[40vh] sm:h-[25vh]">
          <img
            src="https://360moveuluwatu.com/wp-content/uploads/2024/11/21-2.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="bg-black absolute inset-0 z-10 opacity-50" />
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <span className="flex flex-col justify-center items-end text-end text-white p-6 gap-y-1">
              <h1 className="text-[16px] sm:text-[20px] font-bold">FUNCTIONAL FITNESS</h1>
              <h1 className="text-[20px] sm:text-[25px] font-bold">OPEN GYM</h1>
            </span>
          </div>

        {/* Detail */}
        <div className="relative w-full h-auto sm:h-[25vh]">
          <img
            src="https://360moveuluwatu.com/wp-content/uploads/2024/11/13-3.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="bg-white absolute inset-0 z-10 opacity-75" />
          <div className="absolute inset-0 z-20 flex justify-center items-center p-4">
            <span className="flex flex-col justify-center items-center text-center text-black gap-y-3">
              <h1 className="text-[20px] sm:text-[25px] font-bold">OPEN GYM</h1>
              <p className="text-[14px] sm:text-[15px] leading-snug font-light text-black opacity-75">
                Train at your own pace with free weights, cardio machines, and functional equipment. <br />
                Workout indoors with AC or in outdoor space. <br />
                Flexible and fully equipped for all fitness levels.
              </p>
              <button className="py-2 px-4 border border-black hover:bg-black hover:text-white text-sm sm:text-base">
                Info & Booking
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  {/* Gambar 2 */}
  <div className="w-full sm:w-1/3 bg-white overflow-hidden">
    <div className="relative w-full group overflow-hidden h-auto sm:h-[25vh]">
      <div className="flex sm:w-[66.66vw] w-full h-full transition-transform duration-500 ease-in-out sm:group-hover:-translate-x-[33.33vw]">

        {/* Atas */}
        <div className="w-full sm:w-[33.33vw] h-[40vh] sm:h-full relative">
          <img
            src="https://360moveuluwatu.com/wp-content/uploads/2024/10/Screenshot-2024-10-16-at-07.15.08.png"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="bg-black absolute inset-0 z-10 opacity-50" />
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <span className="flex flex-col justify-end items-end text-end text-white p-6 sm:p-10 gap-y-1">
              <h1 className="text-[16px] sm:text-[20px] font-bold">FATBURN & ENDURANCE</h1>
              <h1 className="text-[20px] sm:text-[25px] font-bold">HITT THE CLIFF</h1>
            </span>
          </div>

        {/* Detail */}
        <div className="w-full sm:w-[33.33vw] h-auto sm:h-full relative">
          <img
            src="https://360moveuluwatu.com/wp-content/uploads/2024/10/IMG_8104-scaled-e1728989296118.jpg"
            alt=""
            className="w-full h-full object-cover object-[50%_20%]"
          />
          <div className="bg-white absolute inset-0 z-10 opacity-75" />
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <span className="flex flex-col justify-center items-center text-center text-black gap-y-3 p-4">
              <h1 className="text-[20px] sm:text-[25px] font-bold">HITT THE CLIFF</h1>
              <p className="text-[14px] sm:text-[15px] leading-snug font-light text-black opacity-75">
                High-intensity interval training <br />
                Location with cliff view <br />
                Burns fat effectively <br />
                Builds endurance and strength <br />
                Full-body workout
              </p>
              <button className="py-2 px-4 border border-black hover:bg-black hover:text-white text-sm sm:text-base">
                Info & Booking
              </button>
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

  {/* Gambar 3 */}
  <div className="w-full sm:w-1/3 bg-white overflow-hidden">
    <div className="relative w-full group overflow-hidden h-auto sm:h-[25vh]">
      <div className="flex flex-col sm:h-[50vh] transition-transform duration-500 ease-in-out sm:group-hover:-translate-y-[25vh]">

        {/* Atas */}
        <div className="relative w-full h-[40vh] sm:h-[25vh]">
          <img
            src="https://360moveuluwatu.com/wp-content/uploads/2024/10/360move-old-122-e1731208628789.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="bg-black absolute inset-0 z-10 opacity-50" />
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <span className="flex flex-col justify-end items-end text-end text-white p-6 sm:p-10 gap-y-1">
              <h1 className="text-[16px] sm:text-[20px] font-bold">MOBILITY</h1>
              <h1 className="text-[20px] sm:text-[25px] font-bold">BODY CONTROL</h1>
            </span>
          </div>

        {/* Detail */}
        <div className="relative w-full h-auto sm:h-[25vh]">
          <img
            src="https://360moveuluwatu.com/wp-content/uploads/2024/10/IMG_7998-1-e1729042094959.png"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="bg-white absolute inset-0 z-10 opacity-75" />
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <span className="flex flex-col justify-center items-center text-center text-black gap-y-3 p-4">
              <h1 className="text-[20px] sm:text-[25px] font-bold">BODY CONTROL</h1>
              <p className="text-[14px] sm:text-[15px] leading-snug font-light text-black opacity-75">
                Fetch Surf Concept is a holistic surf training & coaching program designed for everyone, not just for surfers.
              </p>
              <button className="py-2 px-4 border border-black hover:bg-black hover:text-white text-sm sm:text-base">
                Info & Booking
              </button>
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>



<div className="w-full min-h-[80vh] flex justify-center items-center mt-25">
      <div className=" w-full min-h-[80%] flex flex-col items-center">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-black text-[35px]  tracking-wide mb-10 text-center   font-poppins font-bold">WHY MOVING WITH 360MOVE?</h1>
          </div>

          <div className="w-full flex flex-col md:flex-row">

            {/*Gambar1*/}
          <div className="w-full md:w-[25vw] min-h-[50vh] flex items-center flex-col gap-3">
            <div className="">
              <img src="https://360moveuluwatu.com/wp-content/uploads/2024/11/360-OCT-training-67-scaled.jpg" alt="" className="p-1"/>
            </div>
            <div className="w-full flex items-center flex-col justify-center text-center text-black">
            <h1 className="text-[20px] font-bold uppercase">Your workout, your rules</h1>
            <p className="text-[15px] p-5 pt-0">Our space gives you the freedom to train your way. Choose your routine, set your pace, and enjoy a space designed for your goals – on your terms.</p>
            </div>
          </div>

          {/*Gambar2*/}
          <div className="w-full md:w-[25vw] min-h-[50vh] flex items-center flex-col gap-3">
            <div className="">
              <img src="https://360moveuluwatu.com/wp-content/uploads/2024/11/52.jpg" alt="" className="p-1"/>
            </div>
            <div className="w-full flex items-center flex-col justify-center text-center text-black">
            <h1 className="text-[20px] font-bold uppercase">VALUE WITHOUT COMPROMISE </h1>
            <p className="text-[15px] p-5 pt-0">Whether you’re here for a weekend or staying longer, we’ve made our plans and day passes affordable without compromising on quality.</p>
            </div>
          </div>

          {/*Gambar3*/}
          <div className="w-full md:w-[25vw] min-h-[50vh] flex items-center flex-col gap-3">
            <div className="">
              <img src="https://360moveuluwatu.com/wp-content/uploads/2024/11/64-1.jpg" alt="" className="p-1"/>
            </div>
            <div className="w-full flex items-center flex-col justify-center text-center text-black">
            <h1 className="text-[20px] font-bold uppercase">Progress is more than physical here</h1>
            <p className="text-[15px] p-5 pt-0">Meet like-minded people, make new friends, train together and stay motivated.</p>
            </div>
          </div>

          {/*Gambar4*/}
          <div className="w-full md:w-[25vw] min-h-[50vh] flex items-center flex-col gap-3">
            <div className="">
              <img src="https://360moveuluwatu.com/wp-content/uploads/2024/11/62-1.jpg" alt="" className="p-1"/>
            </div>
            <div className="w-full flex items-center flex-col justify-center text-center text-black">
            <h1 className="text-[20px] font-bold uppercase">certified coaches & IN-HOUSE PHYSIO</h1>
            <p className="text-[15px] p-5 pt-0">Our coaches are ready to help you get you to your best. Whether in a class or in a personal training session.</p>
            </div>
          </div>

 
        </div>

      </div>
</div>

<div className="w-full h-[50vh] bg-[#242424]">
  <div className="w-full h-full px-5 relative">
    
    {/* Image Container */}
    <div className="w-[35%] h-full flex items-center justify-center overflow-hidden relative z-0">
      <img
        src="/360move-MainLockUp-FINAL_blackontransparent.png"
        alt=""
        className="w-full  md:h-[60%] lg:h-[60%] object-cover object-[40%_30%]"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50 z-10" />
<div className="absolute inset-0 z-20 px-5 py-8 flex flex-col items-center justify-center text-white">
  <h1 className="text-[32px] md:text-[40px] font-bold uppercase mb-5 text-center">
    Reviews From You
  </h1>

  <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-2 md:px-5">
    <span className="hidden md:flex text-4xl font-bold cursor-pointer select-none items-center justify-center w-[40px]">
      &lt;
    </span>

    <div className="w-full md:w-[90%] max-w-[700px] text-[18px] md:text-[25px] leading-relaxed italic text-center md:text-left">
      <p className="mb-6">
        Awesome gym and great equipment, the ladies at reception are super friendly making the whole experience enjoyable!!
      </p>
      <p className="font-bold not-italic">Andrew Looker</p>
    </div>

    <span className="hidden md:flex text-4xl font-bold cursor-pointer select-none items-center justify-center w-[40px]">
      &gt;
    </span>
  </div>

  <div className="flex md:hidden gap-8 mt-4 justify-between w-[50%]">
    <span className="text-3xl font-bold cursor-pointer select-none">&lt;</span>
    <span className="text-3xl font-bold cursor-pointer select-none">&gt;</span>
  </div>
</div>

</div>
    </div>

<div className="w-full min-h-[60vh] bg-white font-montserrat relative overflow-hidden">
  <h1 className="absolute text-[20vh] font-bold text-transparent stroke-1 stroke-gray-300 rotate-[270deg] left-4 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none text-outline-custom">
    ASK
  </h1>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div className="flex flex-col text-center items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
        REACH OUT AND LET'S GET YOU MOVING!
      </h2>
      <p className="text-gray-700 leading-relaxed max-w-md text-center">
        Need help or ready to book your session? Don't hesitate to drop us a line. Your fitness adventure starts with a simple hello!
      </p>
    </div>

    <form className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Full name" className="w-full px-4 py-3 border border-gray-300 focus:outline-none" />
        <input type="email" placeholder="E-mail address" className="w-full px-4 py-3 border border-gray-300 focus:outline-none" />
      </div>

      <input type="text" placeholder="Subject" className="w-full px-4 py-3 mb-4 border border-gray-300 focus:outline-none" />

      <textarea placeholder="Drop us a few lines here..." className="w-full px-4 py-3 h-40 border border-gray-300 resize-none focus:outline-none mb-4" />

      <div className="flex justify-end">

        <button className="group border-black relative border-l-2 border-b px-3 py-1 transition-all duration-300 ease-in-out hover:border-b-0 hover:border-t after-effec before-effec">
  <span className="flex items-center justify-center gap-x-3 relative z-10 text-black font-light">
    Send us a message
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12C5 9.2386 7.2386 7 10 7H13V4L19 9L13 14V11H10C8.3431 11 7 12.3431 7 14C7 15.6569 8.3431 17 10 17H14V19H10C7.2386 19 5 16.7614 5 14V12Z" />
    </svg>
    </span>
    </button>
      </div>
    </form>
  </div>
</div>
<div className="w-full min-h-[25vh] bg-[#242424]">
<div className="w-full h-full justify-center flex items-center">
  <span className="w-[80%] h-[5vh] flex justify-center items-center text-center gap-5">
    <IoLogoInstagram className="text-white text-2xl" />
      <p className="text-white opacity-50">Follow Us on 360move_uluwatu</p>
  </span>
</div>
<div className="px-1 w-full h-[25vh]">
  <div className="w-full h-full flex">
    <div className="h-full w-[10%] overflow-hidden relative">
      <img
        src="https://360moveuluwatu.com/wp-content/uploads/inavii-social-feed/18218219902305755-l.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 w-6 h-6 text-white fill-current z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z" />
      </svg>
    </div>

    <div className="h-full w-[10%] overflow-hidden relative">
      <img
        src="https://360moveuluwatu.com/wp-content/uploads/inavii-social-feed/18084043612860135-l.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 w-6 h-6 text-white fill-current z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z" />
      </svg>
    </div>
 <div className="h-full w-[10%] overflow-hidden relative">
      <img
        src="https://360moveuluwatu.com/wp-content/uploads/inavii-social-feed/18095279533538292-l.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 w-6 h-6 text-white fill-current z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z" />
      </svg>
    </div>
 <div className="h-full w-[10%] overflow-hidden relative">
      <img
        src="https://360moveuluwatu.com/wp-content/uploads/inavii-social-feed/18096469894716121-l.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 w-6 h-6 text-white fill-current z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z" />
      </svg>
    </div>
 <div className="h-full w-[10%] overflow-hidden relative">
      <img
        src="https://360moveuluwatu.com/wp-content/uploads/inavii-social-feed/18097642972591576-l.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 w-6 h-6 text-white fill-current z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z" />
      </svg>
    </div>
 <div className="h-full w-[10%] overflow-hidden relative">
      <img
        src="https://360moveuluwatu.com/wp-content/uploads/inavii-social-feed/18070085204091631-l.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute top-2 right-2 w-6 h-6 text-white fill-current z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z" />
      </svg>
    </div>
  </div>
</div>
</div>

<footer className="w-full bg-[#242424] text-white">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="flex justify-center items-start">
      <div className="w-1/2">
        <img
          src="https://360moveuluwatu.com/wp-content/uploads/2024/11/360move-MainLockUp-FINAL_whiteontransparent-1024x1024.png"
          alt="360 MOVE Logo"
          className="w-full"
        />
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">CONNECT, SWEAT, SMILE.</h1>
      <p className="text-sm">
        Join us at 360 MOVE, your gym located in the prime area of Uluwatu! Let's get moving
        together! FIND US HERE
      </p>
      <div className="flex gap-4 text-white">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-pink-400 transition">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3.9-.4 2-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.6.4 2 .2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2.9.3 2 .4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-.9.4-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-.9-.3-2-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.6a5.4 5.4 0 110 10.8 5.4 5.4 0 010-10.8zm0 1.8a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2zm5.4-2.1a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z"/>
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-500 transition">
            <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.49V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.794.142v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.312h3.591l-.467 3.622h-3.124V24h6.127C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0"/>
          </svg>
        </a>

        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-green-500 transition">
            <path d="M12.04 2.003c-5.497 0-9.95 4.45-9.95 9.948 0 1.753.461 3.444 1.338 4.944L2.003 22l5.214-1.352a9.915 9.915 0 004.823 1.244h.001c5.498 0 9.948-4.453 9.948-9.95s-4.45-9.948-9.948-9.948zm5.76 14.313c-.24.676-1.406 1.285-1.942 1.362-.497.073-1.117.104-1.797-.111-.414-.13-.948-.31-1.653-.605-2.91-1.255-4.813-4.34-4.96-4.547-.146-.205-1.186-1.58-1.186-3.02 0-1.44.752-2.143 1.02-2.44.269-.295.584-.368.779-.368.193 0 .388.002.558.01.181.008.42-.068.658.502.24.576.813 1.987.887 2.132.073.145.12.314.02.518-.099.204-.149.33-.292.505-.146.17-.307.38-.44.512-.146.145-.3.303-.13.592.174.295.773 1.28 1.66 2.073 1.144 1.02 2.105 1.33 2.4 1.48.296.146.47.121.646-.073.174-.194.745-.867.945-1.163.2-.295.393-.244.66-.146.269.098 1.704.802 1.997.948.292.146.486.22.558.34.073.121.073.697-.168 1.373z"/>
          </svg>
        </a>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold uppercase">FIND US HERE</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.054358772472!2d115.0889883!3d-8.8193664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24f712176b437%3A0xe1a3fe181b74f475!2s360%20MOVE%20Gym%20%26%20Training%20Center!5e0!3m2!1sen!2sid!4v1691223332921!5m2!1sen!2sid"
        className="w-full h-64 border-0"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <h3 className="text-sm">Pantai Suluban St, Pecatu, South Kuta, Uluwatu, Bali 80361</h3>
    </div>

    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold uppercase">Opening Hours</h1>
        <div className="mt-2 space-y-2">
          <div>
            <h3 className="font-semibold">Monday-Saturday</h3>
            <p>06:00 - 20:00</p>
          </div>
          <div>
            <h3 className="font-semibold">Sunday</h3>
            <p>06:00 - 15:00</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold uppercase">Contact</h1>
        <p>+62 821 4481 6669</p>
        <p>hello@360moveuluwatu.com</p>
      </div>
    </div>
  </div>
</footer>










      </main>
    </div>
  );
}
