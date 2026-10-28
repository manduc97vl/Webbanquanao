    let ds = [
                {id:1,ten:'ABasic Mascot PP Oversize T-Shirt',gia:650000,hinh:'kkk.webp',loai:'nước uống'},
                {id:2,ten:'Lil Poppop Gen 2 Leopard Oversize Fit T-Shirt Black',gia:800000,hinh:'ao_tay_dai_den_dt2_a8b1db91ef16448692ab9a0d606a86fa_grande.webp',mota:'abc..',loai:'nước uống'},
                {id:3,ten:'Lil Poppop Gen 2 Leopard Oversize Fit T-Shirt White',gia:900000,hinh:'bb_tee_dt1_d353804eec2445ad8e43e0067bba3763_grande.jpg',mota:'abc..',loai:'nước uống'},
                {id:4,ten:'Lil Poppop Zodiac Oversize Fit T-Shirt',gia:10000000,hinh:'logo_crack_dt2__1__2d0c0a7b095b44e09762997735e0843b_grande.jpg',mota:'abc..',loai:'nước uống'},
                {id:5,ten:'Mascot Gen 2 Rose Logo Oversize Fit Tee Black',gia:500000,hinh:'poppophihi-13058_1_5ac0cb3030fd49eeb14f22faaabd971d_grande.jpg',mota:'abc..',loai:'nước uống'},

                {id:6,ten:'Mascot Gen 2 World Map Logo Oversize Fit Tee Cream',gia:1500000,hinh:'poppophihi-13206_594437a92bf2451993da975d006b08b5_grande.webp',mota:'abc..',loai:'bánh mì'},
                {id:7,ten:'Poppop PP Leopard Gen 2 Hoodie Zip Black WLH(Wild Leopard Hood)',gia:3550000,hinh:'qqq.webp',mota:'abc..',loai:'bánh mì'},
                {id:8,ten:'Poppop PP Leopard Gen 2 Hoodie Zip Grey WLH(Wild Leopard Hood)',gia:320030,hinh:'hood_den_m__h_ng_dt2_5acba6a6d69b4810ad9b77c8b1e47880_grande.webp',mota:'abc..',loai:'bánh mì'},
                {id:9,ten:'Single Box Ser1 ( 1 TEE )',gia:3002200,hinh:'full_set__1__66c504295bde4d71a02adcc159fad7f7_grande.webp',mota:'abc..',loai:'blinb box'},
                {id:10,ten:'Single Box Ser2 ( 1 TEE )',gia:3110000,hinh:'full_set__2__1ad21086311a49fc98d9c533d4d944fc_grande.webp',mota:'abc..',loai:'blinb box'},
                {id:11,ten:'Single Box Ser3 ( 1 TEE )',gia:300022130,hinh:'full_set_d44adcf52293459fbd4a5746b6f336b1_grande.webp',mota:'abc..',loai:'blinb box'},
            ]


    let danhmuc = ["Nước uống", "Bánh mì", "Blinb box"];
    let cf = ds.filter(item => item.loai=="nước uống");
    let bm = ds.filter(item => item.loai=="bánh mì");
    let ll = ds.filter(item => item.loai=="blinb box");


   