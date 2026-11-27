/* Hanzi AI – Luyện dịch theo chủ đề: danh mục chủ đề + chỉ mục + ánh xạ 26 bài HSK 1 cũ. Gộp từ tr-topics.js, tr-index.js, tr-legacy-hsk1.js. */
/* Hanzi AI – Luyện dịch: danh mục 13 chủ đề chính và chủ đề phụ.
   File độc lập, không thay đổi hsk-t-hsk1.js. topic_id/subtopic_id dùng chung cho mọi gói tr-<topic>-<nhóm cấp>.js */
window.TR_TOPICS={
 "schema":1,
 "levels":{"bands":[{"id":"b12","name":"HSK 1–2","lv":[1,2]},{"id":"b34","name":"HSK 3–4","lv":[3,4]},{"id":"b56","name":"HSK 5–6","lv":[5,6]},{"id":"b79","name":"HSK 7–9","lv":["7-9"]}],
  "note":"hsk30_level tính theo từ vựng HSK 3.0 (đại cương 11/2025). Kho từ gộp cấp 7–9 nên bài cấp cao ghi \"7-9\", chưa tách 7/8/9."},
 "topics":[
  {"id":"daily","name":"Đời sống hằng ngày","sub":[
   {"id":"daily.intro","name":"Chào hỏi, giới thiệu"},{"id":"daily.time","name":"Thời gian, lịch sinh hoạt"},{"id":"daily.food","name":"Ăn uống"},{"id":"daily.shopping","name":"Mua sắm"},{"id":"daily.home","name":"Nhà cửa, việc nhà"},{"id":"daily.weather","name":"Thời tiết"},{"id":"daily.leisure","name":"Giải trí, sở thích"},{"id":"daily.phone","name":"Điện thoại, mạng, dịch vụ"}]},
  {"id":"family","name":"Gia đình và các mối quan hệ","sub":[
   {"id":"family.members","name":"Thành viên gia đình"},{"id":"family.parenting","name":"Nuôi dạy con"},{"id":"family.friends","name":"Bạn bè"},{"id":"family.love","name":"Tình yêu, hôn nhân"},{"id":"family.neighbors","name":"Hàng xóm, cộng đồng"},{"id":"family.conflict","name":"Mâu thuẫn và hòa giải"},{"id":"family.elderly","name":"Chăm sóc người già"}]},
  {"id":"edu","name":"Học tập và giáo dục","sub":[
   {"id":"edu.school","name":"Trường lớp"},{"id":"edu.language","name":"Học ngoại ngữ"},{"id":"edu.exam","name":"Thi cử"},{"id":"edu.university","name":"Đại học, du học"},{"id":"edu.methods","name":"Phương pháp học"},{"id":"edu.policy","name":"Giáo dục và xã hội"}]},
  {"id":"career","name":"Công việc và sự nghiệp","sub":[
   {"id":"career.jobs","name":"Nghề nghiệp"},{"id":"career.choice","name":"Chọn nghề, chuyển việc"},{"id":"career.skills","name":"Kỹ năng, phát triển bản thân"},{"id":"career.balance","name":"Cân bằng công việc – cuộc sống"},{"id":"career.startup","name":"Khởi nghiệp, làm tự do"},{"id":"career.future","name":"Tương lai việc làm"}]},
  {"id":"office","name":"Công sở và phỏng vấn","sub":[
   {"id":"office.interview","name":"Phỏng vấn xin việc"},{"id":"office.cv","name":"Hồ sơ, thư xin việc"},{"id":"office.meeting","name":"Họp hành"},{"id":"office.email","name":"Email, báo cáo"},{"id":"office.colleagues","name":"Đồng nghiệp, cấp trên"},{"id":"office.hr","name":"Lương, phúc lợi, nghỉ phép"},{"id":"office.etiquette","name":"Văn hóa công sở"}]},
  {"id":"travel","name":"Du lịch và giao thông","sub":[
   {"id":"travel.directions","name":"Hỏi đường"},{"id":"travel.transport","name":"Phương tiện giao thông"},{"id":"travel.hotel","name":"Khách sạn, đặt phòng"},{"id":"travel.airport","name":"Sân bay, thủ tục"},{"id":"travel.sightseeing","name":"Tham quan"},{"id":"travel.traffic","name":"Giao thông đô thị"},{"id":"travel.tourism","name":"Du lịch bền vững"}]},
  {"id":"health","name":"Sức khỏe","sub":[
   {"id":"health.symptoms","name":"Triệu chứng, đi khám"},{"id":"health.hospital","name":"Bệnh viện, nhà thuốc"},{"id":"health.lifestyle","name":"Lối sống lành mạnh"},{"id":"health.exercise","name":"Thể thao, vận động"},{"id":"health.mental","name":"Sức khỏe tinh thần"},{"id":"health.public","name":"Y tế cộng đồng"}]},
  {"id":"scitech","name":"Khoa học và công nghệ","sub":[
   {"id":"scitech.devices","name":"Thiết bị, ứng dụng"},{"id":"scitech.internet","name":"Internet, mạng xã hội"},{"id":"scitech.ai","name":"Trí tuệ nhân tạo"},{"id":"scitech.science","name":"Khám phá khoa học"},{"id":"scitech.space","name":"Vũ trụ"},{"id":"scitech.security","name":"An toàn thông tin"}]},
  {"id":"society","name":"Xã hội","sub":[
   {"id":"society.city","name":"Đô thị, dân cư"},{"id":"society.aging","name":"Già hóa dân số"},{"id":"society.volunteer","name":"Tình nguyện, từ thiện"},{"id":"society.media","name":"Truyền thông, tin tức"},{"id":"society.law","name":"Pháp luật, quy định"},{"id":"society.equality","name":"Bình đẳng, phúc lợi xã hội"}]},
  {"id":"nature","name":"Thiên nhiên và môi trường","sub":[
   {"id":"nature.seasons","name":"Mùa, cảnh vật"},{"id":"nature.animals","name":"Động vật, thực vật"},{"id":"nature.pollution","name":"Ô nhiễm"},{"id":"nature.climate","name":"Biến đổi khí hậu"},{"id":"nature.protection","name":"Bảo vệ môi trường"},{"id":"nature.disaster","name":"Thiên tai"}]},
  {"id":"culture","name":"Văn hóa và văn học","sub":[
   {"id":"culture.festivals","name":"Lễ tết"},{"id":"culture.customs","name":"Phong tục, tập quán"},{"id":"culture.arts","name":"Nghệ thuật, âm nhạc, điện ảnh"},{"id":"culture.reading","name":"Đọc sách"},{"id":"culture.literature","name":"Văn học"},{"id":"culture.idioms","name":"Thành ngữ, tục ngữ"},{"id":"culture.exchange","name":"Giao lưu văn hóa"}]},
  {"id":"economy","name":"Kinh tế","sub":[
   {"id":"economy.money","name":"Tiền bạc, chi tiêu"},{"id":"economy.banking","name":"Ngân hàng, thanh toán"},{"id":"economy.market","name":"Thị trường, giá cả"},{"id":"economy.business","name":"Doanh nghiệp, kinh doanh"},{"id":"economy.trade","name":"Thương mại quốc tế"},{"id":"economy.macro","name":"Kinh tế vĩ mô"},{"id":"economy.ecommerce","name":"Thương mại điện tử"}]},
  {"id":"web3","name":"Web3, Blockchain và Crypto","sub":[
   {"id":"web3.basics","name":"Blockchain cơ bản"},{"id":"web3.bitcoin","name":"Bitcoin và Altcoin"},{"id":"web3.wallet","name":"Ví và bảo mật"},{"id":"web3.trading","name":"Trading: Spot và Futures"},{"id":"web3.exchange","name":"Sàn giao dịch"},{"id":"web3.defi","name":"DeFi, Staking"},{"id":"web3.nft","name":"NFT"},{"id":"web3.tokenomics","name":"Tokenomics, Airdrop"},{"id":"web3.community","name":"Cộng đồng, KOL, Marketing"},{"id":"web3.regulation","name":"Rủi ro và pháp lý"}]}
 ]
};

