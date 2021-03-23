async function myFetch<T>(url: string) {
    const response = await fetch(url)
    
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`)
    }

    const responseBody = await response.json()
    return responseBody as T
}

export async function get<T>(url: string) {
    return myFetch<T>(url)
}