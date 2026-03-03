import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TopStatusBar from "./components/TopStatusBar/TopStatusBar.jsx";
import './index.css';
import Analysis from "./pages/Analysis/Analysis.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                {/* 상단 상태바 */}
                <TopStatusBar />

                {/* 사이드바 + 메인 콘텐츠 */}
                <div className="content-wrapper">
                    <Sidebar />

                    <main className="main-content">
                        <Routes>
                            <Route path="/dashboard" element={<h1>Dashboard 페이지</h1>} />
                            <Route path="/analysis" element={<Analysis/>} />
                            <Route path="/issue-log" element={<h1>Issue Log 페이지</h1>} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;









