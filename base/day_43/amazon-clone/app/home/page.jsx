'use client'
import A111 from './A111';
import A112 from './A112';

export default function HomePage() {
  return (
    <div>
      <div className="h-[6vh] bg-black">
        {/* A1 */}
        <div className="h-[60%] bg-[#131921] flex flex-row">
          {/* A11 */}
          <div className="w-[25%] min-w-[300px] ml-2 flex flex-row justify-center items-center">
            <A111 />
            <A112 />
          </div>
          {/* A12 */}
          <div className="w-[80%]"></div>
        </div>
        {/* A2 */}
        <div className="h-[40%] bg-[#232F3E]"></div>
      </div>
      {/* B */}
      <div className="h-[40vh] bg-orange-200">
      </div>
    </div>
  )
}
