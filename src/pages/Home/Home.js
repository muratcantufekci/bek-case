/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Image from 'next/image';

import img from '@/assets/images/bek.jpg';
import logo from '@/assets/images/logo.jpg'

import Card from '@/components/Card';

import css from './Home.module.scss';

const Home = () => {
  const DUMMY_DATA = [
    {
      "id": 1,
      "name": "Smartphone X",
      "description": "Hızlı, şık, güçlü",
      "img": logo,
      "stock": 3,
      "isGiveaway": true
    },
    {
      "id": 2,
      "name": "Wireless Headphones Pro",
      "description": "Kaliteli, kablosuz, uzun pil ömrü",
      "img": logo,
      "stock": 2,
      "isGiveaway": true
    },
    {
      "id": 3,
      "name": "UltraHD Smart TV",
      "description": "Yüksek çözünürlük, akıllı özellikler, geniş ekran",
      "img": logo,
      "stock": 3,
      "isGiveaway": true
    },
    {
      "id": 4,
      "name": "Laptop Pro",
      "description": "Taşınabilir, güçlü, uzun pil ömrü",
      "img": logo,
      "stock": 5,
      "isGiveaway": true
    },
    {
      "id": 5,
      "name": "Smartwatch Series 5",
      "description": "Şık, çok fonksiyonlu, dayanıklı",
      "img": logo,
      "stock": 1,
      "isGiveaway": true
    },
    {
      "id": 6,
      "name": "Gaming Console X",
      "description": "Yüksek performans, eğlenceli, geniş oyun koleksiyonu",
      "img": logo,
      "stock": 2,
      "isGiveaway": true
    },
    {
      "id": 7,
      "name": "Tablet Pro",
      "description": "Hafif, kullanışlı, yüksek çözünürlük",
      "img": logo,
      "stock": 3,
      "isGiveaway": true
    },
    {
      "id": 8,
      "name": "Smart Speaker Mini",
      "description": "Kompakt, sesli kontrol, yüksek ses kalitesi",
      "img": logo,
      "stock": 4,
      "isGiveaway": true
    },
    {
      "id": 9,
      "name": "Camera Drone Pro",
      "description": "Yüksek çözünürlük, uzun menzil, stabilizasyon",
      "img": logo,
      "stock": 1,
      "isGiveaway": true
    },
    {
      "id": 10,
      "name": "Fitness Tracker Plus",
      "description": "Sporcu dostu, uzun pil ömrü, suya dayanıklı",
      "img": logo,
      "stock": 2,
      "isGiveaway": true
    }
  ]

  return (
    <div className="container">
      <div className={css.wrapper}>
        <Image src={img} alt="BEK" className={css.img} />
        <h2>BEKalite</h2>
        <p>
          BEK'te sürekli gelişme felsefesi amaç edinilerek bu felsefenin kurum kültürü olarak sürekliliğinin sağlanması
          hedeflenmektedir. Sürekli öğrenen bir organizasyon olarak kalite yolculuğumuzda bilgi ve deneyimlerimizi
          zenginleştirerek, iş mükemmelliğine sağlam adımlarla ilerliyoruz. Sektöründe güçlü ve kalıcı olabilen, yaptığı
          işte farklılık yaratan, rekabet edebilen, teknolojiye ayak uydurarak bilgi sistemlerini doğru kullanan,
          çalışanlarının bireysel ve mesleki gelişimini ön planda tutan, iş ortakları ile birlikte büyüyen ve
          verimliliği esas alan bir kurum olarak rekabet içerisinde fark yaratan lider konumumuzun sürekliliğini
          koruyoruz.
        </p>

        <h2>Sponsorlu ürünler listesi</h2>
        <div className={css.products}>
          {DUMMY_DATA.map(item => (
            <Card key={item.id} title={item.name} desc={item.description} img={item.img} point={item.stock} isGiveaway={item.isGiveaway}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
