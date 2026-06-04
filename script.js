const app = document.querySelector("#app");
const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const search = document.querySelector("[data-search]");
const signup = document.querySelector("[data-signup]");
const homeTemplate = app.innerHTML;

const img = {
  marineOne: "https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=1800",
  portrait: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=82",
  vance: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=82",
  app: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=82",
  salute: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=82",
  founding: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=82",
  wire: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=82",
  healthcare: "https://images.pexels.com/photos/14751157/pexels-photo-14751157.jpeg?auto=compress&cs=tinysrgb&w=1600",
  investment: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=82",
  eastWing: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=82"
};

const newsItems = [
  ["Mega Lists Solana Liquid Staking Pair With Zero Maker Fees", "Product Releases", "May 22, 2026", "THE MEGA opens a new SOL liquid staking market with promotional maker pricing and expanded validator transparency."],
  ["Institutional Desk Clears Record BTC Block Trade", "Market Updates", "May 22, 2026", "The OTC desk completed its largest single Bitcoin block execution while keeping spread impact below internal risk limits."],
  ["Proof-of-Reserves Snapshot Adds Twelve New Assets", "Security Briefings", "May 21, 2026", "The latest reserve report expands public wallet coverage and adds additional attestations for mid-cap assets."],
  ["Mega Pay Opens Instant Stablecoin Settlements for Merchants", "Product Releases", "May 21, 2026", "Merchants can now settle USDT, USDC, and EURC balances directly from the Mega Pay dashboard."],
  ["Weekly Liquidity Note: ETH Options Demand Rises", "Research", "May 20, 2026", "Mega Research reviews rising implied volatility, growing ETH options depth, and institutional positioning."],
  ["Client Trust Team Blocks Coordinated Phishing Campaign", "Security Briefings", "May 20, 2026", "Account protection systems flagged malicious domains, froze compromised withdrawals, and notified affected users."],
  ["Mega Launchpad Opens Applications for Tokenized Credit Projects", "Partnerships", "May 19, 2026", "Builders working on compliant tokenized credit can now apply for listing reviews and liquidity support."],
  ["New API Version Improves Order Routing Latency", "Product Releases", "May 19, 2026", "Version 4.2 of the trading API reduces average request overhead for high-frequency clients."],
  ["Asia-Pacific Banking Rail Adds Local Currency Deposits", "Partnerships", "May 18, 2026", "Users in selected APAC markets receive faster fiat deposits through a new regulated payment partner."],
  ["Market Wire: Bitcoin Holds Above Key Liquidity Band", "Market Updates", "May 18, 2026", "Mega analysts outline spot demand, futures basis, and order-book levels watched by active traders."],
  ["Mega Earn Introduces Flexible TON Rewards", "Product Releases", "May 17, 2026", "Users can allocate TON to flexible earn products while retaining daily redemption access."],
  ["Cold Wallet Rotation Completed Across Major Networks", "Security Briefings", "May 17, 2026", "Infrastructure teams completed a planned custody rotation with no disruption to deposits or withdrawals."],
  ["European Compliance Hub Expands Licensing Team", "Compliance Notes", "May 16, 2026", "THE MEGA adds regulatory specialists to support regional licensing, reporting, and consumer protection programs."],
  ["Research Desk Publishes Stablecoin Flow Dashboard", "Research", "May 16, 2026", "A new dashboard tracks stablecoin minting, redemptions, exchange inflows, and cross-chain bridge movement."],
  ["Mega Card Adds Crypto Cashback Controls", "Product Releases", "May 15, 2026", "Card users can select cashback assets, set spending limits, and automate conversion preferences."],
  ["Global Market Makers Join Mega Liquidity Program", "Partnerships", "May 15, 2026", "Five professional liquidity providers join an incentive program focused on tighter spreads in new listings."],
  ["Risk Engine Update Tightens Leverage Tiers", "Security Briefings", "May 14, 2026", "Selected perpetual markets receive updated leverage brackets to reduce liquidation cascades during volatility."],
  ["Market Wire: AI Tokens Lead Weekly Rotation", "Market Updates", "May 14, 2026", "Spot volumes show renewed interest in AI infrastructure tokens, with funding rates remaining balanced."],
  ["Mega Academy Launches On-Chain Basics Course", "Product Releases", "May 13, 2026", "The learning portal adds wallet safety, gas fees, staking, and bridge-risk lessons for new users."],
  ["Custody Service Adds Multi-Approver Withdrawal Rules", "Product Releases", "May 13, 2026", "Institutional accounts can require layered approvals, address books, and time locks for withdrawals."],
  ["Quarterly Transparency Report Released", "Compliance Notes", "May 12, 2026", "The report summarizes law-enforcement requests, user protection metrics, and market integrity actions."],
  ["Mega Ventures Backs Cross-Chain Data Startup", "Partnerships", "May 12, 2026", "The venture arm invests in infrastructure for auditable cross-chain pricing and settlement proofs."],
  ["Market Wire: Stablecoin Supply Reaches New High", "Market Updates", "May 11, 2026", "Mega Research tracks stablecoin growth across trading venues and its relationship to spot liquidity."],
  ["Spot Grid Bot Adds Drawdown Guardrails", "Product Releases", "May 11, 2026", "Automated strategies now support max drawdown triggers, smarter rebalancing, and clearer performance cards."],
  ["Bug Bounty Rewards Increased for Critical Reports", "Security Briefings", "May 10, 2026", "THE MEGA raises maximum rewards for critical custody, API, and account-security vulnerabilities."],
  ["Latin America Fiat Gateway Adds Weekend Processing", "Partnerships", "May 10, 2026", "Selected bank transfers now clear during weekends through an upgraded regional payments partner."],
  ["Research Desk Reviews Restaking Risk", "Research", "May 9, 2026", "A new report explains restaking yields, slashing exposure, validator concentration, and portfolio suitability."],
  ["Mega Pro Interface Adds Custom Market Workspaces", "Product Releases", "May 9, 2026", "Advanced traders can save multiple chart, order-book, and account panels for different strategies."],
  ["Market Integrity Team Publishes Wash-Trading Update", "Compliance Notes", "May 8, 2026", "Surveillance models removed suspicious activity from several low-liquidity pairs and improved alert review times."],
  ["Mega Wallet Adds Hardware Key Recovery Flow", "Security Briefings", "May 8, 2026", "Users can now configure recovery steps with hardware keys and trusted devices for stronger account resilience."],
  ["Market Wire: Meme Coin Volumes Normalize", "Market Updates", "May 7, 2026", "After a volatile week, meme coin turnover returns toward average levels while spreads remain elevated."],
  ["Listing Review Opens for Real-World Asset Tokens", "Product Releases", "May 7, 2026", "Projects representing treasuries, credit, commodities, and invoices can submit structured listing materials."],
  ["Mega Institutional Adds Portfolio Margin Reports", "Product Releases", "May 6, 2026", "Qualified clients receive clearer margin attribution across spot, futures, options, and collateral balances."],
  ["Compliance Training Portal Opens to Partners", "Compliance Notes", "May 6, 2026", "Payment partners and listed projects can access updated training on sanctions, fraud, and user protection."],
  ["Research Desk Tracks Bitcoin ETF Flow Divergence", "Research", "May 5, 2026", "Mega Research compares ETF creations, exchange balances, futures basis, and long-term holder behavior."],
  ["Mega Cloud Matching Cluster Completes Stress Test", "Security Briefings", "May 5, 2026", "Engineers tested peak-load order matching, failover, and disaster recovery ahead of major product launches."],
  ["Dubai Client Lounge Opens for Institutional Consultations", "Partnerships", "May 4, 2026", "The new hub supports family offices, funds, and professional traders with onboarding and custody guidance."],
  ["Market Wire: Altcoin Breadth Improves", "Market Updates", "May 4, 2026", "More mid-cap assets close above short-term moving averages as liquidity rotates beyond Bitcoin and Ethereum."],
  ["Mega Earn Adds Auto-Compound Controls", "Product Releases", "May 3, 2026", "Users can turn on automated compounding by asset, strategy, and risk profile."],
  ["Account Login Alerts Gain Region-Based Rules", "Security Briefings", "May 3, 2026", "Security settings now let users flag new regions, devices, and browser fingerprints before trading starts."],
  ["Research Desk Publishes Layer-2 Fee Index", "Research", "May 2, 2026", "The index compares transfer costs, confirmation times, and bridge activity across leading Layer-2 networks."],
  ["Mega Lists Three New EUR Stablecoin Pairs", "Product Releases", "May 2, 2026", "EURC markets expand for BTC, ETH, and SOL as European users request more local settlement options."],
  ["Global Support Team Cuts Median Response Time", "Market Updates", "May 1, 2026", "Expanded staffing and AI triage reduce median support response time for account and payment tickets."],
  ["Mega Signs Liquidity Partnership With Tokenized Treasury Platform", "Partnerships", "May 1, 2026", "The partnership aims to deepen secondary markets for compliant short-duration treasury products."],
  ["Withdrawal Risk Checks Add Address Reputation Scores", "Security Briefings", "April 30, 2026", "Outbound transfers now receive additional address screening powered by multiple blockchain intelligence providers."],
  ["Market Wire: Futures Open Interest Climbs", "Market Updates", "April 30, 2026", "Perpetual markets show rising open interest while funding remains near neutral across major pairs."],
  ["Mega Academy Adds Institutional Crypto Accounting Guide", "Research", "April 29, 2026", "Treasury teams receive a practical guide for custody records, transaction labeling, and reporting workflows."],
  ["New Convert Tool Supports Scheduled Stablecoin Swaps", "Product Releases", "April 29, 2026", "Users can automate recurring conversions between supported stablecoins at transparent quoted rates."],
  ["Regional Desk Opens Dedicated Miner Services", "Partnerships", "April 28, 2026", "Mining firms can access treasury management, OTC execution, and custody services through a specialized team."],
  ["Mega Publishes Market Resilience Playbook", "Security Briefings", "April 28, 2026", "The playbook explains circuit breakers, liquidity monitoring, incident communication, and user protection practices."]
].map(([title, category, date, summary], index) => ({
  title,
  category,
  date,
  summary,
  body: `${summary} The update is part of THE MEGA's broader work to keep crypto markets liquid, secure, transparent, and accessible for every user segment.`,
  slug: `news-item-${index + 1}`
}));

