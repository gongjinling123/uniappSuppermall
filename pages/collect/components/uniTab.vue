<template>
	<view class="collect_tab">
		<block v-for="(item,index) in tab" :key='index'>
			<view class="tab_item" @click="handle_tab(index)">
				<view :class="currentIndexTab==index?'active':''">{{item}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tab: ['商品收藏', '品牌收藏', '店铺收藏', '浏览足迹']
			}
		},
		props:{
			currentIndexTab:{
				type:Number
			}
		},
		methods:{
			handle_tab(index){
				this.$emit('handle_tab',index)
			}
		}
	}
</script>

<style lang="scss">
	.collect_tab {
		padding-top: 140rpx;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
	}
	
	.tab_item {
		flex: 1;
		font-size: 28rpx;
		padding: 0 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.active {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2rpx solid red;
	}
	
</style>
