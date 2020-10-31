<template>
	<view class="app_info_wrap">
		<view class="app_info_item">
			<text class="iconfont icon-kefu _icon"></text>
			<text>联系客服</text>
			<text class="phone">440-934-532234</text>
		</view>
		<view class="app_info_item">
			<text class="iconfont icon-yijianfankui _icon"></text>
			<text>意见反馈</text>
		</view>
		<view class="app_info_item">
			<text class="iconfont icon-guanyuwomen _icon"></text>
			<text>关于我们</text>
		</view>
	</view>
	
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	._icon {
		margin: 0 30rpx 0 0;
		font-size: 40rpx;
	}
	.app_info_item:nth-child(2) ._icon{
		margin: 0 6rpx 0 -15rpx;
	}
	
	.app_info_wrap{
		margin-top: 30rpx;
		border: 1rpx solid #ccc;
		background-color: #fff;
		margin-bottom: 100rpx;
		border-radius: 20rpx;
		font-size: 28rpx;
		padding: 0 20rpx;
	}
	.app_info_item{
		height: 90rpx;
		line-height: 90rpx;
		border-bottom: 1rpx solid #ccc;
	}
	.phone{
		margin-left: 20rpx;
	}
	.app_info_item:last-child{
		border: 0;
	}
</style>
