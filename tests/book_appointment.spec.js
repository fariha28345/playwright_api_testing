const { test, expect } = require('@playwright/test')
const loginApi = require('../api/login.js')
const addScheduleApi = require('../api/add_schedule.js')
const bookApptApi = require('../api/book_appointment.js')
const confirmApptApi = require('../api/confirm_appointment.js')
const completeApptApi = require('../api/complete_appointment.js')
const dltScheduleApi = require('../api/dlt_schedule.js')

test.describe.serial('Book Appointment Flow', () => {
    test.beforeAll('Login as a Medical Doctor', async () => {
        const res = await loginApi();
        expect(res.status()).toBe(200);
    });

    test('Add Schedule', async () => {
        const res = await addScheduleApi();
        expect(res.status()).toBe(200);
    });

    test('Book Appointment', async () => {
        const res = await bookApptApi();
        expect(res.status()).toBe(200);
    });

    test('Confirm Apoointment', async () => {
        const res = await confirmApptApi();
        expect(res.status()).toBe(200);
    });

    test('Complete Apoointment', async () => {
        const res = await completeApptApi();
        expect(res.status()).toBe(200);
    });

    test('Delete Schedule', async () => {
        const res = await dltScheduleApi();
        expect(res.status()).toBe(200);
    });
});