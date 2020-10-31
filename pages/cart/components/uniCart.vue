<template>
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
				  <image :src="item.img" mode="widthFix"/>
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
</template>

<script>
	export default{
		props:{
			cart:{
				type:Array,
				default:[]
			}
		},
		methods:{
			handleCheck(){
				this.$emit('handleCheck',id)
			},
			handleAdd(){
				this.$emit('handleAdd',id)
			},
			handleSub(){
				this.$emit('handleSub',id)
			}
		}
	}
</script>

<style lang="scss">
	.cart_row{
		padding-top: 140rpx;
	}
	.cart_title{
	  padding: 20rpx;
	  font-size: 50rpx;
	  border-top: 1rpx solid #ccc;
	  border-bottom: 1rpx solid #ccc;
	}
	.cart_item{
	  display: flex;
	  padding: 20rpx;
	  border-bottom: 1rpx solid #ccc;
	}
	.cart_item .cart_check_row{
	  flex: 1;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	
	}
	.cart_item .cart_img_row{
	  flex: 2;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	
	}
	.cart_img_row image{
	  width: 70%;
	}
	.cart_item .cart_info_row{
	  flex: 4;
	  display: flex;
	  justify-content: space-around;
	  flex-direction: column;
	}
	/* 内容显示两行 多出的用 ... 表示 */
	.cart_info_row .cart_name{
	  display: -webkit-box ;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  word-break: break-all;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp:2;
	}
	
	.cart_num{
	  display: flex;
	}
	.goods_price{
	  flex: 1;
	  font-size: 40rpx;
	  color: #ff5777;
	}
	.edit_num{
	  flex: 1;
	  display: flex;
	  justify-content: space-between;
	}
	.num_add,.num_sub{
	  width: 60rpx;
	  height: 60rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  border: 1rpx solid #ccc;
	}
	.num{
	  width: 60rpx;
	  height: 60rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	
	}
</style>
