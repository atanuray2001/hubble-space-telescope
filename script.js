function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();


function canvas1(){
  const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./canvas_img/earth_-_28531 (Original)000.png
  ./canvas_img/earth_-_28531 (Original)001.png
  ./canvas_img/earth_-_28531 (Original)002.png
  ./canvas_img/earth_-_28531 (Original)003.png
  ./canvas_img/earth_-_28531 (Original)004.png
  ./canvas_img/earth_-_28531 (Original)005.png
  ./canvas_img/earth_-_28531 (Original)006.png
  ./canvas_img/earth_-_28531 (Original)007.png
  ./canvas_img/earth_-_28531 (Original)008.png
  ./canvas_img/earth_-_28531 (Original)009.png
  ./canvas_img/earth_-_28531 (Original)010.png
  ./canvas_img/earth_-_28531 (Original)011.png
  ./canvas_img/earth_-_28531 (Original)012.png
  ./canvas_img/earth_-_28531 (Original)013.png
  ./canvas_img/earth_-_28531 (Original)014.png
  ./canvas_img/earth_-_28531 (Original)015.png
  ./canvas_img/earth_-_28531 (Original)016.png
  ./canvas_img/earth_-_28531 (Original)017.png
  ./canvas_img/earth_-_28531 (Original)018.png
  ./canvas_img/earth_-_28531 (Original)019.png
  ./canvas_img/earth_-_28531 (Original)020.png
  ./canvas_img/earth_-_28531 (Original)021.png
  ./canvas_img/earth_-_28531 (Original)022.png
  ./canvas_img/earth_-_28531 (Original)023.png
  ./canvas_img/earth_-_28531 (Original)024.png
  ./canvas_img/earth_-_28531 (Original)025.png
  ./canvas_img/earth_-_28531 (Original)026.png
  ./canvas_img/earth_-_28531 (Original)027.png
  ./canvas_img/earth_-_28531 (Original)028.png
  ./canvas_img/earth_-_28531 (Original)029.png
  ./canvas_img/earth_-_28531 (Original)030.png
  ./canvas_img/earth_-_28531 (Original)031.png
  ./canvas_img/earth_-_28531 (Original)032.png
  ./canvas_img/earth_-_28531 (Original)033.png
  ./canvas_img/earth_-_28531 (Original)034.png
  ./canvas_img/earth_-_28531 (Original)035.png
  ./canvas_img/earth_-_28531 (Original)036.png
  ./canvas_img/earth_-_28531 (Original)037.png
  ./canvas_img/earth_-_28531 (Original)038.png
  ./canvas_img/earth_-_28531 (Original)039.png
  ./canvas_img/earth_-_28531 (Original)040.png
  ./canvas_img/earth_-_28531 (Original)041.png
  ./canvas_img/earth_-_28531 (Original)042.png
  ./canvas_img/earth_-_28531 (Original)043.png
  ./canvas_img/earth_-_28531 (Original)044.png
  ./canvas_img/earth_-_28531 (Original)045.png
  ./canvas_img/earth_-_28531 (Original)046.png
  ./canvas_img/earth_-_28531 (Original)047.png
  ./canvas_img/earth_-_28531 (Original)048.png
  ./canvas_img/earth_-_28531 (Original)049.png
  ./canvas_img/earth_-_28531 (Original)050.png
  ./canvas_img/earth_-_28531 (Original)051.png
  ./canvas_img/earth_-_28531 (Original)052.png
  ./canvas_img/earth_-_28531 (Original)053.png
  ./canvas_img/earth_-_28531 (Original)054.png
  ./canvas_img/earth_-_28531 (Original)055.png
  ./canvas_img/earth_-_28531 (Original)056.png
  ./canvas_img/earth_-_28531 (Original)057.png
  ./canvas_img/earth_-_28531 (Original)058.png
  ./canvas_img/earth_-_28531 (Original)059.png
  ./canvas_img/earth_-_28531 (Original)060.png
  ./canvas_img/earth_-_28531 (Original)061.png
  ./canvas_img/earth_-_28531 (Original)062.png
  ./canvas_img/earth_-_28531 (Original)063.png
  ./canvas_img/earth_-_28531 (Original)064.png
  ./canvas_img/earth_-_28531 (Original)065.png
  ./canvas_img/earth_-_28531 (Original)066.png
  ./canvas_img/earth_-_28531 (Original)067.png
  ./canvas_img/earth_-_28531 (Original)068.png
  ./canvas_img/earth_-_28531 (Original)069.png
  ./canvas_img/earth_-_28531 (Original)070.png
  ./canvas_img/earth_-_28531 (Original)071.png
  ./canvas_img/earth_-_28531 (Original)072.png
  ./canvas_img/earth_-_28531 (Original)073.png
  ./canvas_img/earth_-_28531 (Original)074.png
  ./canvas_img/earth_-_28531 (Original)075.png
  ./canvas_img/earth_-_28531 (Original)076.png
  ./canvas_img/earth_-_28531 (Original)077.png
  ./canvas_img/earth_-_28531 (Original)078.png
  ./canvas_img/earth_-_28531 (Original)079.png
  ./canvas_img/earth_-_28531 (Original)080.png
  ./canvas_img/earth_-_28531 (Original)081.png
  ./canvas_img/earth_-_28531 (Original)082.png
  ./canvas_img/earth_-_28531 (Original)083.png
  ./canvas_img/earth_-_28531 (Original)084.png
  ./canvas_img/earth_-_28531 (Original)085.png
  ./canvas_img/earth_-_28531 (Original)086.png
  ./canvas_img/earth_-_28531 (Original)087.png
  ./canvas_img/earth_-_28531 (Original)088.png
  ./canvas_img/earth_-_28531 (Original)089.png
  ./canvas_img/earth_-_28531 (Original)090.png
  ./canvas_img/earth_-_28531 (Original)091.png
  ./canvas_img/earth_-_28531 (Original)092.png
  ./canvas_img/earth_-_28531 (Original)093.png
  ./canvas_img/earth_-_28531 (Original)094.png
  ./canvas_img/earth_-_28531 (Original)095.png
  ./canvas_img/earth_-_28531 (Original)096.png
  ./canvas_img/earth_-_28531 (Original)097.png
  ./canvas_img/earth_-_28531 (Original)098.png
  ./canvas_img/earth_-_28531 (Original)099.png
  ./canvas_img/earth_-_28531 (Original)100.png
  ./canvas_img/earth_-_28531 (Original)101.png
  ./canvas_img/earth_-_28531 (Original)102.png
  ./canvas_img/earth_-_28531 (Original)103.png
  ./canvas_img/earth_-_28531 (Original)104.png
  ./canvas_img/earth_-_28531 (Original)105.png
  ./canvas_img/earth_-_28531 (Original)106.png
  ./canvas_img/earth_-_28531 (Original)107.png
  ./canvas_img/earth_-_28531 (Original)108.png
  ./canvas_img/earth_-_28531 (Original)109.png
  ./canvas_img/earth_-_28531 (Original)110.png
  ./canvas_img/earth_-_28531 (Original)111.png
  ./canvas_img/earth_-_28531 (Original)112.png
  ./canvas_img/earth_-_28531 (Original)113.png
  ./canvas_img/earth_-_28531 (Original)114.png
  ./canvas_img/earth_-_28531 (Original)115.png
  ./canvas_img/earth_-_28531 (Original)116.png
  ./canvas_img/earth_-_28531 (Original)117.png
  ./canvas_img/earth_-_28531 (Original)118.png
  ./canvas_img/earth_-_28531 (Original)119.png
  ./canvas_img/earth_-_28531 (Original)120.png
  ./canvas_img/earth_-_28531 (Original)121.png
  ./canvas_img/earth_-_28531 (Original)122.png
  ./canvas_img/earth_-_28531 (Original)123.png
  ./canvas_img/earth_-_28531 (Original)124.png
  ./canvas_img/earth_-_28531 (Original)125.png
  ./canvas_img/earth_-_28531 (Original)126.png
  ./canvas_img/earth_-_28531 (Original)127.png
  ./canvas_img/earth_-_28531 (Original)128.png
  ./canvas_img/earth_-_28531 (Original)129.png
  ./canvas_img/earth_-_28531 (Original)130.png
  ./canvas_img/earth_-_28531 (Original)131.png
  ./canvas_img/earth_-_28531 (Original)132.png
  ./canvas_img/earth_-_28531 (Original)133.png
  ./canvas_img/earth_-_28531 (Original)134.png
  ./canvas_img/earth_-_28531 (Original)135.png
  ./canvas_img/earth_-_28531 (Original)136.png
  ./canvas_img/earth_-_28531 (Original)137.png
  ./canvas_img/earth_-_28531 (Original)138.png
  ./canvas_img/earth_-_28531 (Original)139.png
  ./canvas_img/earth_-_28531 (Original)140.png
  ./canvas_img/earth_-_28531 (Original)141.png
  ./canvas_img/earth_-_28531 (Original)142.png
  ./canvas_img/earth_-_28531 (Original)143.png
  ./canvas_img/earth_-_28531 (Original)144.png
  ./canvas_img/earth_-_28531 (Original)145.png
  ./canvas_img/earth_-_28531 (Original)146.png
  ./canvas_img/earth_-_28531 (Original)147.png
  ./canvas_img/earth_-_28531 (Original)148.png
  ./canvas_img/earth_-_28531 (Original)149.png
  ./canvas_img/earth_-_28531 (Original)150.png
  ./canvas_img/earth_-_28531 (Original)151.png
  ./canvas_img/earth_-_28531 (Original)152.png
  ./canvas_img/earth_-_28531 (Original)153.png
  ./canvas_img/earth_-_28531 (Original)154.png
  ./canvas_img/earth_-_28531 (Original)155.png
  ./canvas_img/earth_-_28531 (Original)156.png
  ./canvas_img/earth_-_28531 (Original)157.png
  ./canvas_img/earth_-_28531 (Original)158.png
  ./canvas_img/earth_-_28531 (Original)159.png
  ./canvas_img/earth_-_28531 (Original)160.png
  ./canvas_img/earth_-_28531 (Original)161.png
  ./canvas_img/earth_-_28531 (Original)162.png
  ./canvas_img/earth_-_28531 (Original)163.png
  ./canvas_img/earth_-_28531 (Original)164.png
  ./canvas_img/earth_-_28531 (Original)165.png
  ./canvas_img/earth_-_28531 (Original)166.png
  ./canvas_img/earth_-_28531 (Original)167.png
  ./canvas_img/earth_-_28531 (Original)168.png
  ./canvas_img/earth_-_28531 (Original)169.png
  ./canvas_img/earth_-_28531 (Original)170.png
  ./canvas_img/earth_-_28531 (Original)171.png
  ./canvas_img/earth_-_28531 (Original)172.png
  ./canvas_img/earth_-_28531 (Original)173.png
  ./canvas_img/earth_-_28531 (Original)174.png
  ./canvas_img/earth_-_28531 (Original)175.png
  ./canvas_img/earth_-_28531 (Original)176.png
  ./canvas_img/earth_-_28531 (Original)177.png
  ./canvas_img/earth_-_28531 (Original)178.png
  ./canvas_img/earth_-_28531 (Original)179.png
  ./canvas_img/earth_-_28531 (Original)180.png
  ./canvas_img/earth_-_28531 (Original)181.png
  ./canvas_img/earth_-_28531 (Original)182.png
  ./canvas_img/earth_-_28531 (Original)183.png
  ./canvas_img/earth_-_28531 (Original)184.png
  ./canvas_img/earth_-_28531 (Original)185.png
  ./canvas_img/earth_-_28531 (Original)186.png
  ./canvas_img/earth_-_28531 (Original)187.png
  ./canvas_img/earth_-_28531 (Original)188.png
  ./canvas_img/earth_-_28531 (Original)189.png
  ./canvas_img/earth_-_28531 (Original)190.png
  ./canvas_img/earth_-_28531 (Original)191.png
  ./canvas_img/earth_-_28531 (Original)192.png
  ./canvas_img/earth_-_28531 (Original)193.png
  ./canvas_img/earth_-_28531 (Original)194.png
  ./canvas_img/earth_-_28531 (Original)195.png
  ./canvas_img/earth_-_28531 (Original)196.png
  ./canvas_img/earth_-_28531 (Original)197.png
  ./canvas_img/earth_-_28531 (Original)198.png
  ./canvas_img/earth_-_28531 (Original)199.png
  ./canvas_img/earth_-_28531 (Original)200.png
  ./canvas_img/earth_-_28531 (Original)201.png
  ./canvas_img/earth_-_28531 (Original)202.png
  ./canvas_img/earth_-_28531 (Original)203.png
  ./canvas_img/earth_-_28531 (Original)204.png
  ./canvas_img/earth_-_28531 (Original)205.png
  ./canvas_img/earth_-_28531 (Original)206.png
  ./canvas_img/earth_-_28531 (Original)207.png
  ./canvas_img/earth_-_28531 (Original)208.png
  ./canvas_img/earth_-_28531 (Original)209.png
  ./canvas_img/earth_-_28531 (Original)210.png
  ./canvas_img/earth_-_28531 (Original)211.png
  ./canvas_img/earth_-_28531 (Original)212.png
  ./canvas_img/earth_-_28531 (Original)213.png
  ./canvas_img/earth_-_28531 (Original)214.png
  ./canvas_img/earth_-_28531 (Original)215.png
  ./canvas_img/earth_-_28531 (Original)216.png
  ./canvas_img/earth_-_28531 (Original)217.png
  ./canvas_img/earth_-_28531 (Original)218.png
  ./canvas_img/earth_-_28531 (Original)219.png
  ./canvas_img/earth_-_28531 (Original)220.png
  ./canvas_img/earth_-_28531 (Original)221.png
  ./canvas_img/earth_-_28531 (Original)222.png
  ./canvas_img/earth_-_28531 (Original)223.png
  ./canvas_img/earth_-_28531 (Original)224.png
  ./canvas_img/earth_-_28531 (Original)225.png
  ./canvas_img/earth_-_28531 (Original)226.png
  ./canvas_img/earth_-_28531 (Original)227.png
  ./canvas_img/earth_-_28531 (Original)228.png
  ./canvas_img/earth_-_28531 (Original)229.png
  ./canvas_img/earth_-_28531 (Original)230.png
  ./canvas_img/earth_-_28531 (Original)231.png
  ./canvas_img/earth_-_28531 (Original)232.png
  ./canvas_img/earth_-_28531 (Original)233.png
  ./canvas_img/earth_-_28531 (Original)234.png
  ./canvas_img/earth_-_28531 (Original)235.png
  ./canvas_img/earth_-_28531 (Original)236.png
  ./canvas_img/earth_-_28531 (Original)237.png
  ./canvas_img/earth_-_28531 (Original)238.png
  ./canvas_img/earth_-_28531 (Original)239.png
  ./canvas_img/earth_-_28531 (Original)240.png
  ./canvas_img/earth_-_28531 (Original)241.png
  ./canvas_img/earth_-_28531 (Original)242.png
  ./canvas_img/earth_-_28531 (Original)243.png
  ./canvas_img/earth_-_28531 (Original)244.png
  ./canvas_img/earth_-_28531 (Original)245.png
  ./canvas_img/earth_-_28531 (Original)246.png
  ./canvas_img/earth_-_28531 (Original)247.png
  ./canvas_img/earth_-_28531 (Original)248.png
  ./canvas_img/earth_-_28531 (Original)249.png
  ./canvas_img/earth_-_28531 (Original)250.png
  ./canvas_img/earth_-_28531 (Original)251.png
  ./canvas_img/earth_-_28531 (Original)252.png
  ./canvas_img/earth_-_28531 (Original)253.png
  ./canvas_img/earth_-_28531 (Original)254.png
  ./canvas_img/earth_-_28531 (Original)255.png
  ./canvas_img/earth_-_28531 (Original)256.png
  ./canvas_img/earth_-_28531 (Original)257.png
  ./canvas_img/earth_-_28531 (Original)258.png
  ./canvas_img/earth_-_28531 (Original)259.png
  ./canvas_img/earth_-_28531 (Original)260.png
  ./canvas_img/earth_-_28531 (Original)261.png
  ./canvas_img/earth_-_28531 (Original)262.png
  ./canvas_img/earth_-_28531 (Original)263.png
  ./canvas_img/earth_-_28531 (Original)264.png
  ./canvas_img/earth_-_28531 (Original)265.png
  ./canvas_img/earth_-_28531 (Original)266.png
  ./canvas_img/earth_-_28531 (Original)267.png
  ./canvas_img/earth_-_28531 (Original)268.png
  ./canvas_img/earth_-_28531 (Original)269.png
  ./canvas_img/earth_-_28531 (Original)270.png
  ./canvas_img/earth_-_28531 (Original)271.png
  ./canvas_img/earth_-_28531 (Original)272.png
  ./canvas_img/earth_-_28531 (Original)273.png
  ./canvas_img/earth_-_28531 (Original)274.png
  ./canvas_img/earth_-_28531 (Original)275.png
  ./canvas_img/earth_-_28531 (Original)276.png
  ./canvas_img/earth_-_28531 (Original)277.png
  ./canvas_img/earth_-_28531 (Original)278.png
  ./canvas_img/earth_-_28531 (Original)279.png
  ./canvas_img/earth_-_28531 (Original)280.png
  ./canvas_img/earth_-_28531 (Original)281.png
  ./canvas_img/earth_-_28531 (Original)282.png
  ./canvas_img/earth_-_28531 (Original)283.png
  ./canvas_img/earth_-_28531 (Original)284.png
  ./canvas_img/earth_-_28531 (Original)285.png
  ./canvas_img/earth_-_28531 (Original)286.png
  ./canvas_img/earth_-_28531 (Original)287.png
  ./canvas_img/earth_-_28531 (Original)288.png
  ./canvas_img/earth_-_28531 (Original)289.png
  ./canvas_img/earth_-_28531 (Original)290.png
  ./canvas_img/earth_-_28531 (Original)291.png
  ./canvas_img/earth_-_28531 (Original)292.png
  ./canvas_img/earth_-_28531 (Original)293.png
  ./canvas_img/earth_-_28531 (Original)294.png
  ./canvas_img/earth_-_28531 (Original)295.png
  ./canvas_img/earth_-_28531 (Original)296.png
  ./canvas_img/earth_-_28531 (Original)297.png
  ./canvas_img/earth_-_28531 (Original)298.png
  ./canvas_img/earth_-_28531 (Original)299.png
  ./canvas_img/earth_-_28531 (Original)300.png
  ./canvas_img/earth_-_28531 (Original)301.png
  ./canvas_img/earth_-_28531 (Original)302.png
  ./canvas_img/earth_-_28531 (Original)303.png
  ./canvas_img/earth_-_28531 (Original)304.png
  ./canvas_img/earth_-_28531 (Original)305.png
  ./canvas_img/earth_-_28531 (Original)306.png
  ./canvas_img/earth_-_28531 (Original)307.png
  ./canvas_img/earth_-_28531 (Original)308.png
  ./canvas_img/earth_-_28531 (Original)309.png
  ./canvas_img/earth_-_28531 (Original)310.png
  ./canvas_img/earth_-_28531 (Original)311.png
  ./canvas_img/earth_-_28531 (Original)312.png
  ./canvas_img/earth_-_28531 (Original)313.png
  ./canvas_img/earth_-_28531 (Original)314.png
  ./canvas_img/earth_-_28531 (Original)315.png
  ./canvas_img/earth_-_28531 (Original)316.png
  ./canvas_img/earth_-_28531 (Original)317.png
  ./canvas_img/earth_-_28531 (Original)318.png
  ./canvas_img/earth_-_28531 (Original)319.png
  ./canvas_img/earth_-_28531 (Original)320.png
  ./canvas_img/earth_-_28531 (Original)321.png
  ./canvas_img/earth_-_28531 (Original)322.png
  ./canvas_img/earth_-_28531 (Original)323.png
  ./canvas_img/earth_-_28531 (Original)324.png
  ./canvas_img/earth_-_28531 (Original)325.png
  ./canvas_img/earth_-_28531 (Original)326.png
  ./canvas_img/earth_-_28531 (Original)327.png
  ./canvas_img/earth_-_28531 (Original)328.png
  ./canvas_img/earth_-_28531 (Original)329.png
  ./canvas_img/earth_-_28531 (Original)330.png
  ./canvas_img/earth_-_28531 (Original)331.png
  ./canvas_img/earth_-_28531 (Original)332.png
  ./canvas_img/earth_-_28531 (Original)333.png
  ./canvas_img/earth_-_28531 (Original)334.png
  ./canvas_img/earth_-_28531 (Original)335.png
  ./canvas_img/earth_-_28531 (Original)336.png
  ./canvas_img/earth_-_28531 (Original)337.png
  ./canvas_img/earth_-_28531 (Original)338.png
  ./canvas_img/earth_-_28531 (Original)339.png
  ./canvas_img/earth_-_28531 (Original)340.png
  ./canvas_img/earth_-_28531 (Original)341.png
  ./canvas_img/earth_-_28531 (Original)342.png
  ./canvas_img/earth_-_28531 (Original)343.png
  ./canvas_img/earth_-_28531 (Original)344.png
  ./canvas_img/earth_-_28531 (Original)345.png
  ./canvas_img/earth_-_28531 (Original)346.png
  ./canvas_img/earth_-_28531 (Original)347.png
  ./canvas_img/earth_-_28531 (Original)348.png
  ./canvas_img/earth_-_28531 (Original)349.png
  ./canvas_img/earth_-_28531 (Original)350.png
  ./canvas_img/earth_-_28531 (Original)351.png
  ./canvas_img/earth_-_28531 (Original)352.png
  ./canvas_img/earth_-_28531 (Original)353.png
  ./canvas_img/earth_-_28531 (Original)354.png
  ./canvas_img/earth_-_28531 (Original)355.png
  ./canvas_img/earth_-_28531 (Original)356.png
  ./canvas_img/earth_-_28531 (Original)357.png
  ./canvas_img/earth_-_28531 (Original)358.png
  ./canvas_img/earth_-_28531 (Original)359.png
  ./canvas_img/earth_-_28531 (Original)360.png
  ./canvas_img/earth_-_28531 (Original)361.png
  ./canvas_img/earth_-_28531 (Original)362.png
  ./canvas_img/earth_-_28531 (Original)363.png
  ./canvas_img/earth_-_28531 (Original)364.png
  ./canvas_img/earth_-_28531 (Original)365.png
  ./canvas_img/earth_-_28531 (Original)366.png
  ./canvas_img/earth_-_28531 (Original)367.png
  ./canvas_img/earth_-_28531 (Original)368.png
  ./canvas_img/earth_-_28531 (Original)369.png
  ./canvas_img/earth_-_28531 (Original)370.png
  ./canvas_img/earth_-_28531 (Original)371.png
  ./canvas_img/earth_-_28531 (Original)372.png
  ./canvas_img/earth_-_28531 (Original)373.png
  ./canvas_img/earth_-_28531 (Original)374.png
  ./canvas_img/earth_-_28531 (Original)375.png
  ./canvas_img/earth_-_28531 (Original)376.png
  ./canvas_img/earth_-_28531 (Original)377.png
  ./canvas_img/earth_-_28531 (Original)378.png
  ./canvas_img/earth_-_28531 (Original)379.png
  ./canvas_img/earth_-_28531 (Original)380.png
  ./canvas_img/earth_-_28531 (Original)381.png
  ./canvas_img/earth_-_28531 (Original)382.png
  ./canvas_img/earth_-_28531 (Original)383.png
  ./canvas_img/earth_-_28531 (Original)384.png
  ./canvas_img/earth_-_28531 (Original)385.png
  ./canvas_img/earth_-_28531 (Original)386.png
  ./canvas_img/earth_-_28531 (Original)387.png
  ./canvas_img/earth_-_28531 (Original)388.png
  ./canvas_img/earth_-_28531 (Original)389.png
  ./canvas_img/earth_-_28531 (Original)390.png
  ./canvas_img/earth_-_28531 (Original)391.png
  ./canvas_img/earth_-_28531 (Original)392.png
  ./canvas_img/earth_-_28531 (Original)393.png
  ./canvas_img/earth_-_28531 (Original)394.png
  ./canvas_img/earth_-_28531 (Original)395.png
  ./canvas_img/earth_-_28531 (Original)396.png
  ./canvas_img/earth_-_28531 (Original)397.png
  ./canvas_img/earth_-_28531 (Original)398.png
  ./canvas_img/earth_-_28531 (Original)399.png
  ./canvas_img/earth_-_28531 (Original)400.png
  ./canvas_img/earth_-_28531 (Original)401.png
  ./canvas_img/earth_-_28531 (Original)402.png
  ./canvas_img/earth_-_28531 (Original)403.png
  ./canvas_img/earth_-_28531 (Original)404.png
  ./canvas_img/earth_-_28531 (Original)405.png
  ./canvas_img/earth_-_28531 (Original)406.png
  ./canvas_img/earth_-_28531 (Original)407.png
  ./canvas_img/earth_-_28531 (Original)408.png
  ./canvas_img/earth_-_28531 (Original)409.png
  ./canvas_img/earth_-_28531 (Original)410.png
  ./canvas_img/earth_-_28531 (Original)411.png
  ./canvas_img/earth_-_28531 (Original)412.png
  ./canvas_img/earth_-_28531 (Original)413.png
  ./canvas_img/earth_-_28531 (Original)414.png
  ./canvas_img/earth_-_28531 (Original)415.png
  ./canvas_img/earth_-_28531 (Original)416.png
  ./canvas_img/earth_-_28531 (Original)417.png
  ./canvas_img/earth_-_28531 (Original)418.png
  ./canvas_img/earth_-_28531 (Original)419.png
  ./canvas_img/earth_-_28531 (Original)420.png
  ./canvas_img/earth_-_28531 (Original)421.png
  ./canvas_img/earth_-_28531 (Original)422.png
  ./canvas_img/earth_-_28531 (Original)423.png
  ./canvas_img/earth_-_28531 (Original)424.png
  ./canvas_img/earth_-_28531 (Original)425.png
  ./canvas_img/earth_-_28531 (Original)426.png
  ./canvas_img/earth_-_28531 (Original)427.png
  ./canvas_img/earth_-_28531 (Original)428.png
  ./canvas_img/earth_-_28531 (Original)429.png
  ./canvas_img/earth_-_28531 (Original)430.png
  ./canvas_img/earth_-_28531 (Original)431.png
  ./canvas_img/earth_-_28531 (Original)432.png
  ./canvas_img/earth_-_28531 (Original)433.png
  ./canvas_img/earth_-_28531 (Original)434.png
  ./canvas_img/earth_-_28531 (Original)435.png
  ./canvas_img/earth_-_28531 (Original)436.png
  ./canvas_img/earth_-_28531 (Original)437.png
  ./canvas_img/earth_-_28531 (Original)438.png
  ./canvas_img/earth_-_28531 (Original)439.png
  ./canvas_img/earth_-_28531 (Original)440.png
  ./canvas_img/earth_-_28531 (Original)441.png
  ./canvas_img/earth_-_28531 (Original)442.png
  ./canvas_img/earth_-_28531 (Original)443.png
  ./canvas_img/earth_-_28531 (Original)444.png
  ./canvas_img/earth_-_28531 (Original)445.png
  ./canvas_img/earth_-_28531 (Original)446.png
  ./canvas_img/earth_-_28531 (Original)447.png
  ./canvas_img/earth_-_28531 (Original)448.png
  ./canvas_img/earth_-_28531 (Original)449.png
  ./canvas_img/earth_-_28531 (Original)450.png
  ./canvas_img/earth_-_28531 (Original)451.png
  ./canvas_img/earth_-_28531 (Original)452.png
  ./canvas_img/earth_-_28531 (Original)453.png
  ./canvas_img/earth_-_28531 (Original)454.png
  ./canvas_img/earth_-_28531 (Original)455.png
  ./canvas_img/earth_-_28531 (Original)456.png
  ./canvas_img/earth_-_28531 (Original)457.png
  ./canvas_img/earth_-_28531 (Original)458.png
  ./canvas_img/earth_-_28531 (Original)459.png
  ./canvas_img/earth_-_28531 (Original)460.png
  ./canvas_img/earth_-_28531 (Original)461.png
  ./canvas_img/earth_-_28531 (Original)462.png
  ./canvas_img/earth_-_28531 (Original)463.png
  ./canvas_img/earth_-_28531 (Original)464.png
  ./canvas_img/earth_-_28531 (Original)465.png
  ./canvas_img/earth_-_28531 (Original)466.png
  ./canvas_img/earth_-_28531 (Original)467.png
  ./canvas_img/earth_-_28531 (Original)468.png
  ./canvas_img/earth_-_28531 (Original)469.png
  ./canvas_img/earth_-_28531 (Original)470.png
  ./canvas_img/earth_-_28531 (Original)471.png
  ./canvas_img/earth_-_28531 (Original)472.png
  ./canvas_img/earth_-_28531 (Original)473.png
  ./canvas_img/earth_-_28531 (Original)474.png
  ./canvas_img/earth_-_28531 (Original)475.png
  ./canvas_img/earth_-_28531 (Original)476.png
  ./canvas_img/earth_-_28531 (Original)477.png
  ./canvas_img/earth_-_28531 (Original)478.png
  ./canvas_img/earth_-_28531 (Original)479.png
  ./canvas_img/earth_-_28531 (Original)480.png
  ./canvas_img/earth_-_28531 (Original)481.png
  ./canvas_img/earth_-_28531 (Original)482.png
  ./canvas_img/earth_-_28531 (Original)483.png
  ./canvas_img/earth_-_28531 (Original)484.png
  ./canvas_img/earth_-_28531 (Original)485.png
  ./canvas_img/earth_-_28531 (Original)486.png
  ./canvas_img/earth_-_28531 (Original)487.png
  ./canvas_img/earth_-_28531 (Original)488.png
  ./canvas_img/earth_-_28531 (Original)489.png
  ./canvas_img/earth_-_28531 (Original)490.png
  ./canvas_img/earth_-_28531 (Original)491.png
  ./canvas_img/earth_-_28531 (Original)492.png
  ./canvas_img/earth_-_28531 (Original)493.png
  ./canvas_img/earth_-_28531 (Original)494.png
  ./canvas_img/earth_-_28531 (Original)495.png
  ./canvas_img/earth_-_28531 (Original)496.png
  ./canvas_img/earth_-_28531 (Original)497.png
  ./canvas_img/earth_-_28531 (Original)498.png
  ./canvas_img/earth_-_28531 (Original)499.png
  ./canvas_img/earth_-_28531 (Original)500.png
  ./canvas_img/earth_-_28531 (Original)501.png
  ./canvas_img/earth_-_28531 (Original)502.png
  ./canvas_img/earth_-_28531 (Original)503.png
  ./canvas_img/earth_-_28531 (Original)504.png
  ./canvas_img/earth_-_28531 (Original)505.png
  ./canvas_img/earth_-_28531 (Original)506.png
  ./canvas_img/earth_-_28531 (Original)507.png
  ./canvas_img/earth_-_28531 (Original)508.png
  ./canvas_img/earth_-_28531 (Original)509.png
  ./canvas_img/earth_-_28531 (Original)510.png
  ./canvas_img/earth_-_28531 (Original)511.png
  ./canvas_img/earth_-_28531 (Original)512.png
  ./canvas_img/earth_-_28531 (Original)513.png
  ./canvas_img/earth_-_28531 (Original)514.png
  ./canvas_img/earth_-_28531 (Original)515.png
  ./canvas_img/earth_-_28531 (Original)516.png
  ./canvas_img/earth_-_28531 (Original)517.png
  ./canvas_img/earth_-_28531 (Original)518.png
  ./canvas_img/earth_-_28531 (Original)519.png
  ./canvas_img/earth_-_28531 (Original)520.png
  ./canvas_img/earth_-_28531 (Original)521.png
  ./canvas_img/earth_-_28531 (Original)522.png
  ./canvas_img/earth_-_28531 (Original)523.png
  ./canvas_img/earth_-_28531 (Original)524.png
  ./canvas_img/earth_-_28531 (Original)525.png
  ./canvas_img/earth_-_28531 (Original)526.png
  ./canvas_img/earth_-_28531 (Original)527.png
  ./canvas_img/earth_-_28531 (Original)528.png
  ./canvas_img/earth_-_28531 (Original)529.png
  ./canvas_img/earth_-_28531 (Original)530.png
  ./canvas_img/earth_-_28531 (Original)531.png
  ./canvas_img/earth_-_28531 (Original)532.png
  ./canvas_img/earth_-_28531 (Original)533.png
  ./canvas_img/earth_-_28531 (Original)534.png
  ./canvas_img/earth_-_28531 (Original)535.png
  ./canvas_img/earth_-_28531 (Original)536.png
  ./canvas_img/earth_-_28531 (Original)537.png
  ./canvas_img/earth_-_28531 (Original)538.png
  ./canvas_img/earth_-_28531 (Original)539.png
  ./canvas_img/earth_-_28531 (Original)540.png
  ./canvas_img/earth_-_28531 (Original)541.png
  ./canvas_img/earth_-_28531 (Original)542.png
  ./canvas_img/earth_-_28531 (Original)543.png
  ./canvas_img/earth_-_28531 (Original)544.png
  ./canvas_img/earth_-_28531 (Original)545.png
  ./canvas_img/earth_-_28531 (Original)546.png
  ./canvas_img/earth_-_28531 (Original)547.png
  ./canvas_img/earth_-_28531 (Original)548.png
  ./canvas_img/earth_-_28531 (Original)549.png
  ./canvas_img/earth_-_28531 (Original)550.png
  ./canvas_img/earth_-_28531 (Original)551.png
  ./canvas_img/earth_-_28531 (Original)552.png
  ./canvas_img/earth_-_28531 (Original)553.png
  ./canvas_img/earth_-_28531 (Original)554.png
  ./canvas_img/earth_-_28531 (Original)555.png
  ./canvas_img/earth_-_28531 (Original)556.png
  ./canvas_img/earth_-_28531 (Original)557.png
  ./canvas_img/earth_-_28531 (Original)558.png
  ./canvas_img/earth_-_28531 (Original)559.png
  ./canvas_img/earth_-_28531 (Original)560.png
  ./canvas_img/earth_-_28531 (Original)561.png
  ./canvas_img/earth_-_28531 (Original)562.png
  ./canvas_img/earth_-_28531 (Original)563.png
  ./canvas_img/earth_-_28531 (Original)564.png
  ./canvas_img/earth_-_28531 (Original)565.png
  ./canvas_img/earth_-_28531 (Original)566.png
  ./canvas_img/earth_-_28531 (Original)567.png
  ./canvas_img/earth_-_28531 (Original)568.png
  ./canvas_img/earth_-_28531 (Original)569.png
  ./canvas_img/earth_-_28531 (Original)570.png
  ./canvas_img/earth_-_28531 (Original)571.png
  ./canvas_img/earth_-_28531 (Original)572.png
  ./canvas_img/earth_-_28531 (Original)573.png
  ./canvas_img/earth_-_28531 (Original)574.png
  ./canvas_img/earth_-_28531 (Original)575.png
  ./canvas_img/earth_-_28531 (Original)576.png
  ./canvas_img/earth_-_28531 (Original)577.png
  ./canvas_img/earth_-_28531 (Original)578.png
  ./canvas_img/earth_-_28531 (Original)579.png
  ./canvas_img/earth_-_28531 (Original)580.png
  ./canvas_img/earth_-_28531 (Original)581.png
  ./canvas_img/earth_-_28531 (Original)582.png
  ./canvas_img/earth_-_28531 (Original)583.png
  ./canvas_img/earth_-_28531 (Original)584.png
  ./canvas_img/earth_-_28531 (Original)585.png
  ./canvas_img/earth_-_28531 (Original)586.png
  ./canvas_img/earth_-_28531 (Original)587.png
  ./canvas_img/earth_-_28531 (Original)588.png
  ./canvas_img/earth_-_28531 (Original)589.png
  ./canvas_img/earth_-_28531 (Original)590.png
  ./canvas_img/earth_-_28531 (Original)591.png
  ./canvas_img/earth_-_28531 (Original)592.png
  ./canvas_img/earth_-_28531 (Original)593.png
  ./canvas_img/earth_-_28531 (Original)594.png
  ./canvas_img/earth_-_28531 (Original)595.png
  ./canvas_img/earth_-_28531 (Original)596.png
  ./canvas_img/earth_-_28531 (Original)597.png
  ./canvas_img/earth_-_28531 (Original)598.png
  ./canvas_img/earth_-_28531 (Original)599.png
  ./canvas_img/earth_-_28531 (Original)600.png
  ./canvas_img/earth_-_28531 (Original)601.png
  ./canvas_img/earth_-_28531 (Original)602.png
  ./canvas_img/earth_-_28531 (Original)603.png
  ./canvas_img/earth_-_28531 (Original)604.png
  ./canvas_img/earth_-_28531 (Original)605.png
  ./canvas_img/earth_-_28531 (Original)606.png
  ./canvas_img/earth_-_28531 (Original)607.png
  ./canvas_img/earth_-_28531 (Original)608.png
  ./canvas_img/earth_-_28531 (Original)609.png
  ./canvas_img/earth_-_28531 (Original)610.png
  ./canvas_img/earth_-_28531 (Original)611.png
  ./canvas_img/earth_-_28531 (Original)612.png
  ./canvas_img/earth_-_28531 (Original)613.png
  ./canvas_img/earth_-_28531 (Original)614.png
  ./canvas_img/earth_-_28531 (Original)615.png
  ./canvas_img/earth_-_28531 (Original)616.png
  ./canvas_img/earth_-_28531 (Original)617.png
  ./canvas_img/earth_-_28531 (Original)618.png
  ./canvas_img/earth_-_28531 (Original)619.png
  ./canvas_img/earth_-_28531 (Original)620.png
  ./canvas_img/earth_-_28531 (Original)621.png
  ./canvas_img/earth_-_28531 (Original)622.png
  ./canvas_img/earth_-_28531 (Original)623.png
  ./canvas_img/earth_-_28531 (Original)624.png
  ./canvas_img/earth_-_28531 (Original)625.png
  ./canvas_img/earth_-_28531 (Original)626.png
  ./canvas_img/earth_-_28531 (Original)627.png
  ./canvas_img/earth_-_28531 (Original)628.png
  ./canvas_img/earth_-_28531 (Original)629.png
  ./canvas_img/earth_-_28531 (Original)630.png
  ./canvas_img/earth_-_28531 (Original)631.png
  ./canvas_img/earth_-_28531 (Original)632.png
  ./canvas_img/earth_-_28531 (Original)633.png
  ./canvas_img/earth_-_28531 (Original)634.png
  ./canvas_img/earth_-_28531 (Original)635.png
  ./canvas_img/earth_-_28531 (Original)636.png
  ./canvas_img/earth_-_28531 (Original)637.png
  ./canvas_img/earth_-_28531 (Original)638.png
  ./canvas_img/earth_-_28531 (Original)639.png
  ./canvas_img/earth_-_28531 (Original)640.png
  ./canvas_img/earth_-_28531 (Original)641.png
  ./canvas_img/earth_-_28531 (Original)642.png
  ./canvas_img/earth_-_28531 (Original)643.png
  ./canvas_img/earth_-_28531 (Original)644.png
  ./canvas_img/earth_-_28531 (Original)645.png
  ./canvas_img/earth_-_28531 (Original)646.png
  ./canvas_img/earth_-_28531 (Original)647.png
  ./canvas_img/earth_-_28531 (Original)648.png
  ./canvas_img/earth_-_28531 (Original)649.png
  ./canvas_img/earth_-_28531 (Original)650.png
  ./canvas_img/earth_-_28531 (Original)651.png
  ./canvas_img/earth_-_28531 (Original)652.png
  ./canvas_img/earth_-_28531 (Original)653.png
  ./canvas_img/earth_-_28531 (Original)654.png
  ./canvas_img/earth_-_28531 (Original)655.png
  ./canvas_img/earth_-_28531 (Original)656.png
  ./canvas_img/earth_-_28531 (Original)657.png
  ./canvas_img/earth_-_28531 (Original)658.png
  ./canvas_img/earth_-_28531 (Original)659.png
  ./canvas_img/earth_-_28531 (Original)660.png
  ./canvas_img/earth_-_28531 (Original)661.png
  ./canvas_img/earth_-_28531 (Original)662.png
  ./canvas_img/earth_-_28531 (Original)663.png
  ./canvas_img/earth_-_28531 (Original)664.png
  ./canvas_img/earth_-_28531 (Original)665.png
  ./canvas_img/earth_-_28531 (Original)666.png
  ./canvas_img/earth_-_28531 (Original)667.png
  ./canvas_img/earth_-_28531 (Original)668.png
  ./canvas_img/earth_-_28531 (Original)669.png
  ./canvas_img/earth_-_28531 (Original)670.png
  ./canvas_img/earth_-_28531 (Original)671.png
  ./canvas_img/earth_-_28531 (Original)672.png
  ./canvas_img/earth_-_28531 (Original)673.png
  ./canvas_img/earth_-_28531 (Original)674.png
  ./canvas_img/earth_-_28531 (Original)675.png
  ./canvas_img/earth_-_28531 (Original)676.png
  ./canvas_img/earth_-_28531 (Original)677.png
  ./canvas_img/earth_-_28531 (Original)678.png
  ./canvas_img/earth_-_28531 (Original)679.png
  ./canvas_img/earth_-_28531 (Original)680.png
  ./canvas_img/earth_-_28531 (Original)681.png
  ./canvas_img/earth_-_28531 (Original)682.png
  ./canvas_img/earth_-_28531 (Original)683.png
  ./canvas_img/earth_-_28531 (Original)684.png
  ./canvas_img/earth_-_28531 (Original)685.png
  ./canvas_img/earth_-_28531 (Original)686.png
  ./canvas_img/earth_-_28531 (Original)687.png
  ./canvas_img/earth_-_28531 (Original)688.png
  ./canvas_img/earth_-_28531 (Original)689.png
  ./canvas_img/earth_-_28531 (Original)690.png
  ./canvas_img/earth_-_28531 (Original)691.png
  ./canvas_img/earth_-_28531 (Original)692.png
  ./canvas_img/earth_-_28531 (Original)693.png
  ./canvas_img/earth_-_28531 (Original)694.png
  ./canvas_img/earth_-_28531 (Original)695.png
  ./canvas_img/earth_-_28531 (Original)696.png
  ./canvas_img/earth_-_28531 (Original)697.png
  ./canvas_img/earth_-_28531 (Original)698.png
  ./canvas_img/earth_-_28531 (Original)699.png
  ./canvas_img/earth_-_28531 (Original)700.png
  ./canvas_img/earth_-_28531 (Original)701.png
  ./canvas_img/earth_-_28531 (Original)702.png
  ./canvas_img/earth_-_28531 (Original)703.png
  ./canvas_img/earth_-_28531 (Original)704.png
  ./canvas_img/earth_-_28531 (Original)705.png
  ./canvas_img/earth_-_28531 (Original)706.png
  ./canvas_img/earth_-_28531 (Original)707.png
  ./canvas_img/earth_-_28531 (Original)708.png
  ./canvas_img/earth_-_28531 (Original)709.png
  ./canvas_img/earth_-_28531 (Original)710.png
  ./canvas_img/earth_-_28531 (Original)711.png
  ./canvas_img/earth_-_28531 (Original)712.png
  ./canvas_img/earth_-_28531 (Original)713.png
  ./canvas_img/earth_-_28531 (Original)714.png
  ./canvas_img/earth_-_28531 (Original)715.png
  ./canvas_img/earth_-_28531 (Original)716.png
  ./canvas_img/earth_-_28531 (Original)717.png
  ./canvas_img/earth_-_28531 (Original)718.png
  ./canvas_img/earth_-_28531 (Original)719.png
  ./canvas_img/earth_-_28531 (Original)720.png
 `;
  return data.split("\n")[index];
}

const frameCount = 720;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas1();



let clutter = " ";
document.querySelector("#page2>p").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`
    document.querySelector("#page2>p").innerHTML=clutter;
})

