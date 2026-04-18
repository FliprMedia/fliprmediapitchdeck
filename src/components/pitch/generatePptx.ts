import PptxGenJS from "pptxgenjs";

// Brand colors
const BG = "080D1A";
const PANEL = "0F1626";
const PANEL_BORDER = "1E2A40";
const WHITE = "FFFFFF";
const MUTED = "9AA3B5";
const TEAL = "00E5C3";
const ACCENT = "8B5CF6";
const DESTRUCTIVE = "FF5470";

type Slide = PptxGenJS.Slide;

const setBg = (slide: Slide) => {
  slide.background = { color: BG };
  // Subtle accent glow
  slide.addShape("ellipse", {
    x: 8, y: -1, w: 4, h: 4,
    fill: { color: TEAL, transparency: 92 },
    line: { type: "none" },
  });
  slide.addShape("ellipse", {
    x: -1, y: 4, w: 3.5, h: 3.5,
    fill: { color: ACCENT, transparency: 94 },
    line: { type: "none" },
  });
};

const addLabel = (slide: Slide, num: string, text: string) => {
  slide.addText(`${num} — ${text}`, {
    x: 0.5, y: 0.35, w: 8, h: 0.3,
    fontSize: 11, color: TEAL, bold: true,
    fontFace: "Consolas", charSpacing: 3,
  });
};

const addTitle = (slide: Slide, title: string, italicPart?: string) => {
  const opts: any = {
    x: 0.5, y: 0.7, w: 12.5, h: 1.0,
    fontSize: 30, color: WHITE, bold: true,
    fontFace: "Calibri", valign: "top",
  };
  if (italicPart) {
    slide.addText(
      [
        { text: title + " ", options: { color: WHITE, bold: true } },
        { text: italicPart, options: { color: TEAL, italic: true, bold: true } },
      ],
      opts
    );
  } else {
    slide.addText(title, opts);
  }
};

const addSubhead = (slide: Slide, text: string, y = 1.7) => {
  slide.addText(text, {
    x: 0.5, y, w: 12.5, h: 0.5,
    fontSize: 14, color: MUTED,
    fontFace: "Calibri",
  });
};

const panel = (slide: Slide, x: number, y: number, w: number, h: number) => {
  slide.addShape("roundRect", {
    x, y, w, h,
    fill: { color: PANEL },
    line: { color: PANEL_BORDER, width: 0.75 },
    rectRadius: 0.08,
  });
};

const cardWithTitle = (
  slide: Slide,
  x: number, y: number, w: number, h: number,
  title: string, body: string,
  accent: string = TEAL
) => {
  panel(slide, x, y, w, h);
  // top accent line
  slide.addShape("rect", {
    x, y, w: w * 0.35, h: 0.03,
    fill: { color: accent }, line: { type: "none" },
  });
  slide.addText(title, {
    x: x + 0.2, y: y + 0.15, w: w - 0.4, h: 0.4,
    fontSize: 14, color: WHITE, bold: true, fontFace: "Calibri",
  });
  slide.addText(body, {
    x: x + 0.2, y: y + 0.6, w: w - 0.4, h: h - 0.7,
    fontSize: 11, color: MUTED, fontFace: "Calibri", valign: "top",
  });
};

const footer = (slide: Slide, n: number, total: number) => {
  slide.addText("FLIPR.MEDIA — INVESTOR PRESENTATION 2026", {
    x: 0.5, y: 7.05, w: 8, h: 0.25,
    fontSize: 9, color: MUTED, fontFace: "Consolas", charSpacing: 2,
  });
  slide.addText(`${n} / ${total}`, {
    x: 12, y: 7.05, w: 1, h: 0.25,
    fontSize: 9, color: MUTED, align: "right", fontFace: "Consolas",
  });
};

