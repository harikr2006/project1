// JavaScript Document

jQuery(document).ready(function($) {

  $('#banner-fade').bjqs({
    height      : 343,
    width       : 940,
    responsive  : true
  });

});

jQuery(document).ready(function($) {
          
          $('#banner-slide').bjqs({
            animtype      : 'slide',
            height        : 225,
            width         : 933,
            responsive    : true,
            randomstart   : true
          });
          
        });
		
/* customized sidebar scroller */
jQuery(document).ready(
	function(){
			jQuery(window).scroll(
				function(){
						if((jQuery(document).scrollTop()>=310)){
							//jQuery('.innerContentRight').animate({top:"10px"});
							//alert(jQuery('body').height());
							var docHeight=jQuery(document).height()-584;
							var scrTop=jQuery(document).scrollTop();
							console.log("Document Height"+docHeight);
							console.log("scroll value"+scrTop);							
							if(scrTop<(docHeight-180))
							{
							var xb=(jQuery(document).scrollTop()-210)+"px";
							}
							else{
								var xb=(jQuery(document).scrollTop()-400)+"px";
							}
							
							//var x="10";
							//jQuery('.innerContentRight').css({"top":x});
							jQuery('.rightContainer').animate({
									top:xb
								}
								, {
									duration:800,
									easing:'linear'
									,queue:false
								})
							
						}
						else{
							var ab=0;
							//jQuery('.innerContentRight').css({"top":a});
							jQuery('.rightContainer').animate({
									top:ab
								}
								, {
									duration:800,
									easing:'linear'
									,queue:false
								})
						}
						
				}
			);
	}
);

/*customized sidebar scroller*/		