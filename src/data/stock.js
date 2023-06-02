const stock = [
    {
        id: 1,
        category:'monitores',
        nombre: 'SAMSUNG ODYSSEY G4 FHD 240HZ',
        descripcion: `
        Marca : Samsung
        P/N : LS25BG400ELXZB
        Color : Negro
        Tamaño de panel : 25"
        Curvo/Plano : Plano
        Colores : 16.7M
        Tipo de panel : IPS
        Resolución : 1920 x 1080 FHD
        Ángulo de vision : 178 grados / 178 grados
        Parlantes : No
        Conectividad : 1 x Display Port, 2 x HDMI, 1 x USB, 1 x miniplug
        Frecuencia de actualizacion : 240 Hz
        Tiempo de respuesta (ms) : 1 ms
        Voltaje : 100-240 V, 50/60 Hz
        Inclinación : Si
        Giratorio : Si
        Pivote : Si
        Ajuste en altura : Si
        Freesync/Gsync : G-Sync
        `,
        cantidad: 10,
        precio: 124.999,
        stock:6, 
        imagen:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-0.jpg',
        image1:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-0.jpg',
        image2:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-1.jpg',
        image3:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-2.jpg',
        image4:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-3.jpg',
    },
    {
        id: 2,
        category:'mouse',
        nombre: 'MOUSE LOGITECH G305 LIGHTSPEED WIRELESS BLACK',
        descripcion: `
        Seguimiento
        - Resolución: 200  8.000 dpi
        - Aceleración máxima: >25G*
        - Velocidad máxima: >200 ips*
        - Pruebas realizadas en Logitech G240 Gaming Mouse Pad
        Respuesta:
        - Formato de datos USB: 16 bits/eje
        - Velocidad de respuesta USB: 1000 Hz (1 ms)
        - Microprocesador: 32 bits ARM
        Deslizamiento:
        - Coeficiente de fricción dinámica:* 0,10 µ (k)*
        - Coeficiente de fricción estática:* 0,16 µ (s)*
        - Pruebas realizadas en superficie de chapa de madera.
        Resistencia
        - Botones (izquierdo/derecho): 10 millones de clics
        - PTFE Pies: 250 kilómetros
        Especificaciones físicas:
        - Altura: 116,6 mm
        - Anchura: 62,15 mm
        - Profundidad: 38,2 mm
        - Peso: 99g
        `,
        cantidad: 25,
        precio: 19.999,
        imagen:'https://backupcomputacion.com/imagenes/articulos/mouse_gamer/mouse_logitech_g_pro_x_superlight_negro01.jpg',
        stock:10, 
        image1:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-0.jpg',
        image2:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-1.jpg',
        image3:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-2.jpg',
        image4:'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-black-3.jpg',
    },
    {
        id: 3,
        category:'teclados',
        nombre: 'Teclado mecánico Corsair K95 RGB Platinum XT',
        descripcion: `La retroiluminación RGB por tecla y un LightEdge de 19 zonas en la parte superior del teclado ofrece efectos de iluminación dinámicos y vibrantes con una personalización casi ilimitada
        El juego de teclas de doble disparo PBT 104/105 de 1 / 5mm de grosor moldeado con precisión resiste el desgaste y el brillo durante años de juego
        Obtenga una ventaja en el juego con seis teclas macro dedicadas totalmente programables para macros complejas y reasignaciones de teclas o cambie a las teclas S-key incluidas y programe comandos de transmisión especiales a través del software Elgato Stream Deck
        Los interruptores mecánicos de plata CHERRY MX SPEED RGB Silver proporcionan una actuación ultrarrápida de 1 2 mm y una fiabilidad comprobada con 100 millones de pulsaciones de teclas
        Un reposamanos de cuero sintético acolchado de textura suave y desmontable ofrece la comodidad de lujo para disfrutar de las sesiones de juego de maratón`,
        cantidad: 10,
        precio: 39.999,
        imagen: 'https://m.media-amazon.com/images/I/714yy-QPysL.jpg',
        stock:8,
        image1:'https://cdn.shopify.com/s/files/1/0477/6368/5540/products/image_1b46ffb1-ac8e-4a6d-a9ad-ca4806db0df6.png?v=1676494072&width=1445',
        image2:'https://www.pcfactory.cl/public/foto/37069/2_1000.jpg?t=1617718743000',
        image3:'https://images.kabum.com.br/produtos/fotos/92624/92624_index_g.jpg',
        image4:'https://falabella.scene7.com/is/image/FalabellaPE/116562116_1?wid=800&hei=800&qlt=70', 
    },
    {
        id: 4,
        category:'auriculares',
        nombre: 'Auriculares HyperX Cloud II Wireless',
        descripcion: 'Los auriculares gaming HyperX Cloud II presentan un diseño muy cómodo y una gran calidad de sonido. Nos hemos esmerado en todos los detalles de la espuma viscoelástica exclusiva HyperX, el cuero sintético de primera calidad, la fuerza de sujeción y la distribución del peso. Por ello, son los auriculares más populares entre millones de jugadores. Es un orgullo presentar los auriculares inalámbricos HyperX Cloud II. Gracias a su conexión inalámbrica de 2,4 Ghz, su amplia batería de 30 horas de duración[1] y el alcance inalámbrico de 20 m[2], podrás jugar durante todo un día sin preocupaciones. Con el impresionante sonido de los controladores de 53 mm, combinado con el audio espacial DTS® Headphone:X®[3], podrás escapar a los mundos de tus juegos de fantasía favoritos.',
        cantidad: 20,
        precio: 50.999,
        imagen:'https://gorilagames.com/img/Public/1019-producto-auricular-hyperx-cloud-ii-wireless-1-3068.jpg',
        stock:5,
        image1:'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_ii_wireless_2_main_dongle_900x.jpg?v=1662449689',
        image2:'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_ii_wireless_5_bottom_480x480.jpg?v=1662449689',
        image3:'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_ii_wireless_4_front_900x.jpg?v=1662449689',
        image4:'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_ii_wireless_6_accessories_900x.jpg?v=1662449689', 
    },
    {
        id: 5,
        category:'pc',
        nombre: 'PC armada ASUS ROG Strix G15',
        descripcion: 'PC de escritorio con procesador Intel Core i9-11900KF, tarjeta gráfica NVIDIA GeForce RTX 3080 y 32 GB de RAM',
        cantidad: 5,
        precio: 899.999,
        imagen:'https://mauricomputacion.com.ar/images/productos/24379.webp',
        stock:3, 
    },
    {
        id: 6,
        category:'monitores',
        nombre: 'Monitor MSI Optix MAG274QRF-QD',
        descripcion: 'Monitor IPS 2K de 27 pulgadas con frecuencia de actualización de 165 Hz y soporte para HDR400',
        cantidad: 20,
        precio: 229.999,
        imagen:'https://http2.mlstatic.com/D_NQ_NP_761869-MLA53378284156_012023-O.webp',
        stock:10, 
    },
    {
        id: 7,
        category:'mouse',
        nombre: 'Mouse Razer DeathAdder V2',
        descripcion: 'Mouse para gaming con sensor óptico de 20.000 DPI y switches ópticos',
        cantidad: 12,
        precio: 24.999,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_759999-MLA41816934384_052020-O.webp',
        stock:12,
    },
    {
        id: 8,
        category:'teclados',
        nombre: 'Teclado Logitech G Pro X Mechanical Gaming Keyboard',
        descripcion: 'Teclado mecánico con switches intercambiables, iluminación RGB y perfiles de juego programables',
        cantidad: 8,
        precio: 39.999,
        imagen: 'https://m.media-amazon.com/images/I/714ehqraXCL.jpg',
        stock:8,
    },

    {
        id: 9,
        category:'auriculares',
        nombre: 'Auriculares inalámbricos Logitech G Series G733 negro con luz rgb LED',
        descripcion: '¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G733 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.',
        cantidad: 15,
        precio: 57.999,
        imagen:'https://http2.mlstatic.com/D_NQ_NP_760857-MLA44771394445_022021-O.webp',
        stock:12, 
    },
    {
        id: 10,
        category:'pc',
        nombre: 'PC armada NZXT BLD H1 Mini PC',
        descripcion: 'PC de escritorio compacto con procesador AMD Ryzen 7 5800X, tarjeta gráfica NVIDIA GeForce RTX 3070 y 16 GB de RAM',
        cantidad: 8,
        precio: 599.999,
        imagen:'https://www.datocms-assets.com/34299/1678229989-playerthreeprime-hero-white.png?auto=format&fit=max&w=1200',
        stock:3, 
    }
];

export default stock;
  
