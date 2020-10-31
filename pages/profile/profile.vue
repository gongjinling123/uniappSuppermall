<template>
	<view class="profile" @click="container">
		<uni-nav>
			<view slot="center">
				个人中心
			</view>
			<view slot="right" class="iconfont icon-ziyuan more" v-if="user!=''" @click.stop="handleMore"></view>
		</uni-nav>
		
		<view class="user_info_row">
			<block v-if="user==''">
				<text class="login" @click="handleLogin">登录</text>
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
		<!-- <uni-user :user="user" @handleLogin='handleLogin'></uni-user> -->
		
		
		<view class="content">
			<view class="main">
				<!-- 历史足迹 -->
				<uni-history :collectNum='collectNum' @collect='collect'></uni-history>
				
				<!-- 我的订单 -->
				<uni-order @handlePay='handlePay'></uni-order>
				
				<!-- 收货地址 -->
				<uni-address></uni-address>
		
				<!-- 应用信息 -->
				<uni-app-info></uni-app-info>

			</view>
		</view>
		
		<uni-popup ref="popup" type="bottom">
			<view class="popup_box">
				<view class="quit" @click.stop="quit">
					退出账号
				</view>
				<view class="cancel" @click.stop="cancel">
					取消
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNav from '../../component/uni-nav.vue'
	
	import uniUser from './components/uniUser.vue'
	import uniHistory from './components/uniHistory.vue'
	import uniOrder from './components/uniOrder.vue'
	import uniAddress from './components/uniAddress.vue'
	import uniAppInfo from './components/uniAppInfo.vue'
	
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		data(){
			return{
				user:{},
				collectNum:0
			}
		},
		components: {
			uniNav,
			uniUser,
			uniHistory,
			uniOrder,
			uniAddress,
			uniAppInfo,
			
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		},
		onShow() {
			this.user=uni.getStorageSync('user')
			this.collectNum=uni.getStorageSync('collect').length
		},
		methods:{
			handleLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			collect(){
				uni.navigateTo({
					url:'../collect/collect'
				})
			},
			handlePay(){
				uni.navigateTo({
					url:'../pay/pay'
				})
			},
			handleMore(){
				this.$refs.popup.open()
				uni.hideTabBar({
					animation:true 
				})
			},
			quit(){
				uni.showTabBar({
					animation:true
				})
				uni.navigateTo({
					url:'../login/login'
				})
				this.$refs.popup.close()
			},
			cancel(){
				this.$refs.popup.close()
				uni.showTabBar({
					animation:true
				})
			},
			container(){
				uni.showTabBar({
					animation:true
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';
	.profile{
		padding-bottom: 230rpx;
		height: 1300rpx;
	}
	.user_info_row {
		width: 100%;
		height: 600rpx;
		background-color: #ff5777;
		position: relative;
	}
	.more{
		background-color: green;
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

	.popup_box{
		width: 100%;
		height: 180rpx;
		border-radius: 20rpx 20rpx 0 0;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		background-color: #fff;
	}
	.quit{
		border-bottom: 1rpx solid #ccc;
	}
	.quit,
	.cancel{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
	}
	
	
	.content {
		position: relative;
	}

	.main {
		width: 90%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -30rpx;
	}



</style>
