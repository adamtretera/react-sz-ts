

export async function apiGet(endpoint: string) {
    const url = "https://swapi.dev/api/" + endpoint
    const response = await fetch(url);

    if(response.ok) {
        const data = await response.json();
        return data;
    }
    
    return "Chyba"
}