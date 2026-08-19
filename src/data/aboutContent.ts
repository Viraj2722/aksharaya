import { Lang } from '@/context/LanguageContext'

interface Bullet {
  label: string
  text: string
}

interface AboutContent {
  whoWeAreTitle: string
  whoWeAre: string
  kathaTitle: string
  katha: string
  ichhaTitle: string
  ichhaIntro: string
  ichhaBullets: Bullet[]
  karmaTitle: string
  karma: string
}

export const aboutContent: Record<Lang, AboutContent> = {
  en: {
    whoWeAreTitle: 'Who We Are',
    whoWeAre: `'Aksharay' is an initiative undertaken by individuals dedicated to the art of lettering, in honor of the Indian tradition of scripts. It is a steadily growing organization involving designers, educators, researchers, and students who share a passion for Indian scripts, calligraphy, and typography.`,
    kathaTitle: `“Katha” – the story`,
    katha: `The journey of Aksharaya began in 1990 with two Indian teachers. What was once merely a humble start of workshops and camps, Aksharaya has today become a beacon of achievement and a source of inspiration to many. It is the unconditional contribution, love and efforts of its founders that has led this organization to find a place of respect and become a source of learning for its members.`,
    ichhaTitle: `“Ichha” – the motto`,
    ichhaIntro: `The history of Indian scripts dates back five thousand years. In India, ten different scripts have been identified, from which are derived twenty-two languages – both spoken and written. Through Aksharaya, we aim to support these languages and scripts through the three E’s:`,
    ichhaBullets: [
      { label: 'Expand', text: `Promote ‘letter’ as a concept in its various forms.` },
      { label: 'Educate', text: `Create awareness amongst people, both professionals and students, giving them opportunities learn and appreciate Indian letterforms through various activities such as camps and workshops.` },
      { label: 'Explore', text: `Facilitate research and development of Indian script, calligraphy and typography.` },
    ],
    karmaTitle: `“Karma” - the work`,
    karma: `All Indian scripts follow a common phonetic system. So, it is safe to assume that there are many hidden facts about these scripts, which we are yet to discover. To connect these scripts and their culture, there is a compelling need for an organization, and that organization is Aksharaya. Aksharaya aims to work with letterforms and related issues – script study, calligraphy, type design, typography, and literature among other fields. While its vision remains vast, Aksharaya’s mission begins with identifying and connecting resources to people.`,
  },
  mr: {
    whoWeAreTitle: 'Who We Are',
    whoWeAre: `अक्षराय हा अक्षरांना वाहिलेल्या लोकांनी भारतीय अक्षरपरंपरेच्या सन्मानार्थ केलेला एक प्रयत्न आहे. भारतीय लिप्या, सुलेखन, आणि मुद्राक्षरकला यांविषयी आवड असणाऱ्या संकल्पचित्रकार (डिझायनर), शिक्षक, संशोधक आणि विद्यार्थ्यांचा सहभाग असलेली अक्षराय ही एक दिसामासाने विस्तारणारी संस्था आहे.`,
    kathaTitle: `"कथा" - आमचा इतिहास`,
    katha: `अक्षरायचा प्रवास १९९० मध्ये दोन शिक्षकांपासून सुरू झाला. कार्यशाळा आणि शिबिरे यांपासून सुरुवात झालेली अक्षराय आज अनेकांकरता प्रेरणास्थान आहेच, मात्र एक यशस्वी संस्था म्हणूनही नावारुपाला आलेली आहे. संस्थापकांनी निष्काम भावनेने, प्रेमाने, आणि सातत्याने केलेले मार्गदर्शनामुळे अक्षराय आज एक आदराचे स्थान आणि संस्थेच्या सभासदांकरता एक मार्गदर्शनाचा स्त्रोत बनली आहे`,
    ichhaTitle: `"इच्छा" - आमचे बोधवाक्य`,
    ichhaIntro: `भारतीय भाषेतील लिप्यांचा इतिहास पाच हजार वर्षांपर्यंत मागे जातो. भाषासंशोधकांनी भारतातील दहा विविध लिप्या नमूद केलेल्या आहेत, ज्यांपासून तब्बल बावीस बोली आणि लेखी भाषांचा उगम झालेला आढळतो. अक्षरायच्या माध्यमातून आम्ही या भाषा आणि लिप्यांच्या संवर्धनाकरता तीन-कलमी कार्यक्रम राबवतो.`,
    ichhaBullets: [
      { label: 'प्रसार', text: `'अक्षरा'चा वापर एक माध्यम म्हणून विविध रुपांमध्ये करणे..` },
      { label: 'प्रशिक्षण', text: `कार्यशाळा आणि शिबीरांच्या आयोजनांतून सामान्यजनांमध्ये – विशेषत: विद्यार्थी आणि विविध कलाव्यावसायिक – भारतीय भाषा आणि लिपींविषयी जागरुकता निर्माण करणे आणि त्या शिकण्याची संधी उपलब्ध करुन देणे..` },
      { label: 'प्रज्ञाशोध', text: `भारतीय लिपी, सुलेखन आणि मुद्राक्षरकला यांतील संशोधन आणि विकासाकरता सुविधा उपलब्ध करुन देऊन प्रोत्साहन देणे..` },
    ],
    karmaTitle: `"कर्म" - आमचे कार्य`,
    karma: `भारतीय भाषांच्या सर्व लिपी एका सामायिक ध्वनि-आधारित प्रणालीनुसार आहेत. सहाजिकच, या लिपींमध्ये आपल्याला अजूनही अनभिज्ञ असलेल्या अनेक खुब्या दडलेल्या असतील या गृहितकाला वाव आहे. या लिप्यांमधील परस्परसंबंध, त्यांची सांस्कृतिक पार्श्वभूमी आणि त्यांच्यातील देवाणघेवाणीविषयी नियोजनबद्ध संशोधन होण्याची नितांत आवश्यकता आहे. अश्या संशोधनाकरता कटिबद्ध असणारी संस्था म्हणजे अक्षराय! या संस्थेच्या माध्यमातून लिपी, लिपीवैशिष्ट्ये, आणि तदानुषंगिक विषयांवर – जसे की लिपीशास्त्र, सुलेखन, मुद्राक्षर-रचना, मुद्राक्षररकला, आणि साहित्य यांविषयी अधिक संशोधन करण्याचा प्रयत्न आहे. अफाट विस्तार असलेल्या अभ्यासक्षेत्रात काम करायचे असल्याने, असीम ध्येय उराशी बाळगलेल्या अक्षरायचे कार्यधोरण मात्र सहज सोपे आहे - सुयोग्य संसाधनांची निवड करुन त्यांना लोकांपर्यंत पोहोचवणे!`,
  },
}
