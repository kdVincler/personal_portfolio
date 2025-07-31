function Footer ({dark}) {
    return(
        <div id='contact' className="w-[100%]">
            <section className='mt-[10vh] h-fit w-[100%]'>
                <div className="flexContainer flex justify-center md:flex-row  md:gap-40 flex-col gap-5 items-center">
                    {/* Button designs lifted from https://daisyui.com/components/button/#login-buttons */}
                    <a 
                        href='mailto:konrad.vincler@gmail.com'
                        target='_blank'
                    >
                        <button className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white w-[140px]">
                            <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            Email me
                        </button>
                    </a>
                    <a 
                        href='https://github.com/kdVincler'
                        target='_blank'
                    >
                        <button className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white  w-[140px]">
                            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                            My GitHub
                        </button>
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/konradvincler'
                        target='_blank'
                    >
                        <button className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white w-[140px]">
                            <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
                            My LinkedIn
                        </button>
                    </a>
                </div>
                <p className='text-sm mt-[30px] mb-[10px] m-auto w-fit'>
                    Copyright © {new Date().getFullYear()} - Konrad Vincler
                </p>
            </section>
        </div>
    )
}

export default Footer;