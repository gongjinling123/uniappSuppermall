<template>
	<view class="order_wrap">
		<view class="order_title">
			我的订单
		</view>
		<view class="order_content">
			<view class="order_item">
				<view class="iconfont icon-wodedingdan item_icon"></view>
				<view class="item_title">我的订单</view>
			</view>
			<view class="order_item">
				<view class="iconfont icon-daishouhuo-01 item_icon"></view>
				<view class="item_title">待收货</view>
			</view>
			<view class="order_item" @click="handlePay">
				<view class="iconfont icon-daifukuan item_icon"></view>
				<view class="item_title">待付款</view>
			</view>
			<view class="order_item">
				<view class="iconfont icon-tuikuan item_icon"></view>
				<view class="item_title">退货退款</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			handlePay(){
				this.$emit('handlePay')
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.order_wrap {
		margin-top: 30rpx;
		border: 1rpx solid #ccc;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		font-size: 28rpx; 
		padding: 0 30rpx;
	} 
	
	.order_title {
		height: 90rpx;
		line-height: 90rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #ccc;
	}
	
	.order_content {
		height: 120rpx;
		padding-top: 20rpx;
		box-sizing: border-box;
		display: flex;
	}
	
	.order_item {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.item_icon {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40rpx;
	}
	
	.item_title {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
