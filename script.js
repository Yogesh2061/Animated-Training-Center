var crsr=document.querySelector("#cursor")
var crsrblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x-10+"px"
   crsr.style.top=dets.y-10+"px"
   crsrblur.style.left=dets.x-110+"px"
   crsrblur.style.top=dets.y-110+"px"
})

var navelem = document.querySelectorAll("#nav")
navelem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px soild #fff"
        crsr.style.backgroundColor="transparent"
    })
})

navelem.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px soild rgb(252, 252, 252)"
        crsr.style.backgroundColor="rgb(252, 252, 252)"
    })
})

gsap.to("#nav",{
    backgroundColor:"#2B2A2A ",             //object
    duration:0.5,
    height:"74px",
    scrollTrigger:{
        trigeer:"#nav",
        scroller:"body",
        start:"top -10%",             //mathi ko properties afai nalagos , scrolling ko basis ma lagos vnxa scrltrgr ley.
        end:"top -11%",
          //repeat gardinxa, mathi gayesi feri original jasto hunxa (loop kinda)
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end: "top -100%",
        scrub:1   //aba mathi scroll grda pahile kai jsto hunxa (scroll ko basis ma change hunxa)
    }
})

gsap.from("#about-us img ",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }    
})

gsap.from(".card",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4
    }    
})