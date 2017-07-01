var text='<p>IMG_0</p><p>first--abc</p><p>IMG_1</p><p>second--efg</p><p>IMG_2</p><p>three--xyz</p>';
var lists=['123.jpg','234.png','456.jpg'];
for(var i=0;i<lists.length;i++){
    text=text.replace('IMG_'+i,lists[i])
}
console.log(text)