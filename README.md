﻿<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>E-Commerce</h1>

  <h2>Genel Bakış</h2>
  <p>Bu proje, kullanıcıların ürün kategorilerini görüntüleyip ürünleri alışveriş sepetine ekleyebildiği basit bir e-ticaret uygulamasıdır.</p>

  <h2>Özellikler</h2>
  <ul>
    <li><strong>Ürün Kategorisi:</strong> Ürün kategorilerini getirir ve gösterir.</li>
    <li><strong>Ürünler:</strong> Ürünleri getirir ve gösterir.</li>
    <li><strong>Ürünleri Sepete Ekleme:</strong> Ürünleri alışveriş sepetine ekleme.</li>
    <li><strong>Sepeti Görüntüleme:</strong> Alışveriş sepetinin içeriğini modal ile görüntüleme.</li>
    <li><strong>Sepetteki Ürünlerin Fiyat ve Miktarı:</strong> Sepetteki ürünlerin toplam fiyatını hesaplama.</li>
  </ul>

  <h2>Başlangıç</h2>
  <h3>Gereksinimler</h3>
  <ul>
    <li>Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)</li>
  </ul>

  <h3>Kurulum</h3>
  <ol>
    <li>Depoyu klonlayın:
      <pre><code>git clone https://github.com/ahmetberktas/JS-ECommerce.git</code></pre>
    </li>
    <li>Proje dizinine gidin:
      <pre><code>cd JS-ECommerce</code></pre>
    </li>
    <li>Uygulamayı çalıştırmak için <code>index.html</code> dosyasını tarayıcınızda açın.</li>
  </ol>

  <h2>Kullanım</h2>
  <ol>
    <li>Ürün kategorilerini görüntüleyin.</li>
    <li>Ürünleri listeleyin.</li>
    <li>"Sepete Ekle" butonuna tıklayarak ürünleri alışveriş sepetine ekleyin.</li>
    <li>Sepet simgesine tıklayarak sepeti görüntüleyin.</li>
    <li>Silme simgesine tıklayarak sepetten ürünleri çıkarın.</li>
  </ol>

  <h2>Dosya Yapısı</h2>
  <pre><code>ecommerce/
├── index.html      # Ana HTML dosyası
├── style.css       # Stil dosyası (CSS)
└── main.js         # İşlevsellik için JavaScript dosyası
</code></pre>

  <h2>Kod Açıklaması</h2>
  <h3>JavaScript Fonksiyonları</h3>
  <p>JavaScript kodu, kategori ve ürünlerin getirilmesi, görüntülenmesi, alışveriş sepetinin yönetimi ve sepetin modalda gösterimi işlemlerini yürütür.</p>

  <h4><code>fetchCategories()</code></h4>
  <p>API'den ürün kategorilerini getirir ve sayfada görüntüler.</p>

  <h4><code>fetchProducts()</code></h4>
  <p>API'den ürünleri getirir ve sayfada görüntüler.</p>

  <h4><code>addToBasket(id)</code></h4>
  <p>Belirtilen ID'ye sahip ürünü alışveriş sepetine ekler.</p>

  <h4><code>renderBasket()</code></h4>
  <p>Alışveriş sepetinin içeriğini modalda gösterir.</p>

  <h4><code>calculateTotal()</code></h4>
  <p>Alışveriş sepetindeki ürünlerin toplam fiyatını hesaplar ve arayüzü günceller.</p>

  <h4><code>handleDelete(deleteId)</code></h4>
  <p>Belirtilen ID'ye sahip ürünü alışveriş sepetinden çıkarır.</p>

  <h2>API</h2>
  <p>Bu proje, ürün verilerini getirmek için <a href="https://fakestoreapi.com">Fake Store API</a>'yi kullanır. API hakkında daha fazla bilgi için <a href="https://fakestoreapi.com/docs">API Belgeleri</a>ne göz atabilirsiniz.</p>

  <h2>Kütüphaneler</h2>
  <p>Bu proje, toast bildirimleri için <a href="https://www.npmjs.com/package/toastify-js">Toastify JS</a>'yi kullanır.</p>

  <h2>Katkıda Bulunma</h2>
  <ol>
    <li>Depoyu fork edin.</li>
    <li>Özellik dalınızı oluşturun (<code>git checkout -b feature/NewFeature</code>).</li>
    <li>Değişikliklerinizi commit edin (<code>git commit -m 'Add some NewFeature'</code>).</li>
    <li>Dalınıza push edin (<code>git push origin feature/NewFeature</code>).</li>
    <li>Bir pull request açın.</li>
  </ol>

  <h2>Lisans</h2>
  <p>Bu proje MIT Lisansı altında lisanslanmıştır.</p>

</body>
</html>