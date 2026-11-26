/* 30 ca kiểm thử chất lượng nhận xét AI (dịch câu HSK 1).
   exp: "ok" = bản dịch đúng, AI không nên bắt lỗi; "bad" = có lỗi, AI không nên bảo là đúng.
   types: các loại lỗi mà AI được xem là gọi đúng (chấp nhận nhiều loại vì có lỗi nằm giữa hai loại).
   LƯU Ý: nhãn do Claude soạn, chưa được giáo viên/người bản ngữ xác nhận. Hãy xem lại trước khi tin kết quả. */
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
 {id:"K16",item:"T1-S-017",ans:"我爸爸在学校工作。",exp:"bad",types:["meaning","name","vocabulary"],note:"đề là bệnh viện, viết trường học"},
 {id:"K17",item:"T1-S-019",ans:"对不起，我今天不想去。",exp:"bad",types:["meaning","vocabulary"],note:"'không đi được' thành 'không muốn đi'"},
 {id:"K18",item:"T1-S-020",ans:"他今天没有来学校。",exp:"bad",types:["meaning","name","vocabulary"],note:"đề là hôm qua, viết hôm nay"},
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
 {id:"K30",item:"T1-S-003",ans:"这是我爸爸。",exp:"bad",types:["meaning","vocabulary"],note:"mẹ thành bố"}
];
