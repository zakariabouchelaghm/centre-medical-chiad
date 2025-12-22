import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import './Map.css';

function Map() {
    const { language } = useLanguage();

    return (
        <section className="map-section" id="location">
            <div className="container">
                <h2 className="section-title text-center">{t('locationTitle', language)}</h2>
                <p className="section-description text-center">{t('locationSubtitle', language)}</p>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.92830486187572!2d5.298637318654408!3d35.92610099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f35b9cdbd4d4eb%3A0x85b32af4dec11b63!2sW7GX%2BCHX%2C%20Unnamed%20Road%2C%20A%C3%AFn%20Oulmene!5e0!3m2!1sen!2sdz!4v1764074117299!5m2!1sen!2sdz"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={t('mapTitle', language)}
                    ></iframe>
                </div>

                <div className="location-info">
                    <div className="location-card">
                        <div className="location-icon">📍</div>
                        <h3>{t('address', language)}</h3>
                        <p>{t('addressValue', language)}</p>
                    </div>
                    <div className="location-card">
                        <div className="location-icon">📞</div>
                        <h3>{t('phone', language)}</h3>
                        <p dir="ltr">0661224291</p>
                        <p dir="ltr">0772668228</p>
                    </div>
                    <div className="location-card">
                        <div className="location-icon">🕒</div>
                        <h3>{t('openingHours', language)}</h3>
                        <p>{t('satToThu', language)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;
