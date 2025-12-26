const products = [
    {
        id: 1,
        name: "آلة صنع الشارات (Machine Pin's)",
        price: 24000,
        oldPrice: 25000,
        // تم تحديث الرابط ليكون رابطاً مباشراً للصورة
        image: "https://raw.githubusercontent.com/editeurbatna-droid/Click-Quick/main/1000024039.jpg"
    }
];

function displayProducts() {
    const productsSection = document.getElementById('products');
    if(!productsSection) return;
    
    productsSection.innerHTML = "";
    products.forEach(product => {
        productsSection.innerHTML += `
            <div class="product-card" style="border: 1px solid #ddd; padding: 20px; border-radius: 15px; text-align: center; margin: 15px; background: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <img src="${product.image}" alt="${product.name}" style="width:100%; max-width: 250px; height: auto; border-radius: 10px; display: block; margin: 0 auto 15px;">
                <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: #333;">${product.name}</h3>
                <div style="margin-bottom: 15px;">
                    <span style="color: #d90429; font-weight: bold; font-size: 1.5rem;">${product.price} دج</span>
                    <span style="text-decoration: line-through; color: #8d99ae; margin-right: 10px; font-size: 1rem;">${product.oldPrice} دج</span>
                </div>
                <button onclick="addToCart(${product.id})" style="background-color: #007bff; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; width: 100%; font-weight: bold; font-size: 1.1rem;">إضافة للسلة</button>
            </div>
        `;
    });
}

// تنفيذ العرض
displayProducts();

let cart = [];
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if(!cartItems || !cartTotal) return;
    
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<li style="list-style: none; padding: 5px 0; border-bottom: 1px solid #eee;">${item.name} - ${item.price} دج</li>`;
        total += item.price;
    });
    cartTotal.innerText = total;
}
