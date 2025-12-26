const product = {
    id: 1,
    name: "آلة صنع الشارات الاحترافية (Machine Pin's)",
    price: 24000,
    image: "1000024039.jpg"
};

function displayPage() {
    const productsSection = document.getElementById('products');
    
    productsSection.innerHTML = `
        <div style="max-width: 500px; margin: auto; background: white;">
            <img src="${product.image}" style="width: 100%; height: auto;" alt="Product">
            
            <div style="padding: 20px; text-align: center;">
                <h2 style="color: #333;">${product.name}</h2>
                <p style="color: #e63946; font-size: 1.8em; font-weight: bold;">${product.price} دج</p>
                
                <div class="order-form">
                    <h3 style="text-align: center; color: #444;">إملأ المعلومات لإتمام الطلب</h3>
                    <input type="text" id="fullname" placeholder="الإسم واللقب" required>
                    <input type="tel" id="phone" placeholder="رقم الهاتف" required>
                    <input type="number" id="qty" value="1" min="1" placeholder="الكمية">
                    <input type="text" id="address" placeholder="العنوان بالتفصيل" required>
                    <select id="wilaya">
                        <option value="">اختر الولاية (58 ولاية)</option>
                        <option value="1-Adrar">01 - أدرار</option>
                        <option value="5-Batna">05 - باتنة</option>
                        <option value="16-Algiers">16 - الجزائر العاصمة</option>
                        </select>
                    
                    <button class="submit-btn" onclick="sendOrder()">تأكيد الطلب الآن</button>
                </div>
            </div>
        </div>
    `;
}

function sendOrder() {
    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const qty = document.getElementById('qty').value;
    const address = document.getElementById('address').value;
    const wilaya = document.getElementById('wilaya').value;

    if(name && phone && address && wilaya) {
        // هنا سيتم إرسال المعلومات إليك
        // ملاحظة: بما أننا لا نملك قاعدة بيانات، أفضل طريقة مجانية هي إرسال البيانات كرسالة منظمة لواتسابك بضغطة واحدة
        const myPhone = "213770044850";
        const message = `طلب جديد لآلة الشارات:\nالاسم: ${name}\nالهاتف: ${phone}\nالكمية: ${qty}\nالعنوان: ${address}\nالولاية: ${wilaya}`;
        
        window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
        alert("يرجى ملء جميع الخانات المطلوبة");
    }
}

displayPage();