gsap.to("#page2>p>span",{
  color:"white",
  stagger:.2,
  scrollTrigger:{
    trigger:"#page2>p>span",
    scroller:"#main",
    start:"top 80%",
    end:"top 40%",
    scrub:1,
  }
})

// let tl = gsap.timeline()
// tl.from(".page_head, .page_head2",{
//   rotate:15,
//   opacity:0,
//   duration:.7,
//   delay:2
// })
// tl.from(".page_head3",{
//   opacity:0,
//   duration:.4
// })

let tl2 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:".page_head",
    start:"top 30%",
    end:"top 0",
    scrub:2.5
  }
})
tl2.to(".page_head",{
  x:-200,
},"a")
tl2.to(".page_head2",{
  x:200,
},"a")


gsap.to("#page4>video",{
  scale:1.2,
  duration:.8,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4>video",
    start:"top 60%",
    end: "top 1%",
    scrub:.5,
  }
})


// gsap.to(".page2_text h1,h4",{
//   y:-200,
//   opacity:0,
//   durstion:.3,
//   scale:2,
//   markers:true,
//   scrollTrigger:{
//     trigger:".page2_text h1,h4",
//     scroller:"#main",
//     start:"top 65%",
//     end:"top 30%",
//     scrub:.1,
//   }
// })


gsap.from(".page3_box",{
  x:-100,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".page3_box",
    start:"top 70%",
    end:"top 30%",
    scrub:.5,
  }
})


gsap.from(".page5_box_area img",{
  x:-100,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".page5_box_area img",
    start:"top 70%",
    end:"top 30%",
    scrub:.5,
  }
})



gsap.from(".page5_box",{
  x:100,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".page5_box",
    start:"top 70%",
    end:"top 30%",
    scrub:.5,
  }
})

gsap.from(".page3_box_area img",{
  x:100,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".page3_box_area img",
    start:"top 70%",
    end:"top 30%",
    scrub:.5,
  }
})



gsap.from(".cardd",{
  scale:.5,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:".cardd",
    start:"top 70%",
    end:"top 30%",
    scrub:.5,
  }
})





document.querySelector(".back_btn").addEventListener("click", () =>{
	window.history.back();
});


