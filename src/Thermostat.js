
function Thermostat (){
  // this.DEFAULTTEMP = 20;
  this.temperature = 20;
  this.minimumTemp = 10; //typeof temp !== 'undefined' ? temp : this.DEFAULTTEMP;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemp = function(){
  return this.temperature === this.minimumTemp;
};
