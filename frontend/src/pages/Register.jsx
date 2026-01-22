import { useState } from "react";
import api from "../utils/api";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const submit = async () => {
        setError("");
        setSuccess("");

        if (form.name.length < 5) {
            setError("Name must be at least 5 characters");
            return;
        }

        if (form.password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        try {
            await api.post("/auth/register", form);
            setSuccess("Registration successful. You can now login.");
            setTimeout(() => {
                window.location.href = "/login";
            }, 1500);
        } catch (err) {
            setError(
                err.response?.data?.message || "Registration failed. Try again."
            );
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-80">
                <h2 className="text-xl font-semibold mb-4">Register</h2>

                {error && (
                    <div className="mb-3 text-sm text-red-600 bg-red-50 p-2 rounded">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-3 text-sm text-green-600 bg-green-50 p-2 rounded">
                        {success}
                    </div>
                )}

                <input
                    className="w-full mb-3 p-2 border rounded"
                    placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    className="w-full mb-3 p-2 border rounded"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    className="w-full mb-4 p-2 border rounded"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button
                    onClick={submit}
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Register
                </button>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
