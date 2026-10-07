// ===== BILINGUAL LANGUAGE SWITCHER =====

const translations = {
    en: {
        // Header
        'header-title': "👋 I'm Zaheer Abbas",
        'header-subtitle': '🔧 Electrician & Plumbing Expert',
        'header-desc': 'Reliable, fast, and affordable — Riyadh, Saudi Arabia',
        'header-btn': '📞 Contact Me Now',
        'stat-customers': 'Happy Customers',
        'stat-satisfaction': 'Satisfaction',
        'stat-available': 'Available',

        // About
        'about-tag': '👤 About Me',
        'about-title': 'Why Choose Me?',
        'about-text': 'With years of experience in electrical and plumbing services across Riyadh, I provide professional, honest, and reliable solutions for all your home and office needs. From fixing a simple leak to complete electrical installations — I do it all with guaranteed quality.',
        'feature-1': 'Licensed & Insured',
        'feature-2': 'Same-Day Service',
        'feature-3': 'Fair Pricing',
        'feature-4': 'Work Guarantee',
        'about-name': 'Zaheer Abbas',
        'about-role': 'Electrician & Plumber',

        // Services - NOW IN ENGLISH
        'services-tag': '⚡ My Services',
        'services-title': 'My Services',
        'services-subtitle': 'Professional solutions for all your home and office needs',
        'service-1-title': 'Electrical Repairs & Installations',
        'service-1-desc': 'All electrical work from repairs to installations',
        'service-2-title': 'Plumbing Repairs & Installations',
        'service-2-desc': 'All plumbing work from repairs to installations',
        'service-3-title': 'Curtain Installation',
        'service-3-desc': 'Professional curtain installation for all windows',
        'service-4-title': 'IKEA Furniture Assembly',
        'service-4-desc': 'Assembly of tables, wardrobes, chairs',
        'service-5-title': 'Door Lock Installation & Replacement',
        'service-5-desc': 'Installation and replacement of all types of locks',

        // Gallery
        'gallery-tag': '📸 Portfolio',
        'gallery-title': 'My Work Gallery',
        'gallery-1': '✨ Project 1',
        'gallery-2': '✨ Project 2',
        'gallery-3': '✨ Project 3',
        'gallery-4': '✨ Project 4',
        'gallery-5': '✨ Project 5',
        'gallery-6': '✨ Project 6',
        'gallery-7': '✨ Project 7',
        'gallery-8': '✨ Project 8',

        // Reviews
        'reviews-tag': '⭐ Reviews',
        'reviews-title': 'What My Customers Say',
        'review-1': '"Zaheer came same day and fixed our AC electrical issue. Very professional and reasonably priced. Highly recommend!"',
        'review-2': '"He assembled my entire IKEA wardrobe and installed curtains in just 3 hours. Perfect work, no mistakes. Will call again!"',
        'review-3': '"My bathroom pipes were leaking badly. He fixed everything quickly and cleaned up after himself. Very trustworthy guy."',
        'review-4': '"Replaced all door locks in my villa within 2 hours. Great quality locks and fair price. Very happy with the service."',

        // Contact
        'contact-tag': '📞 Get In Touch',
        'contact-title': 'Contact Me',
        'contact-subtitle': "I'm just a call or message away — let's get your work done!",
        'contact-mobile-label': 'Mobile',
        'contact-wa-label': 'WhatsApp',
        'contact-address-label': 'Address',
        'contact-address': 'Prince Muhammad Ibn Saad Ibn Abdulaziz Rd, Al Malqa, Riyadh 13524',
        'contact-hours-label': 'Working Hours',
        'contact-hours': '7 Days a Week — 24/7 Service',
        'form-title': '📩 Send Me a Message',
        'form-desc': "I'll respond within 30 minutes",
        'form-name': 'Your Name',
        'form-phone': 'Your Phone Number',
        'form-location': 'Your Location (e.g., Al-Malqa)',
        'form-message': 'Tell me what you need...',
        'form-submit': '📤 Send Request',

        // Footer
        'footer-desc': 'Your Trusted Electrician & Plumber in Riyadh',
        'footer-text': '© 2026 — Available 7 days a week',
        'wa-tooltip': 'Chat with Zaheer'
    },

    ar: {
        // Header
        'header-title': '👋 أنا ظهير عباس',
        'header-subtitle': '🔧 خبير كهرباء وسباكة',
        'header-desc': 'موثوق، سريع، وبأسعار مناسبة — الرياض، المملكة العربية السعودية',
        'header-btn': '📞 تواصل معي الآن',
        'stat-customers': 'عملاء سعداء',
        'stat-satisfaction': 'رضا',
        'stat-available': 'متاح',

        // About
        'about-tag': '👤 عني',
        'about-title': 'لماذا تختارني؟',
        'about-text': 'مع سنوات من الخبرة في خدمات الكهرباء والسباكة في جميع أنحاء الرياض، أقدم حلولاً احترافية وصادقة وموثوقة لجميع احتياجات منزلك ومكتبك. من إصلاح تسرب بسيط إلى تركيبات كهربائية كاملة — أقوم بكل شيء بجودة مضمونة.',
        'feature-1': 'مرخص ومؤمن',
        'feature-2': 'خدمة في نفس اليوم',
        'feature-3': 'أسعار عادلة',
        'feature-4': 'ضمان العمل',
        'about-name': 'ظهير عباس',
        'about-role': 'كهربائي وسباك',

        // Services - IN ARABIC
        'services-tag': '⚡ خدماتي',
        'services-title': 'خدماتي',
        'services-subtitle': 'حلول احترافية لجميع احتياجات منزلك ومكتبك',
        'service-1-title': 'إصلاحات وتركيبات كهربائية',
        'service-1-desc': 'جميع أعمال الكهرباء من إصلاحات وتركيبات',
        'service-2-title': 'إصلاحات وتركيبات سباكة',
        'service-2-desc': 'جميع أعمال السباكة من إصلاحات وتركيبات',
        'service-3-title': 'تركيب ستائر',
        'service-3-desc': 'تركيب ستائر احترافي لجميع النوافذ',
        'service-4-title': 'تجميع أثاث إيكيا',
        'service-4-desc': 'تجميع طاولات، خزائن ملابس، كراسي',
        'service-5-title': 'تركيب واستبدال أقفال الأبواب',
        'service-5-desc': 'تركيب واستبدال جميع أنواع الأقفال',

        // Gallery
        'gallery-tag': '📸 معرض الأعمال',
        'gallery-title': 'معرض أعمالي',
        'gallery-1': '✨ مشروع ١',
        'gallery-2': '✨ مشروع ٢',
        'gallery-3': '✨ مشروع ٣',
        'gallery-4': '✨ مشروع ٤',
        'gallery-5': '✨ مشروع ٥',
        'gallery-6': '✨ مشروع ٦',
        'gallery-7': '✨ مشروع ٧',
        'gallery-8': '✨ مشروع ٨',

        // Reviews
        'reviews-tag': '⭐ التقييمات',
        'reviews-title': 'ماذا يقول عملائي',
        'review-1': '"جاء ظهير في نفس اليوم وأصلح مشكلة الكهرباء في المكيف. محترف جداً وأسعاره معقولة. أنصح به بشدة!"',
        'review-2': '"قام بتجميع خزانة ملابس إيكيا بالكامل وتركيب الستائر في ٣ ساعات فقط. عمل مثالي، بدون أخطاء. سأتصل به مرة أخرى!"',
        'review-3': '"كانت أنابيب الحمام تتسرب بشدة. أصلح كل شيء بسرعة ونظف المكان بعد الانتهاء. شخص جدير بالثقة."',
        'review-4': '"استبدل جميع أقفال الأبواب في فيلتي خلال ساعتين. أقفال بجودة عالية وسعر عادل. سعيد جداً بالخدمة."',

        // Contact
        'contact-tag': '📞 تواصل معي',
        'contact-title': 'تواصل معي',
        'contact-subtitle': 'أنا على بعد مكالمة أو رسالة — دعنا ننجز عملك!',
        'contact-mobile-label': 'الجوال',
        'contact-wa-label': 'واتساب',
        'contact-address-label': 'العنوان',
        'contact-address': 'طريق الأمير محمد بن سعد بن عبد العزيز، حي الملقا، الرياض ١٣٥٢٤',
        'contact-hours-label': 'ساعات العمل',
        'contact-hours': '٧ أيام في الأسبوع — خدمة ٢٤/٧',
        'form-title': '📩 أرسل لي رسالة',
        'form-desc': 'سأرد خلال ٣٠ دقيقة',
        'form-name': 'اسمك',
        'form-phone': 'رقم جوالك',
        'form-location': 'موقعك (مثال: الملقا)',
        'form-message': 'أخبرني ماذا تحتاج...',
        'form-submit': '📤 إرسال الطلب',

        // Footer
        'footer-desc': 'كهربائي وسباك موثوق في الرياض',
        'footer-text': '© ٢٠٢٦ — متاح ٧ أيام في الأسبوع',
        'wa-tooltip': 'تحدث مع ظهير'
    }
};

// Current language
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent.includes(lang === 'en' ? 'EN' : 'AR')) {
            btn.classList.add('active');
        }
    });
    
    applyTranslations(lang);
    
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        document.body.style.textAlign = 'right';
        document.body.style.direction = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        document.body.style.textAlign = 'left';
        document.body.style.direction = 'ltr';
    }
}

function applyTranslations(lang) {
    const t = translations[lang];
    
    for (let key in t) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = t[key];
        }
    }
}

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const msg = currentLang === 'en' 
        ? '✅ Thank you! Zaheer will contact you within 30 minutes.'
        : '✅ شكراً لك! سيتصل بك ظهير خلال ٣٠ دقيقة.';
    alert(msg);
    this.reset();
});

// ===== GALLERY CLICK TO ENLARGE =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.gallery-item.active').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.toggle('active');
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.gallery-item')) {
        document.querySelectorAll('.gallery-item.active').forEach(el => {
            el.classList.remove('active');
        });
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.gallery-item.active').forEach(el => {
            el.classList.remove('active');
        });
    }
});

// ===== SET DEFAULT LANGUAGE =====
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('en');
});