<template>
	<view class="comment_row">
		<view class="kehu">
			<view class="kehu_info">
					<image mode="widthFix" w-if="rate.user_avatar" :src="rate.user_avatar" />
					<text>{{rate.user_uname}}</text>
			</view>
			<view class="comment">{{rate.content}}</view>
			<block v-for="(item,index) in rate.images" :key="index">
				<image mode="widthFix" :src="item" />
			</block>
			<view class="style">{{rate.style}}</view>
		</view>
		<block v-if="rate.explain">
			<view class="shangjia">
					{{rate.explain}}
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			rate:{
				type:Object
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.comment_row{
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.kehu_info{
	  display: flex;
	  margin-bottom: 30rpx;
	}
	.kehu_text{
	  font-size: 40rpx;
	   line-height: 100rpx;
	  height: 100rpx;
	 }
	.kehu_info image{
	  flex: 1;
	  border-radius: 50%;
	}
	.kehu_info text{
	  flex: 4;
	  margin-left: 30rpx;
	  display: flex;
	  align-items: center;
	}
	.kehu image{
	  width: 200rpx;
	}
	.comment{
		font-size: 28rpx;
	}
	.kehu .style{
	  font-size: 26rpx;
	  color: #666;
	  margin: 20rpx 0 30rpx;
	}
	.shangjia{
	  font-size: 28rpx;
	  color: #333;
	  background: #dedede;
	  border-radius: 30rpx;
	}
	
</style>
