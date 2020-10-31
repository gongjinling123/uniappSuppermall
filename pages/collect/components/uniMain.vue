<template>
	<view class="collect_main">
		<view class="collect_title">
			<block v-for="(item,index) in tips" :key='index'>
				<view class="collect_tips" @click="handle_tip(index)">
					<view :class="currentIndexTip==index?'activeTip':''">
						{{item}}
					</view>
				</view>
			</block>
		</view>
		<view class="content">
			<view class="title">
				商品收藏
			</view>
			<block v-for="(item,index) in collect" :key='index'>
				<view class="content_item" @click="handleItem(item.iid)">
				<image :src="item.img" mode="aspectFill"></image>
				<view class="info">
					<view class="desc">{{item.title}}</view>
					<view class="price">￥{{item.newPrice}}</view>
				</view>
			</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				tips: ['全部', '正在热卖', '即将上线']
			}
		},
		props:{
			currentIndexTip:{
				type:Number
			},
			collect:{
				type:Array
			}
		},
		methods:{
			handle_tip(index){
				this.$emit('handle_tip',index)
			},
			handleItem(iid){
				this.$emit('handleItem',iid)
			}
		}
		
	}
</script>

<style lang="scss">
	.collect_main {
		margin-top: 30rpx;
	}
	
	.collect_title {
		height: 100rpx;
		line-height: 80rpx;
		padding-top: 20rpx;
		background-color: #dedede;
		display: flex;
		padding-left: 20rpx;
	}
	
	.collect_tips {
		margin-left: 50rpx;
	}
	.activeTip{
		background-color: #ff5777;
		color: #fff;
		padding: 0 10rpx;
	}
	.content{
		margin-top: 30rpx;
		padding: 20rpx;
		background-color: #dedede;
	}
	.title{
		height: 90rpx;
		line-height: 90rpx;
		border-bottom: 1rpx solid #ccc;
	}
	.content_item{
		background-color: #fff;
		display: flex;
		height: 180rpx;
		padding: 20rpx 10rpx;
		margin-bottom: 20rpx;
	}
	.content_item image{
		flex: 1;
		height: 180rpx;
	}
	.content_item .info{
		flex: 5;
		display: flex;
		flex-direction: column;
		font-size: 28rpx;
		margin-left: 30rpx;
	}
	.desc{
		// flex: 1;
		align-items: center;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		// 
		margin-top: 10rpx;
	}
	.price{
		flex: 1;
		display: flex;
		align-items: center;
		color: #ff5777;
		font-size: 34rpx;
	}
</style>
