import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default{
  getItems(){
    return apiClient.get('/items')
  },
  getItemDetail(id){
    return apiClient.get('/items/'+id)
  },
  getBrands(){
    return apiClient.get('/brands')
  },
  getCategories(){
    return apiClient.get('/categories')
  },
  getSubcategories(){
    return apiClient.get('/subcategories')
  }
}