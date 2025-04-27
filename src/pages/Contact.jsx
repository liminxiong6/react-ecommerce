import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div
            className="bg flex min-h-screen flex-col items-center justify-center bg-cover bg-center py-12"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg')",
            }}
        >
            <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-4xl font-bold">
                    Contact Us
                </h1>
                <p className="mb-4 text-center text-gray-600">
                    We would love to hear from you! Please fill out the form
                    below or contact us directly.
                </p>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-md font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            className="rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-md font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-md font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            required
                            className="rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <button className="rounded-lg bg-blue-500 py-3 text-white transition duration-300 hover:bg-blue-600">
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <h2 className="text-lg font-semibold">
                        Contact Information
                    </h2>
                    <div className="mt-4 flex flex-col items-center gap-2">
                        <div className="flex items-center">
                            <FaPhone className="mr-2 text-blue-500" />
                            <span className="text-gray-600">
                                (+1) 422 343 9893
                            </span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2 text-blue-500" />
                            <span className="text-gray-600">
                                ecommerce@mail.com
                            </span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkedAlt className="mr-2 text-blue-500" />
                            <span className="text-gray-600">
                                4300 Street, Toronto, CA
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
