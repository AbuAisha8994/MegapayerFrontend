// Blockchain Whitepaper Çok Dilli Çeviri Dosyası
// Desteklenen diller: EN, TR, UZ, RU, AR, ES

import { Language } from '@/types/i18n';

export interface BlockchainWhitepaperTranslation {
    meta: {
        title: string;
        description: string;
    };
    header: {
        back: string;
        print: string;
        download: string;
    };
    sidebar: {
        contents: string;
        version: string;
        updated: string;
        network_status: string;
        testnet_active: string;
        mainnet: string;
    };
    document: {
        technical_paper: string;
        consensus: string;
        layer1: string;
        version_date: string;
        title: string;
        subtitle: string;
        by_author: string;
        foundation: string;
    };
    abstract: {
        title: string;
        content: string;
    };
    sections: {
        executive_summary: {
            number: string;
            title: string;
            content: string;
        };
        consensus: {
            number: string;
            title: string;
            overview_title: string;
            overview_content: string;
            participants_title: string;
            validators_title: string;
            validators_items: string[];
            holders_title: string;
            holders_items: string[];
            terminology_note: string;
            block_production_title: string;
            block_production_content: string;
            block_production_items: string[];
            finality_title: string;
            finality_content: string;
            soft_finality_title: string;
            soft_finality_items: string[];
            hard_finality_title: string;
            hard_finality_items: string[];
            finality_note: string;
        };
        performance: {
            number: string;
            title: string;
            throughput_title: string;
            throughput_content: string;
            fees_title: string;
            fees_content: string;
            latency_title: string;
            latency_content: string;
        };
        validators: {
            number: string;
            title: string;
            stake_title: string;
            stake_content: string;
            hardware_title: string;
            hardware_content: string;
            comparison_title: string;
            comparison_content: string;
        };
        rewards: {
            number: string;
            title: string;
            sources_title: string;
            sources_content: string;
            distribution_title: string;
            distribution_content: string;
            holder_rewards_title: string;
            holder_rewards_content: string;
        };
        evm: {
            number: string;
            title: string;
            smart_contracts_title: string;
            smart_contracts_content: string;
            dev_features_title: string;
            dev_features_content: string;
            token_standards_title: string;
            token_standards_content: string;
        };
        security: {
            number: string;
            title: string;
            penalty_title: string;
            penalty_content: string;
            slashing_title: string;
            slashing_content: string;
            network_security_title: string;
            network_security_content: string;
        };
        ecosystem: {
            number: string;
            title: string;
            content: string;
            token_title: string;
            token_content: string;
        };
        comparison: {
            number: string;
            title: string;
            content: string;
        };
    };
    references: {
        title: string;
    };
    doc_info: {
        title: string;
        prepared_by: string;
        classification: string;
        version: string;
        public: string;
        website: string;
        documentation: string;
        disclaimer: string;
    };
    footer: {
        copyright: string;
    };
    metrics: {
        consensus: string;
        block_time: string;
        theoretical_tps: string;
        finality: string;
        min_validator_stake: string;
        evm_compatibility: string;
        avg_tx_fee: string;
        total_supply: string;
    };
    ui: {
        full_support: string;
        compatible: string;
        active: string;
        development: string;
        planned: string;
        lowest: string;
        very_high: string;
        medium: string;
        low: string;
    };
}

