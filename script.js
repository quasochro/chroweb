document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Echo Dot', price: '$49.99', img: 'https://via.placeholder.com/150' },
        { name: 'Fire Stick', price: '$39.99', img: 'https://via.placeholder.com/150' },
        { name: 'Kindle', price: '$89.99', img: 'https://via.placeholder.com/150' },
        { name: 'Amazon Basics', price: '$29.99', img: 'https://via.placeholder.com/150' }
    ];

    const productsContainer = document.getElementById('products');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        
        productsContainer.appendChild(productElement);
    });

    document.getElementById('search').addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        document.querySelectorAll('.product').forEach(product => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
