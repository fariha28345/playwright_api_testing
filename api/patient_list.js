const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');
const ptListData = require('../test_data/patient_list.json')

async function ptList() {
    const apiContext = await request.newContext({
        baseURL: process.env.BASE_URL2,
    });
    const res = await apiContext.post(`doctor/orgs/${reData.orgId}/patients/list`, {
        headers: {
            'Content-Type': 'application/json',
            'authId': reData.authId,
        },
        data: ptListData,
    });
    return res;
}

module.exports = ptList;