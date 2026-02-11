import { useState, useMemo } from 'react'
import services from '../services.json'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceCard'
import { Sparkles } from 'lucide-react'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredServices = useMemo(() => {
        return services.filter(service =>
            service.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery])

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-pulse">
                        <Sparkles className="w-4 h-4" />
                        <span>Over 1,200+ Guides Updated for 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                        Stop Paying for What <br className="hidden md:block" />
                        <span className="text-primary-600">You Don't Use.</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Quickly find the "Magic Button" to cancel any subscription. No more hidden links,
                        endless menus, or aggressive retention reps.
                    </p>

                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
                    <h2 className="text-xl font-bold text-slate-900 m-0">
                        {searchQuery ? `Search results for "${searchQuery}"` : 'Popular Services'}
                    </h2>
                    <span className="text-slate-500 text-sm font-medium">
                        Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
                    </span>
                </div>

                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                        <div className="text-slate-400 mb-4 text-6xl">😕</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Service not found</h3>
                        <p className="text-slate-500">We don't have a guide for "{searchQuery}" yet. <br />Want us to add it?</p>
                        <button className="mt-6 text-primary-600 font-bold hover:underline">Request a guide →</button>
                    </div>
                )}
            </section>

            {/* Trust Badges */}
            <section className="mt-32 max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Trusted by users from</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale cursor-default select-none">
                    <span className="text-2xl font-black">NETFLIX</span>
                    <span className="text-2xl font-black">ADOBE</span>
                    <span className="text-2xl font-black">SPOTIFY</span>
                    <span className="text-2xl font-black">DISNEY+</span>
                </div>
            </section>
        </div>
    )
}

export default Home
