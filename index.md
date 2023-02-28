# Profile

<div class="profile">
    <img src="/assets/images/profile/me.jpg" width="200px">
    <span class="profile-name">遠藤 長流</span>
    <dl>
        <dt>出身</dt>
        <dd>神奈川県</dd>
        <dt>生年月日</dt>
        <dd>2000年4月5日</dd>
        <dt>学校</dt>
        <dd>
            東京デザインテクノロジーセンター専門学校<br>
            スーパーIT科 スーパーゲームクリエイター専攻<br>
            <span class="supper right">2023年度卒業見込み</span>
        </dd>
    </dl>
</div>

{% include emoji.html name="github" text="[@letconst](https://github.com/letconst)" %}

学校では、Unityを用いたゲームプログラミングを学び、主にチームでのゲーム制作を行っています。バックエンド側の技術にも興味があり、リアルタイムシューティングのマルチプレイヤーゲーム制作にも挑戦しました。最近、ラーメン屋への訪店が連続100週を超えました。

## Works

在学中に制作したゲームの一覧です。

<dl class="works">
    <dt>2年</dt>
    <dd>
        <ul>
            <li><a href="/pages/negoto-cooking">寝言COOKING</a></li>
            <li><a href="/pages/song-for-ai">AIの歌</a></li>
        </ul>
    </dd>
    <dt>3年</dt>
    <dd>
        <ul>
            <li><a href="/pages/shotline">ショットライン</a></li>
            <li><a href="/pages/gimmick-field">ギミックフィールド</a></li>
        </ul>
    </dd>
    <dt>4年</dt>
    <dd>
        <ul>
            <li><a href="/pages/knight-of-heavenly-palace">天上宮殿の騎士</a></li>
            <li><a href="/pages/became-a-rocket">ビケイム・ア・ロケット</a></li>
        </ul>
    </dd>
</dl>

## My skills

{% capture cs %}{% include emoji.html name='csharp' text='C#' %}{% endcapture %}
{% capture js %}{% include emoji.html name='js' text='JavaScript' %}{% endcapture %}
{% capture ts %}{% include emoji.html name='ts' text='TypeScript' %}{% endcapture %}
{% capture php %}{% include emoji.html name='php' text='PHP' %}{% endcapture %}
{% capture python %}{% include emoji.html name='python' text='Python' %}{% endcapture %}
{% capture cpp %}{% include emoji.html name='cpp' text='C++' %}{% endcapture %}
{% capture java %}{% include emoji.html name='java' text='Java' %}{% endcapture %}
{% capture lua %}{% include emoji.html name='lua' text='Lua' %}{% endcapture %}

{% capture nodejs %}{% include emoji.html name='nodejs' text='Node.js' %}{% endcapture %}
{% capture unity %}{% include emoji.html name='unity' text='Unity' %}{% endcapture %}
{% capture ue4 %}{% include emoji.html name='ue' text='Unreal Engine 4' %}{% endcapture %}
{% capture github %}{% include emoji.html name='github' text='GitHub' %}{% endcapture %}
{% capture docker %}{% include emoji.html name='docker' text='Docker' %}{% endcapture %}

{% capture centos %}{% include emoji.html name='centos' text='CentOS' %}{% endcapture %}

{% include skill_table_header.html %}
    {% include skill_table_row.html
       th="言語" th_rowspan=8
       td1=cs td2="3年" td3="主にUnityでの開発で利用しているが、WPFアプリケーションの作成経験もあり。" %}
    {% include skill_table_row.html
       td1=js td2="5年" td3="ウェブサイトの機能拡張やツール作成、Discordボットやゲームサーバーなど、幅広い用途で利用。" %}
    {% include skill_table_row.html
       td1=ts td2="2年" td3="オブジェクト指向の言語に触れてから、触発されてこちらも利用。まだ本格的には活用できていない。" %}
    {% include skill_table_row.html
       td1=php td2="2年" td3="授業にて利用。ウェブアプリケーションなどを作成。" %}
    {% include skill_table_row.html
       td1=python td2="2年" td3="ツール作成や授業にて利用。ウェブスクレイピングツールなどを作成。" %}
    {% include skill_table_row.html
       td1=cpp td2="1年" td3="授業にて利用。コンソールアプリケーションなどを作成。" %}
    {% include skill_table_row.html
       td1=java td2="1年" td3="授業にて利用。簡単な読み書きができる程度。" %}
    {% include skill_table_row.html
       td1=lua td2="1年" td3="サイトの機能拡張にて利用。" %}

    {% include skill_table_row.html
       th="フレームワーク<br>・<br>ソフトウェア" th_rowspan=5
       td1=nodejs td2="4年" td3="上述のJSでのツール作成などで利用。" %}
    {% include skill_table_row.html
       td1=unity td2="3年" td3="2D・3D問わず、アクションや音ゲー、シューティングといったジャンルのゲーム制作経験がある。また、最近はエディタ拡張を用いた作業の効率化・自動化や、パフォーマンスを意識した実装にも取り組んでいる。" %}
    {% include skill_table_row.html
       td1=ue4 td2="1年" td3="授業にて利用。課題として、簡単な2Dおよび3Dゲームを作成した。" %}
    {% include skill_table_row.html
       td1=github td2="5年" td3="コミットからPRやIssueの作成、Actionsによる自動化など、基本的な扱いが可能。GUIのみ経験あり。" %}
    {% include skill_table_row.html
       td1=docker td2="2年" td3="主に、JS/TSでの開発・運用で利用。Dockerfileやdocker-composeの記述、CLI上での操作など、基本的な部分は一通り触れているが、まだまだ勉強中。" %}

    {% include skill_table_row.html
       th="OS" th_rowspan=1
       td1=centos td2="2年" td3="コマンドラインを操作する憧れから触り始めた。基本的なコマンド操作は扱えているつもり。自宅のNASがCentOSベースで、その上でNode.js環境を構築して実行したり、Dockerを無理やり導入するなど、普段は試みた遊びをしている。" %}
{% include skill_table_footer.html %}

## My hobbies

### サイクリング

{% include image.html image="profile/hobby_cycling.jpg" caption="横須賀基地に訪れた際の写真" %}

ロードバイクに乗って遠征することが好きです。<br>
平塚の自宅から、横須賀基地や相模湖、小田原城などに訪れました。通学時は、駅までの往復約14kmをマウンテンバイクで通っています。

{% include clear.html %}

### 同人音楽CD収集

{% include image.html image="profile/hobby_cd.jpg" caption="今までに集めたCDの一部" %}

年に数回開催される同人誌即売会へ、主に同人音楽CDを好んで参加しています。3000以上ある曲たちは、作業のお供として重宝しています。

{% include clear.html %}
