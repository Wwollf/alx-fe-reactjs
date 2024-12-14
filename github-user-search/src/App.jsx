import React, { useEffect } from "react";
import { fetchUserData } from "./services/githubAPI";

function App() {
    useEffect(() => {
        const testAPI = async () => {
            const userData = await fetchUserData("octocat"); // Test with a username
            console.log(userData); // Check the user data in the browser console
        };
        testAPI();
    }, []);

    return (
        <div>
            <h1>GitHub User Search Application</h1>
        </div>
    );
}

export default App;


