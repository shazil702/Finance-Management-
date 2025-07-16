const Home = ()=> {
  return (
<section
  className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
  style={{
    backgroundImage: "url('https://static.wixstatic.com/media/11062b_cc0d7d210e5b47e68fa18e65689136bd~mv2.jpeg/v1/fill/w_1901,h_1173,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cc0d7d210e5b47e68fa18e65689136bd~mv2.jpeg')"
  }}
>
  <div className="absolute inset-0 bg-opacity-50" />
  <div className="relative z-10 text-center px-4">
    <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-tight">
      Track your Expensse with <br /> Fintech
    </h1>
    <p className="mt-6 text-lg md:text-xl font-light">
      Your Financial Companion On-the-Go
    </p>
    <button className="mt-8 bg-white text-black px-8 py-3 rounded-full text-lg shadow-lg hover:bg-gray-200 transition">
      Contact Us
    </button>
  </div>
</section>

  );
}
export default Home