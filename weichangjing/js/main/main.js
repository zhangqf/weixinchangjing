var mySwiper = new Swiper('.swiper-container', {
	direction : 'vertical',
	scrollbarHide:"true",
	onInit:function(swiper){
		swiperAnimateCache(swiper);//隐藏动画元素
		swiperAnimate(swiper);//初始化完成开始动画
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper);
	}
})