$(document).ready(function () {
    // $('#scroll-link-div').css('opacity', 0);
    // $('#about-heading').css('opacity', 0);
    $('#about-img').css('opacity', 0);
    $('#about-item').css('opacity', 0);
    // $('#skills-heading').css('opacity', 0);
    $('#skills-content').css('opacity', 0);
    // $('#skills-col1').css('opacity', 0);
    // $('#skills-col2').css('opacity', 0);
    // $('#skills-col3').css('opacity', 0);
    $('#skills-footer').css('opacity', 0);
    // $('#projects-heading').css('opacity', 0);
    $('#p1-img1').css('opacity', 0);
    $('#p1-img2').css('opacity', 0);
    $('#p1-img3').css('opacity', 0);
    $('#p2-img1').css('opacity', 0);
    $('#p2-img2').css('opacity', 0);
    $('#p2-img3').css('opacity', 0);
    $('#p3-img1').css('opacity', 0);
    $('#p3-img2').css('opacity', 0);
    $('#p4-img1').css('opacity', 0);
    $('#p4-img2').css('opacity', 0);
    $('#p5-img1').css('opacity', 0);
    $('#p5-img2').css('opacity', 0);
    $('#p5-img3').css('opacity', 0);
    $('#p6-img1').css('opacity', 0);


    let scrollLink = new Waypoint({
        element: document.getElementById('chevron'),
        handler: function () {
            scrollLink.element.classList.add('pulse');
            scrollLink.element.classList.add('slow');
        }
    });

    // let aboutHeading = new Waypoint({
    //     element: document.getElementById('about-heading'),
    //     handler: function () {
    //         aboutHeading.element.classList.add('fadeInLeft');
    //         aboutHeading.element.classList.add('duration-2s');
    //     },
    //     offset: '80%'
    // });

    let aboutImg = new Waypoint({
        element: document.getElementById('about-img'),
        handler: function () {
            aboutImg.element.classList.add('fadeInLeft');
            aboutImg.element.classList.add('slow');
        },
        offset: '80%'
    });

    let aboutItem = new Waypoint({
        element: document.getElementById('about-item'),
        handler: function () {
            aboutItem.element.classList.add('fadeInRight');
            aboutItem.element.classList.add('slow');
        },
        offset: '80%'
    });

    // let skillsHeading = new Waypoint({
    //     element: document.getElementById('skills-heading'),
    //     handler: function () {
    //         skillsHeading.element.classList.add('fadeInLeft');
    //         skillsHeading.element.classList.add('duration-2s');
    //     },
    //     offset: '80%'
    // });

    let skillsContent = new Waypoint({
        element: document.getElementById('skills-content'),
        handler: function () {
            skillsContent.element.classList.add('fadeInUp');
            skillsContent.element.classList.add('slow');
        },
        offset: '90%'
    });

    // let skillsCol1 = new Waypoint({
    //     element: document.getElementById('skills-col1'),
    //     handler: function () {
    //         skillsCol1.element.classList.add('fadeInUp');
    //         skillsCol1.element.classList.add('slow');
    //     },
    //     offset: '90%'
    // });

    // let skillsCol2 = new Waypoint({
    //     element: document.getElementById('skills-col2'),
    //     handler: function () {
    //         skillsCol2.element.classList.add('fadeInUp');
    //         skillsCol2.element.classList.add('slow');
    //     },
    //     offset: '90%'
    // });

    // let skillsCol3 = new Waypoint({
    //     element: document.getElementById('skills-content'),
    //     handler: function () {
    //         skillsCol3.element.classList.add('fadeInUp');
    //         skillsCol3.element.classList.add('slow');
    //     },
    //     offset: '90%'
    // });

    let skillsFooter = new Waypoint({
        element: document.getElementById('skills-footer'),
        handler: function () {
            skillsFooter.element.classList.add('fadeInUp');
            skillsFooter.element.classList.add('slow');
        },
        offset: '90%'
    });

    // let projectsHeading = new Waypoint({
    //     element: document.getElementById('projects-heading'),
    //     handler: function () {
    //         projectsHeading.element.classList.add('fadeInLeft');
    //         projectsHeading.element.classList.add('duration-2s');
    //     },
    //     offset: '80%'
    // });

    let p1Img1 = new Waypoint({
        element: document.getElementById('p1-img1'),
        handler: function () {
            p1Img1.element.classList.add('rotateInDownLeft');
            p1Img1.element.classList.add('fast');
        },
        offset: '80%'
    });

    let p1Img2 = new Waypoint({
        element: document.getElementById('p1-img2'),
        handler: function () {
            p1Img2.element.classList.add('rotateInDownLeft');
            // p1Img2.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p1Img3 = new Waypoint({
        element: document.getElementById('p1-img3'),
        handler: function () {
            p1Img3.element.classList.add('rotateInDownLeft');
            p1Img3.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p2Img1 = new Waypoint({
        element: document.getElementById('p2-img1'),
        handler: function () {
            p2Img1.element.classList.add('rotateInDownLeft');
            p2Img1.element.classList.add('fast');
        },
        offset: '80%'
    });

    let p2Img2 = new Waypoint({
        element: document.getElementById('p2-img2'),
        handler: function () {
            p2Img2.element.classList.add('rotateInDownLeft');
            // p2Img2.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p2Img3 = new Waypoint({
        element: document.getElementById('p2-img3'),
        handler: function () {
            p2Img3.element.classList.add('rotateInDownLeft');
            p2Img3.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p3Img1 = new Waypoint({
        element: document.getElementById('p3-img1'),
        handler: function () {
            p3Img1.element.classList.add('rotateInDownLeft');
            p3Img1.element.classList.add('fast');
        },
        offset: '80%'
    });

    let p3Img2 = new Waypoint({
        element: document.getElementById('p3-img2'),
        handler: function () {
            p3Img2.element.classList.add('rotateInDownLeft');
            p3Img2.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p4Img1 = new Waypoint({
        element: document.getElementById('p4-img1'),
        handler: function () {
            p4Img1.element.classList.add('rotateInDownLeft');
            p4Img1.element.classList.add('fast');
        },
        offset: '80%'
    });

    let p4Img2 = new Waypoint({
        element: document.getElementById('p4-img2'),
        handler: function () {
            p4Img2.element.classList.add('rotateInDownLeft');
            p4Img2.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p5Img1 = new Waypoint({
        element: document.getElementById('p5-img1'),
        handler: function () {
            p5Img1.element.classList.add('rotateInDownLeft');
            p5Img1.element.classList.add('fast');
        },
        offset: '80%'
    });

    let p5Img2 = new Waypoint({
        element: document.getElementById('p5-img2'),
        handler: function () {
            p5Img2.element.classList.add('rotateInDownLeft');
            // p5Img2.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p5Img3 = new Waypoint({
        element: document.getElementById('p5-img3'),
        handler: function () {
            p5Img3.element.classList.add('rotateInDownLeft');
            p5Img3.element.classList.add('slow');
        },
        offset: '80%'
    });

    let p6Img1 = new Waypoint({
        element: document.getElementById('p6-img1'),
        handler: function () {
            p6Img1.element.classList.add('rotateInDownLeft');
            // p6Img1.element.classList.add('fast');
        },
        offset: '80%'
    });

    

});

