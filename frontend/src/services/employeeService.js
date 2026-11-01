const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function searchEmployees(search, signal) {

    const response = await fetch(
        `${API_URL}/employees?search=${encodeURIComponent(search)}`,
        { signal }
    );

    if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
            errorData.detail || "Unable to fetch employees"
        );
    }

    return await response.json();
}