const galleryItems = [
  ["Mega leadership reviews the next generation trading dashboard", img.healthcare, "Product"],
  ["Global markets team arrives for the annual liquidity summit", img.marineOne, "Markets"],
  ["Regional partners meet with the Mega compliance council", img.salute, "Partnerships"],
  ["Institutional clients attend a digital asset custody briefing", img.investment, "Events"],
  ["Mega Academy hosts an introduction to secure self-custody", img.founding, "Education"],
  ["Engineering leaders present the market resilience roadmap", img.wire, "Technology"],
  ["Executive council welcomes newly listed project founders", img.eastWing, "Listings"],
  ["Official Mega App launch materials", img.app, "App"]
].map(([title, image, collection]) => ({ title, image, collection }));

const priorities = [
  ["ai", "Lead AI-Powered Trading", "Use intelligent routing, risk alerts, and market analytics to help users make faster, clearer decisions.", img.wire],
  ["economy", "Grow Global Liquidity", "Deepen spot, futures, options, OTC, and stablecoin markets across every major digital asset category.", img.investment],
  ["national-security", "Strengthen Market Security", "Protect users with layered custody, withdrawal controls, monitoring, and continuous proof-of-reserves.", img.salute],
  ["doge", "Expand On-Chain Data", "Turn blockchain activity into useful dashboards for traders, builders, institutions, and analysts.", img.marineOne],
  ["maha", "Educate New Traders", "Make crypto easier to understand through Mega Academy, wallet safety guides, and product walkthroughs.", img.healthcare],
  ["border", "Protect User Assets", "Keep accounts, deposits, withdrawals, and trading activity guarded by advanced risk systems.", img.founding],
  ["energy", "Scale Blockchain Infrastructure", "Invest in faster matching, resilient cloud clusters, and integrations with leading blockchain networks.", img.marineOne],
  ["public-safety", "Support Market Integrity", "Detect manipulation, reduce abusive activity, and preserve fair access to liquidity.", img.salute],
  ["religious-liberty", "Open Financial Access", "Give users more control over how they store, trade, invest, and move digital value.", img.eastWing]
].map(([slug, title, summary, image]) => ({ slug, title, summary, image }));

