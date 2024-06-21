var crsr=document.querySelector("#cursor")
var crsrblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x-10+"px"
   crsr.style.top=dets.y-10+"px"
   crsrblur.style.left=dets.x-110+"px"
   crsrblur.style.top=dets.y-110+"px"
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
        scrub:1  //repeat gardinxa, mathi gayesi feri original jasto hunxa (loop kinda)
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
        scrub:1    //aba mathi scroll grda pahile kai jsto hunxa (scroll ko basis ma change hunxa)
    }
})