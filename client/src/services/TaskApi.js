class TaskApi {
    constructor(){
        this.baseUrl = 'http://localhost:8000/api'
    }

    async send_request(token, url, method, body={}){
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
        const response = await fetch(url, info)
        return response 
    }

    async retrieve_tasks(){

    }

    async create_task(token, body){
        return await this.send_request(
            token,
            `${this.baseUrl}/tasks/`,
            'POST',
            body
        )
    }

    async update_task(){

    }

    async delete_task(token, id){
        return await this.send_request(
            token,
            `${this.baseUrl}/tasks/${id}/`,
            'DELETE'
        )
    }
}

export default new TaskApi()

