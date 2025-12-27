const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            body { background: linear-gradient(135deg, #ece9e6, #ffffff); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 15px; }
            @keyframes policeFlash { 0%, 100% { filter: drop-shadow(0 0 5px red); transform: scale(1); } 50% { filter: drop-shadow(0 0 15px blue); transform: scale(1.1); } }
            @keyframes bouncePrice { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
            .order-card { max-width: 500px; margin: auto; background: white; border-radius: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.12); overflow: hidden; direction: rtl; }
            .price-unit { display: flex; align-items: center; justify-content: center; gap: 10px; white-space: nowrap; margin: 5px 0; }
            .price-text { animation: bouncePrice 0.8s infinite; color: #e63946; font-size: 2.8em; font-weight: 900; }
            .flash-icon { animation: policeFlash 0.5s infinite alternate; font-size: 2.2em; }
            .input-style { width: 100%; padding: 15px; margin-bottom: 15px; border: 1.5px solid #ddd; border-radius: 12px; font-size: 1.1em; box-sizing: border-box; outline: none; transition: 0.3s; }
            .input-style:focus { border-color: #e63946; box-shadow: 0 0 8px rgba(230, 57, 70, 0.2); }
            .btn-submit { width: 100%; padding: 20px; background: #e63946; color: white; border: none; border-radius: 12px; font-size: 1.6em; font-weight: bold; cursor: pointer; box-shadow: 0 5px 15px rgba(230, 57, 70, 0.4); }
        </style>

        <div class="order-card">
            <div style="padding: 30px; text-align: center;">
                <h3 style="color: #666; margin-bottom: 5px;">آلة صنع الشارات الاحترافية</h3>
                <h1 style="font-size: 2.5em; margin: 0; color: #000;">Machine Pin's</h1>
                
                <p style="color: #e63946; font-weight: bold; margin: 20px 0;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fff5f5; border: 2px dashed #e63946; padding: 20px; border-radius: 20px;">
                    <span style="text-decoration: line-through; color: #aaa; font-size: 1.3em;">25,000 دج</span>
                    <div class="price-unit">
                        <span class="flash-icon">🚨</span>
                        <div class="price-text">24,300 دج</div>
                        <span class="flash-icon">🚨</span>
                    </div>
                    <hr style="border: 0; border-top: 1px solid #ffcdd2; margin: 15px 0;">
                    <h2 style="color: #28a745; margin: 0; font-size: 1.8em;">🔥 عرض خاص 🔥</h2>
                    <p style="color: #28a745; font-weight: bold; margin-top: 5px; font-size: 1.2em;">قطعتين بـ 48,000 دج فقط!</p>
                </div>
                <p style="color: #888; font-size: 0.85em; margin-top: 10px;">* تنبيه: سعر التوصيل غير محتسب في ثمن المنتج</p>
            </div>

            <div style="padding: 25px; background: #fafafa; border-top: 1px solid #eee;">
                <input type="text" id="fullname" class="input-style" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="phone" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '')" class="input-style" placeholder="رقم الهاتف *">
                <select id="offer" class="input-style">
                    <option value="1 قطعة (24,300 دج)">قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">قطعتين (48,000 دج)</option>
                </select>
                <select id="wilaya" class="input-style">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>
                <input type="text" id="address_input" class="input-style" placeholder="العنوان بالتفصيل *">
                <p style="font-weight: bold; margin-bottom: 10px;">وسيلة التوصيل:</p>
                <select id="delivery_type" class="input-style" style="border-color: #e63946; color: #e63946; font-weight: bold;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>
                <p style="text-align: center; font-weight: 900; font-size: 1.2em; margin: 20px 0;">ملاحظة: الدفع عند الاستلام.</p>
                <button onclick="sendOrder()" id="btn-submit" class="btn-submit">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrder() {
    const fields = { name: 'fullname', phone: 'phone', offer: 'offer', address: 'address_input', wilaya: 'wilaya', delivery: 'delivery_type' };
    const data = {};
    for (let key in fields) {
        data[key] = document.getElementById(fields[key]).value.trim();
        if (!data[key] && key !== 'offer') return alert("يرجى ملء جميع الخانات (*)");
    }

    const btn = document.getElementById('btn-submit');
    btn.disabled = true; btn.innerText = "جاري الإرسال...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [data] })
        });
        if (response.ok) {
            document.getElementById('order-card').innerHTML = `<div style="padding: 80px 20px; text-align: center;"><h2>✅ تم بنجاح!</h2><p>سنتصل بك قريباً.</p></div>`;
        } else throw new Error();
    } catch (e) {
        alert('حدث خطأ، حاول مجدداً');
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}
document.addEventListener('DOMContentLoaded', displayPage);
