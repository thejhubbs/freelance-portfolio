function initiateImages(){
    neatImageOverlay();
}

function neatImageOverlay() {
    var neatImages = document.getElementsByClassName('neat-img-overlay');
    for (let i = 0; i < neatImages.length; i++) {
        //Accout for the differences in div display sizes
        var ratio = neatImages[i].offsetWidth / neatImages[i].offsetHeight;

        //The image, width and heights.
        var img = neatImages[i].querySelector('img')
        var imgW = img.width, imgH = img.height;

        //Multiply against the ratio to be sure to factor for it
        if (imgW > imgH * ratio) { img.setAttribute("style", 'height:100% !important;width:auto !important;'); }
        else { img.setAttribute("style", 'width:100% !important;height:auto !important;'); }
    }
}