import { Search } from 'lucide-react'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="relative max-w-2xl mx-auto w-full group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
            </div>
            <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary-50/50 focus:border-primary-500 transition-all shadow-xl shadow-slate-200/50"
                placeholder="Type a service name (e.g. Netflix, Adobe...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
