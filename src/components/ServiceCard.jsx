import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

const ServiceCard = ({ service }) => {
    return (
        <Link
            to={`/cancel/${service.slug}`}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-primary-600 text-lg group-hover:bg-primary-50">
                        {service.name.charAt(0)}
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-500 text-sm line-clamp-2">Direct cancellation guides and retention avoidance tips for {service.name}.</p>
            </div>
            <div className="mt-6 flex items-center text-primary-600 font-semibold text-sm">
                Start Cancellation
            </div>
        </Link>
    )
}

export default ServiceCard
