
export function useSEO() {
    const BASE_URL = 'https://aldairdominguez.me'

    /**
     * Update meta tags for a specific section.
     * @param {Object} options
     * @param {string} options.title
     * @param {string} options.description
     * @param {string} options.section
     */
    const updateMetaTags = (options = {}) => {
        const {
            title = 'Aldair Dominguez | Desarrollador Backend .NET',
            description = 'Desarrollador backend especializado en .NET, C# y ASP.NET. Creando soluciones tecnologicas robustas y escalables.',
            section = 'about'
        } = options

        if (title) {
            document.title = title
        }

        updateMetaTag('name', 'description', description)
        updateMetaTag('property', 'og:title', title)
        updateMetaTag('property', 'og:description', description)
        updateMetaTag('property', 'og:url', BASE_URL)
        updateMetaTag('name', 'twitter:title', title)
        updateMetaTag('name', 'twitter:description', description)
        updateMetaTag('name', 'twitter:url', BASE_URL)

        const canonical = document.querySelector('link[rel="canonical"]')
        if (canonical) {
            canonical.setAttribute('href', `${BASE_URL}/`)
        }
    }

    /**
     * Helper function to update or create meta tags.
     * @param {string} attr
     * @param {string} key
     * @param {string} content
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
     * Get SEO data for specific sections.
     * @param {string} sectionId
     * @returns {Object}
     */
    const getSectionSEO = (sectionId) => {
        const seoData = {
            about: {
                title: 'Aldair Dominguez | Desarrollador Backend .NET',
                description: 'Portafolio de Aldair Dominguez, desarrollador backend .NET en Lima, Peru. APIs con C#, ASP.NET Core, SQL Server e integraciones escalables.'
            },
            education: {
                title: 'Educacion | Aldair Dominguez',
                description: 'Formacion academica, cursos y certificaciones de Aldair Dominguez en desarrollo de software, .NET y tecnologias backend.'
            },
            skills: {
                title: 'Habilidades | Aldair Dominguez',
                description: 'Habilidades tecnicas en .NET, C#, ASP.NET Core, SQL Server, APIs REST, integraciones y desarrollo backend.'
            },
            experience: {
                title: 'Experiencia | Aldair Dominguez',
                description: 'Experiencia profesional de Aldair Dominguez como desarrollador backend .NET en proyectos, sistemas e integraciones.'
            },
            portfolio: {
                title: 'Portafolio | Aldair Dominguez',
                description: 'Portafolio con aplicaciones .NET, servicios web, APIs REST y proyectos de software desarrollados por Aldair Dominguez.'
            },
            achievements: {
                title: 'Logros | Aldair Dominguez',
                description: 'Logros, certificaciones y reconocimientos de Aldair Dominguez en desarrollo de software y tecnologia.'
            },
            hobbies: {
                title: 'Pasatiempos e Intereses | Aldair Dominguez',
                description: 'Intereses personales y pasatiempos de Aldair Dominguez mas alla del desarrollo de software.'
            },
            contact: {
                title: 'Contacto | Aldair Dominguez',
                description: 'Contacto de Aldair Dominguez para colaboraciones, proyectos backend .NET y oportunidades profesionales.'
            }
        }

        return seoData[sectionId] || seoData.about
    }

    return {
        updateMetaTags,
        getSectionSEO
    }
}
