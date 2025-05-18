const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');
const { bookApptPayload } = require('../dto/book_appointment.js')

async function bookAppointment() {
    const payload = bookApptPayload();

    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL2,
    });
    const res = await apiContext.post(`appointments`, {
        headers: {
            'Content-Type': 'application/json',
            'authId': reData.authId,
        },
        data: payload,
    });
    const json = await res.json();
    reData.appointmentId = json.data.id;
    return res;  
}

module.exports = bookAppointment;