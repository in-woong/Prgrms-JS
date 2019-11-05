export const $ = selector => document.querySelector(selector)

export function setAttr(elem, attrName, value) {
  const attr = document.createAttribute(attrName)
  attr.value = value
  elem.setAttributeNode(attr) 
}

export function hasProperty(obj, property) {
  return obj && obj.hasOwnProperty(property)
}

export function validateArray(data) {
  if(!Array.isArray(data)) throw new Error('data must be Array')
}

export function validateConstructor() {
  if(!this) throw new Error(`call this function with 'new'`)
}

export function validateState(states, props) {
  return states.filter(state => {
    for(const prop of props) {
      if(!hasProperty(state, prop)) 
        return false
    }
    return true
  })
}

export function isStateEqual(curState, nextState) {
  return JSON.stringify(curState) === JSON.stringify(nextState)
}