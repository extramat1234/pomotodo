const API_CONFIG = {
    baseUrl: 'https://pomotodo-backend.onrender.com/api',
    timeout: 10000,
    endpoints: {
        login: '/login',
        register: '/register',
        todos: '/todos',
        todoToggle: '/todos/toggle',
        todoPomo: '/todos/pomo',
        todoTitle: '/todos/title',
        completedTodos: '/completed-todos'
    }
};