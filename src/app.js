const services = [
    {
        "id": "1",
        "name": "Netflix",
        "slug": "netflix",
        "cancelUrl": "https://www.netflix.com/cancelplan",
        "phone": "1-844-505-2993",
        "retentionWarning": "Netflix might offer you a free month or a cheaper plan to stay. If you're sure you want to leave, decline all offers and proceed to the final confirmation page.",
        "steps": [
            "Sign in to your Netflix account.",
            "Select your profile icon in the top right corner.",
            "Click on 'Account'.",
            "Under 'Membership & Billing', click the 'Cancel Membership' button.",
            "Follow the prompts to confirm your cancellation."
        ]
    },
    {
        "id": "2",
        "name": "Adobe Creative Cloud",
        "slug": "adobe-creative-cloud",
        "cancelUrl": "https://account.adobe.com/plans",
        "phone": "1-800-833-6687",
        "retentionWarning": "Adobe often charges high early termination fees for annual plans paid monthly. To avoid this, try 'switching' to a cheaper plan first, then cancel that new plan immediately (within 14 days) for a full refund or no fee.",
        "steps": [
            "Sign in to your Adobe account.",
            "Go to the 'Plans' tab.",
            "Click 'Manage plan' for the subscription you want to cancel.",
            "Select 'Cancel your plan'.",
            "State your reason and complete the cancellation flow."
        ]
    },
    {
        "id": "3",
        "name": "Planet Fitness",
        "slug": "planet-fitness",
        "cancelUrl": "https://www.planetfitness.com/about-pf/contact-us",
        "phone": "Check your local club",
        "retentionWarning": "Planet Fitness usually requires cancellation in person or via certified letter. Phone or online cancellations are rarely accepted.",
        "steps": [
            "Visit your home club in person.",
            "Alternatively, send a certified letter to your home club address Requesting cancellation.",
            "Keep a copy of your signed cancellation form.",
            "Ensure you receive a confirmation email."
        ]
    },
    {
        "id": "4",
        "name": "Starlink",
        "slug": "starlink",
        "cancelUrl": "https://www.starlink.com/account/home",
        "phone": "None (Online support only)",
        "retentionWarning": "Starlink billing is prepaid. You will continue to have service until the end of your billing cycle. No partial refunds.",
        "steps": [
            "Log into your Starlink account.",
            "Navigate to the 'Manage' tab.",
            "Select 'Cancel Service'.",
            "Confirm your choice."
        ]
    },
    {
        "id": "5",
        "name": "Amazon Prime",
        "slug": "amazon-prime",
        "cancelUrl": "https://www.amazon.com/gp/primecentral",
        "phone": "1-888-280-4331",
        "retentionWarning": "Amazon will try to show you how much money you saved. They might offer a partial refund if you haven't used Prime benefits recently.",
        "steps": [
            "Go to Amazon.com and log in.",
            "Click 'Prime Membership'.",
            "Select 'Update, cancel and more'.",
            "Select 'End Membership' and follow the prompts."
        ]
    },
    {
        "id": "6",
        "name": "Spotify",
        "slug": "spotify",
        "cancelUrl": "https://www.spotify.com/account/plan/",
        "phone": "None (Online only)",
        "retentionWarning": "If you signed up through a third party (Apple, etc.), you must cancel through them.",
        "steps": [
            "Log in to your Spotify account.",
            "Under 'Your plan', click 'CHANGE PLAN'.",
            "Scroll to 'Spotify Free' and click 'CANCEL PREMIUM'.",
            "Confirm on the following screen."
        ]
    }
];

let currentQuery = '';

