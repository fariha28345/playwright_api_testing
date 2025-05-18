const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');
const ptCreateData = require('../test_data/patient_create.json')

async function ptCreate() {
    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL2,
    });
    const res = await apiContext.post(`doctor/orgs/${reData.orgId}/patients`, {
        headers: {
            'Content-Type': 'application/json',
            'authId': reData.authId,
        },
        data: ptCreateData,
    });
    return res;
}

module.exports = ptCreate;