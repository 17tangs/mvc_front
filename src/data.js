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


export {headerInfo, shareData}
