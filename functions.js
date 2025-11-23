gsap.registerPlugin(ScrollTrigger);
//出現。対象要素をフェードインしながら上方向にスライドさせて表示する
function animateIn(element) {
gsap.to(element, {opacity: 1, y: 0, duration: 0.6, ease:"power2.out" });
}
//退場。対象要素をフェードアウトしながら下方向へ移動させて非表示にする
function animateOut(element) {
gsap.to(element, { opacity: 0, y: 24, duration: 0.4, ease:"power2.in" });
}

//指定要素にスクロール連動の出現・退場アニメーションを仕込むトリガーを生成する
function createScrollTrigger(element) {
gsap.set(element, { opacity: 0, y: 24 });
return ScrollTrigger.create({
trigger: element,
start: "top 80%",
end: "bottom 20%",
onEnter: function () {
animateIn(element);
},
onLeaveBack:function(){
    animateIn(element);
},
onLeaveBack:function(){
    animateOut(element);
},
markers: true,
});
}

//ページ内の対象要素群を取得し、各要素にスクロール表示トリガーを適用する
function setupScrollEffects() {
const elements = gsap.utils.toArray(".js-reveal");
elements.forEach(function (el) {
createScrollTrigger(el);
});
}
setupScrollEffects();


