import type { Release } from '@/types'

export const releases: Release[] = [
  // ── 2025 ────────────────────────────────────────────────────────────────────
  {
    slug: 'blue-whale',
    title: {
      en: 'Blue Whale',
      ko: '흰수염고래',
      ms: 'Blue Whale',
      ja: 'ブルーホエール',
    },
    type: 'single',
    releaseDate: '2025-10-06',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/b5/f1/b9b5f153-c739-4bda-b0f1-0127e8f354cc/cover_KM0023491_1.jpg/600x600bb.jpg',
    description: {
      en: 'A special single — QWER\'s reinterpretation of YB\'s iconic 2011 rock anthem "Blue Whale," inheriting the spirit of resistance and solidarity in Korean rock.',
      ko: 'YB의 명곡 "흰수염고래"를 QWER만의 스타일로 재해석한 스페셜 싱글. 한국 록의 저항과 연대의 정신을 이어받았습니다.',
      ms: 'Single istimewa — tafsiran semula QWER terhadap lagu rock ikonik YB "Blue Whale," mewarisi semangat perlawanan dan solidariti dalam rock Korea.',
      ja: 'YBの名曲「ブルーホエール」をQWER流に再解釈したスペシャルシングル。韓国ロックの抵抗と連帯の精神を受け継いでいます。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Blue Whale', ko: '흰수염고래', ms: 'Blue Whale', ja: 'ブルーホエール' },
        duration: '4:06',
      },
    ],
    streaming: {},
  },
  {
    slug: 'in-a-million-noises',
    title: {
      en: "In a million noises, I'll be your harmony",
      ko: '난 네 편이야, 온 세상이 불협일지라도',
      ms: "In a million noises, I'll be your harmony",
      ja: '百万の雑音の中でも、君のハーモニーになる',
    },
    type: 'ep',
    releaseDate: '2025-06-09',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/85/a2/f985a2a5-132b-00c9-784a-d22753495142/cover_KM0022917_1.jpg/600x600bb.jpg',
    description: {
      en: 'QWER\'s 3rd mini album and the final chapter of their debut album series. A promise of unwavering support — bright, hopeful, and unmistakably QWER.',
      ko: 'QWER의 3번째 미니앨범이자 데뷔 앨범 시리즈의 마지막 장. 변하지 않는 약속을 담은 밝고 희망찬 작품입니다.',
      ms: 'Mini album ke-3 QWER dan bab terakhir siri album debut mereka. Janji sokongan yang tidak berubah — cerah, penuh harapan, dan pastinya QWER.',
      ja: 'QWERの3rdミニアルバムであり、デビューアルバムシリーズの最終章。揺るぎないサポートの約束 — 明るく、希望に満ち、紛れもなくQWER。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Dear', ko: '눈물참기', ms: 'Dear', ja: 'Dear' },
        duration: '3:22',
        musicVideoUrl: 'https://www.youtube.com/watch?v=pifz9JH1Re8',
      },
      {
        number: 2,
        title: { en: 'Be Happy', ko: '행복해져라', ms: 'Be Happy', ja: 'Be Happy' },
        duration: '3:15',
      },
      {
        number: 3,
        title: { en: '#QWER', ko: '검색어는 (#QWER)', ms: '#QWER', ja: '#QWER' },
        duration: '3:02',
      },
      {
        number: 4,
        title: { en: 'OVERDRIVE', ko: 'OVERDRIVE', ms: 'OVERDRIVE', ja: 'OVERDRIVE' },
        duration: '3:18',
      },
      {
        number: 5,
        title: { en: 'D-Day', ko: 'D-Day', ms: 'D-Day', ja: 'D-Day' },
        duration: '3:10',
      },
      {
        number: 6,
        title: { en: 'Yours Sincerely', ko: 'Yours Sincerely', ms: 'Yours Sincerely', ja: 'Yours Sincerely' },
        duration: '3:45',
      },
    ],
    streaming: {
      youtube: 'https://www.youtube.com/watch?v=pifz9JH1Re8',
    },
  },
  {
    slug: 'play-we-dew',
    title: {
      en: 'Play, We, Dew',
      ko: 'Play, We, Dew',
      ms: 'Play, We, Dew',
      ja: 'Play, We, Dew',
    },
    type: 'collaboration',
    releaseDate: '2025-04-13',
    coverImage: 'https://img.youtube.com/vi/8IMPpF2tIWI/maxresdefault.jpg',
    description: {
      en: 'QWER × Mountain Dew promotional single for Mountain Dew ZERO\'s 2025 brand campaign in Korea. The MV hit 1 million views within 24 hours of release.',
      ko: 'QWER × 마운틴듀 프로모션 싱글. 마운틴듀 제로의 2025 브랜드 캠페인을 위해 제작되었으며, MV가 공개 24시간 만에 100만 뷰를 돌파했습니다.',
      ms: 'Single promosi QWER × Mountain Dew untuk kempen jenama Mountain Dew ZERO 2025 di Korea. MV mencecah 1 juta tontonan dalam masa 24 jam selepas dikeluarkan.',
      ja: 'QWER × マウンテンデューのプロモーションシングル。マウンテンデューZEROの2025年ブランドキャンペーンのために制作され、MVは公開24時間で100万回再生を突破しました。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Play, We, Dew', ko: 'Play, We, Dew', ms: 'Play, We, Dew', ja: 'Play, We, Dew' },
        duration: '2:55',
        musicVideoUrl: 'https://www.youtube.com/watch?v=8IMPpF2tIWI',
      },
    ],
    streaming: {
      youtube: 'https://www.youtube.com/watch?v=8IMPpF2tIWI',
    },
  },
  {
    slug: 'halftime',
    title: {
      en: 'Halftime',
      ko: 'Halftime',
      ms: 'Halftime',
      ja: 'Halftime',
    },
    type: 'collaboration',
    releaseDate: '2024-11-21',
    coverImage: 'https://img.youtube.com/vi/7qRCUAQ_XC8/maxresdefault.jpg',
    description: {
      en: 'QWER × EA SPORTS FC Online collaboration track, part of the "최애의 OST" (My Favorite OST) series for FC Online.',
      ko: 'QWER × EA SPORTS FC온라인 콜라보레이션 트랙. FC온라인 "최애의 OST" 시리즈의 일환으로 제작되었습니다.',
      ms: 'Lagu kolaborasi QWER × EA SPORTS FC Online, sebahagian daripada siri "최애의 OST" (OST Kegemaran Saya) untuk FC Online.',
      ja: 'QWER × EA SPORTS FCオンラインのコラボトラック。FCオンライン「最愛のOST」シリーズの一環として制作されました。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Halftime', ko: 'Halftime', ms: 'Halftime', ja: 'Halftime' },
        duration: '3:20',
        musicVideoUrl: 'https://www.youtube.com/watch?v=7qRCUAQ_XC8',
      },
    ],
    streaming: {
      youtube: 'https://www.youtube.com/watch?v=7qRCUAQ_XC8',
    },
  },
  {
    slug: 'discord-japanese-ver',
    title: {
      en: 'Discord (Japanese Ver.)',
      ko: 'Discord (Japanese Ver.)',
      ms: 'Discord (Japanese Ver.)',
      ja: 'Discord (Japanese Ver.)',
    },
    type: 'single',
    releaseDate: '2025-05-10',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/8b/1e/7e8b1e02-1775-f367-7693-fc7a6477cd07/cover_KM0022680_1.jpg/600x600bb.jpg',
    description: {
      en: 'QWER\'s debut hit "Discord" re-recorded in Japanese. Released on overseas streaming platforms only.',
      ko: 'QWER의 데뷔곡 "Discord"를 일본어로 재녹음한 버전. 해외 스트리밍 플랫폼 한정 발매.',
      ms: 'Lagu debut QWER "Discord" dirakam semula dalam bahasa Jepun. Dikeluarkan di platform penstriman luar negara sahaja.',
      ja: 'QWERのデビュー曲「Discord」を日本語で再レコーディング。海外ストリーミングプラットフォーム限定リリース。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Discord (Japanese Ver.)', ko: 'Discord (Japanese Ver.)', ms: 'Discord (Japanese Ver.)', ja: 'Discord (Japanese Ver.)' },
        duration: '2:47',
      },
    ],
    streaming: {},
  },
  {
    slug: 'youth-promise',
    title: {
      en: 'Youth Promise',
      ko: '청춘서약',
      ms: 'Youth Promise',
      ja: '青春誓約',
    },
    type: 'single',
    releaseDate: '2025-02-28',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/94/f9/0d94f9de-365d-0ec5-ae1e-baddbe4a097a/5063766406139_cover.jpg/600x600bb.jpg',
    description: {
      en: 'QWER\'s second digital single — entirely self-written and composed by the members. A pledge of youth and friendship.',
      ko: '멤버들이 직접 작사·작곡한 QWER의 두 번째 디지털 싱글. 청춘과 우정에 대한 서약.',
      ms: 'Single digital kedua QWER — ditulis dan digubah sepenuhnya oleh ahli kumpulan. Ikrar belia dan persahabatan.',
      ja: 'メンバー自ら作詞・作曲したQWERの2ndデジタルシングル。青春と友情への誓い。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Youth Promise', ko: '청춘서약', ms: 'Youth Promise', ja: '青春誓約' },
        duration: '3:14',
      },
    ],
    streaming: {},
  },

  // ── 2024 ────────────────────────────────────────────────────────────────────
  {
    slug: 'algorithms-blossom',
    title: {
      en: "Algorithm's Blossom",
      ko: "Algorithm's Blossom",
      ms: "Algorithm's Blossom",
      ja: "Algorithm's Blossom",
    },
    type: 'ep',
    releaseDate: '2024-09-23',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/15/00/62/150062e8-fd58-5dc2-bfea-f0e502e0957a/cover_KM0020310_1.jpg/600x600bb.jpg',
    description: {
      en: 'QWER\'s 2nd mini album. Title track "My Name Is Malguem" was written and composed by (G)I-DLE\'s Soyeon, earning QWER their first music show win on Show Champion.',
      ko: 'QWER의 2번째 미니앨범. 타이틀곡 "내 이름 맑음"은 (여자)아이들 소연이 작사·작곡했으며, 쇼챔피언에서 첫 음악방송 1위를 차지했습니다.',
      ms: 'Mini album ke-2 QWER. Lagu tajuk "My Name Is Malguem" ditulis dan digubah oleh Soyeon (G)I-DLE, memenangi trofi rancangan muzik pertama QWER di Show Champion.',
      ja: 'QWERの2ndミニアルバム。タイトル曲「My Name Is Malguem」は(G)I-DLEのソヨンが作詞・作曲し、Show Championで初の音楽番組1位を獲得しました。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'INTRO', ko: 'INTRO', ms: 'INTRO', ja: 'INTRO' },
        duration: '0:30',
      },
      {
        number: 2,
        title: { en: 'Fake Idol', ko: '가짜 아이돌', ms: 'Fake Idol', ja: 'Fake Idol' },
        duration: '2:39',
      },
      {
        number: 3,
        title: { en: 'My Name Is Malguem', ko: '내 이름 맑음', ms: 'My Name Is Malguem', ja: 'My Name Is Malguem' },
        duration: '3:08',
        musicVideoUrl: 'https://www.youtube.com/watch?v=AlirzLFEHUI',
      },
      {
        number: 4,
        title: { en: "Let's Love", ko: '사랑하자', ms: "Let's Love", ja: "Let's Love" },
        duration: '3:20',
      },
      {
        number: 5,
        title: { en: 'run! run! run!', ko: '달리기', ms: 'run! run! run!', ja: 'run! run! run!' },
        duration: '3:05',
      },
      {
        number: 6,
        title: { en: 'Goodbye My Sadness', ko: '안녕, 나의 슬픔', ms: 'Goodbye My Sadness', ja: 'Goodbye My Sadness' },
        duration: '3:30',
      },
      {
        number: 7,
        title: { en: 'REBOUND', ko: '메아리', ms: 'REBOUND', ja: 'REBOUND' },
        duration: '3:15',
      },
      {
        number: 8,
        title: { en: 'OUTRO', ko: 'OUTRO', ms: 'OUTRO', ja: 'OUTRO' },
        duration: '0:35',
      },
    ],
    streaming: {
      youtube: 'https://www.youtube.com/watch?v=AlirzLFEHUI',
    },
  },
  {
    slug: 'fake-idol',
    title: {
      en: 'Fake Idol',
      ko: '가짜 아이돌',
      ms: 'Fake Idol',
      ja: 'フェイクアイドル',
    },
    type: 'single',
    releaseDate: '2024-09-02',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d0/a8/51/d0a851ab-061e-115c-7264-b198fa7f2e19/cover_KM0020310_1.jpg/600x600bb.jpg',
    description: {
      en: 'QWER\'s first digital single and pre-release for Algorithm\'s Blossom. A defiant pop-rock anthem about being called "fake" — featuring (G)I-DLE\'s Soyeon in the MV.',
      ko: '알고리즘스 블로썸의 선공개 싱글이자 QWER의 첫 디지털 싱글. "가짜"라는 비난에 맞서는 팝 록 앤섬. MV에 (여자)아이들 소연이 출연했습니다.',
      ms: 'Single digital pertama QWER dan pra-keluaran untuk Algorithm\'s Blossom. Lagu pop-rock yang berani tentang dipanggil "palsu" — menampilkan Soyeon (G)I-DLE dalam MV.',
      ja: 'Algorithm\'s Blossomの先行シングルであり、QWERの初デジタルシングル。「偽物」と呼ばれることに立ち向かうポップロックアンセム。MVに(G)I-DLEのソヨンが出演。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Fake Idol', ko: '가짜 아이돌', ms: 'Fake Idol', ja: 'フェイクアイドル' },
        duration: '2:39',
      },
    ],
    streaming: {},
  },
  {
    slug: 'anima-power',
    title: {
      en: 'ANIMA POWER',
      ko: 'ANIMA POWER',
      ms: 'ANIMA POWER',
      ja: 'ANIMA POWER',
    },
    type: 'collaboration',
    releaseDate: '2024-07-12',
    coverImage: 'https://img.youtube.com/vi/BLnkLdzlCx4/maxresdefault.jpg',
    description: {
      en: 'QWER × League of Legends collaboration single for the Anima Squad skin line event. Released in both Japanese and Korean versions with an anime-style animated MV.',
      ko: 'QWER × 리그 오브 레전드 콜라보 싱글. 애니마 스쿼드 스킨 라인 이벤트를 위해 제작되었으며, 일본어와 한국어 두 가지 버전으로 발매. 애니메이션 스타일 MV 공개.',
      ms: 'Single kolaborasi QWER × League of Legends untuk acara skin Anima Squad. Dikeluarkan dalam versi Jepun dan Korea dengan MV animasi gaya anime.',
      ja: 'QWER × リーグ・オブ・レジェンドのコラボシングル。Anima Squadスキンラインイベントのために制作され、日本語と韓国語の2バージョンでリリース。アニメスタイルのMVも公開。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'ANIMA POWER', ko: 'ANIMA POWER', ms: 'ANIMA POWER', ja: 'ANIMA POWER' },
        duration: '3:00',
        musicVideoUrl: 'https://www.youtube.com/watch?v=m-FFdsNO7J8',
      },
    ],
    streaming: {
      youtube: 'https://www.youtube.com/watch?v=m-FFdsNO7J8',
    },
  },
  {
    slug: 'manito',
    title: {
      en: 'MANITO',
      ko: 'MANITO',
      ms: 'MANITO',
      ja: 'MANITO',
    },
    type: 'ep',
    releaseDate: '2024-04-01',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/75/54/38/75543853-92c7-064c-fe26-2cbf5eecc6d8/cover_KM0019655_1.jpg/600x600bb.jpg',
    description: {
      en: 'QWER\'s 1st mini album. A coming-of-age drama set in a school, unfolding from day to night. Title track "T.B.H" captures the nerves of a first confession with manga-inspired MV visuals.',
      ko: 'QWER의 1번째 미니앨범. 학교를 배경으로 낮에서 밤으로 이어지는 청춘 드라마. 타이틀곡 "고민중독"은 첫 고백의 설렘을 만화풍 MV로 표현했습니다.',
      ms: 'Mini album pertama QWER. Drama remaja berlatar sekolah, berlangsung dari siang hingga malam. Lagu tajuk "T.B.H" menangkap kegelisahan pengakuan pertama dengan visual MV gaya manga.',
      ja: 'QWERの1stミニアルバム。学校を舞台に昼から夜へと展開する青春ドラマ。タイトル曲「T.B.H」は初告白のドキドキをマンガ風MVで表現しました。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'T.B.H', ko: '고민중독', ms: 'T.B.H', ja: 'T.B.H' },
        duration: '2:56',
        musicVideoUrl: 'https://www.youtube.com/watch?v=ImuWa3SJulY',
      },
      {
        number: 2,
        title: { en: 'SODA', ko: 'SODA', ms: 'SODA', ja: 'SODA' },
        duration: '3:10',
      },
      {
        number: 3,
        title: { en: 'Free-Dumb', ko: '자유선언', ms: 'Free-Dumb', ja: 'Free-Dumb' },
        duration: '3:05',
      },
      {
        number: 4,
        title: { en: 'G9JB', ko: '지구정복', ms: 'G9JB', ja: 'G9JB' },
        duration: '3:00',
      },
      {
        number: 5,
        title: { en: 'Ferris Wheel', ko: '대관람차', ms: 'Ferris Wheel', ja: '観覧車' },
        duration: '3:25',
      },
      {
        number: 6,
        title: { en: 'Make Our Highlight', ko: '불꽃놀이', ms: 'Make Our Highlight', ja: 'Make Our Highlight' },
        duration: '3:15',
      },
      {
        number: 7,
        title: { en: 'Manito', ko: '마니또', ms: 'Manito', ja: 'マニト' },
        duration: '3:30',
      },
    ],
    streaming: {
      youtube: 'https://www.youtube.com/watch?v=ImuWa3SJulY',
    },
  },

  // ── 2023 ────────────────────────────────────────────────────────────────────
  {
    slug: 'discord-tak-remix',
    title: {
      en: 'Discord (TAK Remix)',
      ko: 'Discord (TAK Remix)',
      ms: 'Discord (TAK Remix)',
      ja: 'Discord (TAK Remix)',
    },
    type: 'single',
    releaseDate: '2023-12-12',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e1/59/c6/e159c61d-9b06-d46e-d470-c59e8bcfc337/cover_KM0019120_1.jpg/600x600bb.jpg',
    description: {
      en: 'A remix of QWER\'s debut single "Discord" by producer TAK, adding a fresh electronic twist to the original rock-pop energy.',
      ko: '프로듀서 TAK이 리믹스한 QWER의 데뷔 싱글 "Discord". 원곡의 록팝 에너지에 새로운 전자음악적 트위스트를 더했습니다.',
      ms: 'Remix lagu debut QWER "Discord" oleh penerbit TAK, menambah sentuhan elektronik segar kepada tenaga rock-pop asal.',
      ja: 'プロデューサーTAKによるQWERのデビューシングル「Discord」のリミックス。オリジナルのロックポップエネルギーに新鮮なエレクトロニックツイストを加えました。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Discord (TAK Remix)', ko: 'Discord (TAK Remix)', ms: 'Discord (TAK Remix)', ja: 'Discord (TAK Remix)' },
        duration: '3:12',
      },
    ],
    streaming: {},
  },
  {
    slug: 'harmony-from-discord',
    title: {
      en: 'Harmony from Discord',
      ko: 'Harmony from Discord',
      ms: 'Harmony from Discord',
      ja: 'Harmony from Discord',
    },
    type: 'single',
    releaseDate: '2023-10-18',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/57/1b/2b/571b2b61-77b0-03b4-fa64-fdfef50beaad/cover_KM0018677_1.jpg/600x600bb.jpg',
    description: {
      en: 'QWER\'s debut single album. Four strangers, one band, zero compromise. Title track "Discord" went viral on Spotify\'s Japan Viral 50 and charted for 21 weeks on YouTube Music Korea.',
      ko: 'QWER의 데뷔 싱글 앨범. 네 명의 낯선 사람, 하나의 밴드, 타협 없음. 타이틀곡 "Discord"는 스포티파이 일본 바이럴 50에 진입하고 유튜브 뮤직 코리아에서 21주간 차트인했습니다.',
      ms: 'Album single debut QWER. Empat orang asing, satu kumpulan, tiada kompromi. Lagu tajuk "Discord" menjadi viral di Spotify Viral 50 Jepun dan berada di carta YouTube Music Korea selama 21 minggu.',
      ja: 'QWERのデビューシングルアルバム。4人の見知らぬ人、1つのバンド、妥協なし。タイトル曲「Discord」はSpotify Japan Viral 50に入り、YouTube Music Koreaで21週間チャートインしました。',
    },
    tracks: [
      {
        number: 1,
        title: { en: 'Harmony of Stars', ko: '별의 하모니', ms: 'Harmony of Stars', ja: '星のハーモニー' },
        duration: '3:42',
      },
      {
        number: 2,
        title: { en: 'Discord', ko: 'Discord', ms: 'Discord', ja: 'Discord' },
        duration: '2:47',
        musicVideoUrl: 'https://www.youtube.com/watch?v=WGm2HmXeeRI',
      },
      {
        number: 3,
        title: { en: 'Secret Diary', ko: '수수께끼 다이어리', ms: 'Secret Diary', ja: '謎のダイアリー' },
        duration: '3:15',
      },
      {
        number: 4,
        title: { en: 'Discord (Inst.)', ko: 'Discord (Inst.)', ms: 'Discord (Inst.)', ja: 'Discord (Inst.)' },
        duration: '2:47',
      },
    ],
    streaming: {
      youtube: 'https://www.youtube.com/watch?v=WGm2HmXeeRI',
    },
  },
]

// Sorted newest first
export const releasesSorted = [...releases].sort(
  (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
)

export const getReleaseBySlug = (slug: string): Release | undefined =>
  releases.find(r => r.slug === slug)

export const getLatestRelease = (): Release => releasesSorted[0]

/** Resize an iTunes artwork URL to the given dimension. YouTube thumbnails pass through unchanged. */
export function coverUrl(url: string | undefined, size: number): string | undefined {
  if (!url) return undefined
  return url.replace(/\/\d+x\d+bb\.jpg$/, `/${size}x${size}bb.jpg`)
}
