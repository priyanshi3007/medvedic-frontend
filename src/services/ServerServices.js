import axios from "axios"

const ServerURL= "http://localhost:8000";

const getData = async(url)=>{
    try {
        var response = await axios.get(`${ServerURL}/${url}`)
        // console.log("Response",response)
        var result = await response.data
        // console.log(result)
        return result
    }
    catch(e) {
        return null
    }    
}

const postData = async(url,body)=>{
    try {
        var response = await axios.post(`${ServerURL}/${url}`, body)
        // console.log("Response",response)
        var result = await response.data
        // console.log("New Result", result)
        return result
    }
    catch(e) {
        return null
    }    
}

export {ServerURL, getData, postData}