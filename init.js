/**
 * Build context menu
 */
chrome.contextMenus.create({
	"title": "View naked link...",
	"contexts":['link'],
	"onclick": openLink
})

/**
 * Open page
 */
function openLink(info, tab) {
	var destination = info.linkUrl;
	chrome.tabs.create({
		'url': destination
	}, getNaked);
}

/**
 * Strip CSS when the tab has finished loading
 */
function getNaked(tab) {
	//	 TODO: Hide content until loading is complete
	chrome.tabs.executeScript(tab.id, {
		//code: "document.body.style.display='none'"
		file: 'naked.js'
	});

//	chrome.tabs.onUpdated.addListener(function( tabId , info ) {
//		if ( info.status == "complete" &&
//			tabId == tab.id) {
//			stripCss();
//		}
//	});
}

function stripCss() {
	alert("Stripping css");
	var targetelement='link';
	var targetattr='css';
	var allsuspects=document.getElementsByTagName(targetelement)
	for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
		alert("Iterated through element "+i+" / "+allsuspects.length+"!");
		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null
			&& allsuspects[i].getAttribute(targetattr).indexOf("c")!=-1) {
			alert("Removed element!");
			allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
		}
	}
}