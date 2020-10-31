<template>
	<view class="">
		<!-- 导航 -->
		<uni-nav>
			<view slot="left">
				<view class="iconfont icon-fanhui" @click="back"></view>
			</view>
			<view slot="center">
				商品详情
			</view>
		</uni-nav>
		<!-- 轮播图 -->
		<uni-swipers :banner="banner"></uni-swipers>
		<!-- 商品title -->
		<uni-goods :goods="goods" :isCollect="isCollect" @collect='handle_collect'></uni-goods>
		
		<!-- 商品价格 -->
		<uni-price :goods='goods'></uni-price>
		
		<!-- 店铺信息 -->
		<uni-shop :shopLogo="shopLogo" :shopName="shopName" :cGoods="cGoods" :cSells="cSells" :score="score"></uni-shop>
		
		<!-- 穿着效果 -->
		<uni-show :descKey="descKey" :detailImages='detailImages'></uni-show>
		
		<!-- 商品评论 -->
		<uni-comment :rate="rate"></uni-comment>
		
		<!-- 商品推荐 -->
		<uni-recommend :recommend="recommend"></uni-recommend>
		
		<!-- 底部工具栏 -->
		<btm-tool @share='share' @addCart='addCart'></btm-tool>
	
		<!-- 返回顶部 -->
		<uni-back v-show="showBackTop" @click.native="backTop"></uni-back>
	</view>
</template>

<script>
	import {
		getIndexDetail,
		getRecommend
	} from '../../service/index.js'

	import uniNav from '../../component/uni-nav.vue'
	import uniBack from '../../component/uni-back.vue'

	import uniSwipers from './components/uniSwiper.vue'
	import uniGoods from './components/uniGoods.vue'
	import uniPrice from './components/uniPrice.vue'
	import uniShop from './components/uniShop.vue'
	import uniShow from './components/uniShow.vue'
	import uniComment from './components/uniComment.vue'
	import uniRecommend from './components/uniRecommend.vue'
	import btmTool from './components/btmTool.vue'

	export default {
		data() {
			return {
				showBackTop:false,
				banner: [],
				goods: {},
				isCollect:false,
				shopLogo:'',
				shopName:'',
				cGoods:0,
				cSells:0,
				score:[],
				desc:'',
				descKey:'',
				detailImages:[],
				rate:{},
				recommend:[]
			}
		},
		components: {
			uniNav,
			uniSwipers,
			uniGoods,
			uniPrice,
			uniShop,
			uniBack,
			uniShow,
			uniComment,
			uniRecommend,
			btmTool
		},
		onLoad(option) {
			uni.showLoading({
				title:'加载中detail...'
			})
		},
		onShow() {
			let pages = getCurrentPages() //页面栈
			let currentPage = pages[pages.length - 1]
			let option = currentPage.options
			this.goods.iid=option.iid
			this._getIndexDetail(option.iid)
			this._getRecommend()
		},
		onPageScroll(option) {
			const scrollTop = option.scrollTop 
			//显示返回顶部
			const flag = scrollTop >= 800
			if (flag != this.showBackTop) {
				this.showBackTop = flag
			}
		},
		
		methods: {
			_getIndexDetail(iid) {
			 getIndexDetail(iid).then(res => {
					uni.hideLoading()
					console.log(res.data.requestDetail.result)
					const data = res.data.requestDetail.result
					const iid=res.data.requestDetail.iid
					const banner=data.itemInfo.topImages
					const img=banner[0]
					const checked=true
					const title = data.skuInfo.title
					const newPrice=data.itemInfo.lowNowPrice
					const oldPrice=data.itemInfo.oldPrice
					const discountDesc=data.itemInfo.discountDesc
					
					const shopInfo=data.shopInfo
					const shopLogo=shopInfo.shopLogo
					const shopName=shopInfo.name
					const cGoods=shopInfo.cGoods
					const cSells=shopInfo.cSells
					const score=shopInfo.score 
					
					const detailInfo=data.detailInfo.detailImage[0]
					const desc=detailInfo.desc
					const descKey=detailInfo.key
					const detailImages=detailInfo.list
					  
					const rate=data.rate.list[0]
					const user_avatar=rate.user.avatar 
					const user_name=rate.user.name
					const content=rate.content
					const images=rate.images 
					const style=rate.style
					const explain=rate.explain

					// 轮播图数据
					this.banner = data.itemInfo.topImages
					// 商品信息
					this.goods = {
						iid,
						title,
						img,
						checked,
						newPrice,
						oldPrice,
						discountDesc
					}
					// 店铺信息
					this.shopLogo=shopLogo
					this.shopName=shopName
					this.cGoods=cGoods
					this.cSells=cSells
					this.score=score
					// 穿着效果
					this.desc=desc
					this.descKey=descKey
					this.detailImages=detailImages
				  // 评论信息
					this.rate={
						user_avatar,
						user_name,
						content,
						images,
						style,
						explain
					}
				let collect= uni.getStorageSync('collect')||[] 
				console.log(collect,'111111111111')
				const isCollect=collect.some(v=>v.iid===this.goods.iid)
				this.isCollect=isCollect
				})
			},
			_getRecommend(){
				getRecommend().then(res=>{
					this.recommend=res.data.data.list
					// console.log(this.recommend)
				})
			}, 


			handle_collect(){
				let isCollect=false
				let collect=uni.getStorageSync('collect')||[]
				console.log(collect)
				const index=collect.findIndex(v=>v.iid===this.goods.iid)
				if(index!==-1){
					// 收藏过了，取消收藏
					collect.splice(index,1)
					this.isCollect=false
					uni.showToast({
						title:'取消收藏',
						icon:'success',
						mask:true
					})
					
						console.log(this.isCollect)
				}else{
					console.log(this.goods,'goods')
					collect.push(this.goods)
					this.isCollect=true
					uni.showToast({
						title:'收藏成功',
						icon:'success',
						mask:true
					})
					
						console.log(this.isCollect)
				}
				uni.setStorageSync('collect',collect)
				// this.isCollect=isCollect
			},
			share(){
				uni.share({
					  provider: "weixin",
					    scene: "WXSceneSession",
					    type: 1,
					    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					    success: function (res) {
					        console.log("success:" + JSON.stringify(res));
					    },
					    fail: function (err) {
					        console.log("fail:" + JSON.stringify(err));
					    }
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 600
				})
			},
			addCart(){
				const cart=uni.getStorageSync('cart')||[]
				let index=cart.findIndex(v=>v.iid===this.goods.iid)
				if(index===-1){
					this.goods.num=1
					cart.push(this.goods)
				}else{
					cart[index].num++
				}
				uni.setStorageSync('cart',cart)
				uni.showToast({
					title:'添加成功',
					icon:'success',
					mask:true
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';
	page{
		padding-bottom: 90rpx;
	}
	

</style>
