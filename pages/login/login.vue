<template>
	<view class="">
		<uni-nav>
			<view class="iconfont icon-fanhui back" @click="handleBack" slot="left"></view>
			<view slot="center">
				账号管理
			</view>
		</uni-nav>
		<button v-if="user==''" plain type="primary" @click="handleLogin">登录</button>
		<button v-if="user!=''" plain type="primary" @click="handleQuit">退出登录</button>
	</view>
</template>

<script>
	import uniNav from '../../component/uni-nav.vue'
	export default{
		data(){
			return {
				user:{}
			}
		},
		components:{
			uniNav
		},
		onShow(){
			this.user=uni.getStorageSync('user')
		},
		methods:{
			handleBack(){
				uni.navigateBack({
					delta:1
				})
			},
			handleLogin(){
				uni.login({
					provider:'weixin',
					success: function (loginRes) {
					    // 获取用户信息
					    uni.getUserInfo({
					      provider: 'weixin',
					      success: function (res) {
					        const user_name=res.userInfo.nickName
									const user_address=res.userInfo.country+'-'+res.userInfo.province+'-'+res.userInfo.city
									const user_avatar=res.userInfo.avatarUrl
									this.user={
										user_name,
										user_address,
										user_avatar
									}
									uni.setStorageSync('user',this.user)
					      }
					    });
							
								uni.showToast({
									title:'登录成功'
								})
								setTimeout(function(){
									uni.switchTab({
										url:'../profile/profile'
									})
								},500)
					  }
				})
			
			},
			handleQuit(){
				uni.showModal({
					title:'是否要退出账号',
					success(res) {
						if(res.confirm){
							// uni.removeStorageSync('user')
							uni.removeStorageSync('user')
							setTimeout(function(){
								uni.switchTab({
									url:'../profile/profile'
								})
							},500)
						}else if(res.cancel){
							
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';
	button{
	  width: 80%;
	  margin-top: 160rpx;
	}
	.handleBack{
		font-size: 40rpx;
	}
</style>
