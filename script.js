window.onload = function() {
    // 01 gnb 애니메이션
    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', function() {
        menuBox.classList.toggle('on');
    });
    
   // 02 visual
   gsap .registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: '.visual',
            start: '100% 100%',
            end: '100% 0',
            scrub: 1,
            // markers: true
        }
    })
    .to('.logoWrap #j', {x: -150, y: 250, rotate: 20, ease: 'none', duration: 5}, 0)  
    .to('.logoWrap #y', {x: 30, y: 150, rotate: -10, ease: 'none', duration: 5}, 0)  
    .to('.logoWrap #o', {x: 0, y: 400, rotate: -10, ease: 'none', duration: 5}, 0)  
    .to('.logoWrap #u', {x: 50, y: 300, rotate: 10, ease: 'none', duration: 5}, 0)  
    .to('.logoWrap #n', {x: 100, y: 100, rotate: -10, ease: 'none', duration: 5}, 0)  
    .to('.logoWrap #g', {x: 50, y: 450, rotate: -20, ease: 'none', duration: 5}, 0)  

    
    //  mainText - 애니메이션
    gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
                // markers: true,
            }
        })
        .fromTo(selector, {overflow: 'hidden', y:150}, {y:0, ease: 'none', duration: 5}, 0)
    })
    

    // subText - 애니메이션
    gsap.utils.toArray('.subText p').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '0% 100%',
                end: '100% 100%',
                scrub: 1,
                // markers: true
            }
        })
        .fromTo(
            selector,
            {overflow: 'hidden', x: 20, opacity: 0},
            {x:0, opacity: 1, ease: 'none', duration: 5},
            0)
    });


    // con1 textAni - 텍스트 체인지 애니메이션
    const textAniList = document.querySelectorAll('.con1 .textAni li');
    const textAni = gsap.timeline({repeat: -1}); // 무한 반복

    textAniList.forEach((selector)=> {
        textAni.to(selector, 0.8, {opacity: 1, repeat: 1, delay: 0, x: 0, yoyo:true, ease: 'power4.out'})
    })

    textAni.play();


    // con4 CardBox - z 축 애니메이션
    gsap.utils.toArray('.con4 .listBox .cardBox').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '0% 20%',
                end: '0% 0%',
                scrub: 1,
                // markers: true
            }
        })
        .to( selector, { rotateX: -10, scale: 0.9, transformOrigin: 'top', filter: 'brightness(0.3)'}, 0 )
    })

    // con3 listBox Box 애니메이션
    gsap.utils.toArray('.con3 .listBox li').forEach((selector, idx) => {
        ScrollTrigger.create({
            trigger: selector,
            start: '20% 80%',
            onEnter: () => {
                gsap.set(selector, {
                    rotationX: '-65deg',
                    z: '-500px',
                    opacity: 0
                }),
                gsap.to(selector, {
                    rotationX: 0,
                    z: 0,
                    opacity: 1,
                    delay: idx % 3 * .05
                })
            },
            markers: true
        })
    })
}