
  angular.module('angularfireSlackApp')
    .service('lead', function(){
      this.reset = function() {
  			this.klausimas1 = null;
  			this.klausimas2 = null;
  			this.klausimas3 = null;
  		}

  		this.update = function(attr, value) {
  			this[attr] = value;
  			return this;
  		}

  		this.get = function() {
  			return this;
  		}

  		this.reset();
    });
