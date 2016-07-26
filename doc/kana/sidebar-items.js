initSidebarItems({"fn":[["ascii2wide","Convert normal ASCII characters into Wide-alphanumeric  [A -> Ａ]"],["hira2kata","Convert Hiragana into Katakana  [あ -> ア]"],["kata2hira","Convert Katakana into Hiragana  [ア -> あ]"],["nowidespace","Convert Wide-space into normal space    [\"　\" -> \" \"]"],["nowideyen","Convert Wide-yen into Half-width-yen    [\"￥\" -> \"¥\"]"],["space2wide","Convert normal space into Wide-space    [\" \" -> \"　\"]"],["vsmark2combi","Convert all separated Voiced-sound-marks into space+combining style \"\\u{20}\\u{3099}\" # Examples ``` let s = \"ひﾟひ゛んは ゙\"; assert_eq!(\"ひ ゚ひ ゙んは ゙\", kana::vsmark2combi(s)); ```"],["vsmark2full","Convert all separated Voiced-sound-marks into full-width style \"\\u{309B}\" # Examples ``` let s = \"ひﾟひ゛んは ゙\"; assert_eq!(\"ひ゜ひ゛んは゛\", kana::vsmark2combi(s)); ```"],["vsmark2half","Convert all separated Voiced-sound-marks into half-width style \"\\u{FF9E}\" # Examples ``` let s = \"ひﾟひ゛んは ゙\"; assert_eq!(\"ひﾟひﾞんはﾞ\", kana::vsmark2combi(s)); ```"],["wide2ascii","Convert Wide-alphanumeric into normal ASCII  [Ａ -> A] # Examples ``` let s3 = \"＃＆Ｒｕｓｔ－１．６！\"; assert_eq!(\"#&Rust-1.6!\", kana::wide2ascii(s3)); ```"],["yen2wide","Convert Half-width-yen into Wide-yen    [\"¥\" -> \"￥\"]"]],"struct":[["Kana",""]]});