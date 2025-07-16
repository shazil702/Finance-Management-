import { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
const Login =  () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-800 rounded-full mb-6">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-white text-2xl font-light tracking-widest uppercase">
            Customer Login
          </h1>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-300" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email ID"
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:border-white focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-gray-300" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:border-white focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-white cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 w-4 h-4 bg-transparent border-2 border-white rounded focus:ring-2 focus:ring-white focus:ring-offset-0 text-white"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-gray-300 hover:text-white transition-colors duration-200 italic"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-800 hover:bg-blue-900 text-white font-medium tracking-widest uppercase rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login