function renderHome() {
    const root = document.getElementById('app-root');
    const filtered = services.filter(s => s.name.toLowerCase().includes(currentQuery.toLowerCase()));

    root.innerHTML = `
        <div class="pb-20">
            <!-- Hero -->
            <section class="pt-24 pb-16 px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <div class="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-8">
                        <i class="fas fa-sparkles"></i>
                        <span>1,200+ Guides Updated for 2026</span>
                    </div>
                    <h1 class="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
                        Stop Paying for <br/>
                        <span class="text-primary-600">Hidden Fees.</span>
                    </h1>
                    <p class="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
                        The world's largest database of "Magic Buttons." Find the direct link to cancel any subscription in seconds.
                    </p>
                    
                    <div class="relative max-w-2xl mx-auto group">
                        <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <i class="fas fa-search text-slate-400 group-focus-within:text-primary-500 transition-colors"></i>
                        </div>
                        <input
                            type="text"
                            id="search-input"
                            class="block w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all shadow-2xl shadow-slate-200/50 text-lg font-medium"
                            placeholder="Type a service: Netflix, Gym, Adobe..."
                            value="${currentQuery}"
                            onkeyup="handleSearch(event)"
                        />
                    </div>
                </div>
            </section>

            <!-- Results -->
            <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div class="flex justify-between items-end mb-8 border-b border-slate-200 pb-6">
                    <h2 class="text-xl font-black text-slate-900 uppercase tracking-tight">
                        \${currentQuery ? \`Search: "\${currentQuery}"\` : 'Popular Services'}
                    </h2>
                    <span class="text-slate-400 text-sm font-bold uppercase">
                        \${filtered.length} Results
                    </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    \${filtered.map(s => \`
                        <div onclick="route('cancel/\${s.slug}')" class="group bg-white p-7 rounded-3xl border border-slate-200 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-100 transition-all duration-300 cursor-pointer flex flex-col h-full">
                            <div class="flex justify-between items-start mb-6">
                                <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-primary-600 text-xl group-hover:bg-primary-600 group-hover:text-white transition-all">
                                    \${s.name.charAt(0)}
                                </div>
                                <i class="fas fa-arrow-right text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"></i>
                            </div>
                            <h3 class="text-xl font-black text-slate-900 mb-2 truncate">\${s.name}</h3>
                            <p class="text-slate-500 text-sm font-medium line-clamp-2 mb-6">Verified cancellation guide and retention logic for \${s.name}.</p>
                            <div class="mt-auto text-primary-600 font-bold text-sm flex items-center">
                                Start Exit Guide
                            </div>
                        </div>
                    \`).join('')}
                    \${filtered.length === 0 ? \`
                        <div class="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                            <p class="text-slate-400 text-lg font-medium">Service not found. Want us to add it?</p>
                            <button class="mt-4 text-primary-600 font-black">Request a Guide →</button>
                        </div>
                    \` : ''}
                </div>
            </section>
        </div>
    \`;
    
    // Maintain focus if re-rendering while typing
    const searchInput = document.getElementById('search-input');
    if (searchInput && currentQuery) {
        searchInput.focus();
        searchInput.setSelectionRange(currentQuery.length, currentQuery.length);
    }
}

function renderCancel(slug) {
    const service = services.find(s => s.slug === slug);
    if (!service) return route('');
    
    const root = document.getElementById('app-root');
    document.title = \`How to Cancel \${service.name} (2026 Guide) - CancelBuddy\`;

    root.innerHTML = \`
        <div class="max-w-4xl mx-auto px-4 pt-12 pb-24">
            <a href="#" onclick="route('')" class="inline-flex items-center text-primary-600 font-black text-sm uppercase tracking-widest mb-10 hover:-translate-x-1 transition-transform">
                <i class="fas fa-arrow-left mr-2"></i>
                Back to Search
            </a>

            <header class="mb-16">
                <div class="flex items-center space-x-3 text-slate-400 text-xs font-black uppercase tracking-widest mb-6">
                    <i class="fas fa-calendar-check"></i>
                    <span>Updated Feb 2026</span>
                    <span class="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span class="text-primary-600">Verified Guide</span>
                </div>
                <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                    How to Cancel <br/>
                    <span class="text-primary-600">\${service.name}</span>
                </h1>
                <p class="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                    Stop the recurring charges today. We've simplified the \${service.name} cancellation flow into a 3-minute roadmap.
                </p>

                <div class="flex flex-wrap gap-4 mt-12">
                    <a href="\${service.cancelUrl}" target="_blank" class="bg-primary-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary-700 shadow-xl shadow-primary-200 transition-all flex items-center transform hover:-translate-y-1">
                        Direct Cancellation Button
                        <i class="fas fa-external-link-alt ml-3 text-sm"></i>
                    </a>
                    \${service.phone !== 'None' ? \`
                        <a href="tel:\${service.phone}" class="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:border-slate-900 transition-all flex items-center">
                            <i class="fas fa-phone mr-3 text-primary-600"></i>
                            Call Support
                        </a>
                    \` : ''}
                </div>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-12">
                    <section class="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
                        <h2 class="text-2xl font-black text-slate-900 mb-10 flex items-center uppercase tracking-tight">
                            <i class="fas fa-list-ol mr-4 text-primary-600"></i>
                            The Step-by-Step
                        </h2>
                        <div class="space-y-10">
                            \${service.steps.map((step, i) => \`
                                <div class="flex group">
                                    <div class="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center font-black text-slate-400 mr-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                                        \${i + 1}
                                    </div>
                                    <p class="text-lg text-slate-700 font-medium pt-2 leading-relaxed">\${step}</p>
                                </div>
                            \`).join('')}
                        </div>
                    </section>

                    <section class="bg-red-50 p-10 rounded-[2.5rem] border border-red-100 relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-8 opacity-10">
                            <i class="fas fa-exclamation-triangle text-8xl text-red-900"></i>
                        </div>
                        <h2 class="text-2xl font-black text-red-900 mb-6 relative">
                            Retention Traps to Avoid
                        </h2>
                        <div class="bg-white/60 p-6 rounded-2xl border border-red-100 text-red-800 font-bold leading-relaxed relative">
                            \${service.retentionWarning}
                        </div>
                    </section>
                </div>

                <aside class="space-y-6">
                    <div class="glass p-8 rounded-[2rem] sticky top-24 border border-slate-200">
                        <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Quick Intel</h3>
                        <div class="space-y-6">
                            <div class="flex justify-between items-center pb-4 border-b border-slate-100">
                                <span class="font-bold text-slate-500">Ease</span>
                                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-black uppercase">Low Effort</span>
                            </div>
                            <div class="flex justify-between items-center pb-4 border-b border-slate-100">
                                <span class="font-bold text-slate-500">Method</span>
                                <span class="font-black text-slate-900">Digital</span>
                            </div>
                            <div class="flex justify-between items-center pb-4 border-b border-slate-100">
                                <span class="font-bold text-slate-500">Duration</span>
                                <span class="font-black text-slate-900">~180 Sec</span>
                            </div>
                        </div>
                        <button class="w-full mt-8 bg-slate-100 text-slate-600 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-colors">
                            Report Issue
                        </button>
                    </div>

                    <div class="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-[2rem] text-white shadow-xl shadow-primary-200 group cursor-pointer overflow-hidden relative">
                        <div class="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                        <p class="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Deal of the Day</p>
                        <h4 class="text-2xl font-black mb-4">Switch to Disney+</h4>
                        <p class="text-primary-100 text-sm font-medium mb-6 leading-relaxed">Better content, lower price. Get 2 months free via CancelBuddy.</p>
                        <div class="font-black text-sm uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                            Claim Offer <i class="fas fa-arrow-right ml-2 text-xs"></i>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    \`;
    window.scrollTo(0, 0);
}

function handleSearch(e) {
    currentQuery = e.target.value;
    renderHome();
}

function route(path) {
    window.location.hash = path;
    handleRoute();
}

function handleRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('cancel/')) {
        const slug = hash.split('/')[1];
        renderCancel(slug);
    } else {
        renderHome();
    }
}

window.addEventListener('hashchange', handleRoute);
window.onload = handleRoute;
