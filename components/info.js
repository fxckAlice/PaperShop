const req = require("express/lib/request");
const ua = require("./UA");
info = {
    //TODO ip: req.ip,
    cookies: req.cookies,
    browser: ua.browser.name,
    operationSystem: ua.os.name
}
module.exports = info;