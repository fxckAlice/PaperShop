const UAParser = require('ua-parser-js');
const req = require("express/lib/request");

const userAgent = req.headers['user-agent'];
const parser = new UAParser();
const ua = parser.setUA(userAgent).getResult();

module.exports = ua