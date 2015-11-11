// 'use strict';

describe ('Thermostat',function(){
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it ('has a default temperature of 20 c',function(){
    expect(thermostat.temp).toEqual(20);
  });

});
