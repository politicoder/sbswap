# Slidebars Swap

Slidebars Swap extends [Adam Smith's Slidebars](http://plugins.adchsm.me/slidebars/) to display multiple content panels for an app-like interface on sites. The panels can include text, images, menus - anything that works with a standard Slidebars installation.

## Usage

- Download and install [Slidebars](https://github.com/adchsm/Slidebars) as usual. Remember to include the CSS and initialize the script. Include `slidebars.swap.js` after Slidebars. No additional initialization is needed.

- Place your content panels in either of your `sb-slidebar` divs inside of a div wrapper with the class `sb-swap-panel` and a unique ID.

#### Example

```
<div class="sb-slidebar sb-right sb-style-overlay">
  <div class="sb-swap-panel" id="one">Content for panel one</div>
  <div class="sb-swap-panel" id="two">Content for panel two</div>
</div>
```

- On any element that you want to act as a toggle for a particular panel, add `data-sbswap="theID"`, where `theID` is the ID of that panel.

#### Example

```
<button data-sbswap="one">Toggle panel one</button>
<button data-sbswap="two">Toggle panel two</button>
```

All done! When any element with a `data-sbswap` property is clicked, Slidebars Swap will close any open Slidebars, swap out their content for the panel chosen, and re-open with the correct panel. For ease of styling, it will automatically add a class of `sb-active-control` to all elements that toggle the currently open panel and remove the class when it is closed.