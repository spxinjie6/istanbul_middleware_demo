// 引入axios  
import axios from 'axios';  
  
// 封装POST请求  
export function postData(url, data) {  
  return axios.post(url, data, {headers: {'Content-Type': 'application/json'}})  
    .then(response => {  
      // 可以在这里处理响应数据，但通常直接返回给调用者  
      return response.data;  
    })  
    .catch(error => {  
      // 处理错误，可以抛出错误或者返回错误信息  
      console.error('Error posting data:', error);  
      throw error;  
    });  
}