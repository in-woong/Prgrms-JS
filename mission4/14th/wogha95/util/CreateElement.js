export default function (tag, attributeKey1 = null, attributeValue1 = null, attributeKey2 = null, attributeValue2 = null) {
  const $ = document.createElement(tag);
  if(attributeKey1) $.setAttribute(attributeKey1, attributeValue1);
  if(attributeKey2) $.setAttribute(attributeKey2, attributeValue2);
  return $;
}