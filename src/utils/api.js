const REQUEST_PREFIX = 'http://localhost:5000/api/'
const APIS = {
    // 写请求地址
}

for (let i in APIS){
    APIS[i] = REQUEST_PREFIX + APIS[i]
}

export default APIS
