import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CancelService from './pages/CancelService'
import Layout from './components/Layout'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cancel/:slug" element={<CancelService />} />
            </Routes>
        </Layout>
    )
}

export default App
