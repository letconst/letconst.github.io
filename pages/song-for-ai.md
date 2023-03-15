---
title: AIの歌
---

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/KURO-Games/songForAI'>リポジトリ</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="unity" text="Unity 2019.2.21f1" %}<br>
    {% include emoji.html name="csharp" text="C#" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="AIの歌"
    image="games/sfai/sfai_title.png"
    scale="チーム制作"
    members="18人"
    dev_env=dev_env
    platform="iPad mini"
    dev_period="2020/5/22 ～ 2021/2/13<br>制作約350時間"
    award="卒業・進級制作展<br>We are TECH.C. 2020<br>「優秀作品賞」"
    links=links
%}

## ゲーム概要

### コンセプト

AIの歌は、「音を紡いで世界を取り戻す」をキャッチコピーとしたリズムゲームです。楽器をモチーフとするキャラクターたちから誰を選ぶかによって、プレイの操作方法が変化するのが特徴です。

### アピールポイント

このゲームは、東京ゲームショウ2020への出展（新型コロナウイルス感染症の影響により、校内にて制作展を開催）、および卒業・進級制作展「We are TECH.C. 2021」への展示を意図して制作を行いました。

私は開発中盤からの参加でしたが、本制作を通して初のモバイルゲームの開発経験を積むことができました。その結果、卒業・進級制作展にて優秀作品賞を収め、後の制作モチベーションを大きく上げることに繋がりました。

{% include clear.html %}

## 担当箇所

このゲームでは、主に新たな演奏プレイ方法の実装を担当した他、既存の演奏プレイ実装の改修も行いました。

### 既存の演奏プレイ実装の改修

{% include source_code_link.html
    link1="https://github.com/KURO-Games/songForAI/blob/master/Assets/Users/Endo/Scripts/Notes/NotesGeneratorBase.cs"
    link2="https://github.com/KURO-Games/songForAI/blob/master/Assets/Users/Endo/Scripts/Notes/NotesJudgementBase.cs"
%}

仕様追加による演奏プレイ方法の追加実装に伴い、それまで1つのみであった既存の演奏方法の実装の改修を行いました。区分としては、ノーツの生成処理とタップ判定処理の部分です。

他の演奏でも同じ一定の処理を行うことを踏まえ、ノーツの生成やタップ判定などの既存部分の抽象クラス化から取り組みました。一部突貫的に記述した部分もあり、少々無理のある抽象化となったところは含まれますが、他の実装部分の変更を最小限に抑えた形で実現できたと感じています。

### 新たな演奏プレイ「弦楽器」の実装

{% include image.html image="games/sfai/sfai_work_violine.jpg" caption="弦楽器でのプレイの様子" %}

{% include source_code_link.html
    link1="https://github.com/KURO-Games/songForAI/blob/master/Assets/Users/Endo/Scripts/Notes/ViolinNotesGenerator.cs"
    link2="https://github.com/KURO-Games/songForAI/blob/master/Assets/Users/Endo/Scripts/Notes/ViolinNotesJudgement.cs"
%}

新たな演奏プレイ方法として追加された弦楽器と打楽器のうち、前者の「弦楽器」の実装を担当しました。

既存のプレイ方法「二重鍵盤」では、落ちてくるノーツをタイミング良くタップする単調なものに対し、弦楽器ではスライドノーツを触りつつ落ちてくるノーツもタップするという、比較的難易度の高い操作が求められるものになっています。

この「スライドノーツ」は既存操作にはないレーンをまたぐノーツで、実装に大変苦労しました。ノーツ生成部分で、ノーツ同士が繋がって見えるようにしなければいけなかったり、判定時もノーツを「始点に触る」「中間点は触れたまま」「終点で離す」などの種類をしなければならなかったり等々。

課題点は未だありますが、当時としては最大の壁となり得た、今も忘れぬ実装です。

## プレイ動画

{% include youtube.html url="https://www.youtube.com/embed/4fX7uEQ89sU" %}

## ギャラリー

{% include gallary_header.html %}
    {% include image.html image="games/sfai/sfai_gallary_music_selection.png" caption="楽曲選択画面" %}
    {% include image.html image="games/sfai/sfai_gallary_scenario.png" caption="シナリオパート" %}
    {% include image.html image="games/sfai/sfai_gallary_award.jpg" caption="卒業・進級制作展にていただいた賞状" %}
{% include gallary_footer.html %}
