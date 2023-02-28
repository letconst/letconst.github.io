# ショットライン

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/letconst/shotline'>リポジトリ</a>" %},
    <a href="https://game.creators-guild.com/gck2021/3435/">ゲームクリエイター甲子園2021 - 作品ページ</a>
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="unity" text="Unity 2020.2.5f1" %}<br>
    {% include emoji.html name="csharp" text="C#" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="ショットライン"
    image="games/shotline/shotline_title.png"
    scale="チーム制作"
    members="11人"
    dev_env=dev_env
    platform="iPad mini"
    dev_period="2021/4/23 ～ 2021/9/28<br>制作約200時間"
    award="ゲームクリエイター甲子園2021<br>「ミクシィ賞」"
    links=links
%}

## ゲーム概要

### コンセプト

ショットラインは、自由自在に射線を描くことができる、新感覚の見下ろし型対戦シューティングゲームです。対戦相手もプレイヤーとなり、サーバーを用いてのマッチングおよびリアルタイムでの対戦となります。

### アピールポイント

このゲームは、東京ゲームショウ2021への出展作品を意図して制作を行いました。

私自身の初の試みとして、モバイルでの3Dシューティング、通信を用いたリアルタイム対戦、様々な自動化・効率化など、多くのことに挑戦しました。

また、ゲームクリエイター甲子園2021にも応募を行った結果、射線を自ら描いて攻撃するマルチプレイヤーという斬新さが評価され、株式会社ミクシィ様よりミクシィ賞をいただくことができました。

{% include clear.html %}

## 担当箇所

このゲームではメインプログラマーとして、設計から基本部分の実装、他プログラマーのタスク管理の他、リアルタイム通信を実現するためのバックエンド実装を担当しました。

### 射線の描画

{% include image.html image="games/shotline/shotline_work_line.png" caption="オレンジ色の線がLineRendererでの射線" %}

{% include source_code_link.html link1="https://github.com/letconst/shotline/blob/main/Assets/Users/Endo/Scripts/ShotLine/ShotLineDrawer.cs" %}

本ゲームのコンセプトである、自由に描ける射線の実装を行いました。画面中央のプレイヤーから指でスワイプすることで線が描画されます。UnityのLineRendererを用いて実現しました。描いた射線は射撃を行うまで画面上に固定されるという仕様のため、ワールド座標に配置されるLineRendererをプレイヤーの移動に合わせて動かす点で苦労しました。

{% include clear.html %}

### メッセージウィンドウUI

{% include image.html image="games/shotline/shotline_work_message_window.png" caption="実際にゲーム内で表示されるメッセージウィンドウ" %}

{% include source_code_link.html link1="https://github.com/letconst/shotline/blob/main/Assets/Users/Endo/Scripts/UI/SystemUIManager.cs" %}

選択項目の確認やエラーの際に表示されるメッセージウィンドウの実装を行いました。実装にあたり、メッセージ内容や閉じたときの処理は表示時にUIオブジェクトへ反映させるだけで良いと思ったため、表示をつかさどるマネージャークラス自体には`MonoBehaviour`を継承せず、`static`クラスとして実装しました。表示する際は、マネージャークラスのメソッドにパラメータを渡して呼ぶだけで可能にしています。

{% include clear.html %}

### オーバーヘッド削減

{% include image.html image="games/shotline/shotline_work_overhead.png" %}

{% include source_code_link.html link1="https://github.com/letconst/shotline/blob/main/Assets/Users/Endo/Scripts/Utils/ManagedEventCaller.cs" %}

Unityの`Start()`や`Update()`といったイベントメソッドは、記述するだけでオーバーヘッドが発生することが知られています。今回はパフォーマンスへの意識が求められる3Dのモバイルゲームということもあり、その一環として削減に取り組んでみました。`MonoBehaviour`スクリプトに指定のInterfaceを実装し、その参照を所定のインスペクターに渡す簡易的なものですが、実行する順番を制御できるなどのメリットも生まれました。

{% include clear.html %}

## 動画

### プレイ動画

準備中

### 受賞の瞬間

{% include youtube.html url="https://www.youtube.com/embed/74gPiQ0GQ4E?start=4671" %}

---

# ゲームサーバー

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/letconst/shotline-server'>リポジトリ</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="nodejs" text="Node.js v14" -%}<br>
    {% include emoji.html name="js" text="JavaScript" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="ゲームサーバー"
    scale="個人制作"
    members="1人"
    dev_env=dev_env
    dev_period="2021/6/11 ～ 2021/9/28<br>制作約50時間"
    links=links
%}

## 概要

このゲームでは、先述の通りマルチプレイヤーでの対戦ができます。それを実現するべく、バックエンドサーバーの実装を私1人で担当しました。

