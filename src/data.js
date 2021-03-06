const headerInfo = {
    logoTitle: "返回首页",
    logo: require('./img/logo.png'),
}
const headerInfoEn = {
    logoTitle: "Back to Homepage",
    logo: require('./img/logo.png'),
}

const shareData = {
    names:["wechat", "facebook", "weibo", "twitter", "linkedin","feedback"],
    data:[
        {
            name:"wechat",
            title: "分享到微信",
            link: "#",
            img: require('./img/share1.png'),
            color: "#2dc100",
        }, {
            name:"weibo",
            title: "分享到微博",
            link: "http://service.weibo.com/share/share.php?url=http://medvisioncloud.com&appkey=&title=Description&pic=&ralateUid=&language=zh_cn#_loginLayer_1534360232084",
            img: require('./img/share2.png'),
            color: "#eb192d",
        },{
            name:"facebook",
            title: "分享到脸书",
            link: "https://www.facebook.com/sharer/sharer.php?u=http%3A//medvisioncloud.com",
            img: require('./img/share3.png'),
            color: "#2f4d9e",
        },{
            name:"twitter",
            title: "分享到推特",
            link: "https://twitter.com/home?status=http%3A//medvisioncloud.com",
            img: require('./img/share4.png'),
            color: "#569ed5",
        },{
            name:"linkedin",
            title: "分享到领英",
            link: "https://www.linkedin.com/shareArticle?mini=true&url=http%3A//medvisioncloud.com&title=Medvision%20Cloud&summary=&source=",
            img: require('./img/share5.png'),
            color: "#117dc2",
        },{
            name:"feedback",
            title: "留言反馈",
            link: "#",
            img: require('./img/share6.png'),
            color: "#2dc100",
        },    ]
}

const shareDataEn = {
    names:["wechat", "facebook", "weibo", "twitter", "linkedin","feedback"],
    data:[
        {
            name:"wechat",
            title: "Share to Wechat",
            link: "#",
            img: require('./img/share1.png'),
            color: "#2dc100",
        }, {
            name:"weibo",
            title: "Share to Weibo",
            link: "http://service.weibo.com/share/share.php?url=http://medvisioncloud.com&appkey=&title=Description&pic=&ralateUid=&language=zh_cn#_loginLayer_1534360232084",
            img: require('./img/share2.png'),
            color: "#eb192d",
        },{
            name:"facebook",
            title: "Share to Facebook",
            link: "https://www.facebook.com/sharer/sharer.php?u=http%3A//medvisioncloud.com",
            img: require('./img/share3.png'),
            color: "#2f4d9e",
        },{
            name:"twitter",
            title: "Share to Twitter",
            link: "https://twitter.com/home?status=http%3A//medvisioncloud.com",
            img: require('./img/share4.png'),
            color: "#569ed5",
        },{
            name:"linkedin",
            title: "Share to Linkedin",
            link: "https://www.linkedin.com/shareArticle?mini=true&url=http%3A//medvisioncloud.com&title=Medvision%20Cloud&summary=&source=",
            img: require('./img/share5.png'),
            color: "#117dc2",
        },{
            name:"feedback",
            title: "Feedback",
            link: "#",
            img: require('./img/share6.png'),
            color: "#2dc100",
        },    ]
}

const bannerData = {
    header: "MedVisionCloud",
    start: {
        ch: "进入判读系统",
        en: "START HERE",
    },
    langs: [
    {
        name: "女性健康医视云 —— 用AI，爱自己",
        description: "免费的在线乳腺影像判读AI 由人工智能提供参考意见",
    },{
        name: "Advancing Women's Healthcare with AI",
        description: "Free Online Mammograms Interpretation using AI Suggestions for reference only",
    },{
        name:"Faire progresser la santé des femmes avec l'IA",
        description: "Interprétation gratuite de mammogrammes en ligne en utilisant des suggestions d'IA pour la référence seulement",
    },{
        name:"Avanzando en la salud de la mujer con IA",
        description: "Interpretación gratuita de mamografías en línea usando sugerencias de IA solo como referencia",
    },{
        name:"Продвижение женского здравоохранения с помощью ИИ",
        description: "Бесплатные онлайн-маммограммы Интерпретация с использованием предложений AI для справки",
    },{
        name:"تعزيز الرعاية الصحية للمرأة مع منظمة العفو الدولية",
        description: "تفسير الماموغرافيا على الانترنت مجانا باستخدام الاقتراحات الذكاء الاصطناعي للإشارة فقط",
    }
    ],
}

const aboutData = {
    bg: require('./img/aboutBG2.jpg'),
    title : "关于我们",
    subtitle: "MedVisionCloud——女性健康医视云",
    description1: "女性的健康，是人类社会发展的基石。MedVisionCloud致力于人工智能和医疗行业的深度融合，运用最前沿的人工智能技术，聚焦女性健康，旨在为全民提供免费的乳腺癌相关医疗影像人工智能辅助判读服务。",
    description2: "MedVisionCloud由Dr Lotus AI 医疗影像人工智能判读引擎提供技术支持，帮助用户自助找到疑似病灶，同时分析患有恶性肿瘤的风险，为女性乳腺癌自测自查提供有价值的参考意见。",
}

