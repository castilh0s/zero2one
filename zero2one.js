const string = "abcdefghijklmnopqrstuvwxyz_0123456789";
const text = [
  "u9wlcn1cj3ej3u9d74kmylhm077mpj3f44k1m2hvz",
  "j3xep2vgbbox4kn4kf4o8g5h4kvzxr4kmha828gha",
  "8hpnnzh_8gzhe3l4kapd_nxu9rbj35gq1b0cct9qg",
  "77g4ks2drzgt9xvhi6qvf4vi65nu9qzgohvi6lw2y",
  "xpu9qj3llu9e35cpx27cba1pt9noxbglp4khsvvwd",
  "0gami6nprrha8_u9mwd1e3p5nngt9xg4kqx8_f4lr",
  "0kbnn1z5zcv0nh8_salov2rpuumr0m7ai6zj3e3dv",
  "1vht9bdj3e3lf4rb25knpqi6nxqi6ozzpdrv8_bw5",
  "b6l1umj3c8_oqt9c2grmxkwk0155czhhqwuqzo7zn",
  "qgf4m1b6dxrxi6g2vkb6ypb65yb6anuccpse3zgv_",
  "dvt9yb62b6r5b6rb60ldb6pi6y2hgzkpt9loxf4k1",
  "t9rzk27j3mdhppuca05ohf4ne3hdnlnhe3xwj3_yh",
  "ulslwpdrgj3sy_f44kqcd24kb6ywhqxp0j3vv_qbs",
  "1c4knxre3w_i6vgvpol405mqf44ky5xoxzuyqct9r",
  "iyxcncwvvqhd2u9p04k1ggu9e38_zbcre3xbt94kc",
  "sbnj3czqoq_wr4kt9pscl41zrme3y5bxpzryl4f4y",
  "dknd_zbj3j3qcnu92bpj3ba1e3cu90xbprj3j3j3c",
  "ybvcgh5f4bcv5njic3pl41iwzkqvw_hl4oy5nyjrm",
  "iqvu9bsybe3t9kl4nsgv2wqt9rf4crirs0y1wdvb3",
  "p7wn555h3t9ju9g_ngl4xam6sy1bko3p_gnk5dvgz",
  "3p_cm6yxcl4rt9jt9h3niu9szzbnkkn_h30_e1nb7",
  "ou9xv53pu95o2t9cjbex_vpqb8wyjgczobc5irm6g",
  "f4v8wnl4rxaryl44t9dl44z8wg1cp__i8wu9_vk9_",
  "kzkm65k7l4l4o15eix2r0xym6lvyvt9lf4y5yd8wt",
  "9zxugr5hx8wqgm6m6s8v2tshrubly1pevlpg7lllu",
  "m5bscjuv_cbtf4jpnr0ervyx7tbr6xa5qsq_9_bo6",
  "iiub5qmg8wtvz6x2ln6x6xys8kb8w7qu5zt1epk9_",
  "ugguk7ayhr02icrdp5cnrhmlucqzb72vo6js8e16x",
  "vbzrccyqju2ufbi9_s8io6vpb7hhqz5k1cmm9_8wt",
  "zi9_d9_em7t20k6x5p1kpqftqjrhiiuvyijt8wrmj",
  "9_r9_nls84aqemp9_yph3_mu5r1lm84w784wibz6x",
  "nrld_fracudo66x784w5s840q5m2jkdvbfbnmk2vk",
  "tr7k1yyct_84wymz6xswtd_dvsjviugj7jvs17wl2",
  "ltkfr7lv6xkzb5qkzr0jvvu5uz27kpcvvrc_o6e12",
  "ryyua7s5ilqpwr3zkyrsbskjny11wid7kcfj2k284",
  "wqu84tri2h3usq84tq_b0jysid84wv2p7mh3o63z2",
  "6xc7sacpe4h3ceplbi4h3gnuaucvatjprbffl73zf",
  "yyr2ndr6x5q__7pt6xkcb4h34h30slnu5u784wljw",
  "84xb2xzb092u5jntz84teb7rknnff4h3l_cvxo6w8",
  "4d8tpxldvso6n4h3nfx7x92nmw80o6pu_8tg792o6",
  "s1o6f4h34h0j4hm92xk1dn7vo6r9w892lsxy_cles",
  "bno6nd7r9gxf_bzipudfo6n8t4hlclvn4hu7w81mr",
  "992bjkr9yo6aw8oz_8ttftltix4h54h1d_q3otq3m",
  "ye924hlulp92ffq3mug4hpxxsyevnci4nymjs04n4",
  "ndir9f92g_jjcltmgp4hlp792udr91jviixlx9204",
  "npw8vr9bq3y7gvu4h92osk4htv_pq34nyzmjymr9p",
  "4np14hebxq37fpm0kfhzir9ot07xyvclcr9_zc0r9",
  "8tsakfu7sy111yujzdjgiz04ngmo4n70ogw8k4njc",
  "4ndlpvk8tg4n8tg927ajm5zw8c9254nkh0ggmhz92",
  "ijyr9p0bkpdcr95iby8tey7q30chl92ldzee1lebq",
  "37jplphcdgptdelzkhxpxq30clexvlc65jiys07sg",
  "s1gmsa7dd920cl65gm1se_e65ubvms7cpjw8scw89",
  "2e7065gq3dxvv65h_zut0ea65uydayapfamxilyug",
  "ubce_kibq3u0ets17vlm92g1uecr9m_uo92jvkj92",
  "ammy7e927v0gxw8fcfq3_fj24na65uaja0hsjvtsd",
  "uzpmq3ecx2fuq3aaq3q3h2tvl_u2u1r9q3aq3uu0y",
  "gy7pqx4n16hr965n2016hhi7w8r9ufn16tl2unfqw",
  "8ay2dim16a0ahiihvcaycini2doqzm16r90nxn65n",
  "x65squw7cuzr9r9kscjv_16jw07sp_xfkupx7_r9c",
  "bzovpsbwyi065ume650aanyiaqr9o2momq16ldf7p",
  "r9ejqnytjftckly7kz00sdupl16makofxnac2jbbf",
  "tywdx70mvm0fvwogp55ggfeivpfiq5qlzcw55ee16",
  "lzclxkgq3lv5ysu0ig2nft75xq3016ooo0fg5vnop",
  "v2tjy_udsf_w7x_wloy7zn8f5ixdeyxbvq3lj5unc",
  "8fmtvjh16rr7rpcxo0wgg16llwcmz7lp_bg0w0p0e",
  "p16dntx16zjbq3prgtpd7bto8fhwknq3da5rbq3vr",
  "y8faiq3_lne16q35wlwpjp08fxbm16t5tiphu7z2p",
  "uhwghga8fyb0htul1wk5gpo1avwbti6xuv7q3rokn",
  "oas_5pvu8fq38fanwd0vzra15q3pxu7dopi68fa_s",
  "_xi6a8e8f_a8bea8wg7a8a81morlogp0mm5a8v1rw",
  "7bt_bzthsnza8xz5i6tbyuohtqswn5qek1uj3roj3",
  "7er8f08f4e5nhkna_nyi6oes8g7ae5o1puoyoyb0u",
  "1w5euswza8ra8a8nyz1ka8xuncumlsnzo7a80vkmj",
  "31oej3y8go07h8gtrqtdo5u0i6ubi68gj3hrut9k5"
].join("");

let orderedText = [];
string.split("").forEach(char => {
  let size = text.split("").filter(c => c == char).length;

  let obj = {
    size: size,
    char: char
  };

  orderedText.push(obj);
});

let sortOrderedText = orderedText.sort((a, b) => {
  if (a.size > b.size) {
    return 1;
  }
  if (a.size < b.size) {
    return -1;
  }
  return 0;
});

let result = sortOrderedText
  .map(c => c.char)
  .join("")
  .split("_")[0];

console.log(result);
