function Thermostat (){
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.minimumTemp = 10;
  this.maximumTemp = 25;
  this.MEDIUM_ENERGY_LOW = 18;
  this.MEDIUM_ENERGY_HIGH = 25;
  this.MAX_TEMPERATURE = 32;
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
    this.maximumTemp = this.MAX_TEMPERATURE;
  }
};

Thermostat.prototype.isMaximumTemp = function() {
  return this.temperature === this.maximumTemp;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.tempUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_LOW ) {
    return "low usage";
  }
  if (this.temperature > this.MEDIUM_ENERGY_HIGH ) {
    return "high usage";
  }
  return "medium usage";
};
