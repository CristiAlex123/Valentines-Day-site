// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Anastasia",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Vrei sa fii Valentina mea? 💖",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '💕'],  // Heart emojis
        bears: ['🦊', '🐻', '🙈']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Mă iubești?",                                    // First interaction
            yesBtn: "Da",                                             // Text for "Yes" button
            noBtn: "Nu",                                               // Text for "No" button
            secretAnswer: "Nu te iubesc, te ador! ❤️"           // Secret hover message
        },
        second: {
            text: "Cât de mult mă iubești?",                          // For the love meter
            startText: "Atât de mult",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Vrei sa fii partenera mea de Valentine's Day? 🌹", // The big question!
            yesBtn: "DA!",                                             // Text for "Yes" button
            noBtn: "Nu"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOW așa de mult mă iubești?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "La infinit 🚀💝",              // Shows when they go past 1000%
        normal: "Mult de tot! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yeey, inseamnă că avem un date :)) 🎉💝💖💝💓",
        message: "Acum hai să îți primești cadoul, o îmbrățișare și un sărut pasional 😘",
        emojis: "❤️💕😍😘🥰🩵💜💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FF8F8F",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#FFF1CB",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/djfruetbl/video/upload/v1770284174/The_Urs_-_Ancora_Official_Video_sfg1yq.mp3", // Music streaming URL
        startText: "🎵 Pornește Muzica",        // Button text to start music
        stopText: "🔇 Oprește Muzica",         // Button text to stop music
        volume: 0.3                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 