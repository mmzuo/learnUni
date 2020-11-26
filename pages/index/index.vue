<template>
	<view>
		<scroll-view scroll-y class="page">
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H bg-brown" @click="toDetail('demo1',1)">列表详情</view>
					<view id="demo2" class="scroll-view-item_H bg-gradual-blue" @click="toDetail('1',2)">文章详情</view>
					<view id="demo3" class="scroll-view-item_H bg-olive">C</view>
					<view id="demo4" class="scroll-view-item_H bg-gradual-orange">D</view>
					<view id="demo5" class="scroll-view-item_H bg-purple">E</view>
					<view id="demo6" class="scroll-view-item_H bg-pink">C</view>
				</scroll-view>
			</view>
			<view class="cu-list menu-avatar">
				<ListView v-for="(item,index) in contentList" :key="index" :detail="item" @click="toDetail(item,7)"></ListView>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import ListView from "../../cutomComponent/listView/index.vue"
	export default {
		components: {
			ListView
		},
		data() {
			return {
				PageCur: 'basics',
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605852975419&di=29c094080e8ea3b7a40eb6de6f07fddb&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F0a742a178141f763fb845a3ecee1e9ba.jpeg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605852975418&di=362e4ad8c9e6f0c291dec2dc311ffd92&imgtype=0&src=http%3A%2F%2Fbbsimg0.dahe.cn%2FMon_1209%2F10_840226_46076ae5987914c.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605852975419&di=e05d1353e4b6f73959fa24afc874f56c&imgtype=0&src=http%3A%2F%2Fbbs.jooyoo.net%2Fattachment%2FMon_1204%2F27_498206_d1356d0ba2ea535.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605852975424&di=a5a8e40025d9a7a148c706446258d140&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201205%2F15%2F152011zser9o5oa9ee9xx6.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				contentList: [{
					imgurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg',
					title: '封装小程序组件啊哦',
					time: '2012/10/22',
					msg: '5',
					like: '123',
					haslook: '233',
					id: 1
				}, {
					imgurl: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
					title: '封装小程序组件啊哦',
					time: '2012/10/22',
					msg: '5',
					like: '123',
					haslook: '233',
					id: 2
				}, {
					imgurl: 'https://ossweb-img.qq.com/images/lol/img/champion/Taric.png',
					title: '封装小程序组件啊哦',
					time: '2012/10/22',
					msg: '5',
					like: '123',
					haslook: '233',
					id: 4
				}],
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			toDetail(item, num) {
				if (num === 1) {
					uni.navigateTo({
						url: './detail/detail?id=' + item
					})
				} else if (num == 2) {
					uni.navigateTo({
						url: "./article/article?id=" + item
					})
				} else if (num == 7) {
					uni.navigateTo({
						url: "../echart/index?id=" + item.id + "&time=" + item.time
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}

	.scroll-view_H {
		display: flex;
		white-space: nowrap;
		width: 100%;
		overflow: scroll;

		.scroll-view-item_H {
			height: 100px;
			width: 100px;
			display: inline-flex;
			align-items: center;
			border: 1px solid #cccccc;
			border-radius: 5px;
			margin: 10px;
			justify-content: center;
		}
	}
</style>
