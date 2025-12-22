import Slideshow from '../components/Slideshow';
import ServiceCard from '../components/ServiceCard';
import Map from '../components/Map';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import './Home.css';
import slide1 from '../assets/1.jpg';
import slide2 from '../assets/2.jpg';
import slide3 from '../assets/3.jpg';
import slide4 from '../assets/4.jpg';

function Home() {
    const { language } = useLanguage();

    const slides = [
        {
            url: slide1,
            title: t('slide1Title', language),
            description: t('slide1Desc', language)
        },
        {
            url: slide2,
            title: t('slide2Title', language),
            description: t('slide2Desc', language)
        },
        {
            url: slide3,
            title: t('slide3Title', language),
            description: t('slide3Desc', language)
        },
        {
            url: slide4,
            title: t('slide4Title', language),
            description: t('slide4Desc', language)
        }
    ];

    const featuredServices = [
        {
            icon: '💪',
            title: t('muscleRehab', language),
            description: t('muscleRehabDesc', language)
        },
        {
            icon: '🏃',
            title: t('sportsTherapy', language),
            description: t('sportsTherapyDesc', language)
        },
        {
            icon: '🧘',
            title: t('physicalTherapy', language),
            description: t('physicalTherapyDesc', language)
        }
    ];

    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <div className="hero-content fade-in">
                        <h1 className="hero-title">
                            {t('heroTitle', language)}
                        </h1>
                        <p className="hero-subtitle">{t('heroSubtitle', language)}</p>
                        <div className="hero-buttons">
                            <Link to="/services" className="btn btn-primary">{t('ourServices', language)}</Link>
                            <a href="#contact" className="btn btn-outline">{t('contactUs', language)}</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Slideshow images={slides} />
                </div>
            </section>

            <section className="section about-section">
                <div className="container">
                    <div className="about-content">
                        <h2 className="section-title text-center">{t('welcomeTitle', language)}</h2>
                        <p className="section-description text-center">
                            {t('welcomeText', language)}
                        </p>
                    </div>
                </div>
            </section>

            <Map />

            <section className="section services-preview">
                <div className="container">
                    <h2 className="section-title text-center">{t('ourServices', language)}</h2>
                    <div className="services-grid">
                        {featuredServices.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
                        <Link to="/services" className="btn btn-primary">{t('viewAllServices', language)}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
