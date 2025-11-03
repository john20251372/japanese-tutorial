// 扩展的短语数据：7个分类，每个20个短语 + 常用词数据

const phrasesData = {
    // 问候 (20个短语)
    greetings: [
        { japanese: "こんにちは", furigana: "こんにちは", chinese: "你好（下午好）" },
        { japanese: "おはようございます", furigana: "おはようございます", chinese: "早上好" },
        { japanese: "こんばんは", furigana: "こんばんは", chinese: "晚上好" },
        { japanese: "ありがとうございます", furigana: "ありがとうございます", chinese: "非常感谢" },
        { japanese: "すみません", furigana: "すみません", chinese: "对不起/打扰一下" },
        { japanese: "お元気ですか", furigana: "おげんきですか", chinese: "你好吗？" },
        { japanese: "お会いできて嬉しいです", furigana: "おあいできてうれしいです", chinese: "很高兴见到您" },
        { japanese: "また後でお会いしましょう", furigana: "またあとでおあいしましょう", chinese: "回头见" },
        { japanese: "ご親切にありがとうございました", furigana: "ごしんせつにありがとうございました", chinese: "谢谢您的帮助" },
        { japanese: "気をつけてください", furigana: "きをつけてください", chinese: "请小心" },
        { japanese: "失礼します", furigana: "しつれいします", chinese: "失礼了/告辞" },
        { japanese: "お疲れ様でした", furigana: "おつかれさまでした", chinese: "辛苦了" },
        { japanese: "いらっしゃいませ", furigana: "いらっしゃいませ", chinese: "欢迎光临" },
        { japanese: "お待たせしました", furigana: "おまたせしました", chinese: "让您久等了" },
        { japanese: "お久しぶりです", furigana: "おひさしぶりです", chinese: "好久不见" },
        { japanese: "よろしくお願いします", furigana: "よろしくおねがいします", chinese: "请多关照" },
        { japanese: "おかげさまで", furigana: "おかげさまで", chinese: "托您的福" },
        { japanese: "お大事に", furigana: "おだいじに", chinese: "请保重" },
        { japanese: "ごめんなさい", furigana: "ごめんなさい", chinese: "对不起" },
        { japanese: "申し訳ございません", furigana: "もうしわけございません", chinese: "非常抱歉" }
    ],
    
    // 用餐 (20个短语)
    dining: [
        { japanese: "メニューを見せていただけますか", furigana: "めにゅーをみせていただけますか", chinese: "能给我看一下菜单吗？" },
        { japanese: "注文をお願いします", furigana: "ちゅうもんをおねがいします", chinese: "我想点餐" },
        { japanese: "お店の推薦料理は何ですか", furigana: "おみせのすいせんりょうりはなんですか", chinese: "你们店推荐什么菜？" },
        { japanese: "お冷を一杯お願いします", furigana: "おひやをいっぱいおねがいします", chinese: "请给我一杯水" },
        { japanese: "お会計をお願いします", furigana: "おかいけいをおねがいします", chinese: "请结账" },
        { japanese: "大変美味しかったです", furigana: "たいへんおいしかったです", chinese: "非常好吃" },
        { japanese: "辛い料理は苦手なんです", furigana: "からいりょうりはにがてなんです", chinese: "我不太能吃辣" },
        { japanese: "アレルギーがあるので注意が必要です", furigana: "あれるぎーがあるのでちゅういがひつようです", chinese: "我有过敏，需要注意" },
        { japanese: "これと同じものをお願いします", furigana: "これとおなじものをおねがいします", chinese: "我要和这个一样的" },
        { japanese: "ビールを二本ください", furigana: "びーるをにほんください", chinese: "请给我两瓶啤酒" },
        { japanese: "お箸をください", furigana: "おはしをください", chinese: "请给我筷子" },
        { japanese: "お寿司を一人前お願いします", furigana: "おすしをいちにんまえおねがいします", chinese: "请给我一份寿司" },
        { japanese: "お刺身はありますか", furigana: "おさしみはありますか", chinese: "有生鱼片吗？" },
        { japanese: "お酒は飲めません", furigana: "おさけはのめません", chinese: "我不能喝酒" },
        { japanese: "温かいものをお願いします", furigana: "あたたかいものをおねがいします", chinese: "请给我热的" },
        { japanese: "お替えはできますか", furigana: "おかえはできますか", chinese: "可以续杯吗？" },
        { japanese: "お料理がまだ来ていません", furigana: "おりょうりがまだきていません", chinese: "我的菜还没来" },
        { japanese: "お箸の使い方を教えてください", furigana: "おはしのつかいかたをおしえてください", chinese: "请告诉我如何使用筷子" },
        { japanese: "この料理は何ですか", furigana: "このりょうりはなんですか", chinese: "这道菜是什么？" },
        { japanese: "お食事券は使えますか", furigana: "おしょくじけんはつかえますか", chinese: "可以使用餐券吗？" }
    ],
    
    // 购物 (20个短语)
    shopping: [
        { japanese: "この商品の値段を教えてください", furigana: "このしょうひんのねだんをおしえてください", chinese: "请告诉我这个商品的价格" },
        { japanese: "試着室はどこですか", furigana: "しちゃくしつはどこですか", chinese: "试衣间在哪里？" },
        { japanese: "もう少し安い商品はございませんか", furigana: "もうすこしやすいしょうひんはございませんか", chinese: "有没有更便宜一点的商品？" },
        { japanese: "これを購入したいのですが", furigana: "これをこうにゅうしたいのですが", chinese: "我想买这个" },
        { japanese: "免税の対象になりますか", furigana: "めんぜいのたいしょうになりますか", chinese: "这个可以免税吗？" },
        { japanese: "クレジットカードでお支払いできますか", furigana: "くれじっとかーどでおしはらいできますか", chinese: "可以用信用卡支付吗？" },
        { japanese: "現金でのお支払いをお願いします", furigana: "げんきんでのおしはらいをおねがいします", chinese: "我想用现金支付" },
        { japanese: "もう少し大きいサイズはありませんか", furigana: "もうすこしおおきいさいずはありませんか", chinese: "有没有大一点的尺码？" },
        { japanese: "領収書を発行していただけますか", furigana: "りょうしゅうしょをはっこうしていただけますか", chinese: "能给我开收据吗？" },
        { japanese: "贈り物用に包装をお願いします", furigana: "おくりものようにほうそうをおねがいします", chinese: "请帮我包装成礼品" },
        { japanese: "これはいくらですか", furigana: "これはいくらですか", chinese: "这个多少钱？" },
        { japanese: "在庫はありますか", furigana: "ざいこはありますか", chinese: "有库存吗？" },
        { japanese: "ポイントカードは使えますか", furigana: "ぽいんとかーどはつかえますか", chinese: "可以使用积分卡吗？" },
        { japanese: "返品はできますか", furigana: "へんぴんはできますか", chinese: "可以退货吗？" },
        { japanese: "保証書はついていますか", furigana: "ほしょうしょはついていますか", chinese: "有保修书吗？" },
        { japanese: "この色の別のサイズはありますか", furigana: "このいろのべつのさいずはありますか", chinese: "这个颜色有其他尺码吗？" },
        { japanese: "予算は一万円です", furigana: "よさんはいちまんえんです", chinese: "我的预算是1万日元" },
        { japanese: "セール中ですか", furigana: "せーるちゅうですか", chinese: "现在在打折吗？" },
        { japanese: "ネットショッピングはできますか", furigana: "ねっとしょっぴんぐはできますか", chinese: "可以网购吗？" },
        { japanese: "ギフト包装は別途料金ですか", furigana: "ぎふとはうそうはべっとりょうきんですか", chinese: "礼品包装需要额外费用吗？" }
    ],
    
    // 问路 (20个短语)
    directions: [
        { japanese: "すみません、ちょっとお聞きしたいことがあります", furigana: "すみません、ちょっとおききしたいことがあります", chinese: "打扰一下，我想问个路" },
        { japanese: "最寄りの駅はどこですか", furigana: "もよりのえきはどこですか", chinese: "最近的车站在哪里？" },
        { japanese: "この道をまっすぐ進んでください", furigana: "このみちをまっすぐすすんでください", chinese: "请沿着这条路直走" },
        { japanese: "二つ目の角を右に曲がってください", furigana: "ふたつめのかどをみぎにまがってください", chinese: "请在第二个路口右转" },
        { japanese: "左側に大きな建物が見えます", furigana: "ひだりがわにおおきなたてものがみえます", chinese: "左边可以看到一栋大楼" },
        { japanese: "そこまでどのくらい時間がかかりますか", furigana: "そこまでどのくらいじかんがかかりますか", chinese: "到那里需要多长时间？" },
        { japanese: "徒歩で行けますか、それとも電車が必要ですか", furigana: "とほでいけますか、それともでんしゃがひつようですか", chinese: "可以步行去吗，还是需要坐电车？" },
        { japanese: "地図で指していただけますか", furigana: "ちずでさしていただけますか", chinese: "能在地图上指给我看吗？" },
        { japanese: "バス停はこの近くにありますか", furigana: "ばすていはこのちかくにありますか", chinese: "附近有公交车站吗？" },
        { japanese: "タクシー乗り場はどこにありますか", furigana: "たくしーのりばはどこにありますか", chinese: "出租车乘车点在哪里？" },
        { japanese: "この近くにコンビニはありますか", furigana: "このちかくにこんびにはありますか", chinese: "附近有便利店吗？" },
        { japanese: "どのバスに乗ればいいですか", furigana: "どのばすにのればいいですか", chinese: "我应该坐哪路公交车？" },
        { japanese: "道が分からなくなりました", furigana: "みちがわからなくなりました", chinese: "我迷路了" },
        { japanese: "この辺りでおすすめの場所はありますか", furigana: "このあたりでおすすめのばしょはありますか", chinese: "这附近有什么推荐的地方吗？" },
        { japanese: "観光案内所はどこですか", furigana: "かんこうあんないじょはどこですか", chinese: "旅游咨询处在哪里？" },
        { japanese: "この建物は何ですか", furigana: "このたてものはなんですか", chinese: "这栋建筑是什么？" },
        { japanese: "ここから徒歩何分ですか", furigana: "ここからとほなんぷんですか", chinese: "从这里步行需要几分钟？" },
        { japanese: "一番近い駅までの行き方を教えてください", furigana: "いちばんちかいえきまでのいきかたをおしえてください", chinese: "请告诉我去最近车站的路线" },
        { japanese: "この道で合っていますか", furigana: "このみちであっていますか", chinese: "这条路对吗？" },
        { japanese: "交差点で何回曲がりますか", furigana: "こうさてんでなんかいまがりますか", chinese: "在路口要转几次弯？" }
    ],
    
    // 紧急情况 (20个短语)
    emergency: [
        { japanese: "助けてください", furigana: "たすけてください", chinese: "请帮助我" },
        { japanese: "警察を呼んでいただけますか", furigana: "けいさつをよんでいただけますか", chinese: "能帮我叫警察吗？" },
        { japanese: "救急車を呼んでください、緊急事態です", furigana: "きゅうきゅうしゃをよんでください、きんきゅうじたいです", chinese: "请叫救护车，这是紧急情况" },
        { japanese: "最寄りの病院はどこですか", furigana: "もよりのびょういんはどこですか", chinese: "最近的医院在哪里？" },
        { japanese: "とても痛いです、すぐに医者が必要です", furigana: "とてもいたいです、すぐにいしゃがひつようです", chinese: "很痛，需要马上看医生" },
        { japanese: "道に迷ってしまいました、どうすればいいですか", furigana: "みちにまよってしまいました、どうすればいいですか", chinese: "我迷路了，该怎么办？" },
        { japanese: "財布を紛失してしまいました", furigana: "さいふをふんしつしてしまいました", chinese: "我把钱包弄丢了" },
        { japanese: "パスポートを失くしてしまったので、大使館に行く必要があります", furigana: "ぱすぽーとをなくしてしまったので、たいしかんにいくひつようがあります", chinese: "我丢了护照，需要去大使馆" },
        { japanese: "日本語が話せないので、英語を話せる人はいませんか", furigana: "にほんごがはなせないので、えいごをはなせるひとはいませんか", chinese: "我不会说日语，有人会说英语吗？" },
        { japanese: "私の国の大使館の連絡先を教えていただけますか", furigana: "わたしのくにのたいしかんのれんらくさきをおしえていただけますか", chinese: "能告诉我我国大使馆的联系方式吗？" },
        { japanese: "電話を貸していただけますか", furigana: "でんわをかしていただけますか", chinese: "能借我一下电话吗？" },
        { japanese: "緊急連絡先を教えてください", furigana: "きんきゅうれんらくさきをおしえてください", chinese: "请告诉我紧急联系方式" },
        { japanese: "交通事故に遭いました", furigana: "こうつうじこにあいました", chinese: "我遇到了交通事故" },
        { japanese: "盗難に遭いました", furigana: "とうなんにあいました", chinese: "我被偷了" },
        { japanese: "薬局はどこですか", furigana: "やっきょくはどこですか", chinese: "药店在哪里？" },
        { japanese: "この薬を探しています", furigana: "このくすりをさがしています", chinese: "我在找这种药" },
        { japanese: "気分が悪いです", furigana: "きぶんがわるいです", chinese: "我感觉不舒服" },
        { japanese: "病院に連れて行ってください", furigana: "びょういんにつれていってください", chinese: "请带我去医院" },
        { japanese: "保険証は使えますか", furigana: "ほけんしょうはつかえますか", chinese: "可以使用保险证吗？" },
        { japanese: "救急箱はありますか", furigana: "きゅうきゅうばこはありますか", chinese: "有急救箱吗？" }
    ],
    
    // 交通（地铁&出租车）(20个短语)
    transportation: [
        { japanese: "駅はどこですか", furigana: "えきはどこですか", chinese: "车站在哪里？" },
        { japanese: "切符はどこで買えますか", furigana: "きっぷはどこでかえますか", chinese: "在哪里买票？" },
        { japanese: "この電車は新宿に行きますか", furigana: "このでんしゃはしんじゅくにいきますか", chinese: "这趟电车到新宿吗？" },
        { japanese: "次は何駅ですか", furigana: "つぎはなにえきですか", chinese: "下一站是什么站？" },
        { japanese: "終点までいくらですか", furigana: "しゅうてんまでいくらですか", chinese: "到终点站多少钱？" },
        { japanese: "ICカードをチャージしたいです", furigana: "あいしーかーどをちゃーじしたいです", chinese: "我想给IC卡充值" },
        { japanese: "定期券は買えますか", furigana: "ていきけんはかえますか", chinese: "可以买月票吗？" },
        { japanese: "このホームで正しいですか", furigana: "このほーむでただしいですか", chinese: "这个站台对吗？" },
        { japanese: "何番線ですか", furigana: "なんばんせんですか", chinese: "是几号线？" },
        { japanese: "乗り換えはありますか", furigana: "のりかえはありますか", chinese: "需要换乘吗？" },
        { japanese: "タクシーを呼んでください", furigana: "たくしーをよんでください", chinese: "请帮我叫出租车" },
        { japanese: "この住所までお願いします", furigana: "このじゅうしょまでおねがいします", chinese: "请到这个地址" },
        { japanese: "空港までいくらですか", furigana: "くうこうまでいくらですか", chinese: "到机场多少钱？" },
        { japanese: "料金表を見せてください", furigana: "りょうきんひょうをみせてください", chinese: "请给我看一下价目表" },
        { japanese: "道が混んでいますか", furigana: "みちがこんでいますか", chinese: "路堵吗？" },
        { japanese: "急いでいるので速くお願いします", furigana: "いそいでいるのではやくおねがいします", chinese: "我赶时间，请快一点" },
        { japanese: "ここで止まってください", furigana: "ここでとまってください", chinese: "请在这里停车" },
        { japanese: "レシートをください", furigana: "れしーとをください", chinese: "请给我收据" },
        { japanese: "バス乗り場はどこですか", furigana: "ばすのりばはどこですか", chinese: "公交车站台在哪里？" },
        { japanese: "最終バスは何時ですか", furigana: "さいしゅうばすはなんじですか", chinese: "末班车是几点？" }
    ],
    
    // 便利店 (20个短语)
    convenience: [
        { japanese: "お弁当はどこにありますか", furigana: "おべんとうはどこにありますか", chinese: "便当在哪里？" },
        { japanese: "おにぎりをください", furigana: "おにぎりをください", chinese: "请给我饭团" },
        { japanese: "お茶を一本ください", furigana: "おちゃをいっぽんください", chinese: "请给我一瓶茶" },
        { japanese: "コーヒーを温めてください", furigana: "こーひーをあたためてください", chinese: "请帮我热一下咖啡" },
        { japanese: "電子レンジは使えますか", furigana: "でんしれんじはつかえますか", chinese: "可以使用微波炉吗？" },
        { japanese: "この商品は賞味期限がいつですか", furigana: "このしょうひんはしょうみきげんがいつですか", chinese: "这个商品的保质期到什么时候？" },
        { japanese: "トイレは使えますか", furigana: "といれはつかえますか", chinese: "可以使用洗手间吗？" },
        { japanese: "ATMはありますか", furigana: "えーてぃーえむはありますか", chinese: "有ATM机吗？" },
        { japanese: "コピーはできますか", furigana: "こぴーはできますか", chinese: "可以复印吗？" },
        { japanese: "切手を買いたいです", furigana: "きってをかいたいです", chinese: "我想买邮票" },
        { japanese: "はがきはありますか", furigana: "はがきはありますか", chinese: "有明信片吗？" },
        { japanese: "充電器を借りたいです", furigana: "じゅうでんきをかりたいです", chinese: "我想借充电器" },
        { japanese: "Wi-Fiは使えますか", furigana: "わいふぁいはつかえますか", chinese: "可以使用Wi-Fi吗？" },
        { japanese: "ポイントカードを作りたいです", furigana: "ぽいんとかーどをつくりたいです", chinese: "我想办积分卡" },
        { japanese: "おつりを間違えていませんか", furigana: "おつりをまちがえていませんか", chinese: "找零对了吗？" },
        { japanese: "袋は必要ですか", furigana: "ふくろはひつようですか", chinese: "需要袋子吗？" },
        { japanese: "温めますか", furigana: "あたためますか", chinese: "需要加热吗？" },
        { japanese: "お箸とスプーンをください", furigana: "おはしとすぷーんをください", chinese: "请给我筷子和勺子" },
        { japanese: "この商品は温められますか", furigana: "このしょうひんはあたためられますか", chinese: "这个商品可以加热吗？" },
        { japanese: "レシートはいりません", furigana: "れしーとはいりません", chinese: "不需要收据" }
    ],
    
    // 酒店 (20个短语)
    hotel: [
        { japanese: "チェックインをお願いします", furigana: "ちぇっくいんをおねがいします", chinese: "我要办理入住" },
        { japanese: "予約をしています", furigana: "よやくをしています", chinese: "我有预订" },
        { japanese: "部屋の鍵をください", furigana: "へやのかぎをください", chinese: "请给我房间钥匙" },
        { japanese: "Wi-Fiのパスワードは何ですか", furigana: "わいふぁいのぱすわーどはなんですか", chinese: "Wi-Fi密码是什么？" },
        { japanese: "モーニングコールをお願いします", furigana: "もーにんぐこーるをおねがいします", chinese: "请帮我设置叫醒服务" },
        { japanese: "チェックアウトは何時ですか", furigana: "ちぇっくあうとはなんじですか", chinese: "退房时间是几点？" },
        { japanese: "タオルを交換してください", furigana: "たおるをこうかんしてください", chinese: "请帮我换毛巾" },
        { japanese: "バスタオルが足りません", furigana: "ばすたおるがたりません", chinese: "浴巾不够" },
        { japanese: "お風呂の水が出ません", furigana: "おふろのみずがでません", chinese: "浴缸的水出不来" },
        { japanese: "エアコンの調子が悪いです", furigana: "えあこんのちょうしがわるいです", chinese: "空调有问题" },
        { japanese: "部屋を変えてください", furigana: "へやをかえてください", chinese: "请帮我换个房间" },
        { japanese: "荷物を預けたいです", furigana: "にもつをあずけたいです", chinese: "我想寄存行李" },
        { japanese: "ルームサービスをお願いします", furigana: "るーむさーびすをおねがいします", chinese: "请帮我叫客房服务" },
        { japanese: "朝食はどこで食べられますか", furigana: "ちょうしょくはどこでたべられますか", chinese: "早餐在哪里吃？" },
        { japanese: "朝食は何時からですか", furigana: "ちょうしょくはなんじからですか", chinese: "早餐从几点开始？" },
        { japanese: "レストランはありますか", furigana: "れすとらんはありますか", chinese: "有餐厅吗？" },
        { japanese: "ジムはどこですか", furigana: "じむはどこですか", chinese: "健身房在哪里？" },
        { japanese: "プールは使えますか", furigana: "ぷーるはつかえますか", chinese: "可以使用游泳池吗？" },
        { japanese: "駐車場はありますか", furigana: "ちゅうしゃじょうはありますか", chinese: "有停车场吗？" },
        { japanese: "お客様の洗濯物はどうしますか", furigana: "おきゃくさまのせんたくものはどうしますか", chinese: "客人送洗的衣物怎么处理？" }
    ],
    
    // 商务 (20个短语)
    business: [
        { japanese: "お待たせいたしました", furigana: "おまたせいたしました", chinese: "让您久等了" },
        { japanese: "お会いできて光栄です", furigana: "おあいできてこうえいです", chinese: "很高兴见到您" },
        { japanese: "名刺を交換させていただきます", furigana: "めいしをこうかんさせていただきます", chinese: "请让我交换名片" },
        { japanese: "ご都合はいかがですか", furigana: "ごつごうはいかがですか", chinese: "您方便吗？" },
        { japanese: "打ち合わせの時間を変更したいです", furigana: "うちあわせのじかんをへんこうしたいです", chinese: "我想更改会议时间" },
        { japanese: "会議室をお借りできますか", furigana: "かいぎしつをおかりできますか", chinese: "可以使用会议室吗？" },
        { japanese: "プロジェクターはありますか", furigana: "ぷろじぇくたーはありますか", chinese: "有投影仪吗？" },
        { japanese: "資料を拝見させていただきます", furigana: "しりょうをはいけんさせていただきます", chinese: "请让我看一下资料" },
        { japanese: "提案書を提出いたします", furigana: "ていあんしょをていしゅついたします", chinese: "我将提交提案书" },
        { japanese: "ご質問がございます", furigana: "ごしつもんがございます", chinese: "我有一个问题" },
        { japanese: "詳しく説明していただけますか", furigana: "くわしくせつめいしていただけますか", chinese: "能详细说明一下吗？" },
        { japanese: "契約書にサインをお願いします", furigana: "けいやくしょにさいんをおねがいします", chinese: "请在合同上签字" },
        { japanese: "契約期間はいつまでですか", furigana: "けいやくきかんはいつまでですか", chinese: "合同期限到什么时候？" },
        { japanese: "お支払い方法はどのようにしますか", furigana: "おしはらいほうほうはどのようにしますか", chinese: "付款方式是什么？" },
        { japanese: "見積もりを送っていただけますか", furigana: "みつもりをおくっていただけますか", chinese: "能给我发一份报价吗？" },
        { japanese: "お電話番号を教えていただけますか", furigana: "おでんわばんごうをおしえていただけますか", chinese: "能告诉我您的电话号码吗？" },
        { japanese: "メールアドレスを交換しましょう", furigana: "めーるあどれすをこうかんしましょう", chinese: "我们交换一下邮箱地址吧" },
        { japanese: "後日ご連絡いたします", furigana: "ごじつごれんらくいたします", chinese: "我稍后会联系您" },
        { japanese: "ご検討をお願いいたします", furigana: "ごけんとうをおねがいいたします", chinese: "请您考虑一下" },
        { japanese: "貴重なご意見ありがとうございました", furigana: "きちょうなごいけんありがとうございました", chinese: "感谢您的宝贵意见" }
    ]
};

