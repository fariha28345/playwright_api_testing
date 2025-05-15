const { request } = require('@playwright/test');
const reData = require('../utils/reusable_data.js');
const loginData = require('../test_data/login_cred.json')

async function login() {
    const apiContext = await request.newContext();
    const res = await apiContext.post('https://staging3.jotno.net/auth/login', {
        headers: {
        'Content-Type': 'application/json',
        },
        data: loginData,
    });
    const header = await res.headers();
    reData.authId = header.authid;
    //process.env.AUTH_ID = header.authid;
    return res;
}

module.exports = login;