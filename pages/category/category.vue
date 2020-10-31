<template>
	<view class="">
		<uni-nav>
			<view slot="center">
				商品分类
			</view>
		</uni-nav>
		<view class="container">
			<view class="left_menu">
				<block v-for="(item,index) in menu" :key="index">
					<view class="menu_item" 
								:class="currentIndex==index?'active':''" 
								@click="handle_menu"
								:data-index="index" 
								:data-id="item.maitKey">
						{{item.title}}
					</view>
				</block>
			</view>	 
			<view class="right_content">
				 <block v-for="(item,index) in category" :key='index'>
				    <view class="category_item">
				      <image mode="widthFix" :src="item.image"/>
				      <view class="title">{{item.title}}</view>
				    </view>
				  </block>
			</view>
		</view>
		
	</view>
</template>

<script> 
	import {getCategory,getSubcategory} from '../../service/category.js'
	import uniNav from '../../component/uni-nav.vue'
	export default{
		data(){
			return{
				menu:[],
				currentIndex:0,
				maitKey: 3627,
				category:[]
			}
		},
		components:{
			uniNav
		},
		onLoad() {
			uni.showLoading({
				title:'加载中category'
			})
			this._getCategory(),
			this._getSubcategory(this.maitKey)
		},
		onShow() {
			this._getCategory()
		},
		methods:{ 
			_getCategory(){
				getCategory().then(res=>{
					this.menu=res.data.data.category.list
				})
			},
			_getSubcategory(maitKey){
				getSubcategory(maitKey).then(res=>{
					console.log(res.data.requestDetail)
					uni.hideLoading()
					this.category=res.data.requestDetail.data.list
					console.log(this.category)
				})
			},
			
			
			
			handle_menu(e){
				uni.showLoading({
					title:'加载中category'
				})
				console.log(e.target.dataset)
				this.currentIndex=e.target.dataset.index
				this.maitKey=e.target.dataset.id
				this._getSubcategory(this.maitKey)
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.container{
		height: 100vh;
		position: relative;
		// background-color: purple;
		display: flex;
	}
	.left_menu{
		// flex: 2;
		width: 200rpx;
		position: absolute;
		top: 130rpx;
		bottom: 0;
		// background-color: red;
		overflow: scroll;
	}
	.menu_item{
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		border-bottom: 1rpx solid #dedede;
		border-right: 1rpx solid #dedede;
	}
	.active{
		color: #ff5777;
		border-left: 6rpx solid #ff5777;
	}
	.right_content{
		// flex: 1;
		box-sizing: border-box;
		margin-left: 240rpx;
		position: absolute;
		top: 130rpx;
		bottom: 0;
		overflow: scroll;
		// background-color: pink;
	}
	
	.category_item{
	  width: 30%;
	  height: 180rpx;
	  float: left;
	  margin: 30rpx 8rpx;
	}
	.category_item image{
	  width: 100%;
	}
	.category_item .title{
	  font-size: 30rpx;
	  text-align: center;
	  color: #333;
	}
</style>
