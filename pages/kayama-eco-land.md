---
title: かやまエコランド
---

{% capture links_raw -%}
    {% include emoji.html name="googleplay" text="<a href='https://play.google.com/store/apps/details?id=jp.co.kayamakogyo.kayamaecoland'>Google Play</a>" %},
    {% include emoji.html name="appstore" text="<a href='https://apps.apple.com/jp/app/id6446668966'>App Store</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="unity" text="Unity 2021.2.15f1" %}<br>
    {% include emoji.html name="csharp" text="C#" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="かやまエコランド"
    image="games/kayama/kayama_title.jpg"
    scale="チーム制作"
    members="9人"
    dev_env=dev_env
    platform="モバイル"
    dev_period="2022/8/25 ～ 2023/3/10<br>制作約100時間"
    links=links
%}

## ゲーム概要

### コンセプト

かやまエコランドは、ゲームを通してゴミや環境問題などのSDGsに関する事柄を学ぶことを目的としたゲームです。内容としては3つのミニゲームが収録され、それぞれ個別にSDGsのテーマに沿ったゲームとなっています。

### アピールポイント

このゲームは、株式会社加山興業様より、主に小学生へ向けてSDGsをゲームで学ばせることを目的としてお話をいただき、制作を行いました。

収録されている3つのミニゲームは、それぞれ1年生が制作を行い、私はそのサポートや1つのゲームアプリとしての統合作業を担当しました。

制作したゲームは一般の方にも遊んでもらいたいという企業様の意向により、Google PlayおよびApp Storeでリリースが行われています。

## ギャラリー

{% include gallary_header.html %}
    {% include image.html image="games/kayama/kayama_gallary_info.jpg" caption="卒業・進級制作展にて掲示されたプロジェクト概要" %}
    {% include image.html image="games/kayama/kayama_gallary_display.jpg" caption="卒業・進級制作展での展示の様子" %}
{% include gallary_footer.html %}
