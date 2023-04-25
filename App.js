import StreamView from "./src/views/StreamView";
import {useEffect, useState} from "react";
import SplashView from "./src/views/SplashView";
import {StatusBar} from "react-native";

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
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            {showSplash && <SplashView />}
            {!showSplash && <StreamView />}
        </>
    );
}
