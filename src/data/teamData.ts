import { Lang } from '@/context/LanguageContext'

export interface TeamMember {
  id: number
  image: string
  name: Record<Lang, string>
  bio: Record<Lang, string>
}

export const teamIntro: Record<Lang, string> = {
  en: `Aksharaya’s core committee comprises educators and art professionals who possess unparalleled experience and expertise in Indian typography and calligraphy. A robust executive committee and a dedicated team of volunteers consistently strengthen the core committee.`,
  mr: `अक्षरायच्या प्रमुख समिती सदस्यांमध्ये भारतीय अक्षररचना आणि सुलेखनाचा अजोड अनुभव आणि कौशल्य असलेल्या शिक्षक आणि कला-व्यावसायिकांचा समावेश आहे. एक खंबीर कार्यकारी समिती आणि निष्ठावान स्वयंसेवकांची एक फळी अक्षरायच्या प्रमुख समितीला सातत्याने बळ देत असतात.`,
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    image: '/Team/Santosh%20Kshirsagar.jpg',
    name: { en: 'SANTOSH KSHIRSAGAR', mr: 'संतोष क्षीरसागर' },
    bio: {
      en: `Dr. Santosh Kshirsagar is an internationally renowned Indian calligrapher, researcher, designer, and academician with over 35 years of experience in Indian calligraphy, typography, handwriting research, and visual communication. He holds B.F.A. and M.F.A. degrees from the Sir J. J. Institute of Applied Art, Mumbai, and a Ph.D. from IDC, IIT Bombay. He is the former Dean of the Sir J. J. School of Design and the former Director of the Directorate of Art, Government of Maharashtra.

He has conducted hundreds of workshops across India and abroad, and presented his research at leading international conferences including ICTVC, ATypI, ICoRD, and the International Graphonomics Society. He has delivered keynote addresses at Typography Day and served on its Advisory Board from 2008 to 2025. He is the founder of Aksharaya, dedicated to advancing Indian scripts, calligraphy, typography, and design education.`,
      mr: `१९६७मध्ये जन्मलेल्या संतोष क्षीरसागर यांनी सर. ज. जी. उपयोजित कला महाविद्यालयामधून बी.एफ.ए. आणि संशोधनानंतर एम.एफ.ए. या दोन्ही पदव्या प्राप्त केल्या. मायक्रोसॉफ्ट विंडोज XP साठी, गुजराती, उडिया भाषांमधील टंकांची, OTF या प्रकारातील सर्वप्रथम केलेली निर्मिती ही त्यांच्या महत्वाच्या कामांपैकी एक आहे. क्षीरसागर यांनी भारतीय सुलेखनासंबंधी, जर्मनी, बेल्जियम, जपान व इंग्लंड या देशांतील नावाजलेल्या संस्थांमधून, विविध परिषदा तसेच कार्यशाळांमधून आणि अनेक प्रकाशनांमधून आपले विचार मांडले आहेत. गेली पंचवीस वर्षे ते या विद्यालयातच भारतीय सुलेखन (विशेषत: देवनागरी), मुद्राक्षरकला आणि व्हिज्युअल कम्युनिकेशन डिझाइन या विषयात अध्यापन करत आहेत.`,
    },
  },
  {
    id: 2,
    image: '/Team/Yogesh%20Jahagirdar.jpg',
    name: { en: 'YOGESH JAHAGIRDAR', mr: 'योगेश जहागीरदार' },
    bio: {
      en: `Yogesh Jahagirdar is a PhD Scholar at IDC School of Design, IIT Bombay, and a Professor at ISDI School of Design & Innovation, Atlas SkillTech University, Mumbai. An alumnus of Sir J. J. Institute of Applied Art, he brings over 15 years of industry experience, having worked with organizations including the Reserve Bank of India, Godrej, and Nature’s Bounty (Tanzania).

His expertise spans Visual Brand Design, Publication Design, Typography, and Calligraphy, with a particular interest in the relationship between language, script, and visual communication. He is a founding member of Aksharaya, an initiative focused on documenting, exploring, and promoting Indian scripts and typographic heritage.

With over a decade of teaching experience, his academic interests include typography, visual communication, design education, Indian scripts, visual culture, and design research.`,
      mr: `Yogesh Jahagirdar is a PhD Scholar at IDC School of Design, IIT Bombay, and a Professor at ISDI School of Design & Innovation, Atlas SkillTech University, Mumbai. An alumnus of Sir J. J. Institute of Applied Art, he brings over 15 years of industry experience, having worked with organizations including the Reserve Bank of India, Godrej, and Nature’s Bounty (Tanzania).

His expertise spans Visual Brand Design, Publication Design, Typography, and Calligraphy, with a particular interest in the relationship between language, script, and visual communication. He is a founding member of Aksharaya, an initiative focused on documenting, exploring, and promoting Indian scripts and typographic heritage.

With over a decade of teaching experience, his academic interests include typography, visual communication, design education, Indian scripts, visual culture, and design research.`,
    },
  },
  {
    id: 3,
    image: '/Team/Vinay%20Saynekar.jpg',
    name: { en: 'VINAY SAYNEKAR', mr: 'विनय सानेकर' },
    bio: {
      en: `Vinay Saynekar is a Type Designer, Calligrapher and a Design Educator. He completed his graduation and later post-graduation from Sir J.J. Institute of Applied Art, Mumbai University and joined a paper company, Chimanlal’s Pvt Ltd, as Chief Design Consultant. In 1984 he returned to his college to teach and remained an inspiring teacher of Typography and Calligraphy in JJ till 2011. He has taken several lectures in various Art and Design Colleges, on alphabets and their design. He wrote a book for Calligraphy enthusiasts – Aksharsaundarya: Nirmiti ani Itihas, Beautifying Letters: Creation and History.

In his association with the renowned typographer Prof R K Joshi as a member of font design team in CDAC, he designed fonts in various Indian languages - for Microsoft Corporation: Tunga (Kannada Script), Vrinda (Bengali) and for Linux – Jan-Marathi, Jan-Bengali and Jan-Kannada.`,
      mr: `स्व. प्राध्यापक र. कृ. जोशी यांच्या नेतृत्व आणि मार्गदर्शनाखाली विनय सायनेकरांनी अनेक सुलेखन आणि मुद्राक्षरकलेच्या अनेक प्रकल्पांवर काम केले आहे. सानेकरांनी चिमणलाल प्रा. लि. या कंपनीमध्ये मुख्य डिझाईन सल्लागार म्हणून काम केले आहे, शिवाय ते सव्वीस वर्ष सर. ज. जी. उपयोजित कला महाविद्यालयामधे सुलेखन आणि मुद्राक्षरकला या विषयांचे अध्यापक होते. 'थ्री कॅलिग्राफर्स' या सामुहिक कार्यक्रमामध्ये त्यांचा महत्वाचा सहभाग होता. कॉर्पोरेट कंपन्यांकरता कन्नड, बंगाली, आसामी आणि देवनागरी अश्या विविध लिप्यांमध्ये मजकूराची रचना करण्यात त्यांचा हातखंडा आहे. 'अक्षरसौंदर्य – निर्मिती आणि इतिहास' या पुस्तकाचे ते लेखक आहेत. व्याख्याने आणि कार्यशाळा यांच्या माध्यमातून सुलेखनासंबंधी, विशेषतः मुलांमध्ये, जागृती निर्माण करण्याकरता सायनेकर प्रयत्नशील आहेत.`,
    },
  },
  {
    id: 4,
    image: '/Team/Girish%20Dalvi.jpg',
    name: { en: 'GIRISH DALVI', mr: 'गिरिश दळवी' },
    bio: {
      en: `Girish Dalvi is a faculty at the IDC School of Design, IIT Bombay, where he teaches visual design, interaction design, and design research. He holds a Bachelor's in Computer Engineering, a Master's in Design from NID, and a PhD from IIT Bombay, where his doctoral work developed a theoretical model of Devanagari typefaces. His research covers Devanagari typography, including its history, type-making technology, classification, and type culture. He also works in the areas of culture-sensitive interaction and Indian-language text input. He has also published papers in the area of game design and education. He has co-developed several font families including Mukta, Baloo, Jaini, and Anek. Most of these fonts are released under free and open-source licenses.`,
      mr: `Girish Dalvi is a faculty at the IDC School of Design, IIT Bombay, where he teaches visual design, interaction design, and design research. He holds a Bachelor's in Computer Engineering, a Master's in Design from NID, and a PhD from IIT Bombay, where his doctoral work developed a theoretical model of Devanagari typefaces. His research covers Devanagari typography, including its history, type-making technology, classification, and type culture. He also works in the areas of culture-sensitive interaction and Indian-language text input. He has also published papers in the area of game design and education. He has co-developed several font families including Mukta, Baloo, Jaini, and Anek. Most of these fonts are released under free and open-source licenses.`,
    },
  },
  {
    id: 5,
    image: '/Team/Noopur%20Datye.jpg',
    name: { en: 'NOOPUR DATYE', mr: 'नूपुर दाते' },
    bio: {
      en: `Noopur Datye is a type designer and calligrapher from Mumbai, India. She is one of the co-founders of Ek Type, a collaborative, multi-script type foundry that has designed typefaces in seventeen of the many writing systems used in India. Her work includes custom Bengali and Devanagari typefaces for television channels Star Jalsa and LifeOk, open source typefaces Mukta Vaani (Gujarati), Mukta Mahee (Gurmukhi), Baloo (Gujarati, Bangla), Noto (Dogra, Gunjala Gondi and Masaram Gondi), the Anek Mukti-script Family, Honk, and Nithya Ranjana.

Her work has won several awards including the Yellow Pencil at D&AD, Best of Show at TDC, CA’s Awards of Excellence and Black Elephants at Kyoorius Design Awards. Noopur has presented her work in several international conferences and has conducted workshops on calligraphy and letterform design at design schools and conferences in India.`,
      mr: `Noopur Datye is a type designer and calligrapher from Mumbai, India. She is one of the co-founders of Ek Type, a collaborative, multi-script type foundry that has designed typefaces in seventeen of the many writing systems used in India. Her work includes custom Bengali and Devanagari typefaces for television channels Star Jalsa and LifeOk, open source typefaces Mukta Vaani (Gujarati), Mukta Mahee (Gurmukhi), Baloo (Gujarati, Bangla), Noto (Dogra, Gunjala Gondi and Masaram Gondi), the Anek Mukti-script Family, Honk, and Nithya Ranjana.

Her work has won several awards including the Yellow Pencil at D&AD, Best of Show at TDC, CA’s Awards of Excellence and Black Elephants at Kyoorius Design Awards. Noopur has presented her work in several international conferences and has conducted workshops on calligraphy and letterform design at design schools and conferences in India.`,
    },
  },
  {
    id: 6,
    image: '/Team/Pradnyaa%20Naik.jpg',
    name: { en: 'PRADNYA NAIK', mr: 'प्रज्ञा नाईक' },
    bio: {
      en: `Pradnya Naik is graduated from Sir J.J. Institute of Applied Art and specialised in the field of Indic Typography, Type Design, Lettering and Calligraphy currently based in Jamnagar, India. Having worked as a graphic designer with WhiteCrow Designs, she was involved in type design activities for multiple Indic scripts like Devanagari, Gujarati and Urdu.

After pursuing her post-graduation from Type & Media at the Royal Academy of Arts in The Hague, The Netherlands in 2012, she worked as a Research Associate at IDC school of design at IIT, Bombay with Prof. Girish Dalvi on Analysis of Jain Manuscript calligraphy, Devanagari Font Search Tool and Glyph Diaries. Pradnya has been involved in teaching calligraphy, typography and type design at various design schools in India.`,
      mr: `प्रज्ञा नाईक यांनी सर जे. जे. इन्स्टिट्यूट ऑफ अप्लाईड आर्टमधून पदवी प्राप्त केली असून, त्यांनी इंडिक टायपोग्राफी, टाईप डिझाइन, लेटरिंग आणि कॅलिग्राफी या क्षेत्रात विशेष प्रावीण्य मिळवले आहे. त्या सध्या भारतातील जामनगर येथे वास्तव्यास आहेत. व्हाईटक्रो डिझाइन्समध्ये ग्राफिक डिझायनर म्हणून काम करताना, त्यांनी देवनागरी, गुजराती आणि उर्दू यांसारख्या अनेक भारतीय लिपींसाठी टाईप डिझाइनच्या कामात सहभाग घेतला होता.

२०१२ मध्ये नेदरलँड्समधील हेग येथील रॉयल अकॅडमी ऑफ आर्ट्समधून 'टाईप अँड मीडिया'मध्ये पदव्युत्तर शिक्षण पूर्ण केल्यानंतर, त्यांनी आयआयटी, मुंबई येथील आयडीसी स्कूल ऑफ डिझाइनमध्ये प्रा. गिरीश दळवी यांच्यासोबत 'जैन हस्तलिखित कॅलिग्राफीचे विश्लेषण', 'देवनागरी फॉन्ट सर्च टूल' आणि 'ग्लिफ डायरीज' या विषयांवर रिसर्च असोसिएट म्हणून काम केले. प्रज्ञा यांनी भारतातील विविध डिझाइन शाळांमध्ये कॅलिग्राफी, टायपोग्राफी आणि टाईप डिझाइन शिकवण्याचे काम केले आहे.`,
    },
  },
  {
    id: 7,
    image: '/Team/Sarang%20Kulkarni.jpg',
    name: { en: 'SARANG KULKARNI', mr: 'सारंग कुळकर्णी' },
    bio: {
      en: `An alumnus of Sir J. J. Institute of Applied Art, Sarang specialises in type design and calligraphy. In 2005, he founded ‘WhiteCrow’ – a type foundry and design studio based in Mumbai. With clients such as Vodafone, Virgin Mobile, Star Network, Coca Cola, Flipkart, Future Group, Godrej, Facebook and Pidilite, his studio has steadily found its niche in multi-lingual branding, designing custom typefaces across Indian scripts and calligraphy. He is an invited member of Alliance Graphic International (AGI).
Apart from his commercial ventures, Sarang conducts workshops related to multi-script typography in conferences, advertising/design agencies & design schools.`,
      mr: `टंक रचनाकार, सुलेखनकार आणि मुद्राक्षरकार सारंग कुळकर्णी यांनी २००२ मध्ये सर. ज.जी. उपयाजित कला महाविद्यालयामधून पदवी संपादन केली. कुळकर्णी हे 'WhiteCrow Designs' या कंपनीचे मालक आहेत. या कंपनीने भारतीय आणि आंतरराष्ट्रीय ग्राहकांकरता भारतीय आणि लॅटिन भाषेतील टंक, एक अफाट ग्राफिक आणि आयडेंटिटी रचनांचा पोर्टफोलिओ, तसेच सुलेखनांचे अनेक प्रकल्प हाताळले आहे.
प्रा. र. कृ. जोशी आणि प्रा. संतोष क्षीरसागर यांच्यासोबत काम करत कुळकर्णी यांनी मायक्रोसॉफ्ट विंडोज XP च्या टाईप डिझाईनच्या प्रकल्पांमध्ये सहभाग नोंदवलेला आहे. २०१३ मधे 'एक टाइप' या टाइप फाउण्ड्री चे हे भागीदार आहेत. एक टाइप फाउण्ड्रीने मुक्त, मोगक, अनेक, जैनी, बलू असे फॉण्टस् गुगलला देउन जगासाठी मक्तस्त्रोत केले आहेत.`,
    },
  },
  {
    id: 8,
    image: '/Team/Shubhananda%20Jog.jpg',
    name: { en: 'SHUBHANAND JOG', mr: 'शुभानंद जोग' },
    bio: {
      en: `Prof. Shubhanand Jog, 61, is a calligrapher, designer, and educator with over three decades at Sir J. J. Institute of Applied Art, Mumbai. Joining in 1996, he has shaped generations of students while sustaining his own practice. He holds an M.F.A. in Exhibition Design, Display & Stage Craft. The State Government of Maharashtra appointed him as a core team member for establishing Sir J. J. School of Art, Architecture and Design – De-novo deemed to-be university. He also chaired its postgraduate Design Education syllabus committee.
His work has earned four international awards and the Maharashtra Rajya Kala Puraskar. His film Angel of Peace screened at the Texas International Film Festival, World Social Forum Mumbai, and Mumbai International Film Festival. Working across calligraphy, logo design, font creation, and book covers. His calligraphic citations have honoured over 24 personalities including P. L. Deshpande, R. K. Laxman. etc. He merges tradition with innovation.`,
      mr: `शुभानंद जोग यांनी सर. ज. जी. उपयोजित कला महाविद्यालयामधून बी.एफ.ए. आणि संशोधनानंतर एम.एफ.ए. या दोन्ही पदव्या प्राप्त केल्या. याच विद्यालयात ते गेली पंचवीस वर्षे शिक्षक मंडळाचे सदस्य आहेत. 'एंजल ऑफ पीस' या जोग यांनी निर्मिती आणि दिग्दर्शन केलेल्या लघुचित्रपटाचं प्रदर्शन टेक्सास आंतरराष्ट्रीय चित्रपट महोत्सव, वर्ल्ड सोशल फोरम (मुंबई), आणि मुंबई आंतरराष्ट्रीय चित्रपट महोत्सवामध्ये स्पर्धा विभागात झाले आहे. ख्यातनाम कार्टूनिस्ट आर. के. लक्ष्मण यांच्या 'साइटेशन्स – मानपत्राज' या पुस्तकाच्या सुलेखनाचं आणि रचनेचं काम केलं आहे, शिवाय अजित वाडेकर, विंदा करंदीकर, ज्युलियो एफ. रिबेरो, आणि पंडित हरिप्रसाद चौरसिया यांसारख्या दिग्गजांच्या पुस्तकांत सहभाग दिला आहे. त्यांनी तीसहून अधिक कार्यशाळा सुलेखन या विषयावर आयोजित केल्या आहेत, आणि अनेक सर्जनशील कार्यशाळा आणि परिसंवादांमध्ये भाग घेतला आहे.`,
    },
  },
  {
    id: 9,
    image: '/Team/Vikram%20Gaikwad.jpg',
    name: { en: 'VIKRAM GAIKWAD', mr: 'विक्रम गायकवाड' },
    bio: {
      en: `Graduated from Sir J. J. Institute of Applied Art in 1990. In over two decades of advertising, Vikram has worked on and contributed to almost every brand worth its salt. His work has won hundreds of golds and silvers in many national and international award shows including Cannes, One Show, D&AD, Spikes Asia and Clio. He has been a judge at many different advertising awards shows both local and international including the Cannes Lions.`,
      mr: `सन १९९० मध्ये  सर ज. जी उपयोजित कला महाविद्यालयामधून पदवीधर झालेल्या गायकवाड यांना दोन तपाहून अधिक जाहिरात क्षेत्राचा अनुभव आहे. 'कान्स', 'वन शो', 'D&AD' आणि 'क्लिओ' यांसांरख्या प्रथितयश राष्ट्रीय आणि आंतरराष्ट्रीय कार्यक्रमांमधून शंभराहून अधिक सुवर्ण आणि रौप्य पदकं गायकवाड यांच्या नावावर आहेत. सन २००३ मध्ये 'कॅम्पेन ब्रिफ एशिया'ने भारतातील सर्जनशील लोकांच्या यादीत तेराव्या स्थानावर गायकवाडांचा उल्लेख केलेला आहे. प्रा. र. कृ. जोशी यांच्यासोबत दशकाहून अधिक काळ जवळून काम करत असताना आय.आय.टी. मुंबईस्थित इंडस्ट्रियल डिझाईन सेंटरच्या माध्यमातून अनेक डिझाईन आणि टाईप डिझाईनच्या प्रकल्पांमध्ये महत्वाचा सहभाग नोंदवलेला आहे. त्यांनी मायक्रोसॉफ्ट विंडोज XP साठी तामिळ आणि मल्याळम भाषांतील OTF प्रकारातील टंकांची रचना केलेली आहे. गेल्या काही वर्षांमध्ये गायकवाड यांनी अनेक स्थानिक आणि आंतरराष्ट्रीय जाहिरात पुरस्कारांसाठी परीक्षकाची भूमिका यशस्वीपणे पार पाडलेली आहे. सन २००७ मध्ये 'वीक' या प्रथितयश नियतकालिकाने इमर्जिंग यंग इंडियन्स या आपल्या खास मालिकेमध्ये विक्रम गायकवाड यांचा गौरवपूर्ण उल्लेख केला आहे. 'अन्डरडॉग' या आपल्या २०१४ मधे स्थापन केलेल्या कंपनीत ते सध्या भागीदार आणि कार्यकारी रचना दिग्दर्शक (Executive Creative Director) म्हणून कार्यरत आहेत.`,
    },
  },
]
