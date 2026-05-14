# kaki-jun

KanjiVGのデータを使用して、日本語の漢字の筆順アニメーションを表示するシンプルなWebコンポーネント（`<kaki-jun>`）です。

このプロジェクトは[kanjivganimate](https://github.com/nihongodera/kanjivganimate)のフォークです。

## デモ

[**ライブデモ**](https://code4fukui.github.io/kaki-jun/)

## 特徴

- **簡単な組み込み**: 1つの`script`タグとカスタム要素だけで、HTMLに漢字アニメーションを追加できます。
- **自動アニメーション**: コンポーネントの読み込み時に、筆順が自動的にアニメーション再生されます。
- **インタラクティブ**: 文字をクリックすると、アニメーションが再再生されます。
- **複数文字のサポート**: タグ内に複数の文字（文字列）を配置すると、それらが順番に表示されます。
- **依存関係なし**: 利用にあたってビルド手順やパッケージマネージャーは不要です。

## 使い方

1. HTMLファイルに`script`タグを追加します。
2. `<kaki-jun>`カスタム要素を使用し、表示したい漢字をタグ内に配置します。

```html
<script type="module" src="https://code4fukui.github.io/kaki-jun/kaki-jun.js"></script>

<kaki-jun>福井県鯖江市</kaki-jun>
```

## カスタマイズ

各文字は、デフォルト幅`100px`のインラインSVGとしてレンダリングされます。CSSを使用することで、サイズやその他のプロパティを簡単に上書きできます。

```html
<style>
  kaki-jun svg {
    width: 80px;
    height: 80px;
    border: 1px solid #eee;
    margin: 4px;
  }
</style>

<kaki-jun>永</kaki-jun>
```

## 仕組み

このコンポーネントは、`kanjivg.tagaini.net`にある公開SVGファイルリポジトリを通じて、[KanjiVGプロジェクト](https://github.com/KanjiVG/kanjivg)から文字データを動的に取得します。そのため、コンポーネントを動作させるにはインターネット接続が必要です。

## 謝辞

- **KanjiVG**: すべての漢字のベクターグラフィックスおよび筆順データの提供元。
- **kanjivganimate**: このプロジェクトのベースとなったオリジナルのアニメーションライブラリ。

## ライセンス

kaki-junおよびそのデータソースであるKanjiVGは、Creative Commons Attribution-Share Alike 3.0ライセンスの下で公開されています。
