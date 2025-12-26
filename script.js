const products = [
    {
        id: 1,
        name: "آلة صنع الشارات الاحترافية (Machine Pin's)",
        price: 24000,
        oldPrice: 25000,
        // تم تعديل الوصف ونزع كلمة معدنية
        description: "آلة متينة عالية الجودة، مثالية لبدء مشروعك المصغر في صناعة الهدايا والميداليات. تتميز بسهولة الاستخدام ودقة النتائج.",
        // تحديث الرابط ليتوافق مع اسم المستودع الجديد
        image: "https://raw.githubusercontent.com/clickquick-site/Machine-Pins/main/1000024039.jpg"
    }
];

function displayProducts() {
    const productsSection = document.getElementById('products');
    if(!productsSection) return;
    productsSection.innerHTML = "";
    products.forEach(product => {
        productsSection.innerHTML += `
            <div class="product-card" style="border: 1px solid #ddd; padding: 20px; border-radius: 12px; text-align: center; margin: 15px; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <img src="${product.image}" alt="${product.name}" style="width:100%; max-width: 250px; border-radius: 8px;">
                <h2 style="font-size: 1.2em; margin: 15px 0;">${product.name}</h2>
                <p style="color: #666; font-size: 0.9em; padding: 0 10px;">${product.description}</p>
                <div style="margin: 15px 0;">
                    <span style="color: #e63946; font-weight: bold; font-size: 1.5em;">${product.price} دج</span>
                    <span style="text-decoration: line-through; color: #888; margin-left: 10px;">${product.oldPrice} دج</span>
                </div>
                <button onclick="contactWhatsApp('${product.name}')" style="background-color: #25d366; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; width: 100%; font-weight: bold;">إضغط هنا للاستفسار أو الطلب عبر واتساب</button>
            </div>
        `;
    });
}

function contactWhatsApp(productName) {
    const phone = "213770044850";
    const msg = `مرحباً، أريد الاستفسار عن ${productName} التي رأيتها في الفيديو.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

displayProducts();
