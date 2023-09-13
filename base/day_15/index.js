const _document = { getElementById: function (id) { return { innerHTML: `` } } }
_document.getElementById("abc").innerHTML = 123