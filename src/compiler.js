function parse(cv) {
 c = cv.toString().split(" :: ")
 v = c[0].split(" -> ")
 switch(v[0].replace(/\s/g,'')) {
  // Heading 1
  case "h1":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h1>" + c[1] + "</h1>"
     return output;
     break;
    default:
     output = "<h1 " + v[1] + ">" + c[1] + "</h1>"
     return output;
     break;
   }
  // Heading 2
  case "h2":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h2>" + c[1] + "</h2>"
     return output;
     break;
    default:
     output = "<h2 " + v[1] + ">" + c[1] + "</h2>"
     return output;
     break;
   }
  // Heading 3
  case "h3":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h3>" + c[1] + "</h3>"
     return output;
     break;
    default:
     output = "<h3 " + v[1] + ">" + c[1] + "</h3>"
     return output;
     break;
   }
  // Heading 4
  case "h4":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h4>" + c[1] + "</h4>"
     return output;
     break;
    default:
     output = "<h4 " + v[1] + ">" + c[1] + "</h4>"
     return output;
     break;
   }
  // Heading 5
  case "h5":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h5>" + c[1] + "</h5>"
     return output;
     break;
    default:
     output = "<h5 " + v[1] + ">" + c[1] + "</h5>"
     return output;
     break;
   }
  // Heading 6
  case "h6":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h6>" + c[1] + "</h6>"
     return output;
     break;
    default:
     output = "<h6 " + v[1] + ">" + c[1] + "</h6>"
     return output;
     break;
   }
  // Paragraph
  case "p":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<p>" + c[1] + "</p>"
     return output;
     break;
    default:
     output = "<p " + v[1] + ">" + c[1] + "</p>"
     return output;
     break;
    }
  // Span
  case "span":
    switch(v[1]) {
     case undefined:
     case null:
      switch(c[1]) {
       case undefined:
       case null:
        output = "<span>"
        return output;
        break;
       default:
        output = "<span>" + c[1]
        return output;
        break;
      }
    default:
     switch(c[1]) {
      case undefined:
      case null:
       output = "<span " + v[1] + ">"
       return output;
       break;
      default:
       output = "<span " + v[1] + ">" + c[1]
       return output;
       break;
     }
    }
  // Img
  case "img":
   switch(v[1]) {
    case undefined:
    case null:
     output = `<img src='${c[1]}' />`
     return output;
     break;
    default:
     output = `<img src='${c[1]}' ${v[1]} />`
     return output;
     break;
    }
  // a 
  case "a":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<a>" + c[1] + "</a>"
     return output;
     break;
    default:
     output = "<a " + v[1] + ">" + c[1] + "</a>"
     return output;
     break;
    }
  // Button
  case "button":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<button>" + c[1] + "</button>"
     return output;
     break;
    default:
     output = "<button " + v[1] + ">" + c[1] + "</button>"
     return output;
     break;
    }
  // Input
  case "input":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<input/>"
     return output;
     break;
    default:
     output = "<input " + v[1] + "/>"
     return output;
     break;
    }
  // Textarea
  case "textarea":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<textarea>" + c[1] + "</textarea>"
     return output;
     break;
    default:
     switch(c[1]) {
      case null:
      case undefined:
       output = "<textarea " + v[1] + "></textarea>"
       return output;
       break;
      default:
       output = "<textarea " + v[1] + ">" + c[1] + "</textarea>"
       return output;
       break;
     }
    }
  // Abbr
  case "abbr":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<abbr>" + c[1] + "</abbr>"
     return output;
     break;
    default:
     output = "<abbr " + v[1] + ">" + c[1] + "</abbr>"
     return output;
     break;
    }
   // Linebreak
   case "/br/":
    output = "<br>"
    return output;
    break;
   // Meta Tags
   case "meta":
    switch(v[1]) {
     case undefined:
     case null:
      output = ""
      meta = document.getElementsByTagName("head")[0].appendChild("meta")
      return output;
      break;
     default:
      output = ""
      meta = document.getElementsByTagName("head")[0].appendChild("meta")
      meta[v[1]] = c[1]
      return output;
      break;
    }
   // External Resource Links
   case "link":
    switch(v[1]) {
     case undefined:
     case null:
      output = ""
      link = document.getElementsByTagName("head")[0].appendChild("link")
      return output;
      break;
     default:
      output = ""
      link.rel = v[1]
      link.href = v[1]
      return output;
      break;
    } 
   // Style for Body
   case "bodystyle":
    switch(v[1]) {
     case undefined:
     case null:
      output = ""
      return output;
      break;
     default:
      output = ""
      document.getElementsByTagName("body")[0].style = v[1]
      return output;
      break;
    }
   // Page Title
   case "title":
    output = "<title>" + c[1] + "</title>"
    return output;
    break;
   // Div
   case "div":
    switch(v[1]) {
     case undefined:
     case null:
      switch(c[1]) {
       case undefined:
       case null:
        output = "<div>"
        return output;
        break;
       default:
        output = "<div>" + c[1]
        return output;
        break;
      }
    default:
     switch(c[1]) {
      case undefined:
      case null:
       output = "<div " + v[1] + ">"
       return output;
       break;
      default:
       output = "<div " + v[1] + ">" + c[1]
       return output;
       break;
     }
    }
   // Script (External)
   case "script":
    switch(v[1]) {
     case undefined:
     case null:
      output = "<script></script>"
      return output;
      break;
     default:
      output = "<script " + v[1] + " /></script>"
      return output;
      break;
   }
   // Section Closer
   case "end":
    switch(c[1]) {
     case "div":
      output = "</div>"
      return output;
      break;
     case "span":
      output = "</span>"
      return output;
      break;
    }
   // Accidental blank space
   case "":
    output = ""
    return output;
    break;
   // Errors
   case undefined: 
   case null:
    output = "MISSING IDENTIFIERS"
    return output;
    break;
 }
}