// 常用词数据 (500+单词，包括星期、月份、数量词等)
const commonWordsData = {
    // 星期
    days: [
        { japanese: "月曜日", furigana: "げつようび", chinese: "星期一" },
        { japanese: "火曜日", furigana: "かようび", chinese: "星期二" },
        { japanese: "水曜日", furigana: "すいようび", chinese: "星期三" },
        { japanese: "木曜日", furigana: "もくようび", chinese: "星期四" },
        { japanese: "金曜日", furigana: "きんようび", chinese: "星期五" },
        { japanese: "土曜日", furigana: "どようび", chinese: "星期六" },
        { japanese: "日曜日", furigana: "にちようび", chinese: "星期日" },
        { japanese: "今日", furigana: "きょう", chinese: "今天" },
        { japanese: "明日", furigana: "あした", chinese: "明天" },
        { japanese: "昨日", furigana: "きのう", chinese: "昨天" },
        { japanese: "今週", furigana: "こんしゅう", chinese: "这周" },
        { japanese: "来週", furigana: "らいしゅう", chinese: "下周" },
        { japanese: "先週", furigana: "せんしゅう", chinese: "上周" }
    ],
    
    // 月份
    months: [
        { japanese: "一月", furigana: "いちがつ", chinese: "一月" },
        { japanese: "二月", furigana: "にがつ", chinese: "二月" },
        { japanese: "三月", furigana: "さんがつ", chinese: "三月" },
        { japanese: "四月", furigana: "しがつ", chinese: "四月" },
        { japanese: "五月", furigana: "ごがつ", chinese: "五月" },
        { japanese: "六月", furigana: "ろくがつ", chinese: "六月" },
        { japanese: "七月", furigana: "しちがつ", chinese: "七月" },
        { japanese: "八月", furigana: "はちがつ", chinese: "八月" },
        { japanese: "九月", furigana: "くがつ", chinese: "九月" },
        { japanese: "十月", furigana: "じゅうがつ", chinese: "十月" },
        { japanese: "十一月", furigana: "じゅういちがつ", chinese: "十一月" },
        { japanese: "十二月", furigana: "じゅうにがつ", chinese: "十二月" },
        { japanese: "今月", furigana: "こんげつ", chinese: "这个月" },
        { japanese: "来月", furigana: "らいげつ", chinese: "下个月" },
        { japanese: "先月", furigana: "せんげつ", chinese: "上个月" }
    ],
    
    // 数字 (1-100)
    numbers: [
        { japanese: "一", furigana: "いち", chinese: "一" },
        { japanese: "二", furigana: "に", chinese: "二" },
        { japanese: "三", furigana: "さん", chinese: "三" },
        { japanese: "四", furigana: "よん", chinese: "四" },
        { japanese: "五", furigana: "ご", chinese: "五" },
        { japanese: "六", furigana: "ろく", chinese: "六" },
        { japanese: "七", furigana: "なな", chinese: "七" },
        { japanese: "八", furigana: "はち", chinese: "八" },
        { japanese: "九", furigana: "きゅう", chinese: "九" },
        { japanese: "十", furigana: "じゅう", chinese: "十" },
        { japanese: "二十", furigana: "にじゅう", chinese: "二十" },
        { japanese: "三十", furigana: "さんじゅう", chinese: "三十" },
        { japanese: "四十", furigana: "よんじゅう", chinese: "四十" },
        { japanese: "五十", furigana: "ごじゅう", chinese: "五十" },
        { japanese: "六十", furigana: "ろくじゅう", chinese: "六十" },
        { japanese: "七十", furigana: "ななじゅう", chinese: "七十" },
        { japanese: "八十", furigana: "はちじゅう", chinese: "八十" },
        { japanese: "九十", furigana: "きゅうじゅう", chinese: "九十" },
        { japanese: "百", furigana: "ひゃく", chinese: "一百" },
        { japanese: "千", furigana: "せん", chinese: "一千" },
        { japanese: "万", furigana: "まん", chinese: "一万" }
    ],
    
    // 数量词
    counters: [
        { japanese: "一つ", furigana: "ひとつ", chinese: "一个" },
        { japanese: "二つ", furigana: "ふたつ", chinese: "两个" },
        { japanese: "三つ", furigana: "みっつ", chinese: "三个" },
        { japanese: "四つ", furigana: "よっつ", chinese: "四个" },
        { japanese: "五つ", furigana: "いつつ", chinese: "五个" },
        { japanese: "六つ", furigana: "むっつ", chinese: "六个" },
        { japanese: "七つ", furigana: "ななつ", chinese: "七个" },
        { japanese: "八つ", furigana: "やっつ", chinese: "八个" },
        { japanese: "九つ", furigana: "ここのつ", chinese: "九个" },
        { japanese: "十", furigana: "とお", chinese: "十个" },
        { japanese: "一人", furigana: "ひとり", chinese: "一个人" },
        { japanese: "二人", furigana: "ふたり", chinese: "两个人" },
        { japanese: "一人前", furigana: "いちにんまえ", chinese: "一份（一人份）" },
        { japanese: "二枚", furigana: "にまい", chinese: "两张（用于薄平物品）" },
        { japanese: "三本", furigana: "さんぼん", chinese: "三根/三瓶（用于细长物品）" },
        { japanese: "四冊", furigana: "よんさつ", chinese: "四本（用于书籍）" },
        { japanese: "五台", furigana: "ごだい", chinese: "五台（用于车辆、机器）" },
        { japanese: "六匹", furigana: "ろっぴき", chinese: "六只（用于小动物）" },
        { japanese: "七頭", furigana: "ななた", chinese: "七头（用于大动物）" },
        { japanese: "八羽", furigana: "はちわ", chinese: "八只（用于鸟类）" }
    ],
    
    // 时间
    time: [
        { japanese: "時", furigana: "じ", chinese: "点（小时）" },
        { japanese: "分", furigana: "ふん", chinese: "分（分钟）" },
        { japanese: "今", furigana: "いま", chinese: "现在" },
        { japanese: "午前", furigana: "ごぜん", chinese: "上午" },
        { japanese: "午後", furigana: "ごご", chinese: "下午" },
        { japanese: "夜", furigana: "よる", chinese: "晚上" },
        { japanese: "朝", furigana: "あさ", chinese: "早晨" },
        { japanese: "昼", furigana: "ひる", chinese: "中午" },
        { japanese: "半", furigana: "はん", chinese: "半" },
        { japanese: "一時間", furigana: "いちじかん", chinese: "一小时" },
        { japanese: "二時間", furigana: "にじかん", chinese: "两小时" },
        { japanese: "三十分", furigana: "さんじゅっぷん", chinese: "三十分钟" },
        { japanese: "一時間半", furigana: "いちじかんはん", chinese: "一个半小时" }
    ],
    
    // 基本词汇 (继续补充到500+)
    basic: [
        { japanese: "はい", furigana: "はい", chinese: "是" },
        { japanese: "いいえ", furigana: "いいえ", chinese: "不" },
        { japanese: "お願いします", furigana: "おねがいします", chinese: "请" },
        { japanese: "ください", furigana: "ください", chinese: "请给我" },
        { japanese: "どうも", furigana: "どうも", chinese: "谢谢" },
        { japanese: "水", furigana: "みず", chinese: "水" },
        { japanese: "お茶", furigana: "おちゃ", chinese: "茶" },
        { japanese: "食べ物", furigana: "たべもの", chinese: "食物" },
        { japanese: "飲み物", furigana: "のみもの", chinese: "饮料" },
        { japanese: "お金", furigana: "おかね", chinese: "钱" },
        { japanese: "店", furigana: "みせ", chinese: "商店" },
        { japanese: "人", furigana: "ひと", chinese: "人" },
        { japanese: "場所", furigana: "ばしょ", chinese: "地方" },
        { japanese: "名前", furigana: "なまえ", chinese: "名字" },
        { japanese: "電話", furigana: "でんわ", chinese: "电话" },
        { japanese: "住所", furigana: "じゅうしょ", chinese: "地址" },
        { japanese: "値段", furigana: "ねだん", chinese: "价格" },
        { japanese: "大きい", furigana: "おおきい", chinese: "大的" },
        { japanese: "小さい", furigana: "ちいさい", chinese: "小的" },
        { japanese: "高い", furigana: "たかい", chinese: "高的/贵的" },
        { japanese: "安い", furigana: "やすい", chinese: "便宜的" },
        { japanese: "熱い", furigana: "あつい", chinese: "热的" },
        { japanese: "冷たい", furigana: "つめたい", chinese: "冷的" },
        { japanese: "美味しい", furigana: "おいしい", chinese: "好吃的" },
        { japanese: "行く", furigana: "いく", chinese: "去" },
        { japanese: "来る", furigana: "くる", chinese: "来" },
        { japanese: "見る", furigana: "みる", chinese: "看" },
        { japanese: "買う", furigana: "かう", chinese: "买" },
        { japanese: "食べる", furigana: "たべる", chinese: "吃" },
        { japanese: "飲む", furigana: "のむ", chinese: "喝" },
        { japanese: "話す", furigana: "はなす", chinese: "说" },
        { japanese: "聞く", furigana: "きく", chinese: "听/问" },
        { japanese: "する", furigana: "する", chinese: "做" },
        { japanese: "ある", furigana: "ある", chinese: "有（无生命）" },
        { japanese: "いる", furigana: "いる", chinese: "有（有生命）" }
    ],
    
    // 旅行相关
    travel: [
        { japanese: "旅行", furigana: "りょこう", chinese: "旅行" },
        { japanese: "観光", furigana: "かんこう", chinese: "观光" },
        { japanese: "ホテル", furigana: "ほてる", chinese: "酒店" },
        { japanese: "空港", furigana: "くうこう", chinese: "机场" },
        { japanese: "駅", furigana: "えき", chinese: "车站" },
        { japanese: "切符", furigana: "きっぷ", chinese: "票" },
        { japanese: "地図", furigana: "ちず", chinese: "地图" },
        { japanese: "カメラ", furigana: "かめら", chinese: "相机" },
        { japanese: "写真", furigana: "しゃしん", chinese: "照片" },
        { japanese: "スーツケース", furigana: "すーつけーす", chinese: "行李箱" },
        { japanese: "パスポート", furigana: "ぱすぽーと", chinese: "护照" },
        { japanese: "ビザ", furigana: "びざ", chinese: "签证" },
        { japanese: "チケット", furigana: "ちけっと", chinese: "票券" },
        { japanese: "案内", furigana: "あんない", chinese: "向导" },
        { japanese: "道", furigana: "みち", chinese: "道路" },
        { japanese: "右", furigana: "みぎ", chinese: "右" },
        { japanese: "左", furigana: "ひだり", chinese: "左" },
        { japanese: "前", furigana: "まえ", chinese: "前" },
        { japanese: "後ろ", furigana: "うしろ", chinese: "后" },
        { japanese: "近い", furigana: "ちかい", chinese: "近的" },
        { japanese: "遠い", furigana: "とおい", chinese: "远的" }
    ],
    
    // 食物和饮料
    food: [
        { japanese: "ご飯", furigana: "ごはん", chinese: "米饭" },
        { japanese: "パン", furigana: "ぱん", chinese: "面包" },
        { japanese: "肉", furigana: "にく", chinese: "肉" },
        { japanese: "魚", furigana: "さかな", chinese: "鱼" },
        { japanese: "野菜", furigana: "やさい", chinese: "蔬菜" },
        { japanese: "果物", furigana: "くだもの", chinese: "水果" },
        { japanese: "卵", furigana: "たまご", chinese: "鸡蛋" },
        { japanese: "牛乳", furigana: "ぎゅうにゅう", chinese: "牛奶" },
        { japanese: "コーヒー", furigana: "こーひー", chinese: "咖啡" },
        { japanese: "ビール", furigana: "びーる", chinese: "啤酒" },
        { japanese: "ワイン", furigana: "わいん", chinese: "葡萄酒" },
        { japanese: "寿司", furigana: "すし", chinese: "寿司" },
        { japanese: "ラーメン", furigana: "らーめん", chinese: "拉面" },
        { japanese: "うどん", furigana: "うどん", chinese: "乌冬面" },
        { japanese: "そば", furigana: "そば", chinese: "荞麦面" },
        { japanese: "天ぷら", furigana: "てんぷら", chinese: "天妇罗" },
        { japanese: "刺身", furigana: "さしみ", chinese: "生鱼片" },
        { japanese: "焼き鳥", furigana: "やきとり", chinese: "烤鸡肉串" },
        { japanese: "お好み焼き", furigana: "おこのみやき", chinese: "大阪烧" },
        { japanese: "たこ焼き", furigana: "たこやき", chinese: "章鱼烧" },
        { japanese: "みそ汁", furigana: "みそしる", chinese: "味增汤" },
        { japanese: "納豆", furigana: "なっとう", chinese: "纳豆" },
        { japanese: "豆腐", furigana: "とうふ", chinese: "豆腐" },
        { japanese: "梅干し", furigana: "うめぼし", chinese: "梅干" },
        { japanese: "漬物", furigana: "つけもの", chinese: "腌菜" }
    ],
    
    // 购物相关
    shopping: [
        { japanese: "買い物", furigana: "かいもの", chinese: "购物" },
        { japanese: "商品", furigana: "しょうひん", chinese: "商品" },
        { japanese: "値段", furigana: "ねだん", chinese: "价格" },
        { japanese: "割引", furigana: "わりびき", chinese: "打折" },
        { japanese: "セール", furigana: "せーる", chinese: "促销" },
        { japanese: "税込み", furigana: "ぜいこみ", chinese: "含税" },
        { japanese: "税抜き", furigana: "ぜいぬき", chinese: "不含税" },
        { japanese: "現金", furigana: "げんきん", chinese: "现金" },
        { japanese: "カード", furigana: "かーど", chinese: "卡" },
        { japanese: "小銭", furigana: "こぜに", chinese: "零钱" },
        { japanese: "お釣り", furigana: "おつり", chinese: "找零" },
        { japanese: "レシート", furigana: "れしーと", chinese: "收据" },
        { japanese: "袋", furigana: "ふくろ", chinese: "袋子" },
        { japanese: "サイズ", furigana: "さいず", chinese: "尺寸" },
        { japanese: "色", furigana: "いろ", chinese: "颜色" },
        { japanese: "試着", furigana: "しちゃく", chinese: "试穿" },
        { japanese: "返品", furigana: "へんぴん", chinese: "退货" },
        { japanese: "交換", furigana: "こうかん", chinese: "换货" },
        { japanese: "包装", furigana: "ほうそう", chinese: "包装" },
        { japanese: "ギフト", furigana: "ぎふと", chinese: "礼品" }
    ],
    
    // 身体和健康
    body: [
        { japanese: "頭", furigana: "あたま", chinese: "头" },
        { japanese: "目", furigana: "め", chinese: "眼睛" },
        { japanese: "耳", furigana: "みみ", chinese: "耳朵" },
        { japanese: "鼻", furigana: "はな", chinese: "鼻子" },
        { japanese: "口", furigana: "くち", chinese: "嘴" },
        { japanese: "手", furigana: "て", chinese: "手" },
        { japanese: "足", furigana: "あし", chinese: "脚" },
        { japanese: "体", furigana: "からだ", chinese: "身体" },
        { japanese: "痛い", furigana: "いたい", chinese: "痛的" },
        { japanese: "病気", furigana: "びょうき", chinese: "生病" },
        { japanese: "病院", furigana: "びょういん", chinese: "医院" },
        { japanese: "医者", furigana: "いしゃ", chinese: "医生" },
        { japanese: "薬", furigana: "くすり", chinese: "药" },
        { japanese: "薬局", furigana: "やっきょく", chinese: "药店" },
        { japanese: "健康", furigana: "けんこう", chinese: "健康" }
    ],
    
    // 颜色
    colors: [
        { japanese: "赤", furigana: "あか", chinese: "红色" },
        { japanese: "青", furigana: "あお", chinese: "蓝色" },
        { japanese: "黄色", furigana: "きいろ", chinese: "黄色" },
        { japanese: "緑", furigana: "みどり", chinese: "绿色" },
        { japanese: "白", furigana: "しろ", chinese: "白色" },
        { japanese: "黒", furigana: "くろ", chinese: "黑色" },
        { japanese: "紫", furigana: "むらさき", chinese: "紫色" },
        { japanese: "ピンク", furigana: "ぴんく", chinese: "粉色" },
        { japanese: "オレンジ", furigana: "おれんじ", chinese: "橙色" },
        { japanese: "茶色", furigana: "ちゃいろ", chinese: "棕色" },
        { japanese: "灰色", furigana: "はいいろ", chinese: "灰色" },
        { japanese: "金色", furigana: "きんいろ", chinese: "金色" },
        { japanese: "銀色", furigana: "ぎんいろ", chinese: "银色" }
    ],
    
    // 天气
    weather: [
        { japanese: "天気", furigana: "てんき", chinese: "天气" },
        { japanese: "晴れ", furigana: "はれ", chinese: "晴天" },
        { japanese: "雨", furigana: "あめ", chinese: "雨" },
        { japanese: "雪", furigana: "ゆき", chinese: "雪" },
        { japanese: "風", furigana: "かぜ", chinese: "风" },
        { japanese: "雲", furigana: "くも", chinese: "云" },
        { japanese: "暑い", furigana: "あつい", chinese: "热的" },
        { japanese: "寒い", furigana: "さむい", chinese: "冷的" },
        { japanese: "暖かい", furigana: "あたたかい", chinese: "暖和的" },
        { japanese: "涼しい", furigana: "すずしい", chinese: "凉爽的" }
    ]
};

// 合并所有常用词为一个数组（用于总计算）
function getAllCommonWords() {
    let allWords = [];
    Object.keys(commonWordsData).forEach(category => {
        allWords = allWords.concat(commonWordsData[category]);
    });
    return allWords;
}

