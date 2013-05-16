'use strict';

var ReaderWriter = require('../../../src/common/PersistentReaderWriter');

/* Note: The test would use whichever implementation is given,
according to the environment the test is being run at (node/browser) */
describe("PersistentReaderWriter", function() {
    it("read() should read what was written with write()", function() {
        var key = "someKey";
        var randomValue = Math.random().toString();
        ReaderWriter.write(key, randomValue);
        expect(ReaderWriter.read(key)).toEqual(randomValue);
    });
});

