// --- Mock Data Generators ---

export const generateCompanies = () => [
    {
        id: 'c1', name: 'Google', aliases: ['谷歌', '美商科高', 'google'], industry: '軟體/網路',
        stats: { median: 1850000, avg: 2200000, count: 450, year: 112 }
    },
    {
        id: 'c2', name: 'TSMC 台積電', aliases: ['tsmc', '台灣積體電路', '台積'], industry: '半導體/電子',
        stats: { median: 2500000, avg: 3170000, count: 60000, year: 112 }
    },
    {
        id: 'c3', name: 'MediaTek 聯發科', aliases: ['mediatek', '發哥', '聯發科技'], industry: '半導體/電子',
        stats: { median: 3000000, avg: 3800000, count: 12000, year: 112 }
    },
    { id: 'c4', name: 'Shopee 蝦皮', aliases: ['shopee', '蝦皮購物', '樂購蝦皮'], industry: '電商/零售', stats: { median: 1100000, avg: 1300000, count: 800, year: 112 } },
    { id: 'c5', name: 'LINE Taiwan', aliases: ['line', '連線', '台灣連線'], industry: '軟體/網路', stats: { median: 1600000, avg: 1900000, count: 600, year: 112 } },
    { id: 'c6', name: 'Uber', aliases: ['優步'], industry: '軟體/網路', stats: { median: 1700000, avg: 2100000, count: 200, year: 112 } },
    { id: 'c7', name: 'Foodpanda', aliases: ['富胖達', '熊貓'], industry: '軟體/網路', stats: { median: 900000, avg: 1100000, count: 500, year: 112 } },
    { id: 'c8', name: 'ASUS 華碩', aliases: ['asus', '華碩電腦'], industry: '半導體/電子', stats: { median: 1300000, avg: 1600000, count: 8000, year: 112 } },
    { id: 'c9', name: 'Acer 宏碁', aliases: ['acer'], industry: '半導體/電子', stats: { median: 1150000, avg: 1400000, count: 5000, year: 112 } },
    { id: 'c10', name: 'Trend Micro 趨勢科技', aliases: ['trend', '趨勢'], industry: '軟體/網路', stats: { median: 1550000, avg: 1800000, count: 1500, year: 112 } },
    { id: 'c11', name: 'Dcard', aliases: ['狄卡'], industry: '軟體/網路', stats: { median: 950000, avg: 1100000, count: 300, year: 112 } },
    { id: 'c12', name: 'Momo 富邦媒', aliases: ['momo', '富邦媒體'], industry: '電商/零售', stats: { median: 850000, avg: 1000000, count: 2000, year: 112 } },
    { id: 'c13', name: '國泰世華', aliases: ['cathay', '國泰金控'], industry: '金融/銀行', stats: { median: 1050000, avg: 1250000, count: 9000, year: 112 } },
    { id: 'c14', name: '中國信託', aliases: ['ctbc', '中信'], industry: '金融/銀行', stats: { median: 1100000, avg: 1350000, count: 10000, year: 112 } },
    { id: 'c15', name: 'Gogoro', aliases: ['睿能創意'], industry: '傳統製造', stats: { median: 900000, avg: 1050000, count: 2500, year: 112 } },
    { id: 'c16', name: 'Nvidia', aliases: ['輝達', 'nv'], industry: '半導體/電子', stats: { median: 3500000, avg: 4500000, count: 1500, year: 112 } },
    { id: 'c17', name: 'Microsoft', aliases: ['微軟'], industry: '軟體/網路', stats: { median: 2200000, avg: 2800000, count: 600, year: 112 } },
    { id: 'c18', name: 'ByteDance', aliases: ['字節跳動', 'tiktok', '抖音'], industry: '軟體/網路', stats: { median: 2000000, avg: 2500000, count: 300, year: 112 } },
];

export const generateDiscussionThreads = (companyName) => [
    { id: 't1', user: 'TechGuy_99', type: '推', content: `${companyName} 的風氣真的不錯，WFH 很自由。`, time: '2小時前' },
    { id: 't2', user: 'FreshMan', type: '→', content: '請問面試大概多久會收到通知？', time: '5小時前' },
    { id: 't3', user: 'AngryBird', type: '噓', content: '年終今年砍很多，不要被騙了，塊陶阿！', time: '1天前' },
    { id: 't4', user: 'HR_Helper', type: '推', content: '內部福利其實一直在增加，免費午餐回來了。', time: '2天前' },
    { id: 't5', user: 'Observer', type: '→', content: '聽說部門之間風氣差很多，要看運氣。', time: '3天前' },
];

export const generateMockData = (count = 50) => {
    const companiesList = generateCompanies();
    const titles = ['資深軟體工程師', '前端工程師', '後端工程師', '產品經理 (PM)', 'UI/UX 設計師', '行銷企劃', '資料科學家'];
    const locations = ['台北市', '新竹縣市', '遠端 (Remote)'];
    const mockContents = [
        "年終獎金很敢給，但相對壓力也大，適合想拚高薪的人。",
        "辦公室環境優美，有免費零食櫃和咖啡，WFH 政策很彈性。",
        "部門氣氛很好，前輩都很願意教學，適合新鮮人練功。",
        "常常需要跟國外團隊開會，英文能力要好，時差比較辛苦。",
        "專案時程通常很趕，加班是常態，要有心理準備。",
        "雖然底薪在業界不算頂尖，但生活品質 (WLB) 很好，準時上下班。",
        "內部流程有點繁瑣，大公司的通病，但福利制度很完善。",
        "同事技術都很強，Code Review 很嚴格，可以學到很多 best practice。",
        "面試過程有三關，白板題要多刷，考驗演算法能力。",
        "每季都有 Team Building，部門聚餐預算很高，吃得很好。",
        "升遷制度透明，只要有戰功就有機會，不怕被埋沒。",
        "使用的技術疊比較舊，維護 legacy code 比較痛苦。",
        "雖然是傳產，但正在推動數位轉型，有很多發揮空間。",
        "主管很有能力，跟著他可以學到很多專案管理技巧。"
    ];

    const data = [];
    for (let i = 0; i < count; i++) {
        const comp = companiesList[Math.floor(Math.random() * companiesList.length)];
        const baseSalary = 40000 + Math.floor(Math.random() * 160) * 1000;
        data.push({
            id: `mock-${i + 1}`,
            company: comp.name,
            industry: comp.industry,
            title: titles[Math.floor(Math.random() * titles.length)],
            department: '研發部',
            annual_package: `${Math.floor(baseSalary * 14 / 10000)}萬`,
            salary: baseSalary.toString(),
            currency: 'TWD', period: '月薪', experience: '3.0',
            location: locations[Math.floor(Math.random() * locations.length)],
            content: mockContents[Math.floor(Math.random() * mockContents.length)],
            status: 'approved',
            createdAt: { seconds: Date.now() / 1000 - Math.floor(Math.random() * 86400 * 30) },
            interactions: [],
            authorId: `mock-user-${i}`
        });
    }
    return data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
};
