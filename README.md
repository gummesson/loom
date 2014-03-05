# Loom: an OOCSS library for Stylus

[Loom](https://github.com/gummesson/loom) is an [OOCSS](http://oocss.org/)-inspired library with a small but useful collection of helpers, objects and utilities for [Stylus](http://learnboost.github.io/stylus/).

It uses a modified [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) notation for the class names and the `is-` prefix for different states.

## Installation

~~~ bash
bower install loom --save
~~~

## Usage

Loom is primarily designed for importing the objects that you need and to leave out the rest. However, it does come with an `index.styl` file that you can use to import the whole library at one fell swoop.

It uses a hash to set the base values used throughout the library:

~~~ javascript
loom = {}

loom.base = {
  fontSize: 1rem,
  spacingUnit: 1.5rem,
  wrapWidth: 64rem
}

loom.breakpoint = {
  palm: 'screen and (max-width: 480px)',
  lap: 'screen and (min-width: 769px)',
  desk: 'screen and (min-width: 1024px)',
  useWidths: true
}

loom.width = {
  'one-of-one': 100%,
  'three-of-four': 75%,
  'two-of-three': 66.666%,
  'one-of-two': 50%,
  'one-of-three': 33.333%,
  'one-of-four': 25%
}
~~~

**Tip:** use a tool like [Pixrem](https://github.com/robwierzbowski/node-pixrem) in your build process to support older browsers when using the defaults.

## Core

### box-sizing

The `box-sizing` file is used for globally applying `box-sizing: border-box;` to all elements.

It needs to be included in order for Loom to work properly.

~~~ scss
@import '<path>/loom/core/box-sizing'
~~~

**Tip:** use a tool like [autoprefixer](https://github.com/ai/autoprefixer) in your build process to add the appropriate vendor prefixes for the `box-sizing` property.

## Helpers

### lead

The `lead` object is used to make a typographic element slightly bigger than a normal paragraph.

~~~ html
<p class="lead">
  <!-- ... -->
</p>
~~~

### milli

The `milli` object is used to make a typographic element slightly smaller than a normal paragraph.

~~~ html
<p class="milli">
  <!-- ... -->
</p>
~~~

### micro

The `micro` object is used to make a typographic element much smaller than a normal paragraph.

~~~ html
<p class="micro">
  <!-- ... -->
</p>
~~~

### kilo

The `kilo` object is used to make a typographic element slightly bigger than a normal first-level heading.

~~~ html
<h1 class="kilo">
  <!-- ... -->
</h1>
~~~

### mega

The `mega` object is used to make a typographic element much bigger than a normal first-level heading.

~~~ html
<h1 class="mega">
  <!-- ... -->
</h1>
~~~

### giga

The `giga` object is used to make a typographic element significantly bigger than a normal first-level heading.

~~~ html
<h1 class="giga">
  <!-- ... -->
</h1>
~~~

## Objects

### space

The `space` object is used to add margins to the top and/or the bottom of an element.

~~~ html
<p class="space">
  <!-- ... -->
</p>

<p class="space--above">
  <!-- ... -->
</p>

<p class="space--below">
  <!-- ... -->
</p>
~~~

### cramp

The `cramp` object is used to remove margins from the top and/or the bottom of an element.

~~~ html
<p class="cramp">
  <!-- ... -->
</p>

<p class="cramp--above">
  <!-- ... -->
</p>

<p class="cramp--below">
  <!-- ... -->
</p>
~~~

### shh

The `shh` object is used to disguise anchor links to make them appear like the surrounding text.

~~~ html
<a class="shh" href="/">
  <!-- ... -->
</a>

<h1 class="shh">
  <a href="/">
    <!-- ... -->
  </a>
</h1>
~~~

### button

The `button` object is used to make an element into a button.

It depends on a modifier class for the actual styling.

~~~ html
<a class="button" href="/">
  <!-- ... -->
</a>

<button class="button">
  <!-- ... -->
</button>

<input class="button" type="button" value="Button">
~~~

### bare

The `bare` object is used to remove the styling from a list element.

~~~ html
<ul class="bare">
  <li>
    <!-- ... -->
  </li>
  <li>
    <!-- ... -->
  </li>
</ul>
~~~

### lineup

The `lineup` object is used to remove styling from a list element and to make the list items (and anchor links) into inline block elements.

It can also be used on non-list elements in conjunction with `.lineup__item`.

It depends on the `bare` object.

~~~ html
<ul class="lineup">
  <li>
    <!-- ... -->
  </li>
  <li>
    <a href="/">
      <!-- ... -->
    </a>
  </li>
</ul>

<div class="lineup">
  <div class="lineup__item">
    <!-- ... -->
  </div>
  <div class="lineup__item">
    <!-- ... -->
  </div>
</div>
~~~

### stack

The `stack` object is used to remove the styling from a list element and to make the list items (and anchor links) into block elements.

It can also be used on non-list elements in conjunction with `.stack__item`.

It depends on the `bare` object.

~~~ html
<ul class="stack">
  <li>
    <!-- ... -->
  </li>
  <li>
    <a href="/">
      <!-- ... -->
    </a>
  </li>
</ul>

<div class="stack">
  <div class="stack__item">
    <!-- ... -->
  </div>
  <div class="stack__item">
    <!-- ... -->
  </div>
</div>
~~~

### island

The `island` object is used to add paddings to an element and to make it into a block element.

~~~ html
<div class="island">
  <!-- ... -->
</div>

<div class="islet">
  <!-- ... -->
</div>

<div class="landmark">
  <!-- ... -->
</div>
~~~

### wrap

The `wrap` object is used to wrap the content inside an element and to centrally align the element.

~~~ html
<div class="wrap">
  <!-- ... -->
</div>
~~~

### clearfix

The `clearfix` object is used to clear all floats inside an element.

~~~ html
<div class="clearfix">
  <!-- ... -->
</div>
~~~

### media

The `media` object is used to place an image and text-like content side-by-side.

It depends on the the `clearfix` object.

~~~ html
<div class="media">
  <img class="media__figure" src="image.jpg" alt="">
  <p class="media__body">
    <!-- ... -->
  </p>
</div>

<div class="media">
  <img class="media__figure--rev" src="image.jpg" alt="">
  <p class="media__body">
    <!-- ... -->
  </p>
</div>
~~~

### grid

The `grid` object is used to build a grid-based layout.

It depends on the `clearfix` object and utilizes the `widths` utilities.

~~~ html
<div class="grid">
  <div class="grid__item">
    <!-- ... -->
  </div>
</div>
~~~

## Utilities

### widths

The `widths` utilities are used to set the width of an element. Using a predefined breakpoint prefix will make them context-sensitive.

#### one-of-one

~~~ html
<div class="one-of-one">
  <!-- ... -->
</div>

<div class="palm--one-of-one">
  <!-- ... -->
</div>

<div class="lap--one-of-one">
  <!-- ... -->
</div>

<div class="desk--one-of-one">
  <!-- ... -->
</div>
~~~

#### three-of-four

~~~ html
<div class="three-of-four">
  <!-- ... -->
</div>

<div class="palm--three-of-four">
  <!-- ... -->
</div>

<div class="lap--three-of-four">
  <!-- ... -->
</div>

<div class="desk--three-of-four">
  <!-- ... -->
</div>
~~~

#### two-of-three

~~~ html
<div class="two-of-three">
  <!-- ... -->
</div>

<div class="palm--two-of-three">
  <!-- ... -->
</div>

<div class="lap--two-of-three">
  <!-- ... -->
</div>

<div class="desk--two-of-three">
  <!-- ... -->
</div>
~~~

#### one-of-two

~~~ html
<div class="one-of-two">
  <!-- ... -->
</div>

<div class="palm--one-of-two">
  <!-- ... -->
</div>

<div class="lap--one-of-two">
  <!-- ... -->
</div>

<div class="desk--one-of-two">
  <!-- ... -->
</div>
~~~

#### one-of-three

~~~ html
<div class="one-of-three">
  <!-- ... -->
</div>

<div class="palm--one-of-three">
  <!-- ... -->
</div>

<div class="lap--one-of-three">
  <!-- ... -->
</div>

<div class="desk--one-of-three">
  <!-- ... -->
</div>
~~~

#### one-of-four

~~~ html
<div class="one-of-four">
  <!-- ... -->
</div>

<div class="palm--one-of-four">
  <!-- ... -->
</div>

<div class="lap--one-of-four">
  <!-- ... -->
</div>

<div class="desk--one-of-four">
  <!-- ... -->
</div>
~~~

### states

The `states` utilities are used for adding various state-based modifications to a block.

A state should be scoped to a specific context.

#### is-hidden

~~~ scss
.thing.is-hidden
  is-hidden()
~~~

#### is-visible

~~~ css
.thing.is-visible
  is-visible()
~~~

#### is-disabled

~~~ css
.thing.is-disabled
  is-disabled()

.thing.is-disabled
  is-disabled(true) /* Add opacity */
~~~

#### is-truncated

~~~ css
.thing.is-truncated
  is-truncated()
~~~

## Acknowledgements

- [Harry Roberts](http://csswizardry.com/) for the `lead`, `milli`, `micro`, `kilo`, `mega`, `giga`, `bare` and `island` objects.
- [Rowan Manning](http://rowanmanning.com/) for the `space`, `cramp`, `stack`, `lineup` and `shh` objects.
- [Nicolas Gallagher](http://nicolasgallagher.com/) for the `clearfix` object.
- [Nicole Sullivan](http://www.stubbornella.org/) for the `media` object.

## License

The MIT License (MIT)

Copyright (c) 2014 Ellen Gummesson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
