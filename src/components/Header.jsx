import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="nav-left">
                        <Link to="/" className="logo">
                            <img src={logo} alt="Chiad Clinic Logo" className="logo-img" />
                            <span className="logo-text">{t('clinicName', language)}</span>
                        </Link>

                        <ul className="nav-menu">
                            <li><Link to="/" className="nav-link">{t('home', language)}</Link></li>
                            <li><Link to="/services" className="nav-link">{t('services', language)}</Link></li>
                            <li><a href="#contact" className="nav-link">{t('contact', language)}</a></li>
                        </ul>
                    </div>

                    <button onClick={toggleLanguage} className="lang-btn">
                        {language === 'ar' ? 'FR' : 'AR'}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
