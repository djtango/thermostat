
function Thermostat (){
  // this.DEFAULTTEMP = 20;
  this.temperature = 20; //typeof temp !== 'undefined' ? temp : this.DEFAULTTEMP;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  return this.temperature -= 1;
};
