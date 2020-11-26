<template>
	<scroll-view scroll-y="true" class="page">
		<view style="display: flex;align-items: center;flex-direction:column ;">
			<image src="../../static/logo.png" mode=""></image>
			<view class="">个人信息</view>
			<view class="DrawerClose">
				mmzuo
			</view>
		</view>
		<uni-list>
		    <uni-list-item title="开启点击反馈" clickable  @click="onClick" ></uni-list-item>
		    <uni-list-item title="默认 navigateTo 方式跳转页面" link="navigateTo" to="/pages/personal/pay/pay" @click="onClick($event)" ></uni-list-item>
		    <uni-list-item title="reLaunch 方式跳转页面" link="reLaunch" to="/pages/index/index" @click="onClick($event,1)" ></uni-list-item>
		</uni-list>
		<view>组件库</view>
		<view>
			
			<view>车进口商进度款郭德纲的三等奖</view>
		</view>
	</scroll-view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onClick($event) {
				console.log($event)
				// uni.navigateTo({
				// 	url:"/pages/personal/pay/pay"
				// })
			}
		}
	}
</script>

<style>

</style>
