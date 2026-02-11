import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <ShieldCheck className="w-8 h-8 text-primary-600 transition-transform group-hover:scale-110" />
                            <span className="text-xl font-black tracking-tight text-slate-900">
                                Cancel<span className="text-primary-600">Buddy</span>
                            </span>
                        </Link>
                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">How it works</Link>
                            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Top Services</Link>
                            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Support</Link>
                        </nav>
                        <div className="flex items-center">
                            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm">
                                Get Help
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-white border-t border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
                    <div className="flex justify-center space-x-4 mb-4">
                        <Link to="/" className="hover:text-primary-600">About</Link>
                        <Link to="/" className="hover:text-primary-600">Privacy Policy</Link>
                        <Link to="/" className="hover:text-primary-600">Terms of Service</Link>
                    </div>
                    <p>© 2026 CancelBuddy. All rights reserved. Helping you take back control of your subscriptions.</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
