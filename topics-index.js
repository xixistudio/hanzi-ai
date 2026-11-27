/* Danh sách các bộ từ vựng theo chủ đề (tải từng bộ khi bấm vào).
   Thêm chủ đề mới: (1) tạo file topic-<mã>.js có dạng
     window.TOPIC_DATA=window.TOPIC_DATA||{}; window.TOPIC_DATA['<mã>']={meta,topics:[{id,order,name_vi,name_zh,desc_vi,count}],sources:{},entries:[{id,word,pinyin,pos,meaning_vi,english,example_zh,example_vi,topic,hsk:{label},sources:[],note,reviewed}]};
   (2) thêm một dòng vào danh sách dưới đây. Không cần sửa index.html. */
window.TOPIC_PACKS=[
{id:'crypto',tag:'Crypto',name_vi:'Crypto – Blockchain – Web3',name_zh:'加密货币·区块链·Web3',desc_vi:'Thuật ngữ tiếng Trung về tiền mã hóa, sàn giao dịch, trading, KOL, BD và cộng đồng.',file:'topic-crypto.js',count:321,subtopics:6}
];