const people = [
  ["donald-j-trump", "Alexander Vale", "Founder and Chief Executive Officer", img.portrait],
  ["melania-trump", "Maya Stone", "Chief Client Trust Officer", img.founding],
  ["jd-vance", "Noah Cross", "Chief Markets Officer", img.vance],
  ["usha-vance", "Elena Park", "Chief Compliance Officer", img.salute],
  ["cabinet", "Executive Council", "The senior leadership team guiding THE MEGA", img.eastWing]
].map(([slug, name, role, image]) => ({ slug, name, role, image }));

const pageMap = {
  "wh-wire": ["Stocks", "A live-style market surface for crypto pairs, liquidity depth, and desk signals across THE MEGA.", img.wire],
  live: ["Mega App", "Trade, track markets, manage wallets, and receive live alerts from the official Mega mobile app.", img.marineOne],
  videos: ["Video Library", "Product walkthroughs, market briefings, founder interviews, and security explainers.", img.salute],
  "media-offenders": ["Trust Center", "Security notes, transparency reports, scam warnings, and market integrity updates.", img.wire],
  investments: ["Mega Investments", "A showcase of treasury products, venture backing, launchpad projects, and institutional services.", img.investment],
  saveamerica: ["Our Partners", "Payment providers, blockchain networks, market makers, custody specialists, and listed project teams.", img.founding],
  freedom250: ["Mega Launchpad", "Early access to reviewed Web3 projects, token launches, and builder programs.", img.founding],
  "working-families-tax-cuts": ["Fee Savings", "Lower trading costs, VIP tiers, fee rebates, and campaign rewards for active users.", img.investment],
  app: ["Official Mega App", "Real-time prices, live news, wallet controls, and direct access to the Mega exchange.", img.app],
  visit: ["Mega Hubs", "Regional client lounges, institutional consultations, education events, and community meetups.", img.eastWing],
  internships: ["Careers at THE MEGA", "Roles for engineers, analysts, compliance experts, designers, and market operators.", img.salute],
  "find-your-representative": ["Find Your Regional Desk", "Connect with the right Mega support, institutional, compliance, or partner team.", img.marineOne],
  subscribe: ["Stay Informed", "Get direct Mega market, listing, product, and security updates in your inbox.", img.app],
  privacy: ["Privacy Policy", "How THE MEGA handles account data, security controls, communications, and user privacy.", img.eastWing]
};

