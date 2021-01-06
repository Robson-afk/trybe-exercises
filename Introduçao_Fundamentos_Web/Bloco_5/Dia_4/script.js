window.onload = function() {
  // background-color
  
  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let i = 0; i < backgroundColorButtons.length; i += 1) {
    backgroundColorButtons[i].addEventListener("click", function(event) {
      console.log(event.target)
      setBackgroundColor(event.target.innerHTML)
    })
  }

  function setBackgroundColor(color) {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
    localStorage.setItem("backgroundColor", color)
  }
  
  // font-color

  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let i = 0; i < fontColorButtons.length; i += 1) {
    fontColorButtons[i].addEventListener("click", function(event) {
      setFontColor(event.target.innerHTML)
    })
  }
  function setFontColor(color) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.color = color
    }
    localStorage.setItem("fontColor", color)
  }

  // font-size

  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let i = 0; i < fontSizeButtons.length; i += 1) {
    fontSizeButtons[i].addEventListener("click", function(event) {
      setFontSize(event.target.innerHTML)
    })
  }

  function setFontSize(size) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontSize = size
    }
    localStorage.setItem("fontSize", size)
  }

  // line-height

  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let i = 0; i < lineHeightButtons.length; i += 1) {
    lineHeightButtons[i].addEventListener("click", function(event) {
      setLineHeight(event.target.innerHTML)
    })
  }

  function setLineHeight(height) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.lineHeight = height
    }
    localStorage.setItem("lineHeight", height)
  }

  // font-family

  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let i = 0; i < fontFamilyButtons.length; i += 1) {
    fontFamilyButtons[i].addEventListener("click", function(event) {
      setFontFamily(event.target.innerHTML)
    })
  }

  function setFontFamily(family) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontFamily = family
    }
    localStorage.setItem("fontFamily", family)
  }

  // Função de Chamada
/*
  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setFontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if (fontSize) setFontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) setLineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) setFontSize(fontFamily)
  }

  initialize()*/
}