/* Ngân hàng dịch Việt→Trung HSK 1 (HSK 2.0). 26 bài: 20 câu + 3 đoạn + 3 hội thoại.
   TẤT CẢ reviewed:false, source:"original". Chưa ai duyệt tiếng Trung. */
window.HSK_T={
 "schema": 1,
 "std": "HSK2.0",
 "level": 1,
 "sentences": [
  {
   "id": "T1-S-001",
   "lv": 1,
   "topic": "Giới thiệu bản thân",
   "vi": "Tôi tên là Trương Vĩ.",
   "zh": "我叫张伟。",
   "py": "Wǒ jiào Zhāng Wěi.",
   "back_vi": "Tôi tên là Trương Vĩ.",
   "vocab": [
    {
     "w": "叫",
     "py": "jiào",
     "vi": "gọi là, tên là",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "我叫 + tên (giới thiệu tên)",
     "gs": "proposed"
    }
   ],
   "note": "Giới thiệu tên: 我叫 + tên. Họ đứng trước tên (张 + 伟), viết liền, không có dấu cách như trong tiếng Việt.",
   "alt": [
    {
     "zh": "我是张伟。",
     "py": "Wǒ shì Zhāng Wěi.",
     "note": "Dùng 是 để giới thiệu mình là ai; đúng nhưng nhấn mạnh danh tính hơn là tên gọi."
    }
   ],
   "key_points": [
    {
     "vi": "tên là",
     "zh_ok": [
      "叫",
      "是"
     ]
    },
    {
     "vi": "Trương Vĩ",
     "zh_ok": [
      "张伟"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我是叫张伟。",
     "why": "Không nói 是叫; chọn 叫 hoặc 是."
    }
   ],
   "over": [],
   "names": [
    "张伟"
   ],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-002",
   "lv": 1,
   "topic": "Giới thiệu bản thân",
   "vi": "Cô ấy là người Việt Nam.",
   "zh": "她是越南人。",
   "py": "Tā shì Yuènán rén.",
   "back_vi": "Cô ấy là người Việt Nam.",
   "vocab": [
    {
     "w": "她",
     "py": "tā",
     "vi": "cô ấy",
     "lv": 1
    },
    {
     "w": "人",
     "py": "rén",
     "vi": "người",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "是字句 (câu chữ 是)",
     "gs": "existing",
     "gid": "1-0"
    }
   ],
   "note": "Cấu trúc 是字句: chủ ngữ + 是 + quốc tịch + 人. Tên nước đặt trước 人 để chỉ người nước đó (越南人 = người Việt Nam).",
   "alt": [],
   "key_points": [
    {
     "vi": "cô ấy",
     "zh_ok": [
      "她"
     ]
    },
    {
     "vi": "người Việt Nam",
     "zh_ok": [
      "越南人"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "她是人越南。",
     "why": "Trật tự ngược; trong tiếng Trung tên nước đứng trước 人."
    }
   ],
   "over": [
    {
     "w": "越",
     "lv": 3,
     "reason": "name",
     "why": "Chữ đầu của tên nước Việt Nam; cần cho người học Việt Nam"
    },
    {
     "w": "南",
     "lv": 3,
     "reason": "name",
     "why": "Chữ sau của tên nước Việt Nam"
    }
   ],
   "names": [],
   "needs_check": [
    "Tên nước 越南 nằm ngoài từ vựng HSK 1 (越 và 南 đều HSK 3 theo kho); pinyin Yuènán chưa kiểm được qua kho"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-003",
   "lv": 1,
   "topic": "Gia đình",
   "vi": "Đây là mẹ tôi.",
   "zh": "这是我妈妈。",
   "py": "Zhè shì wǒ māma.",
   "back_vi": "Đây là mẹ tôi.",
   "vocab": [
    {
     "w": "这",
     "py": "zhè",
     "vi": "này, đây",
     "lv": 1
    },
    {
     "w": "妈妈",
     "py": "māma",
     "vi": "mẹ",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "是字句 (câu chữ 是)",
     "gs": "existing",
     "gid": "1-0"
    },
    {
     "name": "Trợ từ 的 chỉ sở hữu",
     "gs": "existing",
     "gid": "1-3"
    }
   ],
   "note": "这是 + danh từ để giới thiệu người hoặc vật. Với người thân thiết như 妈妈 thường bỏ 的 (我妈妈).",
   "alt": [
    {
     "zh": "这是我的妈妈。",
     "py": "Zhè shì wǒ de māma.",
     "note": "Thêm 的 không sai ngữ pháp, nhưng khẩu ngữ thường bỏ."
    }
   ],
   "key_points": [
    {
     "vi": "đây là",
     "zh_ok": [
      "这是"
     ]
    },
    {
     "vi": "mẹ tôi",
     "zh_ok": [
      "我妈妈",
      "我的妈妈"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "这是妈妈我。",
     "why": "Sai trật tự; chủ sở hữu 我 đứng trước 妈妈."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "Mức độ tự nhiên của phương án có 的 (alt) cần người bản ngữ xác nhận"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-004",
   "lv": 1,
   "topic": "Thời tiết",
   "vi": "Hôm nay thời tiết rất nóng.",
   "zh": "今天天气很热。",
   "py": "Jīntiān tiānqì hěn rè.",
   "back_vi": "Hôm nay thời tiết rất nóng.",
   "vocab": [
    {
     "w": "今天",
     "py": "jīntiān",
     "vi": "hôm nay",
     "lv": 1
    },
    {
     "w": "天气",
     "py": "tiānqì",
     "vi": "thời tiết",
     "lv": 1
    },
    {
     "w": "很",
     "py": "hěn",
     "vi": "rất",
     "lv": 1
    },
    {
     "w": "热",
     "py": "rè",
     "vi": "nóng",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "Tính từ với 很 (không dùng 是)",
     "gs": "proposed"
    }
   ],
   "note": "Tính từ làm vị ngữ thường có 很 đứng trước, không dùng 是. 很 ở đây nhẹ nghĩa, giúp câu tròn.",
   "alt": [],
   "key_points": [
    {
     "vi": "hôm nay",
     "zh_ok": [
      "今天"
     ]
    },
    {
     "vi": "rất nóng",
     "zh_ok": [
      "很热"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "今天天气是热。",
     "why": "Không dùng 是 trước tính từ."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "Dạng không có 很 (今天天气热) có được chấp nhận hay không cần người bản ngữ quyết định"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-005",
   "lv": 1,
   "topic": "Thời gian",
   "vi": "Hôm nay là thứ Sáu.",
   "zh": "今天星期五。",
   "py": "Jīntiān xīngqī wǔ.",
   "back_vi": "Hôm nay là thứ Sáu.",
   "vocab": [
    {
     "w": "今天",
     "py": "jīntiān",
     "vi": "hôm nay",
     "lv": 1
    },
    {
     "w": "星期",
     "py": "xīngqī",
     "vi": "tuần, thứ",
     "lv": 1
    },
    {
     "w": "五",
     "py": "wǔ",
     "vi": "năm",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "Nói thứ trong tuần: 星期 + số",
     "gs": "proposed"
    }
   ],
   "note": "星期 + số cho thứ 2 đến thứ 7: 星期一 = thứ Hai, 星期五 = thứ Sáu. Cẩn thận: số trong tiếng Trung kém tiếng Việt 1 (thứ Sáu = 五, không phải 六). Câu danh từ này không cần 是.",
   "alt": [
    {
     "zh": "今天是星期五。",
     "py": "Jīntiān shì xīngqī wǔ.",
     "note": "Thêm 是 vẫn đúng."
    }
   ],
   "key_points": [
    {
     "vi": "hôm nay",
     "zh_ok": [
      "今天"
     ]
    },
    {
     "vi": "thứ Sáu",
     "zh_ok": [
      "星期五"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "今天星期六。",
     "why": "Nhầm số: 星期六 là thứ Bảy."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-006",
   "lv": 1,
   "topic": "Thời gian",
   "vi": "Mấy giờ bạn đi ngủ?",
   "zh": "你几点睡觉？",
   "py": "Nǐ jǐ diǎn shuìjiào?",
   "back_vi": "Mấy giờ bạn đi ngủ?",
   "vocab": [
    {
     "w": "几",
     "py": "jǐ",
     "vi": "mấy",
     "lv": 1
    },
    {
     "w": "点",
     "py": "diǎn",
     "vi": "giờ (đúng)",
     "lv": 1
    },
    {
     "w": "睡觉",
     "py": "shuìjiào",
     "vi": "đi ngủ",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "Hỏi và nói giờ: 几点 / số + 点",
     "gs": "proposed"
    }
   ],
   "note": "Hỏi giờ làm gì: chủ ngữ + 几点 + động từ. 几点 đứng TRƯỚC động từ (khác tiếng Việt: 'mấy giờ' có thể đặt cuối câu).",
   "alt": [
    {
     "zh": "你几点去睡觉？",
     "py": "Nǐ jǐ diǎn qù shuìjiào?",
     "note": "Thêm 去 vẫn đúng, nhấn mạnh việc đi nằm."
    }
   ],
   "key_points": [
    {
     "vi": "mấy giờ",
     "zh_ok": [
      "几点"
     ]
    },
    {
     "vi": "đi ngủ",
     "zh_ok": [
      "睡觉"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "你睡觉几点？",
     "why": "Từ chỉ thời gian phải đứng trước động từ."
    },
    {
     "zh": "你什么点睡觉？",
     "why": "Hỏi giờ dùng 几点, không dùng 什么点."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-007",
   "lv": 1,
   "topic": "Mua sắm",
   "vi": "Cái cốc kia bao nhiêu tiền?",
   "zh": "那个杯子多少钱？",
   "py": "Nàge bēizi duōshao qián?",
   "back_vi": "Cái cốc kia bao nhiêu tiền?",
   "vocab": [
    {
     "w": "那",
     "py": "nà",
     "vi": "kia",
     "lv": 1
    },
    {
     "w": "个",
     "py": "gè",
     "vi": "(lượng từ)",
     "lv": 1
    },
    {
     "w": "杯子",
     "py": "bēizi",
     "vi": "cái cốc",
     "lv": 1
    },
    {
     "w": "多少",
     "py": "duōshao",
     "vi": "bao nhiêu",
     "lv": 1
    },
    {
     "w": "钱",
     "py": "qián",
     "vi": "tiền",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "Hỏi giá và số lượng: 多少 / 几",
     "gs": "proposed"
    },
    {
     "name": "Số từ + lượng từ + danh từ",
     "gs": "existing",
     "gid": "1-4"
    }
   ],
   "note": "Hỏi giá: (vật) + 多少钱？ 那个杯子 = cái cốc kia (那 + 个 + danh từ). 多少 dùng khi số có thể lớn; 几 dành cho số nhỏ.",
   "alt": [],
   "key_points": [
    {
     "vi": "cái cốc kia",
     "zh_ok": [
      "那个杯子"
     ]
    },
    {
     "vi": "bao nhiêu tiền",
     "zh_ok": [
      "多少钱"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "那个杯子多钱？",
     "why": "Thiếu 少; phải là 多少."
    },
    {
     "zh": "那个杯子几钱？",
     "why": "Hỏi giá không dùng 几."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-008",
   "lv": 1,
   "topic": "Gia đình",
   "vi": "Anh ấy có một cô con gái.",
   "zh": "他有一个女儿。",
   "py": "Tā yǒu yí ge nǚ'ér.",
   "back_vi": "Anh ấy có một cô con gái.",
   "vocab": [
    {
     "w": "有",
     "py": "yǒu",
     "vi": "có",
     "lv": 1
    },
    {
     "w": "女儿",
     "py": "nǚ'ér",
     "vi": "con gái",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "有 và 没有",
     "gs": "existing",
     "gid": "1-2"
    },
    {
     "name": "Số từ + lượng từ + danh từ",
     "gs": "existing",
     "gid": "1-4"
    }
   ],
   "note": "有 + số + lượng từ + danh từ. Lượng từ thông dụng là 个; 一 + 个 đọc là yí ge (一 đổi thành thanh 2 trước thanh 4).",
   "alt": [
    {
     "zh": "他有个女儿。",
     "py": "Tā yǒu ge nǚ'ér.",
     "note": "Khẩu ngữ hay bỏ 一 sau 有 khi nói về 'một'."
    }
   ],
   "key_points": [
    {
     "vi": "anh ấy",
     "zh_ok": [
      "他"
     ]
    },
    {
     "vi": "có",
     "zh_ok": [
      "有"
     ]
    },
    {
     "vi": "một cô con gái",
     "zh_ok": [
      "一个女儿",
      "个女儿"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "他有女儿一个。",
     "why": "Sai trật tự số lượng; số + lượng từ đứng trước danh từ."
    },
    {
     "zh": "他是有一个女儿。",
     "why": "Không dùng 是 trước 有."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "Phương án bỏ 一 (alt) cần người bản ngữ xác nhận mức tự nhiên"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-009",
   "lv": 1,
   "topic": "Ăn uống",
   "vi": "Tôi không uống trà, tôi uống nước.",
   "zh": "我不喝茶，我喝水。",
   "py": "Wǒ bù hē chá, wǒ hē shuǐ.",
   "back_vi": "Tôi không uống trà, tôi uống nước.",
   "vocab": [
    {
     "w": "喝",
     "py": "hē",
     "vi": "uống",
     "lv": 1
    },
    {
     "w": "茶",
     "py": "chá",
     "vi": "trà",
     "lv": 1
    },
    {
     "w": "水",
     "py": "shuǐ",
     "vi": "nước",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "不 phủ định động từ",
     "gs": "proposed"
    }
   ],
   "note": "不 đứng trước động từ để phủ định: 不喝 = không uống. Hai vế đối lập, mỗi vế nói đủ chủ ngữ cho rõ.",
   "alt": [
    {
     "zh": "我不喝茶，喝水。",
     "py": "Wǒ bù hē chá, hē shuǐ.",
     "note": "Bỏ chủ ngữ lặp ở vế sau; rất tự nhiên trong khẩu ngữ."
    }
   ],
   "key_points": [
    {
     "vi": "không uống trà",
     "zh_ok": [
      "不喝茶"
     ]
    },
    {
     "vi": "uống nước",
     "zh_ok": [
      "喝水"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我没喝茶，我喝水。",
     "why": "没 phủ định việc đã xảy ra, ở đây nói thói quen/ý muốn nên dùng 不."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-010",
   "lv": 1,
   "topic": "Mua sắm",
   "vi": "Tôi muốn mua một ít hoa quả.",
   "zh": "我想买一些水果。",
   "py": "Wǒ xiǎng mǎi yìxiē shuǐguǒ.",
   "back_vi": "Tôi muốn mua một ít hoa quả.",
   "vocab": [
    {
     "w": "想",
     "py": "xiǎng",
     "vi": "muốn",
     "lv": 1
    },
    {
     "w": "买",
     "py": "mǎi",
     "vi": "mua",
     "lv": 1
    },
    {
     "w": "些",
     "py": "xiē",
     "vi": "một ít",
     "lv": 1
    },
    {
     "w": "水果",
     "py": "shuǐguǒ",
     "vi": "hoa quả",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "想 + động từ (muốn làm gì)",
     "gs": "proposed"
    }
   ],
   "note": "想 + động từ = muốn làm gì. 一些 = một ít (không đếm chính xác), đứng trước danh từ, không cần thêm lượng từ 个.",
   "alt": [
    {
     "zh": "我想买点水果。",
     "py": "Wǒ xiǎng mǎi diǎn shuǐguǒ.",
     "note": "点 = 一点, khẩu ngữ; nghĩa tương đương 'một ít'."
    }
   ],
   "key_points": [
    {
     "vi": "muốn mua",
     "zh_ok": [
      "想买"
     ]
    },
    {
     "vi": "một ít hoa quả",
     "zh_ok": [
      "一些水果",
      "点水果",
      "些水果"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我想买一些个水果。",
     "why": "Không dùng 个 sau 一些."
    },
    {
     "zh": "我爱买水果。",
     "why": "爱 là 'yêu/thích', không phải 'muốn'."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "Cách dùng 点 (alt) thay cho 一点 cần người bản ngữ xác nhận"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-011",
   "lv": 1,
   "topic": "Địa điểm",
   "vi": "Sách của bạn ở trên bàn.",
   "zh": "你的书在桌子上。",
   "py": "Nǐ de shū zài zhuōzi shàng.",
   "back_vi": "Sách của bạn ở trên bàn.",
   "vocab": [
    {
     "w": "书",
     "py": "shū",
     "vi": "sách",
     "lv": 1
    },
    {
     "w": "在",
     "py": "zài",
     "vi": "ở",
     "lv": 1
    },
    {
     "w": "桌子",
     "py": "zhuōzi",
     "vi": "cái bàn",
     "lv": 1
    },
    {
     "w": "上",
     "py": "shàng",
     "vi": "trên",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "Trợ từ 的 chỉ sở hữu",
     "gs": "existing",
     "gid": "1-3"
    },
    {
     "name": "在 chỉ nơi chốn (在 + địa điểm)",
     "gs": "proposed"
    },
    {
     "name": "Từ chỉ phương vị (上 / 前面 / 后面)",
     "gs": "proposed"
    }
   ],
   "note": "Vật + 在 + nơi chốn. 桌子上 = 'trên bàn': danh từ + 上 (上 đọc nhẹ). Tiếng Việt 'ở' dịch là 在, không dùng 是.",
   "alt": [],
   "key_points": [
    {
     "vi": "sách của bạn",
     "zh_ok": [
      "你的书"
     ]
    },
    {
     "vi": "ở trên bàn",
     "zh_ok": [
      "在桌子上"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "你的书是桌子上。",
     "why": "Chỉ vị trí dùng 在, không dùng 是."
    },
    {
     "zh": "你的书有桌子上。",
     "why": "有 chỉ sự tồn tại, không thay 在 ở đây."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-012",
   "lv": 1,
   "topic": "Địa điểm",
   "vi": "Nhà tôi ở phía sau trường học.",
   "zh": "我家在学校后面。",
   "py": "Wǒ jiā zài xuéxiào hòumian.",
   "back_vi": "Nhà tôi ở phía sau trường học.",
   "vocab": [
    {
     "w": "家",
     "py": "jiā",
     "vi": "nhà",
     "lv": 1
    },
    {
     "w": "在",
     "py": "zài",
     "vi": "ở",
     "lv": 1
    },
    {
     "w": "学校",
     "py": "xuéxiào",
     "vi": "trường học",
     "lv": 1
    },
    {
     "w": "后面",
     "py": "hòumian",
     "vi": "phía sau",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "在 chỉ nơi chốn (在 + địa điểm)",
     "gs": "proposed"
    },
    {
     "name": "Từ chỉ phương vị (上 / 前面 / 后面)",
     "gs": "proposed"
    }
   ],
   "note": "Chủ ngữ + 在 + danh từ + từ chỉ phương vị (后面). 我家 = nhà tôi (bỏ 的 vì 家 gắn với người nói).",
   "alt": [
    {
     "zh": "我家在学校的后面。",
     "py": "Wǒ jiā zài xuéxiào de hòumian.",
     "note": "Thêm 的 vẫn đúng."
    }
   ],
   "key_points": [
    {
     "vi": "nhà tôi",
     "zh_ok": [
      "我家"
     ]
    },
    {
     "vi": "ở",
     "zh_ok": [
      "在"
     ]
    },
    {
     "vi": "phía sau trường",
     "zh_ok": [
      "学校后面",
      "学校的后面",
      "学校后边"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我家是学校后面。",
     "why": "Chỉ vị trí dùng 在 chứ không dùng 是."
    },
    {
     "zh": "我家在后面学校。",
     "why": "Phương vị đứng sau danh từ địa điểm."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-013",
   "lv": 1,
   "topic": "Học tập",
   "vi": "Xin bạn viết tên của bạn.",
   "zh": "请你写你的名字。",
   "py": "Qǐng nǐ xiě nǐ de míngzi.",
   "back_vi": "Xin bạn viết tên của bạn.",
   "vocab": [
    {
     "w": "请",
     "py": "qǐng",
     "vi": "mời, xin",
     "lv": 1
    },
    {
     "w": "写",
     "py": "xiě",
     "vi": "viết",
     "lv": 1
    },
    {
     "w": "名字",
     "py": "míngzi",
     "vi": "tên",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "请 + động từ (mời, nhờ)",
     "gs": "proposed"
    },
    {
     "name": "Trợ từ 的 chỉ sở hữu",
     "gs": "existing",
     "gid": "1-3"
    }
   ],
   "note": "请 đứng đầu câu: 请 + (người) + động từ + tân ngữ. 你的名字 = tên của bạn.",
   "alt": [],
   "key_points": [
    {
     "vi": "xin / mời",
     "zh_ok": [
      "请"
     ]
    },
    {
     "vi": "viết",
     "zh_ok": [
      "写"
     ]
    },
    {
     "vi": "tên của bạn",
     "zh_ok": [
      "你的名字"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "你请写你的名字。",
     "why": "请 phải đứng đầu câu, không đứng sau 你 theo cách này."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "Mức độ sai của 你请写… (avoid) cần người bản ngữ xác nhận"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-014",
   "lv": 1,
   "topic": "Ăn uống",
   "vi": "Chúng ta đến nhà hàng ăn cơm.",
   "zh": "我们去饭馆吃米饭。",
   "py": "Wǒmen qù fànguǎn chī mǐfàn.",
   "back_vi": "Chúng ta đến nhà hàng ăn cơm.",
   "vocab": [
    {
     "w": "我们",
     "py": "wǒmen",
     "vi": "chúng tôi / chúng ta",
     "lv": 1
    },
    {
     "w": "去",
     "py": "qù",
     "vi": "đi",
     "lv": 1
    },
    {
     "w": "饭馆",
     "py": "fànguǎn",
     "vi": "nhà hàng",
     "lv": 1
    },
    {
     "w": "吃",
     "py": "chī",
     "vi": "ăn",
     "lv": 1
    },
    {
     "w": "米饭",
     "py": "mǐfàn",
     "vi": "cơm",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "去 / 在 + địa điểm + động từ (hai động từ liền nhau)",
     "gs": "proposed"
    }
   ],
   "note": "Hai hành động nối tiếp: 去 + nơi chốn + động từ (去饭馆 rồi 吃米饭). 我们 gồm cả 'chúng tôi' và 'chúng ta'.",
   "alt": [],
   "key_points": [
    {
     "vi": "chúng ta",
     "zh_ok": [
      "我们"
     ]
    },
    {
     "vi": "đến nhà hàng",
     "zh_ok": [
      "去饭馆"
     ]
    },
    {
     "vi": "ăn cơm",
     "zh_ok": [
      "吃米饭",
      "吃饭"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我们去饭馆在吃米饭。",
     "why": "Không chèn 在 giữa hai động từ."
    },
    {
     "zh": "我们到饭馆吃米饭去。",
     "why": "去 đặt trước, không để cuối câu."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "吃饭 là cách nói rất thường gặp cho 'ăn cơm' nhưng không có 饭 đơn trong kho HSK 1; cần người bản ngữ cho biết có nên nhận làm đáp án phụ"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-015",
   "lv": 1,
   "topic": "Thời tiết",
   "vi": "Ngày mai trời có mưa không?",
   "zh": "明天会下雨吗？",
   "py": "Míngtiān huì xiàyǔ ma?",
   "back_vi": "Ngày mai trời có mưa không?",
   "vocab": [
    {
     "w": "明天",
     "py": "míngtiān",
     "vi": "ngày mai",
     "lv": 1
    },
    {
     "w": "会",
     "py": "huì",
     "vi": "sẽ",
     "lv": 1
    },
    {
     "w": "下雨",
     "py": "xiàyǔ",
     "vi": "mưa",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "会 chỉ dự đoán (sẽ)",
     "gs": "proposed"
    },
    {
     "name": "Câu hỏi với 吗 và 呢",
     "gs": "existing",
     "gid": "1-1"
    }
   ],
   "note": "会 + động từ chỉ dự đoán 'sẽ'. 下雨 là một cụm 'rơi mưa', không cần chủ ngữ riêng. 吗 ở cuối để hỏi có/không.",
   "alt": [
    {
     "zh": "明天下雨吗？",
     "py": "Míngtiān xiàyǔ ma?",
     "note": "Bỏ 会 vẫn hỏi được, nhưng bớt ý dự đoán."
    }
   ],
   "key_points": [
    {
     "vi": "ngày mai",
     "zh_ok": [
      "明天"
     ]
    },
    {
     "vi": "mưa",
     "zh_ok": [
      "下雨"
     ]
    },
    {
     "vi": "hỏi có/không",
     "zh_ok": [
      "吗",
      "会不会下雨"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "明天会不会下雨吗？",
     "why": "Dạng 会不会 đã là câu hỏi, không thêm 吗."
    },
    {
     "zh": "明天是下雨吗？",
     "why": "Không dùng 是 để dự báo mưa theo cách này."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-016",
   "lv": 1,
   "topic": "Học tập",
   "vi": "Tôi học tiếng Trung ở nhà.",
   "zh": "我在家学习汉语。",
   "py": "Wǒ zài jiā xuéxí Hànyǔ.",
   "back_vi": "Tôi học tiếng Trung ở nhà.",
   "vocab": [
    {
     "w": "在",
     "py": "zài",
     "vi": "ở",
     "lv": 1
    },
    {
     "w": "家",
     "py": "jiā",
     "vi": "nhà",
     "lv": 1
    },
    {
     "w": "学习",
     "py": "xuéxí",
     "vi": "học",
     "lv": 1
    },
    {
     "w": "汉语",
     "py": "Hànyǔ",
     "vi": "tiếng Hán",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "在 chỉ nơi chốn (在 + địa điểm)",
     "gs": "proposed"
    }
   ],
   "note": "在 + nơi chốn đứng trước động từ: 在家学习. 汉语 = tiếng Hán (tiếng Trung phổ thông), cũng dịch là 中文.",
   "alt": [],
   "key_points": [
    {
     "vi": "ở nhà",
     "zh_ok": [
      "在家"
     ]
    },
    {
     "vi": "học",
     "zh_ok": [
      "学习",
      "学"
     ]
    },
    {
     "vi": "tiếng Trung",
     "zh_ok": [
      "汉语",
      "中文"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我学习汉语在家。",
     "why": "Địa điểm phải đứng trước động từ."
    },
    {
     "zh": "我是在家学习汉语。",
     "why": "Cấu trúc 是…的 khác sắc thái; không cần ở đây."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "Đáp án phụ 我在家学汉语 (dùng 学 đơn) — chữ 学 không đứng riêng trong kho HSK 1; cần người bản ngữ cho biết có nên nhận"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-017",
   "lv": 1,
   "topic": "Công việc",
   "vi": "Bố tôi làm việc ở bệnh viện.",
   "zh": "我爸爸在医院工作。",
   "py": "Wǒ bàba zài yīyuàn gōngzuò.",
   "back_vi": "Bố tôi làm việc ở bệnh viện.",
   "vocab": [
    {
     "w": "爸爸",
     "py": "bàba",
     "vi": "bố",
     "lv": 1
    },
    {
     "w": "在",
     "py": "zài",
     "vi": "ở",
     "lv": 1
    },
    {
     "w": "医院",
     "py": "yīyuàn",
     "vi": "bệnh viện",
     "lv": 1
    },
    {
     "w": "工作",
     "py": "gōngzuò",
     "vi": "làm việc",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "在 chỉ nơi chốn (在 + địa điểm)",
     "gs": "proposed"
    }
   ],
   "note": "Chủ ngữ + 在 + nơi chốn + 工作. 工作 vừa là động từ 'làm việc' vừa là danh từ 'công việc'. Bỏ 的 trước 爸爸 vì người thân.",
   "alt": [],
   "key_points": [
    {
     "vi": "bố tôi",
     "zh_ok": [
      "我爸爸"
     ]
    },
    {
     "vi": "ở bệnh viện",
     "zh_ok": [
      "在医院"
     ]
    },
    {
     "vi": "làm việc",
     "zh_ok": [
      "工作",
      "上班"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我爸爸在工作医院。",
     "why": "Sai trật tự: 医院 phải đứng sau 在."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-018",
   "lv": 1,
   "topic": "Giải trí",
   "vi": "Tôi đi xem phim cùng bạn.",
   "zh": "我和朋友去看电影。",
   "py": "Wǒ hé péngyou qù kàn diànyǐng.",
   "back_vi": "Tôi đi xem phim cùng bạn.",
   "vocab": [
    {
     "w": "和",
     "py": "hé",
     "vi": "và, cùng",
     "lv": 1
    },
    {
     "w": "朋友",
     "py": "péngyou",
     "vi": "bạn",
     "lv": 1
    },
    {
     "w": "去",
     "py": "qù",
     "vi": "đi",
     "lv": 1
    },
    {
     "w": "看",
     "py": "kàn",
     "vi": "xem",
     "lv": 1
    },
    {
     "w": "电影",
     "py": "diànyǐng",
     "vi": "phim",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "和 nối danh từ / cùng với",
     "gs": "proposed"
    },
    {
     "name": "去 / 在 + địa điểm + động từ (hai động từ liền nhau)",
     "gs": "proposed"
    }
   ],
   "note": "A 和 B + động từ = A cùng B làm gì. 去看电影: 去 + động từ (đi xem phim).",
   "alt": [
    {
     "zh": "我和朋友一起去看电影。",
     "py": "Wǒ hé péngyou yìqǐ qù kàn diànyǐng.",
     "note": "一起 (cùng nhau) làm nghĩa rõ hơn; đúng ngữ pháp."
    }
   ],
   "key_points": [
    {
     "vi": "tôi và bạn",
     "zh_ok": [
      "我和朋友",
      "我跟朋友"
     ]
    },
    {
     "vi": "đi xem phim",
     "zh_ok": [
      "去看电影"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "我和朋友们去看电影。",
     "why": "Có thể đúng nhưng 朋友们 ngoài phạm vi từ HSK 1; không bắt buộc."
    },
    {
     "zh": "我去看电影和朋友。",
     "why": "和 phải nối hai danh từ đứng trước động từ."
    }
   ],
   "over": [
    {
     "w": "一起",
     "lv": 2,
     "reason": "fn",
     "why": "Trạng từ 'cùng nhau', chỉ xuất hiện ở đáp án phụ, giúp câu tự nhiên"
    }
   ],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-019",
   "lv": 1,
   "topic": "Giao tiếp",
   "vi": "Xin lỗi, hôm nay tôi không đi được.",
   "zh": "对不起，我今天不能去。",
   "py": "Duìbuqǐ, wǒ jīntiān bù néng qù.",
   "back_vi": "Xin lỗi, hôm nay tôi không đi được.",
   "vocab": [
    {
     "w": "对不起",
     "py": "duìbuqǐ",
     "vi": "xin lỗi",
     "lv": 1
    },
    {
     "w": "今天",
     "py": "jīntiān",
     "vi": "hôm nay",
     "lv": 1
    },
    {
     "w": "能",
     "py": "néng",
     "vi": "có thể",
     "lv": 1
    },
    {
     "w": "去",
     "py": "qù",
     "vi": "đi",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "不能 + động từ (không thể)",
     "gs": "proposed"
    },
    {
     "name": "不 phủ định động từ",
     "gs": "proposed"
    }
   ],
   "note": "不能 + động từ = không thể (vì hoàn cảnh không cho phép). Thời gian 今天 đứng trước 不能, sau chủ ngữ 我.",
   "alt": [],
   "key_points": [
    {
     "vi": "xin lỗi",
     "zh_ok": [
      "对不起"
     ]
    },
    {
     "vi": "hôm nay",
     "zh_ok": [
      "今天"
     ]
    },
    {
     "vi": "không đi được",
     "zh_ok": [
      "不能去",
      "去不了"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "对不起，我今天不会去。",
     "why": "不会 nghĩa là 'sẽ không / không biết làm', không diễn đạt 'bị cản không đi được'."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  },
  {
   "id": "T1-S-020",
   "lv": 1,
   "topic": "Sinh hoạt",
   "vi": "Hôm qua anh ấy không đến trường.",
   "zh": "他昨天没有来学校。",
   "py": "Tā zuótiān méiyǒu lái xuéxiào.",
   "back_vi": "Hôm qua anh ấy không đến trường.",
   "vocab": [
    {
     "w": "昨天",
     "py": "zuótiān",
     "vi": "hôm qua",
     "lv": 1
    },
    {
     "w": "没",
     "py": "méi",
     "vi": "không (đã qua)",
     "lv": 1
    },
    {
     "w": "有",
     "py": "yǒu",
     "vi": "có",
     "lv": 1
    },
    {
     "w": "来",
     "py": "lái",
     "vi": "đến",
     "lv": 1
    },
    {
     "w": "学校",
     "py": "xuéxiào",
     "vi": "trường học",
     "lv": 1
    }
   ],
   "grammar": [
    {
     "name": "没(有) phủ định hành động đã qua",
     "gs": "proposed"
    }
   ],
   "note": "没有 + động từ phủ định việc đã xảy ra trong quá khứ (không dùng 不 cho quá khứ). 来 = đến phía người nói; ở đây người nói ở trường nên dùng 来.",
   "alt": [
    {
     "zh": "他昨天没来学校。",
     "py": "Tā zuótiān méi lái xuéxiào.",
     "note": "Bỏ 有 sau 没 vẫn đúng; ngắn hơn trong khẩu ngữ."
    }
   ],
   "key_points": [
    {
     "vi": "hôm qua",
     "zh_ok": [
      "昨天"
     ]
    },
    {
     "vi": "không đến",
     "zh_ok": [
      "没有来",
      "没来"
     ]
    },
    {
     "vi": "trường",
     "zh_ok": [
      "学校"
     ]
    }
   ],
   "avoid": [
    {
     "zh": "他昨天不来学校。",
     "why": "Quá khứ phủ định dùng 没, không dùng 不."
    },
    {
     "zh": "他昨天没有来了学校。",
     "why": "Không dùng 了 cùng với 没有."
    }
   ],
   "over": [],
   "names": [],
   "needs_check": [
    "来 hay 去 phụ thuộc vị trí người nói (người đọc đề có thể hiểu là 去) — cần người bản ngữ xác nhận đáp án phụ 他昨天没有去学校"
   ],
   "reviewed": false,
   "review": {
    "zh": null,
    "vi": null
   },
   "source": "original"
  }
 ],
 "paragraphs": [
  {
   "id": "T1-PC-01",
   "lv": 1,
   "topic": "Giới thiệu bản thân",
   "title": "Cô bé Lý Hồng",
   "vi": "Xin chào! Tôi tên là Lý Hồng. Tôi là người Trung Quốc, sống ở Bắc Kinh. Tôi là học sinh, tôi rất thích trường của mình. Thầy cô và các bạn của tôi đều rất tốt.",
   "items": [
    {
     "id": "T1-P-001",
     "lv": 1,
     "topic": "Giới thiệu bản thân",
     "vi": "Xin chào! Tôi tên là Lý Hồng.",
     "zh": "你好！我叫李红。",
     "py": "Nǐ hǎo! Wǒ jiào Lǐ Hóng.",
     "back_vi": "Xin chào! Tôi tên là Lý Hồng.",
     "vocab": [
      {
       "w": "好",
       "py": "hǎo",
       "vi": "tốt",
       "lv": 1
      },
      {
       "w": "叫",
       "py": "jiào",
       "vi": "tên là",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "我叫 + tên (giới thiệu tên)",
       "gs": "proposed"
      }
     ],
     "note": "Chào bằng 你好, rồi giới thiệu tên bằng 我叫 + tên.",
     "alt": [],
     "key_points": [
      {
       "vi": "xin chào",
       "zh_ok": [
        "你好"
       ]
      },
      {
       "vi": "Lý Hồng",
       "zh_ok": [
        "李红"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我是叫李红。",
       "why": "Không nói 是叫."
      }
     ],
     "over": [],
     "names": [
      "李红"
     ],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-002",
     "lv": 1,
     "topic": "Giới thiệu bản thân",
     "vi": "Tôi là người Trung Quốc, sống ở Bắc Kinh.",
     "zh": "我是中国人，住在北京。",
     "py": "Wǒ shì Zhōngguó rén, zhù zài Běijīng.",
     "back_vi": "Tôi là người Trung Quốc, sống ở Bắc Kinh.",
     "vocab": [
      {
       "w": "中国",
       "py": "Zhōngguó",
       "vi": "Trung Quốc",
       "lv": 1
      },
      {
       "w": "住",
       "py": "zhù",
       "vi": "ở, sống",
       "lv": 1
      },
      {
       "w": "北京",
       "py": "Běijīng",
       "vi": "Bắc Kinh",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "在 chỉ nơi chốn (在 + địa điểm)",
       "gs": "proposed"
      }
     ],
     "note": "Vế sau bỏ chủ ngữ 我 vì trùng. 住在 + nơi chốn = sống ở đâu.",
     "alt": [],
     "key_points": [
      {
       "vi": "người Trung Quốc",
       "zh_ok": [
        "中国人"
       ]
      },
      {
       "vi": "sống ở Bắc Kinh",
       "zh_ok": [
        "住在北京"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我是中国人，我住北京在。",
       "why": "在 phải đứng trước nơi chốn."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-003",
     "lv": 1,
     "topic": "Giới thiệu bản thân",
     "vi": "Tôi là học sinh, tôi rất thích trường của mình.",
     "zh": "我是学生，我很喜欢我的学校。",
     "py": "Wǒ shì xuésheng, wǒ hěn xǐhuan wǒ de xuéxiào.",
     "back_vi": "Tôi là học sinh, tôi rất thích trường của mình.",
     "vocab": [
      {
       "w": "学生",
       "py": "xuésheng",
       "vi": "học sinh",
       "lv": 1
      },
      {
       "w": "很",
       "py": "hěn",
       "vi": "rất",
       "lv": 1
      },
      {
       "w": "喜欢",
       "py": "xǐhuan",
       "vi": "thích",
       "lv": 1
      },
      {
       "w": "学校",
       "py": "xuéxiào",
       "vi": "trường học",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "Tính từ với 很 (không dùng 是)",
       "gs": "proposed"
      },
      {
       "name": "Trợ từ 的 chỉ sở hữu",
       "gs": "existing",
       "gid": "1-3"
      }
     ],
     "note": "很 + động từ cảm xúc (很喜欢) = rất thích. 我的学校 = trường của tôi.",
     "alt": [
      {
       "zh": "我是学生，我很喜欢学校。",
       "py": "Wǒ shì xuésheng, wǒ hěn xǐhuan xuéxiào.",
       "note": "Bỏ 我的 vì ngữ cảnh đã rõ."
      }
     ],
     "key_points": [
      {
       "vi": "học sinh",
       "zh_ok": [
        "学生"
       ]
      },
      {
       "vi": "rất thích",
       "zh_ok": [
        "很喜欢"
       ]
      },
      {
       "vi": "trường",
       "zh_ok": [
        "学校"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我是学生，我喜欢很学校。",
       "why": "很 phải đứng trước động từ 喜欢."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-004",
     "lv": 1,
     "topic": "Giới thiệu bản thân",
     "vi": "Thầy cô và các bạn của tôi đều rất tốt.",
     "zh": "我的老师和同学都很好。",
     "py": "Wǒ de lǎoshī hé tóngxué dōu hěn hǎo.",
     "back_vi": "Thầy cô và các bạn của tôi đều rất tốt.",
     "vocab": [
      {
       "w": "老师",
       "py": "lǎoshī",
       "vi": "giáo viên",
       "lv": 1
      },
      {
       "w": "和",
       "py": "hé",
       "vi": "và",
       "lv": 1
      },
      {
       "w": "同学",
       "py": "tóngxué",
       "vi": "bạn học",
       "lv": 1
      },
      {
       "w": "都",
       "py": "dōu",
       "vi": "đều",
       "lv": 1
      },
      {
       "w": "好",
       "py": "hǎo",
       "vi": "tốt",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "和 nối danh từ / cùng với",
       "gs": "proposed"
      },
      {
       "name": "都 (đều) đứng trước động từ / tính từ",
       "gs": "proposed"
      },
      {
       "name": "Tính từ với 很 (không dùng 是)",
       "gs": "proposed"
      }
     ],
     "note": "都 đứng sau chủ ngữ (nhiều người) và trước 很: 都很好 = đều rất tốt.",
     "alt": [],
     "key_points": [
      {
       "vi": "thầy cô và các bạn",
       "zh_ok": [
        "老师和同学"
       ]
      },
      {
       "vi": "đều",
       "zh_ok": [
        "都"
       ]
      },
      {
       "vi": "rất tốt",
       "zh_ok": [
        "很好"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我的老师和同学很都好。",
       "why": "都 đứng trước 很."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [
      "老师 = thầy hoặc cô giáo (không phân biệt giới); dịch 'thầy cô' có thể gây tranh luận"
     ],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    }
   ]
  },
  {
   "id": "T1-PC-02",
   "lv": 1,
   "topic": "Gia đình",
   "title": "Nhà của tôi",
   "vi": "Đây là nhà của tôi. Tôi có một con trai và một con gái. Con trai bảy tuổi, con gái năm tuổi. Tôi rất yêu các con.",
   "items": [
    {
     "id": "T1-P-005",
     "lv": 1,
     "topic": "Gia đình",
     "vi": "Đây là nhà của tôi.",
     "zh": "这是我的家。",
     "py": "Zhè shì wǒ de jiā.",
     "back_vi": "Đây là nhà của tôi.",
     "vocab": [
      {
       "w": "这",
       "py": "zhè",
       "vi": "đây",
       "lv": 1
      },
      {
       "w": "家",
       "py": "jiā",
       "vi": "nhà, gia đình",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "Trợ từ 的 chỉ sở hữu",
       "gs": "existing",
       "gid": "1-3"
      }
     ],
     "note": "家 nghĩa 'nhà' và cả 'gia đình'. 我的家 = nhà / gia đình của tôi.",
     "alt": [
      {
       "zh": "这是我家。",
       "py": "Zhè shì wǒ jiā.",
       "note": "Bỏ 的 với 家; rất thường gặp."
      }
     ],
     "key_points": [
      {
       "vi": "đây là",
       "zh_ok": [
        "这是"
       ]
      },
      {
       "vi": "nhà tôi",
       "zh_ok": [
        "我的家",
        "我家"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "这是家我。",
       "why": "Sai trật tự sở hữu."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-006",
     "lv": 1,
     "topic": "Gia đình",
     "vi": "Tôi có một con trai và một con gái.",
     "zh": "我有一个儿子和一个女儿。",
     "py": "Wǒ yǒu yí ge érzi hé yí ge nǚ'ér.",
     "back_vi": "Tôi có một con trai và một con gái.",
     "vocab": [
      {
       "w": "儿子",
       "py": "érzi",
       "vi": "con trai",
       "lv": 1
      },
      {
       "w": "女儿",
       "py": "nǚ'ér",
       "vi": "con gái",
       "lv": 1
      },
      {
       "w": "和",
       "py": "hé",
       "vi": "và",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "有 và 没有",
       "gs": "existing",
       "gid": "1-2"
      },
      {
       "name": "Số từ + lượng từ + danh từ",
       "gs": "existing",
       "gid": "1-4"
      },
      {
       "name": "和 nối danh từ / cùng với",
       "gs": "proposed"
      }
     ],
     "note": "Mỗi danh từ có số + lượng từ riêng: 一个儿子 和 一个女儿. 和 nối hai danh từ.",
     "alt": [],
     "key_points": [
      {
       "vi": "một con trai",
       "zh_ok": [
        "一个儿子"
       ]
      },
      {
       "vi": "một con gái",
       "zh_ok": [
        "一个女儿"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我有一个儿子，一个女儿。",
       "why": "Không sai ngữ pháp nhưng bỏ 和 làm câu rời rạc."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-007",
     "lv": 1,
     "topic": "Gia đình",
     "vi": "Con trai bảy tuổi, con gái năm tuổi.",
     "zh": "儿子七岁，女儿五岁。",
     "py": "Érzi qī suì, nǚ'ér wǔ suì.",
     "back_vi": "Con trai bảy tuổi, con gái năm tuổi.",
     "vocab": [
      {
       "w": "七",
       "py": "qī",
       "vi": "bảy",
       "lv": 1
      },
      {
       "w": "五",
       "py": "wǔ",
       "vi": "năm",
       "lv": 1
      },
      {
       "w": "岁",
       "py": "suì",
       "vi": "tuổi",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Nói tuổi: số + 岁",
       "gs": "proposed"
      }
     ],
     "note": "Nói tuổi: số + 岁, không cần động từ 是 hay 有. Hai vế song song nên bỏ động từ.",
     "alt": [],
     "key_points": [
      {
       "vi": "con trai bảy tuổi",
       "zh_ok": [
        "儿子七岁"
       ]
      },
      {
       "vi": "con gái năm tuổi",
       "zh_ok": [
        "女儿五岁"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "儿子七年，女儿五年。",
       "why": "岁 là 'tuổi', 年 là 'năm'; không dùng 年 để nói tuổi."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-008",
     "lv": 1,
     "topic": "Gia đình",
     "vi": "Tôi rất yêu các con.",
     "zh": "我很爱他们。",
     "py": "Wǒ hěn ài tāmen.",
     "back_vi": "Tôi rất yêu các con.",
     "vocab": [
      {
       "w": "很",
       "py": "hěn",
       "vi": "rất",
       "lv": 1
      },
      {
       "w": "爱",
       "py": "ài",
       "vi": "yêu",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Tính từ với 很 (không dùng 是)",
       "gs": "proposed"
      }
     ],
     "note": "他们 = họ, chúng nó (thay cho hai đứa con). 很爱 = rất yêu.",
     "alt": [],
     "key_points": [
      {
       "vi": "rất yêu",
       "zh_ok": [
        "很爱"
       ]
      },
      {
       "vi": "các con",
       "zh_ok": [
        "他们",
        "儿子和女儿"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我爱很他们。",
       "why": "很 phải đứng trước 爱."
      }
     ],
     "over": [
      {
       "w": "他们",
       "lv": null,
       "reason": "fn",
       "why": "Đại từ số nhiều 'chúng nó / các con' thay cho 儿子和女儿, tránh lặp"
      }
     ],
     "names": [],
     "needs_check": [
      "Dịch 'các con' bằng 他们 (nghĩa đen 'họ/chúng nó') cần người bản ngữ xác nhận độ tự nhiên"
     ],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    }
   ]
  },
  {
   "id": "T1-PC-03",
   "lv": 1,
   "topic": "Sinh hoạt hằng ngày",
   "title": "Một ngày cuối tuần",
   "vi": "Hôm nay là thứ Bảy. Buổi sáng tôi ở nhà đọc sách. Buổi trưa tôi cùng bạn ăn cơm ở nhà hàng. Buổi chiều chúng tôi đi xem phim.",
   "items": [
    {
     "id": "T1-P-009",
     "lv": 1,
     "topic": "Sinh hoạt hằng ngày",
     "vi": "Hôm nay là thứ Bảy.",
     "zh": "今天是星期六。",
     "py": "Jīntiān shì xīngqī liù.",
     "back_vi": "Hôm nay là thứ Bảy.",
     "vocab": [
      {
       "w": "今天",
       "py": "jīntiān",
       "vi": "hôm nay",
       "lv": 1
      },
      {
       "w": "星期",
       "py": "xīngqī",
       "vi": "thứ",
       "lv": 1
      },
      {
       "w": "六",
       "py": "liù",
       "vi": "sáu",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "Nói thứ trong tuần: 星期 + số",
       "gs": "proposed"
      }
     ],
     "note": "Thứ Bảy = 星期六 (số 六 = sáu, nhớ lệch 1 so với tiếng Việt). Có 是 làm câu nghe tròn hơn.",
     "alt": [
      {
       "zh": "今天星期六。",
       "py": "Jīntiān xīngqī liù.",
       "note": "Bỏ 是 trong câu chỉ ngày."
      }
     ],
     "key_points": [
      {
       "vi": "hôm nay",
       "zh_ok": [
        "今天"
       ]
      },
      {
       "vi": "thứ Bảy",
       "zh_ok": [
        "星期六"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "今天是星期七。",
       "why": "Không dùng 星期七; chủ nhật là 星期天/星期日."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [
      "Dùng 星期天 / 星期日 cho Chủ nhật không có trong phạm vi bài này"
     ],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-010",
     "lv": 1,
     "topic": "Sinh hoạt hằng ngày",
     "vi": "Buổi sáng tôi ở nhà đọc sách.",
     "zh": "上午我在家看书。",
     "py": "Shàngwǔ wǒ zài jiā kàn shū.",
     "back_vi": "Buổi sáng tôi ở nhà đọc sách.",
     "vocab": [
      {
       "w": "上午",
       "py": "shàngwǔ",
       "vi": "buổi sáng",
       "lv": 1
      },
      {
       "w": "在",
       "py": "zài",
       "vi": "ở",
       "lv": 1
      },
      {
       "w": "家",
       "py": "jiā",
       "vi": "nhà",
       "lv": 1
      },
      {
       "w": "看",
       "py": "kàn",
       "vi": "xem, đọc",
       "lv": 1
      },
      {
       "w": "书",
       "py": "shū",
       "vi": "sách",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "在 chỉ nơi chốn (在 + địa điểm)",
       "gs": "proposed"
      },
      {
       "name": "去 / 在 + địa điểm + động từ (hai động từ liền nhau)",
       "gs": "proposed"
      }
     ],
     "note": "Thời gian (上午) đứng đầu câu hoặc sau chủ ngữ. 在家 = ở nhà. 看书 = đọc sách (看 là xem/đọc).",
     "alt": [
      {
       "zh": "我上午在家看书。",
       "py": "Wǒ shàngwǔ zài jiā kàn shū.",
       "note": "Chủ ngữ trước thời gian cũng đúng."
      }
     ],
     "key_points": [
      {
       "vi": "buổi sáng",
       "zh_ok": [
        "上午"
       ]
      },
      {
       "vi": "ở nhà",
       "zh_ok": [
        "在家"
       ]
      },
      {
       "vi": "đọc sách",
       "zh_ok": [
        "看书"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我在家看书上午。",
       "why": "Từ chỉ thời gian không đứng cuối câu."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-011",
     "lv": 1,
     "topic": "Sinh hoạt hằng ngày",
     "vi": "Buổi trưa tôi cùng bạn ăn cơm ở nhà hàng.",
     "zh": "中午我和朋友在饭馆吃米饭。",
     "py": "Zhōngwǔ wǒ hé péngyou zài fànguǎn chī mǐfàn.",
     "back_vi": "Buổi trưa tôi cùng bạn ăn cơm ở nhà hàng.",
     "vocab": [
      {
       "w": "中午",
       "py": "zhōngwǔ",
       "vi": "buổi trưa",
       "lv": 1
      },
      {
       "w": "和",
       "py": "hé",
       "vi": "cùng",
       "lv": 1
      },
      {
       "w": "朋友",
       "py": "péngyou",
       "vi": "bạn",
       "lv": 1
      },
      {
       "w": "饭馆",
       "py": "fànguǎn",
       "vi": "nhà hàng",
       "lv": 1
      },
      {
       "w": "吃",
       "py": "chī",
       "vi": "ăn",
       "lv": 1
      },
      {
       "w": "米饭",
       "py": "mǐfàn",
       "vi": "cơm",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "和 nối danh từ / cùng với",
       "gs": "proposed"
      },
      {
       "name": "在 chỉ nơi chốn (在 + địa điểm)",
       "gs": "proposed"
      }
     ],
     "note": "Trật tự: thời gian → ai → 在 + nơi chốn → động từ + tân ngữ. 和朋友 đứng trước 在饭馆.",
     "alt": [
      {
       "zh": "中午我在饭馆和朋友吃米饭。",
       "py": "Zhōngwǔ wǒ zài fànguǎn hé péngyou chī mǐfàn.",
       "note": "Đổi vị trí 和朋友 và 在饭馆: cùng nghĩa, chỉ khác nhấn mạnh."
      }
     ],
     "key_points": [
      {
       "vi": "buổi trưa",
       "zh_ok": [
        "中午"
       ]
      },
      {
       "vi": "cùng bạn",
       "zh_ok": [
        "和朋友"
       ]
      },
      {
       "vi": "ở nhà hàng",
       "zh_ok": [
        "在饭馆"
       ]
      },
      {
       "vi": "ăn cơm",
       "zh_ok": [
        "吃米饭",
        "吃饭"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "中午我吃米饭在饭馆和朋友。",
       "why": "Địa điểm và người cùng làm phải đứng trước động từ."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [
      "Cần người bản ngữ xác nhận phương án phụ đổi trật tự và cách nói 吃饭 thay cho 吃米饭"
     ],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    },
    {
     "id": "T1-P-012",
     "lv": 1,
     "topic": "Sinh hoạt hằng ngày",
     "vi": "Buổi chiều chúng tôi đi xem phim.",
     "zh": "下午我们去看电影。",
     "py": "Xiàwǔ wǒmen qù kàn diànyǐng.",
     "back_vi": "Buổi chiều chúng tôi đi xem phim.",
     "vocab": [
      {
       "w": "下午",
       "py": "xiàwǔ",
       "vi": "buổi chiều",
       "lv": 1
      },
      {
       "w": "我们",
       "py": "wǒmen",
       "vi": "chúng tôi",
       "lv": 1
      },
      {
       "w": "去",
       "py": "qù",
       "vi": "đi",
       "lv": 1
      },
      {
       "w": "看",
       "py": "kàn",
       "vi": "xem",
       "lv": 1
      },
      {
       "w": "电影",
       "py": "diànyǐng",
       "vi": "phim",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "去 / 在 + địa điểm + động từ (hai động từ liền nhau)",
       "gs": "proposed"
      }
     ],
     "note": "下午 đứng đầu câu. 去看电影 = đi xem phim (hai động từ nối tiếp).",
     "alt": [],
     "key_points": [
      {
       "vi": "buổi chiều",
       "zh_ok": [
        "下午"
       ]
      },
      {
       "vi": "chúng tôi",
       "zh_ok": [
        "我们"
       ]
      },
      {
       "vi": "đi xem phim",
       "zh_ok": [
        "去看电影"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "下午我们看电影去。",
       "why": "去 đặt trước động từ chính."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original"
    }
   ]
  }
 ],
 "dialogues": [
  {
   "id": "T1-DC-01",
   "lv": 1,
   "topic": "Giao tiếp",
   "title": "Làm quen lần đầu",
   "scene": "Hai bạn mới gặp nhau ở trường và làm quen.",
   "roles": [
    "A",
    "B"
   ],
   "vi": "A: Chào bạn! Bạn tên là gì? B: Tôi tên là Lý Hồng. Còn bạn? A: Tôi tên là Vương Minh. Rất vui được làm quen với bạn. B: Tôi cũng rất vui. A: Bạn là học sinh à? B: Vâng, tôi là học sinh.",
   "turns": [
    {
     "id": "T1-D-001",
     "lv": 1,
     "topic": "Giao tiếp",
     "vi": "Chào bạn! Bạn tên là gì?",
     "zh": "你好！你叫什么名字？",
     "py": "Nǐ hǎo! Nǐ jiào shénme míngzi?",
     "back_vi": "Chào bạn! Bạn tên là gì?",
     "vocab": [
      {
       "w": "叫",
       "py": "jiào",
       "vi": "tên là",
       "lv": 1
      },
      {
       "w": "什么",
       "py": "shénme",
       "vi": "gì",
       "lv": 1
      },
      {
       "w": "名字",
       "py": "míngzi",
       "vi": "tên",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Câu hỏi với 谁 / 什么",
       "gs": "proposed"
      },
      {
       "name": "我叫 + tên (giới thiệu tên)",
       "gs": "proposed"
      }
     ],
     "note": "Hỏi tên: 你叫什么名字？ 什么 = gì; 名字 = tên. Không thêm 吗 vì đã có từ để hỏi.",
     "alt": [],
     "key_points": [
      {
       "vi": "chào",
       "zh_ok": [
        "你好"
       ]
      },
      {
       "vi": "tên là gì",
       "zh_ok": [
        "叫什么名字"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "你叫什么名字吗？",
       "why": "Câu có 什么 không dùng thêm 吗."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-002",
     "lv": 1,
     "topic": "Giao tiếp",
     "vi": "Tôi tên là Lý Hồng. Còn bạn?",
     "zh": "我叫李红。你呢？",
     "py": "Wǒ jiào Lǐ Hóng. Nǐ ne?",
     "back_vi": "Tôi tên là Lý Hồng. Còn bạn?",
     "vocab": [
      {
       "w": "叫",
       "py": "jiào",
       "vi": "tên là",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "我叫 + tên (giới thiệu tên)",
       "gs": "proposed"
      },
      {
       "name": "Câu hỏi với 吗 và 呢",
       "gs": "existing",
       "gid": "1-1"
      }
     ],
     "note": "你呢？ = 'còn bạn thì sao?', hỏi lại cùng câu hỏi mà không lặp.",
     "alt": [],
     "key_points": [
      {
       "vi": "tôi tên là Lý Hồng",
       "zh_ok": [
        "我叫李红"
       ]
      },
      {
       "vi": "còn bạn",
       "zh_ok": [
        "你呢"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我叫李红。你吗？",
       "why": "Hỏi lại dùng 呢, không dùng 吗."
      }
     ],
     "over": [],
     "names": [
      "李红"
     ],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    },
    {
     "id": "T1-D-003",
     "lv": 1,
     "topic": "Giao tiếp",
     "vi": "Tôi tên là Vương Minh. Rất vui được làm quen với bạn.",
     "zh": "我叫王明。很高兴认识你。",
     "py": "Wǒ jiào Wáng Míng. Hěn gāoxìng rènshi nǐ.",
     "back_vi": "Tôi tên là Vương Minh. Rất vui được làm quen với bạn.",
     "vocab": [
      {
       "w": "很",
       "py": "hěn",
       "vi": "rất",
       "lv": 1
      },
      {
       "w": "高兴",
       "py": "gāoxìng",
       "vi": "vui",
       "lv": 1
      },
      {
       "w": "认识",
       "py": "rènshi",
       "vi": "quen biết",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "我叫 + tên (giới thiệu tên)",
       "gs": "proposed"
      },
      {
       "name": "Tính từ với 很 (không dùng 是)",
       "gs": "proposed"
      }
     ],
     "note": "很高兴认识你 là câu chào quen thuộc: 很 + 高兴 + 认识 + người.",
     "alt": [],
     "key_points": [
      {
       "vi": "Vương Minh",
       "zh_ok": [
        "王明"
       ]
      },
      {
       "vi": "rất vui",
       "zh_ok": [
        "很高兴"
       ]
      },
      {
       "vi": "làm quen",
       "zh_ok": [
        "认识"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我很高兴是认识你。",
       "why": "Không dùng 是 trong câu này."
      }
     ],
     "over": [],
     "names": [
      "王明"
     ],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-004",
     "lv": 1,
     "topic": "Giao tiếp",
     "vi": "Tôi cũng rất vui.",
     "zh": "我也很高兴。",
     "py": "Wǒ yě hěn gāoxìng.",
     "back_vi": "Tôi cũng rất vui.",
     "vocab": [
      {
       "w": "很",
       "py": "hěn",
       "vi": "rất",
       "lv": 1
      },
      {
       "w": "高兴",
       "py": "gāoxìng",
       "vi": "vui",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Tính từ với 很 (không dùng 是)",
       "gs": "proposed"
      }
     ],
     "note": "也 = cũng, đứng sau chủ ngữ và trước 很/động từ. Vị trí: 我 + 也 + 很高兴.",
     "alt": [],
     "key_points": [
      {
       "vi": "cũng",
       "zh_ok": [
        "也"
       ]
      },
      {
       "vi": "rất vui",
       "zh_ok": [
        "很高兴"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我很也高兴。",
       "why": "也 phải đứng trước 很."
      }
     ],
     "over": [
      {
       "w": "也",
       "lv": 2,
       "reason": "fn",
       "why": "Trạng từ 'cũng', không có từ nào trong HSK 1 thay thế được ở câu đáp lại này"
      }
     ],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    },
    {
     "id": "T1-D-005",
     "lv": 1,
     "topic": "Giao tiếp",
     "vi": "Bạn là học sinh của trường này à?",
     "zh": "你是这个学校的学生吗？",
     "py": "Nǐ shì zhège xuéxiào de xuésheng ma?",
     "back_vi": "Bạn là học sinh của trường này à?",
     "vocab": [
      {
       "w": "这",
       "py": "zhè",
       "vi": "này",
       "lv": 1
      },
      {
       "w": "个",
       "py": "gè",
       "vi": "(lượng từ)",
       "lv": 1
      },
      {
       "w": "学校",
       "py": "xuéxiào",
       "vi": "trường học",
       "lv": 1
      },
      {
       "w": "学生",
       "py": "xuésheng",
       "vi": "học sinh",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "Câu hỏi với 吗 và 呢",
       "gs": "existing",
       "gid": "1-1"
      },
      {
       "name": "Trợ từ 的 chỉ sở hữu",
       "gs": "existing",
       "gid": "1-3"
      }
     ],
     "note": "这个学校的学生 = học sinh của trường này (的 nối định ngữ với danh từ). 是字句 + 吗 hỏi có/không.",
     "alt": [],
     "key_points": [
      {
       "vi": "học sinh trường này",
       "zh_ok": [
        "这个学校的学生"
       ]
      },
      {
       "vi": "hỏi có/không",
       "zh_ok": [
        "吗"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "你是学生这个学校吗？",
       "why": "Định ngữ 这个学校的 phải đứng trước 学生."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-006",
     "lv": 1,
     "topic": "Giao tiếp",
     "vi": "Vâng, tôi học tiếng Hán.",
     "zh": "是，我学习汉语。",
     "py": "Shì, wǒ xuéxí Hànyǔ.",
     "back_vi": "Vâng, tôi học tiếng Hán.",
     "vocab": [
      {
       "w": "是",
       "py": "shì",
       "vi": "vâng",
       "lv": 1
      },
      {
       "w": "学习",
       "py": "xuéxí",
       "vi": "học",
       "lv": 1
      },
      {
       "w": "汉语",
       "py": "Hànyǔ",
       "vi": "tiếng Hán",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      }
     ],
     "note": "Trả lời câu hỏi 是…吗 bằng 是 (vâng) rồi thêm thông tin: 我学习汉语.",
     "alt": [],
     "key_points": [
      {
       "vi": "vâng",
       "zh_ok": [
        "是"
       ]
      },
      {
       "vi": "học tiếng Hán",
       "zh_ok": [
        "学习汉语"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "是，我汉语学习。",
       "why": "Tân ngữ 汉语 đứng sau động từ 学习."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    }
   ]
  },
  {
   "id": "T1-DC-02",
   "lv": 1,
   "topic": "Mua sắm",
   "title": "Mua táo",
   "scene": "Một khách hàng mua táo ở cửa hàng hoa quả. A là khách, B là người bán.",
   "roles": [
    "A",
    "B"
   ],
   "vi": "A: Xin chào, tôi muốn mua táo. B: Bạn muốn mua mấy quả? A: Năm quả. Bao nhiêu tiền? B: Mười tệ. A: Được, đây là mười tệ. Cảm ơn! B: Không có gì. Tạm biệt!",
   "turns": [
    {
     "id": "T1-D-007",
     "lv": 1,
     "topic": "Mua sắm",
     "vi": "Xin chào, tôi muốn mua táo.",
     "zh": "你好，我想买苹果。",
     "py": "Nǐ hǎo, wǒ xiǎng mǎi píngguǒ.",
     "back_vi": "Xin chào, tôi muốn mua táo.",
     "vocab": [
      {
       "w": "想",
       "py": "xiǎng",
       "vi": "muốn",
       "lv": 1
      },
      {
       "w": "买",
       "py": "mǎi",
       "vi": "mua",
       "lv": 1
      },
      {
       "w": "苹果",
       "py": "píngguǒ",
       "vi": "táo",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "想 + động từ (muốn làm gì)",
       "gs": "proposed"
      }
     ],
     "note": "我想买 + vật = tôi muốn mua. Không cần lượng từ khi chưa nói số lượng.",
     "alt": [],
     "key_points": [
      {
       "vi": "xin chào",
       "zh_ok": [
        "你好"
       ]
      },
      {
       "vi": "muốn mua táo",
       "zh_ok": [
        "想买苹果"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我想买苹果们。",
       "why": "Không thêm 们 cho vật."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-008",
     "lv": 1,
     "topic": "Mua sắm",
     "vi": "Bạn muốn mua mấy quả?",
     "zh": "你想买几个？",
     "py": "Nǐ xiǎng mǎi jǐ ge?",
     "back_vi": "Bạn muốn mua mấy quả?",
     "vocab": [
      {
       "w": "想",
       "py": "xiǎng",
       "vi": "muốn",
       "lv": 1
      },
      {
       "w": "几",
       "py": "jǐ",
       "vi": "mấy",
       "lv": 1
      },
      {
       "w": "个",
       "py": "gè",
       "vi": "(lượng từ)",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Hỏi giá và số lượng: 多少 / 几",
       "gs": "proposed"
      },
      {
       "name": "想 + động từ (muốn làm gì)",
       "gs": "proposed"
      }
     ],
     "note": "几 + 个 hỏi số lượng nhỏ. Lược bỏ danh từ 苹果 vì đã biết từ câu trước.",
     "alt": [],
     "key_points": [
      {
       "vi": "muốn mua",
       "zh_ok": [
        "想买"
       ]
      },
      {
       "vi": "mấy quả",
       "zh_ok": [
        "几个"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "你想买几？",
       "why": "Thiếu lượng từ 个 sau 几."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    },
    {
     "id": "T1-D-009",
     "lv": 1,
     "topic": "Mua sắm",
     "vi": "Năm quả. Bao nhiêu tiền?",
     "zh": "五个。多少钱？",
     "py": "Wǔ ge. Duōshao qián?",
     "back_vi": "Năm quả. Bao nhiêu tiền?",
     "vocab": [
      {
       "w": "五",
       "py": "wǔ",
       "vi": "năm",
       "lv": 1
      },
      {
       "w": "个",
       "py": "gè",
       "vi": "(lượng từ)",
       "lv": 1
      },
      {
       "w": "多少",
       "py": "duōshao",
       "vi": "bao nhiêu",
       "lv": 1
      },
      {
       "w": "钱",
       "py": "qián",
       "vi": "tiền",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Hỏi giá và số lượng: 多少 / 几",
       "gs": "proposed"
      },
      {
       "name": "Số từ + lượng từ + danh từ",
       "gs": "existing",
       "gid": "1-4"
      }
     ],
     "note": "Đáp lại câu hỏi 几个 bằng số + 个. 多少钱 hỏi giá.",
     "alt": [],
     "key_points": [
      {
       "vi": "năm quả",
       "zh_ok": [
        "五个"
       ]
      },
      {
       "vi": "bao nhiêu tiền",
       "zh_ok": [
        "多少钱"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "五苹果。",
       "why": "Thiếu lượng từ 个."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-010",
     "lv": 1,
     "topic": "Mua sắm",
     "vi": "Mười tệ.",
     "zh": "十块。",
     "py": "Shí kuài.",
     "back_vi": "Mười tệ.",
     "vocab": [
      {
       "w": "十",
       "py": "shí",
       "vi": "mười",
       "lv": 1
      },
      {
       "w": "块",
       "py": "kuài",
       "vi": "đồng, tệ",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Nói giá tiền: số + 块",
       "gs": "proposed"
      }
     ],
     "note": "块 là đơn vị tiền (nhân dân tệ) trong khẩu ngữ. Câu nói giá đơn giản không cần động từ.",
     "alt": [
      {
       "zh": "十块钱。",
       "py": "Shí kuài qián.",
       "note": "Thêm 钱 vẫn đúng."
      }
     ],
     "key_points": [
      {
       "vi": "mười",
       "zh_ok": [
        "十"
       ]
      },
      {
       "vi": "tệ / đồng",
       "zh_ok": [
        "块"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "十个块。",
       "why": "块 là đơn vị tiền, không dùng thêm 个."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    },
    {
     "id": "T1-D-011",
     "lv": 1,
     "topic": "Mua sắm",
     "vi": "Được, đây là mười tệ. Cảm ơn!",
     "zh": "好，这是十块。谢谢！",
     "py": "Hǎo, zhè shì shí kuài. Xièxie!",
     "back_vi": "Được, đây là mười tệ. Cảm ơn!",
     "vocab": [
      {
       "w": "好",
       "py": "hǎo",
       "vi": "được, tốt",
       "lv": 1
      },
      {
       "w": "这",
       "py": "zhè",
       "vi": "đây",
       "lv": 1
      },
      {
       "w": "是",
       "py": "shì",
       "vi": "là",
       "lv": 1
      },
      {
       "w": "谢谢",
       "py": "xièxie",
       "vi": "cảm ơn",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      }
     ],
     "note": "好 = đồng ý. 这是十块 = đây là mười tệ (đưa tiền).",
     "alt": [],
     "key_points": [
      {
       "vi": "được",
       "zh_ok": [
        "好"
       ]
      },
      {
       "vi": "đây là mười tệ",
       "zh_ok": [
        "这是十块"
       ]
      },
      {
       "vi": "cảm ơn",
       "zh_ok": [
        "谢谢"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "好，这有十块。",
       "why": "有 không dùng khi đưa tiền; dùng 这是."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [
      "Dùng 这是十块 khi đưa tiền: cần người bản ngữ xác nhận độ tự nhiên so với 给你"
     ],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-012",
     "lv": 1,
     "topic": "Mua sắm",
     "vi": "Không có gì. Tạm biệt!",
     "zh": "不客气。再见！",
     "py": "Bú kèqi. Zàijiàn!",
     "back_vi": "Không có gì. Tạm biệt!",
     "vocab": [
      {
       "w": "不客气",
       "py": "bù kèqi",
       "vi": "không có gì",
       "lv": 1
      },
      {
       "w": "再见",
       "py": "zàijiàn",
       "vi": "tạm biệt",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Câu xã giao cố định (谢谢 / 不客气 / 再见)",
       "gs": "proposed"
      }
     ],
     "note": "Hai cụm xã giao cố định: 不客气 đáp lại 谢谢, 再见 để chào tạm biệt.",
     "alt": [],
     "key_points": [
      {
       "vi": "không có gì",
       "zh_ok": [
        "不客气"
       ]
      },
      {
       "vi": "tạm biệt",
       "zh_ok": [
        "再见"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "不谢谢。",
       "why": "Không dùng 不 + 谢谢; đáp lại bằng 不客气."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    }
   ]
  },
  {
   "id": "T1-DC-03",
   "lv": 1,
   "topic": "Giao tiếp qua điện thoại",
   "title": "Cuộc gọi điện thoại",
   "scene": "Hai bạn học gọi điện thoại cho nhau.",
   "roles": [
    "A",
    "B"
   ],
   "vi": "A: A lô, bạn là Lý Hồng phải không? B: Vâng, tôi đây. Bạn là ai? A: Tôi là Vương Minh. Ngày mai bạn có đến trường không? B: Có. Sao thế? A: Ngày mai thời tiết không tốt, rất lạnh. B: Cảm ơn bạn, tạm biệt!",
   "turns": [
    {
     "id": "T1-D-013",
     "lv": 1,
     "topic": "Giao tiếp qua điện thoại",
     "vi": "A lô, bạn là Lý Hồng phải không?",
     "zh": "喂，你是李红吗？",
     "py": "Wèi, nǐ shì Lǐ Hóng ma?",
     "back_vi": "A lô, bạn là Lý Hồng phải không?",
     "vocab": [
      {
       "w": "喂",
       "py": "wèi",
       "vi": "a lô",
       "lv": 1
      },
      {
       "w": "是",
       "py": "shì",
       "vi": "là",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "Câu hỏi với 吗 và 呢",
       "gs": "existing",
       "gid": "1-1"
      }
     ],
     "note": "喂 mở đầu cuộc gọi. 你是… 吗？ để xác nhận người nghe.",
     "alt": [],
     "key_points": [
      {
       "vi": "a lô",
       "zh_ok": [
        "喂"
       ]
      },
      {
       "vi": "bạn là Lý Hồng",
       "zh_ok": [
        "你是李红"
       ]
      },
      {
       "vi": "hỏi xác nhận",
       "zh_ok": [
        "吗"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "喂，你李红吗？",
       "why": "Thiếu 是."
      }
     ],
     "over": [],
     "names": [
      "李红"
     ],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-014",
     "lv": 1,
     "topic": "Giao tiếp qua điện thoại",
     "vi": "Vâng, tôi đây. Bạn là ai?",
     "zh": "是，我是。你是谁？",
     "py": "Shì, wǒ shì. Nǐ shì shéi?",
     "back_vi": "Vâng, tôi đây. Bạn là ai?",
     "vocab": [
      {
       "w": "是",
       "py": "shì",
       "vi": "vâng",
       "lv": 1
      },
      {
       "w": "谁",
       "py": "shéi",
       "vi": "ai",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "Câu hỏi với 谁 / 什么",
       "gs": "proposed"
      }
     ],
     "note": "是，我是 = vâng, tôi đây (câu trả lời rút gọn khi nghe điện thoại). 谁 = ai; 谁 đọc shéi (hoặc shuí).",
     "alt": [],
     "key_points": [
      {
       "vi": "vâng, tôi đây",
       "zh_ok": [
        "是，我是",
        "我是"
       ]
      },
      {
       "vi": "bạn là ai",
       "zh_ok": [
        "你是谁"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "你是谁吗？",
       "why": "Câu có 谁 không thêm 吗."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [
      "是，我是。 nghe có tự nhiên khi nhận điện thoại không — cần người bản ngữ xác nhận"
     ],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    },
    {
     "id": "T1-D-015",
     "lv": 1,
     "topic": "Giao tiếp qua điện thoại",
     "vi": "Tôi là Vương Minh. Ngày mai bạn có đến trường không?",
     "zh": "我是王明。明天你去学校吗？",
     "py": "Wǒ shì Wáng Míng. Míngtiān nǐ qù xuéxiào ma?",
     "back_vi": "Tôi là Vương Minh. Ngày mai bạn có đến trường không?",
     "vocab": [
      {
       "w": "明天",
       "py": "míngtiān",
       "vi": "ngày mai",
       "lv": 1
      },
      {
       "w": "去",
       "py": "qù",
       "vi": "đi",
       "lv": 1
      },
      {
       "w": "学校",
       "py": "xuéxiào",
       "vi": "trường học",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "是字句 (câu chữ 是)",
       "gs": "existing",
       "gid": "1-0"
      },
      {
       "name": "Câu hỏi với 吗 và 呢",
       "gs": "existing",
       "gid": "1-1"
      },
      {
       "name": "去 / 在 + địa điểm + động từ (hai động từ liền nhau)",
       "gs": "proposed"
      }
     ],
     "note": "Thời gian 明天 đứng trước chủ ngữ hoặc sau chủ ngữ. 去学校 = đến trường / đi học.",
     "alt": [],
     "key_points": [
      {
       "vi": "tôi là Vương Minh",
       "zh_ok": [
        "我是王明"
       ]
      },
      {
       "vi": "ngày mai",
       "zh_ok": [
        "明天"
       ]
      },
      {
       "vi": "đến trường",
       "zh_ok": [
        "去学校"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "我是王明。你明天去学校不吗？",
       "why": "Sai vị trí 不/吗."
      }
     ],
     "over": [],
     "names": [
      "王明"
     ],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-016",
     "lv": 1,
     "topic": "Giao tiếp qua điện thoại",
     "vi": "Có. Sao thế?",
     "zh": "去。怎么了？",
     "py": "Qù. Zěnme le?",
     "back_vi": "Có. Sao thế?",
     "vocab": [
      {
       "w": "去",
       "py": "qù",
       "vi": "đi",
       "lv": 1
      },
      {
       "w": "怎么",
       "py": "zěnme",
       "vi": "thế nào",
       "lv": 1
      },
      {
       "w": "了",
       "py": "le",
       "vi": "(trợ từ)",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "怎么了？ (có chuyện gì vậy?)",
       "gs": "proposed"
      }
     ],
     "note": "Trả lời có/không bằng chính động từ: 去 = (tôi) đi. 怎么了？ = có chuyện gì vậy.",
     "alt": [],
     "key_points": [
      {
       "vi": "có (đi)",
       "zh_ok": [
        "去"
       ]
      },
      {
       "vi": "sao thế",
       "zh_ok": [
        "怎么了"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "是，我去学校。怎么？",
       "why": "怎么 một mình không đủ nghĩa 'sao thế', cần 了."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [
      "怎么了 là cụm cố định; nghĩa đã kiểm chỉ qua kho HSK, cần người bản ngữ xác nhận"
     ],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    },
    {
     "id": "T1-D-017",
     "lv": 1,
     "topic": "Giao tiếp qua điện thoại",
     "vi": "Ngày mai thời tiết không tốt, rất lạnh.",
     "zh": "明天天气不好，很冷。",
     "py": "Míngtiān tiānqì bù hǎo, hěn lěng.",
     "back_vi": "Ngày mai thời tiết không tốt, rất lạnh.",
     "vocab": [
      {
       "w": "明天",
       "py": "míngtiān",
       "vi": "ngày mai",
       "lv": 1
      },
      {
       "w": "天气",
       "py": "tiānqì",
       "vi": "thời tiết",
       "lv": 1
      },
      {
       "w": "不",
       "py": "bù",
       "vi": "không",
       "lv": 1
      },
      {
       "w": "好",
       "py": "hǎo",
       "vi": "tốt",
       "lv": 1
      },
      {
       "w": "很",
       "py": "hěn",
       "vi": "rất",
       "lv": 1
      },
      {
       "w": "冷",
       "py": "lěng",
       "vi": "lạnh",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "不 phủ định động từ",
       "gs": "proposed"
      },
      {
       "name": "Tính từ với 很 (không dùng 是)",
       "gs": "proposed"
      }
     ],
     "note": "天气不好 = thời tiết không tốt (不 + tính từ). Vế sau bỏ chủ ngữ: 很冷.",
     "alt": [],
     "key_points": [
      {
       "vi": "ngày mai",
       "zh_ok": [
        "明天"
       ]
      },
      {
       "vi": "thời tiết không tốt",
       "zh_ok": [
        "天气不好"
       ]
      },
      {
       "vi": "rất lạnh",
       "zh_ok": [
        "很冷"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "明天天气是不好。",
       "why": "Không dùng 是 trước 不好."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "A"
    },
    {
     "id": "T1-D-018",
     "lv": 1,
     "topic": "Giao tiếp qua điện thoại",
     "vi": "Cảm ơn bạn, tạm biệt!",
     "zh": "谢谢你，再见！",
     "py": "Xièxie nǐ, zàijiàn!",
     "back_vi": "Cảm ơn bạn, tạm biệt!",
     "vocab": [
      {
       "w": "谢谢",
       "py": "xièxie",
       "vi": "cảm ơn",
       "lv": 1
      },
      {
       "w": "再见",
       "py": "zàijiàn",
       "vi": "tạm biệt",
       "lv": 1
      }
     ],
     "grammar": [
      {
       "name": "Câu xã giao cố định (谢谢 / 不客气 / 再见)",
       "gs": "proposed"
      }
     ],
     "note": "谢谢你 = cảm ơn bạn; 再见 để kết thúc cuộc gọi.",
     "alt": [],
     "key_points": [
      {
       "vi": "cảm ơn bạn",
       "zh_ok": [
        "谢谢你"
       ]
      },
      {
       "vi": "tạm biệt",
       "zh_ok": [
        "再见"
       ]
      }
     ],
     "avoid": [
      {
       "zh": "谢你，再见。",
       "why": "Nên dùng 谢谢你 thay cho 谢你."
      }
     ],
     "over": [],
     "names": [],
     "needs_check": [],
     "reviewed": false,
     "review": {
      "zh": null,
      "vi": null
     },
     "source": "original",
     "who": "B"
    }
   ]
  }
 ]
};
