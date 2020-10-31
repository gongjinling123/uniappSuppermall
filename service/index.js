import request from './network.js'

//轮播图与推荐
export function getMultiData(){
	return request({
		url:'/home/multidata'
	}) 
}

// 商品数据
export function getGoodsData(type,page){
	return request({
		url:'/home/data/new1',
		data:{
			type,
			page
		}  
	})
}
 
// 商品详情数据
export function getIndexDetail(iid){
  return request({
    url: '/detail',
    data: {
      iid
      },
      
  })
}
// 详情页的推荐
export function getRecommend(){
  return request({
    url: '/recommend'
  })
}