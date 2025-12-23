async function fetchNews() {
  const container = document.getElementById('newsContainer');
  const category = document.getElementById('categorySelect').value;
  const lang = document.getElementById('languageSelect').value;

  // Loading state
  container.innerHTML = 'Loading news...';

  try {
    // We call your NestJS endpoint
    const response = await fetch('http://localhost:3000/news/filter', {
      method: 'GET',
      headers: {
        // THESE ARE THE HEADERS YOUR NESTJS APP IS LOOKING FOR
        'x-api-key': 'Pulse2025',
        'x-category': category,
        'accept-language': lang,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch news');

    const articles = await response.json();
    displayNews(articles);
  } catch (error) {
    container.innerHTML = `<p style="color:red">Error: ${error.message}. Make sure your NestJS server is running!</p>`;
  }
}

function displayNews(articles) {
  const container = document.getElementById('newsContainer');
  container.innerHTML = ''; // Clear previous news

  if (articles.length === 0) {
    container.innerHTML = '<p>No news found for this selection.</p>';
    return;
  }

  articles.forEach((article) => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
            <span class="category-badge">${article.category}</span>
            <p>${article.text}</p>
            <small>${article.date}</small>
        `;
    container.appendChild(card);
  });
}
