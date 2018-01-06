const banner = document.querySelector('#page-banner');
console.log('banner: ', banner);

banner.nodeName
banner.nodeType
console.log('banner.nodeType: ', banner.nodeType);
console.log('banner.nodeName: ', banner.nodeName);

console.log('banner.hasChildNodes(): ', banner.hasChildNodes());

let cloneBanner = banner.cloneNode();
console.log('cloneBanner: ', cloneBanner);
cloneBanner = banner.cloneNode(true);
console.log('cloneBanner: ', cloneBanner);
