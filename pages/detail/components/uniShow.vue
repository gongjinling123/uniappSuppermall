<template>
	<view class="show_row">
		<view class="show_title">
			{{descKey}}
		</view>
		<view class="show_img">
			<block v-for="(item,index) in detailImages" :key='index'>
				<image :src="item" mode="widthFix"></image>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
		
			descKey:{
				type:String
			},
			detailImages:{
				type:Array
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.show{
		margin: 60rpx 30rpx;
		// position: relative;
		height: 160rpx;
		background-color: red;
	}
	.show::before{
		content: '';
		position: absolute;
		width: 300rpx;
		height: 2rpx;
		bottom: 1rpx;
		right: 1rpx;
		background-color: pink;
	}
	.show_title{
		margin-left: 20rpx;
	}
	.show_img{
		text-align: center;
	}
</style>
