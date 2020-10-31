<template>
	<view class="">
		<view class="recommend">
			<block v-for="(item,index) in recommend" :key='index'>
				<view class="recommend-item">
					<image :src="item.image" @load="handleImageLoad"></image>
					<view>{{item.title}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			recommend:{
				type:Array
			}
		},
		data(){
			return {
				isLoad:false
			}
		},
		methods:{
			handleImageLoad(){
				if(!this.isLoad){
					this.$emit('imageload')
					this.isLoad=true
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		box-sizing: border-box;
	}
	.recommend{
		display: flex;
		padding-bottom: 60rpx;
		margin-top: 50rpx;
		border-bottom: 16rpx solid #eee;
	}
	.recommend-item{
		flex: 1;
		text-align: center;
	}
	.recommend-item image{
		width: 160rpx;
		height: 160rpx;
	}
	.recommend-item view{
		color: #666;
		font-size: 30rpx;
	}
</style>
