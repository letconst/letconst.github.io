# ビケイム・ア・ロケット

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/letconst/became-a-rocket-public'>リポジトリ</a>" %},
    {% include emoji.html name="game" text="<a href='https://letconst.github.io/became-a-rocket/'>プレイ</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="unity" text="Unity 2021.2.15f1" %}<br>
    {% include emoji.html name="csharp" text="C#" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="ビケイム・ア・ロケット"
    image="games/became/became_title.png"
    image_width="170px"
    scale="チーム制作"
    members="3人"
    dev_env=dev_env
    platform="ブラウザ・Windows"
    dev_period="2022/7/7 ～ 2023/2/8<br>制作約150時間"
    award="株式会社バンダイナムコスタジオ<br>『GYAAR Studio』PRプロジェクト ゲーム制作部門 入賞"
    links=links
%}

## ゲーム概要

### コンセプト

ビケイム・ア・ロケットは、ギャー君というキャラクターがフライボードを操作して宇宙を目指すゲームです。行く手を阻む風や隕石などの障害物を乗り越え、燃料を管理しながらハイスコアを目指します。

### アピールポイント

このゲームは、株式会社バンダイナムコ様より、同社のインディーゲームレーベルである「[GYAAR Studio](https://www.bandainamcostudios.com/gyaarstudio/)」のPRを目的としてお話を頂き、制作を行いました。

いくつかの審査を経て、滋慶学園グループが主催する「2022 JIKEI COM Game & e-Sports SHOW」にて展示するとともに、本PRプロジェクトのゲーム制作部門において入賞を収めることができました。

{% include clear.html %}

## 担当箇所

このゲームでは、プログラマーとしては私一人のみで制作を行いました。すべての設計・実装を一人で行ったため、多くの時間を費やしましたが、結果としてカジュアルに楽しめるものが作れたと思います。

<!-- TODO: もう少し項目増やす -->

### ギミックの実装

{% include source_code_link.html
    link1="https://github.com/letconst/became-a-rocket-public/blob/main/Assets/Scripts/Gimmick/GimmickHandlerBase.cs"
    link2="https://github.com/letconst/became-a-rocket-public/tree/main/Assets/Scripts/Interface"
%}

このゲームに登場する障害物や回復アイテムといった、いわゆるギミックは、複数実装することが開発当初から決まっていたため、基底クラスを定義して効率的な実装を目指しました。

また、一部機能をInterfaceとして定義することで、その実装を行うだけで処理がなされる仕組みにするなど、オブジェクト指向を意識した実装を行いました。

### ギミックの自動生成

{% include image.html image="games/became/became_work_gimmick_generation.png" caption="スコアごとのギミック生成テーブルの定義" %}

{% include source_code_link.html
    link1="https://github.com/letconst/became-a-rocket-public/blob/main/Assets/Scripts/Gimmick/GimmickGenerator.cs"
    link2="https://github.com/letconst/became-a-rocket-public/blob/main/Assets/Scripts/Gimmick/GimmickPool.cs"
%}

ハイスコアを競うエンドレスなゲームであるため、ギミックを生成し続ける実装を行いました。

現在のスコアに応じて生成テーブルが切り替わり、その情報をもとに生成を行っています。また、使われなくなったギミックをプーリングして再利用することで、パフォーマンスにも配慮しました。

## ギャラリー

{% include gallary_header.html %}
    {% include image.html image="games/became/became_gallary_info.jpg" caption="卒業・進級制作展にて掲示されたプロジェクト概要" %}
    {% include image.html image="games/became/became_gallary_display.jpg" caption="2022 JIKEI COM Game & e-Sports SHOWでの展示の様子" %}
{% include gallary_footer.html %}
