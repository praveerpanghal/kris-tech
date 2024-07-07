const API_URL = 'http://localhost:8081/api/ContactUs';

export const getContacts = async() => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    return await response.json();
};
