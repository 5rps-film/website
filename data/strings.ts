import { LocalizedString } from "@/lib/i18n";

const strings = {
  siteTitle: { en: "5 Requests Per Second", ja: "秒速5リクエスト" },
  siteDescription: {
    en: "Official website for the animated film 5 Requests Per Second",
    ja: "アニメーション映画『秒速5リクエスト』公式サイト",
  },
  followInstagram: {
    en: "Follow the production on Instagram",
    ja: "制作の進行をInstagramでフォロー",
  },
  home: { en: "Home", ja: "ホーム" },
  media: { en: "Media", ja: "メディア" },
  story: { en: "Story", ja: "ストーリー" },
  news: { en: "News", ja: "ニュース" },
  about: { en: "About", ja: "制作陣" },
  synopsis: { en: "Synopsis", ja: "あらすじ" },
  characters: { en: "Characters", ja: "キャラクター" },
  allPosts: { en: "All Posts", ja: "すべての記事" },
  noPosts: { en: "No posts found.", ja: "記事が見つかりません。" },
  noTags: { en: "No tags found.", ja: "タグが見つかりません。" },
  publishedOn: { en: "Published on", ja: "公開日" },
  readMore: { en: "Read more", ja: "続きを読む" },
  allPostsLink: { en: "All Posts", ja: "すべての記事" },
  tags: { en: "Tags", ja: "タグ" },
  authors: { en: "Authors", ja: "著者" },
  name: { en: "Name", ja: "名前" },
  previous: { en: "Previous", ja: "前へ" },
  next: { en: "Next", ja: "次へ" },
  pageOf: { en: "of", ja: "/" },
  previousArticle: { en: "Previous Article", ja: "前の記事" },
  nextArticle: { en: "Next Article", ja: "次の記事" },
  previousPost: { en: "Previous post", ja: "前の記事" },
  nextPost: { en: "Next post", ja: "次の記事" },
  backToNews: { en: "Back to news list", ja: "ニュース一覧へ戻る" },
  search: { en: "Search", ja: "検索" },
  searchArticles: { en: "Search articles", ja: "記事を検索" },
  toggleMenu: { en: "Toggle menu", ja: "メニューを切り替える" },
  learnMore: { en: "Learn more", ja: "詳しく見る" },
  languageSelector: { en: "Language selector", ja: "言語選択" },
  linkTo: { en: "Link to", ja: "リンク先" },
  viewPostsTagged: { en: "View posts tagged", ja: "タグの記事を見る" },
  thingsIBlogAbout: {
    en: "News and updates from 5 Requests Per Second",
    ja: "秒速5リクエストからのお知らせ",
  },
  taggedContent: { en: "tagged content", ja: "タグの記事" },
  avatar: { en: "avatar", ja: "プロフィール画像" },
  twitter: { en: "Twitter", ja: "Twitter" },

  notFoundTitle: {
    en: "Sorry, we could not find this page.",
    ja: "ページが見つかりませんでした。",
  },
  notFoundBody: {
    en: "You can find the latest film updates from the homepage.",
    ja: "ホームページから最新のお知らせをご覧いただけます。",
  },
  backToHome: { en: "Back to homepage", ja: "ホームへ戻る" },
  synopsisBody: {
    en: "5 Requests Per Second is a film about a US-born Japanese engineer who, after his startup collapses, escapes to Tokyo and partners with a rebellious local outsider to sell AI-driven illusions to old-school corporations.\n\nBut as their high-stakes con spirals out of control, he is forced to confront the identity he has long ignored.",
    ja: "『秒速5リクエスト』は、スタートアップの崩壊後に東京へ逃げ込んだ米国生まれの日本人エンジニアが、反骨心を抱えた現地のアウトサイダーと手を組み、旧態依然とした企業にAIが生む幻を売り込んでいく物語です。\n\n危険な詐欺が制御不能に膨らむなか、彼は長く目を背けてきた自分のアイデンティティと向き合わされます。",
  },
} satisfies Record<string, LocalizedString>;

export default strings;
