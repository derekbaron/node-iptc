
var iptc = require('../lib/iptc.js')
var fs = require('fs')
var assert = require('assert')

describe('node-iptc extraction', function(){
  it('should extract IPTC metadata from the image', function(done){
    fs.readFile("./test/test2.jpeg", function(err, data) {
      if (err) { throw err }
      var extracted = iptc(data);
      var expected = require('./test2.jpeg.json');

      assert.equal(JSON.stringify(extracted), JSON.stringify(expected));
      done();

    });
  });

  it('should extract IPTC metadata from the image', function(done){
    fs.readFile("./test/test3.jpeg", function(err, data) {
      if (err) { throw err }
      var extracted = iptc(data);
      var expected = require('./test3.jpeg.json');

      assert.equal(JSON.stringify(extracted), JSON.stringify(expected));
      done();

    });
  });

  it('should extract IPTC metadata from the image', function(done){
    fs.readFile("./test/test1.jpeg", function(err, data) {
      if (err) { throw err }
      var extracted = iptc(data);
      var expected = require('./test1.jpeg.json');

      assert.equal(JSON.stringify(extracted), JSON.stringify(expected));
      done();

    });
  });

  it('should NOT extract IPTC metadata from the image because it has none', function(done){
    fs.readFile("./test/test_no_iptc.jpeg", function(err, data) {
      if (err) { throw err }
      var extracted = iptc(data);

      assert.equal(Object.keys(extracted).length, 0, 'There should be no data');
      done();
    });
  })

});


