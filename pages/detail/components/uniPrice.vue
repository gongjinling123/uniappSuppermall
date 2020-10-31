<template>
	<view class="price_row">
		<text class="newPrice">￥{{goods.newPrice}}</text>
		<text class="oldPrice">{{goods.oldPrice}}</text>
		<text class="dazhe" v-if="goods.discountDesc">{{goods.discountDesc}}</text>
	</view>
	
</template>

<script>
	export default{
		props:{
			goods:{
				type:Object
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.price_row{
		margin-top: 30rpx;
		padding: 10rpx 20rpx;
		position: relative;
		border-bottom: 8rpx solid #ccc;
		// background-color: pink;
	}
	.newPrice{
		font-size: 60rpx;
		color: #ff5777;
	}
	.oldPrice{
		font-size: 30rpx;
		color: #666;
		padding: 0 20rpx;
		text-decoration: line-through;
	}
	.dazhe{
		background-color: #f13;
		padding: 10rpx 30rpx;
		color: #fff;
		font-size: 30rpx;
		border-radius: 30rpx;
		position: absolute;
		top: -9rpx;
	}
	
	
</style>
