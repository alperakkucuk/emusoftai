const counters = document.querySelectorAll('.stat-number');
const trBtn = document.getElementById('tr-btn');
const enBtn = document.getElementById('en-btn');

const statTexts = document.querySelectorAll('.stat-text');
const clubName = document.getElementById('club-name');
const qrTitles = document.querySelectorAll('.qr-title'); // Tüm QR başlıklarını seçiyoruz
const qrTexts = document.querySelectorAll('.qr-text'); // Tüm QR açıklamalarını seçiyoruz

// Sayıları animasyonla arttırma fonksiyonu
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Türkçe butonuna tıklandığında metinleri Türkçe'ye çevir
trBtn.addEventListener('click', () => {
    statTexts.forEach(text => {
        text.innerText = text.getAttribute('data-tr');
    });
    clubName.innerText = 'Yazılım ve Yapay Zeka Geliştirme Kulübü';
    qrTitles.forEach(title => {
        title.innerText = title.getAttribute('data-tr'); // Tüm QR başlıklarını güncelle
    });
    qrTexts.forEach(text => {
        text.innerText = text.getAttribute('data-tr'); // Tüm QR açıklamalarını güncelle
    });
});

// İngilizce butonuna tıklandığında metinleri İngilizce'ye çevir
enBtn.addEventListener('click', () => {
    statTexts.forEach(text => {
        text.innerText = text.getAttribute('data-en');
    });
    clubName.innerText = 'Software and Artificial Intelligence Development Club';
    qrTitles.forEach(title => {
        title.innerText = title.getAttribute('data-en'); // Tüm QR başlıklarını güncelle
    });
    qrTexts.forEach(text => {
        text.innerText = text.getAttribute('data-en'); // Tüm QR açıklamalarını güncelle
    });
});
