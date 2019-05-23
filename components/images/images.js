function initiateImages(){
    //neatImageOverlay();
}

function neatImageOverlay() {
    var neatImages = document.getElementsByClassName('neat-img-overlay');
    for (let i = 0; i < neatImages.length; i++) {
        //Accout for the differences in div display sizes
        var ratio = neatImages[i].offsetWidth / neatImages[i].offsetHeight;
        console.log(ratio);
        //The image, width and heights.
        var img = neatImages[i].querySelector('img')
        var imgW = img.width, imgH = img.height;

        //Multiply against the ratio to be sure to factor for it
        if (imgW > imgH * ratio) { img.setAttribute("style", 'height:100% !important;'); console.log("width") }
        else { img.setAttribute("style", 'width:100% !important;'); console.log("height")}
    }
}