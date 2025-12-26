const apiURL = 'https://sheetdb.io/api/v1/39pno9695z76i';

function displayPage() {
    const mainContent = document.getElementById('main-content');
    
    const wilayas = [
        "01-أدرار", "02-الشلف", "03-الأغواط", "04-أم البواقي", "05-باتنة", "06-بجاية", "07-بسكرة", "08-بشار", "09-البليدة", "10-البويرة",
        "11-تمنراست", "12-تبسة", "13-تلمسان", "14-تيارت", "15-تيزي وزو", "16-الجزائر", "17-الجلفة", "18-جيجل", "19-سطيف", "20-سعيدة",
        "21-سكيكدة", "22-سيدي بلعباس", "23-عنابة", "24-قالمة", "25-قسنطينة", "26-المدية", "27-مستغانم", "28-المسيلة", "29-معسكر", "30-ورقلة",
        "31-وهران", "32-البيض", "33-إليزي", "34-برج بوعريريج", "35-بومرداس", "36-الطارف", "37-تندوف", "38-تيسمسيلت", "39-الوادي", "40-خنشلة",
        "41-سوق أهراس", "42-تيبازة", "43-ميلة", "44-عين الدفلى", "45-النعامة", "46-عين تموشنت", "47-غرداية", "48-غليزان", "49-تيميمون", "50-برج باجي مختار",
        "51-أولاد جلال", "52-بني عباس", "53-عين صالح", "54-عين قزام", "55-تقرت", "56-جانت", "57-المغير", "58-المنيعة"
    ];

    let options = wilayas.map(w => `<option value="${w}">${w}</option>`).join('');

    mainContent.innerHTML = `
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="padding: 20px; text-align: center;">
                <h2 style="color: #333;">آلة صنع الشارات الاحترافية</h2>
                <div style="background: #fff5f5; border: 2px dashed #e63946; padding: 15px; border-radius: 10px; margin: 15px 0;">
                    <span style="text-decoration: line-through; color: #999;">25,000 دج</span>
                    <h3 style="color: #e63946; font-size: 2.2em; margin: 5px 0;">24,000 دج</h3>
                    <p style="color: #28a745; font-weight: bold; margin: 0;">الآن قطعتين بـ 47,000 دج فقط!</p>
                </div>
            </div>

            <div style="padding: 20px; background: #fafafa;">
                <h4 style="margin-bottom: 15px; color: #555; border-right: 4px solid #e63946; padding-right: 10px;">معلومات الشحن (التوصيل متاح لـ 58 ولاية)</h4>
                
                <input type="text" id="fullname" placeholder="الإسم واللقب الكامل" style="width:100%; padding:14px; margin-bottom:12px; border:1px solid #ddd; border-radius:8px; box-sizing:border-box;">
                
                <input type="tel" id="phone" placeholder="رقم الهاتف (ضروري)" style="width:100%; padding:14px; margin-bottom:12px; border:1px solid #ddd; border-radius:8px; box-sizing:border-box;">
                
                <select id="offer" style="width:100%; padding:14px; margin-bottom:12px; border:1px solid #ddd; border-radius:8px; background:white;">
                    <option value="1 قطعة">عرض قطعة واحدة (24,000 دج)</option>
                    <option value="2 قطعة">عرض قطعتين (47,000 دج)</option>
                </select>

                <select id="wilaya" style="width:100%; padding:14px; margin-bottom:12px; border:1px solid #ddd; border-radius:8px; background:white;">
                    <option value="">إختر الولاية...</option>
                    ${options}
                </select>

                <input type="text" id="address" placeholder="العنوان بالتفصيل (البلدية، الحي..)" style="width:100%; padding:14px; margin-bottom:20px; border:1px solid #ddd; border-radius:8px; box-sizing:border-box;">

                <button onclick="sendOrder()" id="btn-submit" style="width:100%; padding:18px; background:#e63946; color:white; border:none; border-radius:8px; font-size:1.3em; font-weight:bold; cursor:pointer;">تأكيد الطلب الآن</button>
            </div>
        </div>
    `;
}

async function sendOrder() {
    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const offer = document.getElementById('offer').value;
    const address = document.getElementById('address').value;
    const wilaya = document.getElementById('wilaya').value;
    const btn = document.getElementById('btn-submit');

    if(!name || !phone || !wilaya || !address) {
        alert("يرجى ملء جميع الخانات بشكل صحيح");
        return;
    }

    btn.disabled = true;
    btn.innerText = "جاري الإرسال...";

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "data": [{ "name": name, "phone": phone, "offer": offer, "address": address, "wilaya": wilaya }]
            })
        });

        if(response.ok) {
            alert('شكراً لك! تم استلام طلبك بنجاح. سنتصل بك قريباً.');
            location.reload();
        }
    } catch (e) {
        alert('حدث خطأ، يرجى المحاولة مرة أخرى');
        btn.disabled = false;
        btn.innerText = "تأكيد الطلب الآن";
    }
}

displayPage();
