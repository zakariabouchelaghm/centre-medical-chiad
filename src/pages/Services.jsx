import ServiceCard from '../components/ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations/translations';
import './Services.css';

function Services() {
    const { language } = useLanguage();

    const services = [
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
        },
        {
            icon: '🦴',
            title: t('postSurgical', language),
            description: t('postSurgicalDesc', language)
        },
        {
            icon: '⚡',
            title: t('electrotherapy', language),
            description: t('electrotherapyDesc', language)
        },
        {
            icon: '🎯',
            title: t('manualTherapy', language),
            description: t('manualTherapyDesc', language)
        },
        {
            icon: '🏋️',
            title: t('strengthTraining', language),
            description: t('strengthTrainingDesc', language)
        },
        {
            icon: '🧠',
            title: t('neuroRehab', language),
            description: t('neuroRehabDesc', language)
        },
        {
            icon: '👴',
            title: t('geriatricRehab', language),
            description: t('geriatricRehabDesc', language)
        }
    ];

    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <h1 className="page-title fade-in">{t('ourServicesTitle', language)}</h1>
                    <p className="page-subtitle fade-in">{t('servicesSubtitle', language)}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-grid-full">
                        {services.map((service, index) => (
                            <div key={index} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>{t('readyToStart', language)}</h2>
                        <p>{t('scheduleConsultation', language)}</p>
                        <a href="#contact" className="btn btn-primary">{t('getInTouch', language)}</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
