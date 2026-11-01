
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";

import { searchEmployees } from "./services/employeeService";

function App() {

    const [search, setSearch] = useState("");
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searched, setSearched] = useState(false);

    useEffect(() => {

        const searchText = search.trim();

        if (!searchText) {
            setEmployees([]);
            setLoading(false);
            setError("");
            setSearched(false);
            return;
        }

        const controller = new AbortController();

        const timer = setTimeout(async () => {

            setLoading(true);
            setError("");
            setSearched(false);

            try {

                const data = await searchEmployees(
                    searchText,
                    controller.signal
                );

                setEmployees(data);
                setSearched(true);

            } catch (err) {

                if (err.name !== "AbortError") {
                    setError("Unable to connect to the server. Please try again later.");
                    setEmployees([]);
                }

            } finally {

                if (!controller.signal.aborted) {
                    setLoading(false);
                }

            }

        }, 500);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };

    }, [search]);


    return (

        <div className="container">

            <h1>Employee Directory</h1>

            <p>Search and view employee details</p>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            {loading && (
                <p>Loading employees...</p>
            )}

            {error && (
                <p className="error">{error}</p>
            )}

            {!loading && !error && searched && employees.length === 0 && (
                <p>No employees found.</p>
            )}

            {!loading && employees.length > 0 && (
                <EmployeeList employees={employees} />
            )}

            {!search.trim() && (
                <p>Enter an employee name or department to search.</p>
            )}

        </div>

    );

}

export default App;
