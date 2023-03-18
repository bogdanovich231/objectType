function createUser(firstName, lastName) {
    var user = new Object();
    user.firstName = firstName;
    user.lastName = lastName;
    return user;
}

function getFullName(user) {
    var user = new Object();
    user.firstName = firstName;
    user.lastName = lastName;
    return user.firstName + " " +  user.lastName;
}

function getWidth(params) {
    if (params && params.styling) {
      let sizes = params.styling.sizes;
      if (sizes && sizes.width) {
        return sizes.width;
      }
    }
    return null;
  }

  function extendObject(obj, isValid) {
    let clonedObj = Object.assign({}, obj);
    clonedObj.isValid = isValid;
    return clonedObj;
  }

  function sumPrices(prices) {
    let sum = 0;
    for (let prop in prices) {
      if (typeof prices[prop] === 'number' && isFinite(prices[prop])) {
        sum += prices[prop];
      }
    }
    return sum;
  }

  function createUserWithFullName(firstName, lastName) {
    let user = createUser();
    
    user.firstName = firstName;
    user.lastName = lastName;
    
    user.setFirstName = function(newFirstName) {
      this.firstName = newFirstName;
    };
    
    user.setLastName = function(newLastName) {
      this.lastName = newLastName;
    };
    
    user.getFullName = function() {
      return `${this.firstName} ${this.lastName}`;
    };
    
    return user;
  }
