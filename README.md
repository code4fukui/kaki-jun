# kaki-jun

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple Web Component (`<kaki-jun>`) for displaying animated Japanese kanji stroke orders using data from KanjiVG.

This project is a fork of [kanjivganimate](https://github.com/nihongodera/kanjivganimate).

## Demo

[**Live Demo**](https://code4fukui.github.io/kaki-jun/)

## Features

-   **Simple Integration**: Add kanji animations to your HTML with a single script tag and a custom element.
-   **Automatic Animation**: Stroke order animates automatically when the component loads.
-   **Interactive**: Click on any character to replay its animation.
-   **Multi-Character Support**: Place a string of characters inside the tag to display them in sequence.
-   **Zero Dependencies**: No build step or package manager required for use.

## Usage

1.  Add the script tag to your HTML file.
2.  Use the `<kaki-jun>` custom element and place the desired kanji inside it.

```html
<script type="module" src="https://code4fukui.github.io/kaki-jun/kaki-jun.js"></script>

<kaki-jun>福井県鯖江市</kaki-jun>
```

## Customization

Each character is rendered as an inline SVG with a default width of `100px`. You can easily override the size and other properties with CSS.

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

## How It Works

The component dynamically fetches character data from the [KanjiVG project](https://github.com/KanjiVG/kanjivg) via their public SVG file repository at `kanjivg.tagaini.net`. An internet connection is required for the component to function.

## Acknowledgements

-   **KanjiVG**: The source for all kanji vector graphics and stroke order data.
-   **kanjivganimate**: The original animation library this project is based on.

## License

kaki-jun and its data source, KanjiVG, are released under the Creative Commons Attribution-Share Alike 3.0 license.