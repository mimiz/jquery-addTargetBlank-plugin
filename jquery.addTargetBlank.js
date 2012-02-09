/**
 * this plugin allows you to add target="_blank" to external links
 * usage : 
 * 
 * $('a').addTargetBlank();
 * 
 * @version 1.0.0
 * @author Rémi Goyard
 * 
 */
(function($) {
	$.fn.addTargetBlank = function() {
		var myHostname = window.location.hostname;
		this.each(function() {
			if ($(this).is('a')) {
				var link = $(this).attr('href');
				var regExtract = new RegExp(
						'^(http|ftp|https)://([a-zA-Z0-9-\._]*)', 'gi');
				var rep = regExtract.exec(link);
				if (rep !== null && rep[2] !== myHostname) {
					$(this).attr('target', "_blank");
				}
			}
		});
	};
})(jQuery);
