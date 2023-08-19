import { useEffect } from 'react'

const useOverFlowHidden = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.style.overflowY = 'hidden';
        return () => {
        document.documentElement.style.overflowY = 'auto';
        };
    }, [])
}

export default useOverFlowHidden;