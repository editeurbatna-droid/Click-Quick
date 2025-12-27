const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            body { background: #f4f7f6; font-family: 'Arial', sans-serif; margin: 0; padding: 10px; }
            .card { max-width: 480px; margin: auto; background: white; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden; direction: rtl; }
            @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.8; } 100% { transform: scale(1); opacity: 1; } }
            @keyframes flash { 0% { color: red; } 50% { color: blue; } 100% { color: red; } }
            .price-row { display: inline-flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; width: 100%; margin: 10px 0; }
            .price-val { color: #e63946; font-size: 2.5rem; font-weight: 900; animation: pulse 0.8s infinite; margin: 0; }
            .siren { animation: flash 0.4s infinite; font-size: 1.8rem; }
            .product-img { width: 120px; height: auto; margin: 10px auto; display: block; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1)); }
            .special-offer { color: #2ecc71; font-weight: 900; font-size: 1.5rem; margin-top: 15px; }
            input, select { width: 100%; padding: 14px; margin-bottom: 12px; border: 1px solid #ddd; border-radius: 10px; box-sizing: border-box; font-size: 1rem; text-align: right; outline: none; }
            .submit-btn { width: 100%; padding: 18px; background: #e63946; color: white; border: none; border-radius: 12px; font-size: 1.4rem; font-weight: 900; cursor: pointer; }
        </style>

        <div class="card">
            <div style="padding: 25px; text-align: center;">
                <h2 style="color: #555; font-size: 1.1rem; margin-bottom: 5px;">آلة صنع الشارات الاحترافية</h2>
                <h1 style="color: #000; font-size: 2.2rem; margin: 0; font-weight: 900;">Machine PIN'S</h1>
                
                <img src="https://i.ibb.co/Lhb8pYV/1000025070.png" class="product-img" alt="Machine Pins">

                <p style="color: #e63946; font-weight: bold; margin: 10px 0;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="border: 2px dashed #e63946; padding: 15px; border-radius: 15px; background: #fffcfc;">
                    <span style="text-decoration: line-through; color: #999; font-size: 1.1rem;">25,000 دج</span>
                    <div class="price-row">
                        <span class="siren">🚨</span>
                        <h3 class="price-val">24,300 دج</h3>
                        <span class="siren">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #ffeaea; margin-top: 10px; padding-top: 10px;">
                        <div class="special-offer">🔥 عرض خاص 🔥</div>
                        <p style="color: #27ae60; font-weight: bold; margin: 5px 0;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div style="padding: 25px; background: #fcfcfc; border-top: 1px solid #eee;">
                <input type="text" id="name" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="phone" inputmode="numeric" placeholder="رقم الهاتف (أرقام فقط) *">
                <select id="offer">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>
                <select id="wilaya">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>
                <input type="text" id="address" placeholder="العنوان بالتفصيل *">
                <p style="font-weight: bold; margin-bottom: 8px;">وسيلة التوصيل:</p>
                <select id="delivery" style="border: 2px solid #e63946; color: #e63946; font-weight: bold;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>
                <button onclick="submitOrder()" id="sub-btn" class="submit-btn">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function submitOrder() {
    const data = {
        name: document.getElementById('name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        offer: document.getElementById('offer').value,
        wilaya: document.getElementById('wilaya').value,
        address: document.getElementById('address').value.trim(),
        delivery: document.getElementById('delivery').value
    };

    if (!data.name || !data.phone || !data.wilaya || !data.address) return alert("يرجى ملء جميع البيانات");

    const btn = document.getElementById('sub-btn');
    btn.disabled = true; btn.innerText = "جاري الإرسال...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [data] })
        });
        if (response.ok) {
            document.querySelector('.card').innerHTML = `<div style="padding: 60px 20px; text-align: center;"><h2>✅ تم بنجاح!</h2><p>سنتصل بك قريباً.</p></div>`;
        } else throw new Error();
    } catch (e) {
        alert('حدث خطأ، حاول مجدداً');
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}
document.addEventListener('DOMContentLoaded', displayPage);