/* Chỉ mục nhẹ của kho Luyện dịch theo chủ đề: dùng để hiện danh mục, bộ lọc, đếm tiến độ mà không cần tải nội dung. Tạo tự động. */
window.TR_INDEX={"schema":1,"generated":"2026-11-27","packs":{"career-b12":{"file":"tr/tr-career-b12.js","topic_id":"career","band":"b12","count":6,"items":[{"id":"career-b12-S-01","subtopic_id":"career.jobs","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"career-b12-S-02","subtopic_id":"career.balance","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"career-b12-S-03","subtopic_id":"career.choice","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"career-b12-S-04","subtopic_id":"career.jobs","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"career-b12-P-01","subtopic_id":"career.jobs","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Công việc mới","quality_status":"auto_checked"},{"id":"career-b12-D-01","subtopic_id":"career.jobs","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":1,"title":"Bạn làm nghề gì?","quality_status":"auto_checked"}]},"career-b34":{"file":"tr/tr-career-b34.js","topic_id":"career","band":"b34","count":6,"items":[{"id":"career-b34-S-05","subtopic_id":"career.skills","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"career-b34-S-06","subtopic_id":"career.choice","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"career-b34-S-07","subtopic_id":"career.balance","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"career-b34-S-08","subtopic_id":"career.startup","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"career-b34-P-02","subtopic_id":"career.choice","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Đổi nghề tuổi ba mươi","quality_status":"auto_checked"},{"id":"career-b34-D-02","subtopic_id":"career.skills","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Hỏi kinh nghiệm anh đi trước","quality_status":"auto_checked"}]},"career-b56":{"file":"tr/tr-career-b56.js","topic_id":"career","band":"b56","count":6,"items":[{"id":"career-b56-S-09","subtopic_id":"career.future","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"career-b56-S-10","subtopic_id":"career.balance","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"career-b56-S-11","subtopic_id":"career.startup","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"career-b56-S-12","subtopic_id":"career.skills","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"career-b56-P-03","subtopic_id":"career.balance","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Làm việc tại nhà","quality_status":"auto_checked"},{"id":"career-b56-D-03","subtopic_id":"career.choice","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Hai lời mời làm việc","quality_status":"auto_checked"}]},"career-b79":{"file":"tr/tr-career-b79.js","topic_id":"career","band":"b79","count":6,"items":[{"id":"career-b79-S-13","subtopic_id":"career.future","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"career-b79-S-14","subtopic_id":"career.skills","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"career-b79-S-15","subtopic_id":"career.balance","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"career-b79-S-16","subtopic_id":"career.startup","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"career-b79-P-04","subtopic_id":"career.future","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Việc làm linh hoạt","quality_status":"auto_checked"},{"id":"career-b79-D-04","subtopic_id":"career.choice","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Chuyển ngành giữa chừng","quality_status":"auto_checked"}]},"culture-b12":{"file":"tr/tr-culture-b12.js","topic_id":"culture","band":"b12","count":6,"items":[{"id":"culture-b12-S-01","subtopic_id":"culture.festivals","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"culture-b12-S-02","subtopic_id":"culture.arts","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"culture-b12-S-03","subtopic_id":"culture.reading","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"culture-b12-S-04","subtopic_id":"culture.customs","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"culture-b12-P-01","subtopic_id":"culture.festivals","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Sinh nhật mẹ","quality_status":"auto_checked"},{"id":"culture-b12-D-01","subtopic_id":"culture.arts","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Rủ đi xem phim","quality_status":"auto_checked"}]},"culture-b34":{"file":"tr/tr-culture-b34.js","topic_id":"culture","band":"b34","count":6,"items":[{"id":"culture-b34-S-05","subtopic_id":"culture.festivals","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"culture-b34-S-06","subtopic_id":"culture.idioms","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"culture-b34-S-07","subtopic_id":"culture.arts","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"culture-b34-S-08","subtopic_id":"culture.exchange","exercise_type":"sentence","direction":"zh-vi","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"culture-b34-P-02","subtopic_id":"culture.customs","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Bao lì xì","quality_status":"auto_checked"},{"id":"culture-b34-D-02","subtopic_id":"culture.reading","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Ở hiệu sách","quality_status":"auto_checked"}]},"culture-b56":{"file":"tr/tr-culture-b56.js","topic_id":"culture","band":"b56","count":6,"items":[{"id":"culture-b56-S-09","subtopic_id":"culture.literature","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"culture-b56-S-10","subtopic_id":"culture.exchange","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"culture-b56-S-11","subtopic_id":"culture.idioms","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"culture-b56-S-12","subtopic_id":"culture.arts","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"culture-b56-P-03","subtopic_id":"culture.reading","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Sách giấy hay sách điện tử?","quality_status":"auto_checked"},{"id":"culture-b56-D-03","subtopic_id":"culture.exchange","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Đám cưới Việt – Trung","quality_status":"auto_checked_with_warnings"}]},"culture-b79":{"file":"tr/tr-culture-b79.js","topic_id":"culture","band":"b79","count":6,"items":[{"id":"culture-b79-S-13","subtopic_id":"culture.literature","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"culture-b79-S-14","subtopic_id":"culture.exchange","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"culture-b79-S-15","subtopic_id":"culture.idioms","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked_with_warnings"},{"id":"culture-b79-S-16","subtopic_id":"culture.arts","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"culture-b79-P-04","subtopic_id":"culture.literature","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Thơ Đường","quality_status":"auto_checked"},{"id":"culture-b79-D-04","subtopic_id":"culture.exchange","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Phỏng vấn một dịch giả","quality_status":"auto_checked"}]},"daily-b12":{"file":"tr/tr-daily-b12.js","topic_id":"daily","band":"b12","count":6,"items":[{"id":"daily-b12-S-01","subtopic_id":"daily.food","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"daily-b12-S-02","subtopic_id":"daily.weather","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"daily-b12-S-03","subtopic_id":"daily.shopping","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"daily-b12-S-04","subtopic_id":"daily.time","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"daily-b12-P-01","subtopic_id":"daily.home","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Phòng của tôi","quality_status":"auto_checked"},{"id":"daily-b12-D-01","subtopic_id":"daily.food","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Gọi món","quality_status":"auto_checked"}]},"daily-b34":{"file":"tr/tr-daily-b34.js","topic_id":"daily","band":"b34","count":6,"items":[{"id":"daily-b34-S-05","subtopic_id":"daily.phone","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"daily-b34-S-06","subtopic_id":"daily.home","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"daily-b34-S-07","subtopic_id":"daily.weather","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"daily-b34-S-08","subtopic_id":"daily.leisure","exercise_type":"sentence","direction":"zh-vi","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"daily-b34-P-02","subtopic_id":"daily.shopping","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Mua sắm trên mạng","quality_status":"auto_checked"},{"id":"daily-b34-D-02","subtopic_id":"daily.phone","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Báo hỏng mạng","quality_status":"auto_checked"}]},"daily-b56":{"file":"tr/tr-daily-b56.js","topic_id":"daily","band":"b56","count":6,"items":[{"id":"daily-b56-S-09","subtopic_id":"daily.food","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"daily-b56-S-10","subtopic_id":"daily.time","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"daily-b56-S-11","subtopic_id":"daily.leisure","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"daily-b56-S-12","subtopic_id":"daily.phone","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"daily-b56-P-03","subtopic_id":"daily.home","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":5,"title":"Lối sống tối giản","quality_status":"auto_checked"},{"id":"daily-b56-D-03","subtopic_id":"daily.shopping","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Trả hàng lỗi","quality_status":"auto_checked"}]},"daily-b79":{"file":"tr/tr-daily-b79.js","topic_id":"daily","band":"b79","count":6,"items":[{"id":"daily-b79-S-13","subtopic_id":"daily.time","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"daily-b79-S-14","subtopic_id":"daily.food","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"daily-b79-S-15","subtopic_id":"daily.home","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"daily-b79-S-16","subtopic_id":"daily.leisure","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"daily-b79-P-04","subtopic_id":"daily.phone","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Điện thoại và sự chú ý","quality_status":"auto_checked"},{"id":"daily-b79-D-04","subtopic_id":"daily.home","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Thương lượng giá thuê nhà","quality_status":"auto_checked"}]},"economy-b12":{"file":"tr/tr-economy-b12.js","topic_id":"economy","band":"b12","count":6,"items":[{"id":"economy-b12-S-01","subtopic_id":"economy.market","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"economy-b12-S-02","subtopic_id":"economy.money","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"economy-b12-S-03","subtopic_id":"economy.market","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"economy-b12-S-04","subtopic_id":"economy.money","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"economy-b12-P-01","subtopic_id":"economy.money","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Đi chợ với mẹ","quality_status":"auto_checked"},{"id":"economy-b12-D-01","subtopic_id":"economy.market","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Mua táo","quality_status":"auto_checked"}]},"economy-b34":{"file":"tr/tr-economy-b34.js","topic_id":"economy","band":"b34","count":6,"items":[{"id":"economy-b34-S-05","subtopic_id":"economy.banking","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"economy-b34-S-06","subtopic_id":"economy.ecommerce","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"economy-b34-S-07","subtopic_id":"economy.money","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"economy-b34-S-08","subtopic_id":"economy.market","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"economy-b34-P-02","subtopic_id":"economy.money","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Tiền tiêu vặt","quality_status":"auto_checked"},{"id":"economy-b34-D-02","subtopic_id":"economy.banking","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Chuyển tiền về Việt Nam","quality_status":"auto_checked"}]},"economy-b56":{"file":"tr/tr-economy-b56.js","topic_id":"economy","band":"b56","count":6,"items":[{"id":"economy-b56-S-09","subtopic_id":"economy.macro","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"economy-b56-S-10","subtopic_id":"economy.business","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"economy-b56-S-11","subtopic_id":"economy.ecommerce","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"economy-b56-S-12","subtopic_id":"economy.banking","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"economy-b56-P-03","subtopic_id":"economy.business","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Doanh nghiệp vừa và nhỏ","quality_status":"auto_checked"},{"id":"economy-b56-D-03","subtopic_id":"economy.banking","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Mua nhà trả góp","quality_status":"auto_checked"}]},"economy-b79":{"file":"tr/tr-economy-b79.js","topic_id":"economy","band":"b79","count":6,"items":[{"id":"economy-b79-S-13","subtopic_id":"economy.macro","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"economy-b79-S-14","subtopic_id":"economy.trade","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"economy-b79-S-15","subtopic_id":"economy.business","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"economy-b79-S-16","subtopic_id":"economy.macro","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"economy-b79-P-04","subtopic_id":"economy.trade","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Thương mại Việt – Trung","quality_status":"auto_checked_with_warnings"},{"id":"economy-b79-D-04","subtopic_id":"economy.macro","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Ngân hàng trung ương hạ lãi suất","quality_status":"auto_checked"}]},"edu-b12":{"file":"tr/tr-edu-b12.js","topic_id":"edu","band":"b12","count":6,"items":[{"id":"edu-b12-S-01","subtopic_id":"edu.school","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"edu-b12-S-02","subtopic_id":"edu.language","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"edu-b12-S-03","subtopic_id":"edu.school","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"edu-b12-S-04","subtopic_id":"edu.exam","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"edu-b12-P-01","subtopic_id":"edu.language","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Tôi học tiếng Trung","quality_status":"auto_checked"},{"id":"edu-b12-D-01","subtopic_id":"edu.school","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":1,"title":"Đi học ngày thứ bảy","quality_status":"auto_checked"}]},"edu-b34":{"file":"tr/tr-edu-b34.js","topic_id":"edu","band":"b34","count":6,"items":[{"id":"edu-b34-S-05","subtopic_id":"edu.exam","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"edu-b34-S-06","subtopic_id":"edu.methods","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"edu-b34-S-07","subtopic_id":"edu.university","exercise_type":"sentence","direction":"zh-vi","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"edu-b34-S-08","subtopic_id":"edu.methods","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"edu-b34-P-02","subtopic_id":"edu.university","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Lần đầu xa nhà","quality_status":"auto_checked"},{"id":"edu-b34-D-02","subtopic_id":"edu.exam","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Hỏi kết quả thi","quality_status":"auto_checked"}]},"edu-b56":{"file":"tr/tr-edu-b56.js","topic_id":"edu","band":"b56","count":6,"items":[{"id":"edu-b56-S-09","subtopic_id":"edu.policy","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"edu-b56-S-10","subtopic_id":"edu.methods","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"edu-b56-S-11","subtopic_id":"edu.exam","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"edu-b56-S-12","subtopic_id":"edu.language","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"edu-b56-P-03","subtopic_id":"edu.methods","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Học trực tuyến","quality_status":"auto_checked"},{"id":"edu-b56-D-03","subtopic_id":"edu.university","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":5,"title":"Chọn ngành","quality_status":"auto_checked"}]},"edu-b79":{"file":"tr/tr-edu-b79.js","topic_id":"edu","band":"b79","count":6,"items":[{"id":"edu-b79-S-13","subtopic_id":"edu.policy","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"edu-b79-S-14","subtopic_id":"edu.methods","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"edu-b79-S-15","subtopic_id":"edu.policy","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"edu-b79-S-16","subtopic_id":"edu.university","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"edu-b79-P-04","subtopic_id":"edu.policy","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Trí tuệ nhân tạo và giáo dục","quality_status":"auto_checked"},{"id":"edu-b79-D-04","subtopic_id":"edu.exam","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Bài luận do AI viết","quality_status":"auto_checked"}]},"family-b12":{"file":"tr/tr-family-b12.js","topic_id":"family","band":"b12","count":6,"items":[{"id":"family-b12-S-01","subtopic_id":"family.members","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"family-b12-S-02","subtopic_id":"family.friends","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"family-b12-S-03","subtopic_id":"family.members","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"family-b12-S-04","subtopic_id":"family.friends","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"family-b12-P-01","subtopic_id":"family.friends","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Bạn thân của tôi","quality_status":"auto_checked"},{"id":"family-b12-D-01","subtopic_id":"family.members","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":1,"title":"Hỏi về gia đình","quality_status":"auto_checked"}]},"family-b34":{"file":"tr/tr-family-b34.js","topic_id":"family","band":"b34","count":6,"items":[{"id":"family-b34-S-05","subtopic_id":"family.parenting","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"family-b34-S-06","subtopic_id":"family.love","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"family-b34-S-07","subtopic_id":"family.neighbors","exercise_type":"sentence","direction":"zh-vi","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"family-b34-S-08","subtopic_id":"family.elderly","exercise_type":"sentence","direction":"zh-vi","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"family-b34-P-02","subtopic_id":"family.conflict","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Hiểu bố mẹ hơn","quality_status":"auto_checked"},{"id":"family-b34-D-02","subtopic_id":"family.neighbors","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Nhờ hàng xóm trông mèo","quality_status":"auto_checked"}]},"family-b56":{"file":"tr/tr-family-b56.js","topic_id":"family","band":"b56","count":6,"items":[{"id":"family-b56-S-09","subtopic_id":"family.parenting","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"family-b56-S-10","subtopic_id":"family.love","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"family-b56-S-11","subtopic_id":"family.elderly","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"family-b56-S-12","subtopic_id":"family.friends","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"family-b56-P-03","subtopic_id":"family.parenting","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Áp lực học thêm","quality_status":"auto_checked"},{"id":"family-b56-D-03","subtopic_id":"family.conflict","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Tết về nhà ai?","quality_status":"auto_checked"}]},"family-b79":{"file":"tr/tr-family-b79.js","topic_id":"family","band":"b79","count":6,"items":[{"id":"family-b79-S-13","subtopic_id":"family.elderly","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"family-b79-S-14","subtopic_id":"family.conflict","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"family-b79-S-15","subtopic_id":"family.love","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"family-b79-S-16","subtopic_id":"family.friends","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"family-b79-P-04","subtopic_id":"family.parenting","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Cha mẹ là người thầy đầu tiên","quality_status":"auto_checked"},{"id":"family-b79-D-04","subtopic_id":"family.elderly","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Có nên đưa mẹ vào viện dưỡng lão?","quality_status":"auto_checked"}]},"health-b12":{"file":"tr/tr-health-b12.js","topic_id":"health","band":"b12","count":6,"items":[{"id":"health-b12-S-01","subtopic_id":"health.symptoms","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"health-b12-S-02","subtopic_id":"health.exercise","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"health-b12-S-03","subtopic_id":"health.hospital","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"health-b12-S-04","subtopic_id":"health.lifestyle","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"health-b12-P-01","subtopic_id":"health.symptoms","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Bị ốm","quality_status":"auto_checked"},{"id":"health-b12-D-01","subtopic_id":"health.hospital","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Đi khám bệnh","quality_status":"auto_checked"}]},"health-b34":{"file":"tr/tr-health-b34.js","topic_id":"health","band":"b34","count":6,"items":[{"id":"health-b34-S-05","subtopic_id":"health.lifestyle","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"health-b34-S-06","subtopic_id":"health.hospital","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"health-b34-S-07","subtopic_id":"health.exercise","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"health-b34-S-08","subtopic_id":"health.mental","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"health-b34-P-02","subtopic_id":"health.lifestyle","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Uống nước đúng cách","quality_status":"auto_checked"},{"id":"health-b34-D-02","subtopic_id":"health.hospital","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Ở hiệu thuốc","quality_status":"auto_checked"}]},"health-b56":{"file":"tr/tr-health-b56.js","topic_id":"health","band":"b56","count":6,"items":[{"id":"health-b56-S-09","subtopic_id":"health.public","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"health-b56-S-10","subtopic_id":"health.mental","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"health-b56-S-11","subtopic_id":"health.lifestyle","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"health-b56-S-12","subtopic_id":"health.exercise","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"health-b56-P-03","subtopic_id":"health.lifestyle","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":5,"title":"Thói quen thức khuya","quality_status":"auto_checked"},{"id":"health-b56-D-03","subtopic_id":"health.symptoms","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Kết quả khám sức khỏe","quality_status":"auto_checked"}]},"health-b79":{"file":"tr/tr-health-b79.js","topic_id":"health","band":"b79","count":6,"items":[{"id":"health-b79-S-13","subtopic_id":"health.public","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"health-b79-S-14","subtopic_id":"health.mental","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"health-b79-S-15","subtopic_id":"health.lifestyle","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"health-b79-S-16","subtopic_id":"health.public","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"health-b79-P-04","subtopic_id":"health.public","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Y tế từ xa","quality_status":"auto_checked"},{"id":"health-b79-D-04","subtopic_id":"health.public","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Có nên đánh thuế đồ uống có đường?","quality_status":"auto_checked"}]},"nature-b12":{"file":"tr/tr-nature-b12.js","topic_id":"nature","band":"b12","count":6,"items":[{"id":"nature-b12-S-01","subtopic_id":"nature.seasons","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"nature-b12-S-02","subtopic_id":"nature.animals","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"nature-b12-S-03","subtopic_id":"nature.seasons","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"nature-b12-S-04","subtopic_id":"nature.seasons","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"nature-b12-P-01","subtopic_id":"nature.seasons","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Thời tiết ở quê tôi","quality_status":"auto_checked"},{"id":"nature-b12-D-01","subtopic_id":"nature.animals","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Chú chó Tiểu Bạch","quality_status":"auto_checked"}]},"nature-b34":{"file":"tr/tr-nature-b34.js","topic_id":"nature","band":"b34","count":6,"items":[{"id":"nature-b34-S-05","subtopic_id":"nature.pollution","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"nature-b34-S-06","subtopic_id":"nature.protection","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"nature-b34-S-07","subtopic_id":"nature.animals","exercise_type":"sentence","direction":"zh-vi","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"nature-b34-S-08","subtopic_id":"nature.disaster","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"nature-b34-P-02","subtopic_id":"nature.protection","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Phân loại rác","quality_status":"auto_checked"},{"id":"nature-b34-D-02","subtopic_id":"nature.disaster","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Bão sắp đến","quality_status":"auto_checked"}]},"nature-b56":{"file":"tr/tr-nature-b56.js","topic_id":"nature","band":"b56","count":6,"items":[{"id":"nature-b56-S-09","subtopic_id":"nature.climate","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"nature-b56-S-10","subtopic_id":"nature.protection","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"nature-b56-S-11","subtopic_id":"nature.animals","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"nature-b56-S-12","subtopic_id":"nature.pollution","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"nature-b56-P-03","subtopic_id":"nature.climate","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Năng lượng tái tạo","quality_status":"auto_checked"},{"id":"nature-b56-D-03","subtopic_id":"nature.protection","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Chuyến đi biển xanh","quality_status":"auto_checked"}]},"nature-b79":{"file":"tr/tr-nature-b79.js","topic_id":"nature","band":"b79","count":6,"items":[{"id":"nature-b79-S-13","subtopic_id":"nature.climate","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"nature-b79-S-14","subtopic_id":"nature.protection","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"nature-b79-S-15","subtopic_id":"nature.disaster","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"nature-b79-S-16","subtopic_id":"nature.animals","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"nature-b79-P-04","subtopic_id":"nature.pollution","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Vi nhựa","quality_status":"auto_checked"},{"id":"nature-b79-D-04","subtopic_id":"nature.protection","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Dự án du lịch sinh thái","quality_status":"auto_checked"}]},"office-b12":{"file":"tr/tr-office-b12.js","topic_id":"office","band":"b12","count":6,"items":[{"id":"office-b12-S-01","subtopic_id":"office.etiquette","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"office-b12-S-02","subtopic_id":"office.etiquette","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"office-b12-S-03","subtopic_id":"office.colleagues","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"office-b12-S-04","subtopic_id":"office.hr","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"office-b12-P-01","subtopic_id":"office.etiquette","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Ngày đầu đi làm","quality_status":"auto_checked"},{"id":"office-b12-D-01","subtopic_id":"office.interview","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Hẹn phỏng vấn","quality_status":"auto_checked"}]},"office-b34":{"file":"tr/tr-office-b34.js","topic_id":"office","band":"b34","count":6,"items":[{"id":"office-b34-S-05","subtopic_id":"office.interview","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"office-b34-S-06","subtopic_id":"office.meeting","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"office-b34-S-07","subtopic_id":"office.email","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"office-b34-S-08","subtopic_id":"office.colleagues","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"office-b34-P-02","subtopic_id":"office.email","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Viết email công việc","quality_status":"auto_checked"},{"id":"office-b34-D-02","subtopic_id":"office.interview","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Câu hỏi phỏng vấn","quality_status":"auto_checked"}]},"office-b56":{"file":"tr/tr-office-b56.js","topic_id":"office","band":"b56","count":6,"items":[{"id":"office-b56-S-09","subtopic_id":"office.email","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"office-b56-S-10","subtopic_id":"office.hr","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"office-b56-S-11","subtopic_id":"office.meeting","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"office-b56-S-12","subtopic_id":"office.etiquette","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"office-b56-P-03","subtopic_id":"office.colleagues","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Bất đồng với đồng nghiệp","quality_status":"auto_checked"},{"id":"office-b56-D-03","subtopic_id":"office.hr","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Đề nghị tăng lương","quality_status":"auto_checked"}]},"office-b79":{"file":"tr/tr-office-b79.js","topic_id":"office","band":"b79","count":6,"items":[{"id":"office-b79-S-13","subtopic_id":"office.interview","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"office-b79-S-14","subtopic_id":"office.email","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"office-b79-S-15","subtopic_id":"office.meeting","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"office-b79-S-16","subtopic_id":"office.etiquette","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"office-b79-P-04","subtopic_id":"office.etiquette","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Nghệ thuật từ chối nơi công sở","quality_status":"auto_checked"},{"id":"office-b79-D-04","subtopic_id":"office.meeting","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Đàm phán giá với đối tác","quality_status":"auto_checked"}]},"scitech-b12":{"file":"tr/tr-scitech-b12.js","topic_id":"scitech","band":"b12","count":6,"items":[{"id":"scitech-b12-S-01","subtopic_id":"scitech.devices","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b12-S-02","subtopic_id":"scitech.internet","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b12-S-03","subtopic_id":"scitech.devices","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b12-S-04","subtopic_id":"scitech.devices","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b12-P-01","subtopic_id":"scitech.devices","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Điện thoại của bà","quality_status":"auto_checked"},{"id":"scitech-b12-D-01","subtopic_id":"scitech.devices","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":1,"title":"Điện thoại mới","quality_status":"auto_checked"}]},"scitech-b34":{"file":"tr/tr-scitech-b34.js","topic_id":"scitech","band":"b34","count":6,"items":[{"id":"scitech-b34-S-05","subtopic_id":"scitech.devices","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b34-S-06","subtopic_id":"scitech.security","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b34-S-07","subtopic_id":"scitech.science","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b34-S-08","subtopic_id":"scitech.ai","exercise_type":"sentence","direction":"zh-vi","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b34-P-02","subtopic_id":"scitech.internet","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":3,"title":"Cuộc sống gắn với điện thoại","quality_status":"auto_checked"},{"id":"scitech-b34-D-02","subtopic_id":"scitech.devices","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Mua máy tính xách tay","quality_status":"auto_checked"}]},"scitech-b56":{"file":"tr/tr-scitech-b56.js","topic_id":"scitech","band":"b56","count":6,"items":[{"id":"scitech-b56-S-09","subtopic_id":"scitech.ai","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b56-S-10","subtopic_id":"scitech.security","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b56-S-11","subtopic_id":"scitech.devices","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b56-S-12","subtopic_id":"scitech.internet","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"scitech-b56-P-03","subtopic_id":"scitech.devices","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Nhà thông minh","quality_status":"auto_checked"},{"id":"scitech-b56-D-03","subtopic_id":"scitech.security","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Cuộc gọi lừa đảo","quality_status":"auto_checked"}]},"scitech-b79":{"file":"tr/tr-scitech-b79.js","topic_id":"scitech","band":"b79","count":6,"items":[{"id":"scitech-b79-S-13","subtopic_id":"scitech.ai","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"scitech-b79-S-14","subtopic_id":"scitech.security","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"scitech-b79-S-15","subtopic_id":"scitech.science","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"scitech-b79-S-16","subtopic_id":"scitech.internet","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked_with_warnings"},{"id":"scitech-b79-P-04","subtopic_id":"scitech.space","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Khám phá vũ trụ có đáng không?","quality_status":"auto_checked"},{"id":"scitech-b79-D-04","subtopic_id":"scitech.ai","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"AI và việc làm","quality_status":"auto_checked"}]},"society-b12":{"file":"tr/tr-society-b12.js","topic_id":"society","band":"b12","count":6,"items":[{"id":"society-b12-S-01","subtopic_id":"society.city","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"society-b12-S-02","subtopic_id":"society.volunteer","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"society-b12-S-03","subtopic_id":"society.media","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"society-b12-S-04","subtopic_id":"society.law","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"society-b12-P-01","subtopic_id":"society.volunteer","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Người bạn tốt bụng","quality_status":"auto_checked"},{"id":"society-b12-D-01","subtopic_id":"society.city","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Chỗ ở mới","quality_status":"auto_checked"}]},"society-b34":{"file":"tr/tr-society-b34.js","topic_id":"society","band":"b34","count":6,"items":[{"id":"society-b34-S-05","subtopic_id":"society.aging","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"society-b34-S-06","subtopic_id":"society.law","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"society-b34-S-07","subtopic_id":"society.volunteer","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"society-b34-S-08","subtopic_id":"society.media","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"society-b34-P-02","subtopic_id":"society.city","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Ở lại thành phố lớn hay về quê?","quality_status":"auto_checked"},{"id":"society-b34-D-02","subtopic_id":"society.law","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Làm hộ chiếu","quality_status":"auto_checked"}]},"society-b56":{"file":"tr/tr-society-b56.js","topic_id":"society","band":"b56","count":6,"items":[{"id":"society-b56-S-09","subtopic_id":"society.equality","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"society-b56-S-10","subtopic_id":"society.media","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"society-b56-S-11","subtopic_id":"society.aging","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"society-b56-S-12","subtopic_id":"society.law","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"society-b56-P-03","subtopic_id":"society.volunteer","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Ngân hàng thời gian","quality_status":"auto_checked"},{"id":"society-b56-D-03","subtopic_id":"society.media","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Phỏng vấn trên phố về tin giả","quality_status":"auto_checked"}]},"society-b79":{"file":"tr/tr-society-b79.js","topic_id":"society","band":"b79","count":6,"items":[{"id":"society-b79-S-13","subtopic_id":"society.city","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"society-b79-S-14","subtopic_id":"society.equality","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"society-b79-S-15","subtopic_id":"society.media","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"society-b79-S-16","subtopic_id":"society.volunteer","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"society-b79-P-04","subtopic_id":"society.aging","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Già hóa dân số","quality_status":"auto_checked"},{"id":"society-b79-D-04","subtopic_id":"society.law","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Lắp camera ở khu dân cư","quality_status":"auto_checked"}]},"travel-b12":{"file":"tr/tr-travel-b12.js","topic_id":"travel","band":"b12","count":6,"items":[{"id":"travel-b12-S-01","subtopic_id":"travel.directions","exercise_type":"sentence","direction":"vi-zh","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"travel-b12-S-02","subtopic_id":"travel.transport","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"travel-b12-S-03","subtopic_id":"travel.transport","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"travel-b12-S-04","subtopic_id":"travel.hotel","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"travel-b12-P-01","subtopic_id":"travel.sightseeing","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":1,"title":"Chuyến đi Hà Nội","quality_status":"auto_checked"},{"id":"travel-b12-D-01","subtopic_id":"travel.directions","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Hỏi đường đến bệnh viện","quality_status":"auto_checked"}]},"travel-b34":{"file":"tr/tr-travel-b34.js","topic_id":"travel","band":"b34","count":6,"items":[{"id":"travel-b34-S-05","subtopic_id":"travel.airport","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"travel-b34-S-06","subtopic_id":"travel.hotel","exercise_type":"sentence","direction":"vi-zh","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"travel-b34-S-07","subtopic_id":"travel.traffic","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"travel-b34-S-08","subtopic_id":"travel.sightseeing","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"travel-b34-P-02","subtopic_id":"travel.airport","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Ở sân bay","quality_status":"auto_checked"},{"id":"travel-b34-D-02","subtopic_id":"travel.hotel","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Nhận phòng khách sạn","quality_status":"auto_checked"}]},"travel-b56":{"file":"tr/tr-travel-b56.js","topic_id":"travel","band":"b56","count":6,"items":[{"id":"travel-b56-S-09","subtopic_id":"travel.transport","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"travel-b56-S-10","subtopic_id":"travel.sightseeing","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"travel-b56-S-11","subtopic_id":"travel.tourism","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"travel-b56-S-12","subtopic_id":"travel.airport","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"travel-b56-P-03","subtopic_id":"travel.traffic","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":5,"title":"Xe đạp công cộng","quality_status":"auto_checked"},{"id":"travel-b56-D-03","subtopic_id":"travel.airport","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Lỡ chuyến bay","quality_status":"auto_checked"}]},"travel-b79":{"file":"tr/tr-travel-b79.js","topic_id":"travel","band":"b79","count":6,"items":[{"id":"travel-b79-S-13","subtopic_id":"travel.tourism","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"travel-b79-S-14","subtopic_id":"travel.traffic","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"travel-b79-S-15","subtopic_id":"travel.sightseeing","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"travel-b79-S-16","subtopic_id":"travel.transport","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"travel-b79-P-04","subtopic_id":"travel.tourism","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Du lịch “check-in”","quality_status":"auto_checked_with_warnings"},{"id":"travel-b79-D-04","subtopic_id":"travel.tourism","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Phỏng vấn về quản lý du lịch","quality_status":"auto_checked"}]},"web3-b12":{"file":"tr/tr-web3-b12.js","topic_id":"web3","band":"b12","count":6,"items":[{"id":"web3-b12-S-01","subtopic_id":"web3.bitcoin","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"web3-b12-S-02","subtopic_id":"web3.wallet","exercise_type":"sentence","direction":"vi-zh","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"web3-b12-S-03","subtopic_id":"web3.trading","exercise_type":"sentence","direction":"zh-vi","hsk30_level":1,"title":null,"quality_status":"auto_checked"},{"id":"web3-b12-S-04","subtopic_id":"web3.exchange","exercise_type":"sentence","direction":"zh-vi","hsk30_level":2,"title":null,"quality_status":"auto_checked"},{"id":"web3-b12-P-01","subtopic_id":"web3.basics","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":2,"title":"Lần đầu nghe về Bitcoin","quality_status":"auto_checked"},{"id":"web3-b12-D-01","subtopic_id":"web3.wallet","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":2,"title":"Ví trong điện thoại","quality_status":"auto_checked"}]},"web3-b34":{"file":"tr/tr-web3-b34.js","topic_id":"web3","band":"b34","count":6,"items":[{"id":"web3-b34-S-05","subtopic_id":"web3.wallet","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"web3-b34-S-06","subtopic_id":"web3.exchange","exercise_type":"sentence","direction":"vi-zh","hsk30_level":3,"title":null,"quality_status":"auto_checked"},{"id":"web3-b34-S-07","subtopic_id":"web3.trading","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"web3-b34-S-08","subtopic_id":"web3.community","exercise_type":"sentence","direction":"zh-vi","hsk30_level":4,"title":null,"quality_status":"auto_checked"},{"id":"web3-b34-P-02","subtopic_id":"web3.basics","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":4,"title":"Blockchain giống như cuốn sổ chung","quality_status":"auto_checked"},{"id":"web3-b34-D-02","subtopic_id":"web3.trading","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":4,"title":"Có nên chơi hợp đồng tương lai?","quality_status":"auto_checked"}]},"web3-b56":{"file":"tr/tr-web3-b56.js","topic_id":"web3","band":"b56","count":6,"items":[{"id":"web3-b56-S-09","subtopic_id":"web3.defi","exercise_type":"sentence","direction":"vi-zh","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"web3-b56-S-10","subtopic_id":"web3.nft","exercise_type":"sentence","direction":"vi-zh","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"web3-b56-S-11","subtopic_id":"web3.tokenomics","exercise_type":"sentence","direction":"zh-vi","hsk30_level":5,"title":null,"quality_status":"auto_checked"},{"id":"web3-b56-S-12","subtopic_id":"web3.wallet","exercise_type":"sentence","direction":"zh-vi","hsk30_level":6,"title":null,"quality_status":"auto_checked"},{"id":"web3-b56-P-03","subtopic_id":"web3.tokenomics","exercise_type":"paragraph","direction":"vi-zh","hsk30_level":6,"title":"Airdrop không phải tiền từ trên trời rơi xuống","quality_status":"auto_checked"},{"id":"web3-b56-D-03","subtopic_id":"web3.regulation","exercise_type":"dialogue","direction":"zh-vi","hsk30_level":6,"title":"Lời mời \"x10 tài khoản\"","quality_status":"auto_checked"}]},"web3-b79":{"file":"tr/tr-web3-b79.js","topic_id":"web3","band":"b79","count":6,"items":[{"id":"web3-b79-S-13","subtopic_id":"web3.regulation","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"web3-b79-S-14","subtopic_id":"web3.tokenomics","exercise_type":"sentence","direction":"vi-zh","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"web3-b79-S-15","subtopic_id":"web3.defi","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"web3-b79-S-16","subtopic_id":"web3.community","exercise_type":"sentence","direction":"zh-vi","hsk30_level":"7-9","title":null,"quality_status":"auto_checked"},{"id":"web3-b79-P-04","subtopic_id":"web3.basics","exercise_type":"paragraph","direction":"zh-vi","hsk30_level":"7-9","title":"Phi tập trung và cái giá phải trả","quality_status":"auto_checked"},{"id":"web3-b79-D-04","subtopic_id":"web3.community","exercise_type":"dialogue","direction":"vi-zh","hsk30_level":"7-9","title":"Phỏng vấn vị trí Community Manager","quality_status":"auto_checked"}]}},"topics":{"daily":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"family":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"edu":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"career":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"office":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"travel":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"health":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"scitech":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"society":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"nature":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"culture":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"economy":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}},"web3":{"units":24,"bands":{"b12":6,"b34":6,"b56":6,"b79":6}}}};

/* Ánh xạ 26 bài Luyện dịch HSK 1 hiện có (hsk-t-hsk1.js, KHÔNG sửa file gốc) sang 13 chủ đề.
   Khóa = id bài cũ; tiến độ (hanziai.translation.v1) vẫn dùng đúng id này. hsk30_level tính lại theo từ vựng HSK 3.0; hsk20_level giữ theo dữ liệu gốc (HSK 2.0 cấp 1). */
window.TR_LEGACY={
 "T1-S-001": {
  "topic_id": "daily",
  "subtopic_id": "daily.intro",
  "old_topic": "Giới thiệu bản thân",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-002": {
  "topic_id": "daily",
  "subtopic_id": "daily.intro",
  "old_topic": "Giới thiệu bản thân",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-003": {
  "topic_id": "family",
  "subtopic_id": "family.members",
  "old_topic": "Gia đình",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-004": {
  "topic_id": "daily",
  "subtopic_id": "daily.weather",
  "old_topic": "Thời tiết",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-005": {
  "topic_id": "daily",
  "subtopic_id": "daily.time",
  "old_topic": "Thời gian",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-006": {
  "topic_id": "daily",
  "subtopic_id": "daily.time",
  "old_topic": "Thời gian",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-007": {
  "topic_id": "daily",
  "subtopic_id": "daily.shopping",
  "old_topic": "Mua sắm",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-008": {
  "topic_id": "family",
  "subtopic_id": "family.members",
  "old_topic": "Gia đình",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-009": {
  "topic_id": "daily",
  "subtopic_id": "daily.food",
  "old_topic": "Ăn uống",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-010": {
  "topic_id": "daily",
  "subtopic_id": "daily.shopping",
  "old_topic": "Mua sắm",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-011": {
  "topic_id": "travel",
  "subtopic_id": "travel.directions",
  "old_topic": "Địa điểm",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-012": {
  "topic_id": "travel",
  "subtopic_id": "travel.directions",
  "old_topic": "Địa điểm",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 2,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-013": {
  "topic_id": "edu",
  "subtopic_id": "edu.school",
  "old_topic": "Học tập",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-014": {
  "topic_id": "daily",
  "subtopic_id": "daily.food",
  "old_topic": "Ăn uống",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 2,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-015": {
  "topic_id": "daily",
  "subtopic_id": "daily.weather",
  "old_topic": "Thời tiết",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-016": {
  "topic_id": "edu",
  "subtopic_id": "edu.school",
  "old_topic": "Học tập",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-017": {
  "topic_id": "career",
  "subtopic_id": "career.jobs",
  "old_topic": "Công việc",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-018": {
  "topic_id": "daily",
  "subtopic_id": "daily.leisure",
  "old_topic": "Giải trí",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-019": {
  "topic_id": "daily",
  "subtopic_id": "daily.intro",
  "old_topic": "Giao tiếp",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-S-020": {
  "topic_id": "daily",
  "subtopic_id": "daily.time",
  "old_topic": "Sinh hoạt",
  "exercise_type": "sentence",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-PC-01": {
  "topic_id": "daily",
  "subtopic_id": "daily.intro",
  "old_topic": "Giới thiệu bản thân",
  "exercise_type": "paragraph",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-PC-02": {
  "topic_id": "family",
  "subtopic_id": "family.members",
  "old_topic": "Gia đình",
  "exercise_type": "paragraph",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-PC-03": {
  "topic_id": "daily",
  "subtopic_id": "daily.time",
  "old_topic": "Sinh hoạt hằng ngày",
  "exercise_type": "paragraph",
  "direction": "vi-zh",
  "hsk30_level": 2,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-DC-01": {
  "topic_id": "daily",
  "subtopic_id": "daily.intro",
  "old_topic": "Giao tiếp",
  "exercise_type": "dialogue",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-DC-02": {
  "topic_id": "daily",
  "subtopic_id": "daily.shopping",
  "old_topic": "Mua sắm",
  "exercise_type": "dialogue",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 },
 "T1-DC-03": {
  "topic_id": "daily",
  "subtopic_id": "daily.phone",
  "old_topic": "Giao tiếp qua điện thoại",
  "exercise_type": "dialogue",
  "direction": "vi-zh",
  "hsk30_level": 1,
  "hsk30_basis": "vocab",
  "hsk20_level": 1,
  "source": "original",
  "created_by": "ai",
  "reviewed": false
 }
};
