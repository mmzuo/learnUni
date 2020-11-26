<template>
	<view>
		<view class="cu-item detail-list" @click="toDetail">
		  <view class="left">
		    <image  class="" :src="detail.imgurl" mode="aspectFill"></image>
		  </view>
		  <view class="right content">
		    <view class="right-top radius shadow-blur">{{detail.title}}</view>
		    <view class="right-bottom">
		      <view class="demo-tag"><text class="cuIcon-time paddding-right">{{detail.time}}</text></view>
			  <text class="cuIcon-message paddding-right">{{detail.msg}}</text>
			 <text class="cuIcon-like">{{detail.like}}</text>
			 <text class="cuIcon-attention">{{detail.haslook}}</text>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listView",
		props:{
			detail:{
				type: Object,
				default:{},
				required: true
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			toDetail(){
				this.$emit("click");
			}
		}
	}
</script>

<style lang="scss">
	.list-view {
		display: flex;
		width: 100%;
		flex-direction: row;
			}
	.detail-list {
	  display: flex;
	  white-space: nowrap;
	  background-color: #ffffff;
	  margin-top: 10px;
	}
	
	.left {
	  align-self: center;
	  background-size: cover;
	    background-position: center;
	    margin-left: 15px;
	}
	.left image {
	  width: 146rpx;
	    height: 146rpx;
	    font-size: 2em;
	}
	.right {
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  height: 100px;
	  margin-left: 10px;
	}
	
	.right-top {
	  align-items: top;
	  height: max-content;
	  height: -webkit-fill-available;
	  padding-top: 10px;
	}
	
	.right-bottom {
	  display: flex;
	  align-items: flex-end;
	  justify-content: space-between;
	  margin-bottom: 10px;
	  margin-right: 15px;
	}
	.demo-tag {
	  display: flex;
	  align-items: center;
	}
	.padding-right {
	  padding-right: 5px;
	}
</style>
