import BookingSummary from './BookingSummary';
import RevenueStats from './RevenueStats';

import React from 'react'

function Dashboard() {
    return (
        <h2>
            <BookingSummary />
            <RevenueStats />
        </h2>
    )
}

export default Dashboard

