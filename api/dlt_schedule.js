const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');

async function dltSchedule() {
    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL2,
    });
    const res = await apiContext.delete(`appointment-config/org/${reData.orgId}/doctors/${reData.docId}/schedules/${reData.scheduleId}`, {
        headers: {
            'Content-Type': 'application/json',
            'authId': reData.authId,
        },
    });
    return res;
}

module.exports = dltSchedule;