const dayjs = require('dayjs');
const reData = require('../utils/reusable_data.js')

function bookApptPayload() {
    return {
        type: "NEW",
        dateOfBirth: "13/03/2000",
        doctor: {
            id: reData.docId,
        },
        followUpId: null,
        gender: "Female",
        name: "Fariha Test",
        patientProfileId: "P-2JNBPLBG8",
        phoneNumber: "01883766247",
        orgComments: null,
        serial: 1,
        date: dayjs().format('DD/MM/YYYY'),
        time: "05:42 PM",
        appointmentDateInt: parseInt(dayjs().format('YYYYMMDD')),
        scheduleId: reData.scheduleId,
        status: "Pending",
        orgId: reData.orgId,
        bloodGroup: null,
    };
}

module.exports = { bookApptPayload }; 