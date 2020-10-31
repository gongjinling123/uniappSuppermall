<template>
	<view class="user_info_row" @click="handleLogin">
		<block v-if="user==''">
			<text class="login">登录</text>
		</block>
		<block v-if="user!=''"> 
			<view class="title">
				欢迎登陆
			</view>
			<view class="user_info">
				<image class="user_avatar" :src="user.user_avatar" mode="aspectFill"></image>
				<view class="user_desc">
					<view class="user_name">{{user.user_name}}</view>
					<view class="user_address">{{user.user_address}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			user:{
				type:Object,
				default:{}
			}
		},
		methods:{
			handleLogin(){
				this.$emit('handleLogin')
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.user_info_row {
		width: 100%;
		height: 600rpx;
		background-color: #ff5777;
		position: relative;
	}
	.more{
		font-size: 60rpx;
	}
	.title{
		height: 150rpx;
		position: absolute;
		left: 50rpx;
		right: 50rpx;
		top: 200rpx;
		color: #fff;
		font-size: 46rpx;
		font-weight: 900;
	}
	.user_info{
		height: 150rpx;
		position: absolute;
		left: 50rpx;
		right: 50rpx;
		top: 300rpx;
		display: flex;
		// background-color: purple;
		background-color: #fff;
		border-radius: 20rpx;
	}
	.user_avatar{
		margin: 30rpx;
		height: 100rpx;
		flex: 1;
		border-radius: 50%;
	} 
	.user_desc{
		flex: 5;
		display: flex;
		flex-direction: column;
	}
	.user_name{
		flex: 1;
		display: flex;
		align-items: center;
	}
	.user_address{
		flex: 1;
		display: flex;
		align-items: center;
		font-size: 28rpx;
	}
	.login {
		width: 230rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		color: #fff;
		border: 1rpx solid #4CD964;
		box-shadow: 0 0 6rpx #4CD964;
		border-radius: 10rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
</style>
