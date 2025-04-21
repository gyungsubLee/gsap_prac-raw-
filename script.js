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
            // markers: true
        })
    })

    // con5 listBox li hover 시 해당하는 이미지 보이는 애니메이션
    const listBox = document.querySelectorAll('.con5 .listBox li');
    const imgBox = document.querySelector('.con5 .imgBox');
    const img = document.querySelector('.con5 .imgBox img');

    for(let i = 0; i < listBox.length; i++) {
        listBox[i].addEventListener('mouseenter', () => {
            img.src =`images/img${i}.jpg`;

            gsap.fromTo(imgBox, 
                {scale: 0, opacity: 0},  
                {scale: 1, opacity: 1, duration: 0.3}
            );
        });

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        listBox.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                mouseX = e.pageX + 20;
                mouseY = e.pageY - 230;
            });
        });

        // 딜레이 모션
        gsap.ticker.add(() => {
            currentX += (mouseX - currentX) * 0.2;  // 0.2는 따라오는 정도 (0.1 ~ 0.3 추천)
            currentY += (mouseY - currentY) * 0.2;
            
            gsap.set(imgBox, {
                left: currentX,
                top: currentY
            });
        });
        
        listBox[i].addEventListener('mouseleave', () => {
            gsap.to(imgBox, {scale:0, opacity:0, duration:.3})
        });
    }

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con5',
            start: '0% 100%',
            end: '100% 0%',
            toggleClass: {targets: '.wrap', className: 'on'}
        }
    })

    // con 5 - 메뉴바 색상 변경
    const header = document.querySelector('header');

    ScrollTrigger.create({
        trigger: '.con5',
        start: 'top top',
        end: 'bottom top',
        onEnter: () => header.classList.add('white-section-active'),
        onLeave: () => header.classList.remove('white-section-active'), 
        onEnterBack: () => header.classList.add('white-section-active'),
        onLeaveBack: () => header.classList.remove('white-section-active'),
        markers: true
    })

    


    // footer 로고 애니메이션
    gsap .registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: '-150px 50%',
            end: '80% 80%',
            scrub: 1, 
        //    markers: true
        }
    })
    .fromTo('footer .logoWrap #j', {x: -300, y: 400, rotate: 20, z: -20, scale: 0.8}, {x: -50, y: 150, rotate: 20, scale: 1,ease: 'none', duration: 5}, 0)  
    .fromTo('footer .logoWrap #y', {x: -100, y: 200, rotate: -10, z: -20, scale: 0.8}, {x: 20, y: 50, rotate: -10, scale: 1,  ease: 'none', duration: 5}, 0)  
    .fromTo('footer .logoWrap #o', {x: 0, y: 400, z: -100,  rotate: 0, scale: 0.8}, {x: 0, y: 500, rotate: 0, scale: 1, ease: 'none', duration: 5}, 0)  
    .fromTo('footer .logoWrap #u', {x: 150, y: 450, rotate: 10, z: -20, scale: 0.8}, {x: 50, y: 350, rotate: 10, scale: 1, ease: 'none', duration: 5}, 0)  
    .fromTo('footer .logoWrap #n', {x: 300, y: 300, rotate: -10, z: -20, scale: 0.8}, {x: 100, y: 100, rotate: -10, scale: 1, ease: 'none', duration: 5}, 0)  


    // footer 메인 텍스트 애니메이션
    gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: '0 20%',
            end: '20% 20%',
            // toggleActions: 'play none none ',
            scrub: 1, 
            // markers: true
        }
    })
   .fromTo('.box .mainTextBox h2', {y: 500 }, {y: 0, ease:'none', ease: 'none', duration: 5}, 0)

    gsap.timeline({
        scrollTrigger: {
            trigger: 'con6',
            start: '40% 40%',
            end: '50% 50%'
        }
    })
}