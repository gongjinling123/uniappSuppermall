<template>
	<view class="">
		<!-- 状态栏 -->
		<view class="status_bar"></view>
		<!-- 导航栏 -->
		<view class="tabbar">
			<view class="left">
				<slot name="left"></slot>
			</view>
			<view class="center">
				<slot name="center"></slot>
			</view>
			<view class="right">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		background-color: #000;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}
	
	/* 顶部导航开始 */
	.tabbar {
		width: 100%;
		height: 90rpx;
		padding-top: var(--status-bar-height);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		/* line-height: 30rpx; */
		display: flex;
		color: #fff;
		background-color: #ff5777;
	}
	
	.tabbar .left {
		width: 200rpx;
		height: 90rpx;
		box-sizing: border-box;
		padding-left: 30rpx;
		line-height: 90rpx;
		/* background-color: blue; */
	}
	
	.tabbar .right {
		width: 200rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: right;
		padding-right: 30rpx;
		box-sizing: border-box;
		/* background-color: pink; */
	}
	
	.tabbar .center {
		flex: 1;
		height: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: green; */
	}
</style>
