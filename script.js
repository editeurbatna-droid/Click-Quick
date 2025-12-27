const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
            
            body { background: #f0f2f5; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; }
            .main-container { width: 100%; max-width: 500px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 25px rgba(0,0,0,0.1); }
            
            /* تنسيق العناوين المتقاربة - صفر فراغات زائدة */
            .title-main { font-size: 2.8rem; font-weight: 900; margin: 10px 0 0 0; color: #000; text-align: center; line-height: 1.1; }
            .sub-text { font-size: 1.3rem; font-weight: 700; color: #333; margin: 5px 0 0 0; text-align: center; }
            .brand-blue { font-size: 2.4rem; font-weight: 900; color: #007bff; margin: 0; text-align: center; letter-spacing: -1px; }
            .solution { font-size: 1.2rem; font-weight: 700; color: #666; margin: 0 0 15px 0; text-align: center; }

            /* تأثير الوميض الشرطي السريع جداً */
            @keyframes policeFlash { 
                0% { filter: drop-shadow(0 0 5px red); transform: scale(1); }
                50% { filter: drop-shadow(0 0 20px blue); transform: scale(1.1); }
                100% { filter: drop-shadow(0 0 5px red); transform: scale(1); }
            }

            /* تأثير نبض السعر المبهر */
            @keyframes pricePulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.04); text-shadow: 0 0 10px rgba(230, 57, 70, 0.2); }
                100% { transform: scale(1); }
            }

            .price-row { 
                display: flex; align-items: center; justify-content: center; 
                gap: 12px; white-space: nowrap; margin: 15px 0; 
            }
            
            .price-val { 
                color: #e63946; font-size: 3.2rem; font-weight: 900; margin: 0; 
                animation: pricePulse 0.4s infinite ease-in-out; 
            }
            
            .siren { animation: policeFlash 0.4s infinite; font-size: 2.2rem; }

            .form-wrapper { padding: 20px; }
            .input-box { width: 100%; padding: 18px; margin-bottom: 12px; border: 1.5px solid #ddd; border-radius: 12px; font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box; outline: none; }
            .input-box:focus { border-color: #e63946; }
            
            .submit-button { 
                width: 100%; padding: 22px; background: #e63946; color: white; 
                border: none; border-radius: 15px; font-size: 1.7rem; font-weight: 900; 
                cursor: pointer; box-shadow: 0 8px 20px rgba(230, 57, 70, 0.3); 
                transition: transform 0.2s;
            }
            .submit-button:active { transform: scale(0.97); }
        </style>

        <div class="main-container" id="content-holder">
            <div style="padding: 25px 10px; text-align: center;">
                <p style="color: #888; margin: 0; font-weight: 700;">آلة صنع الشارات الاحترافية</p>
                <h1 class="title-main">Machine PIN'S</h1>
                
                <div class="sub-text">أصحاب المشاريع المصغرة</div>
                <div class="sub-text">وأصحاب المشاريع المنزلية</div>
                <div class="brand-blue">CLICK QUICK</div>
                <div class="solution">جابتلكم الحل</div>

                <p style="color: #e63946; font-weight: 900; margin: 10px 0; font-size: 1.1rem;">⚠️ سارع بالطلب.. الكمية محدودة جداً!</p>

                <div style="background: #fffafa; border: 2.5px dashed #e63946; padding: 20px; border-radius: 20px; margin: 0 10px;">
                    <span style="text-decoration: line-through; color: #bbb; font-size: 1.3rem;">25,000 دج</span>
                    <div class="price-row">
                        <span class="siren">🚨</span>
                        <h2 class="price-val">24,300 دج</h2>
                        <span class="siren">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #ffebeb; margin-top: 15px; padding-top: 10px;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1.8rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #28a745; font-weight: 900; margin: 5px 0; font-size: 1.3rem;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="form-wrapper">
                <input type="text" id="user_name" class="input-box" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="user_phone" inputmode="numeric" class="input-box" placeholder="رقم الهاتف (أرقام فقط) *">
                
                <select id="user_offer" class="input-box">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="user_wilaya" class="input-box">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="user_address" class="input-box" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin: 10px 0 5px 0;">وسيلة التوصيل:</p>
                <select id="user_delivery" class="input-box" style="border: 2.5px solid #e63946; color: #e63946; font-weight: 900;">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <button onclick="submitFinalOrder()" id="final-btn" class="submit-button">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function submitFinalOrder() {
    const data = {
        name: document.getElementById('user_name').value.trim(),
        phone: document.getElementById('user_phone').value.trim(),
        offer: document.getElementById('user_offer').value,
        wilaya: document.getElementById('user_wilaya').value,
        address: document.getElementById('user_address').value.trim(),
        delivery: document.getElementById('user_delivery').value
    };

    if(!data.name || !data.phone || !data.wilaya || !data.address) return alert("يرجى ملء جميع الخانات المطلوبة");

    const btn = document.getElementById('final-btn');
    btn.disabled = true; btn.innerText = "جاري الحفظ...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [data] })
        });
        if(response.ok) {
            document.getElementById('content-holder').innerHTML = `
                <div style="padding: 120px 20px; text-align: center;">
                    <div style="font-size: 70px; margin-bottom: 20px;">✅</div>
                    <h2 style="color: #28a745; font-size: 2.2rem; font-weight: 900;">تم استلام طلبك!</h2>
                    <p style="font-size: 1.2rem;">سنتصل بك قريباً جداً لتأكيد العنوان.</p>
                </div>`;
        } else throw new Error();
    } catch (e) {
        alert("فشل في الاتصال، يرجى المحاولة مرة أخرى");
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
