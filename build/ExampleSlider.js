var exampleSlider={init:function(){var n="#example-slide",e=new Slidetastic.Slider(0,n,n+" article");$(n).find(".control.next").on("click",function(){e.next(Ui.centerX)}),$(n).hammer().on("swiperight",function(){e.next(Ui.centerX)}),$(n).find(".control.last").on("click",function(){e.last(Ui.centerX)}),$(n).hammer().on("swipeleft",function(){e.last(Ui.centerX)})}};