import {BaseURL} from './config.js'

export default function (option){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BaseURL+option.url,
			method:option.method||'get',
			data:option.data||{},
			success:resolve,
			fail:reject
		})
	})
}