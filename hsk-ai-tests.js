/* 52 ca kiểm thử chất lượng nhận xét AI (dịch câu HSK 1).
   exp: "ok"   = bản dịch đúng; kết quả mong muốn là "Phù hợp" (được phép "Chưa chắc", KHÔNG được "Cần xem lại").
        "soft" = có thể chấp nhận hoặc không tự nhiên; "Phù hợp" hoặc "Chưa chắc" đều đạt, "Cần xem lại" là sai (không được kết luận sai chắc chắn).
        "bad"  = có lỗi; kết quả mong muốn là "Cần xem lại" (hoặc tối thiểu "Chưa chắc"), KHÔNG được "Phù hợp".
   types: loại lỗi được xem là gọi đúng (chỉ là chỉ số phụ, không quyết định đạt/không đạt).
   Các ca K01–K30: bộ cũ (K16, K18, K30 = meaning; K21 = grammar theo xác nhận của chủ dự án). Các ca N01–N22: bộ bổ sung.
   LƯU Ý: nhãn do Claude soạn, chưa được giáo viên/người bản ngữ xác nhận (chỉ các nhãn K16, K18, K21, K30 và tính chất mềm của N10, N12, N13, N14 do chủ dự án chỉ định). */
window.HSK_AI_TESTS=[
 {id:"K01",item:"T1-S-001",ans:"我叫张伟。",exp:"ok",note:"đáp án mẫu"},
 {id:"K02",item:"T1-S-001",ans:"我的名字叫张伟。",exp:"ok",note:"cách nói khác đúng"},
 {id:"K03",item:"T1-S-005",ans:"今天是星期五。",exp:"ok",note:"đáp án phụ trong dữ liệu"},
 {id:"K04",item:"T1-S-009",ans:"我不喝茶，喝水。",exp:"ok",note:"bỏ chủ ngữ vế sau"},
 {id:"K05",item:"T1-S-012",ans:"我家在学校的后面。",exp:"ok",note:"thêm 的, vẫn đúng"},
 {id:"K06",item:"T1-S-018",ans:"我和朋友一起去看电影。",exp:"ok",note:"thêm 一起, từ HSK 2 nhưng đúng"},
 {id:"K07",item:"T1-S-020",ans:"他昨天没来学校。",exp:"ok",note:"bỏ 有"},
 {id:"K08",item:"T1-S-004",ans:"今天很热。",exp:"ok",note:"bỏ 天气, vẫn đúng"},
 {id:"K09",item:"T1-S-010",ans:"我想买点水果。",exp:"ok",note:"点 thay 一些"},
 {id:"K10",item:"T1-S-015",ans:"明天下雨吗？",exp:"ok",note:"bỏ 会"},
 {id:"K11",item:"T1-S-019",ans:"对不起，今天我不能去。",exp:"ok",note:"đổi trật tự 今天/我, không có trong dữ liệu"},
 {id:"K12",item:"T1-S-017",ans:"我爸爸在医院上班。",exp:"ok",note:"dùng 上班 (ngoài HSK 1) nhưng đúng"},
 {id:"K13",item:"T1-S-005",ans:"今天星期六。",exp:"bad",types:["meaning"],note:"nhầm thứ Sáu thành thứ Bảy"},
 {id:"K14",item:"T1-S-007",ans:"这个杯子多少钱？",exp:"bad",types:["meaning","vocabulary"],note:"đề là cái cốc KIA (那), viết 这 (này)"},
 {id:"K15",item:"T1-S-015",ans:"昨天会下雨吗？",exp:"bad",types:["meaning","vocabulary","name"],note:"đề là ngày mai, viết hôm qua"},
 {id:"K16",item:"T1-S-017",ans:"我爸爸在学校工作。",exp:"bad",types:["meaning"],note:"đề là bệnh viện, viết trường học"},
 {id:"K17",item:"T1-S-019",ans:"对不起，我今天不想去。",exp:"bad",types:["meaning","vocabulary"],note:"'không đi được' thành 'không muốn đi'"},
 {id:"K18",item:"T1-S-020",ans:"他今天没有来学校。",exp:"bad",types:["meaning"],note:"đề là hôm qua, viết hôm nay"},
 {id:"K19",item:"T1-S-002",ans:"她是中国人。",exp:"bad",types:["name","meaning"],note:"đổi người Việt Nam thành người Trung Quốc"},
 {id:"K20",item:"T1-S-001",ans:"我叫王伟。",exp:"bad",types:["name"],note:"đổi tên Trương Vĩ thành Vương Vĩ"},
 {id:"K21",item:"T1-S-011",ans:"你的书是桌子上。",exp:"bad",types:["grammar"],note:"dùng 是 thay 在 chỉ vị trí"},
 {id:"K22",item:"T1-S-004",ans:"今天是热。",exp:"bad",types:["grammar","vocabulary"],note:"dùng 是 trước tính từ"},
 {id:"K23",item:"T1-S-020",ans:"他昨天没有来了学校。",exp:"bad",types:["grammar"],note:"没有 cùng 了"},
 {id:"K24",item:"T1-S-006",ans:"你睡觉几点？",exp:"bad",types:["word_order","grammar"],note:"几点 phải đứng trước động từ"},
 {id:"K25",item:"T1-S-016",ans:"我学习汉语在家。",exp:"bad",types:["word_order","grammar"],note:"địa điểm đứng sau động từ"},
 {id:"K26",item:"T1-S-010",ans:"我想卖一些水果。",exp:"bad",types:["vocabulary","meaning"],note:"买 (mua) thành 卖 (bán)"},
 {id:"K27",item:"T1-S-008",ans:"他有一个儿子。",exp:"bad",types:["vocabulary","meaning"],note:"con gái thành con trai"},
 {id:"K28",item:"T1-S-014",ans:"我们去饭馆喝米饭。",exp:"bad",types:["vocabulary","meaning","grammar"],note:"ăn (吃) thành uống (喝)"},
 {id:"K29",item:"T1-S-001",ans:"我叫张伟，我是学生。",exp:"bad",types:["extra_content"],note:"thêm 'tôi là học sinh' không có trong đề"},
 {id:"K30",item:"T1-S-003",ans:"这是我爸爸。",exp:"bad",types:["meaning"],note:"mẹ thành bố"},
 // ---- Bổ sung: đúng nhưng khác đáp án mẫu ----
 {id:"N01",item:"T1-S-010",ans:"我想买些水果。",exp:"ok",note:"些 thay 一些"},
 {id:"N02",item:"T1-S-011",ans:"你的书在桌子上面。",exp:"ok",note:"上面 thay 上"},
 {id:"N03",item:"T1-S-012",ans:"我家在学校后边。",exp:"ok",note:"后边 thay 后面"},
 {id:"N04",item:"T1-S-013",ans:"请写你的名字。",exp:"ok",note:"bỏ 你 sau 请"},
 {id:"N05",item:"T1-S-014",ans:"我们去饭馆吃饭。",exp:"ok",note:"吃饭 thay 吃米饭"},
 {id:"N06",item:"T1-S-015",ans:"明天会不会下雨？",exp:"ok",note:"câu hỏi chính phản; chỉ khác một mục avoid ở chữ 吗"},
 {id:"N07",item:"T1-S-016",ans:"我在家学汉语。",exp:"ok",note:"学 thay 学习"},
 {id:"N08",item:"T1-S-020",ans:"昨天他没来学校。",exp:"ok",note:"đưa 昨天 lên đầu câu"},
 {id:"N09",item:"T1-S-002",ans:"她是个越南人。",exp:"ok",note:"thêm 个"},
 {id:"N10",item:"T1-S-018",ans:"我跟朋友一起去看电影。",exp:"soft",note:"跟 và 一起 ngoài HSK 1 nhưng đúng; không được kết luận sai chắc chắn"},
 {id:"N11",item:"T1-S-019",ans:"对不起，我今天去不了。",exp:"ok",note:"去不了 thay 不能去"},
 // ---- Bổ sung: mơ hồ / không tự nhiên bằng bản mẫu ----
 {id:"N12",item:"T1-S-017",ans:"我爸爸工作在医院。",exp:"soft",note:"đúng ngữ pháp nhưng kém tự nhiên hơn 在医院工作; Chưa chắc là hợp lý"},
 {id:"N13",item:"T1-S-016",ans:"在家我学习汉语。",exp:"soft",note:"đưa trạng ngữ nơi chốn lên đầu câu; chấp nhận được"},
 {id:"N14",item:"T1-S-018",ans:"我和朋友们去看电影。",exp:"soft",note:"mục avoid chưa xác minh coi 朋友们 là sai, nhưng có thể chấp nhận; không được báo sai chỉ vì trùng avoid"},
 // ---- Bổ sung: gần giống nhưng sai ----
 {id:"N15",item:"T1-S-004",ans:"今天天气很冷。",exp:"bad",types:["meaning","vocabulary"],note:"nóng thành lạnh"},
 {id:"N16",item:"T1-S-012",ans:"我家在学校前面。",exp:"bad",types:["meaning"],note:"phía sau thành phía trước"},
 {id:"N17",item:"T1-S-013",ans:"请你说你的名字。",exp:"bad",types:["vocabulary","meaning"],note:"viết (写) thành nói (说)"},
 {id:"N18",item:"T1-S-008",ans:"他有一个女朋友。",exp:"bad",types:["vocabulary","meaning"],note:"con gái thành bạn gái"},
 {id:"N19",item:"T1-S-015",ans:"明天会不会下雨吗？",exp:"bad",types:["grammar"],note:"thừa 吗 sau câu hỏi chính phản"},
 {id:"N20",item:"T1-S-006",ans:"你们几点睡觉？",exp:"bad",types:["meaning","vocabulary"],note:"đề hỏi một người (bạn), viết số nhiều (các bạn)"},
 {id:"N21",item:"T1-S-020",ans:"他昨天不来学校。",exp:"bad",types:["grammar","vocabulary","meaning"],note:"phủ định quá khứ phải dùng 没"},
 {id:"N22",item:"T1-S-007",ans:"那个杯子多少钱吗？",exp:"bad",types:["grammar"],note:"câu hỏi có 多少 không dùng 吗"}
];
