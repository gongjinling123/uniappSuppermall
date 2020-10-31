<template>
		<view class="btm_tool">
			<view class="tool_item">
				<text class="iconfont icon-kefu icon-tool"></text>
				<text>客服</text>
			</view>
			<view class="tool_item" @click="share">
				<text class="iconfont icon-fenxiang icon-tool"></text>
				<text>分享</text>
			</view>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="tool_item">
				<text class="iconfont icon-gouwuche icon-tool"></text>
				<text>购物车</text>
			</navigator>
			<view class="tool_item btm_cart" @click="addCart">
				加入购物车
			</view>
			<view class="tool_item btm_buy">
				立即购买
			</view>
		</view>
</template>

<script>
	export default{
		methods:{
			share(){
				this.$emit('share')
			},
			addCart(){
				this.$emit('addCart')
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.btm_tool{
	  display: flex;
	  position: fixed;
	  left: 0;
	  bottom: 0;
	  background: #fff;
	  width: 100%;
	  height: 90rpx;
	  font-size: 30rpx;
	}
	.btm_tool .tool_item{
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  position: relative;
	}
	.btm_tool image{
	  width: 40rpx;
	  height: 40rpx;
	}
	.btm_tool button{
	  position: absolute;
	  left:0;
	  top: 0;
	  width: 100%;
	  height: 100%; 
	  opacity: 0;
	}
	.btm_tool .btm_cart{
	  flex: 2;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  background: #c80090;
	  font-size: 30rpx;
	  font-weight: 600;
	  color: #fff;
	}
	.btm_tool .btm_buy{
	  flex: 2;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  background: #a86800;
	  font-size: 30rpx;
	  font-weight: 600;
	  color: #fff;
	}
	.icon-tool{
		font-size: 38rpx;
	}
</style>
