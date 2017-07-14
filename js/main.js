/*
    This code was rushed by xIAlexaderIx 
    but made with <3 for the BABYMETAL community
    (Ain't Nobody Got Time For Commenting Dat Code)
*/

$(window).on('load', function () {
    $(".loader").fadeOut("slow");
    $('body').removeClass('pageOverflow');
    new WOW().init();
});

$(document).ready(function () {
    $.material.init();
    smoothBtnScroll();
    releaseStats();
    responsiveStats();
    hideYoWallet();
    gimmeCoffe();
    cryptoPop();
    focusPocus();
});

function releaseStats() {
    $.getJSON('https://api.github.com/repos' + '/' + org + '/' + repo + '/' + 'releases', function (github) {

        var firstDelorean = $.grep(github, function (json) {
            return json.target_commitish == firstDeloreanBranch;
        });

        var firstDeloreanLastUpdate;
        try {
            firstDeloreanLastUpdate = new Date(firstDelorean[0].assets[0].updated_at);
            firstDeloreanLastUpdate = firstDeloreanLastUpdate.getDate() + '/' + firstDeloreanLastUpdate.getMonth() + '/' + firstDeloreanLastUpdate.getFullYear();
        } catch (err) {
            console.log('Error: ' + err.message);
        }

        var firstDeloreanENG;
        var firstDeloreanES;
        var firstDeloreanDL;
        try {
            firstDeloreanENG = firstDelorean[0].assets[0].browser_download_url;
            firstDeloreanES = firstDelorean[0].assets[1].browser_download_url;
            firstDeloreanDL = firstDelorean[0].assets[2].browser_download_url;
        } catch (err) {
            console.log('Error: ' + err.message);
        }

        var firstDeloreanCount = 0;
        var firstDeloreanCountENG;
        var firstDeloreanCountES;
        var firstDeloreanCountMIX;
        try {
            for (var a = 0; a < firstDelorean.length; a++) {
                for (var b = 0; b < firstDelorean[a].assets.length; b++) {
                    firstDeloreanCount += firstDelorean[a].assets[b].download_count;
                }
                firstDeloreanCountENG = firstDelorean[a].assets[0].download_count;
                firstDeloreanCountES = firstDelorean[a].assets[1].download_count;
                firstDeloreanCountMIX = firstDelorean[a].assets[2].download_count;
            }
        } catch (err) {
            console.log('Error: ' + err.message);
        }

        $(".td-rn-download-eng").attr("href", firstDeloreanENG);
        $(".td-rn-download-spa").attr("href", firstDeloreanES);
        $(".td-rn-download").attr("href", firstDeloreanDL);
        $(".td-rn-git").attr("href", 'https://github.com/' + '/' + org + '/' + repo + '/' + 'tree' + '/' + firstDeloreanBranch);

        $('.firstDelorean-eng').text(firstDeloreanCountENG + firstDeloreanCountMIX);
        $(".firstDelorean-es").text(firstDeloreanCountES + firstDeloreanCountMIX);
        $(".firstDelorean-total").text(firstDeloreanCount);
        $(".firstDelorean-date").text(firstDeloreanLastUpdate);


        var secondDelorean = $.grep(github, function (json) {
            return json.target_commitish == secondDeloreanBranch;
        });

        var secondDeloreanLastUpdate;
        try {
            secondDeloreanLastUpdate = new Date(secondDelorean[0].assets[0].updated_at);
            secondDeloreanLastUpdate = secondDeloreanLastUpdate.getDate() + '/' + secondDeloreanLastUpdate.getMonth() + '/' + secondDeloreanLastUpdate.getFullYear();
        } catch (err) {
            console.log('Error: ' + err.message);
        }

        var secondDeloreanENG;
        var secondDeloreanES;
        var secondDeloreanDL;
        try {
            secondDeloreanENG = secondDelorean[0].assets[0].browser_download_url;
            secondDeloreanES = secondDelorean[0].assets[1].browser_download_url;
            secondDeloreanDL = secondDelorean[0].assets[2].browser_download_url;
        } catch (err) {
            console.log('Error: ' + err.message);
        }

        var secondDeloreanCount = 0;
        var secondDeloreanCountENG;
        var secondDeloreanCountES;
        var secondDeloreanCountMIX;
        try {
            for (var c = 0; c < secondDelorean.length; c++) {
                for (var d = 0; d < secondDelorean[c].assets.length; d++) {
                    secondDeloreanCount += secondDelorean[c].assets[d].download_count;
                }
                secondDeloreanCountENG = secondDelorean[c].assets[0].download_count;
                secondDeloreanCountES = secondDelorean[c].assets[1].download_count;
                secondDeloreanCountMIX = secondDelorean[c].assets[2].download_count;
            }
        } catch (err) {
            console.log('Error: ' + err.message);
        }

        $(".td-bn-download-eng").attr("href", secondDeloreanENG);
        $(".td-bn-download-spa").attr("href", secondDeloreanES);
        $(".td-bn-download").attr("href", secondDeloreanDL);
        $(".td-bn-git").attr("href", 'https://github.com/' + '/' + org + '/' + repo + '/' + 'tree' + '/' + secondDeloreanBranch);

        $('.secondDelorean-eng').text(secondDeloreanCountENG + secondDeloreanCountMIX);
        $(".secondDelorean-es").text(secondDeloreanCountES + secondDeloreanCountMIX);
        $(".secondDelorean-total").text(secondDeloreanCount);
        $(".secondDelorean-date").text(secondDeloreanLastUpdate);

    });
}

function responsiveStats() {

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
}

function smoothBtnScroll() {

    $("#redNight").click(function () {
        $('html, body').animate({
            scrollTop: $("#tokyo-dome-rednight").offset().top
        }, 2000);
    });

    $("#blackNight").click(function () {
        $('html, body').animate({
            scrollTop: $("#tokyo-dome-blacknight").offset().top
        }, 2000);
    });
}

function hideYoWallet() {
    $(".td-rn-br").attr("href", firstDeloreanBluray);
    $(".td-bn-br").attr("href", secondDeloreanBluray);
}

function gimmeCoffe() {
    $(".pp").attr("href", paypalMeCoffee);
    $(".qr").attr("src", qrBitcoinWallet);
    $(".walletLink").attr("href", 'https://blockexplorer.com/address/' + bitcoinCoffee);
    $('.wallet').text(bitcoinCoffee);
}

function cryptoPop() {
    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        offset: '128px 0px',
        trigger: 'focus',
        placement: 'left',
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function (e) {
        e.preventDefault();
    });
}

function focusPocus() {
    document.addEventListener('scroll', function () {
        $(':focus').blur();
    }, true);

    $('[rel="popover"]').on('shown.bs.popover', function () {
        $('.coffee').addClass('coffee-hover');
    });

    $('[rel="popover"]').on('hidden.bs.popover', function () {
        $('.coffee').removeClass('coffee-hover');
    });
}
