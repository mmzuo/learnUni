<template>
	<view class="bg-white" style="overflow: hidden;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<view slot="backText">
				返回
			</view>
		
			<view slot="content">文章详情页</view>
		</cu-custom>
		<view class="header--circle demo-h3 margin">
			{{dataList.title}}
		</view>
		<view class="flex margin">
			<view class="padding-right-xl"><text class="cuIcon-time padding-right"></text>&nbsp;{{dataList.createtime}}</view>
			<view class="padding-right-xl"><text class="cuIcon-like padding-right"></text>&nbsp;{{dataList.attention}}</view>
			<view><text class="cuIcon-emoji padding-right"></text>&nbsp;{{dataList.attention}}</view>
		</view>
		<view class="bg-white padding" id="textAreaHeight" >
		  <textarea :value="dataList.content" style="line-height: 26px;" :style="{height:height}" class="padding" maxlength="5000" > </textarea>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				id:'',
				dataList:"",
				height:''
			}
		},
		onLoad(option) {
			this.id = option.id;
			this.getData();
		},
		onShow() {
			let that = this;
			let query = uni.createSelectorQuery();
			query.select("#textAreaHeight").boundingClientRect();// 获取view的边界及位置信息
			query.exec(function(res){
				that.height = res[0].height + res[0].bottom + 'px';
				console.log(that.height)
			})
		},
		methods: {
			getData() {
				let that = this;
				uni.request({
					url:"https://mock.yonyoucloud.com/mock/16335/demo/article",
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
.demo-h3 {
	font-size: 26px;
}
</style>
