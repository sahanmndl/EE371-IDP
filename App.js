import StreamView from "./src/views/StreamView";
import {useEffect, useState} from "react";
import SplashView from "./src/views/SplashView";

export default function App() {

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {showSplash && <SplashView />}
            {!showSplash && <StreamView />}
        </>
    );
}
