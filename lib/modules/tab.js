// Require modules.
const $ = require('./../modules/shorts.js')

// Keep reference of the tab array.
let tabList = {
  tabArray: [],
  activeTab: undefined
}

class Tab {
  // Tab constructor function.
  constructor (id, url) {
    this.id = id
    this.url = url
    this.title = ''
    this.favicon = ''

    // Create webviews div.
    Tab.createContainer()
  }

  static add () {
    // Create unique id for Tab.
    let uuid = Math.random().toString(8).substr(2, 8)
    // Make a new class.
    tabList.tabArray['tab' + uuid] = new Tab(uuid, 'https://google.nl')
  }

  // Return an array with all tabs.
  static get list () {
    return tabList.tabArray
  }

  // Return the tab object the user currently sees.
  static get active () {
    return tabList.activeTab
  }

  static createContainer () {
    let children = $('#app-web-container').children
    let containerPresent = false
    // Check if #webviews is a child of #app-web-container.
    for (let i = 0; i < children.length; i++) {
      // If id is #webviews is then set presents to true.
      if (children[i].id === 'webviews') {
        containerPresent = true
      }
    }
    // If containerPresent is false then create it.
    if (containerPresent === false) {
      let container = document.createElement('div')
      container.id = 'webviews'
      $('#app-web-container').appendChild(container)
    }
  }

  static get list () {
    return tabList.tabArray
  }
}

module.exports = Tab