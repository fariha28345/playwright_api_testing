const dayjs = require('dayjs');

function schedulePayload() {
    const dayOfWeek = dayjs().format('dddd').toUpperCase();
    
    return {
        day: dayOfWeek,
        type: "CHAMBER",
        startTime: 1062,
        endTime: 1182
    };

}

module.exports = { schedulePayload };