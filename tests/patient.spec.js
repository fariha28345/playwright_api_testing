const { test, expect } = require('@playwright/test')
const loginApi = require('../api/login.js')
const ptListApi = require('../api/patient_list.js')
const ptCreateAPi = require('../api/patient_create.js')

test.describe.serial('Patient Flow', () => {
    test.beforeAll('Login as a Medical Doctor', async () => {
        const res = await loginApi();
        expect(res.status()).toBe(200);
    });

    test('Patient List', async () => {
        const res = await ptListApi();
        expect(res.status()).toBe(200);
    });

    test('Patient Create', async () => {
        const res = await ptCreateAPi();
        expect(res.status()).toBe(200);
    })
});