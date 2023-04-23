let listProduct = [
    {
        id: 1,
        name: "Nho Hàn Quốc",
        image: "../assets/img/content-img/NhoMauDon.png",
        price: 900000,
        desc: "Nho với trái to tròn, vỏ có màu xanh hổ phách không bị chát, vị ngọt đậm và mọng nước, ăn giòn với hương thơm rất đặc trưng.",
    },
    {
        id: 2,
        name: "Táo xanh Mỹ",
        image: "../assets/img/content-img/taoxanhmy.jpg",
        price: 140000,
        desc: "(Táo Xanh Mỹ) có nguồn gốc từ Úc du nhập vào Mỹ năm 1868. Táo có màu xanh lá, vị chua đậm, rất giòn, căng mịn, nhiều nước.",
    },
    {
        id: 3,
        name: "Dưa lưới Nhật Bản",
        image: "../assets/img/content-img/dualuoinhat.jpg",
        price: 500000,
        desc: "Dưa lưới Nhật Bản hình tròn hoặc dài, da màu xanh, khi chín thì ngả vàng, căng mịn và thịt dưa lưới màu vàng cam hoặc vàng đỏ.",
    },
    {
        id: 4,
        name: "Nho đỏ không hạt",
        image: "../assets/img/content-img/NhoDoKhongHat.png",
        price: 110000,
        desc: "Nho với trái to tròn, vỏ bóng mịn và đặc biệt có màu đỏ đặc trưng, quý hiếm. Vị ngọt đậm, ăn giòn với hương thơm rất đặc trưng.",
    },
    {
        id: 5,
        name: "Táo Rockit Mỹ",
        image: "../assets/img/content-img/TaoRockitMy.png",
        price: 163000,
        desc: "Táo Rockit Mỹ là loại đặc trưng, không bị lẫn so với những loại táo khác. Táo có màu đỏ vàng, vị chua đậm và rất giòn, nhiều nước.",
    },
    {
        id: 6,
        name: "Việt Quất Newzealand",
        image: "../assets/img/content-img/VietQuatNewzealand2.png",
        price: 140000,
        desc: "Việt Quất Newzealand xuất sứ từ nước Úc, khi chính quả có bóng tròn, căng mịn, vỏ có màu tím đặc trưng và rất mỏng.",
    },
    {
        id: 7,
        name: "Dâu Tây Hàn",
        image: "../assets/img/content-img/DauTayHan2.png",
        price: 329000,
        desc: "Dâu Tây Hàn có xuất sứ từ Hàn Quốc. Loại dâu này rất đặc trưng ở Hàn quốc, khi chín ăn rất vừa miệng, ngọt dịu pha chút vị chua.",
    },
    {
        id: 8,
        name: "Dưa lưới Taki",
        image: "../assets/img/content-img/DuaLuoiTaKi.png",
        price: 83000,
        desc: "Dưa lưới Taki là loại trái cây nhập khẩu được tiêu dùng rộng rãi bởi người Việt. Quả khi chín to tròn, ăn béo và tốt cho sức khỏe.",
    },
    {
        id: 9,
        name: "Sầu Riêng MusangKinh",
        image: "../assets/img/content-img/SauRiengMusangKinhMalaysia2.png",
        price: 870000,
        desc: "Sầu Riêng MusangKinh Malaysia là loại sầu riêng cao cấp dùng để xuất khẩu, loại này đặc biệt ngon, múi dày hơn các loại khác.",
    },
    {
        id: 10,
        name: "Cherry Đỏ Úc",
        image: "../assets/img/content-img/CherryDoUc.jpg",
        price: 690000,
        desc: "Cheery Úc là loại trái cây cung cấp nhiều vitamin, các khoáng chất thiết yếu cho cơ thể. Chính vì sự Đắt đỏ ấy mà cherry được ví là kim cương của các loại hoa quả. Chúng giàu chất xơ nên tốt cho tiêu hóa.",
    },
    {
        id: 11,
        name: "Chà là Nam Phi",
        image: "../assets/img/content-img/ChaLaNamPhi2.png",
        price: 520000,
        desc: "Chà là tươi Nam Phi có đặc tính trái còn sống thì có vị chát nhẹ của vỏ nhưng ăn quen 1 lúc thì không còn cảm giác chát nữa và giòn ngọt thanh, trái chín chuyển qua giòn nhẹ và ngọt đậm hơn, ăn dẻo và ngọt.",
    },
    {
        id: 12,
        name: "Táo mật vàng",
        image: "../assets/img/content-img/TaoMatVang2.png",
        price: 1100000,
        desc: "Táo mật vàng IWATE JUNJO Nhật Bản là giống táo quý hiếm cực kì khó trồng và độc đáo bậc nhất thế giới. Vỏ rất mỏng chứa rất nhiều nước. Là món quà tặng cao cấp sang trọng trong văn hóa Nhật Bản.",
    },
    {
        id: 13,
        name: "Lê Sữa Hàn Quốc",
        image: "../assets/img/content-img/LeSuaHanQuoc2.png",
        price: 210000,
        desc: "Lê Sữa Hàn Quốc được trồng nhiều tại Hàn quốc, loại lê này giàu chất dinh dưỡng và hương vị vô cùng đặc biệt, trái chín có vỏ mềm và xốp.",
    },
    {
        id: 14,
        name: "Táo Breeze Newzealand",
        image: "../assets/img/content-img/TaoBreezeNewzealand.png",
        price: 459000,
        desc: "Táo Breeze Newzealand có xuất xứ từ Newzealand, là loại cây cực kỳ khó trồng và quý hiếm ở đất nước này. Trái chín ăn rất ngon",
    },
    {
        id: 15,
        name: "Cam Cara Ruột Đỏ",
        image: "../assets/img/content-img/CamCareNamPhi.png",
        price: 319000,
        desc: "Cam Cara Ruột Đỏ là loại trái cây vô cùng bổ dưỡng, chứa nhiều vitamin A, C, D++, cá nguyên tố vi lượng: Sắt, kẽm... rất tốt cho sức khỏe.",
    },
    {
        id: 16,
        name: "Lê Nam Phi",
        image: "../assets/img/content-img/LeNamPhi2.png",
        price: 175000,
        desc: "Lê Nam Phi có xuất xứ từ vùng đất Nam Phi với với nhiều trái cây đa dạng. Loại lê này đặc biệt so với những loại khác là ăn rất giòn, xốp và cực kỳ ngon.",
    },
    {
        id: 17,
        name: "Táo túi Nam Phi",
        image: "../assets/img/content-img/TaoTuiNamPhi.png",
        price: 321000,
        desc: " Táo túi Nam Phi có hương vị giòn, ngọt thanh, khi trái chín 1 chút sẽ chuyển qua giòn nhẹ và ngọt đậm hơn, ăn có vị xốp và ngọt, có ít cho sức khỏe",
    },
    {
        id: 18,
        name: "Kiwi Vàng Ý",
        image: "../assets/img/content-img/KiwiVangY2.png",
        price: 280000,
        desc: "Kiwi Vàng Ý là loại trái cây được nhập khẩu từ nước ý, thơm ngon, bổ dưỡng, cung cấp nhiều chất dinh dưỡng, tạo sức đề kháng tốt cho sức khỏe.",
    },
    {
        id: 19,
        name: "Vải thiều Lục Ngạn",
        image: "../assets/img/content-img/vaithieu.jpg",
        price: 100000,
        desc: "Quả nhỏ, vỏ sần, chín màu đỏ, hạt rất nhỏ màu đen tuyền hoặc không hạt, cùi trắng dày ăn rất ngọt, hương vị thơm đặc biệt.",
    },
    {
        id: 20,
        name: "Vú Sữa Lò Rèn",
        image: "../assets/img/content-img/VuSua2.png",
        price: 140000,
        desc: "Quả vú sữa rất to và tròn. Vỏ trái vú sữa có màu xanh lục nhạt, rất bóng.Thịt bên trong rất thơm, mềm và có vị ngọt lịm thanh mát.",
    },
    {
        id: 21,
        name: "Dừa sáp Trà Vinh",
        image: "../assets/img/content-img/DuaSap2.png",
        price: 100000,
        desc: "Dừa sáp có thể ăn trực tiếp hoặc xay sinh tố, làm kem, làm chè,... Dừa sáp béo ngậy, ăn mềm mềm dai dai vô cùng ngon miệng.",
    },
    {
        id: 22,
        name: "Bơ sáp",
        image: "../assets/img/content-img/BoSap2.png",
        price: 29000,
        desc: "Bơ sáp là loại bơ được trồng nhiều tại Việt Nam. Quả có vỏ dày và hình dáng xuôn dài, thịt nhiều và béo ngậy.",
    },
    {
        id: 23,
        name: "Mảng cầu xiêm",
        image: "../assets/img/content-img/MangCauXiem.png",
        price: 40000,
        desc: "Mảng cầu xiêm là loại mảng cầu to, dài, vỏ sần sùi có gai nhọn nhưng ăn rất ngon, thích hợp làm sinh tố.",
    },
    {
        id: 24,
        name: "Thanh Long ruột đỏ",
        image: "../assets/img/content-img/ThanhLongRuotDo2.png",
        price: 15000,
        desc: "Thanh Long ruột đỏ là giống thanh long mới có xuất sứ từ Ninh Thuận, có vị đậm, ngon ngọt hơn so với thanh long thường.",
    },
    {
        id: 25,
        name: "Mít Tố Nữ",
        image: "../assets/img/content-img/MitToNu2.png",
        price: 50000,
        desc: "Mít Tố Nữ có kích cỡ quả nhỏ, mềm. Múi mềm, dễ tách, ăn có vị rất ngọt, thơm ngon, bổ dưỡng, nhiều vitamin",
    },
    {
        id: 26,
        name: "Dưa hấu Long An",
        image: "../assets/img/content-img/DuaHauLongAn.png",
        price: 67000,
        desc: "Dưa hấu Long An được trồng nhiều ở Long An, quả tròn, dài và khi chín thì ăn rất ngọt, thơm ngon, giàu vitamin.",
    },
    {
        id: 27,
        name: "Bưởi năm roi",
        image: "../assets/img/content-img/BuoiNamRoi2.png",
        price: 35000,
        desc: "Bưởi năm roi là loại bưởi đặc trưng. Quả tròn, bóng mịn. Ăn rất ngọt chứ không chua như những loại bưởi khác.",
    },
    {
        id: 28,
        name: "Sung loại 1 sấy khô",
        image: "../assets/img/content-img/SungLoaiMotSayKho2.png",
        price: 160000,
        desc: "Được chế biến từ quả sung chín, thơm ngon, bổ dưỡng dành cho mọi người. Mọi quy trình chế biến đều đảm bảo chất lượng.",
    },
    {
        id: 29,
        name: "Nho đen sấy khô",
        image: "../assets/img/content-img/NhoDenSayKho.jpg",
        price: 99000,
        desc: "Nho đen sấy khô là thực phẩm được chế biến từ quả nho nguyên chất được tuyển chọn. Sản phẩm thơm ngon, giòn , ngọt dịu.",
    },
    {
        id: 30,
        name: "Táo đỏ sấy khô",
        image: "../assets/img/content-img/TaoDoSayKho2.png",
        price: 220000,
        desc: "Là sản phẩm giàu chất dinh dưỡng được chế biến từ Táo đỏ tuyển chọn. Bổ dưỡng, giàu vitimin và có ích cho sức khỏe.",
    },
    {
        id: 31,
        name: "Mận sấy chanh muối",
        image: "../assets/img/content-img/ManSayChanhMuoi.png",
        price: 89000,
        desc: "Những quả mận được chọn lựa kỹ đưa vào sấy với nước cốt chanh muối cho ra những quả mứt mận đỏ đẹp mắt. Sản phẩm đóng lon đẹp như hình.",
    },
    {
        id: 32,
        name: "Dâu sấy giòn",
        image: "../assets/img/content-img/DauTaySay.png",
        price: 99000,
        desc: "Dâu sấy giòn được đóng gói đẹp mắt, dâu được tuyển chọn để đưa vào sấy. Dâu có hương vị thơm ngon, chua chua và hơi ngọt nhẹ, cung cấp nhiều vitamin.",
    },
    {
        id: 33,
        name: "Chà Là Khô Natural",
        image: "../assets/img/content-img/ChaLaKho2.png",
        price: 299000,
        desc: "Chà là Natural delights có thành phần 100% chà là tự nhiên Được thiết kế trong hộp nhựa gọn nhẹ. Có vị ngọt nhẹ, không cho thêm chất làm ngọt, bùi và mùi hương dịu nhẹ",
    },
    {
        id: 34,
        name: "Mơ Tây Sấy Dẻo",
        image: "../assets/img/content-img/MoTaySayDeo2.png",
        price: 129000,
        desc: "Mơ sấy dẻo tự nhiên quả to, khô ráo, vị thơm ngon. Quả mơ chín có nhiều vitamin A, C và các nguyên tố vi lượng, trong 100g trái mơ cung cấp đầy đủ lượng vitamin A cần thiết",
    },
    {
        id: 35,
        name: "Xoài Sấy Dẻo",
        image: "../assets/img/content-img/XoaiSayDeo2.png",
        price: 99000,
        desc: "Xoài Sấy Dẻo là sản phẩm cô đặc các chất dinh dưỡng, màu sắc và hương vị của quả xoài tươi tự nhiên, tạo nên sản phẩm thơm ngon, tiện lợi cho người tiêu dùng.",
    },
    {
        id: 36,
        name: "Long Táo Sấy",
        image: "../assets/img/content-img/LongTaoSay.png",
        price: 105000,
        desc: "Được chế biến theo công thức riêng biệt. Hương vị thơm ngon của trái táo xanh Ninh Thuận. Táo xanh chứa nhiều vitamin A, C và các vi chất, vi lượng tốt cho sức khỏe.",
    },
];

localStorage.setItem("listProduct", JSON.stringify(listProduct));
