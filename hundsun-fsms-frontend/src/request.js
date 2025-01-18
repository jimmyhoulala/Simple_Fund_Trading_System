// src/request.js
import axios from 'axios';

// 创建 axios 实例
const request = axios.create({
    baseURL: 'http://localhost:8080', // 基础 URL，指向你的后端接口地址
    timeout: 50000, // 请求超时时间
});

export default request;
