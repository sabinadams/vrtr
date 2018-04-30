import http from '../../config/httpClient'

class AuthService {

    login() {
        return http.get('/login', { username: 'test', password: 'testpass'})
    }

}

export default new AuthService();