// Sabit İşçilik ve Arıza Tespit Ücreti (TL)
const BASE_PRICE = 100;

/**
 * Kullanıcının seçtiği arızalara göre toplam tahmini tamir ücretini hesaplar.
 */
function calculatePrice() {
    let totalArızaMaliyeti = 0;

    // Tüm radyo düğmesi gruplarını kontrol et (ariza1'den ariza5'e kadar)
    for (let i = 1; i <= 5; i++) {
        // Seçili olan radyo düğmesini bul
        const selectedOption = document.querySelector(`input[name="ariza${i}"]:checked`);
        
        if (selectedOption) {
            // Seçili radyo düğmesinin değerini (fiyatını) al ve sayıya çevir.
            const maliyet = parseInt(selectedOption.value);
            totalArızaMaliyeti += maliyet;
        }
    }

    // Toplam fiyat = Sabit Ücret + Toplanan Arıza Maliyetleri
    const finalPrice = BASE_PRICE + totalArızaMaliyeti;

    // Sonucu HTML'de göster. toLocaleString('tr-TR') ile Türkçe formatlama yapılır.
    document.getElementById('totalPrice').innerText = finalPrice.toLocaleString('tr-TR') + ' TL';
}

// Sayfa yüklendiğinde hesaplamayı bir kez çalıştırarak başlangıç fiyatını göster
document.addEventListener('DOMContentLoaded', calculatePrice);