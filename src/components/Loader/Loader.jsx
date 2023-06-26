import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Loader = () => {
  const location = useLocation();
  
  useEffect(() => {
    scrollTo(0,0);
  }, [location]);

  return (
    <div className="min-h-screen max-w-[1280px] flex justify-center items-center m-auto">
      <div className="flex justify-center items-center mb-56 flex-col">
        <div className="lds-dual-ring"></div>
        <p className="mt-10">CARGANDO . . .</p>
      </div>
    </div>
  );
};
