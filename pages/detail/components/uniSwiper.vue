<template>
	<view class="detail-swiper">
		<swiper circular="true" autoplay="true" interval="3000">
			<block v-for="(item,index) in banner" :key="index">
				<swiper-item>
						<image :src="item"></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			banner: {
				type: Array
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	@import '../../../static/iconfont/iconfont.css';
	.detail-swiper{
		margin-top: 140rpx;
	}
	swiper{
		height: 400rpx;
		overflow: hidden;
	}
	swiper-item{
		width: 100%;
		height: 100%;
	}
	swiper image{
		width: 100%;
	}
</style>
