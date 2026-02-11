import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import services from '../services.json'
import {
    ArrowLeft,
    ExternalLink,
    Phone,
    AlertTriangle,
    CheckCircle2,
    Info,
    Calendar
} from 'lucide-react'

const CancelService = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const service = services.find(s => s.slug === slug)

    useEffect(() => {
        if (service) {
            document.title = `How to Cancel ${service.name} (2026 Guide) - CancelBuddy`
        } else {
            navigate('/')
        }
    }, [service, navigate])

    if (!service) return null

    return (
        <div className="pb-24">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-50 to-transparent -z-10" />

            <div className="max-w-4xl mx-auto px-4 pt-12">
                {/* Navigation */}
                <Link to="/" className="inline-flex items-center text-primary-600 font-bold mb-8 hover:translate-x-1 transition-transform">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Search
                </Link>

                {/* Header Section */}
                <header className="mb-12">
                    <div className="flex items-center space-x-2 text-slate-500 text-sm font-medium mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Updated February 2026</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="text-primary-600 font-bold">Verified Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                        How to Cancel <span className="text-primary-600">{service.name}</span> <br className="hidden md:block" />
                        in Minutes (2026)
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-10">
                        Stop the recurring charges. We've simplified the process for {service.name} so you can cancel
                        without the headache. Follow these steps to terminate your subscription today.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={service.cancelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-600/30 transition-all group"
                        >
                            Direct Cancellation Link
                            <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-y--0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        {service.phone !== "None" && service.phone !== "Check your local club" && (
                            <a
                                href={`tel:${service.phone}`}
                                className="inline-flex items-center bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:border-slate-900 transition-all"
                            >
                                <Phone className="mr-3 w-5 h-5 text-primary-600" />
                                {service.phone}
                            </a>
                        )}
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Step-by-Step Guide */}
                        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <h2 className="flex items-center text-2xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">
                                <CheckCircle2 className="w-7 h-7 text-green-500 mr-3" />
                                Step-by-Step Guide
                            </h2>
                            <div className="space-y-8">
                                {service.steps.map((step, index) => (
                                    <div key={index} className="flex group">
                                        <div className="flex-shrink-0 w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 mr-6 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all">
                                            {index + 1}
                                        </div>
                                        <p className="text-lg text-slate-700 pt-1 leading-snug">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Retention Tactics */}
                        <section className="bg-orange-50 p-8 rounded-3xl border border-orange-200">
                            <h2 className="flex items-center text-2xl font-black text-orange-900 mb-6">
                                <AlertTriangle className="w-7 h-7 text-orange-600 mr-3" />
                                Retention Tactics to Avoid
                            </h2>
                            <div className="bg-white p-6 rounded-2xl border border-orange-100 text-orange-800 leading-relaxed font-medium">
                                {service.retentionWarning}
                            </div>
                            <p className="mt-6 text-sm text-orange-700/80 italic font-medium">
                                Pro Tip: Companies often offer "1 month free" to keep you. Only accept if you plan to use it; otherwise, the billing will resume automatically.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <div className="bg-slate-900 text-white p-6 rounded-3xl sticky top-24 shadow-2xl">
                            <Info className="w-8 h-8 text-primary-400 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Quick Summary</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-slate-400">Difficulty</span>
                                    <span className="font-bold text-green-400">Easy</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-slate-400">Method</span>
                                    <span className="font-bold">Online</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-slate-400">Time Req.</span>
                                    <span className="font-bold">~3 mins</span>
                                </div>
                            </div>
                            <button className="w-full mt-8 bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-500 transition-colors">
                                Report Incorrect Info
                            </button>
                        </div>

                        <div className="bg-primary-600 p-8 rounded-3xl text-white overflow-hidden relative group cursor-pointer">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                            <h4 className="font-black text-xl mb-2 relative z-10">Switch to Disney+</h4>
                            <p className="text-primary-100 text-sm mb-6 relative z-10">Get 3 months off your first year. Special deal for CancelBuddy users.</p>
                            <div className="text-white font-bold inline-flex items-center text-sm group-hover:translate-x-2 transition-transform relative z-10">
                                Claim Deal
                                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default CancelService
