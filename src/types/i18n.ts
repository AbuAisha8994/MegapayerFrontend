// Language codes supported by the application
export type Language = 'en' | 'tr' | 'uz' | 'ru' | 'ar' | 'es';

// Navbar translations
export interface NavbarTranslations {
    products: string;
    ecosystem: string;
    developers: string;
    docs: string;
    community: string;
    launch_app: string;
    blockchain: string;
    social: string;
    p2p: string;
    dex: string;
    wallet: string;
    nft: string;
    bridge: string;
    token: string;
    explorer: string;
    partners: string;
    sdk_api: string;
    github: string;
    testnet: string;
    node_setup: string;
    whitepapers: string;
    tokenomics: string;
    roadmap: string;
    pitch_deck: string;
    media_kit: string;
    faq: string;
    news_blog: string;
    airdrop: string;
    team: string;
    twitter: string;
    telegram: string;
    discord: string;
    careers: string;
}

// Hero section translations
export interface HeroTranslations {
    badge: string;
    title: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
}

// Features section translations
export interface FeaturesTranslations {
    title: string;
    subtitle: string;
    cards: {
        decentralized_title: string;
        decentralized_desc: string;
        integrated_title: string;
        integrated_desc: string;
        security_title: string;
        security_desc: string;
        scalable_title: string;
        scalable_desc: string;
        interop_title: string;
        interop_desc: string;
        energy_title: string;
        energy_desc: string;
    };
    stats: {
        products: string;
        blockchains: string;
        uptime: string;
        launch: string;
    };
}

// Product item type
export interface ProductItem {
    title: string;
    desc: string;
}

// Products section translations
export interface ProductsTranslations {
    title: string;
    subtitle: string;
    items: ProductItem[];
}

// AI feature item type
export interface AIFeatureItem {
    title: string;
    desc: string;
}

// AI Section translations
export interface AISectionTranslations {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    features: AIFeatureItem[];
}

// Roadmap item type
export interface RoadmapItem {
    quarter: string;
    title: string;
    bullets: string[];
}

// Roadmap section translations
export interface RoadmapTranslations {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    items: RoadmapItem[];
}

// Tokenomics item type
export interface TokenomicsItem {
    title: string;
    desc: string;
    percent: string;
}

// Tokenomics section translations
export interface TokenomicsTranslations {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    items: TokenomicsItem[];
}

// Footer link item
export interface FooterLinkItem {
    label: string;
    href: string;
}

// Footer column
export interface FooterColumn {
    title: string;
    items: FooterLinkItem[];
}

// Footer section translations
export interface FooterSectionTranslations {
    brand_desc: string;
    columns: FooterColumn[];
    bottom: {
        rights: string;
        early: string;
        support: string;
    };
}

// Footer translations (simple)
export interface FooterTranslations {
    rights: string;
    privacy: string;
    terms: string;
}

// Blockchain Page translations
export interface BlockchainPageTranslations {
    hero: {
        badge: string;
        title: string;
        desc: string;
        btn_primary: string;
        btn_secondary: string;
        stats: {
            block_time: string;
            tps: string;
            fee: string;
            uptime: string;
        };
    };
    features: {
        title: string;
        subtitle: string;
        cards: { title: string; desc: string }[];
    };
    spos: {
        title: string;
        desc: string;
        how_works_title: string;
        how_works_items: string[];
        benefits_title: string;
        benefits_items: { title: string; desc: string }[];
    };
    dev: {
        title: string;
        subtitle: string;
        ai_title: string;
        ai_desc: string;
        ai_items: { title: string; desc: string }[];
        code_window: {
            title: string;
            comment: string;
        };
    };
    cta: {
        title: string;
        subtitle: string;
        button: string;
    };
}

// Social Page translations
export interface SocialPageTranslations {
    hero: {
        badge: string;
        title: string;
        description: string;
        buttons: { primary: string; secondary: string };
        demo_cards: {
            card1: { user: string; text: string };
            card2: { user: string; text: string };
            card3: { user: string; text: string };
        };
    };
    features: {
        title: string;
        subtitle: string;
        cards: { title: string; desc: string }[];
    };
    cta: {
        title: string;
        subtitle: string;
        buttons: { primary: string; secondary: string };
    };
}

