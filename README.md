# Simplix
[![Build status](https://ci.appveyor.com/api/projects/status/x0aj5p66dv1rw3tx?svg=true)](https://ci.appveyor.com/project/JSSRDRG/simplix) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Browser build on chromium &amp; electron.

## Built With

* [Electron](https://electronjs.org/) - Cross-platform framework

## Road Map

#### General
- [ ] Tabbed browsing

#### Bugs

## Changelog

Notable changes in new Simplix versions will be documented here.

### 0.0.2
* Added a loading spinner when the page is loading.
* Page title will now correctly be updated.
* Added window resize region around the window.
* Bumped Electron to 3.0.7
* When you close a tab another tab will be set active.

### 0.0.1
* Bumped Electron to 3.0.3
* Scroll bounce added for macOS.
* [Security] Disabled ```window.eval``` .
* Changed webview id to ```view${id}```.

### 0.0.1-alpha.2
* Fixed macOS fullscreen bug, titlebar margin-left was incorrect when in fullscreen.
* Fixed tab text color transition bug.
* Added dynamic tab item size, will shrink when window gets smaller.

### 0.0.1-alpha.1
* Added titlebar (Windows & MacOS).
* Tabbed browsing.

##### License [MIT](https://github.com/JSSRDRG/simplix/blob/master/LICENSE)
