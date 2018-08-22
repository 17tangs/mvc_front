const headerInfo = {
    logoTitle: "返回首页",
    logo: require('./img/logo.png'),
    langSelectTitle: "switch to English",
    langSelectContent: "中文/Eng",
}

const shareData = {
    names:["wechat", "facebook", "weibo", "twitter", "linkedin"],
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
        },
    ]
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


export {headerInfo, shareData, bannerData}
