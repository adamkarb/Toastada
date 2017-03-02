# Toastada
Vanilla Javascript toast notifications for your application. The goal of toastada is to provide a ligthweight javascript solution to creating your own custom notification system. By removing external dependencies, we can have the smallest possible library that works with all modern browsers.

## Getting started
#### [Install from npm](https://www.npmjs.com/package/toastada)
```
npm install --save toastada
```

## Basics of use
In order to create a toastada notification, just invoke one of the 4 supported methods and pass a custom message as the sole argument. For example,
```
toastada.success('You did it! Great job!');

toastada.info('Here is some information before you proceed.');

toastada.warning('Warning! You are about to delete important data!');

toastada.error('Oh no! Something went wrong. Please try again.');
```
In order for all of the toast notifications to be visible, you will need to configure the toast classes via the `toast.options` object that you can see below. These classes will be applied to their respective toast types, so you can style your toasts however you please! [View the demo](http://adamkarb.github.io/toastada-demo) for a live example. Take note of the use of the options object and the CSS classes. Feel free to copy the example CSS as you see fit.

## Options
Toastada supports configuration right out of the box.  The available options can be accessed and set via `toastada.options` and include:

| Option   | Description | Default  |
|:-------------:|:-------------:|:-----:|
| prependTo     | The dom element that the toast notification will be prepended to. | `document.body.childNodes[0]` |
|  lifeSpan  | The duration in milliseconds that the toast notification will appear on the page.      |   `4000` (ms) |
| position | The position of the toast notifications on the page.  (Currently only default supported) | `top-right` |
| animate | Whether or not the toast notification should animate on exit. | `false` |
| animateDuration | The length of time in milliseconds the toast notification should animate before being removed from the DOM. | `0` |
| classes | Object specifying the classes associated with each type of toast notification. | See below |
| classes.container | The class name of the container that all of the toast notifications will be prepended to. | `toast-container` |
| classes.animate | The name of the class that will be applied to all of the toast notifications as their duration expires and they begin to animate. | `toast-exit` |
| classes.default | The class name that will be applied to all toast notifications. | `toast` |
| classes.success | The class name that will be applied to all toast notifications invoked using `toastada.success(message)`. | `toast-success` |
| classes.info | The class name that will be applied to all toast notifications invoked using `toastada.info(message)`. | `toast-info` |
| classes.warning | The class name that will be applied to all toast notifications invoked using `toastada.warning(message)`. | `toast-warning` |
| classes.error | The class name that will be applied to all toast notifications invoked using `toastada.error(message)`. | `toast-error` |

## [View demo](http://adamkarb.github.io/toastada-demo)
