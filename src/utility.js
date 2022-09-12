import { useState, useEffect, useMemo } from "react";
import useWindowDimensions from "./UseWindowDimenstions";

const useDevice = () => {

    const [device, setDevice] = useState('desktop')

    const {width}  = useWindowDimensions()

    useEffect(() => {
        if(width < 768){
            setDevice('mobile')
        }
        if(width >= 768 && width < 1024){
            setDevice('tablet')
        }
        if(width >= 1024){
            setDevice('desktop')
        }
    }, [width])

    const isTablet = useMemo(() => device === 'tablet', [device])
    const isMobile = useMemo(() => device === 'mobile', [device])
    const isDesktop = useMemo(() => device === 'desktop', [device])

    return {isTablet, isMobile, isDesktop};
 }

 export default useDevice