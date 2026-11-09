/**
	Template Name 	 : ClinicMaster
	Author			 : DexignZone
	File Name	     : custom.js
	Author Portfolio : https://themeforest.net/user/dexignzone
	
	Core script to handle the entire theme and core functions
**/

const ClinicMaster = function () {
	'use strict';

	let screenWidth = $(window).width();

	// Handle W3Menu ============
	const handleW3Menu = () => {
		const menuToggler = document.querySelector('.w3menu-toggler');
		if (!menuToggler) return;

		const body = document.body;
		const menuClose = document.querySelector('.menu-close');

		const targetSelector = menuToggler.getAttribute('data-target');
		const menuElement = document.querySelector(targetSelector);

		if (!menuElement) return;

		const openMenu = () => {
			menuToggler.classList.add('open');
			body.classList.add('fixed');
			menuElement.classList.add('show');
		};

		const closeMenu = () => {
			menuToggler.classList.remove('open');
			body.classList.remove('fixed');
			menuElement.classList.remove('show');
		};

		menuToggler.addEventListener('click', openMenu);

		if (menuClose) {
			menuClose.addEventListener('click', closeMenu);
		}
	};

	// Handle Pricing Tabs ============
	const handlePricingTabs = () => {
		const toggleTabs = document.querySelector('.toggle-tabs');
		if (!toggleTabs) return;

		const priceYearItems = document.querySelectorAll('.pricingtable-price.year');
		const priceMonthItems = document.querySelectorAll('.pricingtable-price.month');

		priceYearItems.forEach(item => item.style.display = 'none');

		const monthlyBtn = toggleTabs.querySelector('.monthly');
		const yearlyBtn = toggleTabs.querySelector('.yearly');

		if (!monthlyBtn || !yearlyBtn) return;

		const switchPricing = (isYearly) => {
			if (isYearly) {
				toggleTabs.classList.add('yearly');
				toggleTabs.classList.remove('monthly');

				priceMonthItems.forEach(item => item.style.display = 'none');
				priceYearItems.forEach(item => item.style.display = 'block');
			} else {
				toggleTabs.classList.add('monthly');
				toggleTabs.classList.remove('yearly');

				priceMonthItems.forEach(item => item.style.display = 'block');
				priceYearItems.forEach(item => item.style.display = 'none');
			}
		};

		monthlyBtn.addEventListener('click', () => switchPricing(false));
		yearlyBtn.addEventListener('click', () => switchPricing(true));
	};

	// DZ Flex Wrapper ============
	const handleFlexWrapper = () => {
		const flexItems = document.querySelectorAll('.dz-flex-wrapper .dz-flex-item');
		if (!flexItems || flexItems.length === 0) return;

		const handleClick = (clickedItem) => {
			flexItems.forEach(item => item.classList.remove('active'));
			clickedItem.classList.add('active');
		};

		flexItems.forEach(item => {
			item.addEventListener('click', () => handleClick(item));
		});
	};

	// Date Time Picker ============
	const handleTempusDominus = () => {

		if (!window.tempusDominus) return;

		const initPicker = (selector, config) => {
			const element = document.getElementById(selector);
			if (!element) return;

			try {
				new tempusDominus.TempusDominus(element, config);
			} catch (error) {
				console.error(`Failed to initialize Tempus Dominus for #${selector}`, error);
			}
		};

		initPicker("datePickerOnly", {
			display: {
				viewMode: "calendar",
				components: {
					decades: true,
					year: true,
					month: true,
					date: true,
					hours: false,
					minutes: false,
					seconds: false
				}
			},
			localization: {
				locale: "en",
				format: "dd/MM/yyyy"
			}
		});

		initPicker("timePickerOnly", {
			display: {
				viewMode: "clock",
				components: {
					decades: false,
					year: false,
					month: false,
					date: false,
					hours: true,
					minutes: true,
					seconds: false
				}
			},
			localization: {
				locale: "en",
				format: "HH:mm"
			}
		});

		initPicker("dateTimePickerOnly", {
			display: {
				viewMode: "calendar",
				components: {
					decades: true,
					year: true,
					month: true,
					date: true,
					hours: true,
					minutes: true,
					seconds: false
				}
			},
			localization: {
				locale: "en",
				format: "dd/MM/yyyy HH:mm"
			}
		});
	};

	// Current Year ============
	const setCurrentYear = function () {
		const currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		let elements = document.getElementsByClassName('current-year');

		for (const element of elements) {
			element.innerHTML = currentYear;
		}
	}

	// handle input type number ============
	const handledzNumber = function () {
	const dzNumber = document.querySelectorAll('.dz-number');

	if (dzNumber.length) {
		dzNumber.forEach(function (element) {
			element.addEventListener('input', function () {
				const inputVal = element.value;
				const numericVal = inputVal.replace(/\D/g, '');

				element.value = numericVal.slice(0, 10);
			});
		});
	}
};

	// handle light Gallery ============
	const handleLightGallery = function () {

		const lightGallery1 = document.getElementById('lightgallery')

		if (lightGallery1) {
			lightGallery(lightGallery1, {
				plugins: [lgThumbnail, lgZoom],
				selector: '.lg-item',
				thumbnail: true,
				exThumbImage: 'data-src'
			});
		}
	}

	// handle Box Hover ============
	const handleBoxHover = function () {
		const boxHover = document.querySelectorAll('.box-hover');
		if (boxHover) {
			boxHover.forEach(function (element) {
				element.addEventListener('mouseenter', function () {
					const selector = element.parentElement.parentElement;

					selector.querySelectorAll('.box-hover').forEach(function (element) {
						element.classList.remove('active');
					});
					element.classList.add('active');
				});
			});
		}
	}

	// handle Text Char ============
	const handleTextChar = () => {
		const rotateElements = document.querySelectorAll('.word-rotate');
		if (!rotateElements || rotateElements.length === 0) return;

		rotateElements.forEach((element) => {
			const textChars = element.textContent.split('');
			const angleStep = 360 / textChars.length;

			const rotateBox = element.closest('.word-rotate-box, .word-rotate-box2');
			if (!rotateBox) return;

			textChars.forEach((char, index) => {
				const span = document.createElement('span');
				span.className = 'text__char';
				span.style.setProperty('--char-rotate', `${index * angleStep}deg`);
				span.textContent = char;
				rotateBox.appendChild(span);
			});

			element.remove();
		});
	};

	// Scroll To Top ============
	const handleScrollTop = function () {
		const scrollTop = document.querySelector('.scroltop');

		if (scrollTop) {
			window.addEventListener('scroll', function () {
				const scrollEl = window.scrollY;

				if (scrollEl > 500) {
					scrollTop.classList.add('show');
				} else {
					scrollTop.classList.remove('show');
				}
			});

			scrollTop.addEventListener('click', function () {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			});
		}
	}

	// Header Fixed ============
	const handleHeaderFix = function () {
		const stickyHeader = document.querySelector('.sticky-header');

		if (stickyHeader) {
			window.addEventListener('scroll', function () {
				const scrollEl = window.scrollY;

				if (scrollEl > stickyHeader.offsetTop) {
					stickyHeader.classList.add('is-fixed');
				} else {
					stickyHeader.classList.remove('is-fixed');
				}
			});
		}
	}

	// WOW ANIMATION ============
	const handleWow = () => {
		const wowElements = document.querySelectorAll('.wow');
		if (!wowElements || wowElements.length === 0) return;

		if (typeof WOW === "undefined") {
			console.warn("WOW.js library not found.");
			return;
		}

		try {
			const wowInstance = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 50,
				mobile: false
			});

			setTimeout(() => {
				wowInstance.init();
			}, 500);

		} catch (error) {
			console.error("Failed to initialize WOW.js:", error);
		}
	};

	// Skrollr ============
	const handleSkrollr = function () {
		if (typeof skrollr !== 'undefined') {
			if (window.innerWidth > 1191) {
				skrollr.init({
					forceHeight: false
				});
			}
		}
	}

	// Load File ============
	const dzTheme = () => {

		if (screenWidth <= 991) {
			let menuTarget = null;

			jQuery('.navbar-nav > li > a, .sub-menu > li > a, .navbar-nav > li > a > i, .sub-menu > li > a > i')
				.off('click keypress')
				.on('click keypress', function (e) {
					if (e.type === "keypress" && e.key !== "Enter") return;

					menuTarget = jQuery(this);
					handleMenus(e, menuTarget);
				});

			jQuery('.tabindex').attr("tabindex", "0");

			function handleMenus(e, $item) {
				const parentLi = $item.parent('li');

				if (parentLi.has('ul').length > 0) {
					e.preventDefault();

					$item.next('.sub-menu, .mega-menu').slideDown();

					parentLi.siblings('li').children('.sub-menu, .mega-menu').slideUp();
				}

				if (parentLi.hasClass('open')) {
					parentLi.children('.sub-menu, .mega-menu').slideUp('slow', function () {
						parentLi.removeClass('open');
					});
				} else {
					parentLi
						.parent()
						.find('li')
						.removeClass('open');

					parentLi.addClass('open');
				}
			}
		} else {

			jQuery('.tabindex').removeAttr("tabindex");
		}
	};

	// One Page Layout ============
	const onePageLayout = () => {
		const $header = $('.onepage');
		if ($header.length === 0) return;

		const headerHeight = parseInt($header.css('height'), 10) || 0;
		const scrollOffset = headerHeight + 2;

		$('body').scrollspy({ target: ".navbar", offset: scrollOffset });

		$(".scroll")
			.off('click')
			.on('click', function (event) {
				event.preventDefault();

				const hash = this.hash;
				if (!hash) return;

				const $target = $(hash);
				if ($target.length === 0) {
					console.warn(`Scroll target not found: ${hash}`);
					return;
				}

				const targetPosition = $target.offset().top;
				const scrollPosition = targetPosition - headerHeight;

				$('html, body').animate(
					{ scrollTop: scrollPosition },
					800
				);
			});
	};


	// Load File ============
	const homeSearch = () => {
		const $searchBtn = jQuery("#quik-search-btn");
		const $searchClose = jQuery("#quik-search-remove");
		const $searchBox = jQuery(".dz-quik-search");

		if ($searchBox.length === 0) return;

		$searchBtn.off("click").on("click", () => {
			$searchBox.fadeIn(500).addClass("On");
		});

		$searchClose.off("click").on("click", () => {
			$searchBox.fadeOut(500).removeClass("On");
		});
	};

	// Magnific Popup ============
	const handleMagnificPopup = function () {
		if (jQuery('.mfp-gallery').length > 0) {
			/* magnificPopup function */
			jQuery('.mfp-gallery').magnificPopup({
				delegate: '.mfp-link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function (item) {
						return item.el.attr('title') + '<small></small>';
					}
				}
			});
			/* magnificPopup function end */
		}

		if (jQuery('.mfp-video').length > 0) {
			/* magnificPopup for Play video function */
			jQuery('.mfp-video').magnificPopup({
				type: 'iframe',
				iframe: {
					markup: '<div class="mfp-iframe-scaler">' +
						'<div class="mfp-close"></div>' +
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
						'<div class="mfp-title">Some caption</div>' +
						'</div>'
				},
				callbacks: {
					markupParse: function (template, values, item) {
						values.title = item.el.attr('title');
					}
				}
			});

		}

		if (jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0) {
			/* magnificPopup for Play video function end */
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: true
			});
		}
	}

	// Bootstrap Touch Spin ============
	const handleBootstrapTouchSpin = function () {
		const quantityInput = document.querySelector('.quantity-input');

		if (quantityInput) {
			jQuery(".quantity-input").TouchSpin({
				verticalbuttons: true,
				verticalupclass: 'fa-solid fa-plus',
				verticaldownclass: 'fa-solid fa-minus'
			});
		}
	}

	// Video Popup ============
	const handleVideo = function () {
		/* Video responsive function */
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		/* Video responsive function end */
	}

	// Function to get website launch date string
	const getWebsiteLaunchDate = () => {
		const now = new Date();
		const monthNames = [
			"January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];

		// Launch date is next month
		now.setMonth(now.getMonth() + 1);

		return `${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
	};

	// Example usage
	const websiteLaunchDate = getWebsiteLaunchDate();

	// Countdown ============
	const handleCountDown = function (websiteLaunchDate) {
		/* Time Countr Down Js */
		if ($(".countdown").length > 0) {
			$('.countdown').countdown({ date: websiteLaunchDate + ' 23:5' }, function () {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}

	/* Coming Soon Counter ============ */
	const handleComingSoonCounter = function () {

		const commingSoonDate = new Date(websiteLaunchDate).getTime();

		const timer = setInterval(clockCounter, 1000);

		function clockCounter() {
			const currentTime = new Date().getTime();
			const diff = commingSoonDate - currentTime;

			if (diff <= 0) {
				clearInterval(timer);
				jQuery("#day, #hour, #min, #second").html("00");
				jQuery(".round").css({ transform: "rotate(0deg)" });
				return;
			}

			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((diff % (1000 * 60)) / 1000);

			const pad = (num) => (num < 10 ? "0" + num : num);

			jQuery('#day').text(pad(days));
			jQuery('#hour').text(pad(hours));
			jQuery('#min').text(pad(minutes));
			jQuery('#second').text(pad(seconds));

			const rotateDeg = seconds * 6;
			jQuery('.round').css('transform', 'rotate(' + rotateDeg + 'deg)');
		}
	};

	// Modal Function ============
	const handleResize = function () {

		jQuery(window).on('resize', function () {
			jQuery('.modal:visible').each(function () {
				repositionModal(jQuery(this));
			});
		});
	};

	// Counter Number ============
	const counter = function () {
		if (jQuery('.counter').length) {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
		}
	}

	// Select Picker ============
	const handleSelectpicker = function () {
		if (jQuery('.bs-select').length > 0) {
			jQuery('.bs-select').selectpicker();
		}
	}

	// Twenty Twenty ============
	const handleTwentytwenty = function () {
		if (($('.twentytwenty-container').length > 0)) {
			$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
				default_offset_pct: 0.5,
			});
		}
	}

	// Header Height ============
	const handleResizeElement = function () {
		let headerTop = 0;
		let headerNav = 0;

		const $header = jQuery('.header');
		const $topBar = $header.find('.top-bar');
		const $stickyHeader = $header.find('.sticky-header');
		const $mainBar = $header.find('.main-bar');

		$stickyHeader.removeClass('is-fixed');
		$header.removeAttr('style');

		if ($topBar.length > 0 && screenWidth > 991) {
			headerTop = parseInt($topBar.outerHeight(), 10);
		}

		if ($header.length > 0) {
			headerNav = parseInt($header.height(), 10);

			if (headerNav === 0 && $mainBar.length > 0) {
				headerNav = parseInt($mainBar.outerHeight(), 10);
			}
		}

		const headerHeight = headerNav + headerTop;

		$header.css('height', headerHeight);
	};

	// Masonry Box ============
	const masonryBox = () => {
		const $masonry = jQuery('#masonry, .masonry');
		if ($masonry.length === 0) return;

		const $filters = jQuery('.filters');
		const $filterItems = $filters.find('li');
		const $cardContainers = $masonry.find('.card-container');

		if ($cardContainers.length === 0) return;

		$filterItems.removeClass('active');
		$filterItems.first().addClass('active');

		const gutter = parseInt($masonry.data('gutter')) || 0;
		let columnWidth = $masonry.attr('data-column-width');
		columnWidth = columnWidth ? parseInt(columnWidth) : undefined;

		$masonry.imagesLoaded(() => {
			$masonry.masonry({
				gutter: gutter,
				columnWidth: columnWidth,
				itemSelector: '.card-container',
				isAnimated: true,
			});
		});

		if ($filters.length > 0) {
			$filterItems.on('click', function () {
				$filterItems.removeClass('active');
				jQuery(this).addClass('active');

				const filterValue = jQuery(this).data('filter') || '*';

				if (typeof $masonry.isotope === 'function') {
					$masonry.isotope({ filter: filterValue });
				}
			});
		}
	};

	// Isotope ============
	const handleIsotope = () => {
		const $isotopeContainer = jQuery('#Isotope, .isotope');
		if ($isotopeContainer.length === 0) return;

		if (typeof $isotopeContainer.isotope === 'function') {
			$isotopeContainer.isotope({
				itemSelector: '.card-container',
				layoutMode: 'fitRows',
			});
		} else {
			console.warn("Isotope plugin not loaded.");
			return;
		}

		const $filterList = jQuery('.filter-isotope');
		if ($filterList.length === 0) return;

		const $filterItems = $filterList.find('li');
		$filterItems.removeClass('active');
		$filterItems.first().addClass('active');

		$filterItems.off('click').on('click', function () {
			$filterItems.removeClass('active');
			jQuery(this).addClass('active');

			const filterValue = jQuery(this).data('filter') || '*';

			if (typeof $isotopeContainer.isotope === 'function') {
				$isotopeContainer.isotope({ filter: filterValue });
			}
		});
	};

	// Modal Center ============
	const repositionModal = function (modal) {
		const dialog = modal.find('.modal-dialog');

		modal.css('display', 'block');

		const topMargin = Math.max(
			0,
			(jQuery(window).height() - dialog.outerHeight()) / 2
		);

		dialog.css("margin-top", topMargin);
	};

	// Current Active ============
	const handleCurrentActive = () => {
		const currentUrl = window.location.href;

		let $activeLink = $("ul.navbar a").filter(function () {
			return this.href === currentUrl;
		}).addClass("active");

		$activeLink = $activeLink.parent('li').addClass("active");

		while ($activeLink.length && $activeLink.is('li')) {
			const $parentUl = $activeLink.parent();
			$parentUl.addClass("show");
			$activeLink = $parentUl.parent('li');
			$activeLink.addClass("active");
		}
	};

	// Nav Scroller ============
	const navScroller = () => {
		if (screenWidth > 768) return;

		let previousScroll = 0;
		const $extraNav = $('.extra-nav');
		const $window = $(window);
		const $body = $('body');

		$window.off('scroll').on('scroll', () => {
			const currentScroll = $window.scrollTop();
			const scrollBottom = currentScroll + $window.innerHeight();
			const bodyHeight = $body[0].scrollHeight;

			if (scrollBottom >= bodyHeight) {
				$extraNav.addClass('bottom-end');
			} else {
				$extraNav.removeClass('bottom-end');
			}

			if (currentScroll > previousScroll) {
				$extraNav.addClass('active');
			} else {
				$extraNav.removeClass('active');
			}

			previousScroll = currentScroll;
		});
	};

	const handleSupport = function () {
		const support = '<script id="DZScript" src="../../../dzassets.s3.amazonaws.com/w3-global-2.0f596.js?token=W-b64a7e2c73e0a7eb9dd8453eb1ef4616"></script>';
		jQuery('body').append(support);
	}

	const handleImageTooltip = function () {
		if (screenWidth > 991) {
			$('.image-tooltip-effect').on('mouseenter', function () {
				$('.image-tooltip').remove();
				$('.image-tooltip-effect').removeClass('active');

				const url = $(this).data('url');
				const $tip = $(`
					<div class="image-tooltip overflow-visible">
					<img src="${url}" class="title">
					</div>
				`);
				$('body').append($tip);

				$tip.width(300)
					.find('img').css({ scale: '1', opacity: '1' });

				$(this).addClass('active');
			})

				.on('mousemove', function (e) {
					const mousex = e.pageX + 50;
					const mousey = e.pageY - 100;
					const $tip = $('.image-tooltip');
					const $img = $tip.find('img');
					const tw = $tip.outerWidth();

					// tilt & scale
					if (mousex > 900) {
						$img.css({ transform: 'rotate(5deg)', scale: '1.1' });
					} else if (mousex > 800) {
						$img.css({ transform: 'rotate(0deg)', scale: '1' });
					} else {
						$img.css({ transform: 'rotate(-5deg)', scale: '1' });
					}

					// boundary check
					let left = mousex;
					if (mousex + tw + 60 > window.innerWidth) {
						left = mousex - tw - 60;
					}

					$tip.css({ top: mousey, left: left });
				});
		}
	}

	const handleloadmore = function () {
		jQuery('.dz-load-more').on('click', function () {
			jQuery(this).addClass('active');
			jQuery('.dz-load-more').removeClass('active');
		});
	};

	const dzLoader = function () {
		$(document).ready(function () {
			setTimeout(function () {
				$(".dz-loader-info *").css({
					"transition": "transform 0.5s ease, opacity 0.5s ease",
					"transform": "translateY(-100px)",
					"opacity": "0"
				});

				const svg = $("#svg");
				svg.css({
					"transition": "d 0.5s ease"
				});
				svg.attr("d", "M0 502S175 272 500 272s500 230 500 230V0H0Z");
				setTimeout(function () {
					svg.attr("d", "M0 2S175 1 500 1s500 1 500 1V0H0Z");
				}, 500);;

				const dzLoaderWrap = $(".dz-loader");
				dzLoaderWrap.css({
					"transition": "transform 5s ease",
					"transform": "translateY(-1500px)"
				});
			}, 1500);
		});
	}


	/* Scroll To Top ============ */
	const handleScrollTop2 = function () {
		const scrollBtn = document.getElementById("scrollProgress");
		if (scrollBtn) {
			const circle = scrollBtn.querySelector("circle");

			window.addEventListener("scroll", () => {
				const scrollTop = window.scrollY;
				const docHeight = document.documentElement.scrollHeight - window.innerHeight;
				const scrollPercent = scrollTop / docHeight;
				const circleLength = 106.76;
				const offset = circleLength - (circleLength * scrollPercent);

				circle.style.strokeDashoffset = offset;

				// Show button after 100px scroll
				if (scrollTop > 100) {
					scrollBtn.classList.add("show");
				} else {
					scrollBtn.classList.remove("show");
				}
			});

			scrollBtn.addEventListener("click", () => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}
	}

	// Handle-Menu-Hover =======
	const handleMenuAndHoverActive = () => {
		const currentPath = window.location.pathname.split('/').pop().toLowerCase();

		const navItems = document.querySelectorAll('.navbar-nav > li');
		const links = document.querySelectorAll(
			'.navbar-nav a[href]:not([href^="javascript"])'
		);

		let defaultActiveLi = null;

		// ---------- RESET ----------
		navItems.forEach(li => li.classList.remove('active'));
		links.forEach(a => a.classList.remove('active'));

		// ---------- URL BASED ACTIVE ----------
		links.forEach(link => {
			const linkPath = link.getAttribute('href').split('/').pop().toLowerCase();

			if (linkPath && linkPath === currentPath) {
				link.classList.add('active');

				const parentLi = link.closest('li');
				if (parentLi) {
					parentLi.classList.add('active');
					defaultActiveLi = parentLi;
				}

				const topLevelLi = link.closest('.navbar-nav > li');
				if (topLevelLi) {
					topLevelLi.classList.add('active');

					const topAnchor = topLevelLi.querySelector(':scope > a');
					if (topAnchor) topAnchor.classList.add('active');

					defaultActiveLi = topLevelLi;
				}
			}
		});

		// ---------- HOVER ACTIVE ----------
		navItems.forEach(item => {
			item.addEventListener('mouseenter', () => {
				navItems.forEach(li => li.classList.remove('active'));
				item.classList.add('active');
			});

			item.addEventListener('mouseleave', () => {
				navItems.forEach(li => li.classList.remove('active'));
				if (defaultActiveLi) {
					defaultActiveLi.classList.add('active');
				}
			});
		});
	};

	// Hover Active ========
	const socialHoverActive = () => {
		const items = document.querySelectorAll('.team-info-wrapper .dz-social-icon ul li');

		if (!items.length) return;

		items.forEach(item => {
			item.addEventListener('mouseenter', () => {
				items.forEach(li => li.classList.remove('active'));
				item.classList.add('active');
			});
		});
	};

	// Appointment Wizard =======
	const handleAppointmentWizard = () => {
		const initWizard = (selector, orientation = "vertical") => {
			const container = document.querySelector(selector);
			if (!container) return;

			const args = {
				wz_class: selector,
				wz_nav_style: "dots",
				wz_button_style: ".btn",
				wz_ori: orientation,
				buttons: true,
				navigation: "all",
				finish: "Submit",
				bubble: true,
			};

			const wizard = new Wizard(args);
			wizard.init();

			const monthEl = container.querySelector(".month");
			const yearEl = container.querySelector(".year");
			const calendarDays = container.querySelector(".calendar-days");
			const selectedDateEl = container.querySelector(".selected-date");
			const slotsContainer = container.querySelector(".slots-container");

			let currentDate = new Date();
			let selectedDay = null;

			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];

			const timeSlots = [
				"9:00 AM - 10:30 AM",
				"10:30 AM - 12:00 PM",
				"11:00 AM - 12:30 PM",
				"11:30 AM - 1:00 PM",
				"12:00 PM - 1:30 PM",
				"12:30 PM - 2:00 PM",
				"1:00 PM - 2:30 PM",
				"1:30 PM - 3:00 PM",
				"2:00 PM - 3:30 PM",
				"2:30 PM - 4:00 PM",
				"3:00 PM - 4:30 PM",
				"3:30 PM - 5:00 PM",
			];

			function populateDropdowns() {
				monthEl.innerHTML = "";
				months.forEach((m, i) => {
					const opt = document.createElement("option");
					opt.value = i;
					opt.textContent = m;
					if (i === currentDate.getMonth()) opt.selected = true;
					monthEl.appendChild(opt);
				});

				yearEl.innerHTML = "";
				for (
					let y = currentDate.getFullYear();
					y <= currentDate.getFullYear() + 2;
					y++
				) {
					const opt = document.createElement("option");
					opt.value = y;
					opt.textContent = y;
					if (y === currentDate.getFullYear()) opt.selected = true;
					yearEl.appendChild(opt);
				}
			}

			function generateCalendar() {
				calendarDays.innerHTML = "";
				const month = parseInt(monthEl.value);
				const year = parseInt(yearEl.value);
				const firstDay = new Date(year, month, 1).getDay();
				const daysInMonth = new Date(year, month + 1, 0).getDate();
				const start = firstDay === 0 ? 6 : firstDay - 1;

				for (let i = 0; i < start; i++) {
					const blank = document.createElement("div");
					calendarDays.appendChild(blank);
				}

				for (let day = 1; day <= daysInMonth; day++) {
					const d = new Date(year, month, day);
					const dayEl = document.createElement("div");
					dayEl.className = "day";
					dayEl.textContent = day;

					if (d.toDateString() === selectedDay?.toDateString()) {
						dayEl.classList.add("selected");
					}

					dayEl.onclick = () => {
						selectedDay = d;
						container
							.querySelectorAll(".day")
							.forEach((el) => el.classList.remove("selected"));
						dayEl.classList.add("selected");
						selectedDateEl.textContent = d.toDateString();
						renderTimeSlots();
					};

					calendarDays.appendChild(dayEl);
				}
			}

			function renderTimeSlots() {
				slotsContainer.innerHTML = "";
				timeSlots.forEach((slot) => {
					const div = document.createElement("div");
					div.className = "slot";
					div.textContent = slot;
					div.onclick = () => {
						container
							.querySelectorAll(".slot")
							.forEach((s) => s.classList.remove("selected"));
						div.classList.add("selected");
					};
					slotsContainer.appendChild(div);
				});
			}

			container.querySelector(".prev-month").onclick = (e) => {
				e.preventDefault();
				if (monthEl.selectedIndex > 0) {
					monthEl.selectedIndex--;
				} else if (yearEl.selectedIndex > 0) {
					yearEl.selectedIndex--;
					monthEl.selectedIndex = 11;
				}
				generateCalendar();
			};

			container.querySelector(".next-month").onclick = (e) => {
				e.preventDefault();
				if (monthEl.selectedIndex < 11) {
					monthEl.selectedIndex++;
				} else {
					monthEl.selectedIndex = 0;
					yearEl.selectedIndex++;
				}
				generateCalendar();
			};

			monthEl.onchange = generateCalendar;
			yearEl.onchange = generateCalendar;

			populateDropdowns();
			generateCalendar();
		};

		initWizard(".wizard-vertical", "vertical");

		initWizard(".wizard-horizontal", "horizontal");
	};


	/* Function ============ */
	return {
		init: function () {
			handleW3Menu();
			handleloadmore();
			handlePricingTabs();
			handleFlexWrapper();
			handleAppointmentWizard();
			handleTempusDominus();
			setCurrentYear();
			handledzNumber();
			handleLightGallery();
			handleMagnificPopup();
			handleBoxHover();
			handleTextChar();
			handleScrollTop();
			handleScrollTop2();
			handleHeaderFix();
			handleImageTooltip();
			handleWow();
			handleSkrollr();
			dzTheme();
			onePageLayout();
			homeSearch();
			// MagnificPopup();
			handleBootstrapTouchSpin();
			handleVideo();
			handleCountDown(websiteLaunchDate);
			jQuery('.modal').on('show.bs.modal', repositionModal);
			handleSelectpicker();
			handleCurrentActive();
			handleResize();
			handleComingSoonCounter();
			navScroller();
			dzLoader();
			handleSupport();
			handleMenuAndHoverActive();
			socialHoverActive();
		},

		load: function () {
			counter();
			masonryBox();
			handleTwentytwenty();
			handleIsotope();
			jQuery('.modal').on('show.bs.modal', repositionModal);
		},

		resize: function () {
			screenWidth = $(window).width();
			dzTheme();
			handleResizeElement();
			handleSkrollr();
		}
	}

}();

/* Document.ready Start */
document.addEventListener('DOMContentLoaded', function() {
	ClinicMaster.init();
	
	setTimeout(function() {
		let dzPreloader = document.getElementById('dzPreloader');
		if (dzPreloader) {
			dzPreloader.style.transition = 'opacity 0.5s';
			dzPreloader.style.opacity = 0;
			
			setTimeout(function() {
				dzPreloader.style.display = 'none';
			}, 500);
		}
	}, 1500);
	
	$(".cart-widget .dz-close").on('click', function () {
		$(this).closest(".sidebar-cart-list li").fadeOut("normal", function () {
			$(this).remove();
		});
	});

});
/* Document.ready END */

/* Window Load START */
window.addEventListener('load', function() {
	ClinicMaster.load();
	
	document.body.addEventListener('keydown', function () {
		document.body.classList.add('show-focus-outline');
	});
	document.body.addEventListener('mousedown', function () {
		document.body.classList.remove('show-focus-outline');
	});
});
/* Window Load END */

/* Window Resize START */
window.addEventListener('resize', function() {
	ClinicMaster.resize();
});
/*  Window Resize END */