const stockRows = [
  ["BTC", "Bitcoin", "$104,820", "+2.48%", "$2.1B", "72", "Core"],
  ["ETH", "Ethereum", "$5,420", "+1.36%", "$892M", "68", "Core"],
  ["SOL", "Solana", "$286.14", "+5.91%", "$431M", "81", "Momentum"],
  ["BNB", "BNB", "$742.60", "-0.42%", "$226M", "54", "Defensive"],
  ["LINK", "Chainlink", "$32.18", "+3.08%", "$118M", "64", "Data"],
  ["AAVE", "Aave", "$418.75", "+2.22%", "$74M", "61", "DeFi"]
].map(([symbol, name, price, change, volume, depth, desk]) => ({ symbol, name, price, change, volume, depth, desk }));

const stockSignals = [
  ["Liquidity Pulse", "Major books are balanced with stronger bid support across BTC and SOL."],
  ["Volatility Band", "Funding remains contained while options demand lifts short-term ranges."],
  ["Institutional Flow", "OTC tickets are rotating from stablecoins into large-cap exposure."]
].map(([title, text]) => ({ title, text }));

const partnerGroups = [
  ["Fiat Rails", "Local deposits, card processing, and stable settlement corridors for global users.", "32 corridors"],
  ["Market Makers", "Professional liquidity partners tightening spreads across spot and derivatives books.", "18 desks"],
  ["Custody", "Audited wallet, cold-storage, and withdrawal-control providers for institutional accounts.", "11 routes"],
  ["Networks", "Layer-1, Layer-2, oracle, and bridge teams supporting new listings and on-chain data.", "27 integrations"]
].map(([title, text, metric]) => ({ title, text, metric }));

const partnerRows = [
  ["Atlas Flow", "Liquidity", "BTC, ETH, SOL", "Global"],
  ["Meridian Pay", "Payments", "USD, EUR, USDC", "North America"],
  ["Cobalt Custody", "Security", "Cold storage", "Institutional"],
  ["Nova Chain Labs", "Infrastructure", "L2 data feeds", "Developer"],
  ["Aster Bridge", "Networks", "Cross-chain routing", "Multi-chain"]
].map(([name, category, scope, region]) => ({ name, category, scope, region }));

const partnerLogos = [
  ["Apple", "https://cdn.simpleicons.org/apple/ffffff"],
  ["Google", "https://cdn.simpleicons.org/google/4285F4"],
  ["Microsoft", "https://cdn.simpleicons.org/microsoft/5E5E5E"],
  ["Visa", "https://cdn.simpleicons.org/visa/1A1F71"],
  ["Mastercard", "https://cdn.simpleicons.org/mastercard/EB001B"],
  ["AWS", "https://cdn.simpleicons.org/amazonwebservices/FF9900"],
  ["NVIDIA", "https://cdn.simpleicons.org/nvidia/76B900"],
  ["Cloudflare", "https://cdn.simpleicons.org/cloudflare/F38020"]
].map(([name, logo]) => ({ name, logo }));

const investmentPillars = [
  ["Treasury Yield", "Stablecoin allocation, tokenized bills, and short-duration products for conservative capital."],
  ["Venture Access", "Reviewed infrastructure, DeFi, data, and payment projects before broader market visibility."],
  ["Market Strategies", "Spot baskets, rebalancing mandates, structured exposure, and liquidity-aware execution."],
  ["Institutional Custody", "Segregated wallets, reporting, approval flows, and risk controls for managed portfolios."]
].map(([title, text]) => ({ title, text }));

const investmentStack = [
  ["Core", "BTC / ETH", "44%"],
  ["Income", "Stable Yield", "26%"],
  ["Growth", "Launchpad", "18%"],
  ["Hedge", "Options", "12%"]
].map(([label, asset, weight]) => ({ label, asset, weight }));

const lockBody = () => document.body.classList.add("is-locked");
const unlockBody = () => {
  if (![menu, search, signup].some((panel) => panel?.open)) {
    document.body.classList.remove("is-locked");
  }
};

const openDialog = (dialog) => {
  if (!dialog || dialog.open) return;
  dialog.showModal();
  dialog.classList.remove("is-closing");
  requestAnimationFrame(() => dialog.classList.add("is-opening"));
  lockBody();
};

const closeDialog = (dialog) => {
  if (!dialog || !dialog.open) return;
  dialog.classList.remove("is-opening");
  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.classList.remove("is-closing");
    dialog.close();
    unlockBody();
  }, dialog === menu ? 360 : 180);
};