// P2P Exchange Page translations
export interface P2PPageTranslations {
    hero: {
        badge: string;
        title: string;
        desc: string;
        buttons: { primary: string; secondary: string };
    };
    stats: {
        fees: { val: string; label: string };
        methods: { val: string; label: string };
        support: { val: string; label: string };
    };
    security: {
        title: string;
        subtitle: string;
        cards: { title: string; desc: string }[];
    };
    how_works: {
        title: string;
        steps: { step: string; title: string; desc: string }[];
    };
    payments: {
        title: string;
        subtitle: string;
        categories: { title: string; items: string[] }[];
    };
    cta: {
        title: string;
        subtitle: string;
        button: string;
    };
}

// DEX Page translations
export interface DEXPageTranslations {
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        desc: string;
    };
    stats: {
        liquidity: { val: string; label: string };
        volume: { val: string; label: string };
        chains: { val: string; label: string };
        fee: { val: string; label: string };
    };
    features: {
        cards: { title: string; desc: string }[];
    };
    security: {
        title: string;
        desc: string;
        items: string[];
    };
    advantages: {
        title: string;
        items: { title: string; desc: string }[];
    };
    cta: {
        title: string;
        subtitle: string;
        buttons: { primary: string; secondary: string };
    };
}

// Complete translation structure
// Wallet Page translations
export interface WalletPageTranslations {
    hero: {
        badge: string;
        title: string;
        desc: string;
        buttons: { primary: string; secondary: string };
    };
    key_mgmt: {
        title: string;
        subtitle: string;
        caption: string;
    };
    ticker_title: string;
    security: {
        title: string;
        cards: { title: string; desc: string }[];
    };
    cta: {
        title: string;
        subtitle: string;
        buttons: { download: string; web: string };
    };
}

// Airdrop Page translations
export interface AirdropPageTranslations {
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        cta: string;
    };
    stats: {
        participants: string;
        points: string;
        testnet_users: string;
        days_left: string;
        days_unit: string;
    };
    how_to: {
        title: string;
        steps: string[];
        link: string;
    };
    leaderboard: {
        title: string;
        pts: string;
    };
    faq: {
        title: string;
        items: { q: string; a: string }[];
    };
    cta: {
        title: string;
        description: string;
        zealy: string;
        telegram: string;
    };
}

// Coming Soon Page translations
export interface ComingSoonTranslations {
    badge: string;
    title_prefix: string;
    desc_suffix: string;
    countdown: { d: string; h: string; m: string; s: string };
    notify: { title: string; placeholder: string; button: string };
    back: string;
}

// Complete translation structure
export interface Translation {
    navbar: NavbarTranslations;
    hero: HeroTranslations;
    features: FeaturesTranslations;
    products: ProductsTranslations;
    ai_section: AISectionTranslations;
    roadmap: RoadmapTranslations;
    tokenomics: TokenomicsTranslations;
    footer: FooterTranslations;
    footer_section: FooterSectionTranslations;
    blockchain_page: BlockchainPageTranslations;
    social_page: SocialPageTranslations;
    p2p_page: P2PPageTranslations;
    dex_page: DEXPageTranslations;
    wallet_page: WalletPageTranslations;
    coming_soon: ComingSoonTranslations;
    whitepapers_page: WhitepapersPageTranslations;
    whitepaper_viewer: WhitepaperViewerTranslations;
    airdrop_page: AirdropPageTranslations;
}

// Whitepapers Page translations
export interface WhitepapersPageTranslations {
    hero: {
        title: string;
        subtitle: string;
        search_placeholder: string;
    };
    items: {
        id: string;
        title: string;
        desc: string;
        updated: string;
        pages: string;
        read_btn: string;
    }[];
    no_results: {
        title: string;
        desc: string;
        clear: string;
    };
    cta: {
        title: string;
        subtitle: string;
        button: string;
    };
}

// Whitepaper Viewer translations
export interface WhitepaperSection {
    title: string;
    content?: string;
    items?: string[];
}

export interface WhitepaperContent {
    title: string;
    subtitle: string;
    version: string;
    abstract_title: string;
    abstract: string;
    intro_title?: string;
    intro_content?: string;
    sections: WhitepaperSection[];
    conclusion_title?: string;
    conclusion_content?: string;
    references_title: string;
}

export interface WhitepaperViewerTranslations {
    back_label: string;
    by_author: string;
    not_found: { title: string; desc: string; back: string };
    blockchain: WhitepaperContent;
    social: WhitepaperContent;
    p2p: WhitepaperContent;
    dex: WhitepaperContent;
    wallet: WhitepaperContent;
    stablecoin: WhitepaperContent;
    nft: WhitepaperContent;
    token: WhitepaperContent;
    identity: WhitepaperContent;
}

// Translations dictionary type
export type TranslationsDictionary = Record<Language, Translation>;
