export const TopBar = () => {
  return (
    <div className="w-full h-11 bg-lightBlue">
        <div className="max-w-[1180px] mx-auto h-full flex justify-between">
            <div className="hidden xl:flex xl:gap-8 ">
                <picture className='flex justify-center'>
                    <img className='' src="https://www.fullh4rd.com.ar/img/nav_logitech.png" alt="" />
                </picture>
                <picture className='flex justify-center'>
                    <img className='' src="https://www.fullh4rd.com.ar/img/nav_corsair.png" alt="" />
                </picture>
                <picture className='flex justify-center'>
                    <img className='' src="https://www.fullh4rd.com.ar/img/nav_geforce.png" alt="" />
                </picture>
                <picture className='flex justify-center'>
                    <img className='' src="https://www.fullh4rd.com.ar/img/nav_amd.png" alt="" />
                </picture>
                <picture className='flex justify-center'>
                    <img className='' src="https://www.fullh4rd.com.ar/img/nav_intel.png" alt="" />
                </picture>
                <picture className='flex justify-center'>
                    <img className='' src="https://www.fullh4rd.com.ar/img/nav_trust.png" alt="" />
                </picture>
                <picture className='flex justify-center'>
                    <img src="https://logodownload.org/wp-content/uploads/2014/09/msi-logo-0.png" alt="" />
                </picture>
            </div>
            <div className="w-full xl:w-auto flex justify-evenly xl:justify-center items-center text-gray-100 text-xs xl:text-sm gap-6">
                <h4>📞(221) 458-7589</h4>
                <a href="">✉ gamingup@gmail.com</a>
                <h4>📍 La Plata</h4>
            </div>
        </div>
    </div>
  )
}
