<template>
	<view class="">
		<view class="tab">
			<block v-for="(item,index) in titles" :key='index'>
				<view class="tab-item" :class="currentIndex==index?'active':''" @click="handleTab(index)">
					<text>{{item}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			titles:{
				type:Array
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			handleTab(index){
				this.currentIndex=index
				this.$emit('itemClick',index)
			}
		}
	}
</script>

<style lang="scss">
	.tab{
		display: flex;
		height: 88rpx;
		line-height: 88rpx;
		padding-bottom: 20rpx;
		background-color: #fff;
	}
	.tab-item{
		flex: 1;
		text-align: center;
	}
	.active{
	  color: #ff5777; 
	}
	.active text{
	  padding: 20rpx 16rpx;
	  border-bottom: 6rpx solid #ff5777;
	}
</style>
