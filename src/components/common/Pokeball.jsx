import Spline from '@splinetool/react-spline';

 const Pokeball=()=> {
  return (
    <div className='w-screen h-screen relative '>
        <Spline scene="https://prod.spline.design/1dmYaKuHF0CuTG-W/scene.splinecode" />
      <div className="absolute w-[200px] h-[80px] right-0 bottom-0 bg-white"></div>
    </div>
  );
}
export  default  Pokeball