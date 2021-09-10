let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [55.75198619547685, 37.6072381401977],
   zoom: 14,
   controls: [],
 });
 
 let coords = [
  [55.74963840542429,37.60408386239617],
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: './img/icons/mark.svg',
     iconImageSize: [58, 73],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);