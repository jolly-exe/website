function download(url, fileName) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        var link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
        link.download = fileName;
        link.click();
      })
  }
function fn1(){
  var url = new URL(window.location.href)
  var test = url.searchParams.get('text');
  alert("text: " + test);
}