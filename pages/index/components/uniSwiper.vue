<template>
	<view class="">
		<view class="page-section-spacing" >
		    <swiper class="swiper" 
					circular="true"
					autoplay="true"
					interval="3000"
					>
		        <block v-for="(item,index) in banner" :key="index">
					<swiper-item>
					    <view class="swiper-item">
							<image :src="item.image" mode="widthFix"></image>
						</view>
					</swiper-item>
				</block>
		    </swiper>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			banner:{
				type:Array
			}
		},
		data(){ 
			return {
				 
			}
		}
	}
</script> 

<style lang="scss">
	
	.page-section-spacing{
		margin-top: 140rpx;
		width: 750rpx;
		height: 340rpx;
	}
	.swiper{
		width: 750rpx;
		height: 340rpx;
		box-sizing: border-box;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
	}
	.swiper-item image{
		width: 100%;
	}
</style>
