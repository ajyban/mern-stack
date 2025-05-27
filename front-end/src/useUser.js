import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(getAuth(), function (user) {
            setUser(user);
            setIsLoading(false)

        }, function(err){
            console.log(err)
        });
        return unsub;
    }, []);
    return { isLoading, user }
};

export default useUser;
