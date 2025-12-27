const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = [
        "01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة",
        "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة",
        "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة",
        "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة",
        "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار",
        "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"
    ];

    const options = wilayas.map(w => `<option value="${w}">${w}</option>`).join('');

    mainContent.innerHTML = `
        <style>
            /* خلفية الصفحة العامة */
            body { background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh; margin: 0; padding: 10px; }
            
            @keyframes emergencyFlash {
                0%, 100% { filter: drop-shadow(0 0 5px red); transform: scale(1); }
                50% { filter: drop-shadow(0 0 15px blue); transform: scale(1.1); }
            }
            @keyframes fastBounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-6px); }
            }
            .price-row { 
                display: flex; align-items: center; justify-content: center; 
                gap: 15px; white-space: nowrap; margin: 10px 0;
            }
            .moving-price { 
                animation: fastBounce 0.7s infinite ease-in-out; 
                color: #d63031; font-size: 3em; font-weight: 900; margin: 0;
            }
            .police-light { animation: emergencyFlash 0.4s infinite alternate; font-size: 2.2em; }
            
            /* تحسين شكل المدخلات */
            input, select {
                width: 100%; padding: 16px; margin-bottom: 12px;
                border: 2px solid #e0e0e0; border-radius: 12px;
                font-size: 1.1em; transition: 0.3s; outline: none;
            }
            input:focus, select:focus { border-color: #0984e3; box-shadow: 0 0 8px rgba(9, 132, 227, 0.2); }
        </style>

        <div id="order-card" style="max-width: 500px; margin: 20px auto; background: #ffffff; border-radius: 25px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); overflow: hidden; direction: rtl; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="padding: 35px 25px; text-align: center; background: #fff;">
                <h2 style="color: #636e72; margin-bottom: 5px; font-size: 1.2em; letter-spacing: 1px;">آلة صنع الشارات الاحترافية</h2>
                <h1 style="color: #2d3436; margin-top: 0; font-size: 2.6em; font-weight: 900; white-space: nowrap;">Machine Pin's</h1>
                
                <p style="color: #e17055; font-weight: bold; margin: 15px 0; font-size: 1.1em;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fff9f9; border: 2.5px dashed #ff7675; padding: 25px; border-radius: 20px; margin: 20px 0;">
                    <span style="text-decoration: line-through; color: #b2bec3; font-size: 1.4em; display: block;">25,000 دج</span>
                    
                    <div class="price-row">
                        <span class="police-light">🚨</span>
                        <h3 class="moving-price">24,300 دج</h3>
                        <span class="police-light">🚨</span>
                    </div>
                    
                    <div style="margin-top: 20px; border-top: 2px solid #fab1a0; padding-top: 15px;">
                        <h4 style="color: #00b894; margin: 0; font-size: 1.8em; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #00b894; font-weight: bold; margin: 8px 0 0; font-size: 1.3em;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
                <p style="color: #636e72; font-size: 0.9em; font-style: italic;">* تنبيه: سعر التوصيل غير محتسب في ثمن المنتج</p>
            </div>

            <div id="form-container" style="padding: 30px; background: #fdfdfd; border-top: 1px solid #eee;">
                <input type="text" id="fullname" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="phone" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '')" placeholder="رقم الهاتف *">
                
                <select id="offer">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="wilaya">
                    <option value="">إختر الولاية... *</option>
                    ${options}
                </select>

                <input type="text" id="address_input" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: bold; font-size: 1.1em; margin: 15px 0 10px; color: #2d3436;">وسيلة التوصيل:</p>
                <select id="delivery_type" style="border: 2px solid #d63031; color: #d63031; font-weight: bold;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine/Bureau)</option>
                </select>
                <p style="color: #2d3436; font-weight: bold; font-size: 1.2em; text-align: center; margin: 25px 0;">ملاحظة: الدفع عند الاستلام.</p>

                <button onclick="sendOrder()" id="btn-submit" style="width:100%; padding:22px; background:#d63031; color:white; border:none; border-radius:15px; font-size:1.7em; font-weight:900; cursor:pointer; box-shadow: 0 10px 20px rgba(214, 48, 49, 0.3);">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrder() {
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const offer = document.getElementById('offer').value;
    const address = document.getElementById('address_input').value.trim();
    const wilaya = document.getElementById('wilaya').value;
    const delivery = document.getElementById('delivery_type').value;
    
    const btn = document.getElementById('btn-submit');
    const mainCard = document.getElementById('order-card');

    if(!name || !phone || !wilaya || !address) {
        alert("يرجى ملء جميع الخانات الإجبارية (*)");
        return;
    }

    btn.disabled = true;
    btn.innerText = "جاري الحفظ...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "data": [{ "name": name, "phone": phone, "offer": offer, "address": address, "wilaya": wilaya, "delivery": delivery }]
            })
        });

        if(response.ok) {
            mainCard.innerHTML = `
                <div style="padding: 100px 20px; text-align: center; direction: rtl;">
                    <div style="font-size: 90px; margin-bottom: 20px;">✅</div>
                    <h2 style="color: #00b894; font-size: 2.2em;">تم الطلب بنجاح!</h2>
                    <p style="font-size: 1.3em; color: #636e72;">سنتصل بك قريباً لتأكيد طلبك.</p>
                </div>
            `;
        } else { throw new Error(); }
    } catch (e) {
        alert('خطأ في الإرسال، حاول مجدداً');
        btn.disabled = false;
        btn.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
