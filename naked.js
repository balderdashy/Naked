stripCss();
//document.body.onload = stripCss;

function stripCss() {
	var targetelement='link';
	var targetattr='href';
	var allsuspects=document.getElementsByTagName(targetelement)
	for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(".css")!=-1) {
			allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
		}
	}
}