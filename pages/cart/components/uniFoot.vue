<template>
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
</template>

<script>
	export default{
		props:{
			totalPrice:{
				type:String
			},
			totalNum:{
				type:String
			}
		},
		methods:{
			handleAllCheck(){
				this.$emit('handleAllCheck')
			},
			handlePay(){
				this.$emit('handlePay')
			}
		}
	}
</script>

<style lang="scss">
	
	.foot_tool{
	  position: fixed;
	  left: 0;
	  bottom: 0;
	  width: 100%;
	  height: 90rpx;
	  background: #fff;
	  display: flex;
	  border-top: 1rpx solid #ccc;
	}
	.all_chk_row{
	  flex: 2;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  font-size: 30rpx;
	  color: #666;
	}
	.total_price_row{
	  flex: 5;
	  text-align: right;
	  padding-right: 10rpx;
	}
	.total_price{
	  color: #ff5777;
	}
	.total_price_row .title{
	  font-size: 30rpx;
	}
	.order_pay_row{
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
