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
        <style>
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
            .moving-price { animation: bounce 2s infinite ease-in-out; display: inline-block; }
            .alert-blink { animation: pulse 1s infinite; display: inline-block; }
        </style>

        <div id="order-card" style="max-width: 550px; margin: auto; background: white; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden; direction: rtl;">
            <div style="padding: 25px; text-align: center;">
                <h2 style="color: #333; margin-bottom: 5px; font-size: 1.5em;">آلة صنع الشارات الاحترافية</h2>
                <h1 style="color: #000; margin-top: 0; font-size: 2.5em; font-weight: 900; font-family: Arial, sans-serif; white-space: nowrap;">Machine Pin's</h1>
                
                <p style="
