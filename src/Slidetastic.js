var Slidetastic = (function () {
  'use strict';

  var Slider = function(i, el, slideEl) {
    // Slide index
    this.i        = i;
    // Slide wrapper
    this.el       = el;
    // Slide individual slide
    this.slideEl  = slideEl;
  };

  Slider.prototype = {
    // jQuery/Zepto Wrapped - Slider wrap
    $el: function() {
      return $(this.el);
    },
    // jQuery/Zepto Wrapped - Slide individual slide
    $slideEl: function() {
      return $(this.slideEl);
    },
    // Next Slide function
    // @cb - Callback
    next: function(cb) {
      if (this.i === this.total() - 1) {
        this.i = 0;
      } else {
        this.i++;
      };

      this.goTo(this.i);

      // Something you want to do after the next function fires?
      if (cb !== undefined) {
        cb();
      };
    },
    // Last Slide function
    // @cb - Callback
    last: function(cb) {
      if (this.i === 0) {
        this.i = this.total() - 1;
      } else {
        this.i--;
      };

      this.goTo(this.i);

      // Something you want to do after the next function fires?
      if (cb !== undefined) {
        cb();
      };
    },
    // Go To slide
    goTo: function() {
      this.$slideEl().hide();
      this.$slideEl().eq(this.i).fadeIn();
    },
    // Total slides
    total: function() {
      return this.$slideEl().length;
    }
  };

  return {
    Slider: Slider
  }

})();