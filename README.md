<h3 align="center">
  <br />
  <br />
BEK Case - Frontend
  <br />
</h3>

<hr />

<p  align="center">Bu proje BEK Case projesidir.</p>


  <p align="center">
· <a  href="https://bek-case.netlify.app/">Live Adresi Linki</a>
  </p>

## 📖 Hakkında

BEK Case projesinin frontend kaynak kodlarını barındıran repository.

Proje ortamları: **Production**

Proje Next.js 14 sürümünü kullanıyor.

### 📚Tech Stack

<table>
<tr>
  <td> <a href="https://nextjs.org/">Next.js 14</a></td>
  <td>React.js&#x27;in Server Side Rendering özelliği olan frameworklerinden birisi</td>
</tr>
<tr>
  <td> <a href="https://github.com/pmndrs/zustand">Zustand</a></td>
  <td>Hook based bir state management aracı</td>
</tr>
<tr>
  <td> <a href="https://tailwindcss.com/">Tailwind CSS</a></td>
  <td>CSS'leri config üzerinden tönetmeyi sağlayan, utility based CSS kütüphanesi</td>
</tr>
<tr>
  <td> <a href="https://swiperjs.com/">Swiper</a></td>
  <td>Slider paketi</td>
</tr>
<tr>
  <td> <a href="https://www.npmjs.com/package/classnames">Classnames</a></td>
  <td>Class isimlerini şart ve koşullara göre birleştirmeyi sağlayan kütüphane</td>
</tr>
<tr>
  <td> <a href="https://www.npmjs.com/package/axios">Axios</a></td>
  <td>Server ve Client tarafta GET, POST, PUT, DELETE, PITCH gibi istekleri yönetmeyi kolaylaştıran kütüphane</td>
</tr>
<tr>
  <td> <a href="https://github.com/lydell/eslint-plugin-simple-import-sort">Eslint Simple Import Sort </a></td>
  <td>Dosyaları birbiri içerisine import ederken belirli bir sıra ile import edilmesini sağlayan muuhteşem eslint plugini</td>
</tr>
<tr>
  <td> <a href="https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases">Absolute Path</a></td>
  <td>@ işareti ile src dosyasının hedeflendiği JS dosyalarını birbiri içerisine import ederken daha şık gözükmesini sağlayan kullanım biçimi</td>
</tr>
</table>

## 🧐İçeride neler var?

### **Src** klasörü
1. *src/app* klasörü içerisinde Next.js sözdizimine uygun olarak routing yapılandırmaları mevcut

2. *src/assets* ikon, image ve CSS dosyaları mevcut
  - *src/assets/icons* içerisinde yeni bir ikon eklendikten sonra `npm run svg` komutu çalıştırılarak [React SVGR](https://react-svgr.com/) ile ~ilgili ikonun React componenti olarak *src/componnets/Icons* dizinine çıktılanması sağlanabilir

3. *src/componnets* klasörü, içerisinde uygulamaya ait global componentleri barındıran klasördür. İçerisinde mutlaka index.js dosyası barındırması gerekir ve bu dosya ana component dosyasını export etmekten sorumludur.


#### Modal Componenti
Yeni bir modal eklemek için **src/components/Modal/types.js** dosyası içerisinde her modal için ayrı ayrı constatnts ve componnet tanımlamaları yapılabilir. *src/componnets/Modal/Modal.js* dosyası global olarak bütün modallara etki eden ana Modal layout dosyasıdır.


4.  *src/constants* klasörü, içerisinde uygulamaya ait sabit tanımlamalarını barındırır ve **SCREAMING_SNAKE_CASE** olarak tamamı büyük harflerle yazılan ve kelime araları alt tire (_) ile ayrılan isimlendirmeler ile yapılmalıdır.



5.  *src/constants* klasörü, içerisinde uygulamaya ait global custom hookları barındırır


6.  *src/layouts* klasörü, içerisinde uygulamaya ait global layoutları barındırır. Bu layoutlar *app/layout* veya *app* içerisindeki routing içeren dosyalarda kullanılabilir.

7. *src/pages* klasörü, *app/**/page.js* içerisinde import edilen uygulamaya ait sayfaları barındırır. *app* klsörü içerisinde  bir sayfa (*page.js*) oluşturulduktan sonra *src/pages* içerisine de bu sayfanın ana layoutu (container'ı) eklenmelidir.

8. *src/services* klasörü, içerisinde bulunan *request.js* ile Axios modulunu kullanarak bütün API isteklerini tek yerden yönetmeyi sağlar. Yeni bir API isteği atılmak istendiğinde bu klasör içerisinde tamamı küçük harf ve tireler ile ayrılan kebab-case isimlendirmesi ile yeni bir dosya oluşturulmalı ve bu şekilde ilgili sayfaya import edilerek kullanılmalıdır.

9. *src/store* klsörü, hook based olan [Zustand](https://github.com/pmndrs/zustand) state management aracı ile uygulama içi global stateleri tutar.

Uygulama için global state'ler örneğin, Modal.


## Başlarken

### 📦 Gerekinimler

Node (v18.17.0+)

### ⚙️ Nasıl Kullanılır

1. Projeyi clone'la

```
git clone https://github.com/muratcantufekci/bek-case.git
```

2. Proje dizinine terminal ile ilerle

```
cd bek-case
```

3. Bağımlılıkları yükle

```
npm install
```
4. Development server&#x27;ı ayağa kaldır

```
npm run dev
```

Bu adımlardn sonra proje [localhost:3000](localhost:3000) adresinde ayağa kalkacaktır


---

