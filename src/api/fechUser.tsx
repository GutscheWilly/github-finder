import User from '../interfaces/User';

async function fechUser(userName: string): Promise<User> {
    const endpoint = `https://api.github.com/users/${userName}`;
    const response = await fetch(endpoint);
    
    return await response.json();
}

export default fechUser;
