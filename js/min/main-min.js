!function($){function n(){if(console.log("on desktop"),!Modernizr.touch)var n=skrollr.init({forceHeight:!1})}function o(){console.log("on mobile");var n=skrollr.init();n.destroy()}enquire.register("screen and (min-width: 768px)",{match:function(){n()},unmatch:function(){o()}})}(jQuery);