class Auth {
    constructor(){
        this.baseUrl = process.env.REACT_APP_API_BASE_URL
    }

    async send_post_request(path, body){
        const response = await fetch(`${this.baseUrl}/${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        return response
    }

    async getToken(email, password){
        return await this.send_post_request('users/login', {email, password})
    }

    async createUser(username, email, password){
        return await this.send_post_request('users/register', {username, email, password})
    }
}

export default new Auth()
