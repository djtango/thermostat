
function Thermostat (){
  // this.DEFAULTTEMP = 20;
  this.temperature = 20;
  this.minimumTemp = 10;
  this.maximumTemp = 25;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemp()){
    return;
  }
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temperature === this.minimumTemp;
};

Thermostat.prototype.powerSaving = function(mode) {
  if (mode === false) {
    this.maximumTemp = 32;
  }
};

Thermostat.prototype.isMaximumTemp = function() {
  return this.temperature === this.maximumTemp;
};
