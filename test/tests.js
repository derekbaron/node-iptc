
var iptc = require('../lib/iptc.js')
var fs = require('fs')
var assert = require('assert')


describe('node-iptc extraction json', function() {
  return [1,2,3,4,6].map(function(i) {
    return it('should extract IPTC metadata from "test' + i + '.jpeg" and match the expected JSON', function(done) {
      fs.readFile("./test/test" + i + ".jpeg", function(err, data) {
        if (err) { throw err }
        var extracted = iptc(data);
        var expected = require('./test' + i + '.jpeg.json');

        assert.equal(JSON.stringify(extracted), JSON.stringify(expected));
        done();

      });
    })
  })
});

describe('node-iptc extraction custom', function(){

  it('should NOT extract IPTC metadata from the image because it has none', function(done){
    fs.readFile("./test/test_no_iptc.jpeg", function(err, data) {
      if (err) { throw err }
      var extracted = iptc(data);

      assert.equal(Object.keys(extracted).length, 0, 'There should be no data');
      done();
    });
  })

  it('should correctly handle IPTC fields of length 2', function(done){
    fs.readFile("./test/test5.jpeg", function(err, data) {
      if (err) { throw err }
      var extracted = iptc(data);
      assert.equal(extracted["country_or_primary_location_code"],"US");
      assert.equal(extracted["province_or_state"],"CT");
      done();
    });
  });


});
