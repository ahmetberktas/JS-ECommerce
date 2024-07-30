<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>E-Commerce</h1>
        <p>Bu proje, ürün kategorilerini gösteren ve kullanıcıların alışveriş sepetine ürün eklemesine olanak tanıyan basit bir e-ticaret uygulamasıdır.</p>

        <h2>Özellikler</h2>
        <ul>
            <li>Ürün kategorilerini getirir ve gösterir.</li>
            <li>Ürünleri getirir ve gösterir.</li>
            <li>Ürünleri alışveriş sepetine ekler.</li>
            <li>Alışveriş sepetinin içeriğini gösterir.</li>
            <li>Sepetteki ürünlerin toplam fiyatını hesaplar ve gösterir.</li>
        </ul>

        <h2>Kurulum</h2>
        <p>Bu projeyi çalıştırmak için, depoyu klonlayın ve <code>index.html</code> dosyasını tarayıcınızda açın.</p>

        <h2>Kullanım</h2>
        <p><code>index.html</code> dosyasını açtıktan sonra aşağıdaki işlemleri yapabilirsiniz:</p>
        <ul>
            <li>Ürün kategorilerini görüntüleyin.</li>
            <li>Ürün listesini görüntüleyin.</li>
            <li>"Sepete Ekle" butonuna tıklayarak ürünleri alışveriş sepetine ekleyin.</li>
            <li>Sepeti görüntülemek için sepet simgesine tıklayın.</li>
            <li>Silme simgesine tıklayarak sepetten ürünleri çıkarın.</li>
        </ul>

        <h2>Kod İncelemesi</h2>
        <h3>HTML Yapısı</h3>
        <pre><code>&lt;div class="categories"&gt;&lt;/div&gt;
&lt;div class="products"&gt;&lt;/div&gt;
&lt;div class="modal-wrapper"&gt;
    &lt;div class="modal"&gt;
        &lt;button id="close-btn"&gt;Kapat&lt;/button&gt;
        &lt;div id="list"&gt;&lt;/div&gt;
        &lt;div id="total"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;button class="basket"&gt;Sepet&lt;/button&gt;</code></pre>

        <h3>JavaScript Kodu</h3>
        <p>JavaScript kodu, kategorileri ve ürünleri getirme, sayfada görüntüleme, alışveriş sepetini yönetme ve sepeti modalda görüntüleme işlemlerini yönetir. İşte ana fonksiyonların kısa açıklamaları:</p>

        <h4><code>fetchCategories()</code></h4>
        <p>API'den ürün kategorilerini getirir ve sayfada görüntüler.</p>

        <h4><code>fetchProducts()</code></h4>
        <p>API'den ürünleri getirir ve sayfada görüntüler.</p>

        <h4><code>addToBasket(id)</code></h4>
        <p>Bir ürünü ID'sine göre alışveriş sepetine ekler.</p>

        <h4><code>renderBasket()</code></h4>
        <p>Alışveriş sepetinin içeriğini modalda görüntüler.</p>

        <h4><code>calculateTotal()</code></h4>
        <p>Alışveriş sepetindeki ürünlerin toplam fiyatını hesaplar ve arayüzü günceller.</p>

        <h4><code>handleDelete(deleteId)</code></h4>
        <p>Bir ürünü ID'sine göre alışveriş sepetinden çıkarır.</p>

        <h2>API</h2>
        <p>Bu proje, ürün verilerini getirmek için <a href="https://fakestoreapi.com">Fake Store API</a>'yi kullanır.</p>

        <h2>Kütüphaneler</h2>
        <p>Bu proje, bildirimler için <a href="https://www.npmjs.com/package/toastify-js">Toastify JS</a>'yi kullanır.</p>

        <h2>Lisans</h2>
        <p>Bu proje MIT Lisansı altında lisanslanmıştır.</p>
    </div>
</body>
</html>