const path = () => (window.location.hash.replace(/^#\/?/, "") || "").replace(/\/$/, "");
const normalizeCategory = (value) => value.toLowerCase().replaceAll("&", "").replaceAll("  ", " ").trim().replaceAll(" ", "-");
const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[char]);

const setTitle = (title) => {
  document.title = title ? `${title} - The Mega` : "The Mega";
};

const card = ({ title, kicker, text, image, href = "#/" }) => `
  <a class="feature-card" href="${href}">
    ${image ? `<img src="${image}" alt="">` : ""}
    <span>${kicker || "THE MEGA"}</span>
    <h3>${title}</h3>
    ${text ? `<p>${text}</p>` : ""}
  </a>
`;

const pageHero = (title, deck, image = img.marineOne) => `
  <section class="page-hero" style="--page-image: url('${image}')">
    <div>
      <p>THE MEGA</p>
      <h1>${title}</h1>
      <span>${deck}</span>
    </div>
  </section>
`;

const homePage = () => {
  setTitle("");
  app.innerHTML = homeTemplate;
};

const newsPage = (category = "all", pageNumber = 1) => {
  const normalizedCategory = category === "page" ? "all" : category;
  const label = normalizedCategory === "all" ? "News" : normalizedCategory.replaceAll("-", " ");
  const filtered = normalizedCategory === "all" || normalizedCategory === "releases"
    ? newsItems
    : newsItems.filter((item) => normalizeCategory(item.category).includes(normalizedCategory));
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const activePage = Math.min(Math.max(Number(pageNumber) || 1, 1), pageCount);
  const visibleItems = filtered.slice((activePage - 1) * pageSize, activePage * pageSize);
  const pageHref = (page) => normalizedCategory === "all" ? `#/news/page/${page}` : `#/news/${normalizedCategory}/page/${page}`;

  setTitle("News");
  app.innerHTML = `
    ${pageHero("News", "Search, filter, and browse the latest Mega exchange updates.", img.marineOne)}
    <section class="page-shell">
      <div class="filter-bar" aria-label="News categories">
        ${["all", "releases", "market-updates", "security-briefings", "product-releases", "compliance-notes", "research", "partnerships"].map((item) => `
          <a class="${normalizedCategory === item ? "is-active" : ""}" href="#/news${item === "all" ? "" : `/${item}`}">${item.replaceAll("-", " ")}</a>
        `).join("")}
      </div>
      <h2 class="section-title">${label}</h2>
      <div class="news-slider">
        <label for="news-page-slider">Showing ${visibleItems.length} of ${filtered.length} updates</label>
        <input id="news-page-slider" data-news-slider type="range" min="1" max="${pageCount}" value="${activePage}" step="1" aria-label="News page">
        <span>Page ${activePage} of ${pageCount}</span>
      </div>
      <div class="news-list">
        ${visibleItems.map((item) => `
          <article>
            <a href="#/article/${item.slug}"><h3>${item.title}</h3></a>
            <p>${item.category}</p>
            <time>${item.date}</time>
          </article>
        `).join("") || `<p>No local items in this filter.</p>`}
      </div>
      <div class="pagination">
        ${Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => `<a class="${page === activePage ? "is-active" : ""}" href="${pageHref(page)}">${page}</a>`).join("")}
      </div>
    </section>
  `;
};

const galleryPage = () => {
  setTitle("Gallery");
  app.innerHTML = `
    ${pageHero("Gallery", "Product, market, education, and partner moments from THE MEGA.", img.salute)}
    <section class="page-shell">
      <div class="filter-bar">
        ${["Collections", "Markets", "Partnerships", "Security", "Product", "Education", "Listings", "Events", "Hubs"].map((item) => `<a href="#/gallery">${item}</a>`).join("")}
      </div>
      <div class="card-grid card-grid--gallery">
        ${galleryItems.map((item) => card({ title: item.title, kicker: item.collection, image: item.image, href: "#/gallery/collection" })).join("")}
      </div>
    </section>
  `;
};

const administrationPage = () => {
  setTitle("Leadership");
  app.innerHTML = `
    ${pageHero("Mega Leadership", "Meet the operators guiding the world's largest digital asset exchange.", img.portrait)}
    <section class="page-shell">
      <div class="profile-grid">
        ${people.map((person) => card({ title: person.name, kicker: person.role, image: person.image, href: `#/administration/${person.slug}` })).join("")}
      </div>
      <div class="office-band">
        <h2>Exchange Operations</h2>
        <a href="#/administration/omb">Markets and Liquidity</a>
        <a href="#/administration/ostp">Product and Engineering</a>
        <a href="#/administration/cea">Research and Strategy</a>
        <a href="#/administration/oncd">Security Operations</a>
        <a href="#/administration/ondcp">Compliance and Trust</a>
      </div>
    </section>
  `;
};

const personPage = (slug) => {
  const person = people.find((item) => item.slug === slug) || people[0];
  setTitle(person.name);
  app.innerHTML = `
    ${pageHero(person.name, person.role, person.image)}
    <section class="page-shell detail-layout">
      <div>
        <p class="eyebrow">Leadership</p>
        <h2>${person.name}</h2>
        <p>${person.role}</p>
        <p>This profile introduces the leadership role behind THE MEGA's trading products, custody systems, compliance standards, and global client operations.</p>
      </div>
      <img src="${person.image}" alt="">
    </section>
  `;
};

const prioritiesPage = (slug) => {
  const priority = priorities.find((item) => item.slug === slug);
  setTitle(priority ? priority.title : "Priorities");
  app.innerHTML = priority
    ? `
      ${pageHero(priority.title, priority.summary, priority.image)}
      <section class="page-shell detail-layout">
        <div>
          <p class="eyebrow">Top Priority</p>
          <h2>${priority.title}</h2>
          <p>${priority.summary}</p>
          <p>Each Mega priority connects product development, risk management, liquidity access, and user education into one exchange-wide roadmap.</p>
        </div>
        <div class="stat-grid">
          <strong>Exchange Focus</strong>
          <span>Product releases</span>
          <span>Security updates</span>
          <span>Market reports</span>
        </div>
      </section>
    `
    : `
      ${pageHero("Priorities", "Key initiatives for trading, custody, education, and market access.", img.marineOne)}
      <section class="page-shell">
        <div class="card-grid">
          ${priorities.map((item) => card({ title: item.title, kicker: "Priority", text: item.summary, image: item.image, href: `#/priorities/${item.slug}` })).join("")}
        </div>
      </section>
    `;
};

const genericPage = (slug) => {
  const page = pageMap[slug] || [slug.split("-").map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" "), "A local Mega section for exchange products, markets, and client services.", img.marineOne];
  setTitle(page[0]);
  app.innerHTML = `
    ${pageHero(page[0], page[1], page[2])}
    <section class="page-shell detail-layout">
      <div>
        <p class="eyebrow">THE MEGA</p>
        <h2>${page[0]}</h2>
        <p>${page[1]}</p>
        <p>This section keeps the original visual rhythm while reframing the content around a global crypto exchange: users, markets, security, products, and partners.</p>
        <div class="cta-row">
          <a class="button" href="#/news">Latest News</a>
          <a class="button button--ghost" href="#/contact">Contact</a>
        </div>
      </div>
      <div class="card-grid card-grid--compact">
        ${newsItems.slice(0, 3).map((item) => card({ title: item.title, kicker: item.category, text: item.date, href: `#/article/${item.slug}` })).join("")}
      </div>
    </section>
  `;
};

const stocksPage = () => {
  setTitle("Stocks");
  app.innerHTML = `
    ${pageHero("Stocks", "A live-style market surface for crypto pairs, liquidity depth, and desk signals across THE MEGA.", img.wire)}
    <section class="page-shell stocks-shell">
      <div class="market-tape" aria-label="Market tape">
        ${stockRows.map((item) => `<span><strong>${item.symbol}</strong> ${item.price} <em class="${item.change.startsWith("-") ? "is-down" : "is-up"}">${item.change}</em></span>`).join("")}
      </div>

      <section class="stocks-board" aria-label="Mega market board">
        <div class="stocks-board__lead reveal">
          <p class="eyebrow">Mega Markets</p>
          <h2>Digital asset flow without the noise.</h2>
          <p>Stocks is the Mega trading desk view: headline pairs, order-book depth, volume rotation, and research signals brought into one calm interface for active traders.</p>
        </div>

        <div class="quote-terminal reveal" aria-label="Featured market snapshot">
          <div class="quote-terminal__top">
            <span>BTC/USD</span>
            <strong>$104,820</strong>
            <em>+2.48%</em>
          </div>
          <div class="quote-terminal__chart" aria-hidden="true">
            ${[38, 48, 42, 61, 55, 72, 66, 78, 74, 86, 81, 92].map((height) => `<i style="--h: ${height}%"></i>`).join("")}
          </div>
          <div class="quote-terminal__stats">
            <span><b>24H Volume</b>$2.1B</span>
            <span><b>Book Depth</b>72%</span>
            <span><b>Desk Bias</b>Accumulation</span>
          </div>
        </div>
      </section>

      <section class="market-table" aria-label="Tracked markets">
        <div class="market-table__head">
          <span>Asset</span>
          <span>Last</span>
          <span>24H</span>
          <span>Volume</span>
          <span>Depth</span>
          <span>Desk</span>
        </div>
        ${stockRows.map((item) => `
          <a href="#/news/market-updates" class="market-row">
            <span><strong>${item.symbol}</strong><small>${item.name}</small></span>
            <span>${item.price}</span>
            <span class="${item.change.startsWith("-") ? "is-down" : "is-up"}">${item.change}</span>
            <span>${item.volume}</span>
            <span><i style="--depth: ${item.depth}%"></i></span>
            <span>${item.desk}</span>
          </a>
        `).join("")}
      </section>

      <section class="signal-strip" aria-label="Market signals">
        ${stockSignals.map((item) => `
          <article>
            <span>${item.title}</span>
            <p>${item.text}</p>
          </article>
        `).join("")}
      </section>
    </section>
  `;
};

const partnersPage = () => {
  setTitle("Our Partners");
  app.innerHTML = `
    ${pageHero("Our Partners", "The regulated rails, liquidity desks, custody providers, and network teams connected to THE MEGA.", img.founding)}
    <section class="page-shell partners-shell">
      <section class="partners-intro">
        <div class="partners-intro__copy reveal">
          <p class="eyebrow">Mega Network</p>
          <h2>One exchange layer, many trusted operators.</h2>
          <p>THE MEGA works with specialized partners where they matter most: fiat access, market depth, custody resilience, on-chain connectivity, and listing readiness.</p>
        </div>
        <div class="partner-metrics reveal" aria-label="Partner network metrics">
          <span><strong>88</strong> active operators</span>
          <span><strong>42</strong> regulated corridors</span>
          <span><strong>24/7</strong> settlement coverage</span>
        </div>
      </section>

      <section class="partner-network" aria-label="Partner network map">
        <div class="partner-network__core">
          <span>THE</span>
          <strong>MEGA</strong>
        </div>
        ${partnerGroups.map((item) => `
          <article>
            <span>${item.metric}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join("")}
        <div class="partner-logo-wall" aria-label="Enterprise partner logos">
          <span>Enterprise Partners</span>
          <strong>Global technology and payment leaders connected to Mega rails.</strong>
          <div class="partner-logo-grid">
            ${partnerLogos.map((item) => `
              <figure>
                <img src="${item.logo}" alt="${item.name}">
                <figcaption>${item.name}</figcaption>
              </figure>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="partner-directory" aria-label="Partner directory">
        <div class="partner-directory__head">
          <span>Partner</span>
          <span>Category</span>
          <span>Scope</span>
          <span>Coverage</span>
        </div>
        ${partnerRows.map((item) => `
          <a class="partner-row" href="#/contact">
            <span><strong>${item.name}</strong></span>
            <span>${item.category}</span>
            <span>${item.scope}</span>
            <span>${item.region}</span>
          </a>
        `).join("")}
      </section>
    </section>
  `;
};

const investmentsPage = () => {
  setTitle("Investments");
  app.innerHTML = `
    ${pageHero("Investments", "Structured crypto exposure, treasury products, launchpad access, and institutional portfolio controls.", img.investment)}
    <section class="page-shell investments-shell">
      <section class="investment-hero-panel">
        <div class="investment-copy reveal">
          <p class="eyebrow">Mega Capital</p>
          <h2>Invest with exchange-native market intelligence.</h2>
          <p>THE MEGA connects custody, liquidity, research, and execution into one investment layer for users who want more than a simple buy button.</p>
          <div class="investment-actions">
            <a class="button" href="#/contact">Institutional Desk</a>
            <a class="button button--ghost" href="#/news/research">Research Notes</a>
          </div>
        </div>

        <div class="capital-illustration reveal" aria-label="Portfolio allocation illustration">
          <div class="capital-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="capital-card">
            <span>Model Portfolio</span>
            <strong>$48.6M</strong>
            <em>+18.4% YTD</em>
          </div>
          <div class="allocation-stack">
            ${investmentStack.map((item) => `
              <div>
                <span>${item.label}</span>
                <strong>${item.asset}</strong>
                <i style="--w: ${item.weight}"></i>
                <em>${item.weight}</em>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="investment-pillars" aria-label="Investment products">
        ${investmentPillars.map((item, index) => `
          <article>
            <span>0${index + 1}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join("")}
      </section>

      <section class="investment-ribbon" aria-label="Capital flow">
        <div>
          <span>Capital Flow</span>
          <strong>Deposit</strong>
        </div>
        <div>
          <span>Risk Layer</span>
          <strong>Custody</strong>
        </div>
        <div>
          <span>Execution</span>
          <strong>Allocate</strong>
        </div>
        <div>
          <span>Reporting</span>
          <strong>Monitor</strong>
        </div>
      </section>
    </section>
  `;
};

const contactPage = () => {
  setTitle("Contact Us");
  app.innerHTML = `
    ${pageHero("Contact Us", "Send a message, find the right desk, or connect with Mega support.", img.eastWing)}
    <section class="page-shell contact-layout">
      <form class="contact-form">
        <label>Prefix <select><option>Select</option><option>Mr.</option><option>Ms.</option><option>Dr.</option></select></label>
        <label>First Name <input type="text"></label>
        <label>Last Name <input type="text"></label>
        <label>Email <input type="email" placeholder="email@example.com"></label>
        <label>Topic <select><option>General Message</option><option>Account Support</option><option>Institutional Desk</option><option>Listing Inquiry</option></select></label>
        <label class="span-2">Comments <textarea rows="7"></textarea></label>
        <button type="submit">Submit</button>
      </form>
      <aside>
        <h2>THE MEGA</h2>
        <p>Global Exchange Desk<br>New York, NY</p>
        <a href="#/visit">Visit a Mega Hub</a>
        <a href="#/find-your-representative">Find Your Regional Desk</a>
      </aside>
    </section>
  `;
};

const articlePage = (slug) => {
  const item = newsItems.find((entry) => entry.slug === slug) || newsItems[0];
  setTitle(item.title);
  app.innerHTML = `
    ${pageHero(item.title, `${item.category} • ${item.date}`, img.marineOne)}
    <article class="page-shell article">
      <p class="eyebrow">${item.category}</p>
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <p>${item.body}</p>
      <p>Mega clients can follow related updates through the Market Wire, official app alerts, and category filters in the newsroom.</p>
      <div class="cta-row"><a class="button" href="#/news">Back to News</a></div>
    </article>
  `;
};

const searchPage = (query = "") => {
  const normalized = query.trim().toLowerCase();
  const haystack = [
    ...newsItems.map((item) => ({ title: item.title, meta: item.category, text: `${item.summary} ${item.body} ${item.date}`, href: `#/article/${item.slug}` })),
    ...priorities.map((item) => ({ title: item.title, meta: "Priority", text: item.summary, href: `#/priorities/${item.slug}` })),
    ...people.map((item) => ({ title: item.name, meta: item.role, text: "leadership executive team markets custody compliance security", href: `#/administration/${item.slug}` })),
    ...Object.entries(pageMap).map(([slug, page]) => ({ title: page[0], meta: "Page", text: `${page[1]} ${slug.replaceAll("-", " ")}`, href: `#/${slug}` }))
  ];
  const results = normalized ? haystack.filter((item) => `${item.title} ${item.meta} ${item.text}`.toLowerCase().includes(normalized)) : haystack.slice(0, 12);
  const safeQuery = escapeHTML(query);
  setTitle("Search");
  app.innerHTML = `
    ${pageHero("Search", normalized ? `Results for "${safeQuery}"` : "Search THE MEGA", img.marineOne)}
    <section class="page-shell">
      <form class="inline-search" data-inline-search>
        <input type="search" value="${safeQuery}" placeholder="Search markets, listings, security, app">
        <button type="submit">Search</button>
      </form>
      <div class="news-list search-results">
        ${results.map((item) => `<article><a href="${item.href}"><h3>${item.title}</h3></a><p>${item.meta}</p></article>`).join("") || "<p>No Mega results found.</p>"}
      </div>
    </section>
  `;
};

const render = () => {
  const current = path();
  const [section, sub, third, fourth] = current.split("/");

  if (!current) homePage();
  else if (section === "news") {
    if (sub === "page") newsPage("all", third);
    else if (third === "page") newsPage(sub || "all", fourth);
    else newsPage(sub || "all");
  }
  else if (section === "gallery") galleryPage();
  else if (section === "administration" && sub) personPage(sub);
  else if (section === "administration") administrationPage();
  else if (section === "priorities") prioritiesPage(sub);
  else if (section === "contact") contactPage();
  else if (section === "article") articlePage(sub);
  else if (section === "search") searchPage(decodeURIComponent(sub || ""));
  else if (section === "wh-wire") stocksPage();
  else if (section === "saveamerica") partnersPage();
  else if (section === "investments") investmentsPage();
  else genericPage(section);

  closeDialog(menu);
  closeDialog(search);
  window.scrollTo({ top: 0, behavior: "auto" });
  wirePage();
};

const wirePage = () => {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

  document.querySelectorAll(".priority").forEach((priority) => {
    const video = priority.querySelector("video");
    video?.addEventListener("loadeddata", () => priority.classList.add("is-video-ready"));
    priority.addEventListener("mouseenter", () => {
      document.querySelectorAll(".priority").forEach((item) => item.classList.remove("is-active"));
      priority.classList.add("is-active");
      video?.play().catch(() => {});
    });
    priority.addEventListener("mouseleave", () => video?.pause());
  });

  const heroVideo = document.querySelector(".hero__video");
  heroVideo?.addEventListener("loadeddata", () => document.querySelector(".hero")?.classList.add("is-video-ready"), { once: true });
  if (heroVideo?.readyState >= 2) document.querySelector(".hero")?.classList.add("is-video-ready");
  heroVideo?.play().catch(() => {});
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 90 || path() !== "");
};

document.querySelector("[data-menu-open]")?.addEventListener("click", () => openDialog(menu));
document.querySelector("[data-menu-close]")?.addEventListener("click", () => closeDialog(menu));
document.querySelector("[data-search-open]")?.addEventListener("click", () => openDialog(search));
document.querySelector("[data-search-close]")?.addEventListener("click", () => closeDialog(search));
document.querySelector("[data-signup-close]")?.addEventListener("click", () => {
  sessionStorage.setItem("whCloneSignupClosed", "1");
  closeDialog(signup);
});

[menu, search, signup].forEach((dialog) => {
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog?.querySelector("form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = event.currentTarget.querySelector("input[type='search'], input[type='email']")?.value || "";
    if (dialog === search && value.trim()) {
      window.location.hash = `#/search/${encodeURIComponent(value.trim())}`;
    }
  });
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("[data-inline-search]")) {
    event.preventDefault();
    const value = event.target.querySelector("input")?.value || "";
    window.location.hash = `#/search/${encodeURIComponent(value.trim())}`;
  }
  if (event.target.matches(".contact-form, .newsletter form")) {
    event.preventDefault();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-news-slider]")) {
    const current = path();
    const [, sub, third] = current.split("/");
    const page = event.target.value;
    window.location.hash = sub && sub !== "page" ? `#/news/${sub}/page/${page}` : `#/news/page/${page}`;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  [menu, search, signup].forEach(closeDialog);
});

window.addEventListener("hashchange", () => {
  render();
  updateHeader();
});
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("load", () => {
  render();
  updateHeader();
  window.setTimeout(() => {
    if (!sessionStorage.getItem("whCloneSignupClosed") && window.innerWidth >= 720 && path() === "") {
      openDialog(signup);
    }
  }, 1800);
});
