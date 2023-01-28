const express = require('express');
const unirest = require('unirest');
const cors = require('cors');
var xml2js = require("xml2js");
const bodyparser = require("body-parser");
const parser = new xml2js.Parser({ attrkey: "ATTR" });

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


const app = express();
const port = 3000;
app.use(bodyparser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-with,Content-Type,Accept");

    next();
});
app.listen(port, () => {
    console.log("running at 3000");
})
app.post('/auth', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);

    var req = unirest('GET', 'https://DXBKTECCEHP8.kaarcloud.com:44300/sap/bc/srt/rfc/sap/zws_login_rr/100/zws_login_rr/zws_login_rr')
        .header({
            'Authorization': 'Basic YWJhcGVyOmFiYXBAMTIzNDU=',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFM_LOGINID_RR><LOGIN_ID>' + USERID + '</LOGIN_ID><PASSWORD>'+ PASSWORD +'</PASSWORD></urn:ZFM_LOGINID_RR></soap:Body></soap:Envelope>')
        .end(function (result) {
            if (result.error) {
                console.log(result.error);
            }
            else {
                USERID = result.body;
                var result;
                var parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(USERID, function (err, result) {
                    if (err) {
                        console.error('xml2js.parseString: Error occurred: ', err);
                    } 
                        result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_LOGINID_RRResponse"]["RESULT"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.json(this.result1);
        })
})