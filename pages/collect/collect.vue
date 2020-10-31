<template>
	<view class="">
		<uni-nav>
			<text slot="left" class="iconfont icon-fanhui back" @click="back"></text>
			<view slot="center">
				商品收藏
			</view>
		</uni-nav>
		
		<!-- <view class="collect_tab">
			<block v-for="(item,index) in tab" :key='index'>
				<view class="tab_item" @click="handle_tab(index)">
					<view :class="currentIndexTab==index?'active':''">{{item}}</view>
				</view>
			</block>
		</view> -->
		<uni-tab :currentIndexTab='currentIndexTab' @handle_tab='handle_tab'></uni-tab>
		
		<!-- <view class="collect_main">
			<view class="collect_title">
				<block v-for="(item,index) in tips" :key='index'>
					<view class="collect_tips" @click="handle_tip(index)">
						<view :class="currentIndexTip==index?'activeTip':''">
							{{item}}
						</view>
					</view>
				</block>
			</view>
			<view class="content">
				<view class="title">
					商品收藏
				</view>
				<block v-for="(item,index) in collect" :key='index'>
					<view class="content_item" @click="handleItem(item.iid)">
					<image :src="item.img" mode="aspectFill"></image>
					<view class="info">
						<view class="desc">{{item.title}}</view>
						<view class="price">￥{{item.newPrice}}</view>
					</view>
				</view>
				</block>
			</view>
		</view> -->
		<uni-main :currentIndexTip="currentIndexTip" :collect="collect" @handle_tip='handle_tip' @handleItem='handleItem'></uni-main>
		
	</view>
</template>

<script>
	import uniNav from '../../component/uni-nav.vue'
	
	import uniTab from './components/uniTab.vue'
	import uniMain from './components/uniMain.vue'
	export default {
		data() {
			return {
				currentIndexTab: 0,
				currentIndexTip: 0,
				
				
				collect:[]
			}
		},
		components: {
			uniNav,
			uniTab,
			uniMain
		}, 
		onShow() {
			this.collect=uni.getStorageSync('collect')
			console.log(this.collect)
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			handle_tab(index) {
				this.currentIndexTab = index
			},
			handle_tip(index){
				this.currentIndexTip=index
			},
			handleItem(iid){
				uni.navigateTo({
					url:'/pages/detail/detail?iid='+iid 
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';

	.back {
		font-size: 40rpx;
	}

	
</style>
