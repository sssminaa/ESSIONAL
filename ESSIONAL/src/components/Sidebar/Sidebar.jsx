import { Link, useLocation } from 'react-router-dom';
import {useState} from 'react'
import { Folder, FolderOpen, LogIn } from 'lucide-react';
import logo from '../../assets/logo.jpg';
import LoginModal from "../LoginModal/LoginModal.jsx";
import './Sidebar.css';

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard', label: 'Dashboard', hasNotification: false },
        { path: '/analysis', label: 'Analysis', hasNotification: false },
        { path: '/issue-log', label: 'Issue log', hasNotification: true }
    ];

    const isActive = (path) => {
        if (path === '/dashboard') {
            return location.pathname === '/dashboard' || location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const [showLoginModal, setShowLoginModal] = useState(false)

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="MVDC2" className="sidebar-logo-img" />
            </div>

            <nav className="sidebar-nav">
                {menuItems.map(item => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
                    >
                        {isActive(item.path) ? <FolderOpen size={20} /> : <Folder size={20} />}
                        <span>{item.label}</span>
                        {item.hasNotification && <span className="notification-dot"></span>}
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="sidebar-settings" onClick={() => setShowLoginModal(true)}>
                    <LogIn size={20}/>
                    <span>로그인</span>
                </button>
            </div>

            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
            )}
        </aside>
    );
}

export default Sidebar;