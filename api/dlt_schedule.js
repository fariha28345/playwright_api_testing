const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');

async function dltSchedule() {
    const apiContext = await request.newContext();
    const res = await apiContext.delete(`https://staging3.jotno.net/api/appointment-config/org/${reData.orgId}/doctors/${reData.docId}/schedules/${reData.scheduleId}`, {
        headers: {
            'Content-Type': 'application/json',
            'authId': reData.authId,
        },
    });
    return res;
}

module.exports = dltSchedule;