import User from '../interfaces/User';

async function fechUser(userName: string): Promise<User | null> {
    const endpoint = `https://api.github.com/users/${userName}`;
    const response = await fetch(endpoint);

    if (response.ok) {
        return await response.json();
    }

    return null;
}

export default fechUser;
