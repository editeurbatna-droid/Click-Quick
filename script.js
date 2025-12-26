const products = [
    {
        id: 1,
        name: "آلة صنع الشارات الاحترافية (Machine Pin's)",
        price: 24000,
        oldPrice: 25000,
        description: "آلة متينة عالية الجودة، مثالية لبدء مشروعك المصغر في صناعة الهدايا والميداليات. تتميز بسهولة الاستخدام ودقة النتائج.",
        image: "https://raw.githubusercontent.com/clickquick-site/Machine-Pins/main/1000024039.jpg"
    }
];

function displayProducts() {
    const productsSection = document.getElementById('products');
    if(!productsSection) return;
    productsSection.innerHTML = "";
    
    products.forEach(product => {
        // تصميم الواجهة لتكون الصورة هي الخلفية أو الجزء الأكبر
        var card = '<div class="product-card" style="width: 100%; min-height: 100vh; display: flex; flex-direction: column; align-items: center; background: white; padding-bottom: 30px;">';
        
        // عرض الصورة بشكل كامل في أعلى الصفحة
        card += '<div style="width: 100%; height: 350px; overflow: hidden; display: flex; justify-content: center; align-items: center; background: #f9f9f9;">';
        card += '<img src="' + product.image + '" alt="' + product.name + '" style="width: 100%; height: 100%; object-fit: contain;">';
        card += '</div>';
        
        // تفاصيل المنتج تحت الصورة
        card += '<div style="padding: 20px; text-align: center; width: 90%;">';
        card += '<h1 style="font-size: 1.5em; margin: 15px 0; color: #333;">' + product.name + '</h1>';
        card += '<p style="color: #666; font-size: 1em; line-height: 1.6; margin-bottom: 20px;">' + product.description + '</p>';
        
        // السعر
        card += '<div style="margin-bottom: 25px;">';
        card += '<span style="color: #e63946; font-weight: bold; font-size: 1.8em; display: block;">' + product.price + ' دج</span>';
        card += '<span style="text-decoration: line-through; color: #888; font-size: 1.1em;">' + product.oldPrice + ' دج</span>';
        card += '</div>';
        
        // الزر الأخضر بشكل عريض وسهل الضغط
        card += '<button onclick="contactWhatsApp()" style="background-color: #25d366; color: white; border: none; padding: 20px; border-radius: 50px; cursor: pointer; width: 100%; font-weight: bold; font-size: 1.1em; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);">إضغط هنا للاستفسار أو الطلب عبر واتساب</button>';
        card += '</div>';
        card += '</div>';
        
        productsSection.innerHTML += card;
    });
}

function contactWhatsApp() {
    var phone = "213770044850";
    var productName = "آلة صنع الشارات الاحترافية";
    var msg = "مرحباً، أريد الاستفسار عن " + productName + " التي رأيتها في الفيديو.";
    var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
}

displayProducts();
