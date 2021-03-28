import "../styles/globals.css";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
                <div className="col-span-12 p-4 text-center bg-white-toggle-black lg:col-span-3 rounded-2xl shadow-light-toggle-dark">
                    <SideBar />
                </div>
                <div className="flex flex-col col-span-12 overflow-hidden bg-white-toggle-black lg:col-span-9 rounded-2xl shadow-light-toggle-dark">
                    <Navbar />
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
