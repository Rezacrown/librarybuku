import React from 'react'

export const HamburgerMenu = () => {

    function burger() {
        let span = document.getElementsByTagName('span')
        span[0].classList.toggle('rotate-45')
        span[1].classList.toggle('scale-0')
        span[2].classList.toggle('-rotate-45')
    }

    function mobilemenu() {
        burger();
        
    }

    return(
            <button onClick={mobilemenu} className=' translate-x-10'>
                <span className="block w-[30px] h-[2px] bg-orange-100 origin-top-left transition duration-300"></span>
                <span className="block w-[30px] h-[2px] bg-orange-100 mt-2 transition duration-300"></span>
                <span className="block w-[30px] h-[2px] bg-orange-100 mt-2 origin-bottom-left transition duration-300"></span>
            </button>
    )
}

export default HamburgerMenu