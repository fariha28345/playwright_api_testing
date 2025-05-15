const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');
const { schedulePayload } = require('../data_provider/add_schedule.js')
const addScheduleData = require('../test_data/add_schedule.json')

async function addSchedule() {
    const payload = schedulePayload();
    console.log(process.env.AUTH_ID);

    const apiContext = await request.newContext();

    const res = await apiContext.post(`https://staging3.jotno.net/api/appointment-config/org/${reData.orgId}/doctors/${reData.docId}/schedules`, {
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