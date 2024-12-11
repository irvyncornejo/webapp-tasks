class TaskApi {
    constructor(){
        this.baseUrl = 'http://localhost:8000/api'
    }

    async send_request(token, path, method, body={}){
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
        const info = {
            method: method,
            headers
        }
        if (['POST', 'PUT'].includes(method)){
            info['body'] = JSON.stringify(body)
        }
        const response = await fetch(`${this.baseUrl}/${path}`, info)
        return response 
    }

    async retrieve_tasks(){

    }

    async retrive_task(){

    }

    async update_task(){

    }

    async delete_task(){

    }
}