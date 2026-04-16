document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu on click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Calculate Open Status
  const statusBadge = document.getElementById('open-status');
  if (statusBadge) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday
    const hours = now.getHours();
    
    // Open Mon-Fri (1-5), 09:00 - 18:00
    if (day >= 1 && day <= 5 && hours >= 9 && hours < 18) {
      statusBadge.textContent = 'Otwarte dziś 09:00–18:00';
      statusBadge.classList.add('open');
      statusBadge.classList.remove('closed');
    } else if (day === 0 && hours >= 12 && hours < 17) {
      statusBadge.textContent = 'Otwarte dziś 12:00–17:00';
      statusBadge.classList.add('open');
      statusBadge.classList.remove('closed');
    } else {
      statusBadge.textContent = 'Teraz zamknięte';
      statusBadge.classList.add('closed');
      statusBadge.classList.remove('open');
    }
  }

  // Ensure menuData is loaded
  if (typeof menuData !== 'undefined') {
    
    // Render Homepage Preview Menu (subset of categories and items)
    const previewContainer = document.getElementById('menu-preview-container');
    if (previewContainer) {
      const categoriesToPreview = ['Śniadania', 'Zupy', 'Dania główne', 'Pierogi'];
      
      categoriesToPreview.forEach(catName => {
        const category = menuData.find(c => c.category === catName);
        if (category) {
          const previewHtml = `
            <div class="category-preview">
              <h3 class="category-title">${category.category}</h3>
              ${category.items.slice(0, 3).map(item => `
                <div class="menu-item-preview">
                  <span class="item-name">${item.name}</span>
                  <span class="item-price">${item.price} zł</span>
                </div>
              `).join('')}
            </div>
          `;
          previewContainer.insertAdjacentHTML('beforeend', previewHtml);
        }
      });
    }

    // Render Full Menu Page
    const fullMenuContainer = document.getElementById('full-menu-container');
    const categoriesNav = document.getElementById('categories-nav');
    
    if (fullMenuContainer && categoriesNav) {
      // Create tabs
      menuData.forEach((category, index) => {
        // Tab
        const tab = document.createElement('a');
        tab.href = `#${category.category.replace(/\s+/g, '-').toLowerCase()}`;
        tab.className = `category-tab ${index === 0 ? 'active' : ''}`;
        tab.textContent = category.category;
        
        tab.addEventListener('click', (e) => {
           document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
           tab.classList.add('active');
        });
        
        categoriesNav.appendChild(tab);

        // Section
        const catSection = document.createElement('div');
        catSection.id = category.category.replace(/\s+/g, '-').toLowerCase();
        catSection.className = 'menu-category';
        
        catSection.innerHTML = `
          <h2 class="menu-category-title">${category.category}</h2>
          ${category.items.map(item => `
            <div class="full-menu-item">
              <div class="item-details">
                <div class="full-item-name">${item.name}</div>
                ${item.desc ? `<div class="full-item-desc">${item.desc}</div>` : ''}
              </div>
              <div class="full-item-price">${item.price} zł</div>
            </div>
          `).join('')}
        `;
        
        fullMenuContainer.appendChild(catSection);
      });
    }
  }
});
