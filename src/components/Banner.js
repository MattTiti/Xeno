const Banner = () => {
  return (
    <div className="bg-black text-white p-20 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-10 drop-shadow-2xl">
      <div className="lg:w-1/2 flex flex-col items-start space-y-4">
        <h1 className="text-7xl font-bold">DATA AND XENOPHOBIA</h1>
        {/* <p className="text-lg">
            Embark on an intentional journey of self-discovery
          </p> */}
      </div>
      <div className="lg:w-1/2">
        <img
          src="/xeno-art.png"
          alt="A descriptive alternative text"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
