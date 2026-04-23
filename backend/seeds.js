import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import Artist from './models/Artist.js';
import Exhibition from './models/Exhibition.js';
import Article from './models/Article.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/silent-curator');
    console.log('MongoDB connected for seeding');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await Artist.deleteMany({});
    await Exhibition.deleteMany({});
    await Article.deleteMany({});

    // Seed Artists
    const artists = await Artist.insertMany([
      {
        name: "Elara Vance",
        title: "Master Ceramist",
        bio: "Elara specializes in hand-thrown ceramic vessels with organic asymmetrical forms.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIr_yiCDNjKRlrOn1AfALBaVCmi-24WDZJOmn_GOnfaz9xiaj5sOEG4e3ClLX4NHK2tligM6SfzHryJOX53HfGvzPPdS7wU5crj38gdBDlvNnYnY6hcJydtNK2VLWdtbRE_jCl8fEq7PUlQVDcADUYlZxp-Sxw2CQrdh8pKaW9OXFBTqWNXsTrv69n6gg5V3L5YwEl_As4NvsNAhdQ5Hs36tE6QIRG1zGd2p2BFaWkwd7pZZeYTsEb2Y5VgrwKZ6lnJPCd6oSXNrY",
        location: "New York, USA",
        specialty: "Hand-Thrown Ceramic",
        portfolio: [],
        philosophy: "Form follows silence"
      },
      {
        name: "Julian Marx",
        title: "Fiber Artist",
        bio: "Julian creates hand-woven textiles using raw linen and golden silk threads.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_pBT-VR6IWs1WhtAe8dct4lhkYfZfycXw5qh611owJ8FmbmgzcwlZtneD2gtooCU6q7P80IDQO6YWw_TZ4uPTo3Zub5KfMecCB7d2mOVkWhgRfXBWmJGnwsTR6v11bolWLueOIrzl6c9ICigGoZXWhr1SlRY7MrGL4QQ_IzfF7MwxEbvD9__cDlhrqO9XhpQg2XhVpD3EaEmbJX4HGdjCy3NnikMKBlWYEc707fMz4FkoRxZFnDXzbTX-j2n2qgZ1goCj8Q3WK0w",
        location: "Brussels, Belgium",
        specialty: "Fiber Art",
        portfolio: [],
        philosophy: "The weave is the message"
      },
      {
        name: "Sana Kim",
        title: "Sculptor & Woodworker",
        bio: "Sana carves wooden sculptures from dark walnut and oak with minimalist precision.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIFsQfWA5cpZJ4RLTIAfNLjH5XHQgsiKFR3i68gwbwrz3LkKW2_x7pg_slu8q0oRIjPPGhZV3xIVhOzl7cGKVpJDwdPn1FMDZ2g9vzJFTfqndfzEcLSGV1FnFfZQMxHpvskzZcPEFLw0j6fHED2IB4E0ee2uuvEhE5opcF-pTL8QjOT6wJYOE7b4_Tej0BgbRP08rF8WS-HMwkJUEDur-WR1olXAh_O7mo-LzLcQwt-9WtiA6WiW0ged7U-6aWEjaQBdmd1Xi7yV4",
        location: "Seoul, South Korea",
        specialty: "Sculpted Wood",
        portfolio: [],
        philosophy: "Silence in every grain"
      }
    ]);

    // Seed Products
    const products = await Product.insertMany([
      {
        title: "Ecliptic Vessel I",
        artist: "Elara Vance",
        category: "Hand-Thrown Ceramic",
        material: "Ceramic",
        price: 1250,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG3B6bG3c5qx3aynokRQstSSXZmCpfDTEE2BmpuWGf47Ek-gnb_mFys_459qd4js9rbtZdq9AkIQqe959L52raUNrQ0cd9Os3w2j7b4t9zQgdXvs9717s5OxJ1wWkOK6N_rxUIrkKJ59BFG5b2XcO9G2yQHnD57FCoaBOCJTooSncZtidpEFSqlr06XdGKzW_Sc_Mke7ifuVG5aXKCrBCpIRtdzoszUUtYsxxlYJTX5_E2Px3Y_Bp8K_OVjexDHqN_wh1HxSEcKV8",
        description: "Minimalist matte black ceramic vase with organic asymmetrical silhouette",
        dimensions: "24cm x 24cm x 32cm",
        weight: "2.1kg",
        origin: "New York Studio",
        available: true,
        stock: 5,
        featured: true
      },
      {
        title: "Woven Silence",
        artist: "Julian Marx",
        category: "Fiber Art",
        material: "Raw Linen & Gold Silk",
        price: 3800,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_pBT-VR6IWs1WhtAe8dct4lhkYfZfycXw5qh611owJ8FmbmgzcwlZtneD2gtooCU6q7P80IDQO6YWw_TZ4uPTo3Zub5KfMecCB7d2mOVkWhgRfXBWmJGnwsTR6v11bolWLueOIrzl6c9ICigGoZXWhr1SlRY7MrGL4QQ_IzfF7MwxEbvD9__cDlhrqO9XhpQg2XhVpD3EaEmbJX4HGdjCy3NnikMKBlWYEc707fMz4FkoRxZFnDXzbTX-j2n2qgZ1goCj8Q3WK0w",
        description: "Hand-woven textile wall hanging with intricate geometric patterns",
        dimensions: "120cm x 150cm",
        weight: "1.8kg",
        origin: "Brussels Studio",
        available: true,
        stock: 3,
        featured: true
      },
      {
        title: "Timber Suite",
        artist: "Sana Kim",
        category: "Sculpted Wood",
        material: "Dark Walnut",
        price: 950,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIFsQfWA5cpZJ4RLTIAfNLjH5XHQgsiKFR3i68gwbwrz3LkKW2_x7pg_slu8q0oRIjPPGhZV3xIVhOzl7cGKVpJDwdPn1FMDZ2g9vzJFTfqndfzEcLSGV1FnFfZQMxHpvskzZcPEFLw0j6fHED2IB4E0ee2uuvEhE5opcF-pTL8QjOT6wJYOE7b4_Tej0BgbRP08rF8WS-HMwkJUEDur-WR1olXAh_O7mo-LzLcQwt-9WtiA6WiW0ged7U-6aWEjaQBdmd1Xi7yV4",
        description: "Set of three hand-carved dark walnut bowls with unique grain patterns",
        dimensions: "Varied sizes",
        weight: "3.2kg",
        origin: "Seoul Studio",
        available: true,
        stock: 4,
        featured: true
      }
    ]);

    // Seed Exhibitions
    const exhibitions = await Exhibition.insertMany([
      {
        title: "The Resonance of Clay",
        subtitle: "Ceramic Explorations",
        description: "An immersive study of tactile geometry and primitive firing techniques featuring work by Master Ceramist Kaito Sato.",
        startDate: new Date('2024-11-15'),
        endDate: new Date('2025-01-12'),
        location: "The Silent Gallery, NYC",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfOUS8LUOFqCpsQZiUOKgYIK84C6CsABesCvLWaJ4cc_B7caNF3Rk2TkeSRdqerTazRmsnHdNyvVO6vA0Zzb1tF-H5YkWhWzsuP4WIfDCgUtg1kgwmz5w4ZyTo6WyNCr3AA2dluL34Zd8dCRh1i5_m1KVF4--aL3DfG-PV5Q8OEMlhwcd0ggOrkx9XaceqIKbR-jIa1HZjOcZ92EWLaZLllTyjq_2JkIZTvJ6AhmVcsU51iP0xVWTo9tYwtIgBp288F8017P5DR9w",
        featured: true,
        status: "current",
        curator: "Elena Vance",
        artists: [artists[0]._id.toString()]
      },
      {
        title: "Indigo Echoes",
        subtitle: "Shibori & Fiber Arts",
        description: "Traditional Shibori techniques redefined for the modern architectural space.",
        startDate: new Date('2025-02-01'),
        endDate: new Date('2025-03-15'),
        location: "The Silent Gallery, NYC",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUHMD04qtue7lC8rqyuFlCpVtsjuaAKSzaX-9P3vEO3_HuwC-BE4hFEzMgw98M1JSbYTfdbWWt9JoK-fnDoHiJH9e26GK4RYrR7AkKMC320Z3mtjVqE_f3o_ZrYpVfnyV8jhkV9lnhhbmRKn2DnTQ1TOomM2t87ZkeBJW4D4U70kfugWlX3SZ-YZZ-D4N9QBRNYxdz9LHPCT2pykvMdWFs5ttd2O1AFR7aMRlvtdkYzALmb9lDvXaDHdhNaCLbAAGINNdIdhaFhhA",
        featured: false,
        status: "upcoming",
        curator: "Elena Vance",
        artists: [artists[1]._id.toString()]
      }
    ]);

    // Seed Articles
    const articles = await Article.insertMany([
      {
        title: "The Philosophy of Imperfection",
        subtitle: "Exploring the Japanese concept of Wabi-Sabi in modern European craft",
        author: "Elena Vance",
        category: "Philosophy",
        content: "Wabi-Sabi teaches us that perfection is found in imperfection. In modern craft, this philosophy resurfaces...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv6M_Eig1ObkVYhKREOBihzuN2-aZ78KmzHc1-jT1HzYoY4mKCFPdYUjA752UNW5UDcqa8b4bkYS3GFyl0wsDBKTPYGKxonZ0RxJl94POkREDn7vKc2MofUIERlsGKsJb7tOv8rrJ-vrO3Gt0lnQpNgd7j04MOEV_Pn37i-JsIlDA619zvLYAL31l8yGSQjXtj2By_N1zbEtphJdb5KyuzgIk1VZF0QxKHGZNzy_QlmvIyLedEVl0Ko23qBibUdIZnb2E86nGWMVo",
        publishedDate: new Date('2024-10-12'),
        featured: true
      },
      {
        title: "Shadow and Space",
        subtitle: "An interview with architect Hiroshi Nakamura on designing environments that prioritize sensory craft",
        author: "Elena Vance",
        category: "Interview",
        content: "Architect Hiroshi Nakamura discusses how spaces can amplify the beauty of artisanal work...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuSGA_UhLKb_1eOTCSYJ4Af_xmvsHXztEltGoBE07xhTGgKp9DwCorMwdDWRgG4PWioOgDHsRyFZ4RhufTtzw-GpzIb8v0VgmOL4Mz1TlAI8dlARuOFO4SwYWMNoRYj66Aes0WIAcJQeSweUflQCIRA81vCPyp45tBuWJaBp-qfgrdOeCM3YA2XQ1Q94SOATXGbt4tQ-LrQtBgAkJj0ojAp1Q56D0x6i3NE8YlVy1vO9aH2DAXtUWAMIcvfFYSmYAiFn3npV2AC18",
        publishedDate: new Date('2024-09-28'),
        featured: true
      },
      {
        title: "Forging the Future",
        subtitle: "How traditional blacksmithing techniques are being reimagined for modern objects",
        author: "Elena Vance",
        category: "Craft",
        content: "Contemporary blacksmiths are bringing ancient techniques into the 21st century, creating functional art...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBPd06IhyCK28DthpP2RhxcmLo15FeW2gYvsy1dncQ3dkCzDNDVnfpB_2D27jCrDDgKr5bFsGZaHcIaDcwLCMfez2lUzx2cnw5Ys2xKPoWvJZ-e5Q58FAHCzC9W7rNblTqBFN12BDxDJakoIllhpH0NG7kNfHtFI4o4D6a1y5AixQGVWEikZAdPS9035MLeTwLyEula17UU-vO9Ylid2QWahkRCqd5TZYmz6xrZa32WLF3h-dDj8TpS9Kw_Gltgro1ll1pO1_KP4E",
        publishedDate: new Date('2024-09-05'),
        featured: true
      }
    ]);

    console.log('✅ Database seeded successfully!');
    console.log(`   - ${artists.length} artists created`);
    console.log(`   - ${products.length} products created`);
    console.log(`   - ${exhibitions.length} exhibitions created`);
    console.log(`   - ${articles.length} articles created`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

connectDB().then(() => seedData());
