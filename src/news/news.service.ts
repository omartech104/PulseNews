import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  newsData = [
    {
      id: 1,
      category: 'tech',
      published_at: '2025-12-20',
      content: {
        en: 'New AI model breakthroughs allow for real-time video generation on smartphones.',
        es: 'Nuevos avances en modelos de IA permiten la generación de video en tiempo real en teléfonos.',
        fr: 'Les percées des nouveaux modèles d’IA permettent la génération de vidéos en temps réel sur smartphone.',
      },
    },
    {
      id: 2,
      category: 'sports',
      published_at: '2025-12-21',
      content: {
        en: 'The global football tournament schedule for 2026 has been officially released.',
        es: 'El calendario del torneo mundial de fútbol para 2026 ha sido publicado oficialmente.',
        fr: 'Le calendrier du tournoi mondial de football pour 2026 a été officiellement publié.',
      },
    },
    {
      id: 3,
      category: 'gaming',
      published_at: '2025-12-22',
      content: {
        en: 'A highly anticipated open-world RPG has broken sales records in its first 24 hours.',
        es: 'Un RPG de mundo abierto muy esperado ha batido récords de ventas en sus primeras 24 horas.',
        fr: 'Un RPG en monde ouvert très attendu a battu des records de vente au cours de ses premières 24 heures.',
      },
    },
    {
      id: 4,
      category: 'tech',
      published_at: '2025-12-23',
      content: {
        en: 'Quantum computing startup announces the first stable 1000-qubit processor.',
        es: 'Una startup de computación cuántica anuncia el primer procesador estable de 1000 qubits.',
        fr: 'Une startup d’informatique quantique annonce le premier processeur stable de 1000 qubits.',
      },
    },
  ];
  // Inside your NewsService class
  getNews(category?: string, lang: string = 'en') {
    // 1. Start with the full array of news
    let filteredNews = this.newsData;

    // 2. If the user provided a category header, filter the array
    if (category) {
      filteredNews = this.newsData.filter((item) => item.category === category);
    }

    // 3. Map the results to only show the requested language
    // This cleans the data so the user doesn't see all languages at once
    return filteredNews.map((item) => {
      return {
        id: item.id,
        category: item.category,
        date: item.published_at,
        // We use the 'lang' variable to pick the right translation
        // If the language doesn't exist, it falls back to English [en]
        text: item.content[lang] || item.content['en'],
      };
    });
  }
}