export async function generatePptx() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
  pptx.title = "Flipr.Media — Investor Deck 2026";
  pptx.author = "Flipr.Media";
  const total = 18;

  // ============ SLIDE 1 — COVER ============
  {
    const s = pptx.addSlide();
    setBg(s);
    s.addText("● INVESTOR PRESENTATION — 2026", {
      x: 0.7, y: 0.8, w: 6, h: 0.4,
      fontSize: 12, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 3,
    });
    s.addText("Flipr.Media", {
      x: 0.7, y: 1.4, w: 12, h: 1.4,
      fontSize: 80, color: WHITE, bold: true, fontFace: "Calibri",
    });
    s.addText(
      [
        { text: "The media, discovery, and intelligence platform ", options: { color: WHITE, bold: true } },
        { text: "for the $170B+ live commerce economy.", options: { color: TEAL, italic: true, bold: true } },
      ],
      { x: 0.7, y: 2.9, w: 11.5, h: 1.2, fontSize: 24, fontFace: "Calibri" }
    );
    s.addText(
      "A focused $250K pre-seed to complete the platform, activate monetization, and validate category demand — with founder-led execution and disciplined capital efficiency.",
      { x: 0.7, y: 4.2, w: 10.5, h: 0.9, fontSize: 14, color: MUTED, fontFace: "Calibri" }
    );

    // Raise pill
    panel(s, 0.7, 5.2, 5.5, 0.9);
    s.addText("RAISING", { x: 0.9, y: 5.45, w: 1.2, h: 0.4, fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 3 });
    s.addText("$250K", { x: 2.1, y: 5.3, w: 2, h: 0.7, fontSize: 32, color: WHITE, bold: true, fontFace: "Calibri" });
    s.addText("Pre-Seed / SAFE", { x: 4.2, y: 5.45, w: 2, h: 0.4, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });

    // Stats strip
    const stats = [
      { v: "$172.86B", l: "Global Live Commerce 2025" },
      { v: "$230.28B", l: "Expected 2026 Market" },
      { v: "$14.64B", l: "US Livestream Sales 2025" },
    ];
    panel(s, 0.5, 6.4, 12.3, 0.8);
    stats.forEach((st, i) => {
      const x = 0.5 + i * 4.1;
      s.addText(st.v, { x, y: 6.45, w: 4.1, h: 0.4, fontSize: 18, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });
      s.addText(st.l, { x, y: 6.85, w: 4.1, h: 0.3, fontSize: 10, color: MUTED, align: "center", fontFace: "Calibri" });
    });
  }

  // ============ SLIDE 2 — PROBLEM ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "02", "THE PROBLEM");
    addTitle(s, "A $170B market with zero", "media infrastructure.");
    addSubhead(s, "Live commerce generates billions in GMV — yet no one covers it, ranks it, or monetizes the attention.");

    const cards = [
      { t: "Sellers & Creators", b: "• No cross-platform profile or reputation\n• No way to be discovered\n• Zero press infrastructure\n• No benchmarks to prove performance" },
      { t: "Advertisers & Brands", b: "• No dedicated media channel\n• No segmentation or targeting data\n• No sponsorship/native ad layer\n• No ROI benchmarks" },
      { t: "Platforms & Investors", b: "• No aggregated discovery layer\n• No independent reporting\n• No market intelligence or rankings\n• No trusted editorial source" },
    ];
    cards.forEach((c, i) => {
      cardWithTitle(s, 0.5 + i * 3.2, 2.4, 3.0, 4.0, c.t, c.b);
    });
    // Comparison
    cardWithTitle(s, 10.2, 2.4, 2.7, 1.9, "TODAY — Fragmented & Invisible",
      "• Stuck in Reddit & Discord\n• No discovery or data\n• No ad infrastructure\n• No editorial authority", DESTRUCTIVE);
    cardWithTitle(s, 10.2, 4.5, 2.7, 1.9, "WITH FLIPR.MEDIA — Centralized",
      "✓ One media hub for the industry\n✓ Discovery, rankings & intel\n✓ Built-in ad & sponsorship layer\n✓ Trusted editorial brand", TEAL);
    footer(s, 2, total);
  }

  // ============ SLIDE 3 — WHY NOW ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "03", "WHY NOW");
    addTitle(s, "The window is open", "right now.");
    addSubhead(s, "Six forces converging to create a once-in-a-category opportunity for a media brand that moves first.");
    const themes = [
      { t: "US Livestream Commerce Hit $14.64B", d: "Growing 30%+ YoY — fastest-rising segment in ecommerce" },
      { t: "Shoppable Media Is Mainstream", d: "30%+ of US internet users made a shoppable media purchase" },
      { t: "Creator-Merchants Are a New Asset Class", d: "Live sellers building six- and seven-figure businesses" },
      { t: "Every Major Platform Is Investing", d: "TikTok, YouTube, eBay, Whatnot — all pouring capital in" },
      { t: "Advertisers Have No Way In", d: "Brands want to reach commerce creators but no channel serves them" },
      { t: "The Category Has No Voice", d: "No TechCrunch, no Bloomberg, no PitchBook for this market" },
    ];
    themes.forEach((th, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      cardWithTitle(s, 0.5 + col * 6.3, 2.4 + row * 1.5, 6.0, 1.35, th.t, th.d);
    });
    footer(s, 3, total);
  }

  // ============ SLIDE 4 — MARKET ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "04", "MARKET OPPORTUNITY");
    addTitle(s, "Massive TAM. Clear monetization layers.", "Capital-efficient entry.");

    // TAM/SAM/SOM rings (concentric)
    const cx = 3.2, cy = 4.5;
    [
      { r: 2.4, label: "TAM", val: "$1.48T+", sub: "Global Social Commerce (2025)", color: ACCENT },
      { r: 1.7, label: "SAM", val: "$20B+", sub: "US Livestream + Ad Market", color: TEAL },
      { r: 1.0, label: "SOM", val: "$5–15M", sub: "Early Revenue Opportunity", color: TEAL },
    ].forEach(ring => {
      s.addShape("ellipse", {
        x: cx - ring.r, y: cy - ring.r, w: ring.r * 2, h: ring.r * 2,
        fill: { color: PANEL, transparency: 70 },
        line: { color: ring.color, width: 1.5 },
      });
    });
    s.addText("TAM  $1.48T+", { x: 0.8, y: 2.3, w: 5, h: 0.4, fontSize: 16, color: ACCENT, bold: true, fontFace: "Calibri" });
    s.addText("SAM  $20B+", { x: 1.4, y: 3.1, w: 4, h: 0.4, fontSize: 14, color: TEAL, bold: true, fontFace: "Calibri" });
    s.addText("SOM  $5–15M", { x: 2.3, y: 4.3, w: 2.5, h: 0.5, fontSize: 14, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });

    // Right stats grid
    const stats = [
      { v: "$172.86B", l: "Global live commerce — 2025" },
      { v: "$230.28B", l: "Expected 2026 (33% YoY)" },
      { v: "$1.48T", l: "Global social commerce 2025" },
      { v: "$14.64B", l: "US livestream ecommerce 2025" },
    ];
    stats.forEach((st, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 6.6 + col * 3.2, y = 2.4 + row * 1.5;
      panel(s, x, y, 3.0, 1.3);
      s.addText(st.v, { x: x + 0.15, y: y + 0.15, w: 2.7, h: 0.55, fontSize: 22, color: TEAL, bold: true, fontFace: "Calibri" });
      s.addText(st.l, { x: x + 0.15, y: y + 0.75, w: 2.7, h: 0.45, fontSize: 11, color: MUTED, fontFace: "Calibri" });
    });

    // SOM channels
    panel(s, 6.6, 5.5, 6.2, 1.2);
    s.addText("SOM REVENUE CHANNELS", { x: 6.75, y: 5.6, w: 6, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    s.addText("Advertising  •  Sponsorships  •  Premium Profiles  •  Newsletter  •  Featured Placements  •  Research & Data", {
      x: 6.75, y: 5.95, w: 6, h: 0.65, fontSize: 12, color: TEAL, bold: true, fontFace: "Calibri",
    });
    footer(s, 4, total);
  }

  // ============ SLIDE 5 — PRODUCT ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "05", "PRODUCT OVERVIEW");
    addTitle(s, "Already built. Already live.", "Already proving the thesis.");
    addSubhead(s, "Six operational modules today. Four high-margin modules next.");

    s.addText("● OPERATIONAL", { x: 0.5, y: 2.4, w: 4, h: 0.3, fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const op = [
      { t: "Industry News", d: "Breaking coverage across platforms" },
      { t: "Seller Spotlights", d: "In-depth creator profiles" },
      { t: "Live Show Discovery", d: "Whatnot, TikTok & more" },
      { t: "Platform Watch", d: "Deep-dive platform reporting" },
      { t: "Interviews", d: "Industry leader conversations" },
      { t: "Newsletter", d: "Daily/weekly industry briefing" },
    ];
    op.forEach((m, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      cardWithTitle(s, 0.5 + col * 4.2, 2.75 + row * 1.2, 4.0, 1.1, m.t, m.d);
    });

    s.addText("● REVENUE MODULES — NEXT", { x: 0.5, y: 5.25, w: 5, h: 0.3, fontSize: 11, color: ACCENT, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const nx = [
      { t: "Rankings & Activity Index", d: "Seller performance benchmarks" },
      { t: "Advertiser Placements", d: "Native ads & sponsored content" },
      { t: "Premium Seller Profiles", d: "Verified profiles + analytics" },
      { t: "Data & Insights", d: "Market intelligence & reports" },
    ];
    nx.forEach((m, i) => {
      cardWithTitle(s, 0.5 + i * 3.15, 5.6, 3.0, 1.3, m.t, m.d, ACCENT);
    });
    footer(s, 5, total);
  }

  // ============ SLIDE 6 — FIRST OF KIND ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "06", "FIRST-OF-ITS-KIND");
    addTitle(s, "Not another media site.", "A category-level infrastructure play.");
    addSubhead(s, "No one else is building the editorial, discovery, and advertiser layer for live selling.");

    s.addText("WHAT EXISTS TODAY", { x: 0.5, y: 2.4, w: 6, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const exists = [
      { t: "Marketplaces", d: "Facilitate transactions" },
      { t: "Social Platforms", d: "Host attention" },
      { t: "Seller Tools", d: "Help sellers operate" },
      { t: "Agencies", d: "Help with marketing" },
    ];
    exists.forEach((e, i) => {
      cardWithTitle(s, 0.5 + i * 1.65, 2.75, 1.5, 1.2, e.t, e.d);
    });
    s.addText("None cover, rank, or organize the live selling industry", {
      x: 0.5, y: 4.05, w: 6.5, h: 0.3, fontSize: 11, color: DESTRUCTIVE, italic: true, fontFace: "Calibri",
    });

    s.addText("WHY THIS IS DEFENSIBLE", { x: 7.2, y: 2.4, w: 6, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const moats = [
      { t: "First-Mover Advantage", d: "No incumbent — category is ours to define" },
      { t: "Audience Aggregation", d: "Consolidating fragmented attention" },
      { t: "Editorial Brand Equity", d: "Trust compounds — hard to replicate" },
      { t: "Proprietary Data Moat", d: "Rankings, indexes, benchmarks" },
      { t: "Advertiser Lock-In", d: "Direct relationships, switching costs" },
      { t: "Data Products & Lead Gen", d: "High-margin intelligence at scale" },
    ];
    moats.forEach((m, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      cardWithTitle(s, 7.2 + col * 2.9, 2.75 + row * 1.4, 2.75, 1.25, m.t, m.d);
    });

    panel(s, 0.5, 4.6, 6.5, 1.8);
    s.addText('"Flipr.Media sits above the platforms as the category\'s editorial layer, discovery engine, and advertiser gateway."', {
      x: 0.7, y: 4.8, w: 6.1, h: 1.4, fontSize: 14, color: WHITE, italic: true, valign: "middle", fontFace: "Calibri",
    });
    footer(s, 6, total);
  }

  // ============ SLIDE 7 — AUDIENCE ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "07", "AUDIENCE & USERS");
    addTitle(s, "Seven distinct audiences.", "All monetizable.");
    addSubhead(s, "Every stakeholder in the live commerce value chain needs what Flipr.Media is building.");

    const personas = [
      ["Sellers & Live Hosts", "Grow audience, get discovered", "News, rankings, profiles", "Premium profiles"],
      ["Buyers & Collectors", "Find shows, follow sellers", "Discovery, spotlights", "Ad impressions"],
      ["Brands", "Reach commerce creators", "Directory, sponsored content", "Sponsored / native ads"],
      ["Agencies", "Find sellers, track trends", "Rankings, seller data", "Data products, lead gen"],
      ["Platforms", "Attract sellers, show growth", "Industry press, coverage", "Sponsorships"],
      ["Advertisers", "Access niche audiences", "Targeted placements", "Display, sponsored slots"],
      ["Investors & Analysts", "Track growth, breakouts", "Industry data, reports", "Research, premium subs"],
    ];
    // header
    const headers = ["AUDIENCE", "WHAT THEY WANT", "WHY FLIPR", "MONETIZE"];
    const cols = [0.5, 3.7, 7.0, 10.3];
    const widths = [3.2, 3.3, 3.3, 2.8];
    headers.forEach((h, i) => {
      s.addText(h, { x: cols[i], y: 2.4, w: widths[i], h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    });
    personas.forEach((row, ri) => {
      const y = 2.85 + ri * 0.6;
      panel(s, 0.5, y, 12.4, 0.55);
      row.forEach((cell, ci) => {
        const isFirst = ci === 0;
        s.addText(cell, {
          x: cols[ci] + 0.1, y: y + 0.1, w: widths[ci] - 0.1, h: 0.4,
          fontSize: isFirst ? 12 : 11,
          color: isFirst ? WHITE : ci === 3 ? TEAL : MUTED,
          bold: isFirst, fontFace: "Calibri", valign: "middle",
        });
      });
    });
    footer(s, 7, total);
  }

  // ============ SLIDE 8 — BUSINESS MODEL ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "08", "BUSINESS MODEL");
    addTitle(s, "Four revenue layers.", "Increasing margin at each level.");
    addSubhead(s, "Starts with proven media economics. Scales into high-margin data and intelligence products.");

    const layers = [
      { n: "01", t: "Media & Advertising Revenue", tag: "Recurring", c: TEAL,
        items: "Display advertising  •  Sponsored newsletter  •  Branded content  •  Featured placements" },
      { n: "02", t: "Seller Products & Services", tag: "Recurring + Transactional", c: TEAL,
        items: "Premium profiles  •  Verified badges  •  Featured listings  •  Promotional packages" },
      { n: "03", t: "Enterprise & Partnerships", tag: "High-Value Contracts", c: ACCENT,
        items: "Reports & rankings  •  Brand sponsorships  •  Lead gen for agencies  •  Event partnerships" },
      { n: "04", t: "Intelligence & Data Products", tag: "High-Margin SaaS", c: ACCENT,
        items: "Subscription intel  •  Seller analytics  •  Category benchmarks  •  Job board / marketplace" },
    ];
    layers.forEach((l, i) => {
      const y = 2.4 + i * 1.15;
      panel(s, 0.5, y, 12.4, 1.0);
      s.addShape("rect", { x: 0.5, y, w: 0.08, h: 1.0, fill: { color: l.c }, line: { type: "none" } });
      s.addText(l.n, { x: 0.7, y: y + 0.15, w: 0.5, h: 0.3, fontSize: 11, color: l.c, bold: true, fontFace: "Consolas" });
      s.addText(l.t, { x: 1.2, y: y + 0.1, w: 7, h: 0.4, fontSize: 14, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(l.tag, { x: 9, y: y + 0.15, w: 3.7, h: 0.3, fontSize: 10, color: l.c, bold: true, align: "right", fontFace: "Consolas" });
      s.addText(l.items, { x: 1.2, y: y + 0.55, w: 11, h: 0.4, fontSize: 11, color: MUTED, fontFace: "Calibri" });
    });
    footer(s, 8, total);
  }

  // ============ SLIDE 9 — GO TO MARKET ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "09", "GO-TO-MARKET");
    addTitle(s, "Content builds authority. Authority builds", "a revenue engine.");
    addSubhead(s, "Three phases. Each compounds into the next. By month 9, multiple revenue streams are active.");

    const phases = [
      { n: "01", t: "Launch & Authority", tl: "Now – Month 3", c: TEAL,
        items: "• Category-defining news\n• Weekly seller interviews\n• Newsletter launch & growth\n• Platform watch coverage" },
      { n: "02", t: "Network & Monetize", tl: "Month 4 – 8", c: TEAL,
        items: "• Seller profile acquisition\n• Top creator partnerships\n• Advertiser outreach\n• Founding advertiser packages" },
      { n: "03", t: "Scale & Expand", tl: "Month 9 – 18", c: ACCENT,
        items: "• Rankings & benchmarks\n• Events & sponsorships\n• Premium products launch\n• Deeper data & intelligence" },
    ];
    phases.forEach((p, i) => {
      const x = 0.5 + i * 4.25;
      panel(s, x, 2.4, 4.0, 4.0);
      s.addShape("rect", { x, y: 2.4, w: 4.0, h: 0.04, fill: { color: p.c }, line: { type: "none" } });
      s.addText(p.n, { x: x + 0.2, y: 2.55, w: 0.5, h: 0.3, fontSize: 11, color: p.c, bold: true, fontFace: "Consolas" });
      s.addText(p.t, { x: x + 0.2, y: 2.85, w: 3.6, h: 0.4, fontSize: 16, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(p.tl, { x: x + 0.2, y: 3.3, w: 3.6, h: 0.3, fontSize: 11, color: p.c, bold: true, fontFace: "Consolas" });
      s.addText(p.items, { x: x + 0.2, y: 3.7, w: 3.6, h: 2.6, fontSize: 12, color: MUTED, fontFace: "Calibri", valign: "top" });
    });
    footer(s, 9, total);
  }

  // ============ SLIDE 10 — COMPETITIVE ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "10", "COMPETITIVE LANDSCAPE");
    addTitle(s, "No one else is building this.", "The space is wide open.");
    addSubhead(s, "None combine dedicated live selling editorial, cross-platform discovery, and advertiser infrastructure.");

    const cols = ["Live Focus", "Cross-Plat", "Editorial", "Discovery", "Ad Inv.", "Data", "Brand"];
    const rows: [string, boolean[]][] = [
      ["Flipr.Media", [true, true, true, true, true, true, true]],
      ["General Ecom Media", [false, true, true, false, true, false, false]],
      ["Creator Newsletters", [false, false, true, false, false, false, false]],
      ["Platform Communities", [true, false, false, true, false, false, false]],
      ["Marketplace Blogs", [false, false, false, false, false, false, false]],
      ["Seller Tools / SaaS", [false, false, false, true, false, true, false]],
      ["Agencies / Consultants", [false, false, false, false, true, false, false]],
    ];

    const tableY = 2.4;
    panel(s, 0.5, tableY, 12.4, 4.2);
    // headers
    s.addText("COMPETITOR", { x: 0.7, y: tableY + 0.15, w: 3.0, h: 0.3, fontSize: 9, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    cols.forEach((c, i) => {
      s.addText(c, { x: 3.7 + i * 1.32, y: tableY + 0.15, w: 1.3, h: 0.3, fontSize: 9, color: MUTED, bold: true, align: "center", fontFace: "Consolas" });
    });
    rows.forEach((r, i) => {
      const y = tableY + 0.55 + i * 0.5;
      const isHi = r[0] === "Flipr.Media";
      if (isHi) s.addShape("rect", { x: 0.55, y, w: 12.3, h: 0.45, fill: { color: TEAL, transparency: 88 }, line: { type: "none" } });
      s.addText(r[0], { x: 0.7, y: y + 0.05, w: 3.0, h: 0.4, fontSize: 12, color: isHi ? TEAL : WHITE, bold: true, fontFace: "Calibri" });
      r[1].forEach((v, j) => {
        s.addText(v ? "✓" : "—", {
          x: 3.7 + j * 1.32, y: y + 0.05, w: 1.3, h: 0.4,
          fontSize: 14, color: v ? TEAL : MUTED, bold: v, align: "center", fontFace: "Calibri",
        });
      });
    });
    footer(s, 10, total);
  }

  // ============ SLIDE 11 — ROADMAP ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "11", "PRODUCT ROADMAP");
    addTitle(s, "Media property today.", "Industry operating system tomorrow.");
    addSubhead(s, "Each phase compounds audience, data, and revenue — creating deeper moats at every stage.");

    const phases = [
      { n: "01", t: "Foundation & Polish", b: "IN PROGRESS", c: TEAL, items: "• Polish UX & design system\n• Make all pages operational\n• Forms, SEO, newsletter\n• Mobile & performance" },
      { n: "02", t: "Profiles & Monetization", b: "MONTHS 2–5", c: TEAL, items: "• Seller profile system\n• Searchable directory\n• Featured live shows\n• Monetization infra" },
      { n: "03", t: "Data & Intelligence", b: "MONTHS 6–12", c: ACCENT, items: "• Rankings / Activity Index\n• Category reports\n• Advertiser dashboards\n• Premium packages" },
      { n: "04", t: "Category Operating Layer", b: "9–12+ MONTHS", c: ACCENT, items: "• Industry intel layer\n• Sponsorship marketplace\n• Data products & API\n• Conference & awards" },
    ];
    phases.forEach((p, i) => {
      const x = 0.5 + i * 3.18;
      panel(s, x, 2.4, 3.0, 4.0);
      s.addShape("rect", { x, y: 2.4, w: 3.0, h: 0.04, fill: { color: p.c }, line: { type: "none" } });
      s.addText(p.n, { x: x + 0.2, y: 2.55, w: 0.5, h: 0.3, fontSize: 10, color: p.c, bold: true, fontFace: "Consolas" });
      s.addText(p.b, { x: x + 0.7, y: 2.55, w: 2.2, h: 0.3, fontSize: 9, color: p.c, bold: true, fontFace: "Consolas", charSpacing: 2 });
      s.addText(p.t, { x: x + 0.2, y: 2.95, w: 2.7, h: 0.5, fontSize: 14, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(p.items, { x: x + 0.2, y: 3.55, w: 2.7, h: 2.7, fontSize: 11, color: MUTED, fontFace: "Calibri", valign: "top" });
    });
    footer(s, 11, total);
  }

  // ============ SLIDE 12 — TRACTION ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "12", "TRACTION & EARLY PROOF");
    addTitle(s, "Pre-revenue,", "not pre-product.");
    addSubhead(s, "The product is live. The category position is clear. Capital unlocks revenue and scale.");

    const proofs = [
      { t: "Product Is Live", d: "Operational site with news, seller coverage, platform pages, newsletter, and discovery" },
      { t: "Category Position Clear", d: "Brand and concept validated — no competitor occupies this niche" },
      { t: "Advertiser Thesis Forming", d: "Inbound interest from brands validates demand for this audience" },
      { t: "Architecture Is Scalable", d: "Content taxonomy and monetization hooks designed for rapid expansion" },
      { t: "Capital Efficiency Proven", d: "Built to this stage with near-zero capital — demonstrating founder execution" },
    ];
    proofs.forEach((p, i) => {
      cardWithTitle(s, 0.5, 2.4 + i * 0.8, 8.5, 0.7, p.t, p.d);
    });

    panel(s, 9.3, 2.4, 3.6, 4.4);
    s.addText("BUILT WITH MINIMAL CAPITAL", { x: 9.5, y: 2.55, w: 3.2, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    s.addText("BOOTSTRAP-POWERED", { x: 9.5, y: 2.9, w: 3.2, h: 0.3, fontSize: 9, color: TEAL, bold: true, fontFace: "Consolas" });
    const built = ["Industry News Engine", "Seller Spotlights", "Live Show Discovery", "Platform Coverage", "Newsletter System", "Category Pages"];
    built.forEach((b, i) => {
      s.addText(`•  ${b}`, { x: 9.5, y: 3.4 + i * 0.45, w: 3.2, h: 0.4, fontSize: 12, color: WHITE, fontFace: "Calibri" });
    });

    panel(s, 0.5, 6.5, 12.4, 0.5);
    s.addText("$250K bridges the gap from prototype to operating business.", {
      x: 0.7, y: 6.55, w: 12, h: 0.4, fontSize: 12, color: WHITE, bold: true, italic: true, align: "center", fontFace: "Calibri",
    });
    footer(s, 12, total);
  }

  // ============ SLIDE 13 — CATEGORY LEADER ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "13", "CATEGORY LEADERSHIP");
    addTitle(s, "Own the attention. Own the data.", "Own the category economics.");
    addSubhead(s, "Value accrues to the trusted media, discovery, and intelligence layers that shape attention.");

    s.addText("WHAT FLIPR.MEDIA CONTROLS", { x: 0.5, y: 2.4, w: 6, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const controls = ["Attention", "Audience Trust", "Seller Discovery", "Advertiser Demand", "Rankings & Data", "Category Narrative", "Premium Intel"];
    controls.forEach((c, i) => {
      const col = i % 4, row = Math.floor(i / 4);
      const x = 0.5 + col * 1.55, y = 2.75 + row * 0.6;
      panel(s, x, y, 1.45, 0.5);
      s.addText(c, { x: x + 0.05, y: y + 0.08, w: 1.35, h: 0.35, fontSize: 10, color: WHITE, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    });

    s.addText("COMPARABLE CATEGORY LEADERS", { x: 6.8, y: 2.4, w: 6, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const comps = [
      ["TechCrunch", "Startups", "Acquired $30M → Verizon"],
      ["The Block", "Crypto", "Scaled to $60M+ revenue"],
      ["PitchBook", "VC/PE Data", "Acquired $225M → Morningstar"],
      ["Business of Fashion", "Fashion", "$100M+ valuation"],
      ["The Information", "Tech", "$100M+ valuation"],
    ];
    comps.forEach((c, i) => {
      const y = 2.75 + i * 0.7;
      panel(s, 6.8, y, 6.1, 0.6);
      s.addText(c[0], { x: 6.95, y: y + 0.1, w: 2.5, h: 0.4, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(c[1], { x: 9.4, y: y + 0.13, w: 1.3, h: 0.35, fontSize: 10, color: MUTED, fontFace: "Calibri" });
      s.addText(c[2], { x: 10.7, y: y + 0.13, w: 2.1, h: 0.35, fontSize: 10, color: TEAL, fontFace: "Calibri" });
    });

    panel(s, 0.5, 4.3, 6.0, 2.5);
    s.addText('"Whatnot\'s $4.97B valuation signals deep investor conviction in live commerce. The media layer serving this ecosystem is still unclaimed."', {
      x: 0.7, y: 4.5, w: 5.6, h: 2.1, fontSize: 13, color: WHITE, italic: true, valign: "middle", fontFace: "Calibri",
    });
    footer(s, 13, total);
  }

  // ============ SLIDE 14 — USE OF FUNDS ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "14", "USE OF FUNDS");
    s.addText(
      [
        { text: "$250K", options: { color: TEAL, bold: true } },
        { text: " — intentionally lean, strategically allocated.", options: { color: WHITE, bold: true } },
      ],
      { x: 0.5, y: 0.7, w: 12.5, h: 1.0, fontSize: 30, fontFace: "Calibri" }
    );
    addSubhead(s, "Founder-led execution. Every dollar mapped to a validation milestone.");

    const funds = [
      { c: "Product & Engineering", p: 35, a: "$87,500", color: TEAL,
        items: "Site completion & UX  •  Backend & integrations  •  Monetization flows  •  Performance" },
      { c: "Marketing & Growth", p: 20, a: "$50,000", color: ACCENT,
        items: "Newsletter growth  •  Paid acquisition  •  Social/SEO  •  Creator collabs" },
      { c: "Sales / Partnerships / BD", p: 15, a: "$37,500", color: "00B894",
        items: "Advertiser outreach  •  Platform relationships  •  Sponsorship packaging  •  Outbound" },
      { c: "Content & Operations", p: 20, a: "$50,000", color: "6D5DD3",
        items: "Editorial production  •  Workflows  •  Content repurposing  •  Ops support" },
      { c: "Working Capital / Admin", p: 10, a: "$25,000", color: "5C6675",
        items: "Legal, admin & tools  •  Runway buffer" },
    ];
    funds.forEach((f, i) => {
      const y = 2.4 + i * 0.85;
      panel(s, 0.5, y, 12.4, 0.75);
      s.addShape("rect", { x: 0.5, y, w: 0.08, h: 0.75, fill: { color: f.color }, line: { type: "none" } });
      // bar
      const barW = (f.p / 35) * 4.0;
      s.addShape("rect", { x: 0.7, y: y + 0.5, w: barW, h: 0.12, fill: { color: f.color }, line: { type: "none" } });
      s.addText(f.c, { x: 0.7, y: y + 0.08, w: 6, h: 0.4, fontSize: 14, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(`${f.p}%  —  ${f.a}`, { x: 9.5, y: y + 0.1, w: 3.2, h: 0.4, fontSize: 14, color: f.color, bold: true, align: "right", fontFace: "Calibri" });
      s.addText(f.items, { x: 5.0, y: y + 0.5, w: 4.5, h: 0.3, fontSize: 10, color: MUTED, fontFace: "Calibri" });
    });
    footer(s, 14, total);
  }

  // ============ SLIDE 15 — REVENUE ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "15", "REVENUE POTENTIAL");
    addTitle(s, "Media revenue first.", "SaaS-like margins next.");
    addSubhead(s, "Illustrative scenarios — not forecasts. Each pathway shows how stacked revenue layers compound.");

    // Bar chart
    panel(s, 0.5, 2.4, 7.5, 4.0);
    s.addText("3-YEAR REVENUE SCENARIOS ($K)", { x: 0.7, y: 2.55, w: 7, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });

    const data = [
      { name: "Conservative", labels: ["Year 1", "Year 2", "Year 3"], values: [50, 200, 550] },
      { name: "Base", labels: ["Year 1", "Year 2", "Year 3"], values: [100, 450, 1400] },
      { name: "Upside", labels: ["Year 1", "Year 2", "Year 3"], values: [180, 900, 2800] },
    ];
    s.addChart(pptx.ChartType.bar, data as any, {
      x: 0.7, y: 3.0, w: 7.1, h: 3.2,
      barDir: "col", barGrouping: "clustered",
      chartColors: ["667085", "00E5C3", "8B5CF6"],
      catAxisLabelColor: MUTED, catAxisLabelFontSize: 10,
      valAxisLabelColor: MUTED, valAxisLabelFontSize: 10,
      showLegend: true, legendPos: "b", legendColor: MUTED, legendFontSize: 10,
      plotArea: { fill: { color: PANEL } },
    });

    // Right scenario cards
    const scen = [
      { l: "Conservative", v: "$550K", c: "667085", d: "Organic, limited sales" },
      { l: "Base", v: "$1.4M", c: TEAL, d: "Active sales + content" },
      { l: "Upside", v: "$2.8M+", c: ACCENT, d: "Fast adoption, premium" },
    ];
    scen.forEach((s2, i) => {
      const x = 8.3 + i * 1.55;
      panel(s, x, 2.4, 1.45, 1.7);
      s.addText(s2.l, { x: x + 0.1, y: 2.5, w: 1.3, h: 0.3, fontSize: 9, color: MUTED, bold: true, align: "center", fontFace: "Consolas" });
      s.addText(s2.v, { x: x + 0.1, y: 2.85, w: 1.3, h: 0.5, fontSize: 20, color: s2.c, bold: true, align: "center", fontFace: "Calibri" });
      s.addText("Year 3", { x: x + 0.1, y: 3.4, w: 1.3, h: 0.25, fontSize: 9, color: MUTED, align: "center", fontFace: "Calibri" });
      s.addText(s2.d, { x: x + 0.1, y: 3.65, w: 1.3, h: 0.4, fontSize: 9, color: MUTED, align: "center", fontFace: "Calibri" });
    });

    panel(s, 8.3, 4.3, 4.6, 2.1);
    s.addText("Long-Term Vision", { x: 8.5, y: 4.45, w: 4.2, h: 0.3, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });
    s.addText("Built as a category platform with future optionality across media, sponsorship, intelligence, and infrastructure — compounding into recurring, high-margin revenue.", {
      x: 8.5, y: 4.8, w: 4.2, h: 1.5, fontSize: 11, color: MUTED, fontFace: "Calibri",
    });
    footer(s, 15, total);
  }

  // ============ SLIDE 16 — TEAM ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "16", "TEAM & FOUNDER");
    addTitle(s, "Solo founder. Full product.", "Zero capital burned.");

    panel(s, 0.5, 2.0, 7.0, 2.4);
    s.addShape("roundRect", {
      x: 0.7, y: 2.2, w: 1.4, h: 1.4,
      fill: { color: TEAL, transparency: 80 }, line: { color: TEAL, width: 1 }, rectRadius: 0.1,
    });
    s.addText("BW", { x: 0.7, y: 2.2, w: 1.4, h: 1.4, fontSize: 32, color: TEAL, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    s.addText("Brian Weiss", { x: 2.3, y: 2.2, w: 5, h: 0.5, fontSize: 22, color: WHITE, bold: true, fontFace: "Calibri" });
    s.addText("Founder & CEO — Flipr.Media", { x: 2.3, y: 2.7, w: 5, h: 0.35, fontSize: 13, color: TEAL, bold: true, fontFace: "Calibri" });
    s.addText("Background in entertainment, marketing, and brand strategy. Identified the live selling media gap early, built and launched the entire platform using AI-driven workflows.", {
      x: 2.3, y: 3.1, w: 5.0, h: 1.2, fontSize: 11, color: MUTED, fontFace: "Calibri",
    });

    // Why win
    panel(s, 0.5, 4.55, 7.0, 2.3);
    s.addText("WHY THIS FOUNDER CAN WIN", { x: 0.7, y: 4.7, w: 6.6, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const why = [
      "Deep media instinct — knows how to build editorial brands",
      "Spotted white space before any competitor",
      "Shipped a full product solo using modern AI tooling",
      "Understands both audience and business model",
      "Combines editorial credibility with business development",
    ];
    why.forEach((w, i) => {
      s.addText(`✓  ${w}`, { x: 0.7, y: 5.05 + i * 0.32, w: 6.6, h: 0.3, fontSize: 11, color: WHITE, fontFace: "Calibri" });
    });

    // Future hires
    s.addText("FOUNDER + FUTURE HIRES", { x: 8.0, y: 2.0, w: 5, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const hires = [
      { r: "Engineering / Product", d: "Scale platform, build data infrastructure" },
      { r: "Content / Editorial", d: "Lead newsroom, editorial calendar" },
      { r: "Partnerships / Ad Sales", d: "Advertiser relationships, sponsorship" },
      { r: "Operations / Growth", d: "Newsletter, SEO, analytics, growth" },
    ];
    hires.forEach((h, i) => {
      cardWithTitle(s, 8.0, 2.4 + i * 1.1, 4.9, 1.0, "+ " + h.r, h.d);
    });
    footer(s, 16, total);
  }

  // ============ SLIDE 17 — THE ASK ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "17", "THE ASK");
    s.addText(
      [
        { text: "A focused ", options: { color: WHITE, bold: true } },
        { text: "$250K", options: { color: TEAL, bold: true } },
        { text: " to prove the model ", options: { color: WHITE, bold: true } },
        { text: "in a $170B+ market.", options: { color: TEAL, italic: true, bold: true } },
      ],
      { x: 0.5, y: 0.7, w: 12.5, h: 1.0, fontSize: 26, fontFace: "Calibri" }
    );
    addSubhead(s, "A disciplined pre-seed round to complete the platform, activate revenue, accelerate traction, and prove the model.");

    // Terms
    panel(s, 0.5, 2.4, 8.4, 1.2);
    [
      { v: "$250K", l: "RAISE AMOUNT", c: TEAL },
      { v: "SAFE", l: "INSTRUMENT", c: WHITE },
      { v: "10–14", l: "MONTHS RUNWAY", c: ACCENT },
    ].forEach((t, i) => {
      const x = 0.5 + i * 2.8;
      s.addText(t.v, { x, y: 2.55, w: 2.8, h: 0.55, fontSize: 30, color: t.c, bold: true, align: "center", fontFace: "Calibri" });
      s.addText(t.l, { x, y: 3.15, w: 2.8, h: 0.3, fontSize: 9, color: MUTED, bold: true, align: "center", fontFace: "Consolas", charSpacing: 2 });
    });

    // Unlocks
    panel(s, 0.5, 3.75, 8.4, 3.05);
    s.addText("✓ WHAT THIS ROUND UNLOCKS", { x: 0.7, y: 3.9, w: 8, h: 0.3, fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const unlocks = [
      "Core site fully operational with monetization paths",
      "Stronger content cadence and newsletter systems",
      "Early advertiser outreach and sponsorship sales",
      "Validated audience and revenue traction",
      "Improved UX, backend flows, and performance",
      "Investable foundation for a follow-on round",
    ];
    unlocks.forEach((u, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      s.addText(`●  ${u}`, {
        x: 0.7 + col * 4.0, y: 4.3 + row * 0.7, w: 4.0, h: 0.6,
        fontSize: 11, color: WHITE, fontFace: "Calibri", valign: "middle",
      });
    });

    // CTA
    panel(s, 9.1, 2.4, 3.8, 2.6);
    s.addText("Smart First Check", { x: 9.2, y: 2.6, w: 3.6, h: 0.5, fontSize: 18, color: WHITE, bold: true, align: "center", fontFace: "Calibri" });
    s.addText("Big market. Lean raise. Fast execution. Strong validation path.", {
      x: 9.2, y: 3.2, w: 3.6, h: 1.0, fontSize: 11, color: MUTED, align: "center", fontFace: "Calibri",
    });
    s.addText("Flipr.Media", { x: 9.2, y: 4.3, w: 3.6, h: 0.5, fontSize: 22, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });

    // Contact
    panel(s, 9.1, 5.1, 3.8, 1.7);
    s.addText("✉ FOUNDER CONTACT", { x: 9.2, y: 5.2, w: 3.6, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    s.addText("Brian Weiss", { x: 9.2, y: 5.55, w: 3.6, h: 0.35, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });
    s.addText("hello@flipr.media", { x: 9.2, y: 5.95, w: 3.6, h: 0.4, fontSize: 16, color: TEAL, bold: true, fontFace: "Calibri" });
    s.addText("flipr.media", { x: 9.2, y: 6.4, w: 3.6, h: 0.3, fontSize: 12, color: TEAL, bold: true, fontFace: "Calibri" });
    footer(s, 17, total);
  }

  // ============ SLIDE 18 — CLOSING ============
  {
    const s = pptx.addSlide();
    setBg(s);
    s.addText("18 — CLOSING VISION", { x: 0.5, y: 0.5, w: 8, h: 0.3, fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 3 });

    s.addText("Flipr.Media", { x: 0.5, y: 1.5, w: 12.3, h: 1.0, fontSize: 56, color: WHITE, bold: true, align: "center", fontFace: "Calibri" });

    s.addText(
      [
        { text: "Every maturing ecosystem needs a trusted ", options: { color: WHITE, bold: true } },
        { text: "media, discovery, and intelligence layer.", options: { color: TEAL, italic: true, bold: true } },
      ],
      { x: 1.5, y: 2.7, w: 10.3, h: 1.0, fontSize: 22, align: "center", fontFace: "Calibri" }
    );

    s.addText(
      "Big market. Focused raise. Fast execution. Flipr.Media is raising $250K to prove the model, validate demand, and build an investable foundation — with clear follow-on upside as the $170B+ live commerce economy keeps accelerating.",
      { x: 1.5, y: 4.0, w: 10.3, h: 1.5, fontSize: 14, color: MUTED, align: "center", fontFace: "Calibri" }
    );

    panel(s, 2.5, 5.5, 8.3, 1.3);
    s.addText("Let's Build This Together", { x: 2.5, y: 5.6, w: 8.3, h: 0.35, fontSize: 13, color: WHITE, bold: true, align: "center", fontFace: "Calibri" });
    s.addText("Brian Weiss", { x: 2.7, y: 6.05, w: 2.5, h: 0.35, fontSize: 13, color: WHITE, bold: true, align: "center", fontFace: "Calibri" });
    s.addText("hello@flipr.media", { x: 5.2, y: 6.0, w: 3.0, h: 0.45, fontSize: 18, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });
    s.addText("flipr.media", { x: 8.2, y: 6.05, w: 2.4, h: 0.35, fontSize: 13, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });

    s.addText("CONFIDENTIAL — FLIPR.MEDIA © 2026", {
      x: 0.5, y: 7.05, w: 12.3, h: 0.3, fontSize: 10, color: MUTED, align: "center", fontFace: "Consolas", charSpacing: 3,
    });
  }

  await pptx.writeFile({ fileName: "FliprMedia-InvestorDeck-2026.pptx" });
}
