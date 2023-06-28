export async function getPosts() {
    const token = process.env.GOREST_TOKEN_CLIENT;
    const res = await fetch(`https://gorest.co.in/public/v2/posts`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        next: {revalidate:10},
    })
    const posts = await res.json()

    return posts;
}

export const getPostList = async (page) => {
    const token = process.env.GOREST_TOKEN_CLIENT;
    const res = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=8`, {
        next: {revalidate:10},
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    const posts = await res.json();
    return posts;
}

export async function getComments(postId) {
    const token = process.env.GOREST_TOKEN_CLIENT;
    const res = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        next: {revalidate:10},
    })
    const comments = await res.json()

    return comments;
}

export const getUserList = async (page) => {
    const token = process.env.GOREST_TOKEN_CLIENT;
    const res = await fetch(`https://gorest.co.in/public/v2/users?page=${page}&per_page=8`, {
        next: {revalidate:10},
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    const users = await res.json();
    return users;
}

export async function getUser(id) {
    try {
        const token = process.env.GOREST_TOKEN_CLIENT;
        const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            next: {revalidate:10}
        })

        if (response.ok) {
            const user = await response.json();
            return user;
        }
        else {
            console.log('Failed to get user:', response.status)
            const deletedUser = {name: 'Deleted User'}
            return deletedUser;
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const deleteUser = async (id, callback = null) => {
    try {
        const token = process.env.GOREST_TOKEN_CLIENT;
        const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        if (response.status == 204) {
            const message = "Data berhasil dihapus"
            console.log(message)
            if (callback) callback()
        }
        else {
            console.log('Failed to delete user:', response.status)
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}

export async function updateUser(id, data) {
    try {
        const token = process.env.GOREST_TOKEN_CLIENT;
        const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(response.ok) {
            const updatedUser = await response.json();
            console.log('User updated:', updatedUser)
            router.push('/users');                
        }
        else {
            console.log('Failed to update user:', response.status)
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}