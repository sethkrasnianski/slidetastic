var exampleSlider = {
  init: function() {
    ///// ** Example ** /////
    var exampleContainer = "#example-slide"
    var example = new Slidetastic.Slider(0, exampleContainer, exampleContainer + " article");

    // Example Handler - Next slide
    $(exampleContainer).find('.control.next').on('click', function() {
      example.next(Ui.centerX);
    });
    // Example Handler - Swipe - Next slide
    // For jQuery, use Hammer.js
    $(exampleContainer).hammer().on('swiperight', function() {
      example.next(Ui.centerX);
    });
    // For zepto.js
    // $(exampleContainer).swiperight(function() {
    //   example.next(Ui.centerX);
    // });

    // Example Handler - Last slide
    $(exampleContainer).find('.control.last').on('click', function() {
      example.last(Ui.centerX);
    });
    // Example Handler - Swipe - Last slide
    $(exampleContainer).hammer().on('swipeleft', function() {
      example.last(Ui.centerX);
    });
  }
};