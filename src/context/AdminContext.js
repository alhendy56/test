import React, { createContext, useContext, useEffect, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate fetching user data from an API
        const fetchUser = async () => {
            try {
                // Placeholder for actual authentication logic
                // This should be replaced with real authentication API call
                const fetchedUser = await fakeAuthApiCall();
                setUser(fetchedUser);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const fakeAuthApiCall = () => {
        // Simulating a user object returned from an authentication API
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    username: 'admin',
                    role: 'admin',
                });
            }, 1000);
        });
    };

    const isAuthenticated = () => !!user;
    const isAdmin = () => user?.role === 'admin';

    return (
        <AdminContext.Provider value={{ user, loading, error, isAuthenticated, isAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    return useContext(AdminContext);
};

export default AdminContext;
