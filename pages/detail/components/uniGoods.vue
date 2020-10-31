<template>
	<view class="goods_title">
		<view class="title">
			{{goods.title}}
		</view>
		<view class="collect" @click="collect">
			<text class="iconfont icon-shoucang collect-icon" :class="isCollect?'yes':''"></text>
			<text class="collect-title">收藏</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			goods:{
				type:Object
			},
			isCollect:{
				type:Boolean,
				default:false
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
	.goods_title{
		display: flex;
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		
	}
	.goods_title .title{
		flex: 5;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.goods_title .collect{
		border-left: 1rpx solid #ccc;
		margin-left: 10rpx;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.collect-icon{
		flex: 1;
	}
	.collect-title{
		flex: 1;
	}
	.yes{
		color: #ff5777;
	}
	
</style>
