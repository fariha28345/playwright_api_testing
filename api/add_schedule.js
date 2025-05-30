const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');
const { schedulePayload } = require('../dto/add_schedule.js')

async function addSchedule() {
    const payload = schedulePayload();

    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL2,
    });
    const res = await apiContext.post(`appointment-config/org/${reData.orgId}/doctors/${reData.docId}/schedules`, {
        headers: {
            'Content-Type': 'application/json',
            'authId': reData.authId,
        },
        data: payload,
    });
    const json = await res.json();
    reData.scheduleId = json.data.id;
    //process.env.SCHEDULE_ID = json.data.id;
    return res;
}

module.exports = addSchedule;