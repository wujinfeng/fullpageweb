$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['section1', 'section2', 'section3', 'section4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['第一屏', '第二屏', '第三屏', '第四屏'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 800,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        //sectionsColor : ['#ccc', '#fff', '#f90', '#9f0'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true
    });
});