const aboutDataEn = {
    bg: require('./img/aboutBG2.jpg'),
    title : "About Us",
    subtitle: "MedVisionCloud——Advancing Women's Healthcare with AI",
    description1: "Women's health can be regarded as the foundation of the development of human society. MedVisionCloud is dedicated to the deep integration of artificial intelligence and the medical industry, using cutting-edge artificial intelligence technology to focus on women's healthcare, and aims to provide free breast-cancer-related AI-assisted medical image interpretation services for everyone.",
    description2: "MedVisionCloud is powered by Dr Lotus AI - the medical imaging artificial intelligence interpretation engine to help users find suspicious lesions and analyze the risk of malignancy. It provides valuable suggestions for self-test of breast cancer in women.",
}

const newsDataEn = {
    title: "MVC Company News",
    subtitle: "The lastest news from Medvision Cloud",
    cardData: [{
        link: "http://huajiantech.com/new.html",
        img: require('./img/u17.jpg'),
        content: "Dr Lotus AI debuted at 2018(13th) China Healthcare Information Technology and Big Data"
     },{
        link: "https://mp.weixin.qq.com/s/qQNyLgV46LgN0UGOeyyk8A",
        img: require('./img/cardBG1.jpg'),
        content: "Ultrasound? Mammogram? CT? MRI? How to choose breast examination..."
    }]
 }

const newsData = {
    title: "MVC 最近新闻",
    subtitle: "关于华建医视云的最新动态",
    cardData: [{
        link: "http://huajiantech.com/new.html",
        img: require('./img/u17.jpg'),
        content: "Dr Lotus AI 首次亮相中国卫生信息技术与健康医疗大数据应用交流大会"
     },{
        link: "https://mp.weixin.qq.com/s/qQNyLgV46LgN0UGOeyyk8A",
        img: require('./img/cardBG1.jpg'),
        content: "体检？超声+钼靶？磁共振？乳腺检查该怎么选……"
    }]
 }
const disclaimerData = {
    title: "免责声明",
    img: require('./img/bg.jpg'),
    info: [
        "MedVisionCloud旨在向普通用户提供一个免费的医疗影像人工智能判读的平台。根据我国法律，本平台特做如下声明:",
        "1. 用户可自主自愿选择是否使用本平台进行医学影像智能判读。",
        "2. 用户上传的影像资料及检测结果仅做用户自测所用, 未经用户本人同意，平台无权也不会泄露给任何一方。 ",
        "3. 经本平台判读的结果仅作为向用户本人提供参考，结果可能因影像清晰度、用户个人操作等存在误差，故确诊仍需专业影像医生鉴定。",
        "4. 本平台的技术提供方属于非医疗机构，不同于医院的病例会诊，诊断结果不能作为医院就诊的依据和凭证。",
        "5. 一切诊疗行为请在就诊医院执业医师指导下执行，造成的一切后果与本平台无关。",
        "6. 本平台由Dr Lotus AI提供技术支持，解释权归技术提供方。",
    ]

}

const disclaimerDataEn = {
    title: "Disclaimer",
    img: require('./img/bg.jpg'),
    info: [
        "MedVisionCloud is designed to provide a free cloud platform for AI-assisted medical image interpretation for everyone. Please read the following conditions/statement:",
        "1. Users can voluntarily choose whether to use this platform for medical image interpretation.",
        "2. To provide the interpretation results, we must process the image data uploaded by users. Without users' permission, the platform has no right and will not disclose any user data to any party.",
        "3. The results provided by this platform are supposed to be only used as a reference rather than diagnosis for the users. There may be errors in the interpretation results due to any reason.  Please see a professional doctor for diagnosis reports.",
        "4. The technical provider of this platform belongs to non-medical institutions. The interpretation results cannot be used as a basis for hospital visits.",
        "5. All medical treatments should be carried out under the guidance of doctors, and all consequences will be irrelevant to this platform.",
        "6. This platform reserves all rights not expressly granted to you.",
    ]

}

const footerDataEn = {
    copyright: "Copyright©2018 MedVisionCloud",
    message: "Powered by Dr Lotus AI Medical Image Interpretation Engine",
}

const footerData = {
    copyright: "Copyright©2018 MedVisionCloud",
    message: "感谢 Dr Lotus AI 医疗影像人工智能判读引擎 提供技术支持",
}
const wechatData = {
    title : "分享到微信朋友圈",
    description1: "打开微信，点击底部的“发现”,",
    description2: "使用“扫一扫”即可将网页分享至朋友圈。",
    img: require('./img/QR.png')
}

const wechatDataEn = {
    title : "Share to Wechat",
    description1: "Open wechat, and tap 'discover' at the bottom",
    description2: "Scan to share this webpage",
    img: require('./img/QR.png')
}

const contactData = {
    title: "告诉我们你的想法",
    name1: "姓",
    name2: "名",
    email: "邮箱",
    phone: "手机号码 (选填)",
    subject: "标题",
    content: "留言内容",
}

const contactDataEn = {
    title: "Tell Us What You Think",
    name1: "First Name",
    name2: "Last Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    content: "Leave a message...",
}


const ch = {
    headerInfo: headerInfo,
    shareData: shareData,
    bannerData: bannerData,
    aboutData: aboutData,
    newsData: newsData,
    disclaimerData: disclaimerData,
    footerData: footerData,
    wechatData: wechatData,
    contactData: contactData,
}


const en = {
    headerInfo: headerInfoEn,
    shareData: shareDataEn,
    bannerData: bannerData,
    aboutData: aboutDataEn,
    newsData: newsDataEn,
    disclaimerData: disclaimerDataEn,
    footerData: footerDataEn,
    wechatData: wechatDataEn,
    contactData: contactDataEn,
}


export {ch, en}
