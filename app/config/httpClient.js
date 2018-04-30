import { AsyncStorage } from 'react-native'

class HttpClient {

    constructor() {
        this.baseUrl = __DEV__ ? 'http://10.0.0.55:7981' : 'public.api.name' 
    }
    
    async getHeaders() {
        return { Authorization: `Bearer ${JSON.stringify( await AsyncStorage.getItem('token')) || '12345'}` }
    }

    async post( url, body ) {
        try {
            let res = await fetch(`${this.baseUrl}${url}`, {
                method: 'POST',
                headers: await this.getHeaders(),
                body: JSON.stringify({body})
            })
            return await res.json()
        } catch( err ) { 
            console.error(err) 
            return this.handleError()
        }
    }

    async get( url, data ) {
        try {
            let res = await fetch(`${this.baseUrl}${url}`, { headers: await this.getHeaders() })
            return await res.json()
        } catch ( err ) { 
            console.error(err) 
            return this.handleError()
        }
    }

    handleError( error ) {
        return {
            error,
            success: false,
            status: 400
        }
    }
}

export default new HttpClient()