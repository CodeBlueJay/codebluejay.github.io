const container = document.querySelector('#repositories .container');

fetch('https://api.github.com/users/your_username/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');
            repoCard.innerHTML = `
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description ? repo.description : 'No description available'}</p>
            `;
            container.appendChild(repoCard);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
