/**
 * Composable for managing dynamic SEO meta tags
 * Updates page title and meta descriptions based on current section
 */
export function useSEO() {
    /**
     * Update meta tags for a specific section
     * @param {Object} options - SEO options
     * @param {string} options.title - Page title
     * @param {string} options.description - Meta description
     * @param {string} options.section - Current section name
     */
    const updateMetaTags = (options = {}) => {
        const {
            title = 'Aldair Dominguez | Desarrollador Backend .NET',
            description = 'Desarrollador backend especializado en .NET, C# y ASP.NET. Creando soluciones tecnológicas robustas y escalables.',
            section = 'about'
        } = options

        // Update document title
        if (title) {
            document.title = title
        }

        // Update meta description
        updateMetaTag('name', 'description', description)

        // Update Open Graph tags
        updateMetaTag('property', 'og:title', title)
        updateMetaTag('property', 'og:description', description)
        updateMetaTag('property', 'og:url', `https://aldairdominguez.tech/#${section}`)

        // Update Twitter Card tags
        updateMetaTag('name', 'twitter:title', title)
        updateMetaTag('name', 'twitter:description', description)
    }

    /**
     * Helper function to update or create meta tags
     * @param {string} attr - Attribute name (name or property)
     * @param {string} key - Attribute value
     * @param {string} content - Content value
     */
    const updateMetaTag = (attr, key, content) => {
        let element = document.querySelector(`meta[${attr}="${key}"]`)

        if (element) {
            element.setAttribute('content', content)
        } else {
            element = document.createElement('meta')
            element.setAttribute(attr, key)
            element.setAttribute('content', content)
            document.head.appendChild(element)
        }
    }

    /**
     * Get SEO data for specific sections
     * @param {string} sectionId - Section identifier
     * @returns {Object} SEO data for the section
     */
    const getSectionSEO = (sectionId) => {
        const seoData = {
            about: {
                title: 'Aldair Dominguez | Desarrollador Backend .NET',
                description: 'Conoce a Aldair Dominguez, un Desarrollador Backend .NET de Lima, Perú, especializado en crear soluciones robustas y escalables.'
            },
            education: {
                title: 'Educación | Aldair Dominguez',
                description: 'Explora mi formación académica y certificaciones en desarrollo de software y tecnologías .NET.'
            },
            skills: {
                title: 'Habilidades | Aldair Dominguez',
                description: 'Descubre mis habilidades técnicas incluyendo .NET, C#, ASP.NET, SQL Server y tecnologías modernas de desarrollo backend.'
            },
            experience: {
                title: 'Experiencia | Aldair Dominguez',
                description: 'Conoce mi experiencia profesional como Desarrollador Backend .NET y los proyectos en los que he trabajado.'
            },
            portfolio: {
                title: 'Portafolio | Aldair Dominguez',
                description: 'Explora mi portafolio de proyectos que incluyen aplicaciones .NET, servicios web y soluciones backend.'
            },
            achievements: {
                title: 'Logros | Aldair Dominguez',
                description: 'Revisa mis logros profesionales, certificaciones y reconocimientos en desarrollo de software.'
            },
            hobbies: {
                title: 'Pasatiempos e Intereses | Aldair Dominguez',
                description: 'Conoce mis intereses personales y pasatiempos más allá del desarrollo de software.'
            },
            contact: {
                title: 'Contacto | Aldair Dominguez',
                description: '¡Ponte en contacto conmigo para oportunidades de colaboración, proyectos o simplemente para saludar!'
            }
        }

        return seoData[sectionId] || seoData.about
    }

    return {
        updateMetaTags,
        getSectionSEO
    }
}