// English translations
export const en: BlockchainWhitepaperTranslation = {
    meta: {
        title: 'Megapayer Chain: Shared Proof of Stake - Technical Whitepaper',
        description: 'Megapayer Chain technical specifications. Shared Proof of Stake (SPoS) consensus mechanism, network performance, EVM compatibility and ecosystem details.',
    },
    header: {
        back: 'Back to Whitepapers',
        print: 'Print',
        download: 'Download PDF',
    },
    sidebar: {
        contents: 'Contents',
        version: 'Version',
        updated: 'Updated',
        network_status: 'Network Status',
        testnet_active: 'Testnet Active',
        mainnet: 'Mainnet',
    },
    document: {
        technical_paper: 'TECHNICAL PAPER',
        consensus: 'CONSENSUS',
        layer1: 'LAYER-1',
        version_date: 'Version 1.0 - January 2026',
        title: 'Megapayer Chain: Shared Proof of Stake',
        subtitle: 'Technical Whitepaper',
        by_author: 'By Megapayer Research Group',
        foundation: 'Megapayer Foundation',
    },
    abstract: {
        title: 'Abstract',
        content: 'This paper introduces Megapayer Chain, a high-throughput, energy-efficient distributed ledger technology built on the novel Shared Proof of Stake (SPoS) consensus mechanism. We address the inherent limitations of existing consensus protocols by introducing a more equitable distribution of network rewards. Unlike traditional PoS systems that rely on inflationary block rewards (which can be perceived as interest-based), SPoS distributes network revenue generated from actual economic activity.',
    },
    sections: {
        executive_summary: {
            number: '01',
            title: 'Executive Summary',
            content: 'Megapayer Chain is a next-generation Layer-1 blockchain infrastructure designed for high throughput, low latency, and accessible participation. The network introduces Shared Proof of Stake (SPoS), a profit-sharing consensus mechanism that emphasizes partnership over traditional interest-based staking models.',
        },
        consensus: {
            number: '02',
            title: 'Consensus Mechanism: Shared Proof of Stake (SPoS)',
            overview_title: '2.1 Overview',
            overview_content: 'Shared Proof of Stake (SPoS) is Megapayer\'s proprietary consensus mechanism that combines the security benefits of Proof of Stake with an equitable profit-sharing model. Unlike traditional PoS systems that rely on inflationary block rewards (which can be perceived as interest-based), SPoS distributes network revenue generated from actual economic activity.',
            participants_title: '2.2 Participant Roles',
            validators_title: 'Validators',
            validators_items: [
                'Operate network nodes that validate transactions and produce blocks',
                'Required to stake a minimum of 1,000 MPC tokens',
                'Must maintain 24/7 node uptime with reliable hardware',
                'May accept delegations from Holders to increase their stake weight',
                'Earn rewards proportional to their contribution to network security',
            ],
            holders_title: 'Holders (Delegators)',
            holders_items: [
                'Token holders who delegate their MPC to validators',
                'Share in network profits without running infrastructure',
                'Form a partnership relationship with their chosen validator',
                'Can withdraw or redelegate at any time (subject to unbonding period)',
            ],
            terminology_note: 'Terminology Note: Megapayer uses "Holder" instead of "Staker" to emphasize the partnership nature of the relationship rather than a lending/interest model.',
            block_production_title: '2.3 Block Production',
            block_production_content: 'Validators are selected for block production based on:',
            block_production_items: [
                'Stake Weight: Total stake (self-stake + delegated holdings)',
                'Reputation Score: Historical uptime and performance metrics',
                'Round-Robin Rotation: Ensures fair distribution of block production opportunities',
            ],
            finality_title: '2.4 Finality Model',
            finality_content: 'Megapayer implements a dual-finality system:',
            soft_finality_title: 'Soft Finality (Probabilistic)',
            soft_finality_items: [
                'Time: ~2 seconds (1 block)',
                'Guarantee: Transaction visible and included in chain',
                'Use Case: Suitable for most applications (payments, transfers, dApp interactions)',
                'Reversal Risk: Extremely low under normal network conditions',
            ],
            hard_finality_title: 'Hard Finality (Deterministic)',
            hard_finality_items: [
                'Time: Variable (typically within a few blocks to minutes, depending on network conditions)',
                'Mechanism: GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement)',
                'Guarantee: Cryptographically irreversible once finalized',
                'Use Case: High-value transactions, cross-chain bridges, institutional settlements',
            ],
            finality_note: 'Note: GRANDPA finality time depends on network conditions and validator set size. Finality typically occurs within minutes under normal conditions. GRANDPA validators vote on chains rather than blocks, allowing for fast finality of multiple blocks at once.',
        },
        performance: {
            number: '03',
            title: 'Network Performance',
            throughput_title: '3.1 Transaction Throughput',
            throughput_content: 'Megapayer Chain achieves a theoretical maximum capacity of 65,000+ transactions per second through optimized transaction processing pipeline, efficient state management, parallel transaction execution where possible, and low-overhead consensus messaging.',
            fees_title: '3.2 Transaction Fees',
            fees_content: 'The fee structure ensures accessibility for micro-transactions while preventing spam through minimum fee requirements and supporting sustainable validator economics. Average transaction fee is below $0.001.',
            latency_title: '3.3 Latency Characteristics',
            latency_content: 'Transaction broadcast occurs in under 100ms, block inclusion and soft confirmation in ~2 seconds, and hard finality within 5-10 minutes.',
        },
        validators: {
            number: '04',
            title: 'Validator Requirements',
            stake_title: '4.1 Minimum Stake',
            stake_content: 'Megapayer\'s low minimum stake requirement (1,000 MPC worth ~$800) is designed to maximize decentralization and accessibility, allowing broader participation compared to networks requiring substantial capital investment.',
            hardware_title: '4.2 Hardware Requirements',
            hardware_content: 'Megapayer is designed to run on commodity hardware, making validation accessible to a wider range of participants. Minimum requirements: 8-core CPU (x86_64), 16 GB RAM, 500 GB NVMe SSD, and 100 Mbps symmetric network. 99%+ uptime required.',
            comparison_title: '4.3 Industry Comparison',
            comparison_content: 'Megapayer\'s total entry cost ($1,300-$1,800) is significantly lower than major networks like Ethereum (~$85,000), Avalanche (~$61,000), Solana (~$937,000+), and Cosmos (~$45,000).',
        },
        rewards: {
            number: '05',
            title: 'Reward Distribution Model',
            sources_title: '5.1 Revenue Sources',
            sources_content: 'Unlike inflationary token models, Megapayer validators earn from actual network activity: transaction fees (gas fees from all network transactions), ecosystem revenue share (DEX trading fees, P2P exchange fees, NFT marketplace fees, social platform premium features), and time-limited bootstrap rewards during network growth phase.',
            distribution_title: '5.2 Distribution Formula',
            distribution_content: 'Network rewards are distributed per block: Block producer 50%, validator pool 20% (distributed among all active validators), holders 30% (distributed to delegators via their validators).',
            holder_rewards_title: '5.3 Holder Rewards',
            holder_rewards_content: 'Holders receive their share through validators. Formula: Holder Reward = (Holder\'s Delegation / Validator\'s Total Stake) × Validator\'s Holder Allocation. Validators may set commission rates, which are transparently displayed before delegation.',
        },
        evm: {
            number: '06',
            title: 'EVM Compatibility',
            smart_contracts_title: '6.1 Smart Contract Support',
            smart_contracts_content: 'Megapayer Chain is fully EVM-compatible, enabling seamless deployment of existing Ethereum smart contracts. EVM version is London+ compatible, Solidity 0.8.x (up to 0.8.28), Vyper full support, OpenZeppelin, Hardhat, Truffle and Foundry compatible.',
            dev_features_title: '6.2 Development Features',
            dev_features_content: 'Megapayer includes an integrated AI assistant for smart contract development: natural language to Solidity conversion, automated security analysis, gas optimization suggestions, and one-click deployment.',
            token_standards_title: '6.3 Supported Token Standards',
            token_standards_content: 'Full support for ERC-20 (fungible tokens), ERC-721 (NFTs), ERC-1155 (multi-token standard), and ERC-4626 (tokenized vaults).',
        },
        security: {
            number: '07',
            title: 'Security Model',
            penalty_title: '7.1 Penalty System',
            penalty_content: 'Megapayer implements a progressive penalty system that prioritizes education and correction over punitive slashing. The system consists of three levels: Warning and reward reduction (minor infractions), temporary restriction (repeated violations), and slashing (serious violations - 7-day deferral period with governance cancellation possible).',
            slashing_title: '7.2 Slashing Policy',
            slashing_content: 'Validators can be slashed for equivocation (double-signing) and other serious violations. Slashed funds are sent to Treasury. Within the 7-day deferral period, slashes can be cancelled by 3/4 council majority or root. Reporter reward is 10% of slashed funds.',
            network_security_title: '7.3 Network Security',
            network_security_content: 'Byzantine Fault Tolerance (2/3+ honest validator assumption), Sybil Resistance (stake-weighted voting power), Finality Guarantee (GRANDPA deterministic finality), and Double-Spend Protection (instant soft finality) features provide security.',
        },
        ecosystem: {
            number: '08',
            title: 'Ecosystem Overview',
            content: 'Megapayer is not just a blockchain, it is a comprehensive Web3 ecosystem with integrated applications. The ecosystem includes: Megapayer Chain (Layer-1 with SPoS), Universal Wallet (multi-chain asset management), Multi-Chain DEX (cross-chain token swaps), P2P Exchange (peer-to-peer fiat/crypto trading), MPUSD Stablecoin (1:1 USD-backed), Zenith Social (decentralized social media), NFT Marketplace, Cross-Chain Bridge, and MPC ID (decentralized digital identity).',
            token_title: 'Native Token: MPC',
            token_content: 'Megapayer Coin (MPC) has a fixed supply of 100,000,000, is non-inflationary (deflationary model). Primary uses: gas fees, staking, and governance.',
        },
        comparison: {
            number: '09',
            title: 'Technical Comparison',
            content: 'Megapayer offers a competitive position in performance, accessibility, and feature set.',
        },
    },
    references: {
        title: 'References',
    },
    doc_info: {
        title: 'Document Information',
        prepared_by: 'Prepared by',
        classification: 'Classification',
        version: 'Version',
        public: 'Public',
        website: 'Website',
        documentation: 'Documentation',
        disclaimer: 'This technical specification document is provided for informational purposes. Specifications are subject to change as the network evolves. Performance metrics represent theoretical maximums and targets; actual performance may vary based on network conditions.',
    },
    footer: {
        copyright: '© 2026 Megapayer. All rights reserved.',
    },
    metrics: {
        consensus: 'Shared Proof of Stake (SPoS)',
        block_time: '~2 seconds',
        theoretical_tps: '65,000+',
        finality: 'Soft: ~2s / Hard: 5-10m',
        min_validator_stake: '1,000 MPC (~$800)',
        evm_compatibility: 'Full (Solidity 0.8.x, Vyper)',
        avg_tx_fee: '< $0.001',
        total_supply: '100,000,000 MPC (Fixed)',
    },
    ui: {
        full_support: 'Full Support',
        compatible: 'Compatible',
        active: 'Active',
        development: 'Development',
        planned: 'Planned',
        lowest: 'Lowest',
        very_high: 'Very High',
        medium: 'Medium',
        low: 'Low',
    },
};

