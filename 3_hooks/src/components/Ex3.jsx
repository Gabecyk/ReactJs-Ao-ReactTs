import { useState, useEffect } from 'react';

function Ex3() {
    
    const useOnlineStatus = () => {
        const [isOnline, setIsOnline] = useState(navigator.onLine)

        useEffect(() => {
            const handleOnline = () => setIsOnline(true);
            const handleOffline = () => setIsOnline(false);

            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);

            // Limpeza
            return () => {
                window.removeEventListener("online", handleOnline);
                window.removeEventListener("offline", handleOffline);
            };
        }, [])

        return isOnline
    };

    
    const isOnline = useOnlineStatus();


  return (
    <div>
        <h2>Ex3</h2>
        <p>Você está {isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}

export default Ex3

