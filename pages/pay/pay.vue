<template>
	<view class="">
		<uni-nav>
			<view slot="left">
				<view class="iconfont icon-fanhui" @click="back"></view>
			</view>
			<view slot="center">
				待付款
			</view>
		</uni-nav>


		<!-- 购物车 -->
		<view class="cart_row">
			<view class="cart_title">购物车</view>
			<view class="cart_main" v-for="(item,index) in cart1" :key="index">
				<view class="cart_item" :data-iid="item.iid">
					<view class="cart_img_row">
						<image :src="item.img" mode="widthFix" />
					</view>
					<view class="cart_info_row">
						<view class="cart_name">{{item.title}}</view>
						<view class="cart_num">
							<view class="goods_price">￥{{item.newPrice}}</view>
							<view class="num">X{{item.num}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>


		<view class="foot_tool">
			<view class="total_price_row">
				<view class="total_price">￥{{totalPrice}}</view>
				<view class="title">包含运费</view>
			</view>
			<view class="order_pay_row">
				支付（{{totalNum}}）
			</view>
		</view>
	
	
	</view>
</template>
<script>
	import uniNav from '../../component/uni-nav.vue'
	export default {
		data() {
			return {
				cart1: {},
				totalNum: 0,
				totalPrice: 0
			}
		},
		components:{
			uniNav
		},
		onShow() {
			let cart1 = uni.getStorageSync('pay') || []
			cart1 = cart1.filter(v => v.checked)
			let totalNum = 0
			let totalPrice = 0
			cart1.forEach(v => {
				totalPrice += v.num * v.newPrice
				totalNum += v.num
			})
			totalPrice = totalPrice.toFixed(2)
			this.cart1 = cart1
			this.totalNum = totalNum
			this.totalPrice = totalPrice

			uni.setStorageSync('cart1', cart1)
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';

	.back {
		font-size: 40rpx;
	}

	/* pages/pay/pay.wxss */
	page {
		padding-bottom: 90rpx;
	}
	
	.address {
		font-size: 30rpx;
	}

	.address_btn {
		padding: 20rpx;
	}

	.address_btn button {
		width: 60%;
	}

	.user {
		padding: 20rpx;
		display: flex;
	}

	.user_info {
		flex: 5;
	}

	.user_phone {
		flex: 3;
		text-align: right;
	}
	.cart_row{
		padding-top: 140rpx;
	}
	.cart_title {
		padding: 20rpx;
		font-size: 50rpx;
		border-top: 1rpx solid #ccc;
		border-bottom: 1rpx solid #ccc;
	}

	.cart_item {
		display: flex;
		padding: 20rpx;
		border-bottom: 1rpx solid #ccc;
	}

	.cart_item .cart_img_row {
		flex: 2;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.cart_img_row image {
		width: 70%;
	}

	.cart_item .cart_info_row {
		flex: 4;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	/* 内容显示两行 多出的用 ... 表示 */
	.cart_info_row .cart_name {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.cart_num {
		display: flex;
		justify-content: space-between;
	}

	.goods_price {
		flex: 1;
		font-size: 40rpx;
		color: #ff5777;
	}

	.num {
		margin-right: 30rpx;
	}

	.foot_tool {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90rpx;
		background: #fff;
		display: flex;
		border-top: 1rpx solid #ccc;
	}

	.total_price_row {
		flex: 5;
		text-align: right;
		padding-right: 10rpx;
	}

	.total_price {
		color: #ff5777;
	}

	.total_price_row .title {
		font-size: 30rpx;
	}

	.order_pay_row {
		flex: 3;
		display: flex;
		justify-content: center;
		align-items: center;
		background: red;
		font-size: 36rpx;
		font-weight: 600;
		color: #fff;
	}
</style>
