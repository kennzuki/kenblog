const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl uppercase font-bold'>Kenki blog</h1>
        <button className='sm:px-6 sm:py-3 md:py-4 md:px-12 border-4 border-solid border-black shadow-2xl shadow-black'>
          Get Started
        </button>
          </div>
          <div className="text-center my-8">
              <h1 className="text-3xl sm:text-5xl font-bold">Latest Blog</h1>
              <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum numquam reiciendis.</p>
              <form action="" className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10  py-4 px-6 border-2 border-black shadow-[-7px_7px_0px_#000000]">
                  <input type="text" className="pl-4 outli" placeholder="Enter your email" />
                  <button type="submit" className="border-l active:bg-gray-600 active:text-white py-4 px-8">Subscribe</button>
              </form>
          </div>
    </div>
  );
};

export default Header;