ゲームの企画当初、シューティングは行うが、敵となる対象をAIとするのか、他のプレイヤーとするのか、定まっていませんでした。議論を重ねた結果、やはり他の人と戦えたほうが絶対面白いという結論に至りました。チーム内でサーバーサイドを扱えるプログラマーはいませんでしたが、Node.jsに以前から触れていた私は、その実装に全く想像がつかないほどではなかったため、制作に取り掛かることとなりました。

## 担当箇所

バックエンドサーバーの実装全般を担当しました。クライアント側の実装を並行していたり、限られた制作期間だったため、レイテンシ考慮等の至らない点はありますが、マッチング→対戦→勝敗の一通りの機能実装を行いました。

### 設計

{% include image.html image="games/shotline/shotline_work_server_flow.png" width="250px" caption="通信フローを洗い出す際に作成したシーケンス図" %}

実装を始める前に、まずは1プレイの通信の流れを洗い出しました。他クライアントとのマッチングから始まり、対戦中に同期する対象の選定や、その同期をどのようなアプローチで実現するかなど、慎重に進めました。

そのため、実装の順序をあらかじめ考慮でき、試行錯誤しつつもスムーズな開発ができたと感じています。

### 通信データ構造

今回通信を行うにあたって、1回の通信データに何のデータなのかを識別するためのイベントタイプを必ず含むようにしています。イベントごとに必要なパラメータを変数として定義し、クライアントとサーバー間ではそれをJSONとしてやり取りさせました。

JSONスキーマの定義までは至りませんでしたが、処理を容易に切り分けて実装することができました。

{% include clear.html %}

### ルームマッチング

{% include image.html image="games/shotline/shotline_work_room_matching.png" caption="ゲーム内のルーム選択画面" %}

{% include source_code_link.html link1="https://github.com/letconst/shotline-server/blob/main/modules/Room.js" %}

複数組でのプレイを実現するため、マッチングをルームの選択式にしました。サーバー上ではルームごとにインスタンスが存在し、ゲーム上でのアイテム生成や、ラウンド進行をつかさどるなどの管理を担っています。

ルーム選択画面には、サーバー上の全ルームが表示されます。ルームは最低2つが常に存在し、必要に応じてプレイヤーが増やすことができます。対戦が終わると自動的に削除されますが、何らかの理由で削除が行われなかった場合の対策として、一定時間通信がないルームは自動的に破棄されるよう施しています。

{% include clear.html %}

---

# Discordボット

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/letconst/shotline-discord-bot'>リポジトリ</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="nodejs" text="Node.js v14" -%}<br>
    {% include emoji.html name="js" text="JavaScript" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="Discordボット"
    scale="個人制作"
    members="1人"
    dev_env=dev_env
    dev_period="2021/6/9 ～ 2021/9/22<br>制作約30時間"
    links=links
%}

## 概要

主なチームの連絡手段であったDiscordのサーバーに独自のボットを作成・導入し、ルーチンワークの自動化などの作業効率化を図りました。

このボットは、完全に私個人の興味本位で作成したものでしたが、チームメンバーにも使ってもらえたりと良い結果になったと感じています。

{% include clear.html %}

## 担当箇所

### ルーチンワークの自動化

{% include image.html image="games/shotline/shotline_work_bot_command.png" caption="サーバー内で利用できるコマンドと実行ログ" %}

{% include source_code_link.html link1="https://github.com/letconst/shotline-discord-bot/tree/main/modules/discord/interactions" %}

制作を進める中で、ゲームサーバーの制御やiOS端末へのビルド実行の作業を1箇所で操作したいと思い、チームで利用していたDiscordサーバーにコマンドを用意しました。

自分だけでなくサーバーに参加しているメンバー全員が実行できるため、展示当日に私が対応できないタイミングでゲームサーバーの再起動が必要になった際、お客様を待たせることなく案内することができました。

{% include clear.html %}

### 通知機能

{% include image.html image="games/shotline/shotline_work_bot_notify.png" %}
{% include image.html image="games/shotline/shotline_work_bot_activity.png" %}

{% include source_code_link.html link1="https://github.com/letconst/shotline-discord-bot/blob/main/modules/common/routes/onNotify.js" link2="https://github.com/letconst/shotline-discord-bot/blob/main/modules/common/routes/onSetActivity.js" %}

自動化だけでなく、時間のかかるクラウドビルドからデプロイサービスへのアップロード完了通知も実装することで、実機確認までの時間の最適化を図りました。

また、ゲームサーバーの稼働状況をボットアカウントのゲームアクティビティから確認できるようにもしました。

{% include clear.html %}
