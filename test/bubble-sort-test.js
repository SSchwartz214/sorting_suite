const assert = require('chai').assert;
const sortNumbers = require('../bubble-sort');

describe('sort functionality', function() {
    it('it can sort an array of numbers', function(){
        assert.deepEqual(sortNumbers([1,5,2,25,10]), [1,2,5,10,25]);
      });
    });
  