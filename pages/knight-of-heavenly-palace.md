# 天上宮殿の騎士

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/letconst/knight-of-heavenly-palace-public'>リポジトリ</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="unity" text="Unity 2021.2.15f1" %}<br>
    {% include emoji.html name="csharp" text="C#" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="天上宮殿の騎士"
    image="games/kohp/kohp_title.png"
    scale="チーム制作"
    members="16人"
    dev_env=dev_env
    platform="Nintendo Switch"
    dev_period="2022/4/22 ～ 2022/9/23<br>制作約200時間"
    links=links
%}

## ゲーム概要

### コンセプト

天上宮殿の騎士は、剣を投げて転移し、敵を討伐する二刀流体感型3Dアクションゲームです。Nintendo SwitchのJoy-Conを両手に持ち、ジャイロ機能を用いて剣を投げる照準を操作し、素早く振ることで攻撃ができます。このような操作感とすることで、アクションを行うゲームとの一体感を追求しました。

### アピールポイント

このゲームは、東京ゲームショウ2022への出展作品を意図して制作を行いました。

本制作を通して、Nintendo Switchをプラットフォームとしたゲーム開発の経験・学習を得ることができました。

{% include clear.html %}

## 担当箇所

このゲームでは、メインプログラマーとして設計や実装、他プログラマーのタスク管理などを行いました。本制作では、エディタ拡張も積極的に行うことで、パラメータ調整等を容易にすることにも取り組みました。

### イベント駆動を意識した実装

{% include image.html image="games/kohp/kohp_work_event.png" width="350px" caption="実際に記述したイベント型の定義と利用箇所" %}

{% include source_code_link.html
    link1="https://github.com/letconst/knight-of-heavenly-palace-public/blob/main/Assets/Users/Endo/Scripts/EventSystem/EventMessage.cs"
%}

本制作では、イベントの通知にUniRxのMessageBrokerを使用しました。スクリプト間の主なやり取り手段として採用したため、さらに効率的にPublishできるような形にしました。

イベント型は用意した所定の基底クラスを継承するようにし、そのインスタンスの取得を`new`で作成するのではなく、`static`メソッドから可能に。インスタンスもキャッシュするため、わずかながらパフォーマンス改善にも繋がったと思います。

{% include clear.html %}

### マスターデータの管理

{% include image.html image="games/kohp/kohp_work_master_data_1.png" width="350px" %}
{% include image.html image="games/kohp/kohp_work_master_data_2.png" width="350px" caption="実際のエディター画面（上: 魔物、下: プレイヤー）" %}

{% include source_code_link.html
    link1="https://github.com/letconst/knight-of-heavenly-palace-public/tree/main/Assets/Users/Endo/Scripts/MasterData"
%}

マスターデータを`ScriptableObject`で管理する機構、およびそれを編集するエディターウィンドウを作成しました。データの呼び出しはAddressablesを用いた非同期処理として行っています。またエディターでは、扱いの容易さ、そして効率性を重視し、1画面でデータの編集が完結するよう実現しました。

至らなかった点として、拡張性が挙げられます。新たな種類のマスターデータを追加するにはコードを書き換えなければならず、それを実現するには根本的な部分から変更しなくてはいけなかったため、未来を見据えた作りの大変さを実感しました。今後は拡張性も意識した実装を心がけます。

{% include clear.html %}

## プレイ動画

準備中

## ギャラリー

{% include gallary_header.html %}
    {% include image.html image="games/kohp/kohp_play_lobby.png" caption="依頼を受領するロビー" %}
    {% include image.html image="games/kohp/kohp_play_dragon.png" caption="火を吹くドラゴンに立ち向かう様子" %}
{% include gallary_footer.html %}
