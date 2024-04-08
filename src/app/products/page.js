import React from 'react';

import logo from '@/assets/images/logo.jpg'

import ListPage from '@/pages/List/List';

const List = () => {
  const data = [
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Hızlı, şık, güçlü',
      img: logo,
      point: 10,
    },
    {
      id: 2,
      name: 'Wireless Headphones Pro',
      description: 'Kaliteli, kablosuz, uzun pil ömrü',
      img: logo,
      point: 20,
    },
    {
      id: 3,
      name: 'UltraHD Smart TV',
      description: 'Yüksek çözünürlük, akıllı özellikler, geniş ekran',
      img: logo,
      point: 30,
    },
    {
      id: 4,
      name: 'Laptop Pro',
      description: 'Taşınabilir, güçlü, uzun pil ömrü',
      img: logo,
      point: 40,
    },
    {
      id: 5,
      name: 'Smartwatch Series 5',
      description: 'Şık, çok fonksiyonlu, dayanıklı',
      img: logo,
      point: 50,
    },
    {
      id: 6,
      name: 'Gaming Console X',
      description: 'Yüksek performans, eğlenceli, geniş oyun koleksiyonu',
      img: logo,
      point: 60,
    },
    {
      id: 7,
      name: 'Tablet Pro',
      description: 'Hafif, kullanışlı, yüksek çözünürlük',
      img: logo,
      point: 70,
    },
    {
      id: 8,
      name: 'Smart Speaker Mini',
      description: 'Kompakt, sesli kontrol, yüksek ses kalitesi',
      img: logo,
      point: 80,
    },
    {
      id: 9,
      name: 'Camera Drone Pro',
      description: 'Yüksek çözünürlük, uzun menzil, stabilizasyon',
      img: logo,
      point: 90,
    },
    {
      id: 10,
      name: 'Fitness Tracker Plus',
      description: 'Sporcu dostu, uzun pil ömrü, suya dayanıklı',
      img: logo,
      point: 15,
    },
    {
      id: 11,
      name: 'Smart Refrigerator',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 25,
    },
    {
      id: 12,
      name: 'Smart Thermostat',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 35,
    },
    {
      id: 13,
      name: 'Wireless Earbuds',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 45,
    },
    {
      id: 14,
      name: 'Robotic Vacuum Cleaner',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 55,
    },
    {
      id: 15,
      name: 'Smart Doorbell',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 65,
    },
    {
      id: 16,
      name: 'Smart Scale',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 75,
    },
    {
      id: 17,
      name: 'Bluetooth Speaker',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 85,
    },
    {
      id: 18,
      name: 'Portable Charger',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 95,
    },
    {
      id: 19,
      name: 'Action Camera',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 18,
    },
    {
      id: 20,
      name: 'Smart Mirror',
      description: 'Açıklama 3-5 kelimeden oluşan',
      img: logo,
      point: 33,
    },
  ];
  return <ListPage data={data} />;
};

export default List;
