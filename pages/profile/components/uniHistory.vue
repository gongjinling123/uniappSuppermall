<template>
	<view class="history_wrap">
		<view class="history_item">
			<view class="his_num">0</view>
			<view class="his_name">收藏店铺</view>
		</view>
		<view class="history_item" @click="collect">
			<view class="his_num">{{collectNum}}</view>
			<view class="his_name">收藏商品</view>
		</view>
		<view class="history_item">
			<view class="his_num">0</view>
			<view class="his_name">关注店铺</view>
		</view>
		<view class="history_item">
			<view class="his_num">0</view>
			<view class="his_name">我的足迹</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			collectNum:{
				type:Number
			}
		},
		methods:{
			collect(){
				this.$emit('collect')
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.history_wrap {
		height: 120rpx;
		display: flex;
		border: 1rpx solid #ccc;
		background-color: #fff;
		border-radius: 20rpx;
		font-size: 28rpx;
	}
	
	.history_item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.his_num {
		color: #ff5777;
	}
	.his_name{
		font-size: 28rpx;
	}
</style>
