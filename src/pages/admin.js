import React from 'react';
import { Redirect } from 'react-router-dom';

const AdminDashboard = () => {
    // Simulating authentication status 
    const isAuthenticated = false; // Change this based on your authentication logic

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard!</p>
        </div>
    );
};

export default AdminDashboard;