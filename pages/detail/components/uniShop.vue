<template>
	<view class="shop_row">
		<view class="logo">
			<image :src="shopLogo" mode="widthFix"></image>
			<text>{{shopName}}</text>
		</view>
		<view class="shop_info">
			<view class="num">
				<view class="sells">
					<view class="sells_num">
						{{cSells}}
					</view>
					<view class="sells_title">
						总销量
					</view>
				</view>
				<view class="goods">
					<view class="goods_num">
						{{cGoods}}
					</view>
					<view class="shop_goods_title">
						全部宝贝
					</view>
				</view>
			</view>
			<view class="shop_desc">
				<block v-for="(item,index) in score" :key='index'>
					<view class="desc">
						<text class="name">{{item.name}}</text>
						<text class="score">{{item.score}}</text>
						<text class="better" :class="item.isBetter?'bg1':'bg2'">{{item.isBetter?'高':'低'}}</text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			shopLogo:{
				type:String
			},
			shopName:{
				type:String
			},
			cGoods:{
				type:Number,
				default:0
			},
			cSells:{
				type:Number,
				default:0
			},
			score:{
				type:Array
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.logo{
		display: flex;
	}
	.logo image{
		width: 160rpx;
		height: 160rpx;
		border: 2rpx solid #dedede;
		border-radius: 50%;
		overflow: hidden;
		margin: 30rpx 40rpx 30rpx 20rpx;
	}
	.logo text{
		display: flex;
		align-items: center;
	}
	.shop_info{
		display: flex;
		padding: 30rpx;
		border-bottom: 8rpx solid #ccc;
	}
	.shop_info .num{
		flex: 1;
		display: flex;
		// background-color: pink;
	}
	.num .sells{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// background-color: purple;
	}
	.num .goods{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.shop_info .shop_desc{
		margin: 0 20rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		// background-color: blue;
	}
	.desc{
		display: flex;
		margin-bottom: 10rpx;
	}
	.desc .name{
		flex: 4;
		display: flex;
		justify-content: center;
	}
	.desc .score{
		flex: 2;
		display: flex;
		justify-content: center;
	}
	.desc .better{
		flex: 1;
		display: flex;
		justify-content: center;
	}
	.bg1{
		background-color: green;
	}
	.bg2{
		background-color: red;
	}
	
	
</style>
