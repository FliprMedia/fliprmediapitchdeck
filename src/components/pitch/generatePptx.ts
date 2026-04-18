import PptxGenJS from "pptxgenjs";
import logoDarkUrl from "@/assets/flipr-logo-dark.png";
import logoLightUrl from "@/assets/flipr-logo-light.png";

// Brand
const BG = "080D1A";
const PANEL = "0F1626";
const PANEL_BORDER = "1E2A40";
const WHITE = "FFFFFF";
const MUTED = "9AA3B5";
const TEAL = "00E5C3";
const ACCENT = "8B5CF6";
const DESTRUCTIVE = "FF5470";

type Slide = PptxGenJS.Slide;

async function urlToDataUri(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

let LOGO_DARK = "";
let LOGO_LIGHT = "";

const setBg = (slide: Slide) => {
  slide.background = { color: BG };
  // Ambient glow orbs
  slide.addShape("ellipse", {
    x: 8.5, y: -1.5, w: 5, h: 5,
    fill: { color: TEAL, transparency: 92 }, line: { type: "none" },
  });
  slide.addShape("ellipse", {
    x: -1.5, y: 4, w: 4, h: 4,
    fill: { color: ACCENT, transparency: 94 }, line: { type: "none" },
  });
  // Top accent line
  slide.addShape("rect", {
    x: 0, y: 0, w: 13.33, h: 0.04,
    fill: { color: TEAL, transparency: 70 }, line: { type: "none" },
  });
};

const addFooterLogo = (slide: Slide) => {
  if (!LOGO_LIGHT) return;
  // Ghosted background watermark — large, very low opacity
  slide.addImage({
    data: LOGO_LIGHT, x: 9.5, y: 1.5, w: 4.5, h: 4.5,
    transparency: 92,
  });
  // Footer brand stamp bottom-left
  slide.addImage({
    data: LOGO_LIGHT, x: 0.4, y: 6.95, w: 0.4, h: 0.4,
    transparency: 50,
  });
  slide.addText("FLIPR.MEDIA", {
    x: 0.85, y: 7.0, w: 2, h: 0.3, fontSize: 9, color: MUTED, bold: true,
    fontFace: "Consolas", charSpacing: 3,
  });
};

const addLabel = (slide: Slide, num: string, text: string) => {
  // glowing dot + label
  slide.addShape("ellipse", { x: 0.5, y: 0.42, w: 0.12, h: 0.12, fill: { color: TEAL }, line: { type: "none" } });
  slide.addText(`${num} — ${text}`, {
    x: 0.7, y: 0.35, w: 8, h: 0.3,
    fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 3,
  });
};

const addTitle = (slide: Slide, title: string, italicPart?: string) => {
  const opts: any = {
    x: 0.5, y: 0.7, w: 12.5, h: 1.0,
    fontSize: 30, color: WHITE, bold: true, fontFace: "Calibri", valign: "top",
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
    fontSize: 14, color: MUTED, fontFace: "Calibri",
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
  slide.addShape("rect", { x, y, w: w * 0.35, h: 0.03, fill: { color: accent }, line: { type: "none" } });
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
  addFooterLogo(slide);
  slide.addText(`${n} / ${total}`, {
    x: 12, y: 7.0, w: 1, h: 0.3, fontSize: 9, color: MUTED, align: "right", fontFace: "Consolas",
  });
};

export async function generatePptx() {
  if (!LOGO_DARK) LOGO_DARK = await urlToDataUri(logoDarkUrl);
  if (!LOGO_LIGHT) LOGO_LIGHT = await urlToDataUri(logoLightUrl);

  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = "Flipr.Media — Investor Deck 2026";
  pptx.author = "Flipr.Media";
  const total = 18;

  // ============ SLIDE 1 — COVER ============
  {
    const s = pptx.addSlide();
    setBg(s);
    // Centered ghosted hero logo watermark
    s.addImage({ data: LOGO_LIGHT, x: 4.16, y: 0.25, w: 5, h: 5, transparency: 88 });

    s.addShape("ellipse", { x: 0.7, y: 0.92, w: 0.14, h: 0.14, fill: { color: TEAL }, line: { type: "none" } });
    s.addText("INVESTOR PRESENTATION — 2026", {
      x: 0.9, y: 0.85, w: 6, h: 0.4,
      fontSize: 12, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 3,
    });

    // Hero logo (foreground)
    s.addImage({ data: LOGO_LIGHT, x: 0.7, y: 1.3, w: 1.6, h: 1.6 });
    s.addText("Flipr.Media", {
      x: 2.4, y: 1.45, w: 9, h: 1.4, fontSize: 64, color: WHITE, bold: true, fontFace: "Calibri",
    });

    s.addText(
      [
        { text: "The media, discovery, and intelligence platform ", options: { color: WHITE, bold: true } },
        { text: "for the $170B+ live commerce economy.", options: { color: TEAL, italic: true, bold: true } },
      ],
      { x: 0.7, y: 3.1, w: 11.5, h: 1.2, fontSize: 22, fontFace: "Calibri" }
    );
    s.addText(
      "A focused $250K pre-seed to complete the platform, activate monetization, and validate category demand — with founder-led execution and disciplined capital efficiency.",
      { x: 0.7, y: 4.3, w: 10.5, h: 0.9, fontSize: 14, color: MUTED, fontFace: "Calibri" }
    );

    panel(s, 0.7, 5.25, 5.5, 0.9);
    s.addText("RAISING", { x: 0.9, y: 5.5, w: 1.2, h: 0.4, fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 3 });
    s.addText("$250K", { x: 2.1, y: 5.35, w: 2, h: 0.7, fontSize: 30, color: WHITE, bold: true, fontFace: "Calibri" });
    s.addShape("rect", { x: 4.0, y: 5.45, w: 0.02, h: 0.5, fill: { color: PANEL_BORDER }, line: { type: "none" } });
    s.addText("Pre-Seed / SAFE", { x: 4.2, y: 5.5, w: 1.9, h: 0.4, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });

    const stats = [
      { v: "$172.86B", l: "Global Live Commerce 2025" },
      { v: "$230.28B", l: "Expected 2026 Market" },
      { v: "$14.64B", l: "US Livestream Sales 2025" },
    ];
    panel(s, 0.5, 6.4, 12.3, 0.85);
    stats.forEach((st, i) => {
      const x = 0.5 + i * 4.1;
      s.addText(st.v, { x, y: 6.45, w: 4.1, h: 0.4, fontSize: 18, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });
      s.addText(st.l, { x, y: 6.85, w: 4.1, h: 0.3, fontSize: 10, color: MUTED, align: "center", fontFace: "Calibri" });
      if (i < 2) s.addShape("rect", { x: x + 4.05, y: 6.55, w: 0.01, h: 0.5, fill: { color: PANEL_BORDER }, line: { type: "none" } });
    });
  }

  // ============ SLIDE 2 — PROBLEM ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "02", "THE PROBLEM");
    addTitle(s, "A $170B market with zero", "media infrastructure.");
    addSubhead(s, "Live commerce generates billions in GMV — yet no one covers it, ranks it, or monetizes the attention.");

    // Gap chips
    const gaps = ["Fragmented", "No Discovery", "No Data", "No Ad Layer", "No Coverage", "No Trust"];
    gaps.forEach((g, i) => {
      const x = 0.5 + i * 2.05;
      panel(s, x, 2.25, 1.95, 0.4);
      s.addShape("ellipse", { x: x + 0.15, y: 2.35, w: 0.18, h: 0.18, fill: { color: DESTRUCTIVE, transparency: 30 }, line: { type: "none" } });
      s.addText(g, { x: x + 0.4, y: 2.27, w: 1.5, h: 0.35, fontSize: 11, color: WHITE, bold: true, fontFace: "Calibri", valign: "middle" });
    });

    const cards = [
      { t: "Sellers & Creators", b: "• No cross-platform profile or reputation\n• No way to be discovered\n• Zero press infrastructure\n• No benchmarks to prove performance" },
      { t: "Advertisers & Brands", b: "• No dedicated media channel\n• No segmentation or targeting data\n• No sponsorship/native ad layer\n• No ROI benchmarks" },
      { t: "Platforms & Investors", b: "• No aggregated discovery layer\n• No independent reporting\n• No market intelligence or rankings\n• No trusted editorial source" },
    ];
    cards.forEach((c, i) => cardWithTitle(s, 0.5 + i * 3.2, 2.85, 3.0, 3.5, c.t, c.b));

    cardWithTitle(s, 10.2, 2.85, 2.7, 1.65, "TODAY — Fragmented",
      "✕ Stuck in Reddit & Discord\n✕ No discovery or data\n✕ No ad infrastructure\n✕ No editorial authority", DESTRUCTIVE);
    // Arrow down
    s.addText("↓", { x: 10.2, y: 4.5, w: 2.7, h: 0.3, fontSize: 16, color: TEAL, align: "center", bold: true, fontFace: "Calibri" });
    cardWithTitle(s, 10.2, 4.75, 2.7, 1.65, "WITH FLIPR.MEDIA",
      "✓ One media hub\n✓ Discovery, rankings & intel\n✓ Built-in ad layer\n✓ Trusted editorial brand", TEAL);
    footer(s, 2, total);
  }

  // ============ SLIDE 3 — WHY NOW ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "03", "WHY NOW");
    addTitle(s, "The window is open", "right now.");
    addSubhead(s, "Six forces converging to create a once-in-a-category opportunity for a media brand that moves first.");

    // Left: chart
    panel(s, 0.5, 2.4, 5.5, 4.2);
    s.addText("US LIVESTREAM ECOMMERCE ($B)", { x: 0.7, y: 2.5, w: 5, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    s.addChart(pptx.ChartType.area, [{
      name: "Market Size",
      labels: ["2020", "2021", "2022", "2023", "2024", "2025", "2026E", "2027E"],
      values: [2, 4.2, 6.8, 9.5, 12.1, 14.64, 19, 25],
    }], {
      x: 0.55, y: 2.85, w: 5.4, h: 3.6,
      chartColors: [TEAL],
      catAxisLabelColor: MUTED, catAxisLabelFontSize: 9,
      valAxisLabelColor: MUTED, valAxisLabelFontSize: 9,
      showLegend: false,
      plotArea: { fill: { color: PANEL } },
      lineSize: 2,
    });

    // Right: themes
    const themes = [
      { t: "$14.64B US Livestream Commerce", d: "Growing 30%+ YoY — fastest-rising segment" },
      { t: "Shoppable Media Is Mainstream", d: "30%+ of US users made shoppable purchases" },
      { t: "Creator-Merchants New Asset Class", d: "Live sellers building 6- and 7-figure businesses" },
      { t: "Every Major Platform Investing", d: "TikTok, YouTube, eBay, Whatnot pouring capital in" },
      { t: "Advertisers Have No Way In", d: "Brands want creators but no channel serves them" },
      { t: "The Category Has No Voice", d: "No TechCrunch, no Bloomberg for this market" },
    ];
    themes.forEach((th, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      cardWithTitle(s, 6.2 + col * 3.4, 2.4 + row * 1.45, 3.3, 1.3, th.t, th.d);
    });
    footer(s, 3, total);
  }

  // ============ SLIDE 4 — MARKET ============
  {
    const s = pptx.addSlide();
    setBg(s);
    addLabel(s, "04", "MARKET OPPORTUNITY");
    addTitle(s, "Massive TAM. Clear monetization layers.", "Capital-efficient entry.");

    // TAM/SAM/SOM concentric rings
    const cx = 3.0, cy = 4.6;
    const rings = [
      { r: 2.4, label: "TAM", val: "$1.48T+", sub: "Global Social Commerce", color: ACCENT, lab_y: cy - 2.3 },
      { r: 1.7, label: "SAM", val: "$20B+", sub: "US Live + Ad Market", color: TEAL, lab_y: cy - 1.55 },
      { r: 1.0, label: "SOM", val: "$5–15M", sub: "Early Revenue", color: TEAL, lab_y: cy - 0.4 },
    ];
    rings.forEach(ring => {
      s.addShape("ellipse", {
        x: cx - ring.r, y: cy - ring.r, w: ring.r * 2, h: ring.r * 2,
        fill: { color: ring.color, transparency: 92 },
        line: { color: ring.color, width: 1.5 },
      });
    });
    rings.forEach(ring => {
      s.addText(ring.label, { x: cx - 0.5, y: ring.lab_y, w: 1, h: 0.25, fontSize: 9, color: ring.color, bold: true, align: "center", fontFace: "Consolas", charSpacing: 2 });
      s.addText(ring.val, { x: cx - 1.2, y: ring.lab_y + 0.25, w: 2.4, h: 0.4, fontSize: 18, color: ring.color, bold: true, align: "center", fontFace: "Calibri" });
      s.addText(ring.sub, { x: cx - 1.5, y: ring.lab_y + 0.65, w: 3, h: 0.25, fontSize: 9, color: MUTED, align: "center", fontFace: "Calibri" });
    });

    // Right stats grid
    const stats = [
      { v: "$172.86B", l: "Global live commerce 2025" },
      { v: "$230.28B", l: "Expected 2026 (33% YoY)" },
      { v: "$1.48T", l: "Global social commerce" },
      { v: "$14.64B", l: "US livestream ecommerce" },
    ];
    stats.forEach((st, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 6.6 + col * 3.2, y = 2.4 + row * 1.5;
      panel(s, x, y, 3.0, 1.3);
      s.addShape("rect", { x, y, w: 0.06, h: 1.3, fill: { color: TEAL }, line: { type: "none" } });
      s.addText(st.v, { x: x + 0.2, y: y + 0.15, w: 2.7, h: 0.55, fontSize: 22, color: TEAL, bold: true, fontFace: "Calibri" });
      s.addText(st.l, { x: x + 0.2, y: y + 0.75, w: 2.7, h: 0.45, fontSize: 11, color: MUTED, fontFace: "Calibri" });
    });

    panel(s, 6.6, 5.5, 6.2, 1.3);
    s.addText("SOM REVENUE CHANNELS", { x: 6.75, y: 5.6, w: 6, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    s.addText("Advertising  •  Sponsorships  •  Premium Profiles  •  Newsletter  •  Featured Placements  •  Research & Data", {
      x: 6.75, y: 5.95, w: 6, h: 0.75, fontSize: 12, color: TEAL, bold: true, fontFace: "Calibri",
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

    // Left: large mockup placeholder with logo
    panel(s, 0.5, 2.4, 4.5, 4.4);
    // browser chrome
    s.addShape("rect", { x: 0.5, y: 2.4, w: 4.5, h: 0.3, fill: { color: "1A2435" }, line: { type: "none" } });
    [DESTRUCTIVE, "FFB347", TEAL].forEach((c, i) => {
      s.addShape("ellipse", { x: 0.65 + i * 0.2, y: 2.5, w: 0.12, h: 0.12, fill: { color: c }, line: { type: "none" } });
    });
    s.addText("flipr.media", { x: 1.5, y: 2.42, w: 3, h: 0.25, fontSize: 9, color: MUTED, fontFace: "Consolas" });
    // mockup content
    s.addImage({ data: LOGO_LIGHT, x: 1.5, y: 3.0, w: 2.5, h: 2.5, transparency: 60 });
    s.addText("LIVE SITE", { x: 0.5, y: 6.4, w: 4.5, h: 0.3, fontSize: 9, color: TEAL, bold: true, align: "center", fontFace: "Consolas", charSpacing: 3 });

    // Right: modules
    s.addShape("ellipse", { x: 5.3, y: 2.5, w: 0.15, h: 0.15, fill: { color: TEAL }, line: { type: "none" } });
    s.addText("OPERATIONAL", { x: 5.5, y: 2.45, w: 4, h: 0.3, fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const op = [
      { t: "Industry News", d: "Cross-platform coverage" },
      { t: "Seller Spotlights", d: "Creator profiles" },
      { t: "Live Show Discovery", d: "Whatnot, TikTok & more" },
      { t: "Platform Watch", d: "Deep platform reporting" },
      { t: "Interviews", d: "Industry conversations" },
      { t: "Newsletter", d: "Industry briefing" },
    ];
    op.forEach((m, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      cardWithTitle(s, 5.3 + col * 2.6, 2.8 + row * 1.0, 2.45, 0.9, m.t, m.d);
    });

    s.addShape("ellipse", { x: 5.3, y: 4.95, w: 0.15, h: 0.15, fill: { color: ACCENT }, line: { type: "none" } });
    s.addText("REVENUE MODULES — NEXT", { x: 5.5, y: 4.9, w: 5, h: 0.3, fontSize: 11, color: ACCENT, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const nx = [
      { t: "Rankings & Activity Index", d: "Performance benchmarks" },
      { t: "Advertiser Placements", d: "Native + sponsored" },
      { t: "Premium Seller Profiles", d: "Verified + analytics" },
      { t: "Data & Insights", d: "Market intelligence" },
    ];
    nx.forEach((m, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      cardWithTitle(s, 5.3 + col * 4.0, 5.25 + row * 0.8, 3.85, 0.7, m.t, m.d, ACCENT);
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

    // Left: ecosystem diagram with Flipr at center
    const ex = 3.2, ey = 4.5;
    s.addShape("ellipse", {
      x: ex - 2.0, y: ey - 2.0, w: 4.0, h: 4.0,
      fill: { type: "none" }, line: { color: TEAL, width: 0.5, dashType: "dash", transparency: 60 },
    });
    // Center
    s.addShape("ellipse", {
      x: ex - 0.7, y: ey - 0.7, w: 1.4, h: 1.4,
      fill: { color: TEAL, transparency: 75 }, line: { color: TEAL, width: 2 },
    });
    s.addImage({ data: LOGO_LIGHT, x: ex - 0.45, y: ey - 0.45, w: 0.9, h: 0.9 });

    // Nodes around
    const nodes = ["Whatnot", "TikTok Shop", "Sellers", "Brands", "eBay Live", "Audiences", "Advertisers", "Agencies"];
    nodes.forEach((n, i) => {
      const angle = (i * 360 / nodes.length - 90) * Math.PI / 180;
      const nx_ = ex + Math.cos(angle) * 1.9 - 0.55;
      const ny_ = ey + Math.sin(angle) * 1.9 - 0.18;
      panel(s, nx_, ny_, 1.1, 0.36);
      s.addText(n, { x: nx_, y: ny_, w: 1.1, h: 0.36, fontSize: 9, color: WHITE, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    });

    s.addText("WHAT EXISTS TODAY", { x: 0.5, y: 2.4, w: 6, h: 0.3, fontSize: 9, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });

    // Right: defensible moats
    s.addText("WHY THIS IS DEFENSIBLE", { x: 6.8, y: 2.4, w: 6, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const moats = [
      { t: "First-Mover Advantage", d: "No incumbent — category is ours" },
      { t: "Audience Aggregation", d: "Consolidating fragmented attention" },
      { t: "Editorial Brand Equity", d: "Trust compounds — hard to replicate" },
      { t: "Proprietary Data Moat", d: "Rankings, indexes, benchmarks" },
      { t: "Advertiser Lock-In", d: "Direct relationships, switching costs" },
      { t: "Data Products & Lead Gen", d: "High-margin intelligence at scale" },
    ];
    moats.forEach((m, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      cardWithTitle(s, 6.8 + col * 3.05, 2.75 + row * 1.35, 2.95, 1.2, m.t, m.d);
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
    const headers = ["AUDIENCE", "WHAT THEY WANT", "WHY FLIPR", "MONETIZE"];
    const cols = [0.5, 3.7, 7.0, 10.3];
    const widths = [3.2, 3.3, 3.3, 2.8];
    headers.forEach((h, i) => {
      s.addText(h, { x: cols[i], y: 2.4, w: widths[i], h: 0.3, fontSize: 10, color: i === 3 ? TEAL : MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    });
    personas.forEach((row, ri) => {
      const y = 2.85 + ri * 0.58;
      panel(s, 0.5, y, 12.4, 0.52);
      // accent bar
      s.addShape("rect", { x: 0.5, y, w: 0.06, h: 0.52, fill: { color: ri % 2 === 0 ? TEAL : ACCENT }, line: { type: "none" } });
      row.forEach((cell, ci) => {
        const isFirst = ci === 0;
        s.addText(cell, {
          x: cols[ci] + 0.1, y: y + 0.08, w: widths[ci] - 0.1, h: 0.4,
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
      { n: "01", t: "Media & Advertising Revenue", tag: "Recurring", c: TEAL, items: "Display ads  •  Sponsored newsletter  •  Branded content  •  Featured placements" },
      { n: "02", t: "Seller Products & Services", tag: "Recurring + Transactional", c: TEAL, items: "Premium profiles  •  Verified badges  •  Featured listings  •  Promo packages" },
      { n: "03", t: "Enterprise & Partnerships", tag: "High-Value Contracts", c: ACCENT, items: "Reports & rankings  •  Brand sponsorships  •  Lead gen  •  Event partnerships" },
      { n: "04", t: "Intelligence & Data Products", tag: "High-Margin SaaS", c: ACCENT, items: "Subscription intel  •  Seller analytics  •  Category benchmarks  •  Job board" },
    ];
    layers.forEach((l, i) => {
      const y = 2.4 + i * 0.85;
      const indent = i * 0.3;
      panel(s, 0.5 + indent, y, 8.5 - indent, 0.75);
      s.addShape("rect", { x: 0.5 + indent, y, w: 0.08, h: 0.75, fill: { color: l.c }, line: { type: "none" } });
      s.addText(l.n, { x: 0.7 + indent, y: y + 0.1, w: 0.5, h: 0.3, fontSize: 11, color: l.c, bold: true, fontFace: "Consolas" });
      s.addText(l.t, { x: 1.2 + indent, y: y + 0.05, w: 4.5, h: 0.35, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(l.tag, { x: 5.5 + indent, y: y + 0.1, w: 3.0, h: 0.3, fontSize: 9, color: l.c, bold: true, align: "right", fontFace: "Consolas" });
      s.addText(l.items, { x: 1.2 + indent, y: y + 0.42, w: 7.0, h: 0.3, fontSize: 10, color: MUTED, fontFace: "Calibri" });
    });

    // Right: pie chart
    panel(s, 9.3, 2.4, 3.6, 4.2);
    s.addText("REVENUE MIX — YEAR 3", { x: 9.45, y: 2.5, w: 3.4, h: 0.3, fontSize: 9, color: MUTED, bold: true, align: "center", fontFace: "Consolas", charSpacing: 2 });
    s.addChart(pptx.ChartType.doughnut, [{
      name: "Revenue Mix",
      labels: ["Advertising", "Sponsored", "Seller Products", "Data & Intel", "Lead Gen", "Events"],
      values: [30, 20, 18, 15, 10, 7],
    }], {
      x: 9.4, y: 2.85, w: 3.4, h: 2.2,
      chartColors: [TEAL, "00B894", ACCENT, "6D5DD3", "008F7A", "667085"],
      showLegend: false, dataBorder: { pct: 0, color: PANEL },
      holeSize: 60, plotArea: { fill: { color: PANEL } },
    });
    const legend = [
      { l: "Advertising 30%", c: TEAL },
      { l: "Sponsored 20%", c: "00B894" },
      { l: "Seller Products 18%", c: ACCENT },
      { l: "Data & Intel 15%", c: "6D5DD3" },
      { l: "Lead Gen 10%", c: "008F7A" },
      { l: "Events 7%", c: "667085" },
    ];
    legend.forEach((lg, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 9.45 + col * 1.7;
      const y = 5.15 + row * 0.4;
      s.addShape("rect", { x, y: y + 0.08, w: 0.15, h: 0.15, fill: { color: lg.c }, line: { type: "none" } });
      s.addText(lg.l, { x: x + 0.2, y, w: 1.5, h: 0.3, fontSize: 9, color: MUTED, fontFace: "Calibri" });
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

    // Flywheel at top
    const flywheel = ["Content", "Authority", "Audience", "Advertisers", "Data", "Repeat"];
    flywheel.forEach((f, i) => {
      const x = 0.7 + i * 2.05;
      const c = i >= 3 && i < 5 ? ACCENT : TEAL;
      s.addShape("ellipse", { x, y: 2.35, w: 0.7, h: 0.7, fill: { color: c, transparency: 75 }, line: { color: c, width: 1.5 } });
      s.addText(f, { x: x - 0.2, y: 3.1, w: 1.1, h: 0.3, fontSize: 10, color: c, bold: true, align: "center", fontFace: "Calibri" });
      if (i < flywheel.length - 1) {
        s.addText("→", { x: x + 0.7, y: 2.45, w: 0.4, h: 0.5, fontSize: 18, color: MUTED, align: "center", valign: "middle", fontFace: "Calibri" });
      }
    });

    // Phase cards
    const phases = [
      { n: "01", t: "Launch & Authority", tl: "Now – Month 3", c: TEAL, items: "• Category-defining news\n• Weekly seller interviews\n• Newsletter launch\n• Platform watch coverage" },
      { n: "02", t: "Network & Monetize", tl: "Month 4 – 8", c: TEAL, items: "• Seller profile acquisition\n• Top creator partnerships\n• Advertiser outreach\n• Founding advertiser packages" },
      { n: "03", t: "Scale & Expand", tl: "Month 9 – 18", c: ACCENT, items: "• Rankings & benchmarks\n• Events & sponsorships\n• Premium products\n• Deeper data & intelligence" },
    ];
    phases.forEach((p, i) => {
      const x = 0.5 + i * 4.25;
      panel(s, x, 3.7, 4.0, 3.1);
      s.addShape("rect", { x, y: 3.7, w: 4.0, h: 0.04, fill: { color: p.c }, line: { type: "none" } });
      s.addText(p.n, { x: x + 0.2, y: 3.85, w: 0.5, h: 0.3, fontSize: 11, color: p.c, bold: true, fontFace: "Consolas" });
      s.addText(p.t, { x: x + 0.2, y: 4.15, w: 3.6, h: 0.4, fontSize: 15, color: WHITE, bold: true, fontFace: "Calibri" });
      panel(s, x + 0.2, 4.6, 2.0, 0.35);
      s.addText(p.tl, { x: x + 0.25, y: 4.62, w: 1.9, h: 0.3, fontSize: 10, color: p.c, bold: true, align: "center", fontFace: "Consolas" });
      s.addText(p.items, { x: x + 0.2, y: 5.05, w: 3.6, h: 1.7, fontSize: 11, color: MUTED, fontFace: "Calibri", valign: "top" });
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
    s.addText("COMPETITOR", { x: 0.7, y: tableY + 0.15, w: 3.0, h: 0.3, fontSize: 9, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    cols.forEach((c, i) => {
      s.addText(c, { x: 3.7 + i * 1.32, y: tableY + 0.15, w: 1.3, h: 0.3, fontSize: 9, color: MUTED, bold: true, align: "center", fontFace: "Consolas" });
    });
    rows.forEach((r, i) => {
      const y = tableY + 0.55 + i * 0.5;
      const isHi = r[0] === "Flipr.Media";
      if (isHi) s.addShape("rect", { x: 0.55, y, w: 12.3, h: 0.45, fill: { color: TEAL, transparency: 88 }, line: { type: "none" } });
      if (isHi) s.addShape("ellipse", { x: 0.7, y: y + 0.13, w: 0.18, h: 0.18, fill: { color: TEAL }, line: { type: "none" } });
      s.addText(r[0], { x: isHi ? 0.95 : 0.7, y: y + 0.05, w: 3.0, h: 0.4, fontSize: 12, color: isHi ? TEAL : WHITE, bold: true, fontFace: "Calibri" });
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

    // Timeline bar
    s.addShape("rect", { x: 0.7, y: 2.5, w: 11.6, h: 0.04, fill: { color: PANEL_BORDER }, line: { type: "none" } });
    s.addShape("rect", { x: 0.7, y: 2.5, w: 2.5, h: 0.04, fill: { color: TEAL }, line: { type: "none" } });
    ["Now", "Next", "Later", "Scale"].forEach((tl, i) => {
      const x = 1.2 + i * 3.2;
      const active = i === 0;
      s.addShape("ellipse", { x: x - 0.1, y: 2.4, w: 0.22, h: 0.22, fill: { color: active ? TEAL : PANEL }, line: { color: active ? TEAL : PANEL_BORDER, width: 1.5 } });
      s.addText(tl, { x: x - 0.6, y: 2.65, w: 1.2, h: 0.3, fontSize: 11, color: active ? TEAL : MUTED, bold: true, align: "center", fontFace: "Calibri" });
    });

    const phases = [
      { n: "01", t: "Foundation & Polish", b: "IN PROGRESS", c: TEAL, items: "• Polish UX & design\n• All pages operational\n• Forms, SEO, newsletter\n• Mobile & performance" },
      { n: "02", t: "Profiles & Monetization", b: "MONTHS 2–5", c: TEAL, items: "• Seller profile system\n• Searchable directory\n• Featured live shows\n• Monetization infra" },
      { n: "03", t: "Data & Intelligence", b: "MONTHS 6–12", c: ACCENT, items: "• Rankings / Activity Index\n• Category reports\n• Advertiser dashboards\n• Premium packages" },
      { n: "04", t: "Category Operating Layer", b: "9–12+ MONTHS", c: ACCENT, items: "• Industry intel layer\n• Sponsorship marketplace\n• Data products & API\n• Conference & awards" },
    ];
    phases.forEach((p, i) => {
      const x = 0.5 + i * 3.18;
      panel(s, x, 3.2, 3.0, 3.5);
      s.addShape("rect", { x, y: 3.2, w: 3.0, h: 0.04, fill: { color: p.c }, line: { type: "none" } });
      s.addText(p.n, { x: x + 0.2, y: 3.35, w: 0.5, h: 0.3, fontSize: 10, color: p.c, bold: true, fontFace: "Consolas" });
      panel(s, x + 0.7, 3.32, 2.1, 0.32);
      s.addText(p.b, { x: x + 0.7, y: 3.35, w: 2.1, h: 0.28, fontSize: 9, color: p.c, bold: true, align: "center", fontFace: "Consolas", charSpacing: 2 });
      s.addText(p.t, { x: x + 0.2, y: 3.75, w: 2.7, h: 0.5, fontSize: 14, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(p.items, { x: x + 0.2, y: 4.4, w: 2.7, h: 2.2, fontSize: 11, color: MUTED, fontFace: "Calibri", valign: "top" });
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
      { t: "Product Is Live", d: "Operational site with news, coverage, newsletter, discovery" },
      { t: "Category Position Clear", d: "Brand and concept validated — no competitor in this niche" },
      { t: "Advertiser Thesis Forming", d: "Inbound interest from brands validates demand" },
      { t: "Architecture Is Scalable", d: "Content taxonomy + monetization hooks for rapid expansion" },
      { t: "Capital Efficiency Proven", d: "Built to this stage with near-zero capital" },
    ];
    proofs.forEach((p, i) => cardWithTitle(s, 0.5, 2.4 + i * 0.78, 8.5, 0.7, p.t, p.d));

    // Right side: mockup with logo
    panel(s, 9.3, 2.4, 3.6, 3.4);
    s.addShape("rect", { x: 9.3, y: 2.4, w: 3.6, h: 0.25, fill: { color: "1A2435" }, line: { type: "none" } });
    [DESTRUCTIVE, "FFB347", TEAL].forEach((c, i) => {
      s.addShape("ellipse", { x: 9.4 + i * 0.18, y: 2.47, w: 0.1, h: 0.1, fill: { color: c }, line: { type: "none" } });
    });
    s.addImage({ data: LOGO_LIGHT, x: 10.2, y: 3.0, w: 1.8, h: 1.8, transparency: 60 });
    s.addText("LIVE SITE — FLIPR.MEDIA", { x: 9.3, y: 5.5, w: 3.6, h: 0.25, fontSize: 9, color: TEAL, bold: true, align: "center", fontFace: "Consolas", charSpacing: 3 });

    panel(s, 9.3, 5.95, 3.6, 0.85);
    s.addText("BOOTSTRAP-POWERED", { x: 9.45, y: 6.05, w: 3.4, h: 0.3, fontSize: 9, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    s.addText("Built with minimal capital using AI-driven workflows.", { x: 9.45, y: 6.35, w: 3.4, h: 0.4, fontSize: 10, color: MUTED, fontFace: "Calibri" });

    panel(s, 0.5, 6.5, 8.5, 0.45);
    s.addText("$250K bridges the gap from prototype to operating business.", {
      x: 0.7, y: 6.55, w: 8.1, h: 0.35, fontSize: 12, color: WHITE, bold: true, italic: true, align: "center", fontFace: "Calibri",
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
      const x = 0.5 + col * 1.55, y = 2.75 + row * 0.55;
      panel(s, x, y, 1.45, 0.45);
      s.addShape("rect", { x, y, w: 0.05, h: 0.45, fill: { color: TEAL }, line: { type: "none" } });
      s.addText(c, { x: x + 0.05, y: y + 0.06, w: 1.35, h: 0.32, fontSize: 10, color: WHITE, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    });

    // Value ladder
    s.addText("VALUE CREATION LADDER", { x: 0.5, y: 4.0, w: 6, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const ladder = [
      { l: "Media Brand", c: TEAL, w: 3.0 },
      { l: "Audience Concentration", c: TEAL, w: 3.4 },
      { l: "Advertiser Network", c: TEAL, w: 3.8 },
      { l: "Industry Data", c: ACCENT, w: 4.2 },
      { l: "Premium Intelligence", c: ACCENT, w: 4.6 },
      { l: "Category Platform", c: ACCENT, w: 5.0 },
    ];
    ladder.forEach((step, i) => {
      const y = 4.4 + i * 0.4;
      s.addShape("roundRect", {
        x: 0.5, y, w: step.w, h: 0.32,
        fill: { color: step.c, transparency: 80 }, line: { color: step.c, width: 0.75 }, rectRadius: 0.04,
      });
      s.addText(step.l, { x: 0.7, y: y + 0.04, w: step.w - 0.2, h: 0.25, fontSize: 11, color: step.c, bold: true, valign: "middle", fontFace: "Calibri" });
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
      const y = 2.75 + i * 0.65;
      panel(s, 6.8, y, 6.1, 0.55);
      s.addShape("rect", { x: 6.8, y, w: 0.06, h: 0.55, fill: { color: TEAL }, line: { type: "none" } });
      s.addText(c[0], { x: 6.95, y: y + 0.08, w: 2.5, h: 0.4, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(c[1], { x: 9.4, y: y + 0.13, w: 1.3, h: 0.3, fontSize: 10, color: MUTED, fontFace: "Calibri" });
      s.addText(c[2], { x: 10.7, y: y + 0.13, w: 2.1, h: 0.3, fontSize: 10, color: TEAL, fontFace: "Calibri" });
    });

    panel(s, 6.8, 6.1, 6.1, 0.7);
    s.addText('"Whatnot\'s $4.97B valuation signals deep investor conviction. The media layer is still unclaimed."', {
      x: 6.95, y: 6.2, w: 5.9, h: 0.55, fontSize: 11, color: WHITE, italic: true, valign: "middle", fontFace: "Calibri",
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

    // Donut chart left
    panel(s, 0.5, 2.4, 4.5, 4.4);
    s.addText("ALLOCATION", { x: 0.65, y: 2.5, w: 4.2, h: 0.3, fontSize: 10, color: MUTED, bold: true, align: "center", fontFace: "Consolas", charSpacing: 2 });
    s.addChart(pptx.ChartType.doughnut, [{
      name: "Use of Funds",
      labels: ["Product & Eng (35%)", "Marketing (20%)", "Sales/BD (15%)", "Content/Ops (20%)", "Working Cap (10%)"],
      values: [35, 20, 15, 20, 10],
    }], {
      x: 0.6, y: 2.85, w: 4.3, h: 2.5,
      chartColors: [TEAL, ACCENT, "00B894", "6D5DD3", "5C6675"],
      showLegend: false, dataBorder: { pct: 0, color: PANEL },
      holeSize: 60, plotArea: { fill: { color: PANEL } },
    });
    s.addText("$250K", { x: 0.6, y: 3.85, w: 4.3, h: 0.5, fontSize: 24, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });
    s.addText("Total Raise", { x: 0.6, y: 4.3, w: 4.3, h: 0.3, fontSize: 11, color: MUTED, align: "center", fontFace: "Calibri" });

    const funds = [
      { c: "Product & Engineering", p: 35, a: "$87,500", color: TEAL,
        items: "Site completion  •  Backend  •  Monetization flows  •  Performance" },
      { c: "Marketing & Growth", p: 20, a: "$50,000", color: ACCENT,
        items: "Newsletter  •  Paid acquisition  •  SEO  •  Creator collabs" },
      { c: "Sales / Partnerships / BD", p: 15, a: "$37,500", color: "00B894",
        items: "Advertiser outreach  •  Platform relations  •  Sponsorships" },
      { c: "Content & Operations", p: 20, a: "$50,000", color: "6D5DD3",
        items: "Editorial  •  Workflows  •  Repurposing  •  Ops support" },
      { c: "Working Capital / Admin", p: 10, a: "$25,000", color: "5C6675",
        items: "Legal, admin & tools  •  Runway buffer" },
    ];
    funds.forEach((f, i) => {
      const y = 2.4 + i * 0.78;
      panel(s, 5.3, y, 7.6, 0.7);
      s.addShape("rect", { x: 5.3, y, w: 0.08, h: 0.7, fill: { color: f.color }, line: { type: "none" } });
      s.addText(f.c, { x: 5.5, y: y + 0.06, w: 4.5, h: 0.35, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });
      s.addText(`${f.p}%  —  ${f.a}`, { x: 10.0, y: y + 0.08, w: 2.8, h: 0.35, fontSize: 13, color: f.color, bold: true, align: "right", fontFace: "Calibri" });
      s.addText(f.items, { x: 5.5, y: y + 0.4, w: 7.2, h: 0.28, fontSize: 10, color: MUTED, fontFace: "Calibri" });
    });

    // Legend strip below donut
    const legendItems = funds.map(f => ({ l: `${f.c.split(" ")[0]} ${f.p}%`, c: f.color }));
    legendItems.forEach((lg, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 0.7 + col * 2.1;
      const y = 5.6 + row * 0.3;
      s.addShape("rect", { x, y: y + 0.05, w: 0.15, h: 0.15, fill: { color: lg.c }, line: { type: "none" } });
      s.addText(lg.l, { x: x + 0.2, y, w: 1.9, h: 0.25, fontSize: 9, color: MUTED, fontFace: "Calibri" });
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

    panel(s, 0.5, 2.4, 7.5, 4.4);
    s.addText("3-YEAR REVENUE SCENARIOS ($K)", { x: 0.7, y: 2.55, w: 7, h: 0.3, fontSize: 10, color: MUTED, bold: true, fontFace: "Consolas", charSpacing: 2 });
    s.addChart(pptx.ChartType.bar, [
      { name: "Conservative", labels: ["Year 1", "Year 2", "Year 3"], values: [50, 200, 550] },
      { name: "Base", labels: ["Year 1", "Year 2", "Year 3"], values: [100, 450, 1400] },
      { name: "Upside", labels: ["Year 1", "Year 2", "Year 3"], values: [180, 900, 2800] },
    ] as any, {
      x: 0.6, y: 2.95, w: 7.3, h: 3.7,
      barDir: "col", barGrouping: "clustered",
      chartColors: ["667085", TEAL, ACCENT],
      catAxisLabelColor: MUTED, catAxisLabelFontSize: 10,
      valAxisLabelColor: MUTED, valAxisLabelFontSize: 10,
      showLegend: true, legendPos: "b", legendColor: MUTED, legendFontSize: 10,
      plotArea: { fill: { color: PANEL } },
    });

    const scen = [
      { l: "Conservative", v: "$550K", c: "667085", d: "Organic, limited sales" },
      { l: "Base", v: "$1.4M", c: TEAL, d: "Active sales + content" },
      { l: "Upside", v: "$2.8M+", c: ACCENT, d: "Fast adoption, premium" },
    ];
    scen.forEach((s2, i) => {
      const x = 8.3 + i * 1.55;
      panel(s, x, 2.4, 1.45, 1.7);
      s.addShape("rect", { x, y: 2.4, w: 1.45, h: 0.04, fill: { color: s2.c }, line: { type: "none" } });
      s.addText(s2.l, { x: x + 0.1, y: 2.5, w: 1.3, h: 0.3, fontSize: 9, color: MUTED, bold: true, align: "center", fontFace: "Consolas" });
      s.addText(s2.v, { x: x + 0.1, y: 2.85, w: 1.3, h: 0.5, fontSize: 20, color: s2.c, bold: true, align: "center", fontFace: "Calibri" });
      s.addText("Year 3", { x: x + 0.1, y: 3.4, w: 1.3, h: 0.25, fontSize: 9, color: MUTED, align: "center", fontFace: "Calibri" });
      s.addText(s2.d, { x: x + 0.1, y: 3.65, w: 1.3, h: 0.4, fontSize: 9, color: MUTED, align: "center", fontFace: "Calibri" });
    });

    panel(s, 8.3, 4.3, 4.6, 1.4);
    s.addText("Long-Term Vision", { x: 8.5, y: 4.4, w: 4.2, h: 0.3, fontSize: 13, color: WHITE, bold: true, fontFace: "Calibri" });
    s.addText("Built as a category platform with future optionality across media, sponsorship, intelligence, and infrastructure.", {
      x: 8.5, y: 4.7, w: 4.2, h: 0.95, fontSize: 10, color: MUTED, fontFace: "Calibri",
    });

    // Revenue multiples
    const mults = [
      { l: "Media", v: "8–12x" },
      { l: "Media + Data", v: "15–25x" },
      { l: "Commerce-Tech", v: "20–40x" },
    ];
    mults.forEach((m, i) => {
      const x = 8.3 + i * 1.55;
      panel(s, x, 5.85, 1.45, 0.95);
      s.addText(m.l, { x: x + 0.1, y: 5.92, w: 1.3, h: 0.3, fontSize: 10, color: MUTED, align: "center", fontFace: "Calibri" });
      s.addText(m.v, { x: x + 0.1, y: 6.2, w: 1.3, h: 0.4, fontSize: 16, color: ACCENT, bold: true, align: "center", fontFace: "Calibri" });
      s.addText("Multiple", { x: x + 0.1, y: 6.55, w: 1.3, h: 0.2, fontSize: 8, color: MUTED, align: "center", fontFace: "Calibri" });
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
      fill: { color: TEAL, transparency: 78 }, line: { color: TEAL, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("BW", { x: 0.7, y: 2.2, w: 1.4, h: 1.4, fontSize: 32, color: TEAL, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    s.addText("Brian Weiss", { x: 2.3, y: 2.2, w: 5, h: 0.5, fontSize: 22, color: WHITE, bold: true, fontFace: "Calibri" });
    s.addText("Founder & CEO — Flipr.Media", { x: 2.3, y: 2.7, w: 5, h: 0.35, fontSize: 13, color: TEAL, bold: true, fontFace: "Calibri" });
    s.addText("Background in entertainment, marketing, and brand strategy. Identified the live selling media gap early, built and launched the entire platform using AI-driven workflows.", {
      x: 2.3, y: 3.1, w: 5.0, h: 1.2, fontSize: 11, color: MUTED, fontFace: "Calibri",
    });

    // Credibility chips
    const chips = ["Media", "Marketing", "Entrepreneurial", "AI-Driven Dev", "Category Research", "BD"];
    chips.forEach((c, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const x = 0.5 + col * 2.4, y = 4.55 + row * 0.45;
      panel(s, x, y, 2.3, 0.35);
      s.addText(c, { x, y, w: 2.3, h: 0.35, fontSize: 10, color: WHITE, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    });

    // Why win
    panel(s, 0.5, 5.5, 7.0, 1.4);
    s.addText("WHY THIS FOUNDER CAN WIN", { x: 0.7, y: 5.6, w: 6.6, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const why = [
      "Deep media instinct",
      "Spotted white space first",
      "Shipped product solo with AI tools",
      "Understands audience + business",
    ];
    why.forEach((w, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      s.addText(`✓  ${w}`, { x: 0.7 + col * 3.3, y: 5.95 + row * 0.4, w: 3.3, h: 0.3, fontSize: 11, color: WHITE, fontFace: "Calibri" });
    });

    s.addText("FOUNDER + FUTURE HIRES", { x: 8.0, y: 2.0, w: 5, h: 0.3, fontSize: 10, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 2 });
    const hires = [
      { r: "Engineering / Product", d: "Scale platform, build data infrastructure" },
      { r: "Content / Editorial", d: "Lead newsroom, editorial calendar" },
      { r: "Partnerships / Ad Sales", d: "Advertiser relationships, sponsorship" },
      { r: "Operations / Growth", d: "Newsletter, SEO, analytics, growth" },
    ];
    hires.forEach((h, i) => {
      cardWithTitle(s, 8.0, 2.4 + i * 1.15, 4.9, 1.05, "+ " + h.r, h.d);
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

    panel(s, 0.5, 2.4, 8.4, 1.2);
    [
      { v: "$250K", l: "RAISE AMOUNT", c: TEAL },
      { v: "SAFE", l: "INSTRUMENT", c: WHITE },
      { v: "10–14", l: "MONTHS RUNWAY", c: ACCENT },
    ].forEach((t, i) => {
      const x = 0.5 + i * 2.8;
      s.addText(t.v, { x, y: 2.55, w: 2.8, h: 0.55, fontSize: 30, color: t.c, bold: true, align: "center", fontFace: "Calibri" });
      s.addText(t.l, { x, y: 3.15, w: 2.8, h: 0.3, fontSize: 9, color: MUTED, bold: true, align: "center", fontFace: "Consolas", charSpacing: 2 });
      if (i < 2) s.addShape("rect", { x: x + 2.78, y: 2.6, w: 0.02, h: 0.7, fill: { color: PANEL_BORDER }, line: { type: "none" } });
    });

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
      const x = 0.7 + col * 4.0, y = 4.3 + row * 0.7;
      s.addShape("ellipse", { x, y: y + 0.18, w: 0.18, h: 0.18, fill: { color: TEAL, transparency: 30 }, line: { type: "none" } });
      s.addText(u, { x: x + 0.3, y, w: 3.7, h: 0.6, fontSize: 11, color: WHITE, fontFace: "Calibri", valign: "middle" });
    });

    // CTA
    panel(s, 9.1, 2.4, 3.8, 2.6);
    s.addImage({ data: LOGO_LIGHT, x: 10.5, y: 2.55, w: 1.0, h: 1.0 });
    s.addText("Smart First Check", { x: 9.2, y: 3.6, w: 3.6, h: 0.4, fontSize: 18, color: WHITE, bold: true, align: "center", fontFace: "Calibri" });
    s.addText("Big market. Lean raise. Fast execution.", {
      x: 9.2, y: 4.05, w: 3.6, h: 0.4, fontSize: 11, color: MUTED, align: "center", fontFace: "Calibri",
    });
    s.addText("Flipr.Media", { x: 9.2, y: 4.5, w: 3.6, h: 0.5, fontSize: 22, color: TEAL, bold: true, align: "center", fontFace: "Calibri" });

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
    // Big ghosted logo behind
    s.addImage({ data: LOGO_LIGHT, x: 4.66, y: 0.5, w: 4, h: 4, transparency: 90 });

    s.addText("18 — CLOSING VISION", { x: 0.5, y: 0.5, w: 8, h: 0.3, fontSize: 11, color: TEAL, bold: true, fontFace: "Consolas", charSpacing: 3 });

    s.addImage({ data: LOGO_LIGHT, x: 5.66, y: 1.2, w: 2, h: 2 });
    s.addText("Flipr.Media", { x: 0.5, y: 3.3, w: 12.3, h: 0.8, fontSize: 44, color: WHITE, bold: true, align: "center", fontFace: "Calibri" });

    s.addText(
      [
        { text: "Every maturing ecosystem needs a trusted ", options: { color: WHITE, bold: true } },
        { text: "media, discovery, and intelligence layer.", options: { color: TEAL, italic: true, bold: true } },
      ],
      { x: 1.5, y: 4.2, w: 10.3, h: 0.8, fontSize: 18, align: "center", fontFace: "Calibri" }
    );

    s.addText(
      "Big market. Focused raise. Fast execution. Flipr.Media is raising $250K to prove the model and build an investable foundation as the $170B+ live commerce economy keeps accelerating.",
      { x: 1.5, y: 5.1, w: 10.3, h: 1.0, fontSize: 13, color: MUTED, align: "center", fontFace: "Calibri" }
    );

    panel(s, 2.5, 6.1, 8.3, 0.85);
    s.addText("Brian Weiss", { x: 2.7, y: 6.2, w: 2.3, h: 0.6, fontSize: 12, color: WHITE, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    s.addShape("rect", { x: 5.0, y: 6.25, w: 0.02, h: 0.55, fill: { color: PANEL_BORDER }, line: { type: "none" } });
    s.addText("hello@flipr.media", { x: 5.1, y: 6.2, w: 3.1, h: 0.6, fontSize: 18, color: TEAL, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });
    s.addShape("rect", { x: 8.2, y: 6.25, w: 0.02, h: 0.55, fill: { color: PANEL_BORDER }, line: { type: "none" } });
    s.addText("flipr.media", { x: 8.3, y: 6.2, w: 2.4, h: 0.6, fontSize: 12, color: TEAL, bold: true, align: "center", valign: "middle", fontFace: "Calibri" });

    s.addText("CONFIDENTIAL — FLIPR.MEDIA © 2026", {
      x: 0.5, y: 7.05, w: 12.3, h: 0.3, fontSize: 9, color: MUTED, align: "center", fontFace: "Consolas", charSpacing: 3,
    });
  }

  await pptx.writeFile({ fileName: "FliprMedia-InvestorDeck-2026.pptx" });
}
