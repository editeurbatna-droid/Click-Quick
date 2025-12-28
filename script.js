const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const wilayas = ["01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة", "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة", "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة", "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة", "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار", "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"];

    mainContent.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Tajawal:wght@500;800;900&display=swap');
            
            body { background: #f4f6f9; font-family: 'Cairo', sans-serif; margin: 0; padding: 0; direction: rtl; }
            .container { width: 100%; max-width: 500px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 30px rgba(0,0,0,0.1); }
            
            /* السطر العلوي المطلوب */
            .top-bar { background: #000; color: white; padding: 12px; text-align: center; font-size: 1.5rem; font-weight: 900; }

            .main-header { padding: 20px 10px; text-align: center; }
            .heading-line { font-size: 1.7rem; font-weight: 800; color: #333; margin: 10px 0; white-space: nowrap; }
            .machine-title { font-size: 3rem; font-weight: 900; color: #e63946; margin: 0; line-height: 1.1; }

            /* إطار المشاريع المصغرة */
            .gold-frame { 
                border: 3px solid #d4af37; border-radius: 15px; padding: 15px; margin: 15px 20px;
                background: #fffdf5;
            }
            .frame-text { font-family: 'Tajawal', sans-serif; font-size: 1.4rem; font-weight: 900; color: #856404; margin: 0; white-space: nowrap; }

            .brand-name { font-size: 2.5rem; font-weight: 900; color: #007bff; margin: 10px 0 0 0; }
            .bulb-text { font-size: 1.6rem; font-weight: 800; color: #28a745; margin-bottom: 15px; }

            /* الوميض الشرطي والأحمر والأزرق البارز */
            @keyframes policeFlash { 
                0% { filter: drop-shadow(0 0 10px red); transform: scale(1); opacity: 1; }
                50% { filter: drop-shadow(0 0 30px blue); transform: scale(1.25); opacity: 0.8; }
                100% { filter: drop-shadow(0 0 10px red); transform: scale(1); opacity: 1; }
            }
            @keyframes pricePulse {
                0% { transform: scale(1); text-shadow: none; }
                50% { transform: scale(1.08); text-shadow: 0 0 15px rgba(230, 57, 70, 0.4); }
                100% { transform: scale(1); text-shadow: none; }
            }

            .price-box { border: 2.5px dashed #e63946; border-radius: 20px; padding: 20px; margin: 0 15px; background: #fffafa; }
            .price-row { display: flex; align-items: center; justify-content: center; gap: 15px; white-space: nowrap; margin: 10px 0; }
            .price-main { color: #e63946; font-size: 3.5rem; font-weight: 900; margin: 0; animation: pricePulse 0.4s infinite ease-in-out; }
            .siren-icon { animation: policeFlash 0.3s infinite; font-size: 2.5rem; }

            .order-form { padding: 25px; }
            .form-input { width: 100%; padding: 18px; margin-bottom: 12px; border: 1.5px solid #ddd; border-radius: 12px; font-family: 'Cairo'; font-size: 1.1rem; box-sizing: border-box; }
            .delivery-select { border: 2.5px solid #e63946 !important; color: #e63946; font-weight: 900; }
            .payment-note { font-family: 'Tajawal', sans-serif; font-weight: 900; font-size: 1.3rem; color: #2d3436; text-align: center; margin: 15px 0; }
            .btn-submit { width: 100%; padding: 22px; background: #e63946; color: white; border: none; border-radius: 15px; font-size: 1.8rem; font-weight: 900; cursor: pointer; box-shadow: 0 10px 25px rgba(230, 57, 70, 0.3); }
        </style>

        <div class="container" id="app-view">
            <div class="top-bar">🇩🇿 Click-Quick 🇩🇿</div>

            <div class="main-header">
                <div class="heading-line">آلة صناعة الشارات الإحترافية</div>
                <h1 class="machine-title">Machine Pin's</h1>
                
                <div class="gold-frame">
                    <div class="frame-text">أصحاب المشاريع المصغرة</div>
                    <div class="frame-text">وأصحاب المشاريع المصغرة</div>
                </div>

                <div class="brand-name">CLICK QUICK</div>
                <div class="bulb-text">💡 جابتلكم الحل</div>

                <div class="price-box">
                    <span style="text-decoration: line-through; color: #bbb; font-size: 1.4rem;">25,000 دج</span>
                    <div class="price-row">
                        <span class="siren-icon">🚨</span>
                        <h2 class="price-main">24,300 دج</h2>
                        <span class="siren-icon">🚨</span>
                    </div>
                    <div style="border-top: 1px solid #ffebeb; padding-top: 10px;">
                        <h4 style="color: #28a745; margin: 0; font-size: 1.8rem; font-weight: 900;">🔥 عرض خاص 🔥</h4>
                        <p style="color: #28a745; font-weight: 800; margin: 5px 0;">قطعتين بـ 48,000 دج فقط!</p>
                    </div>
                </div>
            </div>

            <div class="order-form">
                <input type="text" id="inp_name" class="form-input" placeholder="الإسم واللقب الكامل *">
                <input type="text" id="inp_phone" inputmode="numeric" class="form-input" placeholder="رقم الهاتف (أرقام فقط) *">
                
                <select id="inp_offer" class="form-input">
                    <option value="1 قطعة (24,300 دج)">طلب قطعة واحدة (24,300 دج)</option>
                    <option value="2 قطعة (48,000 دج)">طلب قطعتين (48,000 دج)</option>
                </select>

                <select id="inp_wilaya" class="form-input">
                    <option value="">إختر الولاية... *</option>
                    ${wilayas.map(w => `<option value="${w}">${w}</option>`).join('')}
                </select>

                <input type="text" id="inp_address" class="form-input" placeholder="العنوان بالتفصيل *">

                <p style="font-weight: 900; margin: 10px 0 5px 0;">وسيلة التوصيل:</p>
                <select id="inp_delivery" class="form-input delivery-select">
                    <option value="التوصيل للمنزل">🏠 التوصيل للمنزل (الدار)</option>
                    <option value="التوصيل للمكتب">🏢 التوصيل للمكتب (Yalidine)</option>
                </select>

                <div class="payment-note">ملاحظة: الدفع عند الإستلام</div>

                <button onclick="handleSubmit()" id="submit-action" class="btn-submit">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function handleSubmit() {
    const fields = {
        name: document.getElementById('inp_name').value.trim(),
        phone: document.getElementById('inp_phone').value.trim(),
        offer: document.getElementById('inp_offer').value,
        wilaya: document.getElementById('inp_wilaya').value,
        address: document.getElementById('inp_address').value.trim(),
        delivery: document.getElementById('inp_delivery').value
    };

    if(!fields.name || !fields.phone || !fields.wilaya || !fields.address) return alert("يرجى ملء جميع الخانات");

    const btn = document.getElementById('submit-action');
    btn.disabled = true; btn.innerText = "جاري الإرسال...";

    try {
        const res = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "data": [fields] })
        });
        if(res.ok) {
            document.getElementById('app-view').innerHTML = `<div style="padding: 150px 20px; text-align: center;"><h2>✅ تم استلام طلبك بنجاح!</h2><p>سنتصل بك قريباً لتأكيد العنوان.</p></div>`;
        } else throw new Error();
    } catch (e) {
        alert("فشل في الإرسال، يرجى المحاولة لاحقاً");
        btn.disabled = false; btn.innerText = "تأكيد الطلب الآن";
    }
}

document.addEventListener('DOMContentLoaded', displayPage);
