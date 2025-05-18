const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');

async function completeAppointment() {
    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL2,
    });
    const res = await apiContext.post(`appointments/${reData.appointmentId}/Complete`, {
        headers: {
            'Content-Type': 'application/json',
            'authId': reData.authId,
        },
    });
    return res;  
}

module.exports = completeAppointment;