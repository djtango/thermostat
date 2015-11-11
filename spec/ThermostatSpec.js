// 'use strict';

describe ('Thermostat',function(){
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it ('has a default temperature of 20 c',function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Can be increased by 1 degree', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('Can be decreased by 1 degree', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it ('has a minimum temp of 10 C',function(){
    for (var i=0; i<11; i++){
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

});
