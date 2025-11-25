import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import './Footer.css';

function Footer() {
    const { language } = useLanguage();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>{t('clinicName', language)}</h3>
                        <p>{t('professionalCenter', language)}</p>
                    </div>

                    <div className="footer-section">
                        <h4>{t('contactUsTitle', language)}</h4>
                        <div className="contact-info">
                            <p>📞 {t('phone', language)}: <span dir="ltr">06 61 22 42 91</span></p>
                            <p>📍 {t('address', language)}: {t('addressValue', language)}</p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>{t('openingHours', language)}</h4>
                        <div className="hours">
                            <p>{t('satToThu', language)}</p>
                            <p>{t('friday', language)}</p>
                            <p style={{ marginTop: '10px', fontWeight: '500' }}>{t('menDays', language)}</p>
                            <p style={{ fontWeight: '500' }}>{t('womenDays', language)}</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 {t('clinicName', language)}. {t('allRightsReserved', language)}.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
