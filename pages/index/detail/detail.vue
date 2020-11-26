<template>
	<view class="bg-white">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<view slot="backText">
				返回
			</view>
		
			<view slot="content">详情页</view>
		</cu-custom>
		<view v-for="(value,key,index) in dataList" :key="index" class="detail-list">
			<view class="title">{{key}}:</view>
			<view class="content overflow">{{value}}</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				id:'',
				dataList:{}
			}
		},
		onLoad(option) {
			console.log(option)
			this.id = option.id;
			this.getData();
		},
		methods: {
			getData() {
				let that = this;
				uni.request({
					url:"https://mock.yonyoucloud.com/mock/16335/demo/detail",
					data:{
						id: this.id
					},
					success(res) {
						
						that.dataList = res.data.data;
						console.log(that.dataList)
					}
				})
			}
			
		}
	}
</script>

<style lang="scss">
.detail-list {
	line-height: 30px;
	display: flex;
	padding: 0 10px;
	.title {
		font-weight: bold;
		width: 30%;
		text-align: right;
	}
	.content {
		flex: 1;
		padding-left: 10px;
	}
}
</style>
