const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
function firstPageAnim(){
    var tl = gsap.timeline();
    
    tl.from("#nev",{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo
    })
    
    tl.to(".boundingelem",{
        y: 0,
        duration: 1.5,
        stagger :.2,
        ease: Expo.easeInOut,
    })

    tl.from("#detals",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

firstPageAnim();
circleMouseFollower();