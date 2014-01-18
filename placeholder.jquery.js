/**
 *
 *jQuery Placeholder plugin
 *replace default value on inputs
 *
 *@author: Wojciech Medyński
 *@email: wojciech@medynski.info
 *
 */
 
 /**
  *
  * //////////////////////////////////////////
  *
  * Example use:
  * 
  * 1. Add input <input type="text" name="example-name" value="example-value" placeholder="This text will be replace..."  />
  * 2. Include to body or head section: <script src="js/placeholder.js"></script>
  *
  * //////////////////////////////////////////
  *
  */
 

/**
 *
 *$element.placeholder() 
 *
 *
 *Optional params:
 *@param: active - hex color -> default: #000000;
 *@param: inactive - hex color -> dafault: #cdcdcd;
 *
 */
 
$(function ( $ ) {
	$.fn.placeholder = function(active, inactive) {
	
		/**
		 *
		 *input instance
		 *
		 */
		_input = this;
		 
		/**
		 *
		 *dafault color schema
		 *
		 */
		var active = active || '#000000';
		var inactive = inactive || '#cdcdcd';
		
		/**
		 *
		 *keep default vars in array
		 *
		 */
		default_vars = new Array();
		
		_input.css({'color' : inactive });
		
		_input.focus(function() {
		$(this).css({'color' : active });
			if($(this).attr('name') in default_vars)
			{
				if(default_vars[$(this).attr('name')] == $(this).attr('placeholder')) $(this).attr('placeholder', '');
			}
			else 
			{
				default_vars[$(this).attr('name')] = $(this).attr('placeholder');
				$(this).attr('placeholder', '');
			}
		}).blur(function() {
			if($(this).attr('placeholder') == '') 
			{
				$(this).attr('placeholder', default_vars[$(this).attr('name')]);
				$(this).css({'color' : inactive });
			}
		});

	}

	/**
	 *
	 *add placeholder to inputs
	 *
	 */
	$('*[placeholder]').placeholder('#505050','#a0a0a0');
	
});