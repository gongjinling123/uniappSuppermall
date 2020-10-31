<template>
	<view class="">
		<uni-nav>
			<view slot="center">
				购物车
			</view>
		</uni-nav>

		<!-- 购物车 -->
		<view class="cart_row">
			<view class="cart_title">购物车</view>
			<view class="cart_main" v-for="(item,index) in cart" :key='index'>
				<view class="cart_item">
					<view class="cart_check_row">
						<checkbox-group @click="handleCheck" :data-id='item.iid'>
							<checkbox :checked="item.checked"></checkbox>
						</checkbox-group>
					</view>
					<view class="cart_img_row">
						<image :src="item.img" mode="widthFix" />
					</view>
					<view class="cart_info_row">
						<view class="cart_name">{{item.title}}</view>
						<view class="cart_num">
							<view class="goods_price">￥{{item.newPrice}}</view>
							<view class="edit_num">
								<view class="num_add" :data-id='item.iid' @click="handleAdd">+</view>
								<view class="num">{{item.num}}</view>
								<view class="num_sub" :data-id='item.iid' @click="handleSub">-</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <uni-cart :cart="cart" @handleCheck='handleCheck' @handleAdd='handleAdd' @handleSub='handleSub'></uni-cart> -->

		<view class="foot_tool">
			<view class="all_chk_row">
				<checkbox-group @click="handleAllCheck">
					<checkbox :checked="allChecked">全选</checkbox>
				</checkbox-group>
			</view>
			<view class="total_price_row">
				<view class="total_price">￥{{totalPrice}}</view>
				<view class="title">包含运费</view>
			</view>
			<view class="order_pay_row" @click="handlePay">
				结算（{{totalNum}}）
			</view>
		</view>
		<!-- <uni-foot :totalNum="totalNum" :totalPrice="totalPrice" @handlePay='handlePay' @handleAllCheck='handleAllCheck'></uni-foot> -->

	</view>
</template>

<script>
	import uniNav from '../../component/uni-nav.vue'

	import uniCart from './components/uniCart.vue'
	import uniFoot from './components/uniFoot.vue'
	export default {
		data() {
			return {
				cart: [],
				allChecked: false,
				totalPrice: 0,
				totalNum: 0
			}
		},
		components: {
			uniNav,
			uniCart,
			uniFoot
		},
		onShow() {
			this.cart = uni.getStorageSync('cart') || []
			this.setCart(this.cart)
		},
		methods: {
			handleCheck(e) {
				// console.log(e.currentTarget.dataset.id)
				const goods_id = e.currentTarget.dataset.id
				const cart = this.cart
				const index = cart.findIndex(v => v.iid === goods_id)
				cart[index].checked = !cart[index].checked
				this.setCart(cart)
			},
			handleAllCheck() {
				let cart = this.cart
				let allChecked = this.allChecked
				allChecked = !this.allChecked
				console.log(this.allChecked)
				cart.forEach(v => v.checked = allChecked)
				this.setCart(cart)
			},
			setCart(cart) {
				let allChecked = true
				let totalPrice = 0
				let totalNum = 0
				cart.forEach(v => {
					if (v.checked) {
						totalPrice += v.num * v.newPrice
						totalNum += v.num
					} else {
						allChecked = false
					}
				})
				totalPrice = totalPrice.toFixed(2)
				allChecked = cart.length != 0 ? allChecked : false
				this.cart = cart
				this.totalNum = totalNum
				this.totalPrice = totalPrice
				this.allChecked = allChecked
				uni.setStorageSync('cart', cart)
			},
			handleAdd(e) {
				const cart = this.cart
				const goods_id = e.currentTarget.dataset.id
				const index = cart.findIndex(v => v.iid === goods_id)
				cart[index].num++
				this.setCart(cart)
			},
			handleSub(e) {
				const cart = this.cart
				const goods_id = e.currentTarget.dataset.id
				const index = cart.findIndex(v => v.iid === goods_id)
				if (cart[index].num == 1) {
					uni.showToast({
						title: '至少买一件',
						icon: 'none'
					})
				} else {
					cart[index].num--
					this.setCart(cart)
				}
			},
			handlePay() {
				const totalNum = this.totalNum
				if (totalNum == 0) {
					uni.showToast({
						title: '请选择要购买的商品',
						icon: 'none'
					})
				} else {
					let cart = this.cart
					this.setCart(cart)
					uni.setStorageSync('pay', cart)
					uni.navigateTo({
						url: '/pages/pay/pay'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';

	.cart_row {
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

	.cart_item .cart_check_row {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

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
	}

	.goods_price {
		flex: 1;
		font-size: 40rpx;
		color: #ff5777;
	}

	.edit_num {
		flex: 1;
		display: flex;
		justify-content: space-between;
	}

	.num_add,
	.num_sub {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1rpx solid #ccc;
	}

	.num {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.foot_tool {
		position: fixed;
		left: 0;
		bottom: 130rpx;
		width: 100%;
		height: 90rpx;
		background: #fff;
		display: flex;
		border-top: 1rpx solid #ccc;
	}

	.all_chk_row {
		flex: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		color: #666;
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