// Turkish translations
export const tr: BlockchainWhitepaperTranslation = {
    meta: {
        title: 'Megapayer Chain: Paylaşımlı Hisse Kanıtı - Teknik Whitepaper',
        description: 'Megapayer Chain teknik spesifikasyonları. Paylaşımlı Hisse Kanıtı (SPoS) konsensüs mekanizması, ağ performansı, EVM uyumluluğu ve ekosistem detayları.',
    },
    header: {
        back: 'Tüm Whitepaper\'lara Dön',
        print: 'Yazdır',
        download: 'PDF İndir',
    },
    sidebar: {
        contents: 'İçindekiler',
        version: 'Versiyon',
        updated: 'Güncelleme',
        network_status: 'Ağ Durumu',
        testnet_active: 'Testnet Aktif',
        mainnet: 'Mainnet',
    },
    document: {
        technical_paper: 'TEKNİK DÖKÜMAN',
        consensus: 'KONSENSÜS',
        layer1: 'LAYER-1',
        version_date: 'Versiyon 1.0 - Ocak 2026',
        title: 'Megapayer Chain: Paylaşımlı Hisse Kanıtı',
        subtitle: 'Teknik Whitepaper',
        by_author: 'Megapayer Research Group',
        foundation: 'Megapayer Foundation',
    },
    abstract: {
        title: 'Özet',
        content: 'Bu döküman, yeni Paylaşımlı Hisse Kanıtı (SPoS) konsensüs mekanizması üzerine inşa edilmiş, yüksek verimli ve enerji tasarruflu bir dağıtık defter teknolojisi olan Megapayer Chain\'i tanıtmaktadır. Mevcut konsensüs protokollerinin doğal sınırlamalarını, ağ ödüllerinin daha adil dağıtımını sağlayan yenilikçi bir yaklaşımla ele alıyoruz. Geleneksel PoS sistemlerinin enflasyonist blok ödüllerine güvenmek yerine, SPoS gerçek ekonomik aktiviteden elde edilen ağ gelirini dağıtır.',
    },
    sections: {
        executive_summary: {
            number: '01',
            title: 'Yönetici Özeti',
            content: 'Megapayer Chain, yüksek verimlilik, düşük gecikme ve erişilebilir katılım için tasarlanmış yeni nesil Layer-1 blokzincir altyapısıdır. Ağ, geleneksel faiz tabanlı stake modellerinden ziyade ortaklığı vurgulayan bir kar paylaşım konsensüs mekanizması olan Paylaşımlı Hisse Kanıtı (SPoS)\'u tanıtmaktadır.',
        },
        consensus: {
            number: '02',
            title: 'Konsensüs Mekanizması: Paylaşımlı Hisse Kanıtı (SPoS)',
            overview_title: '2.1 Genel Bakış',
            overview_content: 'Paylaşımlı Hisse Kanıtı (SPoS), Megapayer\'in tescilli konsensüs mekanizmasıdır ve Proof of Stake\'in güvenlik avantajlarını adil bir kar paylaşım modeliyle birleştirir. Enflasyonist blok ödüllerine dayanan geleneksel PoS sistemlerinden farklı olarak, SPoS gerçek ekonomik aktiviteden elde edilen ağ gelirini dağıtır.',
            participants_title: '2.2 Katılımcı Rolleri',
            validators_title: 'Doğrulayıcılar (Validators)',
            validators_items: [
                'İşlemleri doğrulayan ve blok üreten ağ düğümlerini işletir',
                'Minimum 1,000 MPC token stake etmesi gerekir',
                'Güvenilir donanımla 7/24 düğüm çalışma süresi sağlamalıdır',
                'Stake ağırlıklarını artırmak için Holder\'lardan delegasyon kabul edebilir',
                'Ağ güvenliğine katkılarıyla orantılı ödül kazanır',
            ],
            holders_title: 'Holder\'lar (Delegatörler)',
            holders_items: [
                'MPC\'lerini doğrulayıcılara delege eden token sahipleri',
                'Altyapı işletmeden ağ karlarından pay alır',
                'Seçtikleri doğrulayıcı ile ortaklık ilişkisi kurar',
                'İstedikleri zaman çekebilir veya yeniden delege edebilir (unbonding süresine tabi)',
            ],
            terminology_note: 'Terminoloji Notu: Megapayer, borç verme/faiz modeli yerine ilişkinin ortaklık doğasını vurgulamak için "Staker" yerine "Holder" terimini kullanır.',
            block_production_title: '2.3 Blok Üretimi',
            block_production_content: 'Doğrulayıcılar, blok üretimi için aşağıdaki kriterlere göre seçilir:',
            block_production_items: [
                'Stake Ağırlığı: Toplam stake (öz-stake + delege edilen holdingler)',
                'Reputation Skoru: Geçmiş çalışma süresi ve performans metrikleri',
                'Round-Robin Rotasyonu: Blok üretim fırsatlarının adil dağılımını sağlar',
            ],
            finality_title: '2.4 Finality Modeli',
            finality_content: 'Megapayer, ikili finality sistemi uygular:',
            soft_finality_title: 'Soft Finality (Olasılıksal)',
            soft_finality_items: [
                'Süre: ~2 saniye (1 blok)',
                'Garanti: İşlem görünür ve zincire dahil edilmiş',
                'Kullanım: Çoğu uygulama için uygun (ödemeler, transferler, dApp etkileşimleri)',
                'Geri Alma Riski: Normal ağ koşullarında son derece düşük',
            ],
            hard_finality_title: 'Hard Finality (Deterministik)',
            hard_finality_items: [
                'Süre: Değişken (genellikle birkaç bloktan dakikalara, ağ koşullarına bağlı)',
                'Mekanizma: GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement)',
                'Garanti: Finalize edildikten sonra kriptografik olarak geri alınamaz',
                'Kullanım: Yüksek değerli işlemler, çapraz zincir köprüleri, kurumsal anlaşmalar',
            ],
            finality_note: 'Not: GRANDPA finality süresi ağ koşullarına ve doğrulayıcı seti boyutuna bağlıdır. Finality genellikle normal koşullarda dakikalar içinde gerçekleşir.',
        },
        performance: {
            number: '03',
            title: 'Ağ Performansı',
            throughput_title: '3.1 İşlem Verimi',
            throughput_content: 'Megapayer Chain, optimize edilmiş işlem işleme pipeline\'ı, verimli durum yönetimi, paralel işlem yürütme ve düşük yüklü konsensüs mesajlaşması sayesinde saniyede 65,000+ işlem teorik maksimum kapasitesine ulaşır.',
            fees_title: '3.2 İşlem Ücretleri',
            fees_content: 'Ücret yapısı, mikro-işlemlere erişilebilirlik sağlarken minimum ücret gereksinimleri ile spam\'i önler ve sürdürülebilir doğrulayıcı ekonomisini destekler. Ortalama işlem ücreti $0.001\'in altındadır.',
            latency_title: '3.3 Gecikme Karakteristikleri',
            latency_content: 'İşlem yayını 100ms\'nin altında, blok dahil etme ve soft onay ~2 saniye, hard finality ise 5-10 dakika içinde gerçekleşir.',
        },
        validators: {
            number: '04',
            title: 'Doğrulayıcı Gereksinimleri',
            stake_title: '4.1 Minimum Stake',
            stake_content: 'Megapayer\'in düşük minimum stake gereksinimi (~$800 değerinde 1,000 MPC), önemli sermaye yatırımı gerektiren ağlara kıyasla daha geniş katılıma olanak tanıyarak merkeziyetsizliği ve erişilebilirliği maksimize etmek için tasarlanmıştır.',
            hardware_title: '4.2 Donanım Gereksinimleri',
            hardware_content: 'Megapayer, commodity donanımda çalışacak şekilde tasarlanmıştır. Minimum gereksinimler: 8 çekirdekli CPU (x86_64), 16 GB RAM, 500 GB NVMe SSD ve 100 Mbps simetrik ağ. %99+ çalışma süresi gereklidir.',
            comparison_title: '4.3 Endüstri Karşılaştırması',
            comparison_content: 'Megapayer\'in toplam giriş maliyeti ($1,300-$1,800), Ethereum (~$85,000), Avalanche (~$61,000), Solana (~$937,000+) ve Cosmos (~$45,000) gibi büyük ağlara kıyasla çok daha düşüktür.',
        },
        rewards: {
            number: '05',
            title: 'Ödül Dağıtım Modeli',
            sources_title: '5.1 Gelir Kaynakları',
            sources_content: 'Enflasyonist token modellerinden farklı olarak, Megapayer doğrulayıcıları gerçek ağ aktivitesinden kazanç sağlar: İşlem ücretleri, ekosistem gelir payı (DEX, P2P, NFT, sosyal platform ücretleri) ve ağ büyüme aşamasında bootstrap ödülleri.',
            distribution_title: '5.2 Dağıtım Formülü',
            distribution_content: 'Ağ ödülleri her blokta şu şekilde dağıtılır: Blok üreticisi %50, doğrulayıcı havuzu %20, holder\'lar %30.',
            holder_rewards_title: '5.3 Holder Ödülleri',
            holder_rewards_content: 'Holder\'lar paylarını doğrulayıcılar aracılığıyla alır. Formül: Holder Ödülü = (Holder Delegasyonu / Doğrulayıcı Toplam Stake) × Doğrulayıcı Holder Payı.',
        },
        evm: {
            number: '06',
            title: 'EVM Uyumluluğu',
            smart_contracts_title: '6.1 Akıllı Sözleşme Desteği',
            smart_contracts_content: 'Megapayer Chain, tam EVM uyumludur. EVM versiyonu London+ uyumlu, Solidity 0.8.x, Vyper tam destek, OpenZeppelin, Hardhat, Truffle ve Foundry uyumludur.',
            dev_features_title: '6.2 Geliştirme Özellikleri',
            dev_features_content: 'Megapayer, akıllı sözleşme geliştirme için entegre bir AI asistanı içerir: doğal dil ile Solidity\'e dönüşüm, otomatik güvenlik analizi, gas optimizasyon önerileri ve tek tıkla dağıtım.',
            token_standards_title: '6.3 Desteklenen Token Standartları',
            token_standards_content: 'ERC-20, ERC-721, ERC-1155 ve ERC-4626 için tam destek mevcuttur.',
        },
        security: {
            number: '07',
            title: 'Güvenlik Modeli',
            penalty_title: '7.1 Ceza Sistemi',
            penalty_content: 'Megapayer, cezalandırıcı slashing yerine eğitim ve düzeltmeye öncelik veren kademeli bir ceza sistemi uygular. Üç seviye: Uyarı ve ödül azaltma, geçici kısıtlama, ve slashing (7 gün erteleme ile yönetişim iptali mümkün).',
            slashing_title: '7.2 Slashing Politikası',
            slashing_content: 'Doğrulayıcılar equivocation ve ciddi ihlaller için slashing\'e tabi tutulabilir. Kesilen fonlar Hazine\'ye gönderilir. 7 günlük erteleme süresinde slash\'ler konseyin 3/4 çoğunluğu tarafından iptal edilebilir.',
            network_security_title: '7.3 Ağ Güvenliği',
            network_security_content: 'Byzantine Fault Tolerance, Sybil Resistance, GRANDPA Finality Guarantee ve Double-Spend Protection özellikleri ile güvenlik sağlanır.',
        },
        ecosystem: {
            number: '08',
            title: 'Ekosistem Genel Bakış',
            content: 'Megapayer sadece bir blokzincir değil, entegre uygulamalarla kapsamlı bir Web3 ekosistemidir. Ekosistem şunları içerir: Megapayer Chain, Universal Wallet, Multi-Chain DEX, P2P Exchange, MPUSD Stablecoin, Zenith Social, NFT Marketplace, Cross-Chain Bridge ve MPC ID.',
            token_title: 'Native Token: MPC',
            token_content: 'Megapayer Coin (MPC), 100,000,000 sabit arza sahip, deflasyonist modeldir. Kullanım alanları: gas ücretleri, staking ve yönetişim.',
        },
        comparison: {
            number: '09',
            title: 'Teknik Karşılaştırma',
            content: 'Megapayer, performans, erişilebilirlik ve özellik setinde rekabetçi bir konum sunmaktadır.',
        },
    },
    references: {
        title: 'Referanslar',
    },
    doc_info: {
        title: 'Döküman Bilgileri',
        prepared_by: 'Hazırlayan',
        classification: 'Sınıflandırma',
        version: 'Versiyon',
        public: 'Herkese Açık',
        website: 'Web',
        documentation: 'Dokümantasyon',
        disclaimer: 'Bu teknik spesifikasyon belgesi bilgilendirme amaçlıdır. Ağ geliştikçe spesifikasyonlar değişebilir. Performans metrikleri teorik maksimumları ve hedefleri temsil eder.',
    },
    footer: {
        copyright: '© 2026 Megapayer. Tüm hakları saklıdır.',
    },
    metrics: {
        consensus: 'Paylaşımlı Hisse Kanıtı (SPoS)',
        block_time: '~2 saniye',
        theoretical_tps: '65,000+',
        finality: 'Soft: ~2s / Hard: 5-10d',
        min_validator_stake: '1,000 MPC (~$800)',
        evm_compatibility: 'Tam (Solidity 0.8.x, Vyper)',
        avg_tx_fee: '< $0.001',
        total_supply: '100,000,000 MPC (Sabit)',
    },
    ui: {
        full_support: 'Tam Destek',
        compatible: 'Uyumlu',
        active: 'Aktif',
        development: 'Geliştirme',
        planned: 'Planlanmış',
        lowest: 'En Düşük',
        very_high: 'Çok Yüksek',
        medium: 'Orta',
        low: 'Düşük',
    },
};

// Import other language translations
import { uz } from './blockchainWhitepaperTranslations.uz';
import { ru } from './blockchainWhitepaperTranslations.ru';
import { ar } from './blockchainWhitepaperTranslations.ar';
import { es } from './blockchainWhitepaperTranslations.es';

// Export all translations
export const blockchainWhitepaperTranslations: Record<Language, BlockchainWhitepaperTranslation> = {
    en,
    tr,
    uz,
    ru,
    ar,
    es,
};

export default blockchainWhitepaperTranslations;
