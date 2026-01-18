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
}

// Hero section translations
export interface HeroTranslations {
    badge: string;
    title_line1: string;
    title_highlight: string;
    title_line2: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    stats_transactions: string;
    stats_users: string;
    stats_volume: string;
    stats_chains: string;
}

// Features section translations
export interface FeaturesTranslations {
    badge: string;
    title: string;
    title_highlight: string;
    description: string;
    feature1_title: string;
    feature1_description: string;
    feature2_title: string;
    feature2_description: string;
    feature3_title: string;
    feature3_description: string;
    feature4_title: string;
    feature4_description: string;
}

// Ecosystem section translations
export interface EcosystemTranslations {
    badge: string;
    title: string;
    title_highlight: string;
    description: string;
    wallet_title: string;
    wallet_description: string;
    dex_title: string;
    dex_description: string;
    p2p_title: string;
    p2p_description: string;
    explorer_title: string;
    explorer_description: string;
    social_title: string;
    social_description: string;
    blockchain_title: string;
    blockchain_description: string;
}

// Roadmap section translations
export interface RoadmapTranslations {
    badge: string;
    title: string;
    title_highlight: string;
    description: string;
    phase1_title: string;
    phase1_description: string;
    phase2_title: string;
    phase2_description: string;
    phase3_title: string;
    phase3_description: string;
    phase4_title: string;
    phase4_description: string;
}

// Footer translations
export interface FooterTranslations {
    description: string;
    products_title: string;
    resources_title: string;
    company_title: string;
    legal_title: string;
    newsletter_title: string;
    newsletter_placeholder: string;
    newsletter_button: string;
    copyright: string;
    privacy_policy: string;
    terms_of_service: string;
}

// Common/shared translations
export interface CommonTranslations {
    learn_more: string;
    get_started: string;
    coming_soon: string;
    connect_wallet: string;
    disconnect: string;
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    back: string;
    next: string;
    view_all: string;
    search: string;
    close: string;
}

// Complete translation structure
export interface Translation {
    navbar: NavbarTranslations;
    hero: HeroTranslations;
    features: FeaturesTranslations;
    ecosystem: EcosystemTranslations;
    roadmap: RoadmapTranslations;
    footer: FooterTranslations;
    common: CommonTranslations;
}

// Translations dictionary type
export type TranslationsDictionary = Record<Language, Translation>;
