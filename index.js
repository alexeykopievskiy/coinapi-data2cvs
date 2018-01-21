const commandLineArgs = require('command-line-args');
const https = require('https');

const optionDefinitions = [
    { name: 'exchange', alias: 'e', type: String },
    { name: 'base', alias: 'b', type: String },
    { name: 'quote', alias: 'q', type: String },
    { name: 'period', alias: 'p', type: String },
    { name: 'start', alias: 's', type: String },
    { name: 'end', alias: 'e', type: String }
]

const option = commandLineArgs(optionDefinitions)
console.log(option)

var options = {
  "method": "GET",
  "hostname": "rest.coinapi.io",
  "path": "/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1MIN&time_start=2016-01-01T00:00:00",
  "headers": {'X-CoinAPI-Key': 'FBE2F58F-857B-4D14-B63D-B61FF0FDC6E5'}
};

/*var request = https.request(options, function (response) {
  var chunks = '';
  //console.log(response)
  response.on("data", function (chunk) {
    chunks += chunk;
    //console.log(chunks)
  });

  response.on('end',function(){
    var obj = JSON.parse(chunks);
    console.log( obj );  
})
});

request.end();*/