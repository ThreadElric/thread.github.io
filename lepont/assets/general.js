(function ($) {

	"use strict";


	function adjustStickyFooter() {
		var footerHeight = $('.footer-wrapper').outerHeight();
		$('body').css('margin-bottom', footerHeight + 'px');
		$('#footer').css('height', footerHeight + 'px');
	}


	function adjustHtmlMinHeight() {
		if($('body').hasClass('admin-bar')) {
			$('html').css('min-height', $(window).height() - $('#wpadminbar').height() + 'px');
		}
	}


	function adjustSearchPopupOffset() {
		if($('body').hasClass('admin-bar')) {
			$('.search-popup').css('top', $('#wpadminbar').height() + 'px');
		}
	}


	// preferring a js solution to using the widget_title filter because of a known JetPack + widget_title bug
	function wrapWidgetTitlesWithSpans() { $('#bottom-widgets .widget>h4').wrapInner( "<span></span>"); }


	function commentFormHighlightNextBorder() {

		$('.comment-respond p.comment-form-author input')
			.mouseenter(function() {
				var urlInput = $(this).closest('p.comment-form-author').next('p.comment-form-email').find('input');
				if (!urlInput.hasClass('mouse-in-the-preceding-input')) {urlInput.addClass(('mouse-in-the-preceding-input'));}
			})
			.mouseleave(function() {
				var urlInput = $(this).closest('p.comment-form-author').next('p.comment-form-email').find('input');
				if (urlInput.hasClass('mouse-in-the-preceding-input')) {urlInput.removeClass(('mouse-in-the-preceding-input'));}
			})
			.focus(function() {
				var urlInput = $(this).closest('p.comment-form-author').next('p.comment-form-email').find('input');
				if (!urlInput.hasClass('focus-on-the-preceding-input')) {urlInput.addClass(('focus-on-the-preceding-input'));}
			})
			.focusout(function() {
				var urlInput = $(this).closest('p.comment-form-author').next('p.comment-form-email').find('input');
				if (urlInput.hasClass('focus-on-the-preceding-input')) {urlInput.removeClass(('focus-on-the-preceding-input'));}
			});

		$('.comment-respond p.comment-form-email input')
			.mouseenter(function() {
				var urlInput = $(this).closest('p.comment-form-email').next('p.comment-form-url').find('input');
				if (!urlInput.hasClass('mouse-in-the-preceding-input')) {urlInput.addClass(('mouse-in-the-preceding-input'));}
			})
			.mouseleave(function() {
				var urlInput = $(this).closest('p.comment-form-email').next('p.comment-form-url').find('input');
				if (urlInput.hasClass('mouse-in-the-preceding-input')) {urlInput.removeClass(('mouse-in-the-preceding-input'));}
			})
			.focus(function() {
				var urlInput = $(this).closest('p.comment-form-email').next('p.comment-form-url').find('input');
				if (!urlInput.hasClass('focus-on-the-preceding-input')) {urlInput.addClass(('focus-on-the-preceding-input'));}
			})
			.focusout(function() {
				var urlInput = $(this).closest('p.comment-form-email').next('p.comment-form-url').find('input');
				if (urlInput.hasClass('focus-on-the-preceding-input')) {urlInput.removeClass(('focus-on-the-preceding-input'));}
			});

	}


	$(document).ready(function() {

		adjustHtmlMinHeight();
		adjustSearchPopupOffset();
		adjustStickyFooter();
		wrapWidgetTitlesWithSpans();
		commentFormHighlightNextBorder();

		$(".search-popup-opener").click(function(e){
			e.preventDefault();
			$(".search-popup").addClass('shown');
			setTimeout(function(){
				$(".search-popup #s").focus();
			}, 200); // needs to be greater than the animation duration
		});

		$(".search-popup-closer").click(function(e){
			e.preventDefault();
			$(".search-popup").removeClass('shown');
		});

		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				$(".search-popup").removeClass('shown');
			}
		});

	});


	$(window).resize(function(){
		adjustHtmlMinHeight();
		adjustSearchPopupOffset();
		adjustStickyFooter();
	});

	$(window).load(function(){
		$(".mauer-preloader").addClass("mauer-preloader-hidden");
	});


})(jQuery);
