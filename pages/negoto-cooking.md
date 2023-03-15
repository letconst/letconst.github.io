---
title: 寝言COOKING
---

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/letconst/NegotoCooking'>リポジトリ</a>" %},
    {% include emoji.html name="dl" text="<a href='https://github.com/letconst/NegotoCooking/releases/tag/v1.0.0'>ダウンロード</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="unity" text="Unity 2019.2.21f1" %}<br>
    {% include emoji.html name="csharp" text="C#" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="寝言COOKING"
    image="games/negoto/negoto_title.jpg"
    scale="チーム制作"
    members="14人"
    dev_env=dev_env
    platform="Windows"
    dev_period="2020/5/22 ～ 2020/11/7<br>制作約200時間"
    links=links
%}

## ゲーム概要

### ストーリー

とある三ツ星レストランで働くテクヤ君。勤務してから5年経過するので「そろそろ秘伝の料理を教えて欲しい」と師匠に聞いても教えてくれません。ため息を付きながら帰る支度をしていたら、寝ていた師匠が断片的ながら、料理のレシピをつぶやき始めました！もしかしたら秘伝の料理が作れるかもしれない！そう思いテクヤ君はキッチンへ向かった…

### コンセプト

寝言COOKINGは、料理の楽しさとステルスのスリルを融合したステルスクッキングアクションゲームです。レストランの師匠が放つ寝言をもとに、物音を最小限に抑えつつ秘伝の料理の再現を目指します。

### アピールポイント

このゲームは、東京ゲームショウ2020への出展作品を意図して制作を行いました（新型コロナウイルス感染症の影響により、校内にて制作展を開催）。

私にとって、初めての本格的なチーム制作となりました。当時はわからないことだらけの中、試行錯誤を地道に繰り返していました。

ゲームとして課題点を多く残したままプロジェクトは終了となってしまいました。しかし、プレイヤー操作やアイテム管理、ギミック制御などの実装を行い、私個人としてはたくさんの経験値を積み重ねることができた場でもあります。

## 担当箇所

### 師匠の寝言表示処理の実装

{% include image.html image="games/negoto/negoto_work_negoto.png" caption="実際に寝言が表示されている様子" %}

{% include source_code_link.html link1="https://github.com/letconst/NegotoCooking/blob/master/Assets/Endo/Scripts/Master/NegotoController.cs" link2="https://github.com/letconst/NegotoCooking/blob/master/Assets/Endo/Scripts/Master/NegotoManager.cs" %}

このゲームの肝となる寝言の表示処理の実装を担当しました。

プレイヤーが近寄ることで徐々に表示されたり、ゲーム進捗に応じて内容が切り替わったり、その内容がぼかされたりを制御します。そのすべてをまとめて記述している荒っぽさはありますが、ゲームの重要な部分なので仕様に基づいた実装に意識をして実装しました。

### アイテムのインベントリ制御の実装

{% include image.html image="games/negoto/negoto_work_inventory.png" caption="冷蔵庫を開いたときのインベントリ。右下にはプレイヤーのインベントリが常に表示されている" %}

{% include source_code_link.html link1="https://github.com/letconst/NegotoCooking/tree/master/Assets/Endo/Scripts/Item/Inventory" %}

プレイヤーなどがアイテムを保有するための、アイテムインベントリの制御実装を担当しました。

ゲーム内ではプレイヤーと冷蔵庫がその機能を持ち、お互いに受け渡しができる仕組みとなっています。

また、本制作ではこれらの管理に`ScriptableObject`を利用し、調理シーンをまたいでも内容を保持することを実現している他、Unityエディターのインスペクター上から直接値を編集できるため、デバッグも容易となりました。
