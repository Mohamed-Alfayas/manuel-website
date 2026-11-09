/**
	Template Name 	 : ClinicMaster
	Author			 : DexignZone
	
	Core script to handle the entire theme and core functions
**/

const ClinicMasterCarousel = function () {

	// handleTestimonialSwiper1 Swiper ==
	const handleTestimonialSwiper1 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper1');
		if (!swiperEl) return; // Safety check

		const testimonialSwiper1 = new Swiper('.testimonial-swiper1', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper1-button-next",
				prevEl: ".swiper1-button-prev",
			},
		});
	};

	// handleTestimonialSwiper2 Swiper ==
	const handleTestimonialSwiper2 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper2');
		if (!swiperEl) return; // Safety check

		const testimonialSwiper2 = new Swiper('.testimonial-swiper2', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 2,
			autoplay: {
			    delay: 3000,
			    disableOnInteraction: false,
			},
			pagination: {
				el: ".testimonial-pagination-swiper2",
				type: "progressbar",
			},
			breakpoints: {
				1481: { slidesPerView: 2 },
				1280: { slidesPerView: 1.6 },
				991: { slidesPerView: 1.2 },
				320: { slidesPerView: 1 },
			},
		});

		// ===========================
		// Custom Current / Total Pagination
		// ===========================
		const paginationEl = document.querySelector('.testimonial-slider__pagination2');
		if (paginationEl) {
			const updatePagination = () => {
				const totalSlides = document.querySelectorAll('.testimonial-swiper2 .swiper-slide').length;
				const currentEl = document.querySelector('.testimonial-slider__current');
				const totalEl = document.querySelector('.testimonial-slider__total');

				let current = testimonialSwiper2.realIndex + 1;
				if (current > totalSlides) current = 1;

				const formattedCurrent = current < 10 ? `0${current}` : current;
				const formattedTotal = totalSlides < 10 ? `0${totalSlides}` : totalSlides;

				currentEl.innerHTML = formattedCurrent;
				totalEl.innerHTML = formattedTotal;
			};

			updatePagination();
			testimonialSwiper2.on('slideChange', () => updatePagination());
		}
	};


	// handleTestimonialSwiper3 Swiper ==
	const handleTestimonialSwiper3 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper3');
		if (!swiperEl) return; // Safety check

		const testimonialSwiper3 = new Swiper('.testimonial-swiper3', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
			    delay: 3000,
			    disableOnInteraction: false,
			},
			pagination: {
				el: ".testimonial-pagination-swiper3",
				clickable: true,
			},
		});
	};

	// handleTestimonialSwiper4 Swiper ==
	const handleTestimonialSwiper4 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper4');
		if (!swiperEl) return; // Safety check

		// Thumbnail Swiper
		const testimonialThumbSwiper4 = new Swiper(".testimonial-thumb-swiper4", {
			slidesPerView: 1,
			effect: "fade",
			centeredSlides: true,
		});

		// Main Swiper
		const testimonialSwiper4 = new Swiper('.testimonial-swiper4', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			centeredSlides: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			thumbs: {
				swiper: testimonialThumbSwiper4,
			},
			navigation: {
				nextEl: ".swiper4-button-next",
				prevEl: ".swiper4-button-prev",
			},
		});
	};

	// handleTestimonialSwiper5 Swiper ==
	const handleTestimonialSwiper5 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper5');
		if (!swiperEl) return; // Safety check

		const testimonialSwiper5 = new Swiper('.testimonial-swiper5', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 3,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".testimonial-pagination-swiper2",
				type: "progressbar",
			},
			breakpoints: {
				1481: { slidesPerView: 3 },
				1280: { slidesPerView: 1.6 },
				991: { slidesPerView: 1.2 },
				320: { slidesPerView: 1 },
			},
		});
	};

	const handleTestimonialSwiper6 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper6');
		if (!swiperEl) return; // Safety check

		const testimonialSwiper6 = new Swiper('.testimonial-swiper6', {
			loop: true,
			spaceBetween: 20,
			speed: 1500,
			slidesPerView: 1,
			simulateTouch: false,
			allowTouchMove: false,
			autoplay: {
			    delay: 2000,
			    disableOnInteraction: false,
			},
		});
	};

	// handleAwardSlider Swiper ==
	const handleAwardSlider = () => {
		const awardsSwiperEl = document.querySelector('.awards-swiper');
		if (!awardsSwiperEl) return; // Safety check

		const awardsSwiper = new Swiper('.awards-swiper', {
			loop: true,
			slidesPerView: 5,
			speed: 450,
			autoplay: {
				delay: 900,
				disableOnInteraction: false,
			},
			breakpoints: {
				1200: { slidesPerView: 5 },
				991: { slidesPerView: 4 },
				767: { slidesPerView: 3 },
				575: { slidesPerView: 2.5 },
				320: { slidesPerView: 1.5 },
			},
		});
	};

	// handleTestimonialSwiper7 Swiper ==
	const handleTestimonialSwiper7 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper7');
		if (!swiperEl) return; // Safety check

		const testimonialSwiper7 = new Swiper('.testimonial-swiper7', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: ".testimonial-pagination-swiper7",
				clickable: true,
			},
		});
	};
	// handleTestimonialSwiper8 Swiper ==
	const handleTestimonialSwiper8 = () => {
		const swiperEl = document.querySelector('.testimonial-swiper8');
		if (!swiperEl) return; // Safety check

		const testimonialSwiper8 = new Swiper('.testimonial-swiper8', {
			loop: true,
			spaceBetween: 25,
			slidesPerView: 1.3,
			pagination: {
				el: ".testimonial-pagination-swiper2",
				type: "progressbar",
			},
			breakpoints: {
				1481: { slidesPerView: 1.3 },
				1280: { slidesPerView: 1.6 },
				991: { slidesPerView: 1.2 },
				320: { slidesPerView: 1 },
			},
		});

		// ===========================
		// Custom Current / Total Pagination
		// ===========================
		const paginationEl = document.querySelector('.testimonial-slider__pagination2');
		if (paginationEl) {
			const updatePagination = () => {
				const totalSlides = testimonialSwiper8.slides.length - testimonialSwiper8.loopedSlides * 2;
				const currentEl = document.querySelector('.testimonial-slider__current');
				const totalEl = document.querySelector('.testimonial-slider__total');

				let current = testimonialSwiper8.realIndex + 1;
				if (current > totalSlides) current = 1;

				const formattedCurrent = current < 10 ? `0${current}` : current;
				const formattedTotal = totalSlides < 10 ? `0${totalSlides}` : totalSlides;

				currentEl.innerHTML = formattedCurrent;
				totalEl.innerHTML = formattedTotal;
			};

			updatePagination();
			testimonialSwiper8.on('slideChange', () => updatePagination());
		}
	};



	// handleDzTeamSwiper1 Swiper ==
	const handleDzTeamSwiper1 = () => {
		const swiperEl = document.querySelector('.dz-team-swiper1');
		if (!swiperEl) return; // Safety check

		// Thumbnail Swiper
		const teamSwiperThumb = new Swiper(".dz-team-swiper1-thumb", {
			slidesPerView: 2,
			grid: { rows: 2 },
			autoplay: { delay: 3000, disableOnInteraction: false },
			breakpoints: {
				320: { slidesPerView: 1.2, grid: { rows: 1 } },
				591: { slidesPerView: 2 },
				991: { slidesPerView: 3 },
				1200: { slidesPerView: 2 },
			},
		});

		// Main Swiper
		const teamSwiper = new Swiper(".dz-team-swiper1", {
			slidesPerView: 1,
			effect: "fade",
			thumbs: { swiper: teamSwiperThumb },
			pagination: {
				el: ".team-progressbar-swiper",
				type: "progressbar",
			},
			navigation: {
				nextEl: ".team-swiper-next",
				prevEl: ".team-swiper-prev",
			},
		});

		// Custom Current / Total Pagination
		const paginationEl = document.querySelector('.team-pagination-swiper');
		if (paginationEl) {
			const updatePagination = () => {
				const totalSlides = document.querySelectorAll('.dz-team-swiper1 .swiper-slide').length;
				const currentEl = document.querySelector('.team-slider__current');
				const totalEl = document.querySelector('.team-slider__total');

				let current = teamSwiper.realIndex + 1;
				if (current > totalSlides) current = 1;

				const formattedCurrent = current < 10 ? `0${current}` : current;
				const formattedTotal = totalSlides < 10 ? `0${totalSlides}` : totalSlides;

				currentEl.innerHTML = formattedCurrent;
				totalEl.innerHTML = formattedTotal;
			};

			updatePagination();
			teamSwiper.on('slideChange', () => updatePagination());
		}
	};

	// Project Carousel Swiper ==
	const handleVerticalSwiper = () => {
		const swiperEl = document.querySelector('.blog-vertical-swiper');
		if (!swiperEl) return; // Safety check

		// Vertical Thumbnail Swiper
		const verticalThumbSwiper = new Swiper(".blog-vertical-swiper-thumb", {
			direction: "vertical",
			slidesPerView: 3,
			spaceBetween: 10,
			mousewheel: false,
			autoplay: { delay: 3000, disableOnInteraction: false },
			breakpoints: {
				320: { slidesPerView: 1, direction: "horizontal" },
				767: { slidesPerView: 2, direction: "vertical" },
				1191: { slidesPerView: 3 },
			},
		});

		// Main Vertical Swiper
		const verticalSwiper = new Swiper(".blog-vertical-swiper", {
			slidesPerView: 1,
			effect: "fade",
			grabCursor: true,
			thumbs: { swiper: verticalThumbSwiper },
			navigation: {
				nextEl: ".blog-swiper-next",
				prevEl: ".blog-swiper-prev",
			},
		});
	};


	// Project Carousel Swiper ==
	const handleVerticalSwiper2 = () => {
		const swiperEl = document.querySelector('.blog-vertical-swiper2');
		if (!swiperEl) return; // Safety check

		// Vertical Thumbnail Swiper
		const verticalThumbSwiper2 = new Swiper(".blog-vertical-swiper-thumb2", {
			direction: "vertical",
			slidesPerView: 3,
			spaceBetween: 10,
			mousewheel: false,
			// autoplay: { delay: 3000, disableOnInteraction: false }, // Optional
			breakpoints: {
				320: { slidesPerView: 1, direction: "horizontal" },
				767: { slidesPerView: 2, direction: "vertical" },
				1191: { slidesPerView: 3 },
			},
		});

		// Main Vertical Swiper
		const verticalSwiper2 = new Swiper(".blog-vertical-swiper2", {
			slidesPerView: 1,
			effect: "fade",
			grabCursor: true,
			thumbs: { swiper: verticalThumbSwiper2 },
			navigation: {
				nextEl: ".blog-swiper-next",
				prevEl: ".blog-swiper-prev",
			},
		});
	};


	// handleAwardSlider Swiper ==
	const handleClientSwiper = () => {
		const swiperEl = document.querySelector('.client-swiper');
		if (!swiperEl) return; // Safety check

		const clientSwiper = new Swiper('.client-swiper', {
			loop: true,
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1200: { slidesPerView: 6 },
				991: { slidesPerView: 4 },
				575: { slidesPerView: 3 },
				320: { slidesPerView: 2 },
			},
		});
	};

	// handleAwardSlider Swiper 2 ==
	const handleClientSwiper2 = () => {
		const swiperEl = document.querySelector('.client-swiper2');
		if (!swiperEl) return; // Safety check

		const clientSwiper2 = new Swiper('.client-swiper2', {
			loop: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				767: { slidesPerView: 4 },
				575: { slidesPerView: 3 },
				320: { slidesPerView: 2 },
			},
		});
	};


	// handleAwardSlider Swiper ==
	const handleClientSwiper3 = () => {
		if (jQuery('.client-swiper3').length > 0) {
			const swiperClient = new Swiper('.client-swiper3', {
				loop: true,
				slidesPerView: 4,
				spaceBetween: 85,
				autoplay: {
					delay: 3000,
				},
				breakpoints: {
					1200: {
						slidesPerView: 4
					},
					991: {
						slidesPerView: 4
					},
					575: {
						slidesPerView: 3
					},
					320: {
						slidesPerView: 3,
						spaceBetween: 50
					}
				}
			});
		}
	};

	const handleDzFlexSwiper = () => {
		const swiperEl = document.querySelector('.dz-flex-swiper');
		if (!swiperEl) return; // Safety check

		const dzFlexSwiper = new Swiper('.dz-flex-swiper', {
			speed: 500,
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 0,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				991: { slidesPerView: 'auto' },
				320: { slidesPerView: 1 },
			},
		});
	};

	// handleTestimonialSwiper2 Swiper ==
	const handleCompareSwiper = () => {
		const swiperEl = document.querySelector('.compare-swiper');
		if (!swiperEl) return; // Safety check

		const compareSwiper = new Swiper(".compare-swiper", {
			loop: true,
			slidesPerView: 4,
			spaceBetween: 20,
			centeredSlides: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".compare-swiper-next",
				prevEl: ".compare-swiper-prev",
			},
			pagination: {
				el: ".compare-pagination-swiper",
				type: "progressbar",
			},
			breakpoints: {
				1481: { slidesPerView: 4.4 },
				1280: { slidesPerView: 4 },
				991: { slidesPerView: 3.5 },
				320: { slidesPerView: 2 },
			},
		});

		const paginationCurrent = document.querySelector('.compare-slider__current');
		const paginationTotal = document.querySelector('.compare-slider__total');

		if (paginationCurrent && paginationTotal) {
			const updatePagination = () => {
				const totalSlides = document.querySelectorAll('.compare-swiper .swiper-slide').length;
				let current = compareSwiper.realIndex + 1;
				if (current > totalSlides) current = 1;

				paginationCurrent.innerHTML = current < 10 ? `0${current}` : current;
				paginationTotal.innerHTML = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
			};

			updatePagination();
			compareSwiper.on('slideChange', updatePagination);
		}
	};

	// handleTestimonialSwiper2 Swiper ==
	const handleCompareSwiper2 = () => {
		const swiperEl = document.querySelector('.compare-swiper-2');
		if (!swiperEl) return; // Safety check

		const compareSwiper = new Swiper(".compare-swiper-2", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 20,
			centeredSlides: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".compare-swiper-2-next",
				prevEl: ".compare-swiper-2-prev",
			},
			pagination: {
				el: ".compare-pagination-swiper",
				type: "progressbar",
			},
			breakpoints: {
				1481: { slidesPerView: 2.6 },
				1280: { slidesPerView: 3 },
				991: { slidesPerView: 3 },
				320: { slidesPerView: 2 },
			},
		});

		const paginationCurrent = document.querySelector('.compare-slider__current');
		const paginationTotal = document.querySelector('.compare-slider__total');

		if (paginationCurrent && paginationTotal) {
			const updatePagination = () => {
				const totalSlides = document.querySelectorAll('.compare-swiper-2 .swiper-slide').length;
				let current = compareSwiper.realIndex + 1;
				if (current > totalSlides) current = 1;

				paginationCurrent.innerHTML = current < 10 ? `0${current}` : current;
				paginationTotal.innerHTML = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
			};

			updatePagination();
			compareSwiper.on('slideChange', updatePagination);
		}
	};


	// handleDummySwiper Swiper ==
	const handleDummySwiper = () => {
		const swiperEl = document.querySelector('.dummy-swiper');
		if (!swiperEl) return; // Safety check

		const dummySwiper = new Swiper('.dummy-swiper', {
			loop: false,
			spaceBetween: 0,
			slidesPerView: 9,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1481: { slidesPerView: 9 },
				1400: { slidesPerView: 8 },
				1280: { slidesPerView: 7 },
				1199: { slidesPerView: 7 },
				991: { slidesPerView: 6 },
				768: { slidesPerView: 5 },
				320: { slidesPerView: 3 },
			},
		});
	};

	// handleServicesSwiper Swiper ==
	const handleServiceSwiper = () => {
		const swiperEl = document.querySelector('.service-swiper');
		if (!swiperEl) return;

		const serviceSwiper = new Swiper('.service-swiper', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 3,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1481: { slidesPerView: 3 },
				1200: { slidesPerView: 3 },
				1024: { slidesPerView: 2 },
				991: { slidesPerView: 2 },
				768: { slidesPerView: 2 },
				576: { slidesPerView: 2 },
				320: { slidesPerView: 1 },
			},
			navigation: {
				nextEl: ".service-button-next",
				prevEl: ".service-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: (index, className) => `<span class="${className}">0${index + 1}</span>`,
			},
		});
	};

	const handleServiceSwiper2 = () => {
		const swiperEl = document.querySelector('.service-swiper2');
		if (!swiperEl) return;

		const serviceSwiper2 = new Swiper('.service-swiper2', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
			    delay: 3000,
			    disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".service-button-next",
				prevEl: ".service-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: (index, className) => `<span class="${className}">0${index + 1}</span>`,
			},
		});
	};
	// Portfolio Slider
	if (jQuery('.portfolio-slider').length > 0) {
		const swiper = new Swiper('.portfolio-slider', {
			speed: 1500,
			slidesPerView: 6.5,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				delay: 2000
			},
			breakpoints: {
				1600: {
					slidesPerView: 6.5
				},
				1480: {
					slidesPerView: 7
				},
				768: {
					slidesPerView: 4
				},
				320: {
					slidesPerView: 2
				}
			}
		});
	}
	const initSliders = () => {
		const dzThumbSliderEl = document.querySelector('.dzThumbSlider');
		const dzThumbPreviewEl = document.querySelector('.dzThumbPreview');

		if (!dzThumbSliderEl || !dzThumbPreviewEl) return;

		const thumbSwiper = new Swiper(".dzThumbSlider", {
			spaceBetween: 10,
			slidesPerView: 9,
			freeMode: true,
			loop: true,
			watchSlidesProgress: true,
			breakpoints: {
				1680: { slidesPerView: 9 },
				1480: { slidesPerView: 6 },
				1280: { slidesPerView: 6 },
				991: { slidesPerView: 6 },
				768: { slidesPerView: 5 },
				320: { slidesPerView: 3 },
			},
		});

		const previewSwiper = new Swiper(".dzThumbPreview", {
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: thumbSwiper,
			},
			pagination: {
				el: ".testimonial-pagination-swiper",
				clickable: true,
			},
		});
	};

	let heroSwiperInitialized = false;
	let heroEffectInstance = null;
	let thumbsSwiperInstance = null;
	let mainSwiperInstance = null;

	const handleHeroBannerSwiper = () => {
		const sliderEl = document.querySelector(".hero-banner-swiper");
		const parentEl = document.querySelector(".hero-effect-container");

		if (!sliderEl || !parentEl || heroSwiperInitialized) return;

		const slides = sliderEl.querySelectorAll(".swiper-slide");
		if (!slides.length) return;

		heroSwiperInitialized = true;

		/* hoverEffect safe init */
		if (slides[0].dataset.img1 && slides[0].dataset.img2) {
			heroEffectInstance = new hoverEffect({
				parent: parentEl,
				intensity: 0.6,
				image1: slides[0].dataset.img1,
				image2: slides[0].dataset.img2,
				displacementImage: "../physiotherapy/images/1.jpg",
				speedIn: 0.7,
				speedOut: 0.7,
				hover: false,
			});
		}

		/* thumbs swiper */
		const thumbsEl = document.querySelector(".hero-banner-swiper-thumbs");
		if (thumbsEl) {
			thumbsSwiperInstance = new Swiper(thumbsEl, {
				slidesPerView: 4,
				spaceBetween: 30,
				freeMode: true,
				watchSlidesProgress: true,
				breakpoints: {
					1481: { slidesPerView: 4, spaceBetween: 30 },
					1200: { slidesPerView: 3, spaceBetween: 30 },
					1024: { slidesPerView: 2, spaceBetween: 15 },
					576: { slidesPerView: 2, spaceBetween: 15 },
					320: { slidesPerView: 1, spaceBetween: 15 },
				},
			});
		}

		/* main swiper */
		mainSwiperInstance = new Swiper(sliderEl, {
			effect: "fade",
			fadeEffect: { crossFade: false },
			navigation: {
				nextEl: ".hero-banner-button-next",
				prevEl: ".hero-banner-button-prev",
			},
			thumbs: thumbsSwiperInstance ? { swiper: thumbsSwiperInstance } : undefined,
		});

		/* pagination */
		const currentEl = document.querySelector(".hero-banner-slider__current");
		const totalEl = document.querySelector(".hero-banner-slider__total");

		const updatePagination = () => {
			const total = slides.length;
			const current = mainSwiperInstance.realIndex + 1;

			if (currentEl) currentEl.textContent = current < 10 ? `0${current}` : current;
			if (totalEl) totalEl.textContent = total < 10 ? `0${total}` : total;
		};

		mainSwiperInstance.on("slideChangeTransitionStart", () => {
			const i = mainSwiperInstance.activeIndex;
			const slide = slides[i];

			if (heroEffectInstance && slide?.dataset.img1 && slide?.dataset.img2) {
				heroEffectInstance.forceTransition(
					slide.dataset.img1,
					slide.dataset.img2
				);
			}
		});

		mainSwiperInstance.on("slideChange", updatePagination);
		updatePagination();
	};
	const handleTeamSwiper2 = () => {
		const imageEl = document.querySelector(".team-image-swiper");
		const contentEl = document.querySelector(".team-content-swiper");

		if (!imageEl || !contentEl) return;

		const imageSwiper = new Swiper(imageEl, {
			slidesPerView: 1.4,
			spaceBetween: 15,
			speed: 800,
			allowTouchMove: true,
			watchSlidesProgress: true,
			slideToClickedSlide: true,
			loopAdditionalSlides: 2,
			loopPreventsSliding: true,
			loop: true,
			breakpoints: {
				591: {
					slidesPerView: 1.9,
				},
				992: {
					slidesPerView: 2.05,
				},
			},
		});

		const contentSwiper = new Swiper(contentEl, {
			slidesPerView: 1,
			speed: 800,
			allowTouchMove: true,
			watchSlidesProgress: true,
			loop: true,
		});

		imageSwiper.controller.control = contentSwiper;
		contentSwiper.controller.control = imageSwiper;
	};
	const handleTeamSwiper3 = () => {
		const imageEl = document.querySelector(".team-image-swiper-2");
		const contentEl = document.querySelector(".team-content-swiper-2");

		if (!imageEl || !contentEl) return;

		const imageSwiper2 = new Swiper(imageEl, {
			slidesPerView: 1.4,
			spaceBetween: 15,
			speed: 800,
			allowTouchMove: true,
			watchSlidesProgress: true,
			loop: true,
			breakpoints: {
				591: {
					slidesPerView: 1.9,
				},
				992: {
					slidesPerView: 1.68,
				},
			},
		});

		const contentSwiper2 = new Swiper(contentEl, {
			slidesPerView: 1,
			speed: 800,
			allowTouchMove: true,
			watchSlidesProgress: true,
			loop: true,
		});

		imageSwiper2.controller.control = contentSwiper2;
		contentSwiper2.controller.control = imageSwiper2;
	};

	const handleServiceSwiper3 = () => {
		if (jQuery('.service-swiper3').length > 0) {
			const swiper = new Swiper('.service-swiper3', {
				speed: 1500,
				parallax: true,
				slidesPerView: 3.7,
				spaceBetween: 20,
				loop: true,
				autoplay: {
					delay: 1500,
					disableOnInteraction: false
				},
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				breakpoints: {
					1400: {
						slidesPerView: 3.7,
						spaceBetween: 30
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					1024: {
						slidesPerView: 2.5,
						spaceBetween: 15
					},
					991: {
						slidesPerView: 2,
						spaceBetween: 15
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 15
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 15
					},
					340: {
						slidesPerView: 1,
						spaceBetween: 15
					}
				}
			});

			swiper.el.addEventListener("mouseenter", () => {
				swiper.autoplay.stop();
			});

			swiper.el.addEventListener("mouseleave", () => {
				swiper.autoplay.start();
			});
		}
	};

	const handleTestimonialSwiper9 = () => {
		const sliderEl = document.querySelector(".testimonial-swiper9");

		if (sliderEl) {
			const testimonialSwiper9 = new Swiper(".testimonial-swiper9", {
				loop: true,
				spaceBetween: 25,
				slidesPerView: 1,
				autoplay: {
				delay: 3000,
				},
				centeredSlides: true,
				breakpoints: {
					1481: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2.5,
					},
					767: {
						slidesPerView: 2,
					},
				},
			});
		}
	};

	/* Function ============ */
	return {
		init: function () {
			handleTestimonialSwiper1();
			handleTestimonialSwiper2();
			handleTestimonialSwiper3();
			handleTestimonialSwiper4();
			handleTestimonialSwiper5();
			handleTestimonialSwiper6();
			handleTestimonialSwiper7();
			handleTestimonialSwiper8();
			handleTestimonialSwiper9();
			handleAwardSlider();
			handleDzTeamSwiper1();
			handleClientSwiper();
			handleClientSwiper2();
			handleVerticalSwiper();
			handleVerticalSwiper2();
			handleDzFlexSwiper();
			handleCompareSwiper();
			handleCompareSwiper2();
			handleDummySwiper();
			handleServiceSwiper();
			handleServiceSwiper2();
			handleServiceSwiper3();
			initSliders();
			handleClientSwiper3();
			handleHeroBannerSwiper();
			handleTeamSwiper2();
			handleTeamSwiper3();
		},

		load: function () {

		},

		resize: function () {
			handleVerticalSwiper();
		}
	}

}();


/* Document.ready Start */
jQuery(document).ready(function () {
	'use strict';

	ClinicMasterCarousel.init();


});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load', function () {
	'use strict';
	ClinicMasterCarousel.load();


});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize', function () {
	'use strict';
	ClinicMasterCarousel.resize();
});
/*  Window Resize END */