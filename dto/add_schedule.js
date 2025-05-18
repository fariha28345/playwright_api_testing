const dayjs = require('dayjs');

function schedulePayload() {
    return {
        day: dayjs().format('dddd').toUpperCase(),
        type: "CHAMBER",
        startTime: 1062,
        endTime: 1182,
    };
}

module.exports = { schedulePayload };