<template>
	<view class="recommend_row">
		<block v-for="(item,index) in recommend" :key='index'>
			<view class="recommend_item">
				<image :src="item.image" mode="widthFix"></image>
				<view class="recommend_info">
					<view class="recommend_title">
						{{item.title}}
					</view>
					<view class="info">
						<text class="price">￥{{item.price}}</text>
						<text class="iconfont icon-shoucang shoucang"></text>
						<text class="cfav">{{item.cfav}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			recommend:{
				type:Array
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.recommend_row{
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.recommend_item{
		width: 46%;
		text-align: center;
		color: #333;
		padding-bottom: 130rpx;
		position: relative;
	}
	.recommend_item image{
		width: 100%;
		border-radius: 10rpx;
	}
	.recommend_info{
		// background-color: red;
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.recommend_title{
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 30rpx;
	}
	.info{
		font-size: 30rpx;
	}
	.price{
		color: #ff5777;
	}
	.shoucang{
		margin-left: 20rpx;
	}
	
</style>
