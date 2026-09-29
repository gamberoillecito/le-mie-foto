import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `\
    User - agent: *
User-agent: AI2Bot
User-agent: Ai2Bot-Dolma
User-agent: Amazonbot
User-agent: anthropic-ai
User-agent: Applebot-Extended
User-agent: Awario
User-agent: bedrockbot
User-agent: Brightbot 1.0
User-agent: Bytespider
User-agent: CCBot
User-agent: Claude-Web
User-agent: ClaudeBot
User-agent: cohere-training-data-crawler
User-agent: Crawl4AI
User-agent: DeepSeekBot
User-agent: Diffbot
User-agent: FacebookBot
User-agent: facebookexternalhit
User-agent: FirecrawlAgent
User-agent: FriendlyCrawler
User-agent: Google-CloudVertexBot
User-agent: Google-Extended
User-agent: Google-Firebase
User-agent: GoogleOther
User-agent: GoogleOther-Image
User-agent: GoogleOther-Video
User-agent: GPTBot
User-agent: ICC-Crawler
User-agent: ImagesiftBot
User-agent: img2dataset
User-agent: ISSCyberRiskCrawler
User-agent: LAIONDownloader
User-agent: Linguee Bot
User-agent: meta-externalagent
User-agent: Meta-ExternalAgent
User-agent: Mozilla-Tabstack
User-agent: omgili
User-agent: omgilibot
User-agent: OpenAI
User-agent: PanguBot
User-agent: Panscient
User-agent: Scrapy
User-agent: SemrushBot-OCOB
User-agent: SemrushBot-SWA
User-agent: TikTokSpider
User-agent: Timpibot
User-agent: VelenPublicWebCrawler
User-agent: Webzio-Extended
User-agent: YandexAdditional
User-agent: AmazonBuyForMe
User-agent: Amzn-User
User-agent: ChatGPT Agent
User-agent: ChatGPT-User
User-agent: Claude-Code
User-agent: Claude-User
User-agent: cohere-ai
User-agent: Cursor
User-agent: Devin
User-agent: Diffbot-User
User-agent: DuckAssistBot
User-agent: Gemini-Deep-Research
User-agent: Google-Agent
User-agent: Google-Gemini-CLI
User-agent: Google-NotebookLM
User-agent: GoogleAgent-Mariner
User-agent: GoogleAgent-URLContext
User-agent: Kimi-User
User-agent: Manus-User
User-agent: MistralAI-User
User-agent: NovaAct
User-agent: Perplexity-User
User-agent: YouBot
User-agent: Andibot
User-agent: Applebot
User-agent: Bravebot
User-agent: Claude-SearchBot
User-agent: ExaSearchBot
User-agent: LinkupBot
User-agent: OAI-SearchBot
User-agent: PerplexityBot
User-agent: PetalBot
User-agent: TavilyBot
Disallow: /le-mie-foto

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
