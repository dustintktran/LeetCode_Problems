
var DinnerPlates = function (capacity) {
  this.storage = [];
  this.max = capacity;
  this.broken = false;
};

DinnerPlates.prototype.push = function (val) {
  //=================================================== An attempt to increase insertion time 
  if (!this.broken && this.storage.length > 1) {
    let end = this.storage.length-1;
    if (this.storage[end].length < this.max) {
      this.storage[end].push(val);
    } else {
      this.storage.push([val]);
    }
    return;
  }
  //===================================================
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].length < this.max) {
      this.storage[i].push(val);
      return;
    }
  }
  this.broken = false;
  this.storage.push([val]);
  return;
};

DinnerPlates.prototype.pop = function () {
  //=================================================== Attempt to decrease popping speed
  if(!this.broken && this.storage.length > 1) {
    let end = this.storage.length-1;
    if (this.storage[end].length === 1) {
      let popped = this.storage[end].pop();
      this.storage.pop();
      return popped;
    } else {
      return this.storage[end].pop();
    }
  }
  //===================================================
  for (var i = this.storage.length-1; i >= 0; i--) {
    if (this.storage[i].length > 0) {
      if (this.storage[i].length === 1) {
        let popped = this.storage[i].pop();
        this.storage.pop();
        return popped;
      } else {
        return this.storage[i].pop();
      }
    }
  }
  return -1;
};

DinnerPlates.prototype.popAtStack = function (index) {
  if (!this.storage[index]) {
    return -1;
  }
  if (this.storage[index].length > 0) {
    if(this.storage.length-1 !== index) {
      this.broken = true;
    }
    if (this.storage[index].length === 1  && index === this.storage.length-1) {
      let popped = this.storage[index].pop();
      this.storage.pop();
      return popped;
    } else {
      return this.storage[index].pop();
    }
  } else {
    return -1;
  }
};

