# ギミックフィールド

{% capture links_raw -%}
    {% include emoji.html name="github" text="<a href='https://github.com/letconst/gimmick-field-public'>リポジトリ</a>" %}
{% endcapture %}
{% capture dev_env %}
    {% include emoji.html name="unity" text="Unity 2020.2.5f1" %}<br>
    {% include emoji.html name="csharp" text="C#" %}
{% endcapture %}

{% assign links = links_raw | join: "," %}

{% include game_info.html
    header="ギミックフィールド"
    image="games/gimmick/gimmick_title.png"
    scale="チーム制作"
    members="18人"
    dev_env=dev_env
    platform="Nintendo Switch"
    dev_period="2021/10/8 ～ 2022/2/11<br>制作約180時間"
    links=links
%}

## ゲーム概要

### コンセプト

ギミックフィールドは、自らの動きをゲームに反映させ、自由な発想で攻略することを面白さとした3Dアクションゲームです。攻略条件を複数用意することで組み合わせなどをプレイヤーに考慮させ、自分の攻略法を見つけ出すところに重きをおいています。

### アピールポイント

このゲームは、卒業・進級制作展「We are TECH.C. 2022」への展示を意図して制作を行いました。

Nintendo Switchという自身初のコンシューマーをプラットフォームとして、Joy-Conによるジャイロや加速度のセンサーを用いたゲームとの一体感に挑戦しました。本制作を通し、市場にある体感型をコンセプトとするゲームがなぜ楽しいのか、そしていかにその目標への到達が難しいかを認識させられるものとなりました。

プレイヤーはJoy-Conを左右の手でそれぞれ持ち、ZL/ZRを押す（握る形にする）ことでモノが掴めたり、あるいは振ることで投げるや振りほどきを行えたり、実際の動きに基づいた操作感になっています。

## 担当箇所

### アクション処理の基底部分の実装

{% include image.html image="games/gimmick/gimmick_work_outline.png" caption="アクション可能なモノに視点が合うと、白いアウトラインが表示される" %}

{% include source_code_link.html link1="https://github.com/letconst/gimmick-field-public/blob/main/Assets/Users/Endo/Scripts/Action/PlayerActionController.cs" %}

掴む等のアクションを実現するにあたり、共通の操作になるためアクション対象用のInterfaceの定義や、それを実装した`MonoBehaviour`の認識処理を実装しました。このInterfaceを実装するだけでアクション可能と識別され、ZL/ZRの押す/離すで所定の処理が実行されます。ゲーム中では、投げることのできる石や両手で掴んで開ける大扉などで利用されています。

また、画面中央のカーソルに視点が合っているものには、わかりやすくアウトラインを表示するよう施しました。

### パフォーマンスへの意識

このゲームではパフォーマンス最適化の一環として、いくつか諸策を講じました。

テクスチャには、SpriteAtlasを利用したドローコールの削減やテクスチャのサイズを必要最低限にし、ASTC圧縮に設定することによる使用メモリの軽減。

インゲームにおいては、パーティクルやSEのオブジェクトプーリング化、ライトにはリアルタイムを極力使わずにベイクする、オクルージョンカリングを用いるなどしました。

限られた時間での制作だったため実測まではできていませんが、ゲーム開発当初と比べると、最終的に出来上がったゲームでは体感で快適に遊べるものになりました。

## プレイ動画

{% include youtube.html url="https://www.youtube.com/embed/z4Ul0D5kSQU" %}
