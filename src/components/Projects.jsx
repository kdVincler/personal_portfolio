import NXSS from '../assets/neXess_thumbnail.png'
import H24 from  '../assets/hobby24_thumbnail.jpg'
import DLVT from '../assets/dlv_thumbnail.png'
import FLXO from '../assets/FlipXO_thumbnail.png'
import FDME from '../assets/FDME_thumbnail.png'
import RWAT from '../assets/RWA_thumbnail.png'

function Projects () {
    return(
        <div id='proj'>
            <section className='tile proj bg-sky-50 dark:bg-gray-800'>
                <h1 className='font-bold text-3xl underline text-sky-600'>
                    Projects
                </h1>
                <section className='
                    mt-[3vh] mb-[1.5vh] border-2 rounded-xl p-[10px]
                    flex lg:flex-row-reverse flex-col justify-around items-center
                '>
                    <img src={NXSS} alt="NeXess thumbnail" className='lg:w-[50%] w-[100%]'/>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='italic text-sm mb-0'>2025</p>
                        <h2 className='text-xl font-bold mt-1 mb-2'>NeXess</h2>
                        <p className='text-md font-bold'>
                            Project is not deployed.
                            <p className='mt-3 mb-3 flex lg:flex-row flex-col gap-2'>
                                <a 
                                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    href="https://github.com/kdVincler/NeXess-frontend"
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    Frontend repo.
                                </a>
                                <a 
                                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    href="https://github.com/kdVincler/NeXess_backend" 
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    Backend repo.
                                </a>
                            </p>
                            My Final Year Project for my BSc Comp. Sci. at QMUL. An android application for NFC-based access control. <br />
                            <br /><i> Using - Frontend: </i> Kotlin, Jetpack Compose UI, Ktor <br />
                            <i> Using - Backend: </i> Python, Miniconda, SQLite, Django
                        </p>
                    </div>
                </section>
                <section className='
                    mt-[3vh] mb-[1.5vh] border-2 rounded-xl p-[10px]
                    flex lg:flex-row-reverse flex-col justify-around items-center
                '>
                    <img src={H24} alt="Hobby24 thumbnail" className='lg:w-[50%] w-[100%]'/>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='italic text-sm mb-0'>2025</p>
                        <h2 className='text-xl font-bold mt-1 mb-2'>Hobby24</h2>
                        <p className='text-md font-bold'>
                            Project is not deployed.
                            <p className='mt-3 mb-3 flex lg:flex-row flex-col gap-2'>
                                <a 
                                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    href="https://github.com/kdVincler/webProg_CWGroup" 
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    GitHub repo.
                                </a>
                            </p>
                            A social media web application that recommends friends based on users' hobbies.  <br />
                            <br /><i> Using - Frontend: </i> Typescript, TailwindCss (& DaisyUI), Pinia, Vue Router with the Vue framework. <br />
                            <i> Using - Backend: </i> Python, Miniconda, SQLite, Django, Django REST API, Selinium E2E testing
                        </p>
                    </div>
                </section>
                <section className='
                    mt-[3vh] mb-[1.5vh] border-2 rounded-xl p-[10px]
                    flex lg:flex-row-reverse flex-col justify-around items-center
                '>
                    <img src={DLVT} alt="Professional website for Doroti Vincler thumbnail" className='lg:w-[50%] w-[100%]'/>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='italic text-sm mb-0'>2024</p>
                        <h2 className='text-xl font-bold mt-1 mb-2'>Professional website for Doroti Vincler</h2>
                        <p className='text-md font-bold'>
                            <p className='mt-3 mb-3 flex lg:flex-row flex-col gap-2'>
                                <a 
                                    className='btn btn-outline hover:btn-success text-lg'
                                    href="https://dorotivincler.com/"
                                    target='_blank'
                                >
                                    Deployed site
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                </a>
                                <a 
                                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    href="https://github.com/kdVincler/DLV_teaching.git"
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    GitHub repo.
                                </a>
                            </p>
                            A website as a place to advertise the flute playing and teaching of Doroti Vincler, 
                            with a contact form which automatically sends the information inputted to her email address, using the EmailJS library. <br />
                            <br /><i> Using: </i> JavaScript, CSS, JSX with the React framework.
                        </p>
                    </div>
                </section>
                 <section className='
                    mt-[3vh] mb-[1.5vh] border-2 rounded-xl p-[10px]
                    flex lg:flex-row-reverse flex-col justify-around items-center
                '>
                    <img src={FLXO} alt="FlipXO thumbnail" className='lg:w-[50%] w-[100%]'/>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='italic text-sm mb-0'>2024</p>
                        <h2 className='text-xl font-bold mt-1 mb-2'>FlipXO</h2>
                        <p className='text-md font-bold'>
                            <p className='mt-3 mb-3 flex lg:flex-row flex-col gap-2'>
                                <a 
                                    className='btn btn-outline hover:btn-success text-lg'
                                    href="https://snack.expo.dev/@kdvincler/flipxo---snack-version"
                                    target='_blank'
                                >
                                    Expo snack
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                </a>
                                <a 
                                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    href="https://github.com/kdVincler/FlipXO.git" 
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    GitHub repo.
                                </a>
                            </p>
                            My very first React Native project, a tic-tac-toe game on IOS/Android accommodating 2 players per device. <br />
                            <br /><i> Using: </i> JavaScript in the React Native framework using Expo
                        </p>
                    </div>
                </section>
                <section className='
                    mt-[3vh] mb-[1.5vh] border-2 rounded-xl p-[10px]
                    flex lg:flex-row-reverse flex-col justify-around items-center
                '>
                    <img src={FDME} alt="FDM Expenses App thumbnail" className='lg:w-[50%] w-[100%]'/>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='italic text-sm mb-0'>2024</p>
                        <h2 className='text-xl font-bold mt-1 mb-2'>FDM Expenses App</h2>
                        <p className='text-md font-bold'>
                            Project is not deployed.
                            <p className='mt-3 mb-3 flex lg:flex-row flex-col gap-2'>
                                <a 
                                    className='btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                                    href="https://github.com/kdVincler/fdm-expenses-app-client.git"
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    Frontend repo.
                                </a>
                                <a 
                                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    href="https://github.com/kdVincler/fdm-expenses-app-server.git" 
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    Backend repo.
                                </a>
                            </p>
                            An application to submit and approve business expense claims for FDM. <br />
                            <br /><i> Using - Client side: </i> JavaScript, HTML, CSS, JSX and the React framework <br />
                            <i> Using - Server side: </i> Python, Flask and PostgreSQL
                        </p>
                    </div>
                </section>
               <section className='
                    mt-[3vh] mb-[1.5vh] border-2 rounded-xl p-[10px]
                    flex lg:flex-row-reverse flex-col justify-around items-center
                '>
                    <img src={RWAT} alt="React Weather App thumbnail" className='lg:w-[50%] w-[100%]'/>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='italic text-sm mb-0'>2024</p>
                        <h2 className='text-xl font-bold mt-1 mb-2'>React Weather App</h2>
                        <p className='text-md font-bold'>
                            <p className='mt-3 mb-3 flex lg:flex-row flex-col gap-2'>
                                <a 
                                    className='btn btn-outline hover:btn-success text-lg'
                                    href='https://weather-gui.netlify.app' 
                                    target='_blank'
                                >
                                    Deployed site
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                </a>
                                <a 
                                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    href='https://github.com/kdVincler/weather-app' 
                                    target='_blank'
                                >
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    GitHub repo.
                                </a>
                            </p>
                            A weather app made in React for outdoor enthusiasts <br />
                            <br /><i> Using: </i> JavaScript, HTML, CSS, JSX and the React framework
                        </p>
                    </div>
                </section>
            </section>
        </div>
        )
}

{/* 
Template for a project card

<section className='
    mt-[3vh] mb-[1.5vh] border-2 rounded-xl p-[10px]
    flex lg:flex-row-reverse flex-col justify-around items-center
'>
    <img src={image} alt={name + " thumbnail"} className='lg:w-[50%] w-[100%]'/>
    <div className='lg:w-[50%] w-[100%]'>
        <p className='italic text-sm mb-0'>{time}</p>
        <h2 className='text-xl font-bold mt-1 mb-2'>{name}</h2>
        <p className='text-md font-bold'>
            <p className='mt-3 mb-3 flex lg:flex-row flex-col gap-2'>
                <a 
                    className='btn btn-outline hover:btn-success text-lg'
                    href={link}
                    target='_blank'
                >
                    Deployed site
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </a>
                <a 
                    className="btn bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    href={link} 
                    target='_blank'
                >
                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    GitHub repo.
                </a>
            </p>
            {What it is, What was used to make it}
        </p>
    </div>
</section>

*/}

export default Projects;