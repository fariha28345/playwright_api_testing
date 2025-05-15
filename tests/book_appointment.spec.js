const { test, expect } = require('@playwright/test')
const loginApi = require('../api/login.js')
const addScheduleApi = require('../api/add_schedule.js')
const dltScheduleApi = require('../api/dlt_schedule.js')

test.describe('Book Appointment Flow', () => {
    test.describe.configure({ mode: 'serial' });

    test('Login as a Medical Doctor', async () => {
        const res = await loginApi();
        expect(res.status()).toBe(200);
    });

    test('Add Schedule', async () => {
        const res = await addScheduleApi();
        expect(res.status()).toBe(200);
    });

    test('Delete Schedule', async () => {
        const res = await dltScheduleApi();
        expect(res.status()).toBe(200);
    });
});