const counters = document.querySelectorAll('.stat-number');
const trBtn = document.getElementById('tr-btn');
const enBtn = document.getElementById('en-btn');


const statTexts = document.querySelectorAll('.stat-text');
const clubName = document.getElementById('club-name');
const qrTitle = document.querySelector('.qr-title');
const qrText = document.querySelector('.qr-text');

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
    qrTitle.innerText = qrTitle.getAttribute('data-tr');
    qrText.innerText = qrText.getAttribute('data-tr');
});

// İngilizce butonuna tıklandığında metinleri İngilizce'ye çevir
enBtn.addEventListener('click', () => {
    statTexts.forEach(text => {
        text.innerText = text.getAttribute('data-en');
    });
    clubName.innerText = 'Software and Artificial Intelligence Development Club';
    qrTitle.innerText = qrTitle.getAttribute('data-en');
    qrText.innerText = qrText.getAttribute('data-en');
});
