import React, { useState, useEffect } from 'react';
function LocationList() {
  const [locations, setLocations] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const nb={
    color: "#ffffff",
    position:"relative",
    fontFamily:"Cursive",
    borderRadius:"30px",
    backgroundColor:"#0000FF", 
    fontFamily:"Cursive",
    border:"1px solid  #7FFF00"
  }
  

  useEffect(() => {
    const data = [
      {
        "id": 1,
        "adi": "Küçük Sanayi İtfaiyesi",
        "koor_x": [40.210439221735441619],
        "koor_y": [28.94208131427311059],
        "kat_id": 179,
        "tel": null,
        "mail": null,
        "ilce": null,
        "tarih": "2021-06-21 11:21:31",
        "mesafe": 566
        
      },
      {
        "id": 2,
        "adi": "Sosyal Hizmetler (Eski Zabıta)",
        "koor_x": [40.1839255284517094],
        "koor_y": [29.06500405364358031],
        "kat_id": 179,
        "tel": null,
        "mail": null,
        "ilce": null,
        "tarih": "2021-06-21 11:21:31",
        "mesafe": 5349
      },
    {
      "id": 3,
      "adi": "Tayyare Kültür Merkezi",
      "koor_x": "40.18324122125527964",
      "koor_y": "29.06591453090734944",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 4,
      "adi": "Tarihi Bina",
      "koor_x": "40.18385952094907054",
      "koor_y": "29.06452341416889951",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 5,
      "adi": "Bursa Aile Danışmanlık ve Eğitim Merkezi (BADEM)",
      "koor_x": "40.18190604365751994",
      "koor_y": "29.06715678556060922",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 6,
      "adi": "Şehbenderler Konağı Kütüphanesi",
      "koor_x": "40.18050833333332861",
      "koor_y": "29.06341944444444891",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.6
    },
    {
      "id": 7,
      "adi": "Merinos AKKM",
      "koor_x": "40.1997095726171878",
      "koor_y": "29.0513046568540183",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.6
    },
    {
      "id": 8,
      "adi": "Lala Şahin Paşa Çocuk Kütüphanesi",
      "koor_x": "40.18544815120277036",
      "koor_y": "29.05710470140888901",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.7
    },
    {
      "id": 9,
      "adi": "Şehir Kütüpanesi",
      "koor_x": "40.18098192271070701",
      "koor_y": "29.06994940173938957",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 10,
      "adi": "Kent Müzesi",
      "koor_x": "40.1823499908844326",
      "koor_y": "29.0665146983192102",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 11,
      "adi": "Karagöz Müzesi",
      "koor_x": "40.20178118107927645",
      "koor_y": "29.02743705042247058",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.4
    },
    {
      "id": 12,
      "adi": "Hayvanat Bahçesi İdari Bina",
      "koor_x": " 40.21813094106813935",
      "koor_y": "29.04747385484468936",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5350.9
    },
    {
      "id": 13,
      "adi": "Hanımlar Lokali",
      "koor_x": "40.19064647846518312",
      "koor_y": "29.12704149665999864",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5353
    },
    {
      "id": 14,
      "adi": "Belediye Hizmet Binası",
      "koor_x": "40.19304840161294834",
      "koor_y": "29.07718141702164871",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5350.5
    },
    {
      "id": 15,
      "adi": "Gençosman İtfayesi",
      "koor_x": "40.19994367222876264",
      "koor_y": "29.06044027472034941",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5350.1
    },
    {
      "id": 16,
      "adi": "Destek Hizmetleri Demirtaş Kampüsü",
      "koor_x": "40.22682119129672884",
      "koor_y": "29.08404315598479073",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5353.7
    },
    {
      "className": 17,
      "adi": "Hamitler Hanımlar Lokali",
      "koor_x": "40.24070461920054242",
      "koor_y": "28.98761087876964027",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.5
    },
    {
      "id": 18,
      "adi": "Bilim Teknoloji Merkezi",
      "koor_x": "40.22837762014508911",
      "koor_y": "29.0693020082797986",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5353
    },
    {
      "id": 68,
      "adi": "Kuran Müzesi",
      "koor_x": "40.19103226770963",
      "koor_y": "29.04553707292866",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.5
    },
    {
      "id": 69,
      "adi": "Huzurevi",
      "koor_x": "40.174937160354204",
      "koor_y": "29.110793571674996",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5350.8
    },
    {
      "id": 70,
      "adi": "Erikli Millet Kıraathanesi",
      "koor_x": "40.18646188746358",
      "koor_y": "29.136614266361683",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5353.2
    },
    {
      "id": 71,
      "adi": "Fen İşleri",
      "koor_x": "40.226173288586665",
      "koor_y": "29.070303115503332",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5352.9
    },
    {
      "id": 72,
      "adi": "Merinos AKKM Ek Bina",
      "koor_x": "40.19981220601558",
      "koor_y": "29.052360161522557",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.7
    },
    {
      "id": 67,
      "adi": "Mezarlıklar Ek Bina",
      "koor_x": "40.213534166831714",
      "koor_y": "29.017594400080146",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 22,
      "adi": "Acemler Kampüsü Prefabrik           ",
      "koor_x": "40.216127",
      "koor_y": "29.013696",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 23,
      "adi": "Ressam Şefik Bursalı Sanat Galerisi",
      "koor_x": "40.18354",
      "koor_y": "29.064533",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 24,
      "adi": "Buski Binası",
      "koor_x": "40.21440431318521291",
      "koor_y": "29.01520823598211152",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.8
    },
    {
      "id": 73,
      "adi": "Millet Kütüphanesi",
      "koor_x": "40.192290051450755",
      "koor_y": "29.04867671566216",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.8
    },
    {
      "id": 26,
      "adi": "Gençlik ve Aile Destek Merkezi (GADEM)",
      "koor_x": "40.19121015114757256",
      "koor_y": "29.06298418851218912",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.5
    },
    {
      "id": 27,
      "adi": "Zabıta Acemler",
      "koor_x": "40.21373532451472244",
      "koor_y": "29.01669733934251028",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 28,
      "adi": "Mezarlıklar Şube Müdürlüğü",
      "koor_x": "40.213658",
      "koor_y": "29.017197",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 29,
      "adi": "Gökçen Huzur Evi",
      "koor_x": "40.179486",
      "koor_y": "29.061147",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.4
    },
    {
      "id": 30,
      "adi": "Otobüs Terminali içi",
      "koor_x": "40.265665",
      "koor_y": "29.053278",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5355.3
    },
    {
      "id": 31,
      "adi": "Teleferik Teferrüç İstasyonu içi",
      "koor_x": "40.171132",
      "koor_y": "29.083256",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 32,
      "adi": "Tophane Parkı",
      "koor_x": " 40.18701360477148654",
      "koor_y": "29.05765097254558071",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 33,
      "adi": "15 Temmuz Meydanı",
      "koor_x": "40.18858842283970034",
      "koor_y": "29.06090588611824899",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.2
    },
    {
      "id": 34,
      "adi": "Orhangazi Meydanı",
      "koor_x": "40.18393978016597146",
      "koor_y": "29.06301189304125998",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 35,
      "adi": "Merinos Parkı",
      "koor_x": "40.19928736814110692",
      "koor_y": "29.0532677307796483",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.7
    },
    {
      "id": 36,
      "adi": "Şehir Kütüpanesi Dış Ortam",
      "koor_x": "40.18083162784284212",
      "koor_y": "29.069811799651049",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 37,
      "adi": "Reşat Oyal Kültürparkı",
      "koor_x": "40.19532806875744768",
      "koor_y": "29.04489105926415959",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 38,
      "adi": "Kent Müzesi Meydan",
      "koor_x": "40.18255910047297164",
      "koor_y": "29.06690232503434146",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 39,
      "adi": "Hüdavendigar Parkı",
      "koor_x": "40.2020624982016983",
      "koor_y": "29.00056976152920996",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5347
    },
    {
      "id": 40,
      "adi": "Belediye Hizmet Binası Dış Ortam",
      "koor_x": "40.19272563571880141",
      "koor_y": "29.0763395624332901",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5350.4
    },
    {
      "id": 41,
      "adi": "Emirsultan Meydanı",
      "koor_x": " 40.18082777777777892",
      "koor_y": "29.08065555555555903",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.6
    },
    {
      "id": 42,
      "adi": "Acemler Otobüs Durakları",
      "koor_x": "40.21274674807170868",
      "koor_y": "29.0168376099954699",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.8
    },
    {
      "id": 43,
      "adi": "Zafer Plaza Açık Alan",
      "koor_x": "40.18700872854042672",
      "koor_y": "29.05932992239592849",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 44,
      "adi": "Nalbantoğlu Meydanı",
      "koor_x": "40.182778",
      "koor_y": "29.065125",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 45,
      "adi": "Kapalı Çarşı",
      "koor_x": "40.184879",
      "koor_y": "29.062309",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 46,
      "adi": "Çekirge Meydan",
      "koor_x": "40.201974",
      "koor_y": "29.023190",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.2
    },
    {
      "id": 47,
      "adi": "Büyükşehir Stadyum Önü",
      "koor_x": "40.208604",
      "koor_y": "29.008441",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348
    },
    {
      "id": 48,
      "adi": "Dİkkaldırım (Mihraplı Cami Önü)",
      "koor_x": "40.203125",
      "koor_y": "29.005611",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5347.4
    },
    {
      "id": 49,
      "adi": "Heykel Atatürk Caddesi",
      "koor_x": "40.182866",
      "koor_y": "29.067202",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.1
    },
    {
      "id": 50,
      "adi": "Çatalfırın",
      "koor_x": "40.188267",
      "koor_y": "29.058090",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 51,
      "adi": "Cumhuriyet Caddesi Zafer Plaza Giriş",
      "koor_x": "40.186053",
      "koor_y": "29.061120",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 52,
      "adi": "Cumhuriyet Caddesi Kafe",
      "koor_x": "40.185728",
      "koor_y": "29.063408",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.1
    },
    {
      "id": 53,
      "adi": "Millet Bahçesi",
      "koor_x": "40.192927",
      "koor_y": "29.049160",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 54,
      "adi": "Kent meydanı arkası",
      "koor_x": "40.196683",
      "koor_y": "29.061685",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.9
    },
    {
      "id": 55,
      "adi": "Orhanbey Meydanı",
      "koor_x": "40.184079",
      "koor_y": "29.064708",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 56,
      "adi": "Kaplıkaya Cazibe Merkezi",
      "koor_x": "40.177258",
      "koor_y": "29.126249",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5351.9
    },
    {
      "id": 57,
      "adi": "Uzun Çarşı",
      "koor_x": "40.184775",
      "koor_y": "29.063394",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349
    },
    {
      "id": 58,
      "adi": "Teleferik Teferrüç İstasyonu dışı",
      "koor_x": "40.171172",
      "koor_y": "29.082834",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.9
    },
    {
      "id": 59,
      "adi": "Osmangazi Metro İstasyonu",
      "koor_x": "40.195961",
      "koor_y": "29.057474",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.6
    },
    {
      "id": 60,
      "adi": "Altıparmak Meydanı",
      "koor_x": "40.190953",
      "koor_y": "29.049633",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.8
    },
    {
      "id": 61,
      "adi": "Teoman Özalp Parkı",
      "koor_x": "40.240531",
      "koor_y": "28.988100",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5349.5
    },
    {
      "id": 62,
      "adi": "Karafatma Meydanı",
      "koor_x": "40.207104",
      "koor_y": "28.973327",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5345.9
    },
    {
      "id": 63,
      "adi": "Kent Ormanı",
      "koor_x": "40.184788",
      "koor_y": "28.989105",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5344.9
    },
    {
      "id": 64,
      "adi": "Balibeyhan Önü",
      "koor_x": "40.184743",
      "koor_y": "29.059038",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.8
    },
    {
      "id": 65,
      "adi": "Muradiye Külliyesi",
      "koor_x": "40.190759",
      "koor_y": "29.045635",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5348.5
    },
    {
      "id": 66,
      "adi": "Gürsu Alpaslan Türkeş Şehir Parkı",
      "koor_x": "40.217655",
      "koor_y": "29.191494",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5358.9
    },
    {
      "id": 74,
      "adi": "Kestel Meydan",
      "koor_x": "40.200856245377445",
      "koor_y": "29.21235708416681",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5358.6
    },
    {
      "id": 75,
      "adi": "Mimar Sinan Saha Amirliği",
      "koor_x": "40.191176458821516",
      "koor_y": "29.134240365388816",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2021-06-21 11:21:31",
      "mesafe": 5353.5
    },
    {
      "id": 82,
      "adi": "Personel Kreşi",
      "koor_x": "40.196421",
      "koor_y": "29.071929",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-13 16:06:32",
      "mesafe": 5350.5
    },
    {
      "id": 101,
      "adi": "Gemlik Gençlik Merkezi",
      "koor_x": "40.426161",
      "koor_y": "29.155567",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-19 16:20:06",
      "mesafe": 5374.4
    },
    {
      "id": 84,
      "adi": "Merinos Kongre Merkezi",
      "koor_x": "40.200351",
      "koor_y": "29.052278",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:12:15",
      "mesafe": 5349.7
    },
    {
      "id": 85,
      "adi": "İtfaiye AKOM ŞM",
      "koor_x": "40.225511",
      "koor_y": "29.072987",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:13:12",
      "mesafe": 5353
    },
    {
      "id": 86,
      "adi": "Atıcılar Evde Hasta Bakım Merkezi",
      "koor_x": "40.206420",
      "koor_y": "29.083578",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:15:43",
      "mesafe": 5351.9
    },
    {
      "id": 87,
      "adi": "Görükle Gençlik Merkezi",
      "koor_x": "40.226468",
      "koor_y": "28.850543",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:18:32",
      "mesafe": 5340.8
    },
    {
      "id": 88,
      "adi": "Mimarsinan İtfaiyesi",
      "koor_x": "40.191060",
      "koor_y": "29.126148",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:19:51",
      "mesafe": 5353
    },
    {
      "id": 89,
      "adi": "Mudanya Hasanbey Kütüphanesi",
      "koor_x": "40.377603",
      "koor_y": "28.877083",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:21:48",
      "mesafe": 5355
    },
    {
      "id": 90,
      "adi": "Muhsin Yazıcıoğlu Kültür Merkezi",
      "koor_x": "40.188255",
      "koor_y": "29.070478",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:25:25",
      "mesafe": 5349.7
    },
    {
      "id": 91,
      "adi": "Muhsin Yazıcıoğlu Kültür Merkezi-Mahalle Gönüllüleri Derneği",
      "koor_x": "40.188341",
      "koor_y": "29.070646",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:26:29",
      "mesafe": 5349.7
    },
    {
      "id": 92,
      "adi": "Hünkar Köşkü Müzesi",
      "koor_x": "40.174173",
      "koor_y": "29.065119",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:27:36",
      "mesafe": 5348.2
    },
    {
      "id": 93,
      "adi": "Muradiye Gençlik Merkezi Hüsnü Züber Evi",
      "koor_x": "40.190012",
      "koor_y": "29.045132",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:30:39",
      "mesafe": 5348.4
    },
    {
      "id": 94,
      "adi": "Umurbey İpek Üretim Merkezi",
      "koor_x": "40.175741",
      "koor_y": "29.072593",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:32:16",
      "mesafe": 5348.8
    },
    {
      "id": 95,
      "adi": "Mehmet Akif Ersoy Kültür Merkezi",
      "koor_x": "40.181469",
      "koor_y": "29.066856",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:35:08",
      "mesafe": 5348.9
    },
    {
      "id": 96,
      "adi": "Çukurca Köyü Parklar ve Bahçeler ŞM",
      "koor_x": "40.236898",
      "koor_y": "29.043038",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:38:42",
      "mesafe": 5352.3
    },
    {
      "id": 97,
      "adi": "Yavuzselim Sosyal Yaşam Merkezi",
      "koor_x": "40.199550",
      "koor_y": "29.115814",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:39:54",
      "mesafe": 5353.2
    },
    {
      "id": 98,
      "adi": "Orhangazi Kültür Merkezi",
      "koor_x": "40.487765",
      "koor_y": "29.308154",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:41:31",
      "mesafe": 5388.1
    },
    {
      "id": 99,
      "adi": "Mudanya Gençlik Merkezi",
      "koor_x": "40.373256",
      "koor_y": "28.889499",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:44:32",
      "mesafe": 5355.3
    },
    {
      "id": 100,
      "adi": "Uludağ Gençlik Merkezi",
      "koor_x": "40.101840",
      "koor_y": "29.131905",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-14 17:52:25",
      "mesafe": 5345.8
    },
    {
      "id": 102,
      "adi": "Vatan Gençlik Merkezi",
      "koor_x": "40.204455",
      "koor_y": "29.093162",
      "kat_id": 179,
      "tel": null,
      "mail": null,
      "ilce": null,
      "tarih": "2023-04-19 16:31:00",
      "mesafe": 5352.3
    },
 
  
      
    ];

    setLocations(data);
    setCurrentData(data[0]);
  }, []);
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: currentData.koor_x,
    lng: currentData.koor_y
  };

  return (
 
    <div>
      {locations.map((location, index) => (
        <div key={index} style={LocationStyle}>
          <h3 style={{ marginTop: 0 }}>{location.adi}</h3>
          <p>Koordinat X: {location.koor_x}</p>
          <p>Koordinat Y: {location.koor_y}</p>
       
        </div>
      ))}
    </div>
     
   
  );
}
const LocationStyle = {
  border: '3px solid #7FFF00',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  color: '#0000CD',
  fontFamily: 'Helvetica'
 
};
export default LocationList;
