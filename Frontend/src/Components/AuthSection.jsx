import personalImg from '../assets/images/personal fintech.jpg'
import businessImg from '../assets/images/business_fintech.jpg'

const AuthSection = ()=> {
  return (
  <div className="min-h-screen bg-[#2f2b3a] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-7xl bg-[#1f1b2e] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-visible">
        
        {/* Personal Column */}
        <div className="w-full md:w-1/2 h-[600px] relative hover:scale-105 hover:z-50 hover:cursor-pointer transition-transform duration-500">
         <img
  src={personalImg}
  alt="Personal"
  className="absolute inset-0 object-cover w-full h-full rounded-l-3xl"
/>

          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white rounded-l-3xl">
            <h2 className="text-4xl font-bold mb-2">Personal</h2>
            <p className="text-gray-300">Tailored for individual users.</p>
          </div>
        </div>

        {/* Business Column */}
        <div className="w-full md:w-1/2 h-[600px] relative hover:scale-105 hover:z-50 hover:cursor-pointer transition-transform duration-500">
          <img
            src={businessImg}
            alt="Business"
            className="absolute inset-0 object-cover w-full h-full rounded-r-3xl"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white rounded-r-3xl">
            <h2 className="text-4xl font-bold mb-2">Business</h2>
             <p className="">
        <span className="bg-gradient-to-r from-[#82cdff] from-[-9.41%] to-[#6060ea] to-[101.55%] bg-clip-text text-transparent mx-2">
          We
        </span>
        <span className="text-gray-200 mx-2">are</span>
        <span className="bg-gradient-to-r from-[#000407] from-[-9.41%] to-[#6060ea] to-[101.55%] bg-clip-text text-transparent mx-2">
          Team
        </span>
        <span className="text-gray-200 mx-2">nuxir</span>
      </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AuthSection