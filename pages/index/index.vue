<template>
	<view class="content">
		<!-- 导航栏 -->
		<uni-nav>
			<view slot="center">
				首页
			</view>
		</uni-nav>
		<!-- 轮播图 -->
		<uni-swipers :banner="banner" />
		<!-- 推荐 -->
		<uni-recommend :recommend="recommend" @imageload='handleImageLoad' />

		<!-- 流行  新款  精选 -->
		<uni-tab id="tab-control" :titles="titles" @itemClick='handleTabClick' :class="isTabFixed?'fixed':''" />
		<!-- <uni-tab :titles="titles" @itemClick='handleTabClick' v-if="isTabFixed" /> -->

		<view class="goods">
			<block v-for="(item,index) in goods[currentType].list" :key='index'>
				 <view class="goods_item" @click="detail(item.iid)">
					<image class="goods_img" :src="item.show.img" mode="widthFix"></image>
					<view class="goods_info">
						<view class="title">{{item.title}}</view>
						<view class="info">
							<text class="price">￥{{item.price}}</text>
							<text class="iconfont icon-shoucang icon"></text>
							<text class="cfav">{{item.cfav}}</text>
						</view>
					</view>
				</view> 
			</block>
		</view>
		<!-- 返回顶部 -->
		<uni-back v-show="showBackTop" @click.native="backTop"></uni-back>
	</view>
</template>

<script>
	import {
		getMultiData,
		getGoodsData
	} from '../../service/index.js'

	import uniNav from '../../component/uni-nav.vue'
	import uniBack from '../../component/uni-back.vue'

	import uniSwipers from './components/uniSwiper.vue'
	import uniRecommend from './components/uniRecommend.vue'
	import uniTab from './components/uniTab.vue'

	const types = ['pop', 'new', 'sell']
	export default {
		data() {
			return {
				banner: [],
				recommend: [],
				titles: ['流行', '新款', '精选'],
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					}
				},
				currentType: 'pop',
				tabScrollTop: 0,
				isTabFixed: false,
				showBackTop: false
			}
		},
		components: {
			uniNav,
			uniSwipers,
			uniRecommend,
			uniTab,
			uniBack
		},
		onLoad() {
			uni.showLoading({
				title: '加载中index...'
			})
			this._getMultiData()
			this._getGoodsData('pop')
			this._getGoodsData('new')
			this._getGoodsData('sell')
		},
		methods: {
			// --------------网络请求-------------
			_getMultiData() {
				getMultiData().then(res => {
					console.log(res)
					this.banner = res.data.data.banner.list
					this.recommend = res.data.data.recommend.list
					console.log(this.banner)
				})
			}, 
			_getGoodsData(type) {
				const page = this.goods[type].page + 1
				getGoodsData(type, page).then(res => {
					console.log(res.data.requestDetail,'ddddddddddddddddddd')
					// 获取数据
					const list = res.data.requestDetail.data.list
					// 将数据设置到type的list中
					const oldList = this.goods[type].list
					oldList.push(...list)
					this.goods[type].page = page
					this.goods[type].list = oldList
					uni.hideLoading()
				})
			},
			// -------------事件监听------------
			handleImageLoad() {
				const query = uni.createSelectorQuery().in(this)
				query.select('#tab-control').boundingClientRect(data => {
					this.tabScrollTop = data.top
					console.log(data.top, '----------------', this.tabScrollTop)
				}).exec()
			},
			handleTabClick(index) {
				this.currentType = types[index]
				console.log(this.currentType)
			},
			detail(id){ 
				console.log('----------',id)
				uni.navigateTo({
					url:'/pages/detail/detail?iid='+id 
				})
			}, 
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 600
				})
			} 
		},
		onPageScroll(option) {
			const scrollTop = option.scrollTop + 70
			// tab栏停留顶部
			const flag1 = scrollTop >= this.tabScrollTop
			
			if (flag1 != this.isTabFixed) {
				this.isTabFixed = flag1
			}
			//显示返回顶部
			const flag = scrollTop >= 800
			if (flag != this.showBackTop) {
				this.showBackTop = flag
			}
		},
		onReachBottom(){
			uni.showLoading({
				title: '加载中...'
			})
			this._getGoodsData(this.currentType)
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';


	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
		// background-color: pink;
	}

	.goods_item {
		width: 46%;
		text-align: center;
		color: #333;
		padding-bottom: 85rpx;
		// border: 2rpx solid #000;
		position: relative;
	}

	.goods_img {
		width: 100%;
		border-radius: 10rpx;
	}

	.goods_info {
		position: absolute;
		left: 0;
		bottom: 5rpx;
		right: 0;
		// background-color: red;
	}

	.title {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 28rpx;
	}

	.info {
		font-size: 26rpx;
		padding: 6rpx 0 10rpx;
	}

	.info .price {
		color: #ff5777;
		margin-right: 40rpx;
	}

	.info .icon {
		width: 30rpx;
		height: 30rpx;
		padding: 0 6rpx 0 10rpx;
		position: relative;
		top: 5rpx;
	}

	.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		padding-top: var(--status-bar-height);
		margin-top: 88rpx;
	}

	
</style>
