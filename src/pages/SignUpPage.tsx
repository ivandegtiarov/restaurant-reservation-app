import { Link } from "react-router-dom";
import authImg from "../../src/assets/img/auth-img.png";
import GoogleButton from "react-google-button";

const SignUpPage = () => {
  return (
    <div className="flex h-screen mt-[100px] mb-[100px]">
      {/* Left side - form container */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 text-[40px]  mb-[50px]">
            Sign up
          </h2>
          <h3 className="text-gray-500 mb-6">
            Don't have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full py-3 mt-6">
              Sign up
            </button>
          </form>
          <div className="my-6 flex items-center">
            <span className="border-t border-gray-300 flex-grow"></span>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <span className="border-t border-gray-300 flex-grow"></span>
          </div>
          <div className="flex items-center justify-center">
            <GoogleButton
              label="Sign up with Google"
              type="light"
              onClick={() => console.log("Google button clicked")}
              className="w-full"
            />
          </div>
        </div>
        <footer className="text-gray-400 text-xs mt-8">
          &copy; 2024 Delizioso
        </footer>
      </div>

      {/* Right side - image */}
      <div className="w-1/2 h-full">
        <img
          src={authImg}
          alt="Delicious pancakes"
          className="w-full h-full object-cover rounded-tl-[100px] rounded-bl-[100px